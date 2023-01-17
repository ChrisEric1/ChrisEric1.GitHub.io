import {bdConfig, minSupportedVersion, bbdVersion, settingsCookie, bdpluginErrors, bdthemeErrors, bbdChangelog, defaultCookie, currentDiscordVersion, defaultRPC, settingsRPC, lightcordSettings} from "../0globals";
import Utils from "./utils";

import BDV2 from "./v2";
import settingsPanel from "./settingsPanel";
import pluginModule from "./pluginModule";
import themeModule from "./themeModule";
import DataStore from "./dataStore";
import WebpackModules from "./webpackModules";
import DOM from "./domtools";

import BDLogo from "../ui/bdLogo";
import TooltipWrap from "../ui/tooltipWrap";
import LightcordLogo from "../svg/Lightcord";
import PluginCertifier from "./pluginCertifier";
import distant, { uuidv4 } from "./distant";
import EmojiModule from "./emojiModule"
import * as electron from "electron"
import v2 from "./v2";
import contentManager from "./contentManager";

let methods
function Core() {}


Core.prototype.setConfig = function(config) {
    if (this.hasStarted) return;
    Object.assign(bdConfig, config);
};

Object.defineProperty(Core.prototype, "methods", {
    get(){
        return methods
    }
})

Core.prototype.setMethods = function(m) {
    if (this.hasStarted) return;
    methods = m
};

