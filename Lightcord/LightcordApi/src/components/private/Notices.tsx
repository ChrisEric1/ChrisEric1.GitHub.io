import Notice from "./Notice"
import uuid from "../../modules/uuid"
import { EventEmitter } from "events"

export const events = new EventEmitter()

export default class Notices extends React.Component<{container: any}> {
    static displayName = "LightcordNotices"
    static defaultProps = {}
    constructor(props: Readonly<{ container: any }>){
        super(props)

        this.noticeHandler = this.noticeHandler.bind(this)
    }

    noticeHandler(){
        this.forceUpdate()
    }

    componentWillMount(){
        events.on("noticeUpdate", this.noticeHandler)
    }

    componentWillUnmount(){
        events.off("noticeUpdate", this.noticeHandler)
    }

    render(){
        if(!this.hasNotice)return null
        const notice = notices[0]
        return <Notice {...notice}></Notice>
    }

    get hasNotice(){
        return notices.length > 0
    }
}

export const notices:notice[] = []

export type noticeWithoutID = {
    text: string,
    buttonText?: string,
    onClick?: () => void,
    type: "default"|"info"|"success"|"danger"|"streamerMode"|"download"|"notification"|"premium"|"richPresence"|"premiumTier1"|"premiumTier2"|"facebook"|"brand"|"survey"|"spotify"
}

export type notice = {
    id: string
} & noticeWithoutID