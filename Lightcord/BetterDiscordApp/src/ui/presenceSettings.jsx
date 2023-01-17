import BDV2 from "../modules/v2";
import V2C_SettingsTitle from "./settingsTitle";
import V2C_SettingsGroup from "./settingsGroup";
import dataStore from "../modules/dataStore";
import { defaultRPC, settingsRPC } from "../0globals";
import CustomRichPresence from "../modules/CustomRichPresence"
import { remote } from "electron";
import MarginTop from "./margintop";
import Utils from "../modules/utils";

const React = BDV2.React;

let V2C_PresenceSettingsModules
export default class V2C_PresenceSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: dataStore.getSettingGroup("rpc") || defaultRPC,
            assets: []
        }

        this.preview = null
        this.isfetching = false
        if(this.state.data.application_id){
            this.fetchAssets()
        }

        this.assetComponents = new Set()
    }

    updateWhenFetched(comp){
        this.assetComponents.add(comp)
    }

    /**
     * 
     * @param {InputText} setting 
     */
    onChange(setting, value){
        let defaultSetting = RPCProps.find(e => e.id === setting.props.id)

        this.setState({
            data: Object.assign(settingsRPC, this.state.data, {
                [defaultSetting.id]: !!value ? value : null
            }),
            assets: this.state.assets
        })
        if(setting.props.id === "application_id"){
            this.fetchAssets()
        }

        dataStore.setSettingGroup("rpc", settingsRPC);
        this.preview.forceUpdate()
        CustomRichPresence.set(settingsRPC)
    }

    fetchAssets(){
        if(this.isfetching === true){
            let app = this.state.data.application_id
            setTimeout(() => {
                if(this.state.data.application_id !== app){
                    return
                }
                this.fetchAssets()
            }, 5000);
        }
        if(!this.state.data.application_id){
            this.setState({
                data: this.state.data,
                assets: []
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
            return
        }
        this.isfetching = true
        CustomRichPresence.fetchAssets(this.state.data.application_id)
        .then(assets => {
            this.isfetching = false
            this.setState({
                data: this.state.data,
                assets: Object.keys(assets).map(k => {
                    let asset = assets[k]
                    return {
                        id: asset.id,
                        name: asset.name,
                        type: asset.type
                    }
                })
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
        }).catch(() => {
            this.isfetching = false
            this.setState({
                data: this.state.data,
                assets: []
            })
            this.forceUpdate()
            this.assetComponents.forEach(e => e.forceUpdate())
        })
    }

    updatePreview(data){
        this.setState({
            data
        })
    }

    get modules(){
        return V2C_PresenceSettingsModules || (V2C_PresenceSettingsModules = [
            BDModules.get(e => e.marginBottom20)[0]
        ])
    }

    render() {
        let [
            marginModule
        ] = this.modules
        return [
            <V2C_SettingsGroup title="RichPresence Settings" settings={this.props.settings} onChange={this.props.onChange}/>,
            <MarginTop />,
            <V2C_SettingsTitle text="RichPresence"/>,
            <div>
                {/** options */}
                {this.optionsComponents}
            </div>,
            <div>
                <MarginTop />
                <V2C_SettingsTitle text="Preview"/>
                {/** preview */}
                <RpcPreview settings={this}/>
            </div>,
            <div className={marginModule.marginBottom20}></div>,
            <button style={{opacity: 0.01}} onClick={window.ohgodohfuck}>
                Oh god Oh fuck
            </button>,
            <button style={{opacity: 0.01}} onClick={() => {
                remote.shell.openExternal("https://www.youtube.com/watch?v=LkYa7rps_g4")
            }}>
                See ? I pulled a litle sneaky on ya
            </button>
        ]
    }

    get optionsComponents(){
        return this._optionsComponents || (this._optionsComponents = RPCProps.map(e => {
            if(e.type === "text"){
                return <InputText setting={e} manager={this} id={e.id}/>
            }else if(e.type === "number"){
                let array = [<InputNumber setting={e} manager={this} id={e.id}/>]/*
                if(e.id === "timestamps.start"){
                    array.unshift(<DiscordButton title="Copy Current Timestamp" onClick={() => {
                        DiscordNative.clipboard.copy(Date.now()+"")
                    }} />)
                }*/
                return array[0]
            }else if(e.type === "choice"){
                if(["assets.small", "assets.large"].includes(e.id)){
                    return <InputChoice setting={e} manager={this} id={e.id} choices={[{value: "none", label: "No assets"}].concat(this.state.assets.map(e => {
                        return {
                            value: "asset-"+e.id,
                            label: e.name
                        }
                    }))}/>
                }else{
                    return "Unknown choice."
                }
            }
        }))
    }
}
const RPCProps = [
    {
        title: "Application ID",
        id: "application_id",
        type: "number",
        placeholder: "711416957718757418"
    },
    {
        title: "Name",
        id: "name",
        type: "text",
        placeholder: "Lightcord"
    },
    {
        title: "Details",
        id: "details",
        type: "text",
        placeholder: "Browsing Discord"
    },
    {
        title: "State",
        id: "state",
        type: "text",
        placeholder: "Lightcord Client"
    },
    {
        title: "Timestamp Start",
        id: "timestamps.start",
        type: "number",
        get placeholder(){
            return Date.now()
        }
    },
    {
        title: "LargeAsset",
        id: "assets.large",
        type: "choice"
    },
    {
        title: "SmallAsset",
        id: "assets.small",
        type: "choice"
    },
]

let inputTextModules
class InputText extends React.PureComponent {
    get modules(){
        if(inputTextModules && inputTextModules[0])return inputTextModules
        return inputTextModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0],
            BDModules.get(e => e.inputMini)[0],
            BDModules.get(e => e.size16 && e.size20)[0],
        ]
    }

    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id]
        }

        this.input = <window.Lightcord.Api.Components.inputs.TextInput placeholder={setting.placeholder} name={setting.id} value={this.state.data} onChange={(value) => {
            this.setState({
                data: value
            })
            if(!this.lastEdited || this.lastEdited < Date.now() - 500){
                this.props.manager.onChange(this, value)
                this.lastEdited = Date.now()
            }else if(!this.isTiming){
                this.isTiming = setTimeout(() => {
                    this.props.manager.onChange(this, this.state.data)
                    this.isTiming = null
                    this.lastEdited = Date.now()
                }, 500);
            }
        }} type="text"/>
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule,
            inputModule,
            sizeModule2,
        ] = this.modules

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                {this.input}
            </div>
            <Divider/>
        </div>)
    }
}

