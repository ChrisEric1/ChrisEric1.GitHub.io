import BaseChannel from "./BaseChannel";
import { DiscordChannel, guildModule } from "../util/DiscordToModules";
import { createChannel, createGuild } from "../util/util";

export default class GuildChannel extends BaseChannel {
    constructor(channel:DiscordChannel){
        super(channel)
    }

    get guild(){
        return createGuild(guildModule.getGuild(this.DiscordChannel.guild_id))
    }

    get guild_id(){
        return this.DiscordChannel.guild_id
    }
}