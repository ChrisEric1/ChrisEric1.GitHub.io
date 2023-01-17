import BaseStructure from "./BaseStructure";
import { DiscordUser, CdnModule, UserModule } from "../util/DiscordToModules";

export default class User extends BaseStructure {
    DiscordUser:DiscordUser
    constructor(data:DiscordUser){
        super()

        this.DiscordUser = data
    }
    
    get id(){
        return this.DiscordUser.id
    }

    get avatar(){
        return this.DiscordUser.avatar
    }

    get avatarURL(){
        return this.DiscordUser.avatarURL
    }

    get bot(){
        return this.DiscordUser.bot
    }

    get createdAt(){
        return new Date(this.DiscordUser.createdAt)
    }

    get createdTimestamp(){
        return this.createdAt.getTime()
    }

    get defaultAvatarURL(){
        return CdnModule.getDefaultAvatarURL(this.discriminator)
    }

    get discriminator(){
        return this.DiscordUser.discriminator
    }

    get displayAvatarURL(){
        return CdnModule.getUserAvatarURL({
            id: this.id,
            avatar: this.avatar,
            bot: this.bot,
            discriminator: this.discriminator
        }, this.avatar?.startsWith('a_') ? "gif" : "png", 4096)
    }

    get dmChannel(){
        return this.client.channels.find(e => e.type === "dm" && e.recipient.id === this.id)
    }

    get lastMessage(){ // TODO: Implement User#lastMessage
        return null 
    }

    get lastMessageID(){ // TODO: Implement User#lastMessageID
        return null
    }

    get note(){
        let note = UserModule.getNote(this.id)
        if(!note || !note.note)return null
        return note.note
    }

    get presence(){
        return null
    }
}