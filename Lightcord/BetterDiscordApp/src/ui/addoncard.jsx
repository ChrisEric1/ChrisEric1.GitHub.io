import {settingsCookie} from "../0globals";
import BDV2 from "../modules/v2";
import Utils from "../modules/utils";
import DOM from "../modules/domtools";

import XSvg from "./xSvg";
import ReloadIcon from "./reloadIcon";
import EditIcon from "./icons/edit";
import DeleteIcon from "./icons/delete";
import Switch from "./components/switch";
import TooltipWrap from "./tooltipWrap";
import { processFile } from "../modules/pluginCertifier";
import contentManager from "../modules/contentManager";
import { resolve } from "path";

const React = BDV2.React;
const anchorClasses = BDV2.anchorClasses;

export default class V2C_PluginCard extends BDV2.reactComponent {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.showSettings = this.showSettings.bind(this);
        this.setInitialState();
        this.hasSettings = this.props.addon.plugin && typeof(this.props.addon.plugin.getSettingsPanel) === "function";
        this.settingsPanel = "";

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.reload = this.reload.bind(this);
    }

    setInitialState() {
        this.state = {
            checked: this.props.enabled,
            settings: false,
            reloads: 0,
            trusted: false
        };
    }

    showSettings() {
        if (!this.hasSettings) return;
        this.setState({settings: true});
    }

    closeSettings() {
        this.panelRef.current.innerHTML = "";
        this.setState({settingsOpen: false});
    }

    componentDidUpdate() {
        if (!this.state.settings) return;

        if (!settingsCookie["fork-ps-3"]) return;
        setImmediate(() => {
            const isHidden = (container, element) => {
                if(!container){
                    console.error(new Error(`Container is undefined.`))
                    return false
                }
                const cTop = container.scrollTop;
                const cBottom = cTop + container.clientHeight;
                const eTop = element.offsetTop;
                const eBottom = eTop + element.clientHeight;
                return  (eTop < cTop || eBottom > cBottom);
            };

            const thisNode = this.refs.cardNode;
            const container = thisNode.closest("div[class*=\"contentRegionScroller-\"]")
            if (!isHidden(container, thisNode)) return;
            const thisNodeOffset = DOM.offset(thisNode);
            const containerOffset = DOM.offset(container);
            const original = container.scrollTop;
            const endPoint = thisNodeOffset.top - containerOffset.top + container.scrollTop - 30;
            DOM.animate({
                duration: 300,
                update: function(progress) {
                    if (endPoint > original) container.scrollTop = original + (progress * (endPoint - original));
                    else container.scrollTop = original - (progress * (original - endPoint));
                }
            });
        });
    }


    getString(value) {
        if (!value) return "???";
        return typeof value == "string" ? value : value.toString();
    }

    get settingsComponent() {
        try { this.settingsPanel = this.props.addon.plugin.getSettingsPanel(); }
        catch (err) { Utils.err("Plugins", "Unable to get settings panel for " + this.name + ".", err); }

        let settingPanel
        if(typeof this.settingsPanel === "object"){
            if(this.settingsPanel instanceof Node){
                settingPanel = BDV2.react.createElement("div", {id: `plugin-settings-${this.name}`, className: "plugin-settings", ref: (elem) => {
                    elem.appendChild(this.settingsPanel)
                }})
            }else{
                settingPanel = BDV2.react.createElement("div", {id: `plugin-settings-${this.name}`, className: "plugin-settings"}, 
                this.settingsPanel)
            }
        }else if(typeof this.settingsPanel === "string"){
            settingPanel = BDV2.react.createElement("div", {id: `plugin-settings-${this.name}`, className: "plugin-settings", dangerouslySetInnerHTML: {__html: this.settingsPanel}})
        }
        return BDV2.react.createElement("div", {className: "bd-card bd-addon-card settings-open ui-switch-item", ref: "cardNode"},
                BDV2.react.createElement("div", {style: {"float": "right", "cursor": "pointer"}, onClick: () => {
                        this.setState({
                            settings: false
                        });
                    }},
                BDV2.react.createElement(XSvg, null)
            ),
            settingPanel
        );
    }

    buildTitle(name, version, author) {
        const title = "{{name}} v{{version}} by {{author}}".split(/({{[A-Za-z]+}})/);
        const nameIndex = title.findIndex(s => s == "{{name}}");
        if (nameIndex) title[nameIndex] = React.createElement("span", {className: "name bda-name"}, name);
        const versionIndex = title.findIndex(s => s == "{{version}}");
        if (nameIndex) title[versionIndex] = React.createElement("span", {className: "version bda-version"}, version);
        const authorIndex = title.findIndex(s => s == "{{author}}");
        if (nameIndex) {
            const props = {className: "author bda-author"};
            if (author.link || author.id) {
                props.className += ` ${anchorClasses.anchor} ${anchorClasses.anchorUnderlineOnHover}`;
                props.target = "_blank";

                if (author.link) props.href = author.link;
                if (author.id) props.onClick = () => {BDV2.LayerStack.popLayer(); BDV2.openDM(author.id);};
            }
            title[authorIndex] = React.createElement(author.link || author.id ? "a" : "span", props, author.name);
        }
        return title.flat();
    }

    makeLink(title, url) {
        const props = {className: "bda-link bda-link-website", target: "_blank"};
        if (typeof(url) == "string") props.href = url;
        if (typeof(url) == "function") props.onClick = (event) => {event.preventDefault(); event.stopPropagation(); url();};
        return BDV2.react.createElement("a", props, title);
    }

    makeButton(title, children, action) {
        return <TooltipWrap color="black" side="top" text={title}>
            <div className="bd-addon-button" onClick={action}>{children}</div>
        </TooltipWrap>;
    }

    componentWillUnmount(){
        this.unmounted = true
    }

    get links() {
        const links = [];
        const addon = this.props.addon;
        if (addon.website) links.push(this.makeLink("Website", addon.website));
        if (addon.source) links.push(this.makeLink("Source", addon.source));
        if (addon.invite) {
            links.push(this.makeLink("Support Server", () => {
                const tester = /\.gg\/(.*)$/;
                let code = addon.invite;
                if (tester.test(code)) code = code.match(tester)[1];
                BDV2.LayerStack.popLayer();
                BDV2.InviteActions.acceptInviteAndTransitionToInviteChannel(code);
            }));
        }
        if (addon.donate) links.push(this.makeLink("Donate", addon.donate));
        if (addon.patreon) links.push(this.makeLink("Patreon", addon.patreon));
        return links;
    }

    get footer() {
        const links = this.links;
        return (links.length || this.hasSettings) && BDV2.react.createElement("div", {className: "bd-card-footer bda-footer"},
            BDV2.react.createElement("span", {className: "bd-addon-links bda-links"},
                ...(links.map((element, index) => index < links.length - 1 ? [element, " | "] : element).flat())
            ),
            this.hasSettings && BDV2.react.createElement("button", {onClick: this.showSettings, className: "bd-button bda-settings-button", disabled: !this.state.checked}, "Settings")
        );
    }

    onChange() {
        this.props.toggle && this.props.toggle(this.name);
        this.setState({checked: !this.state.checked});
    }

    edit() {this.props.edit(this.name);}
    delete() {this.props.remove(this.name);}
    reload() {this.props.reload(this.name);}

    get name() {return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getName() : this.props.addon.name);}
    get author() {return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getAuthor() : this.props.addon.author);}
    get description() {return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getDescription() : this.props.addon.description);}
    get version() {return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getVersion() : this.props.addon.version);}

    render() {
        if (this.state.settings) return this.settingsComponent;
        const {authorId, authorLink} = this.props.addon;

        const style = {}
        if(settingsCookie["fork-ps-6"]){
            if(!this.isScanning){
                this.isScanning = true
                processFile(resolve(this.props.addon.filename.endsWith(".plugin.js") ? contentManager.pluginsFolder : contentManager.themesFolder, this.props.addon.filename), (result) => {
                    if(this.unmounted)return
    
                    this.setState({
                        isTrusted: result.suspect ? "suspect" : true
                    })
                }, () => {})
            }else{
                if(this.state.isTrusted === true){
                    style.borderColor = "#4087ed"
                }
                if(this.state.isTrusted === "suspect"){
                    style.borderColor = "rgb(240, 71, 71)"
                }
            }
        }
        
        return BDV2.react.createElement("div", {className: "bd-card bd-addon-card settings-closed ui-switch-item", style},
            BDV2.react.createElement("div", {className: "bd-addon-header bda-header"},
                    BDV2.react.createElement("div", {className: "bd-card-title bda-header-title"}, this.buildTitle(this.name, this.version, {name: this.author, id: authorId, link: authorLink})),
                    BDV2.react.createElement("div", {className: "bd-addon-controls bda-controls"},
                        this.props.edit && this.makeButton("Edit", <EditIcon className="bd-icon" />, this.edit),
                        this.props.remove && this.makeButton("Delete", <DeleteIcon className="bd-icon" />, this.delete),
                        this.props.reload && this.makeButton("Reload", <ReloadIcon className="bd-icon" />, this.reload),
                        React.createElement(Switch, {onChange: this.onChange, checked: this.state.checked})
                    )
            ),
            BDV2.react.createElement("div", {className: "bd-scroller-wrap bda-description-wrap scroller-wrap fade"},
                BDV2.react.createElement("div", {className: "bd-scroller bd-addon-description bda-description scroller"}, this.description)
            ),
            this.footer
        );
    }
}

const originalRender = V2C_PluginCard.prototype.render;
Object.defineProperty(V2C_PluginCard.prototype, "render", {
    enumerable: false,
    configurable: false,
    set: function() {console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");},
    get: () => originalRender
});
