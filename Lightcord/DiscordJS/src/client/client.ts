import { EventEmitter } from "events";
import DiscordJSError from "../util/DiscordJSError";
import Collection from "@discordjs/collection";
import { Snowflake, Channel } from "..";
import { channelsModule, guildModule, UserModule, DispatcherModule } from "../util/DiscordToModules";
import { createChannel, createGuild, createMessage, createUser } from "../util/util";
import Guild from "../structures/Guild";
import ClientUser from "../structures/ClientUser";
import User from "../structures/User";

let hasInit = false
function setupEvents(client:Client){
    let dispatcher = DispatcherModule

    dispatcher.subscribe("CONNECTION_OPEN", () => {
        client.emit("self.ready")
    })

    dispatcher.subscribe("MESSAGE_CREATE", action => {
        if(action.optimistic)return // disable not sent messages
        action.message && client.emit("self.messageCreate", action.message)
    })
}

export default class Client extends EventEmitter {
    constructor(){
        super()
        if(hasInit)throw new DiscordJSError("Cannot initialized more than one client.")
        hasInit = true

        setupEvents(this)

        this.on("self.ready", () => {
            try{
                this.user = new ClientUser(UserModule.getCurrentUser())
                console.log(this.user)
            }catch(e){
                console.error(e)
                console.log(UserModule.getCurrentUser, UserModule, typeof UserModule.getCurrentUser)
            }

            this.emit("ready")
        })

        this.on("self.messageCreate", (message) => {
            this.emit("messageCreate", createMessage(message))
        })
    }

    user:ClientUser = null

    get broadcasts(){
        return [] // not giving any since they're not supported.
    }

    get browser(){
        return true // since we're in electron, we're always in browser
    }

    get channels():Collection<Snowflake, Channel>{
        const channels = Object.values(channelsModule.getAllChannels())
        return new Collection(channels.map(e => ([e.id, createChannel(e)])))
    }

    get emojis():Collection<Snowflake, any /* Emoji */>{ // TODO: Return Emojis
        return new Collection()
    }

    get guilds():Collection<Snowflake, Guild>{
        const channels = Object.values(guildModule.getAllGuilds())
        return new Collection(channels.map(e => ([e.id, createGuild(e)])))
    }

    get users():Collection<Snowflake, User>{
        const users = Object.values(UserModule.getUsers())
        return new Collection(users.map(e => [e.id, createUser(e)]))
    }

    /** Warnings and overrides for functions that are not compatible. */
    async login():Promise<never>{
        throw new DiscordJSError("Client#login is not supported. DiscordJS on lightcord will use the logged in account.")
    }

    get token():never{
        throw new DiscordJSError("Client#token is not supported. DiscordJS on lightcord will use the logged in account.")
    }
}