let InputNumberModules
class InputNumber extends React.PureComponent {
    get modules(){
        return InputNumberModules || (InputNumberModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0],
            BDModules.get(e => e.inputMini)[0],
            BDModules.get(e => e.size16 && e.size20)[0],
            BDModules.get(e => e.colorTransparent)[0],
        ])
    }

    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id]
        }

        this.input = <window.Lightcord.Api.Components.inputs.TextInput placeholder={setting.placeholder} name={setting.id} value={this.state.data} type="number" onChange={(value, name, input) => {
            value = value.replace(/[^\d]+/g, "")
            if(value == this.state.data){
                input.setValue(value)
                return
            }

            if(!this.lastEdited || this.lastEdited < Date.now() - 500){
                this.props.manager.onChange(this, value)
                this.lastEdited = Date.now()
            }else if(!this.isTiming){
                this.isTiming = setTimeout(() => {
                    this.props.manager.onChange(this, this.state.data)
                    this.isTiming = null
                    this.lastEdited = Date.now()
                }, 500);
            }
            this.setState({
                data: value
            })
        }} type="text"/>
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule,
        ] = this.modules


        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                {this.input}
                {setting.id === "timestamps.start" ? 
                <Lightcord.Api.Components.inputs.Button onClick={() => {
                    DiscordNative.clipboard.copy(Date.now()+"")
                }} color="brand">Copy current timestamp</Lightcord.Api.Components.inputs.Button> : null}
            </div>
            <Divider/>
        </div>)
    }
}

let InputChoiceModules
class InputChoice extends React.PureComponent {
    constructor(props){
        super(props)
        let setting = this.props.setting
        this.state = {
            data: this.props.manager.state.data[setting.id] ? "asset-"+this.props.manager.state.data[setting.id] : "none"
        }
        this.props.manager.updateWhenFetched(this)
    }

    onChange(value){
        if(!this.lastEdited || this.lastEdited < Date.now() - 500){
            this.props.manager.onChange(this, value === "none" ? null : value.replace("asset-", ""))
            this.lastEdited = Date.now()
        }else if(!this.isTiming){
            this.isTiming = setTimeout(() => {
                this.props.manager.onChange(this, this.state.data === "none" ? null : this.state.data.replace("asset-", ""))
                this.isTiming = null
                this.lastEdited = Date.now()
            }, 500);
        }
        this.setState({
            data: value
        })
        this.forceUpdate()
    }
    
