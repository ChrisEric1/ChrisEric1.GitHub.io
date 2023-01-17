import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode } from "react"
import excludeProperties from "../../modules/excludeProperties"

type TooltipData = {
    onClick():void
    onMouseEnter():void
    onMouseLeave():void
    onContextMenu():void
    "aria-label": string
}
type TooltipProps = {
    children:ReactNode,
    text: string,
    position?: TooltipPosition,
    color?: TooltipColor
}

let TooltipModules
export default class Tooltip extends React.Component<TooltipProps> {
    constructor(props: TooltipProps){
        super(props)
    }

    get modules(){
        return TooltipModules || (TooltipModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "Tooltip")
        ])
    }

    render(){
        let [
            Tooltip
        ] = this.modules

        let props = excludeProperties(this.props, ["children"])

        return React.createElement(Tooltip.default, props, (data:TooltipData) => {
            return React.createElement("div", {
                ...data,
                style: {
                    width: "fit-content",
                    height: "fit-content"
                }
            }, this.props.children)
        })
    }
    
    static defaultProps:TooltipProps = {
        children: null,
        text: "No text was passed to Tooltip",
        position: "top",
        color: "brand"
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    children: React.createElement(window.Lightcord.Api.Components.inputs.Button, {
                        color: "green",
                        look: "ghost",
                        size: "small",
                        hoverColor: "yellow",
                        onClick: () => { },
                        wrapper: false
                    }, "Hover this button to see the tooltip")
                }
            ])
            AllPreviews.push([
                {
                    text: "Example Tooltip Text"
                }
            ])
            let colors = []
            Tooltip.Colors.forEach(color => {
                colors.push({
                    color: color
                })
            })
            AllPreviews.push(colors)
            let positions = []
            Tooltip.Positions.forEach(p => {
                positions.push({
                    position: p
                })
            })
            AllPreviews.push(positions)
            return AllPreviews
        })()
    }

    static Positions:TooltipPosition[] = ["top", "left", "right", "bottom"]
    static Colors:TooltipColor[] = ["black", "grey", "brand", "green", "yellow", "red"]
}
let AllPreviews

export type TooltipPosition = "top" | "left" | "right" | "bottom"
export type TooltipColor = "black" | "grey" | "brand" | "green" | "yellow" | "red"