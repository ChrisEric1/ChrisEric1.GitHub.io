import { notices, noticeWithoutID, notice, events as noticeEvents } from "../components/private/Notices";
import Utils from "./Utils";
import uuid from "./uuid";
import cloneNullProto from "./cloneNullProto";
import { EventEmitter } from "events";
import { defaultNotice } from "../components/private/Notice";
import excludeProperties from "./excludeProperties";
import NOOP from "./noop";
import WebpackLoader, { WebpackLoaderError } from "./WebpackLoader";

let soundModule
/**
 * Tools for interacting with 
 */
export default new class DiscordTools {
    /**
     * Shows a notice on the top of Discord.
     * @param data Data of the notice.
     */
    showNotice(data:NoticeData):Notice{
        if(typeof data !== "object" || typeof data.text !== "string")throw new Error(`This notice is not valid. Given: ${Utils.formatJSObject(data)}`)
        let newData = cloneNullProto(Object.assign({}, defaultNotice, data)) as notice
        newData.id = uuid()
        notices.push(newData)
        noticeEvents.emit("noticeUpdate")
        const notice = new Notice(newData)
        return notice
    }

    /**
     * Get all the notices in queue.
     */
    get notices():Notice[]{
        return notices.map(data => new Notice(data))
    }

    /**
     * Quickly send notification (Even when no focused.)
     * @param data The notification. Be sure to include all properties except functions cause they're optional.
     * Notifications have a timeout of 3-5 seconds.
     * They look like this: https://i.imgur.com/jzuxKKu.png
     */
    showNotification(data:NotificationData):Notification{
        const notification = new window.Notification(data.title, excludeProperties(data, [
            "title",
            "onClick",
            "onClose",
            "onShow"
        ]))
        notification.onclick = data.onClick || NOOP
        notification.onshow = data.onShow || NOOP
        notification.onclose = data.onClose || NOOP
        return notification
    }

    /**
     * Create a sound for later use.
     * @param sound The sound as defined in the Sound type.
     */
    createSound(sound:Sound){
        soundModule = soundModule || WebpackLoader.findByUniqueProperties(["createSound"])
        if(!soundModule)throw new WebpackLoaderError("Couldn't find soundModule.")
        const created = soundModule.createSound(sound)
        return created
    }

    /**
     * Same as createSource, except it automatically plays.
     * @param sound The sound as defined in the Sound type.
     */
    playSound(sound:Sound){
        const created = this.createSound(sound)
        created.play()
        return created
    }
}

/**
 * List of valid sounds.
 */
export type Sound = "call_calling"|"call_ringing"|"call_ringing_beat"|"ddr-down"|"ddr-left"|"ddr-right"|"ddr-up"|"deafen"|"discodo"|"disconnect"|"human_man"|"mention1"|"mention2"|"mention3"|"message1"|"message2"|"message3"|"mute"|"overlayunlock"|"ptt_start"|"ptt_stop"|"reconnect"|"robot_man"|"stream_ended"|"stream_started"|"stream_user_joined"|"stream_user_left"|"undeafen"|"unmute"|"user_join"|"user_leave"|"user_moved"

/**
 * Notifications informations.
 */
export type NotificationData = {
    /** The title of the notification */
    title: string,
    /** The body of the notification. Could be truncated. */
    body: string,
    /** An http(s) link to an icon. */
    icon: string,
    /** When the notification is showing */
    onShow?: () => void,
    /** When the user clicked the notification */
    onClick?: () => void,
    /** When the notification has been closed. */
    onClose?: () => void
}

export type NoticeData = noticeWithoutID

const EventHandler = function(){
    if(this.removed !== this.state.removed){
        if(this.removed){
            this.emit("removed")
        }
    }
    if(this.showing !== this.state.showing){
        if(this.showing){
            this.emit("showing", true)
        }else{
            this.emit("showing", false)
        }
    }
    if(this.index !== this.state.index){
        this.emit("index", this.index)
    }
    this.state.removed = this.removed
    this.state.index = this.index
    this.state.showing = this.showing
}

/** A notice interface for modifying it and subscribing to events. */
export class Notice extends EventEmitter {
    constructor(data){
        super()
        this.data = data

        this.state = {
            removed: this.removed,
            showing: this.showing,
            index: this.index
        }

        let eventFunc = EventHandler.bind(this)
        noticeEvents.on("noticeUpdate", eventFunc)
        this.on("removed", () => {
            noticeEvents.off("noticeUpdate", eventFunc)
        })
    }

    /**
     * Will be called whem the notice is removed.
     */
    on(event: "removed", listener: () => void):this
    /**
     * Will be called when the notice is visible or not.
     */
    on(event: "showing", listener: (isShowing:boolean) => void):this
    /**
     * Will be called when the notice queue changes.
     */
    on(event: "index", listener: (index:number) => void):this
    on(event: string, listener: (...args:any[]) => void){
        return super.on(event, listener)
    }

    /**
     * Will be called whem the notice is removed.
     */
    once(event: "removed", listener: () => void):this
    /**
     * Will be called when the notice is visible or not.
     */
    once(event: "showing", listener: (isShowing:boolean) => void):this
    /**
     * Will be called when the notice queue changes.
     */
    once(event: "index", listener: (index:number) => void):this
    once(event: string, listener: (...args:any[]) => void){
        return super.once(event, listener)
    }

    off(event: "removed", listener: () => void):this
    off(event: "showing", listener: (isShowing:boolean) => void):this
    off(event: "index", listener: (index:number) => void):this
    off(event: string, listener: (...args:any[]) => void){
        return super.off(event, listener)
    }

    /** Please do not modify this. It is used internally to emit events only if the data has changed. */
    private state:{
        removed:boolean,
        showing:boolean,
        index:number
    }

    private nextTickRefresh:boolean = false

    /** if the notice is not, and will not show anymore. */
    get removed():boolean{
        return !notices.find(e => e.id === this.id)
    }
    /** If the notice is showing right now. */
    get showing():boolean{
        return this.index === 0
    }
    /** The position in the queue, 0 is showing. */
    get index():number{
        return notices.findIndex(e => e.id === this.id)
    }
    /** The id of the notice. */
    get id(){
        return this.data.id
    }

    update(data: Partial<notice>){
        for(let key in data){
            if(key === "id")continue
            this.data[key] = data[key]
        }

        if(!this.nextTickRefresh){
            this.nextTickRefresh = true
            process.nextTick(() => {
                this.nextTickRefresh = false
                noticeEvents.emit("noticeUpdate")
            })
        }
    }

    get text(){
        return this.data.text
    }
    set text(text){
        this.update({
            text
        })
    }

    get type(){
        return this.data.type
    }
    set type(type){
        this.update({
            type
        })
    }

    get buttonText(){
        return this.data.buttonText
    }
    set buttonText(buttonText:string){
        this.update({
            buttonText
        })
    }

    get onClick(){
        return this.data.onClick
    }
    set onClick(onClick){
        this.update({
            onClick
        })
    }

    remove(){
        if(this.removed)return
        notices.splice(this.index, 1)
        noticeEvents.emit("noticeUpdate")
    }
    data:notice
}