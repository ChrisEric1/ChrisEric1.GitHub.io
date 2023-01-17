import * as React from "react"
import Utils, { ColorName } from "../../modules/Utils"


export type TextProps = {
    weight?: TextWeight,
    color?: TextColor|string,
    textCase?: TextCase,
    size?: TextSize,
    selectable?: boolean,
    family?: TextFamily,
    children: string,
    tag?: string,
    className?: string,
    style?: React.CSSProperties
}
export default class Text extends React.Component<TextProps> {
    render(){
        let classList = this.props.className ? this.props.className.split(" ") : []
        let style = this.props.style ? {...this.props.style} : {}
        style.flexGrow = 0
        if(this.props.weight){
            classList.push(`lc-text-weight${Utils.firstLetterUppercase(this.props.weight)}`)
        }
        if(this.props.color){
            style.color = Utils.getColor(this.props.color as TextColor) || this.props.color
        }
        if(this.props.textCase){
            classList.push(`lc-text-cases${Utils.firstLetterUppercase(this.props.textCase)}`)
        }
        if(this.props.size){
            classList.push(...Constants.sizes[this.props.size])
        }
        if(this.props.family){
            classList.push(`lc-text-${this.props.family}`)
        }
        if(this.props.selectable){
            classList.push("lc-text-selectable")
        }

        return React.createElement(this.props.tag, {
            style,
            className: classList.join(" ")
        }, this.props.children)
    }

    static defaultProps:TextProps = {
        tag: "div",
        children: null
    }

    static get AllPreviews(){
        return AllPreviews || (AllPreviews = [
            this.weights.map(e => ({weight: e})),
            this.colors.map(e => ({color: e})),
            this.textCases.map(e => ({textCase: e})),
            this.sizes.map(e => ({size: e})),
            this.familys.map(e => ({family: e})),
            [
                {
                    children: "Test Text"
                }
            ],
            ["div","p",...Utils.executeXTimes((index) => {
                return "h"+(index+1)
            }, 6)].map(e => ({tag: e})),
            [true, false].map(e => ({selectable: e}))
        ])
    }

    static weights:TextWeight[] = ["light", "normal", "medium", "semibold", "bold"]
    static get colors():TextColor[]{
        return Object.keys(Lightcord.DiscordModules.constants.Colors).map(e => e.toLowerCase()) as TextColor[]
    }
    static textCases:TextCase[] = ["lowercase", "uppercase"]
    static sizes:TextSize[] = ["small", "medium", "medium_small", "medium_large", "large"]
    static familys:TextFamily[] = ["primary", "code"]
}
let AllPreviews

export type TextWeight = "light"|"normal"|"medium"|"semibold"|"bold"
export type TextColor = ColorName
export type TextCase = "lowercase"|"uppercase"
export type TextSize = "small"|"medium"|"medium_small"|"medium_large"|"large"
export type TextFamily = "primary"|"code"

export const Constants = {
    sizes: {
        small: ["lc-text-size12", "lc-text-height16"],
        medium_small: ["lc-text-size14", "lc-text-height16"],
        medium: ["lc-text-size16", "lc-text-height20"],
        medium_large: ["lc-text-size20", "lc-text-height26"],
        large: ["lc-text-size28", "lc-text-height34"]
    }
}