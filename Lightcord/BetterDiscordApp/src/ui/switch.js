import BDV2 from "../modules/v2";
import Switch from "./components/switch";

let classnames = []
function getClassName(name){
    let className = classnames.find(e => e.startsWith(name+"-"))
    if(className)return className
    className = BDModules.get(e => e[name])[0][name]
    classnames.push(className)
    return className
}

export default class SwitchItem extends BDV2.reactComponent {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.props.checked = !this.props.checked;
        this.props.onChange(this.props.id, this.props.checked);
    }

    render() {
        let {text, info} = this.props.data;
        if(this.props.data.experimental){
            if(!classnames.find(e => e.startsWith("beta-"))){
                classnames.push(BDModules.get(e => e.beta && (!e.container && !e.userSettingsVoice))[0].beta)
            }
            info = [
                info,
                React.createElement("sup", {className: getClassName("beta")}, "(EXPERIMENTAL)")
            ]
        }
        return BDV2.react.createElement("div", {className: "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"},
            BDV2.react.createElement("div", {className: "ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"},
                BDV2.react.createElement("h3", {key: "title", className: "ui-form-title h3 margin-reset margin-reset ui-flex-child"}, text),
                BDV2.react.createElement(Switch, {key: "switch", onChange: this.onChange, checked: this.props.checked})
            ),
            BDV2.react.createElement("div", {className: "ui-form-text style-description margin-top-4", style: {flex: "1 1 auto"}}, info)
        );
    }
}