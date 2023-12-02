import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode, CSSProperties, MouseEventHandler, MouseEvent } from "react"
import NOOP from "../../modules/noop"

let ButtonModules

type ButtonProps = {
    children?: ReactNode,
    onClick?: (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
    color?: ButtonColor,
    wrapper?: boolean,
    look?: ButtonLook,
    size?: ButtonSize,
    hoverColor?: ButtonHovers,
    disabled?: boolean,
    style?: CSSProperties,
    onRightClick?: () => void,
    className?: string,
    onMouseDown?: (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}
export default class Button extends React.Component<ButtonProps, {hover: boolean}> {
    constructor(props:ButtonProps){
        super(props)

        this.state = {
            hover: false
        }
    }

    static Colors:ButtonColor[] = ["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"]
    static Looks:ButtonLook[] = ["filled", "inverted", "outlined", "ghost", "link", "blank"]
    static Sizes:ButtonSize[] = ["small", "medium", "large", "xlarge", "min", "max", "icon", "none"]
    static HoverColors: ButtonHovers[] = ["default", ...Button.Colors]

    get modules(){ // caching modules
        return ButtonModules || (ButtonModules = [
            WebpackLoader.findByUniqueProperties(["_horizontal"]),
            WebpackLoader.findByUniqueProperties(["colorTransparent"]),
            WebpackLoader.findByUniqueProperties(["buttonWrapper"]),
            WebpackLoader.findByUniqueProperties(["ButtonColors"]),
        ])
    }

    render(){
        let [
            flexModule,
            euhModule1,
            buttonModule,
            colorsModule,
        ] = this.modules

        let props:ButtonProps = {}
        if(this.props){
            if("color" in this.props){
                props.color = this.props.color
            }
            if("children" in this.props){
                props.children = this.props.children
            }
            if("onClick" in this.props){
                props.onClick = this.props.onClick
            }
            if("onMouseDown" in this.props){
                props.onMouseDown = this.props.onMouseDown
            }
            if("wrapper" in this.props){
                props.wrapper = !!this.props.wrapper
            }
            if("look" in this.props){
                props.look = this.props.look
            }
            if("size" in this.props){
                props.size = this.props.size
            }
            if("hoverColor" in this.props){
                props.hoverColor = this.props.hoverColor
            }
            if("disabled" in this.props){
                props.disabled = this.props.disabled
            }else{
                props.disabled = false
            }
            if("style" in this.props){
                props.style = this.props.style
            }else{
                props.style = {}
            }
            if("onRightClick" in this.props){
                props.onRightClick = this.props.onRightClick
            }else{
                props.onRightClick = NOOP
            }
        }

        if(props.color){
            props.color = props.color.toLowerCase() as ButtonColor
            if(!Button.Colors.includes(props.color)){
                props.color = Button.Colors[0]
            }
        }else{
            props.color = Button.Colors[0]
        }

        if(props.look){
            props.look = props.look.toLowerCase() as ButtonLook
            if(!Button.Looks.includes(props.look)){
                props.look = Button.Looks[0]
            }
        }else{
            props.look = Button.Looks[0]
        }

        if(props.size){
            props.size = props.size.toLowerCase() as ButtonSize
            if(!Button.Sizes.includes(props.size)){
                props.size = Button.Sizes[0]
            }
        }else{
            props.size = Button.Sizes[0]
        }

        if(props.hoverColor){
            props.hoverColor = props.hoverColor.toLowerCase() as ButtonHovers
            if(!Button.HoverColors.includes(props.hoverColor)){
                props.hoverColor = Button.HoverColors[0]
            }
        }else{
            props.hoverColor = Button.HoverColors[0]
        }

        let buttonSize = props.size ? colorsModule.ButtonSizes[props.size.toUpperCase()] || "" : ""
        if(buttonSize)buttonSize = " " + buttonSize

        let hoverColor = props.hoverColor ? colorsModule.ButtonHovers[props.hoverColor.toUpperCase()] || "" : ""
        if(hoverColor)hoverColor = " " + hoverColor

        props.onClick = typeof props.onClick === "function" ? props.onClick : NOOP
        if(typeof props.wrapper !== "boolean")props.wrapper = true

        props.onMouseDown = typeof props.onMouseDown === "function" ? props.onMouseDown : NOOP

        let hover = this.state.hover ? euhModule1.hasHover : ""
        if(hover)hover = " " + hover

        let classListButton = `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`.split(" ")
        if(typeof this.props.className === "string" && this.props.className){
            classListButton = this.props.className.split(" ").concat(classListButton)
        }
        let button = <button type="button" 
            ref="button" className={classListButton.join(" ")} 
            style={{flex: "0 1 auto", ...props.style}} onClick={props.onClick} onMouseEnter={(ev) => {
                if(!hoverColor)return
                this.setState({hover: true})
            }} onMouseLeave={(ev) => {
                if(!hoverColor)return
                this.setState({hover: false})
            }} disabled={props.disabled} onContextMenu={() => props.onRightClick()}
                onMouseDown={props.onMouseDown}>
            <div className={euhModule1.contents}>{props.children}</div>
        </button>

        if(props.wrapper){
            return <div ref="wrapper" className={buttonModule.buttonWrapper}>
                {button}
            </div>
        }
        return button
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            let colors = []
            for(let color of Button.Colors){
                colors.push({
                    color: color
                })
            }
            AllPreviews.push(colors)
            let looks = []
            for(let look of Button.Looks){
                looks.push({
                    look: look
                })
            }
            AllPreviews.push(looks)
            let sizes = []
            for(let size of Button.Sizes){
                sizes.push({
                    size: size
                })
            }
            AllPreviews.push(sizes)
            let hovers = []
            for(let hover of Button.HoverColors){
                hovers.push({
                    hoverColor: hover
                })
            }
            AllPreviews.push(hovers)
            AllPreviews.push([{children: "Test Button"}])
            AllPreviews.push([{onClick: () => {}}])
            AllPreviews.push([{wrapper: false}])
            AllPreviews.push([{disabled: false}, {disabled: true}])
            return AllPreviews
        })()
    }
}
let AllPreviews


export type ButtonColor = "brand" | "grey" | "red" | "green" | "yellow" | "primary" | "link" | "white" | "black" | "transparent"
export type ButtonLook = "filled" | "inverted" | "outlined" | "ghost" | "link" | "blank"
export type ButtonSize = "none" | "small" | "medium" | "large" | "xlarge" | "min" | "max" | "icon"
export type ButtonHovers = "default" | ButtonColor