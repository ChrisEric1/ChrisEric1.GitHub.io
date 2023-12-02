const BDModules:typeof window.BDModules = window.BDModules || require("./BDModules")

export default new class WebpackLoader {
    constructor(){}

    get(id: number):any{
        return BDModules.get(id)
    }
    find(filter: (mod:any) => boolean):any{
        let result = BDModules.get(filter)[0]
        if(!result){
            console.warn(filter, "couldn't find the module.")
        }
        return result
    }
    findByUniqueProperties(props:(string|number)[]):any{
        return BDModules.get((mod) => {
            if(mod.__esModule && ("default" in mod)){
                let doesMatch = true
                for(let prop of props){
                    if(!Object.prototype.hasOwnProperty.call(mod.default, prop))doesMatch = false
                }
                if(doesMatch)return true
            }
            for(let prop of props){
                if(!Object.prototype.hasOwnProperty.call(mod, prop))return false
            }
            return true
        })[0]
    }
    filter(filter: (mod:any) => boolean):any[]{
        return BDModules.get(filter)
    }
    filterByUniqueProperties(props:(string|number)[]):any{
        return BDModules.get((mod) => {
            if(mod.__esModule && ("default" in mod)){
                let doesMatch = true
                for(let prop of props){
                    if(!Object.prototype.hasOwnProperty.call(mod.default, prop))doesMatch = false
                }
                if(doesMatch)return true
            }
            for(let prop of props){
                if(!Object.prototype.hasOwnProperty.call(mod, prop))return false
            }
            return true
        })
    }
}

export class WebpackLoaderError extends Error {
    constructor(message:string = ""){
        message += "\n\tThis error is related to Lightcord not being able to find a WebpackModule. \n\tPlease show this error and a few lines of logs above this error to the devs. \n\tOpen an issue on https://github.com/Lightcord/Lightcord or in our discord server."
        super(message)
        this.name = "WebpackLoaderError"
    }
}