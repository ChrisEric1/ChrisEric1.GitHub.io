import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode } from "react"

type AlertBoxProps = {
    type: "warn"|"info"|"danger"|"error"|"success",
    children?: ReactNode|string
}

let AlertBoxModules
export default class AlertBox extends React.Component<AlertBoxProps> {
    static defaultProps:AlertBoxProps = {
        type: "info",
        children: null
    }

    get modules(){
        return AlertBoxModules || (AlertBoxModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "Markdown" && e.default.defaultProps.parser).default
        ])
    }

    render(){
        const [
            Markdown
        ] = this.modules

        let wrap
        let children
        if(typeof this.props.children === "string"){
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: this.props.children
                }, Markdown.defaultProps)
            })
            children = wrap.props.children
        }else{
            wrap = Markdown.prototype.render.call({
                props: Object.assign({
                    className: "",
                    children: ""
                }, Markdown.defaultProps)
            })
            children = this.props.children
        }
        wrap.props.children = <div className={"lc-alert-box lc-alert-box-"+this.props.type}>
            <blockquote className="lc-blockquote">
                {children}
            </blockquote>
        </div>
        return wrap
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    children: "***Discord's*** **Markdown** _is_ [supported](https://google.com) or you can just insert your own react childs."
                }
            ], [
                {
                    type: "info"
                },
                {
                    type: "success"
                },
                {
                    type: "warn"
                },
                {
                    type: "error"
                }
            ])
            return AllPreviews
        })()
    }

    static help = {
        info: "You can insert markdown (as string) or normal react childs",
        warn: "All string will be interpreted as markdown. If you want raw string, pass an array with the string inside."
    }
}
let AllPreviews