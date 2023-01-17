import { Snowflake } from ".."
import { lazyLoad } from "./LazyLoader"
import { Status } from "./Constants"

export default function getModule(name:string){
    return exports[name+"Module"]
}

const BDModules = window.BDModules

export function requireModule(filter: (module:any) => boolean){
    let module = BDModules.get(filter)[0]
    return module && module.default || module
}

export const channelsModule = lazyLoad<typeof import("./modules/channels")>("channels")

export const guildModule = lazyLoad<typeof import("./modules/guilds")>("guilds")

export const UserSettingsModule = lazyLoad<typeof import("./modules/userSettings")>("userSettings")

export const ConstantsModule = lazyLoad<typeof import("./modules/constants")>("constants")

export const UserModule = lazyLoad<typeof import("./modules/users")>("users")

export const CdnModule = lazyLoad<typeof import("./modules/cdn")>("cdn")

export const AckModule = lazyLoad<typeof import("./modules/acknowledge")>("acknowledge")

export const DispatcherModule = lazyLoad<typeof import("./modules/dispatcher")>("dispatcher")

export interface DiscordMessage {
    guild_id?: Snowflake,
    attachments: {
        filename: string,
        height: number,
        id: Snowflake,
        proxy_url: string,
        size: number,
        url: string,
        width: number
    }[],
    author: {
        avatar?: string,
        discriminator: string,
        id: Snowflake,
        username: string,
        publicFlags?: number
    },
    channel_id: Snowflake,
    content: string,
    edited_timestamp?: number,
    embeds: any[],
    flags: number,
    id: Snowflake,
    member: {
        deaf: boolean,
        hoisted_role?: Snowflake,
        joined_at: string,
        mute: boolean,
        roles: Snowflake[]
    },
    mention_roles: Snowflake[],
    mentions: Snowflake[],
    pinned: boolean,
    timestamp: string,
    tts: boolean,
    type: number
}

export interface DiscordUser {
    createdAt: Date,
    avatarURL: string,
    tag: string,
    hasPremiumSubscription: boolean,
    id: Snowflake,
    username: string,
    usernameNormalized: string,
    discriminator: string,
    avatar?: string,
    email?: string,
    verified: boolean,
    bot: boolean,
    system: boolean,
    mfaEnabled: boolean,
    mobile: boolean,
    desktop: boolean,
    premiumType?: undefined|1|2,
    flags: number,
    publicFlags: number,
    phone?: string,
    nsfwAllowed?: boolean,
    getAvatarURL(format:string):string,
    getAvatarSource():string,
    isClaimed(): boolean,
    isPhoneVerified(): boolean,
    toString(): string,
    hasFlag(flag:number):boolean,
    hasFreePremium():boolean,
    hasUrgentMessages():boolean,
    isNonUserBot():boolean,
    isLocalBot():boolean,
    isVerifiedBot():boolean,
    isSystemUser():boolean,
    isStaff():boolean
}

export interface DiscordUserSettings {
    locale: string,
    status: Status,
    showCurrentGame: boolean,
    inlineAttachmentMedia: boolean,
    inlineEmbedMedia: boolean,
    gifAutoPlay: boolean,
    renderEmbeds: boolean,
    renderReactions: boolean,
    animateEmoji: boolean,
    showInAppNotifications: boolean,
    streamNotificationsEnabled: boolean,
    theme: "dark"|"light",
    enableTTSCommand: boolean,
    useRichChatTextBox: boolean,
    messageDisplayCompact: boolean,
    convertEmoticons: boolean,
    renderSpoilers: "ALWAYS"|"ON_CLICK"|"IF_MODERATOR",
    restrictedGuilds: Snowflake[],
    defaultGuildsRestricted: boolean,
    explicitContentFilter: number,
    friendSourceFlags: {
        all?: boolean,
        friends?: boolean,
        guilds?: boolean
    },
    developerMode: boolean,
    guildPositions: Snowflake[],
    guildFolders: {
        guildIds: Snowflake[],
        folderId?: number,
        folderName?: string,
        folderColor?: number
    },
    detectPlatformAccounts: boolean,
    afkTimeout: number,
    timezoneOffset: number,
    installShortcutDesktop: boolean,
    installShortcutStartMenu: boolean,
    customStatus: {
        text: string,
        expires_at: string
        emoji_id?: string
        emoji_name?: string
    },
    lowQualityImageMode: boolean,
    allowAccessibilityDetection: boolean,
    contactSyncEnabled: boolean,
    nativePhoneIntegrationEnabled: boolean,
    useSystemTheme: number,
    disableGamesTab: boolean,
    expressionPickerWidth: "min"|"max",
    emojiPickerCollapsedSections: string[],
    sync: {}
}

