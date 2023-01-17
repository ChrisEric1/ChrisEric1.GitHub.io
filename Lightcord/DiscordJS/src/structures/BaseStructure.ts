import Client from "../client/client";

export default class BaseStructure {
    constructor(){}

    get client():Client {
        return window.DiscordJSClient
    }
}