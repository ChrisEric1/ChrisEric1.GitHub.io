import { ReactElement } from "react";
import ReactDOM = require("react-dom")
import PluginUtilities from "./PluginUtilities";

/**
 * Set of methods that can help you sometimes.
 */
export default new class Utils {
    constructor(){}

    /**
     * Return an HTML div element from a react element.
     * @param ReactElement A React Element. Most of the time from `React.createElement()`
     */
    ReactToHTMLElement(ReactElement: ReactElement):HTMLDivElement{    
        const element = document.createElement("div")
        ReactDOM.render(ReactElement, element)
        return element
    }

    /**
     * Still in beta.
     */
    get PluginUtils(){return PluginUtilities}

    /**
     * Return the object after going through the path given path
     * @param obj The initial object
     * @param path the path
     * @example
     * ```js
     * const object = {
     *   prop1: {
     *     prop2: {
     *       str: "Lightcord"
     *     }   
     *   }
     * }
     * console.log(Lightcord.Api.Utils.getNestedProps(object, "prop1.prop2.str")) // Lightcord
     * ```
     */
    getNestedProps(obj:any, path: string){
        let segments = path.split(".")
        for(let seg of segments){
            obj = obj && (seg in obj) ? obj[seg] : undefined
        }
        return obj
    }

    /**
     * Convert a decimal color to hexadecimal.
     * @param color The color to convert
     */
    DecimalColorToHex(color:number):string{
        return "#"+color.toString(16).toUpperCase().split("").concat([].fill("0", 0, 6)).slice(0, 6).join("")
    }

    /**
     * Convert a hexadecimal color to decimal.
     * @param color The color to convert
     */
    HexColorToDecimal(color:string):number{
        color = color.replace(/[#;]/g, "")
        let res = parseInt(color, 16)
        if(isNaN(res))throw new Error(`Invalid color: ${color}`)
        return res
    }

    /**
     * Removes "da-" from classnames patched by BetterDiscord.
     * @param className The ClassName
     */
    removeDa(className:string):string{
        if(!className)return className
        return className.split(" ").filter(e => !e.startsWith("da-")).join(" ")
    }

    /**
     * Taken from https://stackoverflow.com/a/39165137. All credits goes to [Venryx](https://stackoverflow.com/users/2441655/venryx).
     * @param dom The DOM Element to reverse.
     * @param traverseUp A number of elemenet to go through.
     */
    FindReact(dom:Element, traverseUp:number = 0):React.Component|React.PureComponent{
        const key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
        const domFiber = dom[key];
        if (domFiber == null) return null;
    
        // react <16
        if (domFiber._currentElement) {
            let compFiber = domFiber._currentElement._owner;
            for (let i = 0; i < traverseUp; i++) {
                compFiber = compFiber._currentElement._owner;
            }
            return compFiber._instance;
        }
    
        // react 16+
        const GetCompFiber = fiber=>{
            //return fiber._debugOwner; // this also works, but is __DEV__ only
            let parentFiber = fiber.return;
            while (typeof parentFiber.type == "string") {
                parentFiber = parentFiber.return;
            }
            return parentFiber;
        };
        let compFiber = GetCompFiber(domFiber);
        for (let i = 0; i < traverseUp; i++) {
            compFiber = GetCompFiber(compFiber);
        }
        return compFiber.stateNode;
    }

    hasClass(classNames:string, className:string):boolean{
        if(!classNames || !className)return false
        const classnames = classNames.split(" ")
        for(let classname of this.removeDa(className).split(" ")){
            if(!classnames.includes(classname))return false
        }
        return true
    }

    formatJSObject(obj:any):string{
        if(["string", "number", "boolean", "bigint", "undefined"].includes(typeof obj))return JSON.stringify(obj)
        if(obj === null)return "null"
        if(typeof obj === "function")return String(obj)
        if(typeof obj === "symbol")return String(obj)

        if(Array.isArray(obj)){
            if(!obj.length)return "[]"
            return `[\n    ${obj.map(e => this.formatJSObject(e)).join(",\n    ")}\n]`
        }else{
            const keys = Object.keys(obj)
            if(keys.length === 0)return "{}"
            return `{\n    ${keys.map(key => {
                let original = key
                if(typeof key === "symbol")key = "["+String(key)+"]"
                else{
                    if(typeof key === "number")key = String(key)
                    else{
                        console.log(key)
                        if(isNaN(parseInt(key[0]))){
                            key = this.formatJSObject(key)
                        }else if(/[^\w\d_$]/g.test(key)){
                            key = this.formatJSObject(key)
                        }
                    }
                }
                return `${key}: ${this.formatJSObject(obj[original])}`
            })}\n}`
        }
    }

    getColor(color_name:ColorName):string{ 
        return Lightcord.DiscordModules.constants.Colors[color_name.toUpperCase()]
    }

    firstLetterUppercase(str:string):string{
        if(!str)return ""
        return str[0].toUpperCase()+str.slice(1)
    }

    executeXTimes<result = any>(func:(index?:number) => result, times:number):result[]{
        let results:result[] = []
        for(let i = 0;times > i;i++){
            results.push(func(i))
        }
        return results
    }
}

export type ColorName = "primary_dark_100"|"primary_dark_130"|"primary_dark_160"|"primary_dark_200"|"primary_dark_230"|"primary_dark_260"|"primary_dark_300"|"primary_dark_330"|"primary_dark_360"|"primary_dark_400"|"primary_dark_430"|"primary_dark_460"|"primary_dark_500"|"primary_dark"|"primary_dark_530"|"primary_dark_560"|"primary_dark_600"|"primary_dark_630"|"primary_dark_660"|"primary_dark_700"|"primary_dark_730"|"primary_dark_760"|"primary_dark_800"|"primary_dark_830"|"primary_dark_860"|"primary_dark_900"|"primary_light_100"|"primary_light_130"|"primary_light_160"|"primary_light_200"|"primary_light_230"|"primary_light_260"|"primary_light_300"|"primary_light_330"|"primary_light_360"|"primary_light_400"|"primary_light_430"|"primary_light_460"|"primary_light_500"|"primary_light"|"primary_light_530"|"primary_light_560"|"primary_light_600"|"primary_light_630"|"primary_light_660"|"primary_light_700"|"primary_light_730"|"primary_light_760"|"primary_light_800"|"primary_light_830"|"primary_light_860"|"primary_light_900"|"brand_100"|"brand_130"|"brand_160"|"brand_200"|"brand_230"|"brand_260"|"brand_300"|"brand_330"|"brand_360"|"brand_400"|"brand_430"|"brand_460"|"brand_500"|"brand"|"brand_530"|"brand_560"|"brand_600"|"brand_630"|"brand_660"|"brand_700"|"brand_730"|"brand_760"|"brand_800"|"brand_830"|"brand_860"|"brand_900"|"status_red_100"|"status_red_130"|"status_red_160"|"status_red_200"|"status_red_230"|"status_red_260"|"status_red_300"|"status_red_330"|"status_red_360"|"status_red_400"|"status_red_430"|"status_red_460"|"status_red_500"|"status_red"|"status_red_530"|"status_red_560"|"status_red_600"|"status_red_630"|"status_red_660"|"status_red_700"|"status_red_730"|"status_red_760"|"status_red_800"|"status_red_830"|"status_red_860"|"status_red_900"|"status_yellow_100"|"status_yellow_130"|"status_yellow_160"|"status_yellow_200"|"status_yellow_230"|"status_yellow_260"|"status_yellow_300"|"status_yellow_330"|"status_yellow_360"|"status_yellow_400"|"status_yellow_430"|"status_yellow_460"|"status_yellow_500"|"status_yellow"|"status_yellow_530"|"status_yellow_560"|"status_yellow_600"|"status_yellow_630"|"status_yellow_660"|"status_yellow_700"|"status_yellow_730"|"status_yellow_760"|"status_yellow_800"|"status_yellow_830"|"status_yellow_860"|"status_yellow_900"|"status_green_100"|"status_green_130"|"status_green_160"|"status_green_200"|"status_green_230"|"status_green_260"|"status_green_300"|"status_green_330"|"status_green_360"|"status_green_400"|"status_green_430"|"status_green_460"|"status_green_500"|"status_green"|"status_green_530"|"status_green_560"|"status_green_600"|"status_green_630"|"status_green_660"|"status_green_700"|"status_green_730"|"status_green_760"|"status_green_800"|"status_green_830"|"status_green_860"|"status_green_900"|"status_grey_100"|"status_grey_130"|"status_grey_160"|"status_grey_200"|"status_grey_230"|"status_grey_260"|"status_grey_300"|"status_grey_330"|"status_grey_360"|"status_grey_400"|"status_grey_430"|"status_grey_460"|"status_grey_500"|"status_grey"|"status_grey_530"|"status_grey_560"|"status_grey_600"|"status_grey_630"|"status_grey_660"|"status_grey_700"|"status_grey_730"|"status_grey_760"|"status_grey_800"|"status_grey_830"|"status_grey_860"|"status_grey_900"|"link_100"|"link_130"|"link_160"|"link_200"|"link_230"|"link_260"|"link_300"|"link_330"|"link_360"|"link_400"|"link_430"|"link_460"|"link_500"|"link"|"link_530"|"link_560"|"link_600"|"link_630"|"link_660"|"link_700"|"link_730"|"link_760"|"link_800"|"link_830"|"link_860"|"link_900"|"link_light_100"|"link_light_130"|"link_light_160"|"link_light_200"|"link_light_230"|"link_light_260"|"link_light_300"|"link_light_330"|"link_light_360"|"link_light_400"|"link_light_430"|"link_light_460"|"link_light_500"|"link_light"|"link_light_530"|"link_light_560"|"link_light_600"|"link_light_630"|"link_light_660"|"link_light_700"|"link_light_730"|"link_light_760"|"link_light_800"|"link_light_830"|"link_light_860"|"link_light_900"|"white_100"|"white_130"|"white_160"|"white_200"|"white_230"|"white_260"|"white_300"|"white_330"|"white_360"|"white_400"|"white_430"|"white_460"|"white_500"|"white"|"white_530"|"white_560"|"white_600"|"white_630"|"white_660"|"white_700"|"white_730"|"white_760"|"white_800"|"white_830"|"white_860"|"white_900"|"black_100"|"black_130"|"black_160"|"black_200"|"black_230"|"black_260"|"black_300"|"black_330"|"black_360"|"black_400"|"black_430"|"black_460"|"black_500"|"black"|"black_530"|"black_560"|"black_600"|"black_630"|"black_660"|"black_700"|"black_730"|"black_760"|"black_800"|"black_830"|"black_860"|"black_900"|"premium_tier_2_purple_500"|"premium_tier_2_purple"|"premium_tier_2_pink_500"|"premium_tier_2_pink"|"premium_tier_1_purple_500"|"premium_tier_1_purple"|"premium_tier_1_blue_500"|"premium_tier_1_blue"|"premium_guild_pink_500"|"premium_guild_pink"|"premium_guild_purple_500"|"premium_guild_purple"|"premium_guild_blue_500"|"premium_guild_blue"|"hypesquad_house_1_500"|"hypesquad_house_1"|"hypesquad_house_2_500"|"hypesquad_house_2"|"hypesquad_house_3_500"|"hypesquad_house_3"|"partner_500"|"partner"|"skype_500"|"skype"|"battlenet_500"|"battlenet"|"steam_500"|"steam"|"lol_500"|"lol"|"twitch_500"|"twitch"|"youtube_500"|"youtube"|"twitter_500"|"twitter"|"reddit_500"|"reddit"|"spotify_500"|"spotify"|"facebook_500"|"facebook"|"samsung_500"|"samsung"|"xbox_500"|"xbox"|"github_500"|"github"|"transparent"

export class LightcordApiError extends Error {
    name:string = "LightcordApiError"
}