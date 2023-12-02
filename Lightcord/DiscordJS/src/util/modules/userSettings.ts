import { requireModule, DiscordUserSettings } from "../DiscordToModules";
import { Snowflake } from "../..";

let userSettingModuleInternal1:{
    isGuildRestricted(guild_id:Snowflake):boolean,
    getAllSettings():DiscordUserSettings
} = requireModule(e => e.default && e.default.isGuildRestricted)

let userSettingModuleInternal2:{
    updateRemoteSettings(settings:Partial<DiscordUserSettings>):any,
    updateLocalSettings(settings:Partial<DiscordUserSettings>):void
} = requireModule(e => e.default && e.default.updateLocalSettings)

export = {
    getAllSettings: userSettingModuleInternal1.getAllSettings,
    getSetting: (setting) => {
        return userSettingModuleInternal1.getAllSettings()[setting]
    },

    ...userSettingModuleInternal2
}