const electron = require("electron")
const { useShim } = require("./patchNotifications");
const appSettings = window.Lightcord.Api.settings

module.exports = {
    NotificationsUseShim: (value) => {
        if(typeof value !== "boolean")return
        appSettings.set("DEFAULT_NOTIFICATIONS", !value)
        appSettings.save()
        useShim(value)
    }
}