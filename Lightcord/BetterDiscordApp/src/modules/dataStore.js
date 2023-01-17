import Utils from "./utils";
import ContentManager from "./contentManager";

const fs = require("fs");
const path = require("path");
const releaseChannel = DiscordNative.globals ? DiscordNative.globals.releaseChannel : DiscordNative.app ? DiscordNative.app.getReleaseChannel() : "stable";

let dataPath = "";
if (process.platform === "win32") dataPath = process.env.APPDATA;
else if (process.platform === "darwin") dataPath = path.join(process.env.HOME, "Library", "Preferences");
else dataPath = process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : path.join(process.env.HOME, ".config");
dataPath = path.join(dataPath, "BetterDiscord");

export default new class DataStore {
    constructor() {
        this.data = {settings: {stable: {}, canary: {}, ptb: {}}};
        this.pluginData = {};
        window.Lightcord.BetterDiscord.DataStore = this
    }

    initialize() {
        try {
            if (!fs.existsSync(this.BDFile)) fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "utf-8");
            const data = JSON.parse(fs.readFileSync(this.BDFile, "utf-8"))
            if (data.hasOwnProperty("settings")) this.data = data;
            if (!fs.existsSync(this.settingsFile)) return;
            let settings = __non_webpack_require__(this.settingsFile);
            fs.unlinkSync(this.settingsFile);
            if (settings.hasOwnProperty("settings")) settings = Object.assign({stable: {}, canary: {}, ptb: {}}, {[releaseChannel]: settings});
            else settings = Object.assign({stable: {}, canary: {}, ptb: {}}, settings);
            this.setBDData("settings", settings);
        }
        catch (err) {
            console.error(err);
            Utils.alert("Corrupt Storage", "The bd storage has somehow become corrupt. You may either try to salvage the file or delete it then reload.");
        }
    }

    get injectionPath() {
        return this._injectionPath = null;
    }

    get configFile() {return this._configFile || (this._configFile = path.resolve(this.injectionPath, "betterdiscord", "config.json"));}
    get BDFile() {return this._BDFile || (this._BDFile = path.resolve(dataPath, "bdstorage.json"));}
    get settingsFile() {return this._settingsFile || (this._settingsFile = path.resolve(dataPath, "bdsettings.json"));}
    getPluginFile(pluginName) {return path.resolve(ContentManager.pluginsFolder, pluginName + ".config.json");}

    getSettingGroup(key) {
        return this.data.settings[releaseChannel][key] || null;
    }

    setSettingGroup(key, data) {
        this.data.settings[releaseChannel][key] = data;
        fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "utf-8");
    }

    getBDData(key) {
        return this.data[key] || "";
    }

    setBDData(key, value) {
        this.data[key] = value;
        fs.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4), "utf-8");
    }

    getPluginData(pluginName, key) {
        if (this.pluginData[pluginName] !== undefined) return this.pluginData[pluginName][key];
        if (!fs.existsSync(this.getPluginFile(pluginName))) return undefined;
        this.pluginData[pluginName] = JSON.parse(fs.readFileSync(this.getPluginFile(pluginName)));
        return this.pluginData[pluginName][key];
    }

    setPluginData(pluginName, key, value) {
        if (value === undefined) return;
        if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
        this.pluginData[pluginName][key] = value;
        fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4), "utf-8");
    }

    deletePluginData(pluginName, key) {
        if (this.pluginData[pluginName] === undefined) this.pluginData[pluginName] = {};
        delete this.pluginData[pluginName][key];
        fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4), "utf-8");
    }
};