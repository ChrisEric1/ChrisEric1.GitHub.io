const ipcRenderer = require("electron").ipcRenderer


if(process.platform === "win32"){
    let useShim = false

    const originalNotification = window.Notification

    ipcRenderer.send("NOTIFICATIONS_CLEAR")

    const notifications = {}
    ipcRenderer.on("NOTIFICATION_CLICK", (e, id) => {
        var notification = notifications[id];
        if(notification){
            notification.onclick()
            notification.close()
        }
    })
    class LightcordNotification {
        constructor(title, data){
            this.id = LightcordNotification._id++
            this.onshow = function() {}
            this.onclick = function() {}
            this.onclose = function() {}
            this.title = title
            this.body = data.body
            this.icon = data.icon
            setTimeout(() => {
                return this.onshow()
            }, 0)
            notifications[this.id] = this
            ipcRenderer.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
                theme: settingStore ? settingStore.default.theme : "dark"
            })
        }

        static _id = 0

        static requestPermission(callback){
            callback()
        }
        
        close(){
            if(!notifications[this.id])return

            delete notifications[this.id]
            ipcRenderer.send("NOTIFICATION_CLOSE", this.id)
            this.onclose()
        }
    }

    LightcordNotification.permission = "granted"

    function Notification(){
        if(useShim)return new LightcordNotification(...arguments)
        return new originalNotification(...arguments)
    }
    Object.defineProperties(Notification, {
        permission: {
            get(){
                if(useShim)return LightcordNotification.permission
                return originalNotification.permission
            }
        },
        requestPermission: {
            get(){
                if(useShim)return LightcordNotification.requestPermission
                return originalNotification.requestPermission
            }
        },
        _id: {
            get(){
                if(useShim)return LightcordNotification._id
                return originalNotification._id
            }
        }
    })
    window.Notification = Notification


    module.exports = {
        useShim(use){
            useShim = !!use
        }
    }
}else{
    module.exports = {
        useShim(){}
    }
}

let settingStore

ensureExported((e => e.default && e.default.theme))
.then(themeStore => {
    settingStore = themeStore
    ipcRenderer.send("DISCORD_UPDATE_THEME", themeStore.default.theme)
}).catch(console.error)