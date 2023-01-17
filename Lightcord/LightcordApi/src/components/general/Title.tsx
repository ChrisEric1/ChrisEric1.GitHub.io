import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode } from "react"

type TitleProps = {
    children?: ReactNode,
    className?: string
}

let TitleModules
export default class Title extends React.Component<TitleProps> {
    constructor(props: TitleProps){
        super(props)
    }

    get modules(){
        return TitleModules || (TitleModules = [
            WebpackLoader.find(e => typeof e.colorStandard === "string"),
            WebpackLoader.find(e => typeof e.size32 === "string"),
            WebpackLoader.find(e => typeof e.h2 === "string")
        ])
    }

    render(){
        let [
            colorModule,
            sizeModule,
            titleModule
        ] = this.modules

        let props = this.props

        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h2} ${titleModule.defaultColor} ${titleModule.defaultMarginh2}`
        if(props.className)className += " "+props.className

        return React.createElement("h2", {className}, props.children)
    }
    
    static defaultProps:TitleProps = {
        children: null,
        className: null
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    children: "Example title"
                }
            ])
            return AllPreviews
        })()
    }
}
let AllPreviews