import WebpackLoader from "../../modules/WebpackLoader"
import NOOP from "../../modules/noop"
import Utils from "../../modules/Utils"

type TextAreaProps = {
    name?: string,
    disabled?: boolean,
    placeholder?: string,
    autoFocus?: boolean,
    resizeable?: boolean,
    flex?: boolean,
    autosize?: false,
    rows?: number,
    value?: string,
    error?: string,
    maxLength?: number,
    className?: string,
    id?: string,
    onChange?: (value: string, name: string) => void,
    onFocus?: (ev, name: string) => void,
    onBlur?: (ev, name: string) => void,
    onKeyDown?: (ev) => void
}

let TextAreaModules
export default class TextArea extends React.Component<TextAreaProps, {value: string}> {
    constructor(props:TextAreaProps){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)

        this.state = {
            value: props.value || ""
        }
    }

    get modules(){
        return TextAreaModules || (TextAreaModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "TextArea").default
        ])
    }

    onChange(value, name){
        this.props.onChange(value, name)
        this.setState({
            value
        })
    }

    onFocus(ev, name){
        this.props.onFocus(ev, name)
    }

    onBlur(ev, name){
        this.props.onBlur(ev, name)
    }
    
    onKeyDown(ev){
        this.props.onKeyDown(ev)
    }

    render(){
        let [
            TextAreaComponent
        ] = this.modules

        let props = this.props

        return <TextAreaComponent {...props} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} value={this.state.value}/>
    }

    get value(){
        return this.state.value || ""
    }

    static defaultProps:TextAreaProps = {
        name: null,
        disabled: false,
        placeholder: null,
        autoFocus: false,
        resizeable: false,
        flex: false,
        autosize: false,
        rows: 3,
        value: "",
        error: null,
        maxLength: null,
        className: null,
        id: null,
        onChange: NOOP,
        onFocus: NOOP,
        onBlur: NOOP,
        onKeyDown: NOOP
    }
    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{
                name: "api-preview-textarea"
            }])
            AllPreviews.push([{
                disabled: false
            }, {
                disabled: true
            }])
            AllPreviews.push([{
                placeholder: null
            }])
            AllPreviews.push([{
                autoFocus: false
            }, {
                autoFocus: true
            }])
            AllPreviews.push([{
                resizeable: false
            }, {
                resizeable: true
            }])
            AllPreviews.push([{
                flex: false
            }, {
                flex: true
            }])
            AllPreviews.push([{
                autosize: false
            }, {
                autosize: true
            }])
            AllPreviews.push([{
                rows: 3
            }, {
                rows: 2
            }, {
                rows: 1
            }])
            AllPreviews.push([{
                value: ""
            }])
            AllPreviews.push([{
                error: null
            }, {
                error: "Example error"
            }])
            AllPreviews.push([{
                maxLength: 100
            }])
            AllPreviews.push([{
                className: ""
            }])
            AllPreviews.push([{
                inputClassName: ""
            }])
            AllPreviews.push([{
                id: "api-preview-textarea"
            }])
            return AllPreviews
        })()
    }

    static help = {
        warn: "This should be used for multi line inputs."
    }
}
let AllPreviews