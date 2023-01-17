import WebpackLoader from "../../modules/WebpackLoader"
import NOOP from "../../modules/noop"
import Utils from "../../modules/Utils"

type TextInputProps = {
    name?: string,
    size?: "default"|"mini"
    disabled?: boolean,
    placeholder?: string,
    value?: string,
    error?: string,
    maxLength?: number,
    className?: string,
    inputClassName?: string
    id?: string,
    onChange?: (value: string, name: string, input: TextInput) => void,
    onFocus?: (ev, name: string, input: TextInput) => void,
    onBlur?: (ev, name: string, input: TextInput) => void
}

export function getInternalTextInput(){
    return TextInput.prototype.modules[0]
}

let TextInputModules
export default class TextInput extends React.PureComponent<TextInputProps, {value: string}> {
    hasSet: boolean
    constructor(props: TextInputProps){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)

        this.state = {
            value: props.value || ""
        }
    }

    static defaultProps:TextInputProps = {
        name: "",
        size: "default",
        disabled: false,
        placeholder: "",
        value: "",
        error: null,
        maxLength: 999,
        className: "",
        inputClassName: "",
        id: null,
        onChange: NOOP,
        onFocus: NOOP,
        onBlur: NOOP
    }

    get modules(){
        return TextInputModules || (TextInputModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "TextInput").default
        ])
    }

    onChange(value, name){
        this.hasSet = false
        this.props.onChange(value, name, this)
        if(this.hasSet)return // prevent event if the onChange has changed the value.
        this.setState({
            value
        })
        this.forceUpdate()
    }

    onFocus(ev, name){
        this.props.onFocus(ev, name, this)
    }

    onBlur(ev, name){
        this.props.onBlur(ev, name, this)
    }

    render(){
        let [
            TextAreaComponent
        ] = this.modules

        let props = this.props
        return <TextAreaComponent {...props} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} value={this.state.value} />
    }

    get value(){
        return this.state.value || ""
    }

    setValue(value:string){
        this.setState({
            value: value
        })
        this.forceUpdate()
        this.hasSet = true
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{
                name: "api-preview-textinput"
            }], [{
                size: "default"
            }, {
                size: "mini"
            }], [{
                disabled: false
            }, {
                disabled: true
            }], [{
                placeholder: ""
            }], [{
                value: ""
            }], [{
                error: null
            }, {
                error: "Example error"
            }], [{
                maxLength: 999
            }], [{
                className: ""
            }], [{
                inputClassName: ""
            }], [{
                id: "api-preview-textinput"
            }], [{
                onChange: (value: string, name: string) => {}
            }])
            return AllPreviews
        })()
    }

    static help = {
        warn: "This should be used for single line inputs."
    }
}
let AllPreviews