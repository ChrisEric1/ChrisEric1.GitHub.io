import WebpackLoader from "./modules/WebpackLoader"
import Components from "./components/components"
import uuid from "./modules/uuid"
import Utils from "./modules/Utils"
import DiscordTools from "./modules/DiscordTools"
import * as patchers from "./modules/patchers"
import excludeProperties from "./modules/excludeProperties"
import cloneNullProto from "./modules/cloneNullProto"
import NOOP from "./modules/noop"
import unfreeze from "./modules/Unfreeze"
import { isNative, isImported } from "./modules/environnement"
import * as bandagedbdApi from "@bandagedbd/bdapi"
import "./alias/react"
import "./alias/react-dom"
import { LazyLoad } from "./modules/lazyLoader"
import settings from "./modules/settings"
patchers.patch()

/**
 * Lightcord Api defined at [/LightcordApi/src/index.ts](https://github.com/Lightcord/Lightcord/blob/master/LightcordApi/src/index.ts#L22)
 */
const LightcordApi = {
    /**
     * WebpackLoader loads Internal Discord's modules with given filter.
     */
    WebpackLoader: WebpackLoader,
    /**
     * Lightcord's exported component. You can see a list in the app settings when activating `Developer Options` in lightcord's settings.
     */
    Components: Components,
    /** 
     * Create uuids.
     * @method
     */
    uuid: uuid,
    /**
     * Set of methods that can help you sometimes.
     */
    Utils: Utils,
    DiscordTools: DiscordTools,
    _: {
        excludeProperties: excludeProperties,
        cloneNullProto: cloneNullProto,
        NOOP: NOOP,
        unfreeze: unfreeze
    },
    get isNative(){return isNative},
    get isImported(){return isImported},
    LazyLoad: LazyLoad,
    settings: settings
}

declare global {
    var React:typeof import("react")
    var ReactDOM:typeof import("../node_modules/@types/react-dom")
    interface Window {
        /**
         * Lightcord is only availlaible in Lightcord (native)
         */
        Lightcord: LightcordGlobal,
        /**
         * BDModules is only availlaible in Lightcord (native)
         */
        BDModules: {
            modules:any[],
            get(filter:(mod:any)=>boolean, modules?:any[]):any[],
            get(id:number, modules?:any[]):any,
            get(ids: [number|((mod:any)=>boolean)], modules?:any[]):any
        },
        BdApi: typeof bandagedbdApi.BdApi,
        EDApi: typeof bandagedbdApi.BdApi,
        ReactDOM: typeof ReactDOM;
        React:typeof React
    }
    var Lightcord:LightcordGlobal
    var BdApi: typeof bandagedbdApi.BdApi
    var EDApi: typeof bandagedbdApi.BdApi
}

export default LightcordApi

Object.assign(window.Lightcord.Api, LightcordApi)

/**
 * The main Lightcord exports. Can be accessed with `window.Lightcord`
 */
export interface LightcordGlobal {
    /**
     * Some Discord Internal Module shortcuts.
     */
    DiscordModules: {
        /**
         * Internal Discord's dispatcher - can be used to subscribe to gateway events / client events.
         */
        dispatcher: import("./types/DiscordDispatcherTypes").default,
        /**
         * Discord's constants - Can be used to retrieve some infos like Discord's Api Link, Colors, Events, etc...
         */
        constants: import("./types/DiscordConstantsTypes").default
    },
    /** Lightcord's base settings. You don't need to use them. */
    Settings: {
        devMode: boolean,
        callRingingBeat: boolean
    },
    /**
     * Lightcord's Api. This is where all methods/properties lightcord adds are.
     */
    Api: LightcordApiGlobal,
    /** BetterDiscord's Internal Modules. Can be used as well. Example: `Lightcord.BetterDiscord.DOM` for DomTools. */
    BetterDiscord: {
        /** BetterDiscord's plugin api. Can also be accessed with the global variable: `BdApi` */
        BdApi: typeof bandagedbdApi.BdApi,
        [mod:string]:any
    }
}

/**
 * The main Api. Can be accessed with `window.Lightcord.Api`
 */
type LightcordApiGlobal = lightcordApiMainExports & typeof LightcordApi

/** Exports that are defined [here](https://github.com/Lightcord/Lightcord/blob/master/modules/discord_desktop_core/core/app/BetterDiscord/index.js#L278) */
type lightcordApiMainExports = {
    /**
     * Waits until the first module that match the filter gets exported
     * @param filter The filter that specifies the module to match.
     */
    ensureExported(filter: (mod:any) => boolean):Promise<any>,
    /**
     * Recreate the object without the `__proto__` and `prototype` properties - usefull for better formatting in console.
     * @param obj The object to recreate
     */
    cloneNullProto<Obj = any>(obj:Obj):Obj
}