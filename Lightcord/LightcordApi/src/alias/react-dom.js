// bait typescript into thinking this is not reactDOM so no circular dependency.
window.ReactDOM = (window["Reac"+"tDOM"] || // If in Lightcord
    (()=>{ // If in Standard BetterDiscord
        try{
            return window.BdApi.ReactDOM
        }catch(e){
            return null
        }
    })() ||
    (()=>{ // If in Powercord
        try{
            const webpack = require("powercord/webpack")
            return webpack.ReactDOM
        }catch(e){
            return null
        }
    })() || 
    (()=>{ // If in EnhancedDiscord
        try{
            return window.EDApi.ReactDOM
        }catch(e){
            return null
        }
    })())

module.exports = window.ReactDOM