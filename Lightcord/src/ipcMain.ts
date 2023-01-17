import * as electron from "electron"

export default {
    on: (event:string, callback) => electron.ipcMain.on(`DISCORD_${event}`, callback),
    removeListener: (event:string, callback) => electron.ipcMain.removeListener(`DISCORD_${event}`, callback)
};