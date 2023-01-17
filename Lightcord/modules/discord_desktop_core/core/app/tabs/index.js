const fs = require("fs")
const { join } = require("path")
const { pathToFileURL } = require("url")
const ipc = require("../discord_native/renderer/ipc")

let webviews = new Map()
window.webviews = webviews

function forwardToCurrentWebview(event){
    return [event, async (...args) => {
        let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
        if(!webview)return
        await webview.ready
        webview.send(event, ...args.slice(1))
    }]
}

/** discord_desktop_core Stable */
ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_FOCUS"))
ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_BLUR"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_OPEN_VOICE_SETTINGS"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_TOGGLE_MUTE"))
ipc.on(...forwardToCurrentWebview("SYSTEM_TRAY_TOGGLE_DEAFEN"))
ipc.on(...forwardToCurrentWebview("LAUNCH_APPLICATION"))
ipc.on(...forwardToCurrentWebview("SPELLCHECK_RESULT"))
ipc.on(...forwardToCurrentWebview("WINDOW_DEVTOOLS_OPENED"))
ipc.on(...forwardToCurrentWebview("WINDOW_DEVTOOLS_CLOSED"))
ipc.on(...forwardToCurrentWebview("UPDATE_ERROR"))
ipc.on(...forwardToCurrentWebview("UPDATE_NOT_AVAILABLE"))
ipc.on(...forwardToCurrentWebview("UPDATE_MANUALLY"))
ipc.on(...forwardToCurrentWebview("UPDATE_AVAILABLE"))
ipc.on(...forwardToCurrentWebview("MODULE_INSTALL_PROGRESS"))
ipc.on(...forwardToCurrentWebview("UPDATE_DOWNLOADED"))
ipc.on(...forwardToCurrentWebview("MODULE_INSTALLED"))
ipc.on(...forwardToCurrentWebview("CHECKING_FOR_UPDATES"))
ipc.on(...forwardToCurrentWebview("UPDATER_HISTORY_RESPONSE"))
ipc.on(...forwardToCurrentWebview("ACCESSIBILITY_SUPPORT_CHANGED"))
ipc.on(...forwardToCurrentWebview("HELP_OPEN"))
ipc.on(...forwardToCurrentWebview("USER_SETTINGS_OPEN"))
ipc.on(...forwardToCurrentWebview("MAIN_WINDOW_PATH"))
/** discord_desktop_core Development */
ipc.on(...forwardToCurrentWebview("NAVIGATE_BACK"))
ipc.on(...forwardToCurrentWebview("NAVIGATE_FORWARD"))

