import { Snowflake, Channel } from ".."
import { DiscordGuild, channelsModule, guildModule, UserSettingsModule, ConstantsModule, CdnModule, AckModule } from "../util/DiscordToModules"
import BaseStructure from "./BaseStructure"
import { createChannel, createGuildMember, createRole, UserResolvable, resolveUserID, ChannelData, ChannelCreationOverwrites } from "../util/util"
import Collection from "@discordjs/collection"
import SnowflakeUtil from "../util/Snowflake"
import GuildMember from "./GuildMember"
import { MessageNotificationType, ChannelTypes } from "../util/Constants"
import Role from "./Role"
import DiscordJSError from "../util/DiscordJSError"
import PermissionOverwrites from "./PermissionOverwrites"

export default class Guild extends BaseStructure {
    DiscordGuild:DiscordGuild
    constructor(data:DiscordGuild){
        super()
        this.DiscordGuild = data
    }

    get id(): Snowflake{
        return this.DiscordGuild.id
    }

    get afkChannel():Channel{
        if(!this.afkChannelID)return null
        return createChannel(channelsModule.getChannel(this.afkChannelID))
    }

    get afkChannelID():Snowflake{
        return this.DiscordGuild.afkChannelId
    }

    get afkTimeout():number{
        return this.DiscordGuild.afkTimeout
    }

    get applicationID():Snowflake{
        return this.DiscordGuild.application_id
    }

    get available():boolean{
        return true
    }

    get channels():Collection<Snowflake, Channel>{{
        return this.client.channels.filter(channel => channel.guild_id === this.id)
    }}

    get createdAt():Date{
        return SnowflakeUtil.deconstruct(this.id).date
    }

    get createdTimestamp():number{
        return this.createdAt.getTime()
    }

    get defaultChannel(){
        return this.channels.get(this.id)
    }

    get defaultMessageNotifications():number{
        return this.DiscordGuild.defaultMessageNotifications
    }

    deleted:boolean = false

    get embedEnabled(){
        return true
    }

    get emojis(){
        return this.client.emojis.filter(e => e.guild_id === this.id)
    }

    get explicitContentFilter(){
        return this.DiscordGuild.explicitContentFilter
    }

    get features(){
        return Array.from(this.DiscordGuild.features)
    }

    get icon(){
        return this.DiscordGuild.icon
    }

    get iconURL(){
        return this.DiscordGuild.getIconURL().replace(".webp", ".jpg")
    }

    get joinedAt(){
        return new Date(this.DiscordGuild.joinedAt)
    }

    get joinedTimestamp(){
        return this.DiscordGuild.joinedAt.getTime()
    }

    get large(){
        return false
    }

    get me(){
        return this.members.find(member => member.id === this.client.user.id)
    }

    get memberCount(){
        return guildModule.getMemberCount(this.id)
    }

    get members(){
        return new Collection<Snowflake, GuildMember>(guildModule.getMembers(this.id).map(member => [member.userId, createGuildMember(member)]))
    }

    get messageNotifications():MessageNotificationType{
        return MessageNotificationType[guildModule.getMessageNotifications(this.id)] as unknown as MessageNotificationType
    }

    get mfaLevel(){
        return this.DiscordGuild.mfaLevel
    }

    get mobilePush():boolean{
        return guildModule.getNotificationsState().userGuildSettings[this.id].mobile_push
    }

    get muted(){
        return guildModule.getNotificationsState().userGuildSettings[this.id].muted
    }

    get name(){
        return this.DiscordGuild.name
    }

    get nameAcronym(){
        return this.DiscordGuild.acronym
    }

    get owner(){
        return this.members.get(this.ownerID)
    }

    get ownerID(){
        return this.DiscordGuild.ownerId
    }

    get position(){
        let guildPositions = UserSettingsModule.getAllSettings().guildPositions
        if(!guildPositions)return 0
        return guildPositions.indexOf(this.id)
    }

    get presences(){ // TODO: Add activities.
        return new Collection()
    }

    get region(){
        return this.DiscordGuild.region
    }

    get roles(){
        return new Collection<Snowflake, Role>(Object.values(this.DiscordGuild.roles).map(role => [role.id, createRole(role)]))
    }

    get splash(){
        return this.DiscordGuild.splash
    }

    get splashURL(){
        return CdnModule.getGuildSplashURL({
            id: this.id,
            splash: this.splash,
            size: ConstantsModule.SPLASH_SIZE
        })
    }

