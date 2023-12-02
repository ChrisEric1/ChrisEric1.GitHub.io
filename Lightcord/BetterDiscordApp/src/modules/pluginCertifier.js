import nodeFetch from "node-fetch"
import * as electron from "electron"
import * as crypto from "crypto"
import BDV2 from "./v2"
import tooltipWrap from "../ui/tooltipWrap"
import Utils from "./utils"
import { createReadStream, writeFileSync } from "fs"
import { basename, join } from "path"
import contentManager from "./contentManager"
import { addonCache } from "./contentManager"

const cache = {}
const cache2 = {}

export default new class PluginCertifier {
    constructor(){
        window.Lightcord.BetterDiscord.PluginCertifier = this
    }

    patch(attachment, id){
        process.nextTick(() => {
            processAttachment(attachment, id)
        })
    }

    start(){

    }

    isTrusted(hash){
        return cache[hash] && !cache[hash].suspect
    }
}

const tests = [
    [/token/gi, 0, 0],
    [/email/gi, 0, 0],
    [/mfa\./gi, 0, 0],
    [/2fa/gi, 0, 0],
    [/phone/gi, 0, 0],
    [/child_process/gi, 0, 0],
    [/localStorage/gi, 0, 0],
    [/getGlobal/gi, 0, 0],
    [/BrowserWindow/gi, 0, 0],
    [/system32/gi, 0, 0],
    [/password/gi, 0, 0],
    // [/eval/gi, 0, 0],
    [/WebAssembly/gi, 0, 0],
    [/XMLHttpRequest(\.|\[["'`])prototype/gi, 0, 0],
    [/window\.fetch( +)?=/gi, 0, 0],
    /** Obfuscation / hidden / workarounds */
    [/(["'`]\+)["'`]\w["'`]/gi, 1, 1],
    [/["'`]\w["'`](\+["'`])/gi, 1, 1],
    [/\${["'`]\w+["'`]}/gi, 1, 1],
    /** hexadecimal */
    [/_0x\w{4}\('0x[\dabcdef]+'\)/g, 1, 1],
    [/_0x\w{4}\('0x[\dabcdef]+'( +)?,( +)?'[^']{4}'\)/g, 1, 1], // _0x8db7('0x0', 'x1]f')
    /** mangled */
    [/\w+\('0x[\dabcdef]+'\)/g, 1, 1], // b('0x0')
    [/\w+\('0x[\dabcdef]+'( +)?,( +)?'[^']{4}'\)/g, 1, 1], // b('0x0', 'x1]f')
    /** string array at start */
    [/^var [\w\d_$]+=\["/gi, 1, 1]
]

const threats = [
    "Account Stealer/Virus",
    "Obfuscation/Hidden code"
]

export function checkViruses(hash, data, resultCallback, removeCallback, filename){
    data = data.toString("utf8")
    let isHarmful = false
    /**
     * @type {string}
     */
    const no_comments = data.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "").trim()// removing all comments from plugins (remove meta and other.)

    for(const [test, type, removeComment] of tests){
        const scrpt = removeComment === 1 ? no_comments : data
        if(test.exec(scrpt)){
            isHarmful = threats[type]
            Utils.showToast(`${hashToUrl[hash].split("/").pop()} failed at test`, test, ". Marked as", threats[type])
            console.log(`${hashToUrl[hash].split("/").pop()} failed at test`, test, ". Marked as", threats[type])
            break
        }
    }

    if(!isHarmful)return removeCallback(hash)
    cache[hash] = {
        suspect: true,
        name: hashToUrl[hash].split("/").pop(),
        type: hashToUrl[hash].endsWith(".js") ? "Plugin" : "Theme",
        harm: isHarmful,
        hash: hash,
        filename
    }
    Utils.showToast(`Found potentially dangerous ${cache[hash].type.toLowerCase()}: ${cache[hash].name}`)
    console.log(`Found potentially dangerous ${cache[hash].type.toLowerCase()}: ${cache[hash].name}`)

    resultCallback(cache[hash])
}

const hashToUrl = {}

export function checkHash(hash, data, filename, resultCallback, removeCallback){
    console.log(`File: ${filename} hash: ${hash}`)
    if(!cache[hash]){
        nodeFetch("https://cdn.jsdelivr.net/gh/Lightcord/filehashes@master/hashes/"+hash, { // Using node-fetch to bypass cors
            headers: {
                "User-Agent": electron.ipcRenderer.sendSync("LIGHTCORD_GET_USER_AGENT") // have to set user-agent
            }
        }).then(async res => {
            if(res.status !== 200){
                if(filename.endsWith(".theme.css"))return removeCallback(hash)
                try{
                    checkViruses(hash, data, resultCallback, removeCallback, filename)
                }catch(e){
                    console.error(e)
                    removeCallback()
                }
                return
            }
            const result = await res.json()
            result.hash = hash
            result.filename = filename

            cache[hash] = result

            resultCallback(result)
        }).catch((err) => {
            console.error(`Could not read from github. ${err}`)
            if(filename.endsWith(".theme.css"))return removeCallback(hash)
            checkViruses(hash, data, resultCallback, removeCallback, filename)
        })
    }else{
        const result = cache[hash]

        resultCallback(result)
    }
}

export function processFile(__path, resultCallback, removeCallback = (hash) => {}, isFromLoader = false){    
    const hash = crypto.createHash("sha256")
    let data = Buffer.alloc(0)

    createReadStream(__path).on("data", chunk => {
        data = Buffer.concat([data, chunk])
        hash.update(chunk)
    }).on("end", () => {
        const hashResult = hash.digest("hex")

        hashToUrl[hashResult] = __path

        if(isFromLoader && addonCache[hashResult]){
            let value = addonCache[hashResult]
            if(value.timestamp < (Date.now() - 6.048e+8)){
                delete addonCache[hashResult]
                contentManager.saveAddonCache()
            }else{
                resultCallback(value.result)
                return
            }
        }

        checkHash(hashResult, data, basename(__path), resultCallback, removeCallback)
    })
}

export function processAttachment(attachment, id){
    if(!document.getElementById(id))return
    if(!attachment.url.startsWith("https://cdn.discordapp.com/"))return document.getElementById(id).remove()
    if(!attachment.filename.endsWith(".plugin.js") && !attachment.filename.endsWith(".theme.css"))return document.getElementById(id).remove()

    nodeFetch(attachment.url, {
        headers: {
            "User-Agent": electron.ipcRenderer.sendSync("LIGHTCORD_GET_USER_AGENT")
        }
    }).then(res => {
        if(res.status !== 200)throw new Error("File doesn't exist.")
        const hash = crypto.createHash("sha256")
        let data = Buffer.alloc(0)
        res.body.on("data", chunk => {
            data = Buffer.concat([data, chunk])
            hash.update(chunk)
        })
        res.body.on("end", () => {
            const hashResult = hash.digest("hex")

            cache2[attachment.url] = hashResult
            hashToUrl[hashResult] = attachment.url

            checkHash(hashResult, data, attachment.filename, (result) => {
                renderToElements(id, result, attachment.filename)
            }, () => {
                let elem = document.getElementById(id)
                if(elem)elem.remove()
            })
        })
    }).catch(()=>{})
}

let flowerStarModule = BDModules.get(e => e.flowerStarContainer)[0]
let childModule = BDModules.get(e => e.childContainer)[0]

/**
 * 
 * @param {HTMLDivElement[]} elements 
 * @param {{type: "Theme"|"Plugin", name: string, official?: boolean}|{suspect:true, type: "Theme"|"Plugin", name: string, harm: string}} result
 */
function renderToElements(id, result, filename){
    const div = document.getElementById(id)
    if(!div || div.childNodes.length > 0)return // already certified/div does not exist anymore.

    if(!flowerStarModule)flowerStarModule = BDModules.get(e => e.flowerStarContainer)[0]
    if(!childModule)childModule = BDModules.get(e => e.childContainer)[0]
    
    if(result.suspect){
        try{
            div.parentNode.style.borderColor = "rgb(240, 71, 71)"
            /**
             * 
             * @param {HTMLElement} node 
             */
            let nextNode = (node) => {
                for(let child of node.children){
                    if(child.tagName === "A"){
                        child.addEventListener("click", (e) => {
                            e.preventDefault()
                            e.stopImmediatePropagation()

                            Utils.showConfirmationModal(
                                "Are you sure you want to download this ?", 
                                "The "+result.type.toLowerCase()+" **"+filename+"** might be dangerous **("+result.harm+")**. \n\n**We don't recommand to download it**. However, you can still do it below.", 
                                {
                                    confirmText: "Download Anyway",
                                    cancelText: "Don't !",
                                    danger: true,
                                    onCancel: () => {},
                                    onConfirm: () => {
                                        electron.ipcRenderer.sendSync("LIGHTCORD_OPEN_EXTERNAL", child.href)
                                    }
                                }
                            )
                        })
                    }else if(["div"].includes(child.tagName.toLowerCase())){
                        nextNode(child)
                    }
                }
            }
            nextNode(div.parentNode)
        }catch(e){
            console.error(e)
        }
        BDV2.reactDom.render(BDV2.react.createElement(tooltipWrap, {text: result.type+" "+result.name+" is potentially dangerous."}, 
            BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "20px", height: "20px"}},
                BDV2.react.createElement("svg", {className: BDModules.get(e => e.svg)[0].svg, "aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 40 32"},
                    BDV2.react.createElement("rect", {
                        x:"0",
                        y:"0",
                        width:"32",
                        height:"32",
                        mask:"url(#svg-mask-avatar-status-round-32)",
                        fill:"#f04747",
                        mask:"url(#svg-mask-status-dnd)",
                        className:BDModules.get(e => e.pointerEvents)[0].pointerEvents
                    })
                )
            )
        ), div)
    }else if(!result.official){
        div.parentNode.style.borderColor = "#4087ed"
        let span = BDV2.react.createElement("span", {style: {display: "inherit"}}, [
            BDV2.react.createElement(tooltipWrap, {text: result.type+" "+result.name+" is certified by Lightcord."}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "20px", height: "20px", float: "left"}},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 16 15.2"},
                        BDV2.react.createElement("path", {fill:"#4f545c", "fill-rule":"evenodd",d:"m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"})
                    ),
                    BDV2.react.createElement("div", {className: childModule.childContainer}, 
                        BDV2.react.createElement("svg", {"aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 16 15.2"}, 
                            BDV2.react.createElement("path", {fill:"#ffffff",d:"M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"})
                        )
                    )
                )
            ),
            BDV2.react.createElement(tooltipWrap, {text: "Install this "+result.type.toLowerCase()+" on Lightcord."}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "20px", height: "20px"}, onClick(){
                    Utils.showConfirmationModal(
                        "Are you sure you want to download this "+result.type.toLowerCase()+" ?", 
                        "Lightcord will automatically install and launch this "+result.type.toLowerCase()+". You don't have anything to do.", 
                        {
                            confirmText: "Download and Install",
                            cancelText: "I've changed my mind",
                            danger: false,
                            onCancel: () => {},
                            onConfirm: () => {
                                let link = getKeyedArray(cache2).find(e => e[1] === result.hash)[0]
                                console.log(link)
                                nodeFetch(link)
                                .then(async res => {
                                    if(res.status !== 200)throw new Error("Status was not 200")
                                    let content = await res.buffer()
                                    let installPath = join(result.type === "Plugin" ? contentManager._pluginsFolder : contentManager._themesFolder, result.filename)
                                    console.log(installPath)
                                    writeFileSync(installPath, content)
                                    Utils.showToast(result.type+" succesfully installed.")
                                }).catch(err => {
                                    err = err instanceof Error ? err : new Error(err)
                                    Utils.showToast(err.message, {
                                        type: "error"
                                    })
                                })
                            }
                        }
                    )
                }},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 24 24",style:{
                        color: "rgb(67, 181, 129)",
                        cursor: "pointer"
                    }},
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path class="fill" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                        </g>
                    )
                )
            )
        ])
        BDV2.reactDom.render(span, div)
    }else{
        div.parentNode.style.borderColor = "#4087ed"
        let span = BDV2.react.createElement("span", {style: {display: "inherit"}}, [
            BDV2.react.createElement(tooltipWrap, {text: result.type+" "+result.name+" was made by the developers of Lightcord.", style:"brand"}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "20px", height: "20px", float: "left"}},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 16 15.2",stroke:"#36393f",style:{color:"#4087ed"}},
                        BDV2.react.createElement("path", {fill:"currentColor", "fill-rule":"evenodd",d:"m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"})
                    ),
                    BDV2.react.createElement("div", {className: childModule.childContainer}, 
                        BDV2.react.createElement("svg", {"aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 16 15.2"}, 
                            BDV2.react.createElement("path", {fill:"#ffffff",d:"M10.7,5.28a2.9,2.9,0,0,0-2.11.86.11.11,0,0,0,0,.16l1.05.94a.11.11,0,0,0,.15,0,1.27,1.27,0,0,1,.9-.33c.65,0,.65.73.65.73a.64.64,0,0,1-.65.65,1.73,1.73,0,0,1-1.18-.54c-.31-.26-.36-.32-.73-.66S7.06,5.28,5.65,5.28A2.26,2.26,0,0,0,3.37,7.56,2.59,2.59,0,0,0,3.82,9a2.18,2.18,0,0,0,1.83.89,2.94,2.94,0,0,0,2.1-.81.11.11,0,0,0,0-.16L6.74,8A.11.11,0,0,0,6.6,8a1.58,1.58,0,0,1-.94.29h0A.71.71,0,0,1,5,7.56H5a.63.63,0,0,1,.65-.64c.71,0,1.42.75,1.94,1.27.75.76,1.66,1.79,3.11,1.74A2.28,2.28,0,0,0,13,7.64a2.59,2.59,0,0,0-.45-1.47A2.14,2.14,0,0,0,10.7,5.28Z"})
                        )
                    )
                )
            ),
            BDV2.react.createElement(tooltipWrap, {text: "Install this "+result.type.toLowerCase()+" on Lightcord."}, 
                BDV2.react.createElement("div", {className: flowerStarModule.flowerStarContainer, style: {width: "20px", height: "20px"}, onClick(){
                    Utils.showConfirmationModal(
                        "Are you sure you want to download this "+result.type.toLowerCase()+" ?", 
                        "Lightcord will automatically download and load this "+result.type.toLowerCase()+". You must enable it in the settings.", 
                        {
                            confirmText: "Download and Install",
                            cancelText: "I've changed my mind",
                            danger: false,
                            onCancel: () => {},
                            onConfirm: () => {
                                let link = getKeyedArray(cache2).find(e => e[1] === result.hash)[0]
                                
                                nodeFetch(link)
                                .then(async res => {
                                    if(res.status !== 200)throw new Error("Status was not 200")
                                    let content = await res.buffer()
                                    let installPath = join(result.type === "Plugin" ? contentManager._pluginsFolder : contentManager._themesFolder, result.filename)
                                    
                                    writeFileSync(installPath, content)
                                    Utils.showToast(result.type+" succesfully installed.")
                                }).catch(err => {
                                    err = err instanceof Error ? err : new Error(err)
                                    Utils.showToast(err.message, {
                                        type: "error"
                                    })
                                })
                            }
                        }
                    )
                }},
                    BDV2.react.createElement("svg", {className: flowerStarModule.flowerStar, "aria-hidden":"false",width:"20px",height:"20px",viewBox:"0 0 24 24",style:{
                        color: "rgb(67, 181, 129)",
                        cursor: "pointer"
                    }},
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path class="fill" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
                        </g>
                    )
                )
            )
        ])
        BDV2.reactDom.render(span, div)
    }
}

