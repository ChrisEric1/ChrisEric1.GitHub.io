import { themeCookie } from "../0globals"
import bdEvents from "./bdEvents"
import DOM from "./domtools"

export default new class popoutWindow {
    constructor(){
        /**
         * @type {Map<string, Window>}
         */
        this.windows = new Map()
        this.enabled = false
        this.init()
    }

    async init(){
        let popoutModule = await window.Lightcord.Api.ensureExported(e => e.default && e.default.getWindow)
        window.Lightcord.DiscordModules.dispatcher.subscribe("POPOUT_WINDOW_OPEN", (ev) => {
            setImmediate(() => {
                /**
                 * @type {Window}
                 */
                const window = popoutModule.default.getWindow(ev.key)
                this.windows.set(ev.key, window)

                let classList = window.document.body.classList
                classList.add("window-popout")
                classList.add("lightcord")
                classList.add("lightcord")

                this.update(ev.key)
            })
        })
        window.Lightcord.DiscordModules.dispatcher.subscribe("POPOUT_WINDOW_CLOSE", (ev) => {
            setImmediate(() => {
                this.windows.delete(ev.key)
            })
        })
        bdEvents.on("theme-enabled", () => {
            this.update()
        })
        bdEvents.on("theme-disabled", () => {
            this.update()
        })
        bdEvents.on("theme-reloaded", () => {
            this.update()
        })
        bdEvents.on("theme-unloaded", () => {
            this.update()
        })
        bdEvents.on("theme-loaded", () => {
            this.update()
        })
    }

    enable(){
        this.enabled = true
        this.update()
    }

    disable(){
        this.enabled = false
        this.update()
    }

    update(key){
        if(!this.windows.size)return
        if(!this.enabled){
            return this.removeThemes(key)
        }else{
            return this.applyThemes(key)
        }
    }

    removeThemes(key){
        if(this.enabled)return
        if(key){
            let window = this.windows.get(key)
            if(!window)return
            let document = window.document

            for(let style of document.querySelectorAll("style[data-lightcord-theme=true]")){
                style.remove()
            }
        }else{
            for(let key of this.windows.keys()){
                this.removeThemes(key)
            }
        }
    }

    applyThemes(key){
        if(!this.enabled)return
        if(key){
            let window = this.windows.get(key)
            if(!window)return
            let document = window.document

            for(let style of document.querySelectorAll("style[data-lightcord-theme=true]")){
                style.setAttribute("will-remove", "true")
            }

            Object.keys(bdthemes)
            .forEach(themeName => {
                if(!themeCookie[themeName])return // theme disabled
                const theme = bdthemes[themeName]
                if(!theme)return //:shrug:

                let existing = document.querySelector("style[data-lightcord-theme=true]#"+DOM.escapeID(theme.id))
                if(existing){
                    existing.innerHTML = unescape(theme.css)
                    existing.removeAttribute("will-remove")
                }else{
                    const style = document.createElement("style")
                    style.id = DOM.escapeID(theme.id)
                    style.innerHTML = unescape(theme.css)
                    style.setAttribute("data-lightcord-theme", "true")
                    document.head.append(style)
                }
            })

            for(let style of document.querySelectorAll("style[will-remove=true]")){
                style.remove()
            }
        }else{
            for(let key of this.windows.keys()){
                this.applyThemes(key)
            }
        }
    }
}