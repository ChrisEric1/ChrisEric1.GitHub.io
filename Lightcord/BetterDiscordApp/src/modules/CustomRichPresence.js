import {settingsRPC, defaultRPC} from "../0globals";

const dispatcher = BDModules.get(m=>m.Dispatcher&&m.default&&m.default.dispatch)[0].default
const ActionTypes = BDModules.get(m=>m.ActionTypes)[0].ActionTypes

const socketId = "lightcord-spoof-socket"
const pid = process.pid

export default new class CustomRichPresence {
    constructor(){
        this.enabled = false

        this.game = settingsRPC
    }
    
    get formatedGame(){
        if(!this.game)return null
        if(this.enabled === false)return null
        let game = {
            name: this.game.name || defaultRPC.name,
            application_id: this.game.application_id || defaultRPC.application_id,
            details: this.game.details || undefined,
            state: this.game.state || undefined,
            timestamps: this.game["timestamps.start"] ? {
                start: this.game["timestamps.start"]
            } : undefined,
            assets: this.game["assets.large"] ? {
                large_image: this.game["assets.large"],
                small_image: this.game["assets.small"] || undefined
            } : undefined
        }
        return game
    }

    sendGame(){
        dispatcher.dispatch({
            type: ActionTypes.LOCAL_ACTIVITY_UPDATE,
            socketId,
            pid,
            activity: this.formatedGame
        })   
    }

    enable() {
        if(this.enabled)return
        this.enabled = true
        console.log("Enabling custom RichPresence")

        this.set(settingsRPC || Object.create(defaultRPC))

        this.sendGame()
    }

    disable() {
        if(!this.enabled)return
        this.enabled = false
        console.log("Disabling custom RichPresence")

        this.sendGame()
    }

    async fetchAssets(applicationId){
        let assets = await BDModules.get(e => e.getAssets)[0].getAssets(applicationId)
        if(assets.undefined && typeof assets.undefined === "number"){
            throw new Error("Unknown Application")
        }
        return assets
    }

    set(activity){
        this.game = activity

        this.sendGame()
    }
}