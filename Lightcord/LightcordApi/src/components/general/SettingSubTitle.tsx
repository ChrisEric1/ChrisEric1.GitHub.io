import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode } from "react"
import Utils from "../../modules/Utils"

type SettingSubTitleProps = {
    children?: ReactNode
    className?: string
}

let TitleModules
export default class SettingSubTitle extends React.Component<SettingSubTitleProps> {
    static defaultProps:SettingSubTitleProps = {
        children: [],
        className: ""
    }

    get modules(){
        return TitleModules || (TitleModules = [
            WebpackLoader.find(e => typeof e.marginTop60 === "string"),
            WebpackLoader.findByUniqueProperties(["h5"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["size14"]),
            window.Lightcord.Api.WebpackLoader.findByUniqueProperties(["colorStandard"])
        ])
    }

    render(){
        let [
            marginModule,
            titleModule,
            sizeModule,
            colorModule
        ] = this.modules

        let props = this.props

        let className = `${colorModule.colorStandard} ${sizeModule.size14} ${titleModule.h5} ${marginModule.marginBottom4}`
        if(props.className)className =+ " "+props.className
        
        return React.createElement("h5", {className}, props.children)
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