import components from "../components/components"
import Utils from "./Utils"
import { ComponentProps } from "react"
import uuid from "./uuid"
import TextInput from "../components/inputs/TextInput"

export default new class PluginUtilities {
    constructor(){}

    renderSettings(settings:SettingItem[]){
        let items = this.renderSettingsToReact(settings)
        let elem = React.createElement("div", {key: uuid()}, items)
        return Utils.ReactToHTMLElement(elem)
    }

    renderSettingsToReact(settings:SettingItem[]){
        let items = []
        settings.forEach(item => {
            
            if(typeof item !== "object")return items.push(item)
            if(item.props && "children" in item.props){
                if(!Array.isArray(item.props.children))item.props.children = [item.props.children]
                item.props.children = this.renderSettingsToReact(item.props.children)
            }
            if(!item.props)item.props = {}
            item.props.key = uuid()
            let component = Utils.getNestedProps(components, item.component)
            if(!component){
                let warning = new TextInput({
                    value: `Warning: No component was found for: "${item.component}". Please correct your code.`,
                    disabled: true,
                    error: `Warning: No component was found for: "${item.component}". Please correct your code.`
                }).render()
                items.push(warning)
                return
            }
            items.push(React.createElement(component, Object.create(item.props)))
        })
        return items
    }
}

type SettingItem = {
    component: string,
    props: ComponentProps<any>
}