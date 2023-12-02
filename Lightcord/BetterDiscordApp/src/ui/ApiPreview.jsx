// Good luck to read my code, Even me can't read it properly.

import { stat } from "fs"
import { uuidv4 } from "../modules/distant"
import webpackModules from "../modules/webpackModules"
import { remote } from "electron"
import MarginTop from "./margintop"

let formModule
export default class ApiPreview extends React.PureComponent {
    constructor(){
        super(...arguments)
        this.state = {
            states: []
        }
    }

    render(){
        if(!formModule)formModule = webpackModules.find(e => e.FormSection)
        /** 
         * @type {Function[]}
         */
        const allComponents = [...new Set(Object.keys(window.Lightcord.Api.Components).map(e => {
            return Object.keys(window.Lightcord.Api.Components[e]).map(k => window.Lightcord.Api.Components[e][k])
        }).flat())]
        return [
            <formModule.FormSection tag="h2" title="Lightcord's Api Availlable components">
                <formModule.FormText type="description" className="" selectable={false}>
                    These components are here for the plugin devs. They can quickly embed any component below with this panel.
                    <div style={{marginTop: "20px"}}></div>
                    <Lightcord.Api.Components.general.AlertBox type="info">All these components have error handling. If you want none, add `.original` after the component path.</Lightcord.Api.Components.general.AlertBox>
                    <Lightcord.Api.Components.general.AlertBox type="warn">We do not recommend modifying these component with plugins. Only do this if you know what you are doing.</Lightcord.Api.Components.general.AlertBox>
                </formModule.FormText>
                <MarginTop></MarginTop>
                <Lightcord.Api.Components.inputs.Button color="brand" look="outlined" size="medium" hoverColor="green" onClick={() => {
                    remote.shell.openExternal("https://lightcord.org/LightcordApi/")
                }} wrapper={false}>
                    Documentation
                </Lightcord.Api.Components.inputs.Button>
            </formModule.FormSection>,
            allComponents.map(comp => {
                const compName = comp.displayName || comp.name
                const compPath = `Lightcord.Api.Components.${Object.keys(window.Lightcord.Api.Components).find(e => window.Lightcord.Api.Components[e][compName])}.${compName}`
                return <ComponentPreview key={compPath} comp={comp} />
            })
        ]
    }

    get renders(){

    }
}

