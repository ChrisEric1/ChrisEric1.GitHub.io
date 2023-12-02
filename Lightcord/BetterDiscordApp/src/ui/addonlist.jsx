import ErrorBoundary from "./errorBoundary";
import ContentColumn from "./contentColumn";
import ReloadIcon from "./reloadIcon";
import AddonCard from "./addoncard";
import Dropdown from "./components/dropdown";
import Search from "./components/search";

import {settingsCookie, pluginCookie, themeCookie, bdplugins, bdthemes} from "../0globals";
import ContentManager from "../modules/contentManager";
import BDV2 from "../modules/v2";
import pluginModule from "../modules/pluginModule";
import themeModule from "../modules/themeModule";
import WebpackModules from "../modules/webpackModules";
import BdApi from "../modules/bdApi";
import Utils from "../modules/utils";
import TooltipWrap from "./tooltipWrap";
import bdEvents from "../modules/bdEvents";
import EmulatedTooltip from "./tooltip";

const Tooltip = WebpackModules.findByDisplayName("Tooltip");

const React = BDV2.react;

export default class CardList extends BDV2.reactComponent {
    constructor(props) {
        super(props);
        this.state = {sort: "name", ascending: true, query: ""};
        this.isPlugins = this.props.type == "plugins";
        this.cookie = this.isPlugins ? pluginCookie : themeCookie;
        this.manager = this.isPlugins ? pluginModule : themeModule;

        this.sort = this.sort.bind(this);
        this.reverse = this.reverse.bind(this);
        this.search = this.search.bind(this);

        this.onAddonChanges = function(){
            this.forceUpdate()
        }
        this.onAddonChanges = this.onAddonChanges.bind(this)
    }

    componentDidMount(){
        const type = (this.isPlugins ? "plugin" : "theme") + "-"
        bdEvents.on(`${type}loaded`, this.onAddonChanges)
        bdEvents.on(`${type}unloaded`, this.onAddonChanges)
        bdEvents.on(`${type}reloaded`, this.onAddonChanges)
    }

    componentWillUnmount(){
        const type = (this.isPlugins ? "plugin" : "theme") + "-"
        bdEvents.off(`${type}loaded`, this.onAddonChanges)
        bdEvents.off(`${type}unloaded`, this.onAddonChanges)
        bdEvents.off(`${type}reloaded`, this.onAddonChanges)
    }

    openFolder() {
        const shell = require("electron").shell;
        const open = shell.openPath || shell.openItem;
        open(this.isPlugins ? ContentManager.pluginsFolder : ContentManager.themesFolder);
    }

    edit(name) {
        console.log(name);
        this.manager.edit(name);
    }

    async delete(name) {
        const shouldDelete = await this.confirmDelete(name);
        if (!shouldDelete) return;
        this.manager.delete(name);
    }

    confirmDelete(name) {
        return new Promise(resolve => {
            BdApi.showConfirmationModal("Are You Sure?", `Are you sure you want to delete ${name}?`, {
                danger: true,
                confirmText: "Delete",
                onConfirm: () => {resolve(true);},
                onCancel: () => {resolve(false);}
            });
        });
    }

    get sortOptions() {
        return [
            {label: "Name", value: "name"},
            {label: "Author", value: "author"},
            {label: "Version", value: "version"},
            {label: "Recently Added", value: "added"},
            {label: "Last Modified", value: "modified"},
            {label: "File Size", value: "size"},
        ];
    }

    get directions() {
        return [
            {label: "Ascending", value: true},
            {label: "Descending", value: false}
        ];
    }

    reverse(value) {
        this.setState({ascending: value});
    }

    sort(value) {
        this.setState({sort: value});
    }

    search(event) {
        this.setState({query: event.target.value.toLocaleLowerCase()});
    }

    getProps(addon) {
        return {
            key: this.getName(addon),
            enabled: this.cookie[this.getName(addon)],
            toggle: this.manager.toggle.bind(this.manager),
            edit: settingsCookie["fork-ps-7"] ? this.edit.bind(this) : null,
            remove: this.delete.bind(this),
            addon: addon,
            hash: addon.hash
        };
    }

    getString(value) {
        if (!value) return "???";
        return typeof value == "string" ? value : value.toString();
    }

    get list(){
        return this.props.type === "plugins" ? Object.values(bdplugins) : Object.values(bdthemes);
    }