    get modules(){
        return InputChoiceModules || (InputChoiceModules = [
            BDModules.get(e => e.removeKeybind)[0],
            BDModules.get(e => e.marginBottom20)[0],
            BDModules.get(e => e.defaultMarginh5)[0],
            BDModules.get(e => e.colorStandard)[0],
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e._horizontal)[0]
        ])
    }

    render(){
        let setting = this.props.setting

        let [
            rowModule,
            marginModule,
            marginModule2,
            colorModule,
            sizeModule,
            flexModule
        ] = this.modules
        
        let options = this.props.manager.state.assets.map(e => {
            return {
                value: "asset-"+e.id,
                label: e.name
            }
        })

        options.unshift({
            value: "none",
            label: "No assets"
        })

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <h5 className={colorModule.colorStandard+" "+sizeModule.size14+" "+marginModule2.h5+" "+marginModule2.defaultMarginh5}>
                    {setting.title}
                </h5>
                <window.Lightcord.Api.Components.inputs.Dropdown value={this.state.data} options={options} onChange={this.onChange.bind(this)} />
                {/*<Select value={this.state.data} onChange={this.onChange.bind(this)} options={options}/>*/}
            </div>
            <Divider/>
        </div>)
    }
}

let DividerModules = []
class Divider extends React.PureComponent {
    get modules(){
        return DividerModules&&DividerModules[0] ? DividerModules : (DividerModules = [
            BDModules.get(e => e.divider && Object.keys(e).length === 1)[0],
            BDModules.get(e => e.dividerDefault)[0]
        ])
    }

    render(){
        let [
            divider,
            dividerDefault
        ] = this.modules

        return <div class={`${divider.divider} ${dividerDefault.dividerDefault}`}></div>
    }
}

class DiscordButton extends React.Component {
    render(){
        let rowModule = BDModules.get(e => e.removeKeybind)[0]
        let marginModule = BDModules.get(e => e.marginBottom20)[0]
        let flexModule = BDModules.get(e => e._horizontal)[0]

        return (<div className={rowModule.row+" "+marginModule.marginBottom20}>
            <div className={`${rowModule.item} ${flexModule.flexChild}`}>
                <Lightcord.Api.Components.inputs.Button onClick={this.props.onClick} color="brand">
                    {this.props.title}
                </Lightcord.Api.Components.inputs.Button>
            </div>
        </div>)
    }
}

class RpcPreview extends React.Component {
    constructor(props = {}){
        super(props)
        this.state = {
            active: "profile"
        }
        this.tabs = []

        this.props.settings.preview = this
    }

    changeTab(tab){
        let ancientTab = this.state.active
        if(ancientTab === tab.props.id)return

        this.tabs.forEach(e => {
            e.setActive(false)
        })
        tab.setActive(true)
        this.setState({
            active: tab.props.id
        })
    }

    render(){
        return (<div className="lc-tabWrapper">
            <div className="lc-tabnav" style={{flex: "0 1 auto"}}>
                <Tab preview={this} title="Full Profile" id="profile"/>
                <Tab preview={this} title="User Popout" id="popout"/>
            </div>
            <PresenceErrorCatcher preview={this.preview} state={this.state.rpc} props={{preview: this}} key={this.state.active} />
        </div>)
    }   

    isActive(tab){
        return this.state.active === tab
    }

    get preview(){
        if(this.state.active === "profile")return Profile
        return Popout
    }
}

class Tab extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            active: props.preview.isActive(props.id)
        }
        props.preview.tabs.push(this)
    }

    setActive(isActive){
        this.setState({
            active: !!isActive
        })
    }

    render(){
        let className = `lc-navItem`
        if(this.state.active){
            className += ` lc-navItemActive`
        }else{
            className += ` lc-navItemInactive`
        }
        return (<div className={className} onClick={()=>{
            this.props.preview.changeTab(this)
        }}>
            {this.props.title}
        </div>)
    }
}

