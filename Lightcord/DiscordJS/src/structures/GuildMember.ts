import BaseStructure from "./BaseStructure";
import { DiscordGuildMember } from "../util/DiscordToModules";

export default class GuildMember extends BaseStructure {
    DiscordGuildMember: DiscordGuildMember
    constructor(data: DiscordGuildMember){
        super()
        this.DiscordGuildMember = data
    }

    get id(){
        return this.DiscordGuildMember.userId
    }
}