import BDV2 from "../modules/v2";
import TextInput from "./components/textinput";

let classnames = []
function getClassName(name){
    let className = classnames.find(e => e.startsWith(name+"-"))
    if(className)return className
    className = BDModules.get(e => e[name])[0][name]
    classnames.push(className)
    return className
}

export default class TextInputSetting extends BDV2.reactComponent {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.onChange(this.props.id, value);
    }

    render() {
        let {text, info} = this.props.data;
        if(this.props.data.experimental){
            if(!classnames.find(e => e.startsWith("beta-"))){
                classnames.push(BDModules.get(e => e.beta && (!e.container && !e.userSettingsVoice))[0].beta)
            }
            info = [
                info,
                <sup className={getClassName("beta")}>(EXPERIMENTAL)</sup>
            ]
        }
        return <div className={"ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"}>
            <div className={"ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"}>
                <h3 key="title" className="ui-form-title h3 margin-reset margin-reset ui-flex-child">
                    {text}
                </h3>
                <TextInput key="input" onChange={this.onChange} value={this.props.value} placeholder={this.props.placeholder||null} />
            </div>
            <div className="ui-form-text style-description margin-top-4" style={{
                flex: "1 1 auto"
            }}>
                {info}
            </div>
        </div>
    }
}