let emptyClasses
class PresenceErrorCatcher extends React.Component {
    componentDidCatch(err, errInfo){
        console.error(err, errInfo)
        this.setState({
            error: true
        })
    }
    render(){
        if(!this.state){
            this.state = {
                error: false
            }
        }
        if(!this.state.error){
            try{
                const preview = new this.props.preview(this.props.props)
                preview.setState(this.props.state)
                return preview.render()
            }catch(err){
                console.error(err)
                this.state.error = true
                return this.render()
            }
        }else{
            emptyClasses = emptyClasses || BDV2.WebpackModules.find(e => e.emptyStateImage && e.emptyState)
            if(!emptyClasses){
                Utils.showToast("An error occured. Please check the console for more informations.")
                return null
            }
            return <div style={{
                margin: "20px"
            }}>
                <div style={{
                    backgroundColor: "var(--background-primary)", 
                    padding: "30px 30px", 
                    borderRadius: "8px"
                }} className={`lc-tab-box-shadow ${emptyClasses.emptyState}`}>
                    <div className={emptyClasses.emptyStateImage} style={{
                        marginTop: "20px"
                    }}>

                    </div>
                    <div className={emptyClasses.emptyStateHeader}>An error occured</div>
                    <p className={emptyClasses.emptyStateSubtext}>
                        Please check the console for more informations. Join our ­
                        <a className={`${BDV2.anchorClasses.anchor} ${BDV2.anchorClasses.anchorUnderlineOnHover}`} role="button" tabindex={0} onClick={() => {
                            BDV2.joinLC()
                        }}>
                            support server
                        </a>
                        ­ for help.
                    </p>
                </div>
            </div>
        }
    }
}

let popoutModules
let UserPopoutComponent
let PopoutProps
class Popout extends React.Component {
    get modules(){
        return popoutModules || (popoutModules = [
            BDV2.WebpackModules.find(e => e.default && e.default.displayName === "UserPopout"),
            BDV2.WebpackModules.find(e => e.default && e.default.getCurrentUser)
        ])
    }

    getComponent(){
        let [
            UserPopout,
            userModule
        ] = this.modules

        const user = userModule.default.getCurrentUser()
        return React.createElement(() => {
            let render1 = UserPopout.default({
                userId: user.id, 
                guildId: null, 
                channelId: null, 
                disableUserProfileLink: true
            })
            UserPopoutComponent = render1.type
            PopoutProps = render1.props
            return this.render()
        }, null)
    }

    render(){
        if(!UserPopoutComponent)return this.getComponent()
        let [
            _UserPopout,
            userModule
        ] = this.modules

        const user = userModule.default.getCurrentUser()

        let data = Object.assign({}, defaultRPC, this.props.preview.props.settings.state.data)
        const activity = (function(){
            if(!this.game)return null
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
                } : undefined,
                type: 0
            }
            return game
        }).call({
            game: data
        })

        const popout = new UserPopoutComponent(Object.assign({}, PopoutProps, {
            activity: activity,
            userId: user.id
        })).render().props.children // bypass tracking

        // remove the stop propagation shit.
        const container = <div {...window.Lightcord.Api._.excludeProperties(popout.props, ["onClick", "onContextMenu"])} />

        return <div className="lc-userPopout lc-tab-box-shadow">
            {container}
        </div>
    }
}

let profileModules
let UserProfileComponent
let ProfileProps
let connectedProfileStore
class Profile extends React.Component {
    get modules(){
        return profileModules || (profileModules = [
            BDV2.WebpackModules.find(e => e.default && e.default.displayName === "UserProfile"),
            BDV2.WebpackModules.find(e => e.default && e.default.getCurrentUser)
        ])
    }

    render(){
        let [
            UserProfile,
            userModule
        ] = this.modules

        const user = userModule.default.getCurrentUser()
        if(!UserProfileComponent){
            const render1 = new UserProfile.default({
                user: user
            }).render()
            connectedProfileStore = render1.type
            const render2 = new render1.type(render1.props).render()
            const render3 = render2.type.render(render2.props, null)
            const render4 = new render3.type(render3.props).render()
            UserProfileComponent = render4.type
        }
        if(!UserProfileComponent)throw new Error(`Couldn't find the UserProfileComponent component.`)

        let data = Object.assign({}, defaultRPC, this.props.preview.props.settings.state.data)
        const activity = (function(){
            if(!this.game)return null
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
                } : undefined,
                type: 0
            }
            return game
        }).call({
            game: data
        })

        ProfileProps = new connectedProfileStore({
            user: user,
            close: () => {}
        }).render().props
        const profile = new UserProfileComponent(Object.assign({}, ProfileProps, {
            activity: activity
        })).render().props.children // bypass tracking

        profile.props.style = {
            width: "auto"
        }

        return <div className="lc-tab lc-tab-box-shadow">
            {profile}
        </div>
    }
}