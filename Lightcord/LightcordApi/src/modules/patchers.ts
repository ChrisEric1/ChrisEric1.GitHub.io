import Utils from "./Utils"
import Notices, { notices } from "../components/private/Notices"
import { isNative } from "./environnement";
import WebpackLoader from "./WebpackLoader";
import { dangerousBDModules } from "./BDModules";

export function patch(){
    /** START NOTICE */
    getModule(e => e.default && e.default.displayName === "ConnectedAppView")
    .then(async (mod) => {
        const appClasses = await getModule(e => e.hasNotice);
        const buildRender = original => {
            return function render(){
                const returnValue = original.call(this, ...arguments)
                const newchildren = []
                let children = returnValue.props.children[1].props.children
                if(!Array.isArray(children))children = [children]
    
                newchildren.push(children[0])
                newchildren.push(React.createElement(Notices, {container: this}))
                newchildren.push(children[1])
                returnValue.props.children[1].props.children = newchildren
                
                returnValue.props.children[1].props.children[2].props.children[0].props.render = buildRenderChannelSidebar(returnValue.props.children[1].props.children[2].props.children[0].props.render)
                
                return returnValue
            }
        }
        const buildRenderChannelSidebar = original => {
            return function renderChannelSidebar(){
                const returnValue = original.call(this, ...arguments)
                
                const hasNotice = notices.length > 0
                if(!hasNotice)return returnValue
                if(!Utils.hasClass(returnValue.props.className, appClasses.hasNotice)){
                    returnValue.props.className += " "+Utils.removeDa(appClasses.hasNotice)
                }

                return returnValue
            }
        }
        mod.default.prototype.render = buildRender(mod.default.prototype.render);
        (async function(){
            const base = document.querySelector("."+Utils.removeDa(appClasses.base))
            if(!base)throw new Error(`Could not find base here`)
            const elem = Utils.FindReact(base) as any
            elem.render = buildRender(elem.render)
            elem.forceUpdate()
        })()
    })
    /** END NOTICE */

    if(isNative){
        /** START USERPOPOUT PATCH */
        awaitLogin()
        .then(async () => {
            let UserPopout = await getModule(e => e.default && e.default.displayName === "FluxContainer(ForwardRef(SubscribeGuildMembersContainer(UserPopout)))")
            const userModule = await getModule(e => e.default && e.default.getCurrentUser)
            const render1 = new UserPopout.default({userId: userModule.default.getCurrentUser().id, guildId: null, channelId: null, disableUserProfileLink: true}).render()
            const PopoutProps = render1.props
            const render2 = render1.type.render(PopoutProps, null)
            const render3 = new render2.type(render2.props).render()
            const UserPopoutComponent = render3.type
            if(!UserPopoutComponent)throw new Error(`Couldn't find the UserPopoutComponent component.`)
    
            const render = UserPopoutComponent.prototype.render
            UserPopoutComponent.prototype.render = function(){
                const returnValue = render.call(this, ...arguments)
                try{
                    console.log(returnValue)
                    returnValue.props.children.props["data-user-id"] = this.props.user.id
                }catch(e){
                    console.error(e)
                }
                return returnValue
            }
        }).catch(console.error)
        /** END USERPOPOUT PATCH*/
    
        /** START USERPROFILE PATCH */
        awaitLogin()
        .then(async () => {
            let UserProfile = await getModule(e => e.default && e.default.displayName === "UserProfile")
            const userModule = await getModule(e => e.default && e.default.getCurrentUser)
            const render1 = new UserProfile.default({
                user: userModule.default.getCurrentUser()
            }).render()
            const render2 = new render1.type(render1.props).render()
            const render3 = render2.type.render(render2.props, null)
            const render4 = new render3.type(render3.props).render()
            const UserProfileComponent = render4.type
            if(!UserProfileComponent)throw new Error(`Couldn't find the UserProfileComponent component.`)
    
            const render = UserProfileComponent.prototype.render
            UserProfileComponent.prototype.render = function(){
                const returnValue = render.call(this, ...arguments)
                console.log(returnValue)
                try{
                    console.log(returnValue)
                    returnValue.props.children.props["data-user-id"] = this.props.user.id
                }catch(e){
                    console.error(e)
                }
                return returnValue
            }
        }).catch(console.error)
        /** END USERPROFILE PATCH */

        /** START WEBHOOK PATCH */
/*
        let usedWebhooks = {}

        getModule(e => e && e.Request && e.Request.prototype && e.Request.prototype.end)
        .then(RequestModule => {
            const end = RequestModule.Request.prototype.end
            RequestModule.Request.prototype.end = function(){
                if(this.url.endsWith("/messages") && /\/channels\/\d+\/messages/g.test(this.url) && this.method === "POST"){ // sending message
                    let channelId = this.url.split("/channels/")[1].split("/messages")[0]
                    
                    if(usedWebhooks[channelId]){ // webhook is availlable
                        let webhook = usedWebhooks[channelId]
                        let url = `/webhooks/${webhook.id}/${webhook.token}?wait=true`
                        this.url = url
                    }
                }

                return end.call(this, ...arguments)
            }
        })
        getModule(e => e.default && e.default.displayName === "Webhook")
        .then(webhookComponent => {
            const renderEdit = webhookComponent.default.prototype.renderEdit
            webhookComponent.default.prototype.renderEdit = function(){
                const webhook = this.props.webhook
                let returnValue = renderEdit.call(this, ...arguments)
                returnValue.props.children = [returnValue.props.children]
                let message = usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id ? "Stop talking with this webhook" : "Talk with this webhook"

                returnValue.props.children.push(React.createElement(window.Lightcord.Api.Components.inputs.Button, {color: "green", wrapper: false, onClick(){
                    if(usedWebhooks[webhook.channel_id] && usedWebhooks[webhook.channel_id].id === webhook.id){
                        delete usedWebhooks[webhook.channel_id]
                    }else{
                        usedWebhooks[webhook.channel_id] = {
                            id: webhook.id,
                            token: webhook.token
                        }
                    }
                    webhookPanels.forEach(e => e())
                }}, message))

                return returnValue
            }
        })

        let webhookPanels = []
        let getComp = (comp) => {
            class SettingsWebhooks extends React.PureComponent {
                constructor(props){
                    super(props)
                }

                componentWillMount(){
                    this.id = uuid()
                    this.component = new comp(this.props)
                    let func = () => {
                        this.component.forceUpdate()
                    }
                    func.id = this.id
                    webhookPanels.push(func)
                }

                componentWillUnmount(){
                    this.component = null
                    webhookPanels = webhookPanels.filter(e => e.id !== this.id)
                }

                render(){
                    return this.component.render()
                }

                static displayName = "SettingsWebhooks"
            }

            return SettingsWebhooks
        }
        getModule(e => e.default && e.default.displayName === "FluxContainer(SettingsWebhooks)")
        .then(webhooksComponents => {
            let comp = webhooksComponents.default

            webhooksComponents.default = getComp(comp)

            WebpackLoader.find(e => e.default && e.default.displayName === "FluxContainer(FluxContainer(SettingsWebhooks))")
            .forEach(mod => {
                mod.default = getComp(mod.default)
            })
        })*/
        /** END WEBHOOK PATCH */
    }

    // TODO: Add in app-notifications / confirmations.
    /** START IN-APP NOTIFICATIONS */
    //getModule(e => true)
    /** END IN-APP NOTIFICATIONS */
}

