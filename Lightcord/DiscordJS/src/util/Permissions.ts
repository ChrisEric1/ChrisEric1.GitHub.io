import BitField from "./BitField";
import * as util from "util";

/**
 * Data structure that makes it easy to interact with a permission bitfield. All {@link GuildMember}s have a set of
 * permissions in their guild, and each channel in the guild may also have {@link PermissionOverwrites} for the member
 * that override their default permissions.
 * @extends {BitField}
 */
export default class Permissions extends BitField {
    /**
     * @param {number|PermissionResolvable} permissions Permissions or bitfield to read from
     */
    constructor(permissions: number | PermissionResolvable) {
        super(permissions);
    }

    /**
     * Bitfield of the packed permissions
     * @type {number}
     * @see {@link Permissions#bitfield}
     * @deprecated
     * @readonly
     */
    get raw() {
        return this.bitfield;
    }

    set raw(raw) {
        this.bitfield = raw;
    }

    /**
     * Checks whether the bitfield has a permission, or any of multiple permissions.
     * @param {PermissionResolvable} permission Permission(s) to check for
     * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
     * @returns {boolean}
     */
    any(permission: PermissionResolvable, checkAdmin: boolean = true): boolean {
        return (
            (checkAdmin && super.has((this.constructor as any).FLAGS.ADMINISTRATOR)) ||
            super.any(permission)
        );
    }

    /**
     * Checks whether the bitfield has a permission, or multiple permissions.
     * @param {PermissionResolvable} permission Permission(s) to check for
     * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
     * @returns {boolean}
     */
    has(permission: PermissionResolvable, checkAdmin: boolean = true): boolean {
        return (
            (checkAdmin && super.has((this.constructor as any).FLAGS.ADMINISTRATOR)) ||
            super.has(permission)
        );
    }

    /**
     * Numeric permission flags. All available properties:
     * - `ADMINISTRATOR` (implicitly has *all* permissions, and bypasses all channel overwrites)
     * - `CREATE_INSTANT_INVITE` (create invitations to the guild)
     * - `KICK_MEMBERS`
     * - `BAN_MEMBERS`
     * - `MANAGE_CHANNELS` (edit and reorder channels)
     * - `MANAGE_GUILD` (edit the guild information, region, etc.)
     * - `ADD_REACTIONS` (add new reactions to messages)
     * - `VIEW_AUDIT_LOG`
     * - `PRIORITY_SPEAKER`
     * - `STREAM`
     * - `VIEW_CHANNEL`
     * - `READ_MESSAGES` **(deprecated)**
     * - `SEND_MESSAGES`
     * - `SEND_TTS_MESSAGES`
     * - `MANAGE_MESSAGES` (delete messages and reactions)
     * - `EMBED_LINKS` (links posted will have a preview embedded)
     * - `ATTACH_FILES`
     * - `READ_MESSAGE_HISTORY` (view messages that were posted prior to opening Discord)
     * - `MENTION_EVERYONE`
     * - `USE_EXTERNAL_EMOJIS` (use emojis from different guilds)
     * - `EXTERNAL_EMOJIS` **(deprecated)**
     * - `CONNECT` (connect to a voice channel)
     * - `SPEAK` (speak in a voice channel)
     * - `MUTE_MEMBERS` (mute members across all voice channels)
     * - `DEAFEN_MEMBERS` (deafen members across all voice channels)
     * - `MOVE_MEMBERS` (move members between voice channels)
     * - `USE_VAD` (use voice activity detection)
     * - `CHANGE_NICKNAME`
     * - `MANAGE_NICKNAMES` (change other members' nicknames)
     * - `MANAGE_ROLES`
     * - `MANAGE_ROLES_OR_PERMISSIONS` **(deprecated)**
     * - `MANAGE_WEBHOOKS`
     * - `MANAGE_EMOJIS`
     * @type {Object}
     * @see {@link https://discord.com/developers/docs/topics/permissions}
     */
    static FLAGS:{
        CREATE_INSTANT_INVITE: number,
        KICK_MEMBERS: number,
        BAN_MEMBERS: number,
        ADMINISTRATOR: number,
        MANAGE_CHANNELS: number,
        MANAGE_GUILD: number,
        ADD_REACTIONS: number,
        VIEW_AUDIT_LOG: number,
        PRIORITY_SPEAKER: number,
        STREAM: number,

        VIEW_CHANNEL: number,
        READ_MESSAGES: number,
        SEND_MESSAGES: number,
        SEND_TTS_MESSAGES: number,
        MANAGE_MESSAGES: number,
        EMBED_LINKS: number,
        ATTACH_FILES: number,
        READ_MESSAGE_HISTORY: number,
        MENTION_EVERYONE: number,
        EXTERNAL_EMOJIS: number,
        USE_EXTERNAL_EMOJIS: number,

        CONNECT: number,
        SPEAK: number,
        MUTE_MEMBERS: number,
        DEAFEN_MEMBERS: number,
        MOVE_MEMBERS: number,
        USE_VAD: number,

        CHANGE_NICKNAME: number,
        MANAGE_NICKNAMES: number,
        MANAGE_ROLES: number,
        MANAGE_ROLES_OR_PERMISSIONS: number,
        MANAGE_WEBHOOKS: number,
        MANAGE_EMOJIS: number,
    } = {
        CREATE_INSTANT_INVITE: 1 << 0,
        KICK_MEMBERS: 1 << 1,
        BAN_MEMBERS: 1 << 2,
        ADMINISTRATOR: 1 << 3,
        MANAGE_CHANNELS: 1 << 4,
        MANAGE_GUILD: 1 << 5,
        ADD_REACTIONS: 1 << 6,
        VIEW_AUDIT_LOG: 1 << 7,
        PRIORITY_SPEAKER: 1 << 8,
        STREAM: 1 << 9,

        VIEW_CHANNEL: 1 << 10,
        READ_MESSAGES: 1 << 10,
        SEND_MESSAGES: 1 << 11,
        SEND_TTS_MESSAGES: 1 << 12,
        MANAGE_MESSAGES: 1 << 13,
        EMBED_LINKS: 1 << 14,
        ATTACH_FILES: 1 << 15,
        READ_MESSAGE_HISTORY: 1 << 16,
        MENTION_EVERYONE: 1 << 17,
        EXTERNAL_EMOJIS: 1 << 18,
        USE_EXTERNAL_EMOJIS: 1 << 18,

        CONNECT: 1 << 20,
        SPEAK: 1 << 21,
        MUTE_MEMBERS: 1 << 22,
        DEAFEN_MEMBERS: 1 << 23,
        MOVE_MEMBERS: 1 << 24,
        USE_VAD: 1 << 25,

        CHANGE_NICKNAME: 1 << 26,
        MANAGE_NICKNAMES: 1 << 27,
        MANAGE_ROLES: 1 << 28,
        MANAGE_ROLES_OR_PERMISSIONS: 1 << 28,
        MANAGE_WEBHOOKS: 1 << 29,
        MANAGE_EMOJIS: 1 << 30,
    };

    /**
     * Bitfield representing every permission combined
     * @type {number}
     */
    static ALL: number = Object.keys(Permissions.FLAGS).reduce(
        (all, p) => all | Permissions.FLAGS[p],
        0
    );

    /**
     * Bitfield representing the default permissions for users
     * @type {number}
     */
    static DEFAULT: number = 104324673;
}

Object.defineProperty(Permissions.prototype, "raw", {
    get: util.deprecate(
        Object.getOwnPropertyDescriptor(Permissions.prototype, "raw").get,
        "EvaluatedPermissions#raw is deprecated use Permissions#bitfield instead"
    ),
    set: util.deprecate(
        Object.getOwnPropertyDescriptor(Permissions.prototype, "raw").set,
        "EvaluatedPermissions#raw is deprecated use Permissions#bitfield instead"
    ),
});

/**
 * Data that can be resolved to give a permission number. This can be:
 * * A string (see {@link Permissions.FLAGS})
 * * A permission number
 * @typedef {string|number|Permissions|PermissionResolvable[]} PermissionResolvable
 */
export type PermissionResolvable =
    | keyof typeof Permissions.FLAGS
    | number
    | Permissions
    | PermissionResolvable[];
