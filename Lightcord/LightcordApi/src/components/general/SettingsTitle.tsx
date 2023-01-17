import WebpackLoader from "../../modules/WebpackLoader"
import Title from "./Title"
import { ReactNode } from "react"

type SettingsTitleProps = {
    children?: ReactNode
    className?: string
}

let TitleModules
export default class SettingsTitle extends React.Component<SettingsTitleProps> {
    constructor(props: SettingsTitleProps){
        super(props)
    }

    get modules(){
        return TitleModules || (TitleModules = [
            WebpackLoader.find(e => typeof e.marginTop60 === "string")
        ])
    }

    render(){
        let [
            marginModule
        ] = this.modules

        let props = this.props

        let className = `${marginModule.marginTop60} ${marginModule.marginBottom20}`
        if(props.className)className =+ " "+props.className
        
        return React.createElement(Title, {className}, props.children)
    }

    static defaultProps:SettingsTitleProps = {
        children: [""],
        className: ""
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