import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"
import Utils from "../../modules/Utils"

const Constants = {
    defaultColor: 10070709,
    baseColors: [
        1752220, 
        3066993, 
        3447003, 
        10181046, 
        15277667, 
        15844367, 
        15105570, 
        15158332, 
        9807270, 
        6323595, 
        1146986, 
        2067276, 
        2123412, 
        7419530, 
        11342935, 
        12745742, 
        11027200, 
        10038562, 
        9936031, 
        5533306
    ]
}

type ColorPickerProps = {
    defaultColor?: number,
    customColor?: number,
    baseColors?: number[],
    value?: string,
    disabled?: boolean,
    onChange?: (color:number) => void
}

let ColorPickerModules
let isFetching = null

/**
 * This componennt needs to be loaded. As a result, you may experience 100-300ms loading the first time.
 * Render will return `null` before loaded.
 */
export default class ColorPicker extends React.PureComponent<ColorPickerProps, {value?:string,lastColor:any}> {
    constructor(props:ColorPickerProps){
        super(props)
        this.state = {
            value: props.value || null,
            lastColor: this.props.value
        }
        this.onChange = this.onChange.bind(this)
    }

    /** Preload the component. */
    static preload(){
        if(ColorPicker.prototype.modules[0])return // already loaded
        if(isFetching)return // is fetching so don't double preload.
        try{ // If we caught an error
            new ColorPicker({}).render()
        }catch(e){
            console.error(e)
        }
    }

    onChange(val){
        this.props.onChange(val)
        this.setState({
            value: val
        })
        this.forceUpdate()
    }

    static defaultProps:ColorPickerProps = {
        defaultColor: Constants.defaultColor,
        customColor: null,
        baseColors: Constants.baseColors,
        value: null,
        disabled: false,
        onChange: NOOP
    }

    get modules(){
        return ColorPickerModules || (ColorPickerModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "ColorPicker")
        ])
    }

    renderColorPicker(){
        let [
            ColorPickerComponent
        ] = this.modules

        if(!ColorPickerComponent){
            if(isFetching){ // support for multiple color picker
                isFetching.then(() => this.forceUpdate())
                return null
            }
            ColorPickerModules = null
            let resolve
            isFetching = new Promise(res => (resolve = res))
            const GuildSettingsRoles = new (WebpackLoader.find(e => e.default && e.default.displayName && e.default.displayName.includes("GuildSettingsRoles")).default)().render().type
            const settings = GuildSettingsRoles.prototype.renderRoleSettings.call({
                props: {
                    guild: {
                        roles: [],
                        id: null,
                        isOwner: () => false
                    },
                    currentUser: {
                        id: null
                    }
                },
                getSelectedRole(){
                    return {
                        id: null
                    }
                },
                renderHeader: GuildSettingsRoles.prototype.renderHeader
            })
            const GuildRoleSettings = settings.props.children[1].type
            let children = GuildRoleSettings.prototype.renderColorPicker.call({
                props: {
                    role: {
                        id: null,
                        color: 0
                    },
                    locked: false,
                    everyone: false
                }
            }).props.children
            children.type(children.props).props.children.type._ctor().then(c => {
                ColorPickerModules = null
                this.forceUpdate()
                resolve()
            })

            return null
        }
        return <ColorPickerComponent.default colors={this.props.baseColors} defaultColor={this.props.defaultColor} value={this.state.value} 
            disabled={this.props.disabled} onChange={this.onChange} customColor={this.props.customColor}>
        </ColorPickerComponent.default>
    }

    render(){
        if(this.state.lastColor !== this.props.value){
            this.state = {
                value: this.props.value,
                lastColor: this.props.value
            }
        }
        return this.renderColorPicker()
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    disabled: false
                },
                {
                    disabled: true
                }
            ], [
                {
                    value: Utils.HexColorToDecimal("#7289DA")
                }, {
                    value: null
                }
            ], [
                {
                    onChange: (color) => {}
                }
            ])
            return AllPreviews
        })()
    }

    static help = {
        info: "To convert hex colors to decimal, you can do `Lightcord.Api.Utils.HexColorToDecimal('#7289DA')` and go back with `Lightcord.Api.Utils.DecimalColorToHex(7506394)`",
        warn: "The component may not appear instantly. The component needs to be loaded, so you could experience 50-300ms loading time depending on your internet connection."
    }
}
let AllPreviews