function getModule(filter: (mod:any) => boolean):Promise<any>{
    return new Promise((resolve) => {
        window.Lightcord.Api.ensureExported(filter)
        .then(resolve)
        .catch(err => {
            console.error("[LIGHTCORD]", err, filter)
        })
    })
}

let hasCompletedLogin = false
let loginPromise:Promise<void>
let AuthenticationStore = dangerousBDModules.get(e => e.default && e.default.isAuthenticated)
AuthenticationStore = AuthenticationStore[0] && AuthenticationStore[0].default
function awaitLogin():Promise<void>{
    if(AuthenticationStore && AuthenticationStore.isAuthenticated())return Promise.resolve()
    if(hasCompletedLogin)return Promise.resolve()
    if(loginPromise)return loginPromise
     
    return loginPromise = new Promise((resolve) => {
        let isResolved = false
        window.Lightcord.DiscordModules.dispatcher.subscribe("CONNECTION_OPEN", (ev) => {
            if(isResolved)return
            hasCompletedLogin = true
            resolve()
            isResolved = true
        })
    })
}
window.Lightcord.DiscordModules.dispatcher.subscribe("LOGOUT", (ev) => {
    hasCompletedLogin = false
    loginPromise = undefined
    console.log('Logout Patchers.ts', ev)
})