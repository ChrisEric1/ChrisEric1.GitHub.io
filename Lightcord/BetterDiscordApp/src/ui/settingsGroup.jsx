import {settingsCookie} from "../0globals";
import BDV2 from "../modules/v2";

import SettingsTitle from "./settingsTitle";
import Switch from "./switch";
import MarginTop from "./margintop";
import { useForceUpdate } from "../modules/hooks";

let formModule
let switchItem
let betaClassNames
export default class V2C_SettingsGroup extends BDV2.reactComponent {

    constructor(props) {
        super(props);

        this.state = {
            error: false
        }
    }

    renderOldSettings() {
        const {title, settings, button} = this.props;
        const buttonComponent = button ? BDV2.react.createElement("button", {key: "title-button", className: "bd-pfbtn", onClick: button.onClick}, button.title) : null;
        return [BDV2.react.createElement(SettingsTitle, {text: title}),
                buttonComponent,
                settings.map(setting => {
                    return BDV2.react.createElement(Switch, {id: setting.id, key: setting.id, data: setting, checked: settingsCookie[setting.id], onChange: (id, checked) => {
                        this.props.onChange(id, checked);
                        this.forceUpdate()
                    }});
                })];
    }

    componentDidCatch(err, errInfo){
        console.log(err, errInfo)
        this.setState({
            error: true
        })
    }

    render(){
        if(this.state.error){
            try{
                return this.renderOldSettings()
            }catch(e){
                console.error(e)
                return null
            }
        }else{
            try{
                if(!formModule)formModule = BDV2.WebpackModules.find(e => e.FormSection)
                if(!switchItem)switchItem = BDV2.WebpackModules.find(e => e.default && e.default.displayName === "SwitchItem")
                if(!betaClassNames)betaClassNames = BDV2.WebpackModules.find(e => e.beta && (!e.container && !e.userSettingsVoice))
                
                let children = []
                if(this.props.description){
                    children.push(<formModule.FormText type="description" selectable={false}>
                        {this.props.description}
                    </formModule.FormText>, <MarginTop></MarginTop>)
                }
                children.push(...this.props.settings.map(setting => {
                    let info = [
                        setting.text
                    ]
                    if(setting.experimental){
                        info.push(<sup className={betaClassNames.beta}>(EXPERIMENTAL)</sup>)
                    }
                    return React.createElement(() => {
                        const forceUpdate = useForceUpdate()
                        return <switchItem.default onChange={(val) => {
                            this.props.onChange(setting.id, val);
                            forceUpdate()
                        }} key={setting.id} value={settingsCookie[setting.id]} className={__SECRET_EMOTION__.css({
                            marginBottom: "20px"
                        })} disabled={false} hideBorder={false}
                            note={setting.info} tooltipNote={null}>
                            {info}
                        </switchItem.default>
                    })
                }))
                return <formModule.FormSection tag="h2" title={this.props.title}>
                    {children}
                </formModule.FormSection>
            }catch(e){
                console.error(e)
                setImmediate(()=>{
                    this.setState({
                        error: true
                    })
                })
                return null
            }
        }
    }
}