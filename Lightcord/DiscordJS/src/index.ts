import Client from "./client/client"

const client = new Client()

const DiscordJSExporrts = {
    Client,
    client
}

declare global {
    interface Window {
        DiscordJS: typeof DiscordJSExporrts,
        DiscordJSClient: Client,
        BDModules: {
            modules:any[],
            get(id:number, modules?:any[]): any
            get(ids:number[], modules?:any[]): any[]
            get(filter:(module:any)=>boolean, modules?:any[]): any[]
        }
    }
}

window.DiscordJS = DiscordJSExporrts
window.DiscordJSClient = client

export default DiscordJSExporrts

export type Snowflake = string

export type Channel = any