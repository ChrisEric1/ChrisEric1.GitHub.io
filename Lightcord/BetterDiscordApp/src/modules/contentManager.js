import { bdConfig, bdplugins, bdthemes, settingsCookie } from "../0globals";
import pluginModule from "./pluginModule";
import themeModule from "./themeModule";
import Utils from "./utils";
import dataStore from "./dataStore";
import {
  encryptSettingsCache,
  decryptSettingsCache,
  processFile,
} from "./pluginCertifier";
import * as electron from "electron";

const path = require("path");
const fs = require("fs");
const Module = require("module").Module;
Module.globalPaths.push(
  path.resolve(
    electron.ipcRenderer.sendSync("LIGHTCORD_GET_APP_PATH"),
    "node_modules"
  )
);
class MetaError extends Error {
  constructor(message) {
    super(message);
    this.name = "MetaError";
  }
}
const originalJSRequire = Module._extensions[".js"];
const originalCSSRequire = Module._extensions[".css"]
  ? Module._extensions[".css"]
  : () => {
      return null;
    };
const splitRegex = /[^\S\r\n]*?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/;
const escapedAtRegex = /^\\@/;

export let addonCache = {};

let hasPatched = false;
export default new (class ContentManager {
  constructor() {
    this.timeCache = {};
    this.watchers = {};
  }

  patchExtensions() {
    if (hasPatched) return;
    hasPatched = true;
    Module._extensions[".js"] = this.getContentRequire("plugin");
    Module._extensions[".css"] = this.getContentRequire("theme");
  }

  get pluginsFolder() {
    return (
      this._pluginsFolder ||
      (this._pluginsFolder = fs.realpathSync(
        path.resolve(bdConfig.dataPath + "plugins/")
      ))
    );
  }
  get themesFolder() {
    return (
      this._themesFolder ||
      (this._themesFolder = fs.realpathSync(
        path.resolve(bdConfig.dataPath + "themes/")
      ))
    );
  }

  loadAddonCertifierCache() {
    if (
      typeof dataStore.getSettingGroup("PluginCertifierHashes") !== "string"
    ) {
      dataStore.setSettingGroup(
        "PluginCertifierHashes",
        encryptSettingsCache("{}")
      );
    } else {
      try {
        addonCache = JSON.parse(
          decryptSettingsCache(
            dataStore.getSettingGroup("PluginCertifierHashes")
          )
        );
      } catch (e) {
        dataStore.setSettingGroup(
          "PluginCertifierHashes",
          encryptSettingsCache("{}")
        );
        addonCache = {};
      }
    }
    Object.keys(addonCache).forEach((key) => {
      let value = addonCache[key];
      if (!value || typeof value !== "object" || Array.isArray(value))
        return delete addonCache[key];

      let props = [
        {
          key: "timestamp",
          type: "number",
        },
        {
          key: "result",
          type: "object",
        },
        {
          key: "hash",
          type: "string",
        },
      ];
      for (let prop of props) {
        if (!(prop.key in value) || typeof value[prop.key] !== prop.type) {
          delete addonCache[key];
          return;
        }
      }
      if (value.hash !== key) {
        delete addonCache[key];
        return;
      }
      if (value.result.suspect) {
        // refetch from remote to be sure you're up to date.
        delete addonCache[key];
        return;
      }
    });
    this.saveAddonCache();
  }

  saveAddonCache() {
    dataStore.setSettingGroup(
      "PluginCertifierHashes",
      encryptSettingsCache(JSON.stringify(addonCache))
    );
  }

  resetAddonCache() {
    Object.keys(addonCache).forEach((key) => {
      delete addonCache[key];
    });
    console.log(addonCache);
    this.saveAddonCache();
  }

  watchContent(contentType) {
    if (this.watchers[contentType]) return;
    const isPlugin = contentType === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    this.watchers[contentType] = fs.watch(
      baseFolder,
      { persistent: false },
      async (eventType, filename) => {
        if (!eventType || !filename || !filename.endsWith(fileEnding)) return;
        await new Promise((r) => setTimeout(r, 50));
        try {
          fs.statSync(path.resolve(baseFolder, filename));
        } catch (err) {
          if (err.code !== "ENOENT") return;
          delete this.timeCache[filename];
          if (isPlugin) return pluginModule.unloadPlugin(filename);
          return themeModule.unloadTheme(filename);
        }
        if (!fs.statSync(path.resolve(baseFolder, filename)).isFile()) return;
        const stats = fs.statSync(path.resolve(baseFolder, filename));
        if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
        if (typeof stats.mtime.getTime() !== "number") return;
        if (this.timeCache[filename] == stats.mtime.getTime()) return;
        this.timeCache[filename] = stats.mtime.getTime();
        if (eventType == "rename") {
          if (isPlugin) await pluginModule.loadPlugin(filename);
          else await themeModule.loadTheme(filename);
        }
        if (eventType == "change") {
          if (isPlugin) await pluginModule.reloadPlugin(filename);
          else await themeModule.reloadTheme(filename);
        }
      }
    );
  }

  unwatchContent(contentType) {
    if (!this.watchers[contentType]) return;
    this.watchers[contentType].close();
    delete this.watchers[contentType];
  }

  extractMeta(content) {
    const firstLine = content.split("\n")[0];
    const hasOldMeta = firstLine.includes("//META");
    if (hasOldMeta) return this.parseOldMeta(content);
    const hasNewMeta = firstLine.includes("/**");
    if (hasNewMeta) return this.parseNewMeta(content);
    throw new MetaError("META was not found.");
  }

  parseOldMeta(content) {
    const meta = content.split("\n")[0];
    const rawMeta = meta.substring(
      meta.lastIndexOf("//META") + 6,
      meta.lastIndexOf("*//")
    );
    if (meta.indexOf("META") < 0) throw new MetaError("META was not found.");
    const parsed = Utils.testJSON(rawMeta);
    if (!parsed) throw new MetaError("META could not be parsed.");
    if (!parsed.name) throw new MetaError("META missing name data.");
    parsed.format = "json";
    return parsed;
  }

  parseNewMeta(content) {
    const block = content.split("/**", 2)[1].split("*/", 1)[0];
    const out = {};
    let field = "";
    let accum = "";
    for (const line of block.split(splitRegex)) {
      if (line.length === 0) continue;
      if (line.charAt(0) === "@" && line.charAt(1) !== " ") {
        out[field] = accum;
        const l = line.indexOf(" ");
        field = line.substr(1, l - 1);
        accum = line.substr(l + 1);
      } else {
        accum += " " + line.replace("\\n", "\n").replace(escapedAtRegex, "@");
      }
    }
    out[field] = accum.trim();
    delete out[""];
    out.format = "jsdoc";
    return out;
  }

  getContentRequire(type) {
    const isPlugin = type === "plugin";
    const self = this;
    const originalRequire = isPlugin ? originalJSRequire : originalCSSRequire;
    return function (module, filename) {
      const baseFolder = isPlugin ? self.pluginsFolder : self.themesFolder;
      const possiblePath = path.resolve(baseFolder, path.basename(filename));
      if (
        !fs.existsSync(possiblePath) ||
        filename !== fs.realpathSync(possiblePath)
      )
        return Reflect.apply(originalRequire, this, arguments);
      let content = fs.readFileSync(filename, "utf8");
      content = Utils.stripBOM(content);

      const stats = fs.statSync(filename);
      const meta = self.extractMeta(content);
      meta.filename = path.basename(filename);
      meta.added = stats.atimeMs;
      meta.modified = stats.mtimeMs;
      meta.size = stats.size;
      if (!isPlugin) {
        meta.css = content;
        if (meta.format == "json")
          meta.css = meta.css.split("\n").slice(1).join("\n");
        content = `module.exports = ${JSON.stringify(meta)};`;
      }
      if (isPlugin) {
        module._compile(content, module.filename);
        const didExport = !Utils.isEmpty(module.exports);
        if (didExport) {
          meta.type = module.exports;
          module.exports = meta;
          content = "";
        } else {
          Utils.warn(
            "Module Not Exported",
            `${meta.name}, please start setting module.exports`
          );
          content += `\nmodule.exports = ${JSON.stringify(
            meta
          )};\nmodule.exports.type = ${meta.exports || meta.name};`;
        }
      }
      module._compile(content, filename);
    };
  }

  makePlaceholderPlugin(data) {
    return {
      plugin: {
        start: () => {},
        getName: () => {
          return data.name || data.filename;
        },
        getAuthor: () => {
          return "???";
        },
        getDescription: () => {
          return data.message
            ? data.message
            : "This plugin was unable to be loaded. Check the author's page for updates.";
        },
        getVersion: () => {
          return "???";
        },
      },
      name: data.name || data.filename,
      filename: data.filename,
      source: data.source ? data.source : "",
      website: data.website ? data.website : "",
    };
  }

  async loadContent(filename, type) {
    if (typeof filename === "undefined" || typeof type === "undefined") return;
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;

    if (settingsCookie["fork-ps-6"]) {
      let result = await new Promise((resolve) => {
        processFile(
          path.resolve(baseFolder, filename),
          (result) => {
            console.log(result);
            resolve(result);
          },
          (hash) => {
            resolve({
              suspect: false,
              hash: hash,
              filename: filename,
              name: filename,
            });
          },
          true
        );
      });
      if (result) {
        addonCache[result.hash] = {
          timestamp: Date.now(),
          hash: result.hash,
          result: result,
        };
        this.saveAddonCache();
        if (result.suspect) {
          return {
            name: filename,
            file: filename,
            message: "This plugin might be dangerous (" + result.harm + ").",
            error: new Error(
              "This plugin might be dangerous (" + result.harm + ")."
            ),
          };
        }
      }
    }

    try {
      __non_webpack_require__(path.resolve(baseFolder, filename));
    } catch (error) {
      return {
        name: filename,
        file: filename,
        message: "Could not be compiled.",
        error: { message: error.message, stack: error.stack },
      };
    }
    const content = __non_webpack_require__(path.resolve(baseFolder, filename));
    if (!content.name)
      return {
        name: filename,
        file: filename,
        message: "Cannot escape the ID.",
        error: new Error("Cannot read property 'replace' of undefined"),
      };
    content.id = Utils.escapeID(content.name);
    //if(!id)return {name: filename, file: filename, message: "Invalid ID", error: new Error("Please fix the name of "+filename+". BetterDiscord can't escape an ID.")}
    if (isPlugin) {
      if (!content.type) return;
      try {
        content.plugin = new content.type();
        delete bdplugins[content.plugin.getName()];
        bdplugins[content.plugin.getName()] = content;
      } catch (error) {
        return {
          name: filename,
          file: filename,
          message: "Could not be constructed.",
          error: { message: error.message, stack: error.stack },
        };
      }
    } else {
      delete bdthemes[content.name];
      bdthemes[content.name] = content;
    }
  }

  unloadContent(filename, type) {
    if (typeof filename === "undefined" || typeof type === "undefined") return;
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
    try {
      delete __non_webpack_require__.cache[
        __non_webpack_require__.resolve(path.resolve(baseFolder, filename))
      ];
    } catch (err) {
      return {
        name: filename,
        file: filename,
        message: "Could not be unloaded.",
        error: { message: err.message, stack: err.stack },
      };
    }
  }

  isLoaded(filename, type) {
    const isPlugin = type === "plugin";
    const baseFolder = isPlugin ? this.pluginsFolder : this.themesFolder;
    try {
      __non_webpack_require__.cache[
        __non_webpack_require__.resolve(path.resolve(baseFolder, filename))
      ];
    } catch (err) {
      return false;
    }
    return true;
  }

  async reloadContent(filename, type) {
    const cantUnload = this.unloadContent(filename, type);
    if (cantUnload) return cantUnload;
    return await this.loadContent(filename, type);
  }

  loadNewContent(type) {
    const isPlugin = type === "plugin";
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
    const files = fs.readdirSync(basedir);
    const contentList = Object.values(isPlugin ? bdplugins : bdthemes);
    const removed = contentList
      .filter((t) => !files.includes(t.filename))
      .map((c) => (isPlugin ? c.plugin.getName() : c.name));
    const added = files.filter(
      (f) =>
        !contentList.find((t) => t.filename == f) &&
        f.endsWith(fileEnding) &&
        fs.statSync(path.resolve(basedir, f)).isFile()
    );
    return { added, removed };
  }

  async loadAllContent(type) {
    this.patchExtensions();
    const isPlugin = type === "plugin";
    const fileEnding = isPlugin ? ".plugin.js" : ".theme.css";
    const basedir = isPlugin ? this.pluginsFolder : this.themesFolder;
    const errors = [];
    const files = fs.readdirSync(basedir);

    for (const filename of files) {
      if (
        !fs.statSync(path.resolve(basedir, filename)).isFile() ||
        !filename.endsWith(fileEnding)
      )
        continue;
      const error = await this.loadContent(filename, type);
      if (error) errors.push(error);
    }

    return errors;
  }

  loadPlugins() {
    return this.loadAllContent("plugin");
  }
  loadThemes() {
    return this.loadAllContent("theme");
  }
})();

/**
 * Don't expose contentManager - could be dangerous for now
 */
