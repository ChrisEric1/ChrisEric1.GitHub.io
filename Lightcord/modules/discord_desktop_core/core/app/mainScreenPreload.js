"use strict";

if (!process.isMainFrame) {
  throw new Error('Preload scripts should not be running in a subframe');
}

if (window.opener === null) {
// App preload script, used to provide a replacement native API now that
// we turned off node integration.
const {
  contextBridge
} = require("electron")

process.on("uncaughtException", console.error)

const ipcRenderer = require('./discord_native/renderer/ipc');
const electron = require("electron")
const moduleAlias = require("./BetterDiscord/loaders/module-alias")
const path = require("path")

moduleAlias.setMain(module)
moduleAlias.addAlias("@lightcord/api", path.join(__dirname, "../../../../LightcordApi"))
moduleAlias.addAlias("lightcordapi", path.join(__dirname, "../../../../LightcordApi"))
moduleAlias.addPath(path.join(__dirname, "BetterDiscord", "modules"))

const DiscordNative = {
  isRenderer: process.type === 'renderer',
  nativeModules: require('./discord_native/renderer/nativeModules'),
  process: require('./discord_native/renderer/process'),
  os: require('./discord_native/renderer/os'),
  app: require('./discord_native/renderer/app'),
  clipboard: require('./discord_native/renderer/clipboard'),
  ipc: ipcRenderer,
  gpuSettings: require('./discord_native/renderer/gpuSettings'),
  window: require('./discord_native/renderer/window'),
  powerMonitor: require('./discord_native/renderer/powerMonitor'),
  spellCheck: require('./discord_native/renderer/spellCheck'),
  crashReporter: require('./discord_native/renderer/crashReporter'),
  desktopCapture: require('./discord_native/renderer/desktopCapture'),
  fileManager: require('./discord_native/renderer/fileManager'),
  processUtils: require('./discord_native/renderer/processUtils'),
  powerSaveBlocker: require('./discord_native/renderer/powerSaveBlocker'),
  http: require('./discord_native/renderer/http'),
  accessibility: require('./discord_native/renderer/accessibility'),
  features: require('./discord_native/renderer/features'),
  settings: require('./discord_native/renderer/settings'),
  userDataCache: require('./discord_native/renderer/userDataCache')
}; // TODO: remove these once web no longer uses them

DiscordNative.remoteApp = DiscordNative.app;
DiscordNative.remotePowerMonitor = DiscordNative.powerMonitor;
window.DiscordNative = DiscordNative

const BetterDiscord = require("./BetterDiscord")
process.once('loaded', () => {
  // ensures native module `require` context has access to DiscordNative
  global.DiscordNative = DiscordNative;

  const buildInfo = electron.ipcRenderer.sendSync("LIGHTCORD_GET_BUILD_INFOS")
  console.log("%c%s", "color: #3767ad;font-size:25px", 'Lightcord Client\nhttps://github.com/Lightcord/Lightcord');
  console.log("%c%s", "font-size:15px", `Version: ${buildInfo.version}\nCommit: ${buildInfo.commit || "Unknown"}`)


  let startTime = Date.now()
  BetterDiscord.init({
    // Detect if tabPreload was used.
    isTab: false
  })
  BetterDiscord.events.on("debug", BetterDiscord.logger.log.bind(BetterDiscord.logger))
  BetterDiscord.events.on("ready", () => {
    BetterDiscord.logger.log("BetterDiscord Loaded. took: "+(Date.now() - startTime)+"ms.")

    try{
      // better disabling Discord's tracking request, no error in console.
      BDModules.get(e => e.AnalyticsActionHandlers)[1].AnalyticsActionHandlers.handleTrack = () => {
        return false
      }
    }catch(e){}
  })
});
window.popouts = new Map();
} else {
  window.addEventListener('load', _ => {
    window.opener.popouts.set(window.name, window);
  });
  window.addEventListener('beforeunload', _ => {
    window.opener.popouts.delete(window.name);
  });
}