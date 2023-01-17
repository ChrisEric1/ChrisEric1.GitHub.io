const cache = {}

export function lazyLoad<T>(id:string):T{
    if(cache[id])return cache[id]
    
    let mdl = null
    let setModule = () => {
        if(!mdl)mdl = require("./modules/"+id)
    }
    
    const handlers:ProxyHandler<{}> = {
        get(target, prop){
            setModule()
            return mdl[prop]
        },
        set(target, prop, value){
            setModule()
            mdl[prop] = value
            return true
        },
        apply(target, thisArg, args){
            setModule()
            mdl.apply(this, args)
        },
        construct(target, args){
            setModule()
            const prototype = Object.create(mdl.prototype)
            handlers.apply(target, prototype, args)
            return prototype
        }
    }
    let proxy = new Proxy({}, handlers)

    return cache[id] = proxy as T
}