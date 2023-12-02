let req
setReq()
function filterDangerous(mods){
    return mods.map(e => {
        return protect(e)
    })
}
function protect(exports){
    let theModule = exports.exports
    let mod = theModule.default
    if(!mod)return exports
    if (mod.remove && mod.set && mod.clear && mod.get && !mod.sort) return null;
    if (!mod.getToken && !mod.getEmail && !mod.showToken)return exports

    const proxy = new Proxy(mod, {
        getOwnPropertyDescriptor: function(obj, prop) {
            if (prop === "getToken" || prop === "getEmail" || prop === "showToken") return undefined;
            return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function(obj, func) {
            if (func == "getToken" && obj.getToken) return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
            if (func == "getEmail" && obj.getEmail) return () => "puppet11112@gmail.com";
            if (func == "showToken" && obj.showToken) return () => true;
            if (func == "__proto__" && obj.__proto__) return proxy;
            
            return obj[func];
        }
    });

    return Object.assign({}, exports, {exports: Object.assign({}, theModule, {default: proxy})})
}

class Webpackloader {
    get modules(){
        if(req){
            return filterDangerous(Object.values(req.c).filter((e:any) => e && e.exports))
        }else{
            setReq()
            if(req){
                return filterDangerous(Object.values(req.c).filter((e:any) => e && e.exports))
            }else{
                return []
            }
        }
    }
    get(ids, modules){
        if(typeof ids === "function"){
            return (modules || this.modules).map((mdl) => {
                if(mdl && typeof mdl.exports !== "undefined"){
                    return mdl.exports
                }else{
                    return null
                }
            }).filter(e => e).filter(ids)
        }else if(Array.isArray(ids)){
            modules = modules || this.modules
            return ids.map(id => this.get(id, modules))
        }else{
            modules = modules || this.modules
            let module = modules.filter(e => !!e).find(e => e.i === ids)
            if(!module)return undefined
            return module.exports
        }
    }
    get default(){
        return this
    }
}

export default new Webpackloader()

function setReq(){
    try{
        req = window["webpackJsonp"].push([[], {__extra_id__: (mdl, exports, req) => mdl.exports = req}, [["__extra_id__"]]]);
        if(req){
            delete req.m.__extra_id__;
            delete req.c.__extra_id__;
        }
    }catch(e){
        req = undefined
    }
}

class DangerousWebpackloader {
    get modules(){
        if(req){
            return Object.values(req.c).filter((e:any) => e && e.exports)
        }else{
            setReq()
            if(req){
                return Object.values(req.c).filter((e:any) => e && e.exports)
            }else{
                return []
            }
        }
    }
    get(ids, modules?){
        if(typeof ids === "function"){
            return (modules || this.modules).map((mdl) => {
                if(mdl && typeof mdl.exports !== "undefined"){
                    return mdl.exports
                }else{
                    return null
                }
            }).filter(e => e).filter(ids)
        }else if(Array.isArray(ids)){
            modules = modules || this.modules
            return ids.map(id => this.get(id, modules))
        }else{
            modules = modules || this.modules
            let module = modules.filter(e => !!e).find(e => e.i === ids)
            if(!module)return undefined
            return module.exports
        }
    }
    get default(){
        return this
    }
}
export const dangerousBDModules = new DangerousWebpackloader()