Core.prototype.init = async function() {
    if (this.hasStarted) return;
    this.hasStarted = true;

    if (!Array.prototype.flat) {
        Utils.alert("Not Supported", "BetterDiscord v" + bbdVersion + " does not support this old version (" + currentDiscordVersion + ") of Discord. Please update your Discord installation before proceeding.");
        return;
    }

    if (bdConfig.version < minSupportedVersion) {
        Utils.alert("Not Supported", "BetterDiscord v" + bdConfig.version + " (your version)" + " is not supported by the latest js (" + bbdVersion + ").<br><br> Please download the latest version from <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>GitHub</a>");
        return;
    }

    if (window.ED) {
        Utils.alert("Not Supported", "LightcordBD does not work with EnhancedDiscord. Please uninstall one of them.");
        return;
    }

    if (window.WebSocket && window.WebSocket.name && window.WebSocket.name.includes("Patched")) {
        Utils.alert("Not Supported", "LightcordBD does not work with Powercord. Please uninstall one of them.");
        return;
    }

    Utils.suppressErrors(this.patchAttributes.bind(this), "LC Plugin Certifier Patch")();

    Utils.log("Startup", "Initializing Settings");
    this.initSettings();

    await this.checkForGuilds();
    BDV2.initialize();
    Utils.log("Startup", "Updating Settings");
    settingsPanel.initializeSettings();

    Utils.log("Startup", "Loading Addons Cache")
    await contentManager.loadAddonCertifierCache()

    Utils.log("Startup", "Loading Plugins");
    await pluginModule.loadPlugins();

    Utils.log("Startup", "Loading Themes");
    await themeModule.loadThemes();

    DOM.addStyle("customcss", Buffer.from(DataStore.getBDData("bdcustomcss"), "base64").toString("utf8"));

    window.addEventListener("beforeunload", function() {
        if (settingsCookie["bda-dc-0"]) document.querySelector(".btn.btn-disconnect").click();
    });

    PluginCertifier.start()

    Utils.log("Startup", "Removing Loading Icon");
    if (document.getElementsByClassName("bd-loaderv2").length) document.getElementsByClassName("bd-loaderv2")[0].remove();
    Utils.log("Startup", "Initializing Main Observer");
    this.initObserver();

    // Show loading errors
    if (settingsCookie["fork-ps-1"]) {
        Utils.log("Startup", "Collecting Startup Errors");
        Utils.showContentErrors({plugins: bdpluginErrors, themes: bdthemeErrors});
    }

    const previousVersion = DataStore.getBDData("version");
    if (bbdVersion > previousVersion) {
        if (bbdChangelog) this.showChangelogModal(bbdChangelog);
        DataStore.setBDData("version", bbdVersion);
    }

    EmojiModule.start()

    Utils.suppressErrors(this.patchSocial.bind(this), "BD Social Patch")();
    Utils.suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")();
    Utils.suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")();
    Utils.suppressErrors(this.patchGuildSeparator.bind(this), "BD Guild Separator Patch")();
    Utils.suppressErrors(this.patchMessageHeader.bind(this), "BD Badge Chat Patch")();
    Utils.suppressErrors(this.patchMemberList.bind(this), "BD Badge Member List Patch")();
    Utils.suppressErrors(this.patchAttachment.bind(this), "LC Plugin Certifier Patch")();

    if(bdConfig.haveInstalledDefault){
        let alert = Utils.alert("First Installation", "As it is the first time you install Lightcord, We added two default themes and one default plugin in your plugin/theme folder. Check it in the Plugin/Theme settings.")
        await new Promise((resolve) => {
            alert.onClose(resolve)
        })
    }
    const logo = document.querySelector("#app-mount > div.typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3.da-typeWindows.da-withFrame.da-titleBar.da-horizontalReverse.da-flex.da-directionRowReverse.da-justifyStart.da-alignStretch > div.wordmarkWindows-1v0lYD.wordmark-2iDDfm.da-wordmarkWindows.da-wordmark")
    if(logo){
        logo.style.top = "3px"
        logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="10" width="70" viewBox="0 0 72.54 10" style="margin-left: -5px, margin-top: 10px">
    <path fill="currentColor" d="M44.81,9.67V6.33c0-1.21,2.13-1.49,2.78-.28l2-.81A3.53,3.53,0,0,0,46.2,3c-1.92,0-3.81,1.13-3.81,3.33V9.67c0,2.21,1.89,3.33,3.77,3.33a3.87,3.87,0,0,0,3.45-2.18l-2.12-1C47,11.17,44.81,10.85,44.81,9.67ZM10.68,12.89h2.41V3.17H10.68ZM71.76,3.14H68.19V7.23L70.57,9.4v-4h1.27c.81,0,1.21.41,1.21,1v3c0,.63-.38,1.05-1.21,1.05H68.18v2.31h3.57c1.92,0,3.72-1,3.72-3.2V6.39C75.48,4.13,73.68,3.14,71.76,3.14ZM54.22,3c-2,0-4,1.1-4,3.34V9.66c0,2.23,2,3.34,4,3.34s3.95-1.11,3.95-3.34V6.34C58.19,4.11,56.2,3,54.22,3Zm1.55,6.66c0,.7-.78,1.06-1.54,1.06s-1.55-.35-1.55-1.06V6.34c0-.72.75-1.1,1.5-1.1s1.59.35,1.59,1.1ZM66.84,6.34c0-2.29-1.58-3.2-3.55-3.2H59.46v9.73h2.45V9.77h.43l2.22,3.09h3L65,9.52C66.13,9.15,66.84,8.14,66.84,6.34ZM63.33,7.65H61.91V5.43h1.42A1.11,1.11,0,1,1,63.33,7.65ZM29.83,13h2.42V3.06H29.83V6.73l-3,0V3.09H24.7v9.78h2.14V8.68l3,0ZM17.16,9.76V6.42c0-1.21,2.13-1.49,2.78-.28l2-.81a3.55,3.55,0,0,0-3.36-2.24c-1.92,0-3.81,1.13-3.81,3.33V9.76c0,2.21,2,3.15,3.9,3.15s3.58-1,3.58-3V7.58H18.79l0,1.36H20.3v.77C20.3,10.92,17.16,10.94,17.16,9.76Z" transform="translate(-2.93 -3)"/>
    <polygon fill="currentColor" points="35.91 0.06 38.43 0.06 38.43 1.84 35.92 1.81 35.97 10 33.55 10 33.49 1.75 30.98 1.74 30.98 0.06 33.49 0.06 35.91 0.06"/>
    <polygon fill="currentColor" points="0 9.97 6.5 10 6.5 7.63 2.41 7.63 2.41 0.26 0 2.26 0 9.97"/>
</svg>`
    }
};

Core.prototype.patchAttributes = async function() {
    let attribsPatchs = []
    this.cancelPatchAttributes = function() {
        attribsPatchs.forEach(e => e())
    }

    while(!v2.MessageComponent)await new Promise(resolve => setTimeout(resolve, 100))
    
    // TODO: try to patch correctly the user popout on a next update
    const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
    window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "DiscordTag")
    .then(DiscordTag => {
        let DiscordTagComp = DiscordTag.default
        DiscordTag.default = function(props){
            let returnValue = DiscordTagComp(props)

            let id = uuidv4()

            let badgeDiv = BDV2.React.createElement("div", {
                style: {
                    display: "inline",
                    marginTop: "5px"
                }
            }, BDV2.React.createElement("span", {
                id: "badges-"+id,
                key: "badges-"+id,
                style: {
                    display: "inherit"
                }
            }))

            let children = [returnValue]

            if (props.user.id === "249746236008169473") { // Rauenzi: BandagedBD Developer
                children.push(
                    BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "BandagedBD Developer"},
                        BDV2.React.createElement(Anchor, {className: "bd-chat-badge", href: "https://github.com/rauenzi/BetterDiscordApp", title: "BandagedBD", target: "_blank"},
                            BDV2.React.createElement(BDLogo, {size: "16px", className: "bd-logo"})
                        )
                    )
                );
            } else if (props.user.id === "696481194443014174" || props.user.id === "363022107753578496"|| props.user.id === "424639027606585356"){ // Not Thomiz: Lightcord Developer, Phorcys: Lightcord Developer, smartfridge: Lightcord Dev
                children.push(
                    BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "Lightcord Developer"},
                        BDV2.React.createElement(Anchor, {className: "bd-chat-badge", href: "https://github.com/Lightcord/Lightcord", title: "Lightcord", target: "_blank"},
                            BDV2.React.createElement(LightcordLogo, {size: "16px", className: "bd-logo"})
                        )
                    )
                );
            }

            children.push(badgeDiv)
            let div = BDV2.React.createElement("div", {
                style: {
                    display: "block"
                }
            }, children)
            applyBadges(id, props.user, false)

            return div
        }
        DiscordTag.default.displayName = DiscordTagComp.displayName
    })

    attribsPatchs.push(Utils.monkeyPatch(v2.MessageComponent, "default", {after: (data) => {
        if(data.methodArguments[0].childrenMessageContent.props.message){ // this can be a blocked message (not opened)
            data.returnValue.props["data-message-id"] = data.methodArguments[0].childrenMessageContent.props.message.id
        }
    }}))
        /*
    attribsPatchs.push(Utils.monkeyPatch(v2.MessageComponent, "default", {after: (data) => {
        data.returnValue.props["message-id"] = data.methodArguments[0].childrenMessageContent.props.message.id
    }}))*/
}

Core.prototype.checkForGuilds = function() {
    let timesChecked = 0;
    return new Promise(resolve => {
        const checkForGuilds = function() {
            const wrapper = BDV2.guildClasses.wrapper.split(" ")[0];
            if (document.querySelectorAll(`.${wrapper}`).length > 0) timesChecked++;
            const guild = BDV2.guildClasses.listItem.split(" ")[0];
            const blob = BDV2.guildClasses.blobContainer.split(" ")[0];
            if (document.querySelectorAll(`.${wrapper} .${guild} .${blob}`).length > 0) return resolve(bdConfig.deferLoaded = true);
            else if (timesChecked >= 50) return resolve(bdConfig.deferLoaded = true);
            setTimeout(checkForGuilds, 100);
        };
        if (document.readyState != "loading") setTimeout(checkForGuilds, 100);
        document.addEventListener("DOMContentLoaded", () => {setTimeout(checkForGuilds, 100);});
    });
};

Core.prototype.injectExternals = async function() {
    // No externals
};

Core.prototype.initSettings = function () {
    DataStore.initialize();
    if(!DataStore.getSettingGroup("rpc")){
        Object.assign(settingsRPC, defaultRPC);
    }
    if(!DataStore.getSettingGroup("settings")){
            Object.assign(settingsCookie, defaultCookie);
        settingsPanel.saveSettings();
    } else {
        settingsPanel.loadSettings();
        for (const setting in defaultCookie) {
            if (settingsCookie[setting] == undefined) {
                settingsCookie[setting] = defaultCookie[setting];
                settingsPanel.saveSettings();
            }
        }
    }
    window.Lightcord.Api.ensureExported(e => e.default && e.default.prototype && e.default.prototype.getPredicateSections)
    .then(settingModule => {

        let getPredicateSections = settingModule.default.prototype.getPredicateSections
        settingModule.default.prototype.getPredicateSections = function(){
            let result = getPredicateSections.call(this, ...arguments)

            if(!result[1])return result
            if(result[1].section === "My Account"){ // user settings, not guild settings
                let poped = []
                
                poped.push(result.pop())
                poped.push(result.pop())
                poped.push(result.pop())
                poped.push(result.pop())

                result.push(...settingsPanel.renderSidebar(this))

                while(poped[0]){
                    result.push(poped.pop())
                }
            }
            console.log(result)
            return result
        }
    })
};


let classNameLayer
let classNameSocialLinks
let classNameModal

Core.prototype.initObserver = function () {
    const mainObserver = new MutationObserver((mutations) => {
        for (let i = 0, mlen = mutations.length; i < mlen; i++) {
            const mutation = mutations[i];
            if (typeof pluginModule !== "undefined") pluginModule.rawObserver(mutation);

            // if there was nothing added, skip
            if (!mutation.addedNodes.length || !(mutation.addedNodes[0] instanceof Element)) continue;

            const node = mutation.addedNodes[0];

            if(!classNameLayer)classNameLayer = BDModules.get((e) => e.layer && typeof e.layer === "string" && e.animating)[0].layer
            if(!classNameSocialLinks)classNameSocialLinks = BDModules.get((e) => e.socialLinks && typeof e.socialLinks === "string")[0].socialLinks
            if(!classNameModal)classNameModal = BDModules.get((e) => e.modal && typeof e.modal === "string" && e.inner && typeof e.inner === "string" && !e.responsiveWidthMobile)[0].modal

            if (node.classList.contains(classNameLayer)) {
                if (node.getAttribute("aria-label") === "GUILD_SETTINGS"){
                    node.setAttribute("layer-id", "server-settings");
                    node.setAttribute("id", "server-settings");
                }

                if (node.getElementsByClassName(classNameSocialLinks).length) {
                    node.setAttribute("layer-id", "user-settings");
                    node.setAttribute("id", "user-settings");
                }
            }

            if (node.parentElement == document.body && node.querySelector("#ace_settingsmenu")) node.id = "ace_settingsmenu_container";

            // Emoji Picker
            //node.getElementsByClassName("emojiPicker-3m1S-j").length && !node.querySelector(".emojiPicker-3m1S-j").parentElement.classList.contains("animatorLeft-1EQxU0")
            //if (node.classList.contains(classNameLayer2) && node.getElementsByClassName(classNameEmojiPicker).length  && !node.querySelector("."+classNameEmojiPicker).parentElement.classList.contains(classNameAnimatorLeft)) quickEmoteMenu.obsCallback(node);

        }
    });

    mainObserver.observe(document, {
        childList: true,
        subtree: true
    });
};

Core.prototype.showChangelogModal = function(options = {}) {
    return Utils.showChangelogModal(options);
};

Core.prototype.alert = function(title, content) {
    return Utils.alert(title, content);
};

Core.prototype.patchSocial = function() {
    if (this.socialPatch) return;
    const TabBar = WebpackModules.find(m => m.displayName == "TabBar");
    const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
    if (!TabBar) return;
    this.socialPatch = Utils.monkeyPatch(TabBar.prototype, "render", {after: (data) => {
        const children = data.returnValue.props.children;
        if (!children || !children.length || children.length < 3) return;
        if (children[children.length - 3].type.displayName !== "Separator") return;
        if (!children[children.length - 2].type.toString().includes("socialLinks")) return;
        if (Anchor) {
            let socialModule1 = BDModules.get(e => e.socialLinks)[0]
            const original = children[children.length - 2].type;
            const newOne = function() {
                const returnVal = original(...arguments);
                returnVal.props.children.push(
                    BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "Lightcord"},
                        BDV2.React.createElement(Anchor, {className: "bd-social-link "+socialModule1.link, href: "https://github.com/Lightcord/Lightcord", title: "Lightcord", target: "_blank"},
                            BDV2.React.createElement(LightcordLogo, {size: "16px", className: "bd-social-logo"})
                        )
                    )
                );
                returnVal.props.children.push(
                    BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "BandagedBD"},
                        BDV2.React.createElement(Anchor, {className: "bd-social-link "+socialModule1.link, href: "https://github.com/rauenzi/BetterDiscordApp", title: "BandagedBD", target: "_blank"},
                            BDV2.React.createElement(BDLogo, {size: "16px", className: "bd-social-logo"})
                        )
                    )
                );
                return returnVal;
            };
            children[children.length - 2].type = newOne;
        }

        let [
            classNameColorMuted,
            sizes,
            classNameVersionHash
        ] = [
            BDModules.get(e => e.colorMuted)[0].colorMuted,
            BDModules.get(e => e.size32)[0],
            BDModules.get(e => e.versionHash)[0].versionHash
        ]

        const versionHash = `(${bdConfig.hash ? bdConfig.hash.substring(0, 7) : bdConfig.branch})`;
        const buildInfo = electron.ipcRenderer.sendSync("LIGHTCORD_GET_BUILD_INFOS")
        const additional = [
            BDV2.react.createElement("div", {className: `${classNameColorMuted} ${sizes.size12}`}, `Lightcord ${buildInfo.version} `, BDV2.react.createElement("span", {className: classNameVersionHash+" da-versionHash"}, `(${(buildInfo.commit || "Unknown").slice(0, 7)})`)),
            BDV2.react.createElement("div", {className: `${classNameColorMuted} ${sizes.size12}`}, `BBD ${bbdVersion} `, BDV2.react.createElement("span", {className: classNameVersionHash+" da-versionHash"}, versionHash))
        ]
        

        const originalVersions = children[children.length - 1].type;
        children[children.length - 1].type = function() {
            const returnVal = originalVersions(...arguments);
            returnVal.props.children.splice(1, 0, additional);
            return returnVal;
        };
    }});
};

const getGuildClasses = function() {
    const guildsWrapper = WebpackModules.findByProps("wrapper", "unreadMentionsBar");
    const guilds = WebpackModules.findByProps("guildsError", "selected");
    const pill = WebpackModules.findByProps("blobContainer");
    return Object.assign({}, guildsWrapper, guilds, pill);
};

Core.prototype.patchGuildListItems = function() {
    if (this.guildListItemsPatch) return;
    const GuildClasses = getGuildClasses();
    const listItemClass = GuildClasses.listItem.split(" ")[0];
    const blobClass = GuildClasses.blobContainer.split(" ")[0];
    const reactInstance = BDV2.getInternalInstance(document.querySelector(`.${listItemClass} .${blobClass}`).parentElement);
    const GuildComponent = reactInstance.return.type;
    if (!GuildComponent) return;
    this.guildListItemsPatch = Utils.monkeyPatch(GuildComponent.prototype, "render", {after: (data) => {
        if (data.returnValue && data.thisObject) {
            const returnValue = data.returnValue;
            const guildData = data.thisObject.props;
            let className = returnValue.props.className
            className += " bd-guild";
            if (guildData.unread) className += " bd-unread";
            if (guildData.selected) className += " bd-selected";
            if (guildData.audio) className += " bd-audio";
            if (guildData.video) className += " bd-video";
            if (guildData.badge) className += " bd-badge";
            if (guildData.animatable) className += " bd-animatable";
            returnValue.props.className = className
            return returnValue;
        }
    }});
};

Core.prototype.patchGuildPills = function() {
    if (this.guildPillPatch) return;
    const guildPill = WebpackModules.find(m => m.default && !m.default.displayName && m.default.toString && m.default.toString().includes("translate3d"));
    if (!guildPill) return;
    this.guildPillPatch = Utils.monkeyPatch(guildPill, "default", {after: (data) => {
        const props = data.methodArguments[0];
        if (props.unread) data.returnValue.props.className += " bd-unread";
        if (props.selected) data.returnValue.props.className += " bd-selected";
        if (props.hovered) data.returnValue.props.className += " bd-hovered";
        return data.returnValue;
    }});
};

Core.prototype.patchGuildSeparator = function() {
    if (this.guildSeparatorPatch) return;
    const Guilds = WebpackModules.findByDisplayName("Guilds");
    const guildComponents = WebpackModules.findByProps("renderListItem");
    if (!guildComponents || !Guilds) return;
    const GuildSeparator = function() {
        const returnValue = guildComponents.Separator(...arguments);
        returnValue.props.className += " bd-guild-separator";
        return returnValue;
    };
    this.guildSeparatorPatch = Utils.monkeyPatch(Guilds.prototype, "render", {after: (data) => {
        data.returnValue.props.children[1].props.children[3].type = GuildSeparator;
    }});
};

Core.prototype.patchAttachment = function() {
    if (this.AttachmentPatch) return;
    const Attachment = BDModules.get(e => e.default && e.default.displayName === "Attachment")[0] // temporary
    const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
    if (!Anchor || !Attachment || !Attachment.default) return;
    this.AttachmentPatch = Utils.monkeyPatch(Attachment, "default", {after: (data) => {
        if(!settingsCookie["fork-ps-6"])return
        const attachment = data.methodArguments[0] || null
        const children = Utils.getNestedProp(data.returnValue, "props.children");

        if (!children || !attachment || !attachment.url)return
        if (!Array.isArray(children)) return;

        const id = uuidv4()
        children.push(BDV2.react.createElement("span", {
            id: "certified-"+id
        }))
        PluginCertifier.patch(attachment, "certified-"+id)
    }})
}

Core.prototype.patchMessageHeader = function() {
    if (this.messageHeaderPatch) return;
    const MessageHeader = WebpackModules.findByProps("MessageTimestamp");
    const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
    if (!Anchor || !MessageHeader || !MessageHeader.default) return;
    this.messageHeaderPatch = Utils.monkeyPatch(MessageHeader, "default", {after: (data) => {
        const author = Utils.getNestedProp(data.methodArguments[0], "message.author");
        // const header = Utils.getNestedProp(data.returnValue, "props.children.1.props");
        const children = Utils.getNestedProp(data.returnValue, "props.children.1.props.children.1.props.children");
        if (!children || !author || !author.id)return
        // if (header && header.className) header.className += " "
        if (!Array.isArray(children)) return;
        if (author.id === "249746236008169473") {
          // Rauenzi: BandagedBD Developer
          children.push(
            BDV2.React.createElement(
              TooltipWrap,
              { color: "black", side: "top", text: "BandagedBD Developer" },
              BDV2.React.createElement(
                Anchor,
                {
                  className: "bd-chat-badge",
                  href: "https://github.com/rauenzi/BetterDiscordApp",
                  title: "BandagedBD",
                  target: "_blank",
                },
                BDV2.React.createElement(BDLogo, {
                  size: "16px",
                  className: "bd-logo",
                })
              )
            )
          ); //(props.user.id === "696481194443014174" || props.user.id === "363022107753578496"|| props.user.id === "424639027606585356"){ // Not Thomiz: Lightcord Developer, Phorcys: Lightcord Developer, smartfridge: Lightcord Dev
        } else if (
          author.id === "696481194443014174" ||
          author.id === "363022107753578496" ||
          author.id === "424639027606585356"
        ) {
          // Not Thomiz: Lightcord Developer, Phorcys: Lightcord Developer
          children.push(
            BDV2.React.createElement(
              TooltipWrap,
              { color: "black", side: "top", text: "Lightcord Developer" },
              BDV2.React.createElement(
                Anchor,
                {
                  className: "bd-chat-badge",
                  href: "https://github.com/Lightcord/Lightcord",
                  title: "Lightcord",
                  target: "_blank",
                },
                BDV2.React.createElement(LightcordLogo, {
                  size: "16px",
                  className: "bd-logo",
                })
              )
            )
          );
        }
        const id = uuidv4()
        children.push(
            BDV2.React.createElement("div", {
                id: "badges-"+id,
                style: {
                    display: "inline"
                }
            })
        )
        applyBadges(id, author, true)
    }});
};

function applyBadges(id, user, chat){
    process.nextTick(() => {
        const div = document.getElementById("badges-"+id)
        if(!div || div.childNodes.length > 0)return
        if(div.childNodes.length)return
        let blockDiv = document.createElement("div")
        blockDiv.style.display = "none"
        div.appendChild(blockDiv)

        const Anchor = WebpackModules.find(m => m.displayName == "Anchor");

        distant.getBadges(user.id)
        .then(badges => {
            badges.forEach(badge => {
                const props = {
                    svg: {
                        size: "16px", 
                        className: "bd-logo",
                        width: "16px", 
                    }
                }
                badge.scopes.forEach(scope => {
                    if(scope === "user"){// require user
                        props.user = user
                    }
                }) 
                if(!badge.href){
                    props.Anchor = Anchor
                    props.href = {
                        className: chat ? "bd-chat-badge" : "bd-member-badge", 
                        title: badge.name, 
                        target: "_blank"
                    }
                }
                const element = BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: badge.name},
                    badge.href ? BDV2.react.createElement(Anchor, {
                        href: badge.href,
                        className: chat ? "bd-chat-badge" : "bd-member-badge", 
                        title: badge.name, 
                        target: "_blank"
                    }, BDV2.React.createElement(badge.component, props)) : BDV2.React.createElement(badge.component, props)
                )
                const div2 = document.createElement("div")
                BDV2.reactDom.render(element, div2)
                div2.childNodes.forEach(node => {
                    div.appendChild(node)
                })
            })
        })
    })
}

Core.prototype.patchMemberList = function() {
    if (this.memberListPatch) return;
    const MemberListItem = WebpackModules.findByDisplayName("MemberListItem");
    const Anchor = WebpackModules.find(m => m.displayName == "Anchor");
    if (!Anchor || !MemberListItem || !MemberListItem.prototype || !MemberListItem.prototype.renderDecorators) return;
    this.memberListPatch = Utils.monkeyPatch(MemberListItem.prototype, "renderDecorators", {after: (data) => {
        const user = Utils.getNestedProp(data.thisObject, "props.user");
        const children = Utils.getNestedProp(data.returnValue, "props.children");
        if (!children || !user || !user.id)return
        // if (header && header.className) header.className += " "
        if (!Array.isArray(children)) return;
        if (user.id === "249746236008169473") {
            children.push(
                BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "BandagedBD Developer"},
                    BDV2.React.createElement(Anchor, {className: "bd-member-badge", href: "https://github.com/rauenzi/BetterDiscordApp", title: "BandagedBD", target: "_blank"},
                        BDV2.React.createElement(BDLogo, {size: "16px", className: "bd-logo"})
                    )
                )
            );
        } else if (user.id === "696481194443014174" || user.id === "696003456611385396"){
            children.push(
                BDV2.React.createElement(TooltipWrap, {color: "black", side: "top", text: "Lightcord Developer"},
                    BDV2.React.createElement(Anchor, {className: "bd-member-badge", href: "https://github.com/Lightcord/Lightcord", title: "Lightcord", target: "_blank"},
                        BDV2.React.createElement(LightcordLogo, {size: "16px", className: "bd-logo"})
                    )
                )
            );
        }
        const id = uuidv4()
        children.push(
            BDV2.React.createElement("div", {id: "badges-"+id})
        )
        applyBadges(id, user, false)
    }});
};

Core.prototype.updateInjector = async function() {
    // There will never be an injection path, so we do not need the code below. 
    // Insert comments so it will be erased when production.
    
    const injectionPath = DataStore.injectionPath;
    if (!injectionPath) return false;

    /*

    const fs = require("fs");
    const path = require("path");
    const rmrf = require("rimraf");
    const yauzl = require("yauzl");
    const mkdirp = require("mkdirp");
    const request = require("request");

    const parentPath = path.resolve(injectionPath, "..");
    const folderName = path.basename(injectionPath);
    const zipLink = "https://github.com/rauenzi/BetterDiscordApp/archive/injector.zip";
    const savedZip = path.resolve(parentPath, "injector.zip");
    const extractedFolder = path.resolve(parentPath, "BetterDiscordApp-injector");

    // Download the injector zip file
    Utils.log("InjectorUpdate", "Downloading " + zipLink);
    let success = await new Promise(resolve => {
        request.get({url: zipLink, encoding: null}, async (error, response, body) => {
            if (error || response.statusCode !== 200) return resolve(false);
            // Save a backup in case someone has their own copy
            const alreadyExists = await new Promise(res => fs.exists(savedZip, res));
            if (alreadyExists) await new Promise(res => fs.rename(savedZip, `${savedZip}.bak${Math.round(performance.now())}`, res));

            Utils.log("InjectorUpdate", "Writing " + savedZip);
            fs.writeFile(savedZip, body, err => resolve(!err));
        });
    });
    if (!success) return success;

    // Check and delete rename extraction
    const alreadyExists = await new Promise(res => fs.exists(extractedFolder, res));
    if (alreadyExists) await new Promise(res => fs.rename(extractedFolder, `${extractedFolder}.bak${Math.round(performance.now())}`, res));
    
    // Unzip the downloaded zip file
    const zipfile = await new Promise(r => yauzl.open(savedZip, {lazyEntries: true}, (err, zip) =>  r(zip)));
    zipfile.on("entry", function(entry) {
        // Skip directories, they are handled with mkdirp
        if (entry.fileName.endsWith("/")) return zipfile.readEntry();

        Utils.log("InjectorUpdate", "Extracting " + entry.fileName);
        // Make any needed parent directories
        const fullPath = path.resolve(parentPath, entry.fileName);
        mkdirp.sync(path.dirname(fullPath));
        zipfile.openReadStream(entry, function(err, readStream) {
            if (err) return success = false;
            readStream.on("end", function() {zipfile.readEntry();}); // Go to next file after this
            readStream.pipe(fs.createWriteStream(fullPath));
        });
    });
    zipfile.readEntry(); // Start reading

    // Wait for the final file to finish
    await new Promise(resolve => zipfile.once("end", resolve));

    // Save a backup in case something goes wrong during final step
    const backupFolder = path.resolve(parentPath, `${folderName}.bak${Math.round(performance.now())}`);
    await new Promise(resolve => fs.rename(injectionPath, backupFolder, resolve));

    // Rename the extracted folder to what it should be
    Utils.log("InjectorUpdate", `Renaming ${path.basename(extractedFolder)} to ${folderName}`);
    success = await new Promise(resolve => fs.rename(extractedFolder, injectionPath, err => resolve(!err)));
    if (!success) {
        Utils.err("InjectorUpdate", "Failed to rename the final directory");
        return success;
    }

    // If rename had issues, delete what we tried to rename and restore backup
    if (!success) {
        Utils.err("InjectorUpdate", "Something went wrong... restoring backups.");
        await new Promise(resolve => rmrf(extractedFolder, resolve));
        await new Promise(resolve => fs.rename(backupFolder, injectionPath, resolve));
        return success;
    }

    // If we've gotten to this point, everything should have gone smoothly.
    // Cleanup the backup folder then remove the zip
    await new Promise(resolve => rmrf(backupFolder, resolve));
    await new Promise(resolve => fs.unlink(savedZip, resolve));

    Utils.log("InjectorUpdate", "Injector Updated!");
    return success;*/
};

export default new Core();

/**
 * Don't expose core - could be dangerous for now
 */