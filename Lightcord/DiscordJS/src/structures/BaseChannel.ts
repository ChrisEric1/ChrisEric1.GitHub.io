import { DiscordChannel, channelsModule } from "../util/DiscordToModules";
import Client from "../client/client";
import BaseStructure from "./BaseStructure";
import Snowflake from "../util/Snowflake"

export default class BaseChannel extends BaseStructure {
    id:string
    deleted:boolean
    DiscordChannel:DiscordChannel
    constructor(channel:DiscordChannel){
        super()
        this.id = channel.id
        this.deleted = false
        this.DiscordChannel = channel
    }

    get createdAt():Date{
        return new Date(this.createdTimestamp)
    }
    get createdTimestamp(): number{
        return Snowflake.deconstruct(this.id).timestamp
    }

    delete() {
        return channelsModule.delete(this.id);
    }
}