import * as path from "path"

global["modulePath"] = path.join(__dirname, "..", "modules")

export default function requireNativeDiscordModule(id){
    return require(path.join(__dirname, "..", "modules", id))
}