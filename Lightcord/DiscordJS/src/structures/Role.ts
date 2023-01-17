import BaseStructure from "./BaseStructure";
import { DiscordRole } from "../util/DiscordToModules";

export default class Role extends BaseStructure {
    DiscordRole:DiscordRole
    constructor(data:DiscordRole){
        super()
        this.DiscordRole = data
    }
}