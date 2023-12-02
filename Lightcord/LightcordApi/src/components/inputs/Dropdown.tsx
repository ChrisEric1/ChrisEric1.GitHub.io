import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode, CSSProperties } from "react"

type DropdownProps = {
    className?: string,
    error?: string,
    options?: {
        value: string,
        label: string
    }[],
    valueRenderer?: (data) => ReactNode,
    optionRenderer?: (data) => ReactNode,
    multiValueRenderer?: (data) => ReactNode
    onChange?: (value: string) => void,
    value?: string,
    disabled?: boolean,
    searchable?: boolean,
    clearable?: boolean,
    styleOverrides?: CSSProperties,
    lightThemeColorOverrides?: themeOverride,
    darkThemeColorOverrides?: themeOverride,
    isMulti?: boolean
}

type themeOverride = {
    neutral0: string,
    neutral5: string,
    neutral10: string,
    neutral20: string,
    neutral30: string,
    primary: string,
    primary25: string,
    primary50: string,
    selectedOptionBackground: string,
    text: string,
    menuBackground: string,
    menuBorder: string,
    scrollBarThumb: string,
    multiOptionBackground: string
}

let DropdownModules
export default class Dropdown extends React.Component<DropdownProps, {value: string|null}> {
    constructor(props:DropdownProps){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            value: props.value || null
        }
    }

    static defaultProps:DropdownProps = {
        className: null,
        error: null,
        options: [{
            value: "none",
            "label": "No options - No options was passed to Dropdown. If you meant to put an empty dropdown, input an empty array."
        }],
        valueRenderer: null,
        multiValueRenderer: null,
        optionRenderer: null,
        onChange: NOOP,
        value: null,
        disabled: false,
        searchable: false,
        clearable: false,
        styleOverrides: null,
        lightThemeColorOverrides: null,
        darkThemeColorOverrides: null,
        isMulti: false
    }

    onChange(value){
        value = value ? value.value : null
        this.props.onChange(value)
        this.setState({
            value: value
        })
    }

    get modules(){
        return DropdownModules || (DropdownModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "SelectTempWrapper").default
        ])
    }

    render(){
        let [
            DropdownComponent
        ] = this.modules

        let props = this.props
        let returnValue = <DropdownComponent {...props} onChange={this.onChange} value={this.state.value}/>
        return returnValue
    }

    get value(){
        return this.state.value
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{
                error: null
            }, {
                error: "An error occured"
            }], [{
                options: [
                    {
                        value: "option1",
                        label: "Option 1"
                    },
                    {
                        value: "option2",
                        label: "Option 2"
                    },
                    {
                        value: "option3",
                        label: "Option 3"
                    }
                ]
            }], [{
                value: "option1"
            }], [{
                disabled: false
            }, {
                disabled: true
            }], [{
                searchable: true
            }, {
                searchable: false
            }], [{
                clearable: true
            }, {
                clearable: false
            }], [{
                isMulti: false
            }, {
                isMulti: true
            }])
            return AllPreviews
        })()
    }
}
let AllPreviews