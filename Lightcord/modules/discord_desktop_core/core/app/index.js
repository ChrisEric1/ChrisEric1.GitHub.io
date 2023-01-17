"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startup = startup;
exports.handleOpenUrl = handleOpenUrl;
exports.setMainWindowVisible = setMainWindowVisible;

const {
  Menu,
  BrowserWindow
} = require('electron');
const fetch = require("node-fetch").default

let mainScreen

function startup(bootstrapModules) {
  // below modules are required and initted
  // in this order to prevent dependency conflicts
  // please don't tamper with the order unless you know what you're doing
  require('./bootstrapModules').init(bootstrapModules);

  require('./paths');

  require('./splashScreen');

  const moduleUpdater = require('./moduleUpdater');

  const updater = require('./updater');

  require('./autoStart');

  const buildInfo = require('./buildInfo');

  const appSettings = require('./appSettings');

  const Constants = require('./Constants');

  Constants.init(bootstrapModules.Constants);

  const appFeatures = require('./appFeatures');

  appFeatures.init();

  const GPUSettings = require('./GPUSettings');

  bootstrapModules.GPUSettings.replace(GPUSettings);

  const rootCertificates = require('./rootCertificates');

  rootCertificates.init();

  require('./discord_native/browser/accessibility');

  const app = require('./discord_native/browser/app');

  app.injectBuildInfo(buildInfo);
  app.injectModuleUpdater(moduleUpdater);
  app.injectUpdater(updater);

  require('./discord_native/browser/clipboard');

  require('./discord_native/browser/constants');

  require('./discord_native/browser/crashReporter');

  const features = require('./discord_native/browser/features');

  features.injectFeaturesBackend(appFeatures.getFeatures());

  require('./discord_native/browser/fileManager');

  require('./discord_native/browser/userDataCache');

  const gpuSettings = require('./discord_native/browser/gpuSettings');

  gpuSettings.injectGpuSettingsBackend(GPUSettings);

  const nativeModules = require('./discord_native/browser/nativeModules');

  nativeModules.injectModuleUpdater(moduleUpdater);
  nativeModules.injectUpdater(updater);

  require('./discord_native/browser/powerMonitor');

  require('./discord_native/browser/powerSaveBlocker');

  require('./discord_native/browser/processUtils');

  const settings = require('./discord_native/browser/settings');

  settings.injectSettingsBackend(appSettings.getSettings());

  require('./discord_native/browser/spellCheck');
  require("./lightcordMainProcess")

  const windowNative = require('./discord_native/browser/window'); // expose globals that will be imported by the webapp
  // global.releaseChannel is set in bootstrap


  const crashReporterSetup = require('./crashReporterSetup');

  global.crashReporterMetadata = crashReporterSetup.metadata;
  global.mainAppDirname = Constants.MAIN_APP_DIRNAME;
  global.features = appFeatures.getFeatures();
  global.appSettings = appSettings.getSettings(); // this gets updated when launching a new main app window

  global.mainWindowId = Constants.DEFAULT_MAIN_WINDOW_ID;
  global.moduleUpdater = moduleUpdater;

  let applicationMenu = require('./applicationMenu');

  if(appSettings().get("isTabs", false)){
    applicationMenu = applicationMenu.map(e => {
      if(["View", "&View"].includes(e.label)){
        e.submenu.push({
          type: "separator"
        }, {
          label: "New Tab",
          click: () => {
            mainScreen.webContentsSend("NEW_TAB")
          },
          accelerator: "CmdOrCtrl+T"
        }, {
          label: "Close Current Tab",
          click: () => {
            mainScreen.webContentsSend("CLOSE_TAB")
          },
          accelerator: "CmdOrCtrl+W"
        })
      }
      e.submenu = e.submenu.map(e => {
        if(["Command+r", "Control+R"].includes(e.accelerator)){
          e.click = function(){
            mainScreen.webContentsSend("RELOAD")
          }
        }
        if(["&Developer", "Developer"].includes(e.label)){
          e.submenu[0].click = () => {
            mainScreen.webContentsSend("OPEN_DEVTOOLS")
          }
        }
        return e
      })
      return e
    })
  }

  const ipc = require("./ipcMain")
  ipc.on("NEW_TAB", () => {
    mainScreen.webContentsSend("NEW_TAB")
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(applicationMenu));
  mainScreen = require('./mainScreen');

  let version = bootstrapModules.Constants.version

  bootstrapModules.splashScreen.events.once("APP_SHOULD_SHOW", () => {
    mainScreen.setMainWindowVisible(true)
  })
  bootstrapModules.splashScreen.events.on("APP_SHOULD_LAUNCH", () => {
    mainScreen.init(false)

    const { getWindow: getPopoutWindowByKey } = require('./popoutWindows');
    windowNative.injectGetWindow(key => {
      return getPopoutWindowByKey(key) || BrowserWindow.fromId(mainScreen.getMainWindowId());
    });
  })

  mainScreen.events.once("ready", () => {
    if(initByUpdate){
      bootstrapModules.splashScreen.pageReady()
    }else{
      mainScreen.setMainWindowVisible(true)
    }
  })

  let initByUpdate = false

  if(Date.now() - global.appSettings.get("LAST_UPDATE_CHECK_TIMESTAMP", 0) < 6.48e+8){
    console.log("Starting with version "+version+" because it hasn't been 1 week since the last check.")
    mainScreen.init(false)

    const { getWindow: getPopoutWindowByKey } = require('./popoutWindows');
    windowNative.injectGetWindow(key => {
      return getPopoutWindowByKey(key) || BrowserWindow.fromId(mainScreen.getMainWindowId());
    });
  }else{
    initByUpdate = true
    console.log("Checking if version "+version+" is outdated...")
    bootstrapModules.splashScreen.initSplash()
    bootstrapModules.splashScreen.events.on("SPLASH_SCREEN_READY", () => {
      fetch("https://raw.githubusercontent.com/Lightcord/Lightcord/master/package.json", {
        headers: {
          "User-Agent": "Lightcord-Updater/1.0"
        }
      }).then(async res => {
        const body = await res.json()
        if(res.status !== 200){
          console.error("Couldn't check updates. Using installed version.")
          bootstrapModules.splashScreen.launchMainWindow()
          return
        }
        global.appSettings.set("LAST_UPDATE_CHECK_TIMESTAMP", Date.now())
        global.appSettings.save()
        if(body.version > version){
          console.error("App Outdated. updating...")
          bootstrapModules.splashScreen.updateSplashState("update-available")
          updateApp()
        }else{
          console.error("Latest version already installed. Opening window.")
          bootstrapModules.splashScreen.launchMainWindow()
        }
      }).catch(err => {
        console.error("Couldn't check updates. Using installed version.")
        console.log(err)
        bootstrapModules.splashScreen.launchMainWindow()
      })
    })
  }

  const {
    getWindow: getPopoutWindowByKey
  } = require('./popoutWindows');

  windowNative.injectGetWindow(key => {
    return getPopoutWindowByKey(key) || BrowserWindow.fromId(mainScreen.getMainWindowId());
  });
}

function handleOpenUrl(url) {
  mainScreen.handleOpenUrl(url);
}

function setMainWindowVisible(visible) {
  mainScreen.setMainWindowVisible(visible);
}

function updateApp(version){
  const bootstrapModules = require('./bootstrapModules')
  //const updateLink = "https://github.com/Lightcord/Lightcord/archive/master.zip"

  bootstrapModules.splashScreen.setSplashState({
    status: "downloading-updates",
    progress: 0
  })

  bootstrapModules.splashScreen.setSplashState({
    status: "update-manually"
  })
  bootstrapModules.splashScreen.focusWindow()
  delete global.appSettings.settings["LAST_UPDATE_CHECK_TIMESTAMP"]
  global.appSettings.save()
  return

  // TODO: DOWNLOAD UPDATES AUTOMATICALLY
  fetch(updateLink)
  .then(async res => {
    if(res.status !== 200){
    }
  })
}