class ComponentPreview extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tab: "preview",
            elem: props.comp,
            options: {}
        }
    }

    render(){
        const comp = this.props.comp
        let AllPreviews = []
        if(comp.AllPreviews)AllPreviews = comp.AllPreviews
        let state = this.state
        let getProps = () => {
            let final = {}
            AllPreviews.forEach(category => {
                final[Object.keys(category[0])[0]] = category[0][Object.keys(category[0])[0]]
            })
            Object.keys(state.options).forEach(key => {
                final[key] = AllPreviews.find(e => e.find(e => e[key]))[state.options[key]][key]
            })
            return final
        }
        let renderPreview = () => {
            return <div style={{margin: "20px"}}>
                <div style={{
                    backgroundColor: "var(--background-secondary)", 
                    padding: "30px 30px", 
                    borderRadius: "8px"
                }} className="lc-tab-box-shadow">
                    {React.createElement(comp, getProps())}
                </div>
            </div>
        }
        let renderCode = () => {
            return <div style={{margin: "20px"}}>
                <div style={{
                    backgroundColor: "var(--background-secondary)", 
                    padding: "30px 30px", 
                    borderRadius: "8px"
                }} className="lc-tab-box-shadow">
                    <window.Lightcord.Api.Components.general.SettingSubTitle>
                        JSX
                    </window.Lightcord.Api.Components.general.SettingSubTitle>
                    <window.Lightcord.Api.Components.general.ErrorCatcher>
                        {React.createElement(() => {
                            return <window.Lightcord.Api.Components.general.CodeBlock language="jsx" content={generateCode("jsx")}/>
                        })}
                    </window.Lightcord.Api.Components.general.ErrorCatcher>
                    <window.Lightcord.Api.Components.general.SettingSubTitle>           
                        React
                    </window.Lightcord.Api.Components.general.SettingSubTitle>
                    <window.Lightcord.Api.Components.general.ErrorCatcher>
                        {React.createElement(() => {
                            return <window.Lightcord.Api.Components.general.CodeBlock language="js" content={generateCode("react")}/>
                        })}
                    </window.Lightcord.Api.Components.general.ErrorCatcher>
                </div>
            </div>
        }
        let getStrForProp = (value, compPath, lang) => {
            if(typeof value === "string"){
                return value
            }else if(typeof value === "boolean"){
                return String(value)
            }else if(typeof value === "function"){
                return value.toString()
            }else if(typeof value === "object"){
                if(value && value.$$typeof && (value.$$typeof === Symbol.for("react.element") || value.$$typeof === 0xeac7)){
                    if(compPath === "Lightcord.Api.Components.general.Tabs"){
                        if(lang === "react"){
                            return `React.createElement("div", {style: {
marginTop: "20px", marginBottom: "20px"
}},
React.createElement("div", {style: {
backgroundColor: "var(--background-secondary)",
padding: "30px 30px",
borderRadius: "8px"
}, className: "lc-tab-box-shadow" },
React.createElement(Lightcord.Api.Components.general.Title, null, "Preview tabs")
)
)`
                        }else if(lang === "jsx"){
                            return `<div style={{
marginTop: "20px", marginBottom: "20px"
}}>
<div style={{
    backgroundColor: "var(--background-secondary)", 
    padding: "30px 30px", 
    borderRadius: "8px"
}} className="lc-tab-box-shadow">
    <Lightcord.Api.Components.general.Title>Preview tabs</Lightcord.Api.Components.general.Title>
</div>
</div>`
                        }
                    }
                    return "Your components here."
                }
                return JSON.stringify(value, null, "    ")
            }else if(typeof value === "number"){
                return String(value)
            }
            return String(value)
        }
        let generateCode = function(lang){ // code formatting is hard
            const compName = comp.displayName || comp.name
            let categories = Object.keys(window.Lightcord.Api.Components)
            const compCategory = categories.find(e => window.Lightcord.Api.Components[e][compName])
            const compPath = `Lightcord.Api.Components.${compCategory}.${compName}`
            const props = getProps()

            if(lang === "jsx"){
                let propStrings = []
                let childrenProp = null
                Object.keys(props).forEach(key => {
                    if(key == "children"){
                        childrenProp = getStrForProp(props[key], compPath, lang)
                    }else{
                        let str = key+"="
                        if(typeof props[key] === "string"){
                            str += JSON.stringify(props[key])
                        }else{
                            str += `{${getStrForProp(props[key], compPath, lang)}}`
                        }
                        propStrings.push(str)
                    }
                })
                let openTag
                if(childrenProp){
                    openTag = `<${compPath} ${propStrings.join(" ")}>`
                    let closeTag = `</${compPath}>`
                    return `${openTag}\n    ${childrenProp}\n${closeTag}`
                }else{
                    openTag = `<${compPath} ${propStrings.join(" ")}/>`
                    return openTag
                }
            }else if(lang === "react"){
                let children = props.children || null
                delete props.children
                if(children && children.$$typeof && (children.$$typeof === Symbol.for("react.element") || children.$$typeof === 0xeac7)){
                    children = getStrForProp(children, compPath, lang)
                }
                let propStrings = []
                Object.keys(props).forEach(key => {
                    let visibleKey = /[^\w\d_]/g.test(key) ? JSON.stringify(key) : key
                    let str = visibleKey+": "
                    if(typeof props[key] === "string"){
                        str += JSON.stringify(props[key])
                    }else{
                        str += getStrForProp(props[key], compPath, lang).split("\n").map((str, i) => {
                            if(i === 0)return str
                            return "    " + str
                        }).join("\n")
                    }
                    propStrings.push(str)
                })
                let propObject = "{"
                if(propStrings.length){
                    propStrings.forEach((str, i) => {
                        let isLast = i === propStrings.length - 1
                        let isFirst = i === 0
                        if(!isFirst){
                            propObject += ","
                        }
                        propObject += "\n    "
                        propObject += str
                        if(isLast){
                            propObject +="\n}"
                        }
                    })
                }else{
                    propObject += "}"
                }
                let childrenData = typeof children === "string" && children.startsWith("React.createElement") ? children : JSON.stringify(children)
                return `React.createElement(${compPath}, ${propObject}, ${childrenData})`
            }
        }
        let help = comp.help || {}
        let info = help.info ? <window.Lightcord.Api.Components.general.AlertBox type="info">
            {help.info}
        </window.Lightcord.Api.Components.general.AlertBox> : null
        let warn = help.warn ? <window.Lightcord.Api.Components.general.AlertBox type="warn">
            {help.warn}
        </window.Lightcord.Api.Components.general.AlertBox> : null
        let danger = help.danger ? <window.Lightcord.Api.Components.general.AlertBox type="danger">
            {help.danger}
        </window.Lightcord.Api.Components.general.AlertBox> : null
        let error = help.error ? <window.Lightcord.Api.Components.general.AlertBox type="error">
            {help.error}
        </window.Lightcord.Api.Components.general.AlertBox> : null
        let success = help.success ? <window.Lightcord.Api.Components.general.AlertBox type="success">
            {help.success}
        </window.Lightcord.Api.Components.general.AlertBox> : null
        return (<div>
            <window.Lightcord.Api.Components.general.SettingsTitle>
                {comp.displayName || comp.name}
            </window.Lightcord.Api.Components.general.SettingsTitle>
            {info}
            {success}
            {warn}
            {error}
            {danger}
            {AllPreviews.map(category => {
                if(category[0].onClick)return null
                if(category[0].text)return null
                if(category[0].children)return null
                if(category.length === 1)return null
                
                let key = Object.keys(category[0])[0]
                return [
                    <window.Lightcord.Api.Components.general.SettingSubTitle>
                        {key}
                    </window.Lightcord.Api.Components.general.SettingSubTitle>,
                    <window.Lightcord.Api.Components.inputs.Dropdown options={category.map((e, index) => {
                        return {
                            value: "opt-"+index,
                            label: JSON.stringify(e[Object.keys(e)[0]])
                        }
                    })} value={"opt-"+(state.options[key] || "0")} onChange={(value) => {
                        this.setState({
                            options: Object.assign({}, state.options, {
                                [key]: (value.value || "0").replace("opt-", "")
                            })
                        })
                    }} searchable={true}/>,
                    <div style={{marginBottom: "8px"}}></div>
                ]
            })}
            <window.Lightcord.Api.Components.general.Tabs tabs={[{label: "Preview", id: "preview"}, {label: "Code", id: "code"}]} 
                active={state.tab} children={state.tab === "preview" ? renderPreview() : renderCode()} onChange={(tab) => {
                    this.setState({
                        tab
                    })
                }}/>
        </div>)
    }
}