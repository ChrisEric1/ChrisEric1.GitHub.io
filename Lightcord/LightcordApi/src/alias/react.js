window.React = (window.React || // If in Lightcord
    (()=>{ // If in Standard BetterDiscord
        try{
            return window.BdApi.React
        }catch(e){
            return null
        }
    })() ||
    (()=>{ // If in Powercord
        try{
            const webpack = require("powercord/webpack")
            return webpack.React
        }catch(e){
            return null
        }
    })() || 
    (()=>{ // If in EnhancedDiscord
        try{
            return window.EDApi.React
        }catch(e){
            return null
        }
    })())

module.exports = window.React