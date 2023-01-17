import { Snowflake } from ".."

export enum ChannelTypes {
    TEXT = "text",
    DM = "dm",
    VOICE = "voice",
    GROUP_DM = "group",
    CATEGORY = "category",
    NEWS = "news",
    STORE = "store"
}

export enum MessageNotificationType {
    "EVERYTHING",
    "MENTIONS",
    "NOTHING",
    "INHERIT"
}

export type Status = "online" | "idle" | "invisible" | "offline" | "dnd"

export const AVATAR_SIZE = 4096