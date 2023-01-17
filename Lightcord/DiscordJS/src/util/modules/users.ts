import { requireModule, DiscordUser } from "../DiscordToModules";
import { Snowflake } from "../..";

let userModuleInteral1:{
    getUser(user_id: Snowflake):DiscordUser,
    getUsers():{
        [user_id:string]: DiscordUser
    },
    forEach(callbackfn: (user:DiscordUser) => void):void,
    findByTag(username:string, discriminator:string):DiscordUser,
    filter(filterdn: (user:DiscordUser) => boolean, sort?:boolean):DiscordUser[],
    getCurrentUser():DiscordUser,
    getNullableCurrentUser():DiscordUser
} = requireModule(e => e.default && e.default.getUser)

let userModuleInteral2:{
    getNote(user_id: Snowflake):{
        loading: boolean,
        note?: string
    }
} = requireModule(e => e.default && e.default.getNote)

export = {
    getUser: userModuleInteral1.getUser,
    getUsers: userModuleInteral1.getUsers,
    forEach: userModuleInteral1.forEach,
    findByTag: userModuleInteral1.findByTag,
    filter: userModuleInteral1.filter,
    getCurrentUser: userModuleInteral1.getCurrentUser,
    getNullableCurrentUser: userModuleInteral1.getNullableCurrentUser,

    getNote: userModuleInteral2.getNote
}