export interface DiscordGuild {
    acronym: string,
    id: Snowflake,
    name: string,
    description?: string,
    ownerId: Snowflake,
    icon?: string,
    splash?: string,
    banner?: string,
    features: Set<Feature>,
    preferredLocale: string,
    roles: {
        [ID: string]: DiscordRole
    },
    afkChannelId?: Snowflake,
    afkTimeout: number,
    systemChannelId?: Snowflake,
    verificationLevel: number,
    region: string,
    joinedAt: Date,
    defaultMessageNotifications: number,
    mfaLevel: number,
    application_id?: Snowflake,
    explicitContentFilter: number,
    vanityURLCode?: string,
    premiumTier: number,
    premiumSubscriberCount: number,
    systemChannelFlags: number,
    discoverySplash?: string,
    rulesChannelId?: Snowflake,
    publicUpdatesChannelId?: Snowflake,
    maxVideoChannelUsers: number,
    getIconURL(format?: string):string,
    getIconSource(format?: string):string,
    getSplashURL(size: number):string,
    getApplicationId():Snowflake,
    toString():string,
    isOwner(user_id: Snowflake):boolean,
    isOwnerWithRequiredMfaLevel(user_id: Snowflake):boolean,
    isNew(days: number):boolean,
    hasFeature(feature: Feature): boolean,
    getRole(role_id: Snowflake): DiscordRole,
    getMaxEmojiSlots():number
}

export interface DiscordRole {
    color: number,
    hoist: boolean,
    id: Snowflake,
    managed: boolean,
    mentionnable: boolean,
    name: string,
    permissions: number,
    position: number,
    originalPosition: number,
    colorString: string
}

export type Feature = "INVITE_SPLASH" | "VIP_REGIONS" | "VANITY_URL" | "VERIFIED" | "PARTNERED" | "PUBLIC" | "COMMERCE" | "NEWS" | 
    "DISCOVERABLE" | "FEATURABLE" | "ANIMATED_ICON" | "BANNER" | "PUBLIC_DISABLED" | "WELCOME_SCREEN_ENABLED"

export interface DiscordChannel {
    application_id?: Snowflake,
    bitrate?: number,
    guild_id?: Snowflake,
    icon?: string,
    id: Snowflake,
    lastMessageId?: Snowflake,
    lastPinTimestamp?: number,
    memberListId?: null,
    name?: string,
    nicks: any,
    nsfw: boolean,
    originChannelId?: Snowflake,
    ownerId?: Snowflake,
    parent_id?: Snowflake,
    permissionOverwrites: any,
    position: number,
    rateLimitPerUser: number,
    rawRecipients: DiscordRecipient[],
    recipients: Snowflake[],
    topic: string,
    type: number,
    userLimit: number,
    lastActiveTimestamp: number
}

interface DiscordRecipient {
    username: string,
    discriminator: string,
    id: Snowflake,
    avatar?: string,
    public_flags: number
}

export interface DiscordGuildMember {
    userId: Snowflake,
    nick?: string,
    roles: DiscordRole[],
    colorString?: string,
    hoistRoleId?: Snowflake,
    premiumSince?: Date
}