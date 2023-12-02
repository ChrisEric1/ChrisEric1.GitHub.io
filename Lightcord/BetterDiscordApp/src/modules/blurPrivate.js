/**
 * Credits to @hellbound1337 on github for the css
 */

import DOMTools from "./domtools"
import Utils from "./utils"

let selectors
const removeDa = Utils.removeDa
function getSelectors(){
    let standardSidebarView = BDModules.get(e => e.standardSidebarView)[0]
    if(!standardSidebarView)return null
    let defaultClassName = removeDa(standardSidebarView.standardSidebarView)
    let selects = []
    let userSettingsAccount = BDModules.get(e => e.userSettingsAccount)[0]
    const children = BDModules.get(e => typeof e.children === "string")[0]
    selects.push(`#app-mount .${defaultClassName} .payment-info .${removeDa(BDModules.get(e => e.description && typeof e.description === "string" && e.description.includes("formText"))[0].description)}`)
    selects.push(`#app-mount .${defaultClassName} .${removeDa(BDModules.get(e => e.paymentSourceRow)[0].paymentSourceRow)} .${removeDa(BDModules.get(e => e.subText && e.descriptionWrapper)[0].subText)}`)
    if(userSettingsAccount){
        selects.push(`#app-mount .${defaultClassName} .${removeDa(userSettingsAccount.userSettingsAccount)} div:nth-child(2)>div:nth-child(2)>.${removeDa(BDModules.get(e => e.viewBody)[0].viewBody)}`)
        selects.push(`.${removeDa(userSettingsAccount.userSettingsSecurity)} .${removeDa(children.children)} > div:nth-child(2)`)
    }
    return selects
}

export default new class BlurPrivate {
    constructor(){
        this.enabled = false
    }

    enable(){
        if(this.enabled)return
        this.enabled = true
        selectors = selectors || getSelectors()

        if(!selectors)console.error(new Error("Couldn't find selectors to blur personnal informations."))
        DOMTools.addStyle("blurPrivate", `
${selectors.join(", ")} {
    transition: all 150ms cubic-bezier(.55,.085,.68,.53);
    filter: blur(4px);
    opacity: .8;
}

${selectors.map(e => e+":hover").join(", ")}  {
    transition: all 150ms cubic-bezier(.55,.09,.68,.53);
    filter: none;
    opacity: 1;
}`)
    }

    disable(){
        if(!this.enabled)return
        this.enabled = false
        DOMTools.removeStyle("blurPrivate")
    }
}