    getAddons() {
        const sortedAddons = this.list.sort((a, b) => {
            const cap = this.state.sort.charAt(0).toUpperCase() + this.state.sort.slice(1);
            const first = a.plugin && a.plugin[`get${cap}`] ? this.getString(a.plugin[`get${cap}`]()) : this.getString(a[this.state.sort]);
            const second = b.plugin && b.plugin[`get${cap}`] ? this.getString(b.plugin[`get${cap}`]())  : this.getString(b[this.state.sort]);
            if (typeof(first) == "string") return first.toLocaleLowerCase().localeCompare(second.toLocaleLowerCase());
            if (first > second) return 1;
            if (second > first) return -1;
            return 0;
        });
        if (!this.state.ascending) sortedAddons.reverse();
        const rendered = [];
        for (let a = 0; a < sortedAddons.length; a++) {
            const addon = sortedAddons[a];
            if (this.state.query) {
                let matches = null;
                const name = this.getName(addon);
                const author = this.getAuthor(addon);
                const description = this.getDescription(addon);
                const version = this.getVersion(addon);
                if (name) matches = name.toLocaleLowerCase().includes(this.state.query);
                if (author) matches = matches || author.toLocaleLowerCase().includes(this.state.query);
                if (description) matches = matches || description.toLocaleLowerCase().includes(this.state.query);
                if (version) matches = matches || version.toLocaleLowerCase().includes(this.state.query);
                if (!matches) continue;
            }
            const props = this.getProps(addon);
            rendered.push(<ErrorBoundary><AddonCard {...props} reload={!settingsCookie["fork-ps-5"] && this.manager.reload.bind(this.manager)} /></ErrorBoundary>);
        }
        return rendered;
    }

    getName(addon) {return this.getString(addon.plugin ? addon.plugin.getName() : addon.name);}
    getAuthor(addon) {return this.getString(addon.plugin ? addon.plugin.getAuthor() : addon.author);}
    getDescription(addon) {return this.getString(addon.plugin ? addon.plugin.getDescription() : addon.description);}
    getVersion(addon) {return this.getString(addon.plugin ? addon.plugin.getVersion() : addon.version);}

    renderCheckUpdates(){
        if(!window.ZeresPluginLibrary)return null
        if(!window.PluginUpdates)return null
        if(typeof window.PluginUpdates.checkAll !== "function")return null
        if(!this.isPlugins)return null

        let tooltipIsShowing = false
        let tooltip
        return <TooltipWrap text="Checks for updates of plugins that support this feature. Right-click for a list.">
            <span style={{marginLeft: "10px"}} onMouseLeave={() => {
                    tooltipIsShowing = false
                    tooltip.hide()
                }}>
                <Lightcord.Api.Components.inputs.Button ref="checkUpdateButton" color="brand" look="filled" size="min" hoverColor="default" onClick={() => {
                    try{
                        Utils.showToast("Plugin update check in progress.", {type: "info"})
                        window.PluginUpdates.checkAll()
                        .then(() => {
                            Utils.showToast("Plugin update check complete.", {type: "success"})
                        }).catch(err => {
                            console.error(err)
                            Utils.showToast("An error occured while checking update.", {type: "error"})
                        })
                    }catch(e){
                        console.error(e)
                        Utils.showToast("An error occured while checking update.", {type: "error"})
                    }
                }} wrapper={false} disabled={false} onRightClick={() => {
                    if(!this.refs.checkUpdateButton)return
                    if (!window.PluginUpdates || !window.PluginUpdates.plugins) return;
                    if(tooltipIsShowing)return
                    tooltip = new EmulatedTooltip(this.refs.checkUpdateButton.refs.original.refs.button, Object.values(window.PluginUpdates.plugins).map(p => p.name).join(", "), {
                        side: "bottom",
                        attachEvents: false
                    })
                    tooltip.show()
                    tooltipIsShowing = true
                }}>
                    Check for Updates
                </Lightcord.Api.Components.inputs.Button>
            </span>
        </TooltipWrap>
    }

    render() {
        const refreshIcon = <Tooltip color="black" position="top" text="Reload List">
            {(props) => 
            <ReloadIcon {...props} className="bd-icon bd-reload bd-reload-header" size="18px" onClick={async () => {
                if (this.isPlugins) pluginModule.updatePluginList();
                else themeModule.updateThemeList();
                this.forceUpdate();
            }} />
            }</Tooltip>;
        const addonCards = this.getAddons();

        return <ContentColumn title={`${this.props.type.toUpperCase()}—${addonCards.length}`}>
            <Lightcord.Api.Components.inputs.Button key="folder-button" color="brand" 
                look="filled" size="min" hoverColor="default" onClick={this.openFolder.bind(this)} wrapper={false}
                style={{
                    marginLeft: "10px"
                }}>
                Open {this.isPlugins ? "Plugin" : "Theme"} Folder
            </Lightcord.Api.Components.inputs.Button>
            {this.renderCheckUpdates()}
            {!settingsCookie["fork-ps-5"] && refreshIcon}
            <div className="bd-controls bd-addon-controls">
                <Search onChange={this.search} placeholder={`Search ${this.props.type}...`} />
                <div className="bd-addon-dropdowns">
                    <div className="bd-select-wrapper">
                        <label className="bd-label">Sort by:</label>
                        <Dropdown options={this.sortOptions} onChange={this.sort} style="transparent" />
                    </div>
                    <div className="bd-select-wrapper">
                        <label className="bd-label">Order:</label>
                        <Dropdown options={this.directions} onChange={this.reverse} style="transparent" />
                    </div>
                    
                </div>
            </div>
            <div className="bda-slist bd-addon-list">{addonCards}</div>
        </ContentColumn>
    }
}

const originalRender = CardList.prototype.render;
Object.defineProperty(CardList.prototype, "render", {
    enumerable: false,
    configurable: false,
    set: function() {console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");},
    get: () => originalRender
});