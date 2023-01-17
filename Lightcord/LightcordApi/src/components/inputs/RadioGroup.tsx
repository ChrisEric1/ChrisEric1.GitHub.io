import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"
import Utils from "../../modules/Utils"


type RadioGroupProps = {
    options?: {
        color?: string,
        name: string,
        value: string,
        desc?: string
    }[],
    onChange?: (value: string) => void,
    value?: string,
    disabled?: boolean,
    size?: "small"|"medium",
    itemType?: "bar"|"panel",
    infoClassName?: string
}

let RadioGroupModule
export default class RadioGroup extends React.Component<RadioGroupProps, {value?: string}> {
    static defaultProps:RadioGroupProps = {
        options: [{
            value: "none",
            name: "No options",
            desc: "No options was passed to Choices. If you meant to display no options at all, please pass an empty array.",
            color: "#f04747"
        }],
        value: null,
        disabled: false,
        size: "medium",
        itemType: "bar",
        infoClassName: null,
        onChange: NOOP
    }
    constructor(props:RadioGroupProps){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            value: props.value
        }
    }

    onChange(ev){
        this.props.onChange(ev.value)
        this.setState({
            value: ev.value
        })
    }

    get modules(){
        return RadioGroupModule || (RadioGroupModule = [
            WebpackLoader.find(e => e.default && e.default.displayName === "RadioGroup").default
        ])
    }

    render(){
        let [
            RadioGroupComponent
        ] = this.modules

        let props = this.props
        return <RadioGroupComponent options={props.options} onChange={this.onChange} value={this.state.value} disabled={props.disabled} 
            size={RadioGroupComponent.Sizes[props.size.toUpperCase()]} itemType={RadioGroupComponent.ItemTypes[props.itemType.toUpperCase()]} 
            infoClassName={props.infoClassName}/>
    }

    get value():string|null{
        return this.state.value
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{
                options: [
                    {
                        value: "option1",
                        name: "Option 1",
                        desc: "description 1"
                    },
                    {
                        value: "option2",
                        name: "Option 2",
                        desc: "description 2"
                    },
                    {
                        value: "option3",
                        name: "Option 3",
                        desc: "description 3"
                    }
                ]
            }], [{
                value: "option1"
            }], [{
                disabled: false
            }, {
                disabled: true
            }], [{
                size: "medium"
            }, {
                size: "small"
            }], [{
                itemType: "bar"
            }, {
                itemType: "panel"
            }])
            return AllPreviews
        })()
    }
}
let AllPreviews