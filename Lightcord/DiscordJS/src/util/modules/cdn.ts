import { requireModule } from "../DiscordToModules"
import { Snowflake } from "../.."

let cdnModuleInternal1:{
    getUserAvatarURL(user:{
        id: Snowflake,
        avatar: string,
        discriminator: string,
        bot: boolean
    }, format?:string, size?: number):string,
    getGuildSplashURL(infos:{
        id: Snowflake,
        splash: string,
        size?: number
    }): string,
    getGuildBannerURL(infos:{
        id: Snowflake,
        banner: string
    }): string
} = requireModule(e => e.default && e.default.getGuildSplashURL)

let cdnModuleInternal2:{
    DEFAULT_AVATARS: string[]
} = requireModule(e => e.default && e.default.DEFAULT_AVATARS)

export = {
    getUserAvatarURL: cdnModuleInternal1.getUserAvatarURL,
    getGuildSplashURL: cdnModuleInternal1.getGuildSplashURL,
    getGuildBannerURL: cdnModuleInternal1.getGuildBannerURL,

    getDefaultAvatarURL(discriminator){
        let asset = cdnModuleInternal2.DEFAULT_AVATARS[(typeof discriminator === "string" ? parseInt(discriminator) || 0 : isNaN(discriminator) ? 0 : discriminator) % cdnModuleInternal2.DEFAULT_AVATARS.length]
        return `${location.protocol}://${window["GLOBAL_ENV"].ASSET_ENDPOINT}/assets/${asset}`
    }
}