import { DiscordGuild, requireModule, DiscordGuildMember } from "../DiscordToModules"
import { Snowflake } from "../.."

let guildModuleInternal1:{
    getGuilds():{
        [k:string]:DiscordGuild
    },
    getGuild(id: Snowflake):DiscordGuild
} = requireModule(e => e.default && e.default.getGuilds && e.default.getGuild && !e.default.isFetching)

let guildModuleInternal2:{
    getMemberCount(id:Snowflake):number,
    getMemberCounts():{
        [k:string]:number
    }
} = requireModule(e => e.default && e.default.getMemberCounts && e.default.getMemberCount)

let guildModuleInternal3:{
    getAllGuildsAndMembers():{
        [guild_id:string]: {
            [user_id:string]: DiscordGuildMember
        }
    },
    memberOf(user_id:Snowflake):Snowflake[],
    getNicknames(user_id:Snowflake):string[],
    isMember(guild_id:Snowflake, user_id:Snowflake):boolean,
    getMemberIds(guild_id:Snowflake):Snowflake[],
    getMembers(guild_id:Snowflake):DiscordGuildMember[],
    getKeyedMembers(guild_id:Snowflake): {
        [user_id:string]: DiscordGuildMember
    },
    getMember(guild_id:Snowflake, user_id:Snowflake):DiscordGuildMember,
    getNick(guild_id:Snowflake, user_id:Snowflake):string
} = requireModule(e => e.default && e.default.getMembers)

type guildState = {
    suppress_everyone: boolean,
    suppress_roles: boolean,
    mobile_push: boolean,
    muted: boolean,
    message_notifications: 0|1|2,
    channel_overrides: {
        [channel_id:string]: {
            channel_id: Snowflake,
            message_notifications: 0|1|2|3,
            mute_config: {
                end_time?: string,
                selected_time_window: number
            },
            muted: boolean
        }
    },
    guild_id?: Snowflake,
    mute_config: {
        end_time?: string,
        selected_time_window: number
    },
    version: 26,
}
let guildModuleInternal4:{
    getState():{
        collapsedGuilds:any,
        userGuildSettings:{
            null: guildState,
            [guild_id:string]: guildState
        }
    },
    sSuppressEveryoneEnabled(guild_id:Snowflake):boolean,
    isSuppressRolesEnabled(guild_id:Snowflake):boolean,
    isSuppressRolesEnabled(guild_id:Snowflake):boolean,
    isMuted(guild_id:Snowflake):boolean,
    getMuteConfig(guild_id:Snowflake):guildState["mute_config"],
    getMessageNotifications(guild_id:Snowflake):0|1|2,
    getChannelOverrides(guild_id:Snowflake):guildState["channel_overrides"],
    getChannelMessageNotifications(guild_id:Snowflake, channel_id:Snowflake):0|1|2|3,
    getChannelMuteConfig(guild_id:Snowflake, channel_id:Snowflake):guildState["channel_overrides"]["id"]["mute_config"],
    getMutedChannels(guild_id:Snowflake):Set<Snowflake>,
    isChannelMuted(guild_id:Snowflake, channel_id:Snowflake):boolean,
    _isCategoryMuted(guild_id:Snowflake, channel_id:Snowflake):boolean,
    _resolvedMessageNotifications(infos:{
        guild_id: Snowflake,
        id: Snowflake,
        parent_id?: Snowflake
    }):0|1|2,
    isGuildOrCategoryOrChannelMuted(guild_id: Snowflake, channel_id: Snowflake):boolean,
    allowNoMessages(infos:{
        guild_id: Snowflake,
        id: Snowflake,
        parent_id?: Snowflake
    }):boolean,
        (infos:{
        guild_id: Snowflake,
        id: Snowflake,
        parent_id?: Snowflake
    }):boolean,
    isGuildCollapsed(guild_id: Snowflake):boolean,
    getAllSettings(): {
        userGuildSettings: {
            null: guildState,
            [guild_id:string]: guildState
        },
        mutedChannels: {
            null: Set<Snowflake>,
            [guild_id:string]: Set<Snowflake>
        },
        collapsedGuilds: any
    }
} = requireModule(e => e.default && e.default.isGuildOrCategoryOrChannelMuted)

let guildModuleInternal5:{
    kickUser(guild_id:Snowflake, user_id:Snowflake, reason:string):Promise<any>
    banUser(guild_id:Snowflake, user_id:Snowflake, days:number, reason:string):Promise<any>
} = requireModule(e => e.default && e.default.banUser)

export = {
    getAllGuilds: guildModuleInternal1.getGuilds,
    getGuild: guildModuleInternal1.getGuild,

    getMemberCount: guildModuleInternal2.getMemberCount,
    getMemberCounts: guildModuleInternal2.getMemberCounts,

    getMembers: guildModuleInternal3.getMembers,
    getMember: guildModuleInternal3.getMember,
    getMemberIds: guildModuleInternal3.getMemberIds,
    isMember: guildModuleInternal3.isMember,
    memberOf: guildModuleInternal3.memberOf,
    getNick: guildModuleInternal3.getNick,

    getMessageNotifications: guildModuleInternal4.getMessageNotifications,
    getNotificationsState: guildModuleInternal4.getState,
    
    banUser: guildModuleInternal5.banUser,
    kickUser: guildModuleInternal5.kickUser
}