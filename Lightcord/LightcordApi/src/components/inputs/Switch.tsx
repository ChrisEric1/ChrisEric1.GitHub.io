import WebpackLoader from "../../modules/WebpackLoader"
import NOOP from "../../modules/noop"

type SwitchProps = {
    id?: string,
    value: boolean,
    disabled?: boolean,
    classname?: string,
    onChange(checked:boolean):void
}

let SwitchModules
export default class Switch extends React.Component<SwitchProps, {value: boolean}> {
    constructor(props:SwitchProps){
        super(props)
    }

    get modules(){
        return SwitchModules || (SwitchModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "Switch").default
        ])
    }

    render(){
        let [
            SwitchComponent
        ] = this.modules

        let props = this.props
        return (<SwitchComponent id={props.id} checked={props.value} disabled={props.disabled} 
            className={props.disabled} onChange={props.onChange}/>)
    }

    static defaultProps = {
        id: null,
        onChange: NOOP,
        disabled: false,
        className: ""
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{onChange: (value) => {}}])
            AllPreviews.push([{
                value: false
            }], [{
                disabled: false
            }, {
                disabled: true
            }])
            return AllPreviews
        })()
    }
}
let AllPreviews