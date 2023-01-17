import { ReactNode } from "react";
import WebpackLoader from "../../modules/WebpackLoader";
import DiscordTools from "../../modules/DiscordTools";
import NOOP from "../../modules/noop";
import uuid from "../../modules/uuid";
import Title from "./Title";
import AlertBox from "./AlertBox";


type ErrorCatcherProps = {
    children?: ReactNode
}
let ErrorCatcherModules
export default class ErrorCatcher extends React.Component<ErrorCatcherProps, {error: boolean, hasSentNotification: boolean}> {
    constructor(props:ErrorCatcherProps){
        super(props)
        this.state = {
            error: false,
            hasSentNotification: false
        }
    }

    static get original(){
        return ErrorCatcher
    }

    get modules():any[]{
        return ErrorCatcherModules || (ErrorCatcherModules = [
            WebpackLoader.find(e => e.emptyStateImage && e.emptyState)
        ])
    }

    defaultProps:ErrorCatcherProps = {
        children: null
    }

    render(){
        if(!this.state.error){
            return this.props.children
        }else{ // try to render a user-friendly interface.
            const [
                emptyClasses
            ] = this.modules
            if(!emptyClasses){ // If we can't, render nothing and show a notification.
                if(this.state.hasSentNotification)return null // If the notification was already sent, don't send one.
                const notification = DiscordTools.showNotification({
                    body: "An error occured. Please check the console for more informations.",
                    icon: "https://github.com/lightcord.png",
                    onClick: NOOP,
                    onClose: NOOP,
                    onShow: NOOP,
                    title: "Lightcord Informations"
                })
                this.setState({
                    hasSentNotification: true
                })
                setTimeout(() => {
                    notification.close()
                }, 2000)
                return null
            }
            return <div className={emptyClasses.emptyState}>
                <div className={emptyClasses.emptyStateImage} style={{
                    marginTop: "20px"
                }}></div>
                <div className={emptyClasses.emptyStateHeader}>An error occured</div>
                <p className={emptyClasses.emptyStateSubtext}>
                    Please check the console for more informations. Join our ­support server for more help.
                </p>
            </div>            
        }
    }

    componentDidCatch(error, errorInfo){
        console.error(errorInfo.componentStack)
        this.setState({
            error: true
        })
    }

    static get AllPreviews(){
        return AllPreviews || (AllPreviews = [
            [
                {
                    children: <AlertBox type="info">This AlertBox is protected by an ErrorCatcher.</AlertBox>
                }
            ]
        ])
    }
}

let AllPreviews

export function createProxyErrorCatcherClass<base = Function>(Class:base):base & {
    readonly original: base
}{
    const ClassCopy = (class Proxied extends React.Component {
        render(){
            return <ErrorCatcher key={uuid()}>
                {React.createElement(Class as any, {ref: "original", ...this.props, key: uuid()})}
            </ErrorCatcher>
        }

        static displayName = Class["displayName"] || Class["name"]

        static get original(){
            return Class
        }
    }) as any
    Object.entries(Object.getOwnPropertyDescriptors(Class)).forEach(value => {
        if(value[0] in ClassCopy)return
        Object.defineProperty(ClassCopy, value[0], value[1])
    })
    return ClassCopy
}