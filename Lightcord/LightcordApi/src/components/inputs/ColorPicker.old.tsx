/**
 * Replacement for color picker if original is not availlable
 * 
 * - Don't work at the moment. Please use the other.
 */

import NOOP from "../../modules/noop"
import WebpackLoader from "../../modules/WebpackLoader"
import Tooltip from "../general/Tooltip"

type ColorPickerProps = {
    inline?: boolean,
    popout?: true
    tooltip?: string|false,
    defaultColor?: boolean,
    customColor?: boolean,
    baseColors?: boolean
} | {
    inline?: boolean,
    popout?: false,
    tooltip?: false,
    defaultColor?: boolean,
    customColor?: boolean,
    baseColors?: boolean
}

let ColorPickerModules
export default class ColorPicker extends React.Component<ColorPickerProps> {
    constructor(props:ColorPickerProps){
        super(props)
    }

    static defaultProps:ColorPickerProps = {
        inline: false,
        popout: false,
        tooltip: false,
        defaultColor: true,
        customColor: true,
        baseColors: true
    }

    get modules(){
        return ColorPickerModules || (ColorPickerModules = [
            {
                colorPickerCustom: "lc-colorPickerCustom",
                customColorPickerInput: "lc-customColorPickerInput",
                input: "lc-colorPicker-input",
                colorPickerRow: "lc-colorPickerRow",
                colorPickerSwatch: "lc-colorPickerSwatch",
                custom: "lc-colorPicker-custom",
                default: "lc-colorPicker-default",
                disabled: "lc-colorPicker-disabled",
                colorPickerDropper: "lc-colorPickerDropper",
                noColor: "lc-colorPicker-noColor",
                colorPickerDropperFg: "lc-colorPickerDropperFg"
            },
            WebpackLoader.find(e => e.flexMarginReset),
            WebpackLoader.find(e => e.justifyStart && !e.streamerModeEnabled),
            WebpackLoader.find(e => e.marginTop60 && !e.title),
            WebpackLoader.findByUniqueProperties(["Messages"]).default.Messages
        ])
    }

    renderColorPicker(){
        let [
            colorPickerClasses,
            flexClasses,
            positionClasses,
            marginClasses,
            TranslationModule
        ] = this.modules

        let defaultColor = this.props.defaultColor ? <div className={marginClasses.marginReset}>
            <Tooltip text={TranslationModule.DEFAULT} position="bottom" color="black">
                <button type="button" className={`${colorPickerClasses.colorPickerSwatch} ${colorPickerClasses.default}`} style={{
                    marginLeft: "0px",
                    backgroundColor: Constants.defaultColor
                }} onClick={this.setColor.bind(this, Constants.defaultColor)}>
                    <svg aria-hidden="false" width="32" height="24" viewBox="0 0 24 24">
                        <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path>
                    </svg>
                </button>
            </Tooltip>
        </div> : null

        let customColor = this.props.customColor ? <div className={marginClasses.marginReset}>
            <Tooltip text={TranslationModule.CUSTOM_COLOR} position="bottom" color="black">
                <button type="button" className={`${colorPickerClasses.colorPickerSwatch} ${colorPickerClasses.default}`} style={{
                    marginLeft: "0px",
                    backgroundColor: Constants.defaultColor
                }} onClick={this.setColor.bind(this, Constants.defaultColor)}>
                    <svg aria-hidden="false" width="32" height="24" viewBox="0 0 24 24">
                        <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"></path>
                    </svg>
                </button>
            </Tooltip>
        </div> : null

        return <div className={`${flexClasses.flex} ${flexClasses._horizontal} ${positionClasses.justifyStart} ${positionClasses.alignStretch} ${positionClasses.noWrap}`}>
            {defaultColor}
            {customColor}
        </div>
    }

    renderPopout(){

    }

    setColor(color){
        console.log(color)
    }

    render(){
        let props = this.props
        let returnValue = null
        if(props.popout){
            returnValue = this.renderPopout()
        }else{
            returnValue = this.renderColorPicker()
        }
        return returnValue
    }

    static get AllPreviews(){
        return []
    }
}
let AllPreviews

const Constants = {
    defaultColor: "#99aab5"
}