    get suppressEveryone(){
        return guildModule.getNotificationsState().userGuildSettings[this.id].suppress_everyone
    }

    get systemChannel(){
        return this.client.channels.get(this.systemChannelID)
    }

    get systemChannelID(){
        return this.DiscordGuild.systemChannelId
    }
    
    get verificationLevel(){
        return this.DiscordGuild.verificationLevel
    }

    get verified(){
        return this.features.includes("VERIFIED")
    }

    get voiceConnection(){// TODO: Implement if possible VoiceConnection. Maybe not fully like discord.js, but at least can see if you're connected.
        return null
    }

    get banner(){
        return this.DiscordGuild.banner
    }

    get bannerURL(){
        return CdnModule.getGuildBannerURL({
            id: this.id,
            banner: this.banner
        })
    }

    get description(){
        return this.DiscordGuild.description
    }

    get embedChannel(){ // TODO: Implement embedChannel
        return null
    }

    get embedChannelID(){ // TODO: Implement embedChannelID
        return null
    }
    
    get maximumMembers(){ // TODO: Correctly Implement maximumMembers if possible
        return 250000
    }

    get maximumPresences(){ // TODO: Correctly Implement maximumPresences if possible
        return 5000
    }

    get widgetEnabled(){ // TODO: Correctly Implement widgetEnabled if possible
        return false
    }

    get widgetChannelID(){ // TODO: Correctly Implement widgetChannelID if possible
        return null
    }

    get widgetChannel(){ // TODO: Correctly Implement widgetChannel if possible
        return null
    }

    get vanityURLCode(){
        return this.DiscordGuild.vanityURLCode
    }
    /** FUNCTIONS */
    async acknowledge(){
        AckModule.bulkAck(this.channels.filter(e => e.type === "text").map(e => {
            return {
                channelId: e.id,
                messageId: channelsModule.lastMessageId(e.id)
            }
        }))
    }

    addMember(...args:any):Promise<GuildMember>{
        return Promise.reject(new DiscordJSError("This method is not available on Lightcord."))
    }

    allowDMs(allow:boolean){
        let restricted = UserSettingsModule.getAllSettings().restrictedGuilds
        if(allow){
            if(!restricted.includes(this.id))return Promise.resolve(this)
            restricted = restricted.filter(e => e !== this.id)
        }else{
            if(restricted.includes(this.id))return Promise.resolve(this)
            restricted.push(this.id)
        }
        return UserSettingsModule.updateRemoteSettings({
            restrictedGuilds: restricted
        }).then(() => this)
    }

    async ban(user:UserResolvable, {
        days = 0,
        reason = null
    }: {
        days?: number,
        reason?: string
    } = {}):Promise<Snowflake>{ // always returning a snowflake
        let id = resolveUserID(user)
        if(!id)return Promise.reject(new DiscordJSError("Given user could not be resolved to an user ID."))
        
        let result = await guildModule.banUser(this.id, id, days, reason).catch(err => err)
        if(result instanceof Error || result.status !== 204){
            let message = result.body
            if(Array.isArray(message)){
                message = message[0]
            }else{
                if(message.user_id){
                    message = "User: "+ message.user_id[0]
                }else if(message.delete_message_days){
                    message = "Days: "+ message.delete_message_days[0]
                }else if(message.reason){
                    message = "Reason: "+ message.reason[0]
                }else{
                    message = result.text
                }
            }
            throw new DiscordJSError(message)
        }
        return id
    }

    createChannel(name:string, typeOrOptions:ChannelTypes|ChannelData = ChannelTypes.TEXT, permissionOverwrites?: ChannelCreationOverwrites[] | Collection<Snowflake, PermissionOverwrites>, reason?: string){
        const [opts, type] = typeof typeOrOptions === "string" ? [
            {},
            typeOrOptions
        ] : [
            typeOrOptions,
            typeOrOptions.type
        ]
        const options = {
            name: name || "Unknown Channel",
            type: type || "text"
        }
        //TODO: CreateGuildChannels and handle permissions
        //channelsModule.createGuildChannel(this.id, options.type, optinos.name)
    }

    fetch():Promise<Guild>{ // Guild is synced by Discord. Only refreshing from cache.
        let guild = guildModule.getGuild(this.id)
        if(!guild){
            this.deleted = true
            return Promise.resolve(this)
        }
        this.DiscordGuild = guild
        return Promise.resolve(this)
    }



}