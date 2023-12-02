import { requireModule } from "../DiscordToModules"
import { Snowflake } from "../.."

let acknowledgeModuleInternal1:{
    bulkAck(channels:{
        channelId: Snowflake,
        messageId: Snowflake
    }[]):void
} = requireModule(e => e && e.bulkAck)

export = {
    bulkAck: acknowledgeModuleInternal1.bulkAck
}