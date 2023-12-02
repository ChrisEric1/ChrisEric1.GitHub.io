import * as electron from "electron"

export default new class Settings {
    /**
     * Save the settings.
     * Please do it after a settings.set, or else the value will not be saved.
     */
    save():void{
        return electron.ipcRenderer.sendSync("LIGHTCORD_SAVE_SETTINGS")
    }

    /**
     * Return an object containing all settings.
     */
    get settings():any{
        return electron.ipcRenderer.sendSync("LIGHTCORD_GET_SETTINGS")
    }

    /**
     * Get a single value from the settings.
     * @param key The value key
     * @param defaultValue If the data isn't present, a default value
     * @example ```js
     * const isTabs = Lightcord.Api.settings.get("isTabs", false)
     * ```
     */
    get<Value>(key:string, defaultValue:Value):Value{
        const settings = this.settings
        if(!(key in settings)){
            return defaultValue
        }
        return settings[key]
    }

    /**
     * Set a value in the settings.
     * @param key The key
     * @param value The value
     */
    set<Value>(key:string, value:Value):void{
        return electron.ipcRenderer.sendSync("LIGHTCORD_SET_SETTING", key, value)
    }

    /**
     * Delete a value in the settings
     * @param key The key
     */
    delete(key:string):void{
        return electron.ipcRenderer.sendSync("LIGHTCORD_DELETE_SETTING", key)
    }

    /**
     * Check if a value is present in the settings.
     * @param key The key
     */
    exists(key:string):boolean{
        return key in this.settings
    }
}