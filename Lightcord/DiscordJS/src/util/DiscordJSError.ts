export default class DiscordJSError extends Error {
    name:string = "DiscordJSError"
    constructor(message: string){
        super(message)
    }
}