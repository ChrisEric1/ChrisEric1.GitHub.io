import {app} from "electron"
import Settings from "./common/Settings"
import * as fs from "fs"

let settings: Settings

export default Object.assign(getSettings, {
    init,
    getSettings
}) as typeof getSettings & {init:typeof init, getSettings: typeof getSettings}

export function getSettings(){
    if(settings)return settings
    init()
    return settings
}

export function init(){
    fs.mkdirSync(app.getPath("userData"), {recursive: true})
    settings = new Settings(app.getPath("userData"))
}