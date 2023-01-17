/**
 * This file is for injections other than already present modules. mostly ipc thing
 */

const electron = require("electron")
const { setBlurType, setVibrancy, getMainWindowId, events } = require("./mainScreen");
const appSettings = require("./appSettings");

const UserAgent = electron.session.defaultSession.getUserAgent()
electron.ipcMain.on("LIGHTCORD_GET_USER_AGENT", (event) => {
    event.returnValue = UserAgent
})
electron.ipcMain.on("LIGHTCORD_SET_USER_AGENT", (event, ua) => {
    const browserWindow = electron.BrowserWindow.fromId(getMainWindowId())
    browserWindow.webContents.userAgent = ua
    event.returnValue = null
})

electron.ipcMain.handle("LIGHTCORD_SET_BLUR_TYPE", async (event, blurType) => {
    setBlurType(blurType)
});

electron.ipcMain.handle("LIGHTCORD_SET_VIBRANCY", async (event, vibrancy) => {
    setVibrancy(vibrancy)
});

electron.ipcMain.on("LIGHTCORD_GET_APP_PATH", (event) => {
    event.returnValue = electron.app.getAppPath()
})
electron.ipcMain.on("LIGHTCORD_GET_PATH", (event, path) => {
    event.returnValue = electron.app.getPath(path)
})
electron.ipcMain.on("LIGHTCORD_GET_BUILD_INFOS", event => {
    event.returnValue = global.BuildInfo
})
electron.ipcMain.on("LIGHTCORD_OPEN_EXTERNAL", (event, url) => {
    try{
        const parsed = new URL(url)
        if(!["http:", "https:"].includes(parsed.protocol))return false
        electron.shell.openExternal(url)
        event.returnValue = true
    }catch(err){
        console.error(err)
        event.returnValue = false
    }
})
electron.ipcMain.on("LIGHTCORD_SET_ALWAYS_ON_TOP", (event, enabled) => {
    if(typeof enabled !== "boolean")throw new TypeError("Incorrect value: enabled should be typeof boolean.")
    const window = electron.BrowserWindow.fromId(getMainWindowId())
    if(!window)return
    window.setAlwaysOnTop(enabled)
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_GET_BROWSERWINDOW_ID", (event) => {
    event.returnValue = getMainWindowId()
})
electron.ipcMain.on("LIGHTCORD_GET_WEBCONTENTS_ID", (event) => {
    event.returnValue = electron.BrowserWindow.fromId(getMainWindowId()).webContents.id
})
electron.ipcMain.on("LIGHTCORD_GET_SETTINGS", (event) => {
    event.returnValue = appSettings.getSettings().settings
})
electron.ipcMain.on("LIGHTCORD_SET_SETTING", (event, key, value) => {
    appSettings.getSettings().set(key, value)
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_DELETE_SETTING", (event, key) => {
    appSettings.getSettings().delete(key)
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_SAVE_SETTINGS", (event) => {
    appSettings.getSettings().save()
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_REMOVE_DEVTOOLS_EXTENSION", (event, ext) => {
    electron.session.defaultSession.removeExtension(ext)
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_ADD_DEVTOOLS_EXTENSION", async (event, ext) => {
    try{
        await electron.session.defaultSession.loadExtension(ext)
        event.returnValue = true
    }catch(err){
        console.error(err)
        event.returnValue = false
    }
})
electron.ipcMain.on("LIGHTCORD_RELAUNCH_APP", (event, opts) => {
    electron.app.relaunch(opts)
    electron.app.quit()
    event.returnValue = null
})
electron.ipcMain.on("LIGHTCORD_GET_IS_DEVTOOLS_OPEN", (event) => {
    event.returnValue = electron.BrowserWindow.fromId(getMainWindowId()).webContents.isDevToolsOpened()
})

// disable Discord's tracking request, error in console
electron.session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    if(/api\/v\d+\/science$/g.test(details.url))return callback({cancel: true})
    return callback({})
})

events.on("ready", () => {
    const browserWindow = electron.BrowserWindow.fromId(getMainWindowId())
    const webContents = browserWindow.webContents

    webContents.on("devtools-opened", () => {
        webContents.send("LIGHTCORD_DEVTOOLS_OPEN")
    })
})