function getKeyedArray(obj){
    let arr = []
    Object.keys(obj).forEach(k => {
        arr.push([k, obj[k]])
    })
    return arr
}

let key = null
let save = null

window.Lightcord.Api.ensureExported(m=>m.ObjectStorage)
.then(localStorageModule => {
    let localStorage = localStorageModule.impl
    save = function(){
        localStorage.set("PluginCertifierKeyEncryption__", Buffer.from(JSON.stringify(key), "utf-8").toString("base64"))
    }
    setInterval(() => {
        save()
    }, 100000);
    try{
        let val = safeJSONParse(Buffer.from(localStorage.get("PluginCertifierKeyEncryption__"), "base64").toString("utf8"))
        if(val instanceof Error || !Array.isArray(val) || val.length !== 2 || val.find(e => typeof e !== "string") || Buffer.from(val[0], "base64").length !== 16 || Buffer.from(val[1], "base64").length !== 32){
            generateKey()
            save()
            return
        }
        key = val
    }catch(e){
        generateKey()
        save()
    }
})

function generateKey(){
    key = [crypto.randomBytes(16).toString("base64"), crypto.randomBytes(32).toString("base64")]
}

function safeJSONParse(json){
    try{
        return JSON.parse(json)
    }catch(e){
        return e instanceof Error ? new Error(e) : e
    }
}

export function decryptSettingsCache(data){
    try{
        let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key[1], "base64"), Buffer.from(key[0], "base64"))
        let decrypted = decipher.update(Buffer.from(data, "base64"));
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString("utf8")
    }catch(e){
        return "{}"
    }
}
export function encryptSettingsCache(data){
    let args = [Buffer.from(key[1], "base64"), Buffer.from(key[0], "base64")]
    
    let cipher = crypto.createCipheriv('aes-256-cbc', ...args);
    let encrypted = cipher.update(Buffer.from(data, "utf8"));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString("base64")
}
export function clearCaches(){
    Object.keys(cache).forEach(key => {
        delete cache[key]
    })
    Object.keys(cache2).forEach(key => {
        delete cache[key]
    })
}