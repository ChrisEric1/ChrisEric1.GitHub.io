import BaseStructure from "./BaseStructure";
import { DiscordMessage, UserModule } from "../util/DiscordToModules";
import User from "./User";

export default class Message extends BaseStructure {
    DiscordMessage:DiscordMessage
    constructor(data:DiscordMessage){
        super()
        this.DiscordMessage = data
    }

    get author(){
        return new User(UserModule.getUser(this.DiscordMessage.author.id))
    }
}