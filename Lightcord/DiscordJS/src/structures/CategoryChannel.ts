import GuildChannel from "./GuildChannel";
import { DiscordChannel } from "../util/DiscordToModules";
import { ChannelTypes } from "../util/Constants";

export default class CategoryChannel extends GuildChannel/* implements TextBasedChannel*/ {
    constructor(data:DiscordChannel){
        super(data)
    }

    get type(): ChannelTypes.CATEGORY{
        return ChannelTypes.CATEGORY
    }
}