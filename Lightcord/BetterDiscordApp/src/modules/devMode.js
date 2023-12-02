import {settingsCookie} from "../0globals";
import BDV2 from "./v2";
import DOM from "./domtools";
import Utils from "./utils";

export default new class DevMode {
    constructor() {
        this.debugListener = this.debugListener.bind(this);
        this.copySelectorListener = this.copySelectorListener.bind(this);
    }

    start() {
        this.startDebugListener();
        if (settingsCookie["fork-dm-1"]) this.startCopySelector();
    }
    
    stop() {
        this.stopDebugListener();
        this.stopCopySelector();
    }

    startDebugListener() {
        this.stopDebugListener();
        document.addEventListener("keydown", this.debugListener);
    }

    stopDebugListener() {
        document.removeEventListener("keydown", this.debugListener);
    }

    startCopySelector() {
        this.stopCopySelector();
        document.addEventListener("contextmenu", this.copySelectorListener);
    }

    stopCopySelector() {
        document.removeEventListener("contextmenu", this.copySelectorListener);
    }

    debugListener(e) {
        if (e.which === 119 || e.which == 118) {//F8
            console.log("%c[%cDevMode%c] %cBreak/Resume", "color: red;", "color: #303030; font-weight:700;", "color:red;", "");
            debugger; // eslint-disable-line no-debugger
            e.preventDefault();
            e.stopImmediatePropagation();
         }
    }

    copySelectorListener(e) {
        try{
            e.stopPropagation();
            const selector = this.getSelector(e.target);
    
            let [
                classLayer, 
                classItems
            ] = [
                BDModules.get((e) => e.layer && typeof e.layer === "string" && e.disabledPointerEvents)[0],
                BDModules.get((e) => e.menu)[0]
            ]
            
            function attach() {
                if(!classItems || !classLayer.layer)return console.log(classItems, classLayer.layer)

                let cm = DOM.query("."+Utils.removeDa(classItems.menu));
                if (!cm) {
                    const container = DOM.query("#app-mount > ."+Utils.removeDa(classLayer.layerContainer));
                    const cmWrap = DOM.createElement(`<div class="${classLayer.layer}">`);
                    cm = DOM.createElement(`<div class="${classItems.menu} ${classItems.styleFlexible} ${classItems.accommodateScrollbar} bd-context-menu" style=""></div>`);
                    cmWrap.append(cm);
                    container.append(cmWrap);
                    cmWrap.style.top = e.clientY + "px";
                    cmWrap.style.left = e.clientX + "px";
                    cmWrap.setAttribute("role", "menu")
                    cmWrap.setAttribute("tabindex", "-1")
                    cmWrap.id = "bd-copy-selector-context"
                    cmWrap.setAttribute("aria-label", "Copy Selector Actions")

                    const scrollerClasses = BDModules.get((e) => e.scrollerWrap)[0]
                    const scrollerWrap = DOM.createElement(`<div class="${scrollerClasses.scrollerWrap} ${scrollerClasses.scrollerThemed} ${scrollerClasses.themeGhostHairline}"></div>`)
                    const scroller = DOM.createElement(`<div class="${BDModules.get(e => e.scroller)[0].scroller} ${classItems.scroller}"></div>`)
                    scrollerWrap.append(scroller)
                    cm.append(scrollerWrap)

                    const removeCM = function(e) {
                        if (e.keyCode && e.keyCode !== 27) return;
                        cmWrap.remove();
                        document.removeEventListener("click", removeCM);
                        document.removeEventListener("contextmenu", removeCM);
                        document.removeEventListener("keyup", removeCM);
                    };
                    document.addEventListener("click", removeCM);
                    document.addEventListener("contextmenu", removeCM);
                    document.addEventListener("keyup", removeCM);
                }
                const cmWrap = cm.parentElement
                
                if ([...cm.childNodes[0].childNodes].length > 1) {
                    var scroller = cm.childNodes[0].childNodes[1]
                } else {
                    var scroller = cm.childNodes[0].childNodes[0]
                }
                const cmg = DOM.createElement(`<div role="group"></div>`);
                /**
                 * @type {HTMLElement}
                 */
                const cmi = DOM.createElement(`<div class="${classItems.item} ${classItems.labelContainer} ${classItems.colorDefault}" role="menuitem" id="bd-copy-selector-item-cm"></div>`);
                cmi.append(DOM.createElement(`<div class="${classItems.label}">Copy Selector</div>`));
                cmi.addEventListener("click", () => {
                    BDV2.NativeModule.copy(selector);
                    cmWrap.style.display = "none"
                });
                cmi.addEventListener("mouseover", (e) => {
                    let elements = DOM.queryAll("div[role=menuitem]."+Utils.removeDa(classItems.focused))
                    elements && elements.forEach(elem => elem.classList.remove(classItems.focused))
                    cmi.classList.add(classItems.focused)
                })
                cmi.addEventListener("mouseout", (e) => {
                    cmi.classList.remove(classItems.focused)
                })
                cmg.append(cmi);
                if(scroller.childNodes.length){ // apend a separator
                    const separator = DOM.createElement(`<div role="separator" class="${classItems.separator}"></div>`)
                    scroller.append(separator)
                }
                scroller.append(cmg);
                if(cmWrap.clientHeight < cmWrap.scrollHeight){
                    console.log("overflowing "+cmWrap.style.top)
                    cmWrap.style.top = (cmWrap.style.top - cmg.clientHeight) + "px";
                    console.log("overflowing"+cmWrap.style.top)
                }
            }
    
            setTimeout(attach, 1);
        }catch(e){
            console.error(e)
        }
    }

    getSelector(element) {
        if (element.id) return `#${element.id}`;
        /**
         * 
         * @param {HTMLElement} el 
         */
        function fullPath(el){
            var names = [];
            while (el.parentNode){
              if (el.id){
                names.unshift('#'+el.id);
                break;
              }else{
                if (el==el.ownerDocument.documentElement) names.unshift(el.tagName.toLowerCase()+Array.from(el.classList.entries()).map(e => "."+e).join(""));
                else{
                  for (var c=1,e=el;e.previousElementSibling;e=e.previousElementSibling,c++);
                  names.unshift(el.tagName.toLowerCase()+((typeof el.className === "string" && el.className) || "").split(" ").filter(e => !!e).map(e => "."+e).join("")+":nth-child("+c+")");
                }
                el=el.parentNode;
              }
            }
            return names.join(" > ");
        }
        return fullPath(element)
    }
};