ipc.on("RELOAD", () => {
    let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
    if(!webview)return
    webview.reload()
})
ipc.on("NEW_TAB", () => {
    chrtabs.addTab({
        title: 'Lightcord',
        favicon: faviconURL
    })
})
ipc.on("CLOSE_TAB", () => {
    let active = document.querySelector("div.chrome-tab[active]")
    if(!active)return
    chrtabs.removeTab(active)
})
ipc.on("OPEN_DEVTOOLS", () => {
    let webview = webviews.get(document.querySelector(".chrome-tab[active]"))
    if(!webview)return
    webview.openDevTools()
})
let chrtabs
window.onload = () => {
    const ChromeTabs = require("chrome-tabs")
    require("chrome-tabs/css/chrome-tabs.css")
    require("chrome-tabs/css/chrome-tabs-dark-theme.css")
    require("./controls.css")

    let tabs = document.querySelector(".chrome-tabs")
    let chromeTabs = new ChromeTabs()
    chrtabs = chromeTabs
    chromeTabs.init(tabs)

    tabs.addEventListener('activeTabChange', ({detail}) => {
        let webview = webviews.get(detail.tabEl)
        if(!webview){
            chromeTabs.removeTab(detail.tabEl)
            return
        }
        let active = Array.from(webviews.values()).find(e => e.classList.contains("active-webview"))
        if(active)active.classList.remove("active-webview")
        webview.classList.add("active-webview")
    })
    tabs.addEventListener('tabAdd', ({detail}) => {
        chromeTabs.updateTab(detail.tabEl, {
            title: "Lightcord Loading...",
            favicon: faviconURL
        })
        let webview = document.createElement("webview")
const fs = require('fs');
const IPADR = ''; // change to your Fosscord Hostname Or IP Address
const PROT0 = 'https'; // HTTP or HTTPS
const syntx = '://'; // DO NOT CHANGE!
const chngr = ':'; // DO NOT CHANGE!
const ap = '/app'; // DO NOT CHANGE!
const LH = 'localhost'; // Discord.com Patch, change if localhost doesn't work (127.0.0.1), Note you still need the local server hoster!
const PORT1 = '80'; // Port 80
const PORT2 = '443'; // Port 443
const PORT3 = '2022'; // DO NOT CHANGE!
      if (fs.existsSync('/LC'+PORT1)) {
        webview.src = PROT0 + syntx + IPADR + chngr + PORT1 + ap;
      } else if (fs.existsSync('/LC'+PORT2)) {
        webview.src = PROT0 + syntx + IPADR + chngr + PORT2 + ap;
      } else {
        webview.src = PROT0 + syntx + LH + chngr + PORT3 + ap;
      }
        webview.classList.add("discord-webview")
        webview.classList.add("webview-active")
        webview.setAttribute("preload", pathToFileURL(join(__dirname, "../tabPreload.js")))
        webview.shadowRoot.childNodes.item(1).style.height = "100%"
        webview.enableremotemodule = true
        webview.nodeintegration = false
        webview.spellcheck = true
        webview.webpreferences = "nativeWindowOpen=yes"
        webview.enableblinkfeatures = "EnumerateDevices,AudioOutputDevices"
        webview.addEventListener("ipc-message", function(...ev){
            ipc.send(ev[0].channel.replace("DISCORD_", ""), ev.slice(1))
        })
        webview.addEventListener('page-title-updated', () => {
            let el = Array.from(webviews.entries()).find(e => e[1] === webview)[0]
            if(!el)return
            chromeTabs.updateTab(el, {
                favicon: faviconURL,
                title: webview.getTitle()
            })
        })
        webviews.set(detail.tabEl, webview)
        document.querySelector(".documentFull").appendChild(webview)
        let r
        webview.ready = new Promise(resolve => (r = resolve))
        webview.addEventListener("dom-ready", () => {
            r()
        })
        webview.addEventListener("will-navigate", (e) => {
            e.preventDefault()
            console.log(e, e.url)
        })
    })
    tabs.addEventListener('tabRemove', ({detail}) => {
        let webview = webviews.get(detail.tabEl)
        if(!webview)return
        webview.remove()
        webviews.delete(detail.tabEl)
        if(document.querySelector(".chrome-tabs-content").childNodes.length === 0){
            window.close()
        }
    })

    window.addEventListener('keydown', (event) => {
        if(event.ctrlKey){
            if(event.key === 't'){
                chromeTabs.addTab({
                  title: 'Lightcord',
                  favicon: faviconURL
                })
            }else if(event.key === "w"){
                let active = document.querySelector("div.chrome-tab[active]")
                if(!active)return
                chromeTabs.removeTab(active)
            }
        }
    })
    setImmediate(() => {
        chromeTabs.addTab({
          title: 'Lightcord Loading...',
          favicon: faviconURL
        })
    })
}

require.extensions[".css"] = (m, filename) => {
    let content = fs.readFileSync(filename, "binary")
    let style = document.createElement("style")
    style.id = Buffer.from(filename, "utf8").toString("base64")
    style.innerHTML = content
    document.head.appendChild(style)
    m.exports = {
        id: style.id,
        remove(){
            return style.remove()
        }
    }
    return m.exports
}

const faviconURL = pathToFileURL(join(__dirname, "../images/discord.png"))
