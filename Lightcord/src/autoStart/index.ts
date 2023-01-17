import autoLaunch from "auto-launch"

const autoStart = new autoLaunch({
    name: "Lightcord"
})

export default {
    install(callback:(err?:Error|void) => void){
        autoStart.enable()
        .then(callback, callback)
    },
    isInstalled(callback:(isInstalled:boolean)=>void){
        autoStart.isEnabled()
        .then(callback)
    },
    uninstall(callback:(err?:Error|void) => void){
        autoStart.disable()
        .then(callback, callback)
    },
    update(callback:(err?:Error|void) => void){
        autoStart.enable()
        .then(callback, callback)
    }
}