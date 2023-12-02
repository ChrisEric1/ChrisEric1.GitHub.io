import BugHunterBadge from "../svg/bug_hunter"
import nodeFetch from "node-fetch"
import { settingsCookie } from "../0globals";
import Circus from "../svg/circus";

export function uuidv4() { // Generate UUID (No crypto rng)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

const awaitingBadgesPromises = {}
let badgesToFetch = []

export default new class DistantServer {
    constructor(){
        this._cache = {
            badges: {

            }
        }
        window.Lightcord.BetterDiscord.DistantServer = this
    }

    get cache(){
        return this._cache
    }

    set cache(data){
        if(typeof data !== "object" || typeof this._cache !== "object")return this._cache = data
        return this._cache = Object.assign(this._cache, data)
    }

    /**
     * Get custom badges from the user ID.
     * @param {string} user The user ID 
     * @returns {Promise<Constants["badges"]>}
     */
    async getBadges(user){
        if(this.cache.badges[user])return this.cache.badges[user]
        if(awaitingBadgesPromises[user])return awaitingBadgesPromises[user]

        let resolve
        const newPromise = new Promise((res) => (resolve = res))
        awaitingBadgesPromises[user] = newPromise

        const badges = []
        for(let badge of Constants.badges){
            if(badge.defaultUsers.includes(user))badges.push(badge)
        }
        const fetchedBadges = await new Promise((resolve) => {
            if(!settingsCookie["lightcord-5"])return resolve([])
            badgesToFetch.push([user, resolve])
            setTimeout(() => {
                let users = badgesToFetch
                if(users.length === 0)return
                badgesToFetch = []
                handleRequest(Routes.badges, "POST", JSON.stringify(users.map(e => e[0])))
                .then(async res => {
                    if(res.status !== 200){// Couldn't fetch badges: server error
                        users.forEach(data => {
                            data[1]([])// resolve no badge fetched
                        })
                    }
                    const responseBody = await res.json()
                    
                    for(let user of responseBody){
                        let promise = users.find(promise => promise[0] === user.user_id)
                        promise[1](user.badges)
                    }
                }).catch((err) => {// Couldn't fetch badges: error
                    if(!(err instanceof LightcordError))console.error(err)
                    users.forEach(data => {
                        data[1]([])// resolve no badge fetched
                    })
                })
            }, 0)
        })
        for(let badge of fetchedBadges){
            if(!Constants.badges.find(e => e.id === badge))continue // We do not have the Component, skip it.
            if(badges.find(e => e.id === badge))continue // Already inserted.
            badges.push(Constants.badges.find(e => e.id === badge))
        }
        this.cache = {
            badges: Object.assign(this.cache.badges, {[user]: badges})
        }
        setTimeout(() => {
            delete this.cache.badges[user]
        }, 600000);

        resolve(badges)
        delete awaitingBadgesPromises[user]
        return badges
    }
}

const handleRequest = function(route, method, data){
    if(!settingsCookie["lightcord-5"]){
        return Promise.reject(new LightcordError("The current settings blocked the request."))
    }
    return nodeFetch(`${Constants.SERVER_URL}/api/v1${route}`, {
        method,
        headers: {
            "CLIENT": "Lightcord",
            "Authorization": window.Lightcord.Api.Authorization || "None::Anonymous"
        },
        ...(data ? {
            body: data
        } : {})
    })
}

class LightcordError extends Error {
    constructor(){
        super(...arguments)
        this.name = "LightcordError"
    }
}

export const Constants = {
    SERVER_URL: "https://lightcord.org",
    badges: [ // TODO: Add more badges + server side svg
        {
            name: "Lightcord Bug Hunter",
            id: "f04698f5-816b-41e3-bd01-92291193d7a5",
            defaultUsers: [
                "696481194443014174",
                "696003456611385396"
            ],
            scopes: [],
            component: BugHunterBadge,
            href: "https://github.com/lightcord/lightcord/wiki/badges#bug_hunter"
        }, {
            name: "Buffoon",
            id: "06904d31-65b4-41ec-a50c-8658bbd1af96",
            defaultUsers: [
                "389016895543705602",
                "664600134528663565",
                "625350657829896224"
            ],
            scopes: [],
            component: Circus,
            href: "https://youtu.be/EJtb6z-dlT8?t=145"
        }
    ]
}

export const Routes = {
    badges: `/users/badges`
}