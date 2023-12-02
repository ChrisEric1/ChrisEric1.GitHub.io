import WebpackLoader from "../../modules/WebpackLoader"
import { notice, notices, events } from "./Notices"
import NOOP from "../../modules/noop"

let NoticeModules
export const defaultNotice:notice = {
    text: "",
    id: "unknown id",
    onClick: NOOP,
    buttonText: null,
    type: "default"
}
export default class Notice extends React.Component<notice> {
    static displayName = "LightcordNotice"
    static defaultProps:notice = defaultNotice

    get modules(){
        return NoticeModules || (NoticeModules = [
            WebpackLoader.find(e => e.noticeInfo)
        ])
    }
    
    render(){
        const [
            noticeClasses
        ] = this.modules

        const className = noticeClasses["notice"+this.props.type.slice(0, 1).toUpperCase()+this.props.type.slice(1)]
            
        if(!className){
            notices.pop()
            setImmediate(() => {
                events.emit("noticeUpdate")
            })
            return null
        }
        const button = this.props.buttonText ? <button className={noticeClasses.button} onClick={() => {
            notices.pop()
            this.props.onClick()
            events.emit("noticeUpdate")
        }}>{this.props.buttonText}</button> : null
        return <div className={className}>
            <div className={noticeClasses.dismiss} role="button" tabIndex={0} onClick={() => {
                notices.pop()
                events.emit("noticeUpdate")
            }} />
            {this.props.text}
            {button}
        </div>
    }
}