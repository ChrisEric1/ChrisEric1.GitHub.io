import { DiscordChannel, DiscordGuild, DiscordGuildMember, DiscordRole, DiscordMessage, DiscordUser } from "./DiscordToModules"
import { Channel, Snowflake } from "..";
import BaseChannel from "../structures/BaseChannel";
import Guild from "../structures/Guild";
import TextChannel from "../structures/TextChannel";
import GuildMember from "../structures/GuildMember";
import Role from "../structures/Role";
import User from "../structures/User";
import Message from "../structures/Message";
import { ChannelTypes } from "./Constants";
import CategoryChannel from "../structures/CategoryChannel";
import Collection from "@discordjs/collection";
import Permissions, { PermissionResolvable } from "./Permissions";
import PermissionOverwrites from "../structures/PermissionOverwrites";

export function createChannel(channel:DiscordChannel):Channel{
    let constructor = channels[channel.type] || BaseChannel
    return new constructor(channel)    
}

const channels:(new(channel:DiscordChannel) => Channel)[] = [
    TextChannel
]

export function createGuild(guild:DiscordGuild):Guild{
    return new Guild(guild)
}

export function createGuildMember(member:DiscordGuildMember):GuildMember{
    return new GuildMember(member)
}

export function createRole(role:DiscordRole):Role{
    return new Role(role)
}

export function createMessage(message:DiscordMessage):Message{
    return new Message(message)
}

export function createUser(user:DiscordUser):User{
    return new User(user)
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
             if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    }); 
}

/**
 * Transforms a snowflake from a decimal string to a bit string.
 * @param  {string} num Snowflake to be transformed
 * @returns {string}
 * @private
 */
export function idToBinary(num:string):string{
    let bin = '';
    let high = parseInt(num.slice(0, -10)) || 0;
    let low = parseInt(num.slice(-10));
    while (low > 0 || high > 0) {
        bin = String(low & 1) + bin;
        low = Math.floor(low / 2);
        if (high > 0) {
            low += 5000000000 * (high % 2);
            high = Math.floor(high / 2);
        }
    }
    return bin;
}  

/**
* Transforms a snowflake from a bit string to a decimal string.
* @param  {string} num Bit string to be transformed
* @returns {string}
* @private
*/
export function binaryToID(num:string):string {
    let dec = '';

    while (num.length > 50) {
        const high = parseInt(num.slice(0, -32), 2);
        const low = parseInt((high % 10).toString(2) + num.slice(-32), 2);

        dec = (low % 10).toString() + dec;
        num = Math.floor(high / 10).toString(2) +
        Math.floor(low / 10)
        .toString(2)
        .padStart(32, '0');
    }

    let num2 = parseInt(num, 2);
    while (num2 > 0) {
        dec = (num2 % 10).toString() + dec;
        num2 = Math.floor(num2 / 10);
    }

    return dec;
}



export type UserResolvable = User | Snowflake | Message | Guild | GuildMember

export function resolveUserID(user:UserResolvable){
    if(typeof user === "string")return user // ID
    if(user instanceof User)return user.id // User
    if(user instanceof Message)return user.author.id // Message Author
    if(user instanceof Guild)return user.ownerID // Guild
    if(user instanceof GuildMember)return user.id // GuildMember
    return null
}

export type ChannelData = {
    type?: ChannelTypes,
    name?: string,
    position?: number,
    topic?: string,
    nsfw?: boolean,
    bitrate?: number,
    userLimit?: number,
    parent?: CategoryChannel|Snowflake,
    permissionOverwrites?: ChannelCreationOverwrites[] | Collection<Snowflake, PermissionOverwrites>,
    rateLimitPerUser?: number
}

export type ChannelCreationOverwrites = {
    allow?: PermissionResolvable,
    /**
     * @deprecated
     */
    allowed?: PermissionResolvable,
    deny?: PermissionResolvable,
    /**
     * @deprecated
     */
    denied?: PermissionResolvable,
    id?: GuildMemberResolvable | RoleResolvable
}

export {BitFieldResolvable} from "./BitField"

export type GuildMemberResolvable = GuildMember | User

export type RoleResolvable = Role | Snowflake