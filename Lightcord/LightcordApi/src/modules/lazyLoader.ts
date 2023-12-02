let cache = new Map()

export function LazyLoad<T>(getObject: () => T):T{
    if(cache.has(getObject))return cache.get(getObject)

    let mdl = null
    let setModule = () => {
        if(mdl)return
        mdl = getObject()
    }
    let handler:ProxyHandler<{}> = {
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
            handler.apply(target, prototype, args)
            return prototype
        },
        deleteProperty(target, prop){
            setModule()
            if(!(prop in mdl))return false
            delete mdl[prop]
            return true
        },
        enumerate(target){
            setModule()
            return Object.keys(mdl)
        },
        ownKeys(target) {
            setModule()
            return Object.keys(mdl)
        },
        has(target, prop){
            setModule()
            return prop in mdl
        },
        defineProperty(target, prop, attributes){
            setModule()
            return Object.defineProperty(mdl, prop, attributes)
        },
        getOwnPropertyDescriptor(target, prop){
            setModule()
            return Object.getOwnPropertyDescriptor(mdl, prop)
        },
        getPrototypeOf(target){
            setModule()
            return Object.getPrototypeOf(mdl)
        },
        setPrototypeOf(target, proto){
            setModule()
            try{
                Object.setPrototypeOf(mdl, proto)
                return true
            }catch(e){
                return false
            }
        },
        isExtensible(target){
            setModule()
            return Object.isExtensible(mdl)
        },
        preventExtensions(target){
            setModule()
            Object.preventExtensions(mdl)
            return true
        }
    }
    const proxy = new Proxy({}, handler)

    cache.set(getObject, proxy)
    return proxy as T
}