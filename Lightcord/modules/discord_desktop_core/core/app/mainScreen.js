"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainWindowId = getMainWindowId;
exports.webContentsSend = webContentsSend;
exports.init = init;
exports.handleOpenUrl = handleOpenUrl;
exports.setMainWindowVisible = setMainWindowVisible;
exports.setBlurType = setBlurType
exports.setVibrancy = setVibrancy
const events = exports.events = new (require("events").EventEmitter)()

const VIBRANCY_TYPES = [
  "titlebar",
  "selection",
  "menu",
  "popover",
  "sidebar",
  "header",
  "sheet",
  "window",
  "hud",
  "fullscreen-ui",
  "tooltip",
  "content",
  "under-window",
  "under-page",
  "none"
]

const BLUR_TYPES = ["blurbehind", "acrylic", "transparent"]

var glasstron = require("glasstron")

var _electron = require("electron");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _Backoff = _interopRequireDefault(require("../common/Backoff"));

var _securityUtils = require("../common/securityUtils");

var appBadge = _interopRequireWildcard(require("./appBadge"));

var appConfig = _interopRequireWildcard(require("./appConfig"));

var _appSettings = require("./appSettings");

var _buildInfo = _interopRequireDefault(require("./buildInfo"));

var _ipcMain = _interopRequireDefault(require("./ipcMain"));

var legacyModuleUpdater = _interopRequireWildcard(require("./moduleUpdater"));

var _updater = _interopRequireDefault(require("./updater"));

var notificationScreen = _interopRequireWildcard(require("./notificationScreen"));

var paths = _interopRequireWildcard(require("./paths"));

var popoutWindows = _interopRequireWildcard(require("./popoutWindows"));

var splashScreen = _interopRequireWildcard(require("./splashScreen"));

var systemTray = _interopRequireWildcard(require("./systemTray"));

var _Constants = require("./Constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const settings = (0, _appSettings.getSettings)();
const connectionBackoff = new _Backoff.default(1000, 20000);
const DISCORD_NAMESPACE = 'DISCORD_';

let isTabs = false

const IPADR = ''; // change to your Fosscord Hostname Or IP Address
const PROT0 = 'https'; // HTTP or HTTPS
const syntx = '://'; // DO NOT CHANGE!
const chngr = ':'; // DO NOT CHANGE!
const ap = '/app'; // DO NOT CHANGE!
const LH = 'localhost'; // Discord.com Patch, change if localhost doesn't work (127.0.0.1), Note you still need the local server hoster!
const PORT1 = '80'; // Port 80
const PORT2 = '443'; // Port 443
const PORT3 = '2022'; // DO NOT CHANGE!

console.log('Electron Node.js version', process.versions.node);

const express = require("express");
const https = require('https');
const fs = require("fs");
const path = require("path");
const request = require("request");
const app = express();
const indexHTML = fs.readFileSync(path.join(__dirname, "404.html"), { encoding: "utf8" });
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "security", "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "security", "cert.pem"))
}
const html = indexHTML;

const handlerRequest = (url, bot, req, res) => {
  if (bot == true) {
    const blacklist = [
      'entitlements/gifts',
      'outbound-promotions/codes',
      'entitlements',
      'subscription-plans',
      'subscription-slots',
      '/ack',
      'users/@me/settings',
    ].some(path => url.includes(path));
    if (blacklist) return res.status(404).send({
      message: 'Bot is not authorized to access this endpoint :))'
    });
    if (url.includes('/profile')) {
      return res.status(200).send({
        user: {},
        connected_accounts: [],
        premium_since: null,
        premium_type: null,
        premium_guild_since: null,
        profile_themes_experiment_bucket: -1,
        user_profile: {}
      });
    } else if (
      url.includes('billing/subscription') ||
      url.includes('billing/payment')
      ) {
      return res.status(200).send([]);
    } else if (url.includes('billing/country-code')) {
      return res.status(200).send({
        country_code: "VN"
      });
    } else {
      return req.pipe(request("https://discord.com" + url)).pipe(res);
    }
  }
}

app.all('/d/*', function (req, res) {
  const str = req.originalUrl;
  const trs = str.slice('\x32');
  console.log('URL Request', trs);
  const checkBot = req.headers?.authorization?.includes('Bot');
  if (!checkBot) {
    return req.pipe(request("https://discord.com" + trs)).pipe(res);
  } else {
    handlerRequest(trs, checkBot, req, res);
  }
});
app.all('/sticker*', function (req, res) {
  const str = req.originalUrl;
  const trs = str;
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all('/asset*', function (req, res) {
  const str = req.originalUrl;
  const trs = str;
  console.log('Require Assets:', trs);
  /*
  if (trs == '/assets/b5def893006f0c0648d1.js') {
    console.log('Send Local file')
    return res.send(fs.readFileSync(path.join(__dirname, "b5def893006f0c0648d1.js"), { encoding: "utf8" }))
  }
  */
  req.pipe(request("https://discord.com" + trs)).pipe(res);
});
app.all("*", (req, res) => {
  res.send(html);
});
const server = https.createServer(httpsOptions, app).listen(2022, () => {
  console.log('server running at ' + 2022)
});

process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);

const getWebappEndpoint = () => {
  isTabs = settings.get("isTabs", false)
  if (!isTabs) {
    let endpoint = settings.get('WEBAPP_ENDPOINT');
    if (!endpoint) {
      if (fs.existsSync('/LC' + PORT1)) {
        endpoint = PROT0 + syntx + IPADR + chngr + PORT1;
      } else if (fs.existsSync('/LC' + PORT2)) {
        endpoint = PROT0 + syntx + IPADR + chngr + PORT2;
      } else {
        endpoint = PROT0 + syntx + LH + chngr + PORT3;
      }
    }
    return endpoint;
  } else {
    return "file://" + _path.default.join(__dirname, "tabs", "index.html")
  }
};

/**
 * Bypass
 */
_electron.app.commandLine.appendSwitch('ignore-certificate-errors');
_electron.app.commandLine.appendSwitch('allow-insecure-localhost', 'true');

const WEBAPP_ENDPOINT = getWebappEndpoint();

function checkUrlOriginMatches(urlA, urlB) {
  let parsedUrlA;
  let parsedUrlB;

  try {
    parsedUrlA = _url.default.parse(urlA);
    parsedUrlB = _url.default.parse(urlB);
  } catch (_) {
    return false;
  }

  return parsedUrlA.protocol === parsedUrlB.protocol && parsedUrlA.slashes === parsedUrlB.slashes && parsedUrlA.host === parsedUrlB.host;
}

function getSanitizedPath(path) {
  // using the whatwg URL api, get a sanitized pathname from given path
  // this is because url.parse's `path` may not always have a slash
  // in front of it
  return new _url.default.URL(path, WEBAPP_ENDPOINT).pathname;
}

function getSanitizedProtocolPath(url_) {
  try {
    const parsedURL = _url.default.parse(url_);

    if (parsedURL.protocol === 'discord:') {
      return getSanitizedPath(parsedURL.path);
    }
  } catch (_) { } // protect against URIError: URI malformed


  return null;
} // TODO: These should probably be thrown in constants.


const WEBAPP_PATH = settings.get('WEBAPP_PATH', `/app?_=${Date.now()}`);
let URL_TO_LOAD = `${WEBAPP_ENDPOINT}${WEBAPP_PATH}`;
if (WEBAPP_ENDPOINT.startsWith("file://")) {
  URL_TO_LOAD = `${WEBAPP_ENDPOINT}?path=${encodeURIComponent(WEBAPP_PATH)}`;
}
const MIN_WIDTH = settings.get('MIN_WIDTH', 940);
const MIN_HEIGHT = settings.get('MIN_HEIGHT', 500);
const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720; // TODO: document this var's purpose

const MIN_VISIBLE_ON_SCREEN = 32;
/**
 * @type {Electron.BrowserWindow}
 */
let mainWindow = null;
let mainWindowId = _Constants.DEFAULT_MAIN_WINDOW_ID;
let mainWindowInitialPath = null;
let mainWindowDidFinishLoad = false; // whether we are in an intermediate auth process outside of our normal login screen (for e.g. internal builds)

let insideAuthFlow = false; // last time the main app renderer has crashed ('crashed' event)

let lastCrashed = 0; // whether we failed to load a page outside of the intermediate auth flow
// used to reload the page after a delay

let lastPageLoadFailed = false;

function getMainWindowId() {
  return mainWindowId;
}

function webContentsSend(...args) {
  if (mainWindow != null && mainWindow.webContents != null) {
    const [event, ...options] = args;
    mainWindow.webContents.send(`${DISCORD_NAMESPACE}${event}`, ...options);
  }
}

function saveWindowConfig(browserWindow) {
  try {
    if (!browserWindow) {
      return;
    }

    if (settings.get("NO_WINDOWS_BOUND")) return

    settings.set('IS_MAXIMIZED', browserWindow.isMaximized());
    settings.set('IS_MINIMIZED', browserWindow.isMinimized());

    if (!settings.get('IS_MAXIMIZED') && !settings.get('IS_MINIMIZED')) {
      settings.set('WINDOW_BOUNDS', browserWindow.getBounds());
    }

    settings.save();
  } catch (e) {
    console.error(e);
  }
}

function setBlur(blur) {
  if (!mainWindow) return
  if (typeof blur !== "boolean") throw new TypeError("INVALID ARGUMENT: blur")
  mainWindow.setBlur(blur)
}

function setVibrancy(vibrancy) {
  if (!mainWindow) return
  if (!VIBRANCY_TYPES.includes(vibrancy)) throw new TypeError("INVALID ARGUMENT: vibrancy")
  mainWindow.setVibrancy(vibrancy)
  settings.set("GLASSTRON_VIBRANCY", vibrancy)
}

function setBlurType(blurType) {
  if (!mainWindow) return
  if (!BLUR_TYPES.includes(blurType)) throw new TypeError("INVALID ARGUMENT: blurType")
  mainWindow.blurType = blurType
  settings.set("GLASSTRON_BLUR", blurType)
}

function setDefaultBlur() {
  if (!mainWindow) return

  let blurType = settings.get("GLASSTRON_BLUR", "blurbehind")
  if (!BLUR_TYPES.includes(blurType)) {
    blurType = "blurbehind"
    settings.set("GLASSTRON_BLUR", blurType)
  }
  setBlurType(blurType)

  let vibrancy = settings.get("GLASSTRON_VIBRANCY", "fullscreen-ui")
  if (!VIBRANCY_TYPES.includes(vibrancy)) {
    vibrancy = "fullscreen-ui"
    settings.set("GLASSTRON_VIBRANCY", vibrancy)
  }
  setVibrancy(vibrancy)

  setBlur(true)
}

function setWindowVisible(isVisible, andUnminimize) {
  if (mainWindow == null) {
    return;
  }

  if (isVisible) {
    if (andUnminimize || !mainWindow.isMinimized()) {
      mainWindow.show();
      webContentsSend('MAIN_WINDOW_FOCUS');
    }
  } else {
    webContentsSend('MAIN_WINDOW_BLUR');
    mainWindow.hide();

    if (systemTray.hasInit) {
      systemTray.displayHowToCloseHint();
    }
  }

  mainWindow.setSkipTaskbar(!isVisible);
}

function doAABBsOverlap(a, b) {
  const ax1 = a.x + a.width;
  const bx1 = b.x + b.width;
  const ay1 = a.y + a.height;
  const by1 = b.y + b.height; // clamp a to b, see if it is non-empty

  const cx0 = a.x < b.x ? b.x : a.x;
  const cx1 = ax1 < bx1 ? ax1 : bx1;

  if (cx1 - cx0 > 0) {
    const cy0 = a.y < b.y ? b.y : a.y;
    const cy1 = ay1 < by1 ? ay1 : by1;

    if (cy1 - cy0 > 0) {
      return true;
    }
  }

  return false;
}

function applyWindowBoundsToConfig(mainWindowOptions) {
  if (!settings.get('WINDOW_BOUNDS')) {
    mainWindowOptions.center = true;
    return;
  }

  const bounds = settings.get('WINDOW_BOUNDS');
  bounds.width = Math.max(MIN_WIDTH, bounds.width);
  bounds.height = Math.max(MIN_HEIGHT, bounds.height);
  let isVisibleOnAnyScreen = false;

  const displays = _electron.screen.getAllDisplays();

  displays.forEach(display => {
    if (isVisibleOnAnyScreen) {
      return;
    }

    const displayBound = display.workArea;
    displayBound.x += MIN_VISIBLE_ON_SCREEN;
    displayBound.y += MIN_VISIBLE_ON_SCREEN;
    displayBound.width -= 2 * MIN_VISIBLE_ON_SCREEN;
    displayBound.height -= 2 * MIN_VISIBLE_ON_SCREEN;
    isVisibleOnAnyScreen = doAABBsOverlap(bounds, displayBound);
  });

  if (isVisibleOnAnyScreen) {
    mainWindowOptions.width = bounds.width;
    mainWindowOptions.height = bounds.height;
    mainWindowOptions.x = bounds.x;
    mainWindowOptions.y = bounds.y;
  } else {
    mainWindowOptions.center = true;
  }
} // this can be called multiple times (due to recreating the main app window),
// so we only want to update existing if we already initialized it


function setupNotificationScreen(mainWindow) {
  if (!notificationScreen.hasInit) {
    notificationScreen.init({
      mainWindow,
      title: 'Lightcord Notifications',
      maxVisible: 5,
      screenPosition: 'bottom'
    });
    notificationScreen.events.on(notificationScreen.NOTIFICATION_CLICK, () => {
      setWindowVisible(true, true);
    });
  } else {
    notificationScreen.setMainWindow(mainWindow);
  }
} // this can be called multiple times (due to recreating the main app window),
// so we only want to update existing if we already initialized it


function setupSystemTray() {
  if (!systemTray.hasInit) {
    systemTray.init({
      onCheckForUpdates: () => {
        const updater = _updater.default === null || _updater.default === void 0 ? void 0 : _updater.default.getUpdater();

        if (updater != null) {
          checkForUpdatesWithUpdater(updater);
        } else {
          legacyModuleUpdater.checkForUpdates();
        }
      },
      onTrayClicked: () => setWindowVisible(true, true),
      onOpenVoiceSettings: openVoiceSettings,
      onToggleMute: toggleMute,
      onToggleDeafen: toggleDeafen,
      onLaunchApplication: launchApplication
    });
  }
} // this can be called multiple times (due to recreating the main app window),
// so we only want to update existing if we already initialized it


function setupAppBadge() {
  if (!appBadge.hasInit) {
    appBadge.init();
  }
} // this can be called multiple times (due to recreating the main app window),
// so we only want to update existing if we already initialized it


function setupAppConfig() {
  if (!appConfig.hasInit) {
    appConfig.init();
  }
} // this can be called multiple times (due to recreating the main app window),
// so we only want to update existing if we already initialized it


function setupPopouts() {
  if (!popoutWindows.hasInit) {
    popoutWindows.init();
  }
}

function openVoiceSettings() {
  setWindowVisible(true, true);
  webContentsSend('SYSTEM_TRAY_OPEN_VOICE_SETTINGS');
}

function toggleMute() {
  webContentsSend('SYSTEM_TRAY_TOGGLE_MUTE');
}

function toggleDeafen() {
  webContentsSend('SYSTEM_TRAY_TOGGLE_DEAFEN');
}

function launchApplication(applicationId) {
  webContentsSend('LAUNCH_APPLICATION', applicationId);
}

const loadMainPage = () => {
  lastPageLoadFailed = false;
  mainWindow.loadURL(URL_TO_LOAD);
};

const DEFAULT_BACKGROUND_COLOR = '#2f3136';
const BACKGROUND_COLOR_KEY = 'BACKGROUND_COLOR';

function getBackgroundColor() {
  return settings.get(BACKGROUND_COLOR_KEY, DEFAULT_BACKGROUND_COLOR);
}

function setBackgroundColor(color) {
  settings.set(BACKGROUND_COLOR_KEY, color);
  //mainWindow.setBackgroundColor(color);
  settings.save();
} // launch main app window; could be called multiple times for various reasons


function launchMainAppWindow(isVisible) {
  if (mainWindow) {
    // TODO: message here?
    mainWindow.destroy();
  }

  /**
   * @type {Electron.BrowserWindowConstructorOptions}
   */
  const mainWindowOptions = {
    title: 'Lightcord',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
    transparent: false,
    frame: false,
    resizable: true,
    show: isVisible,
    webPreferences: {
      blinkFeatures: 'EnumerateDevices,AudioOutputDevices',
      nativeWindowOpen: true,
      enableRemoteModule: true,
      spellcheck: true,
      contextIsolation: false,
      ...(isTabs ? {
        nodeIntegration: true,
        webviewTag: true
      } : {
        nodeIntegration: false,
        webviewTag: false,
        contextIsolation: false,
        preload: _path.default.join(__dirname, 'mainScreenPreload.js')
      }),
      // NB: this is required in order to give popouts (or any child window opened via window.open w/ nativeWindowOpen)
      // a chance at a node environment (i.e. they run the preload, have an isolated context, etc.) when
      // `app.allowRendererProcessReuse === false` (default in Electron 7).
      additionalArguments: ['--enable-node-leakage-in-renderers', '--ignore-ssl-errors']
    },
    icon: _path.default.join(__dirname, "images", 'discord.png')
  };

  if (process.platform === 'linux') {
    mainWindowOptions.frame = true;
  }

  if (!settings.get("NO_WINDOWS_BOUND", false)) applyWindowBoundsToConfig(mainWindowOptions);

  const useGlasstron = settings.get("GLASSTRON", true)
  const BrowserWindow = useGlasstron ? glasstron.BrowserWindow : _electron.BrowserWindow
  mainWindow = new BrowserWindow(mainWindowOptions);
  mainWindowId = mainWindow.id;
  global.mainWindowId = mainWindowId;

  if (useGlasstron) setDefaultBlur()

  mainWindow.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
      Object.assign(details.requestHeaders, {
        "Origin": "https://discord.com",
        "origin": "https://discord.com",
      });
      callback({ requestHeaders: details.requestHeaders });
    },
  );

  mainWindow.webContents.session.webRequest.onHeadersReceived(function (details, callback) {
    if (!details.responseHeaders["content-security-policy-report-only"] && !details.responseHeaders["content-security-policy"]) return callback({ cancel: false });
    delete details.responseHeaders["content-security-policy-report-only"];
    delete details.responseHeaders["content-security-policy"];
    Object.assign(details.responseHeaders, {
      "access-control-allow-origin": "*",
      "Access-Control-Allow-Origin": "*",
    });
    callback({
      cancel: false, responseHeaders: details.responseHeaders
    });
  });

  mainWindow.setMenuBarVisibility(false);

  if (!settings.get("NO_WINDOWS_BOUND", false)) {
    if (settings.get('IS_MAXIMIZED')) {
      mainWindow.maximize();
    }

    if (settings.get('IS_MINIMIZED')) {
      mainWindow.minimize();
    }
  }

  mainWindow.webContents.on('new-window', (e, windowURL, frameName, disposition, options) => {
    e.preventDefault();

    if (frameName.startsWith(DISCORD_NAMESPACE) && checkUrlOriginMatches(windowURL, WEBAPP_ENDPOINT) && getSanitizedPath(windowURL) === '/popout') {
      popoutWindows.openOrFocusWindow(e, windowURL, frameName, options);
      return;
    }

    (0, _securityUtils.saferShellOpenExternal)(windowURL);
  });
  mainWindow.webContents.on('did-fail-load', (e, errCode, errDesc, validatedUrl) => {
    if (insideAuthFlow) {
      return;
    }

    if (validatedUrl !== URL_TO_LOAD) {
      return;
    } // -3 (ABORTED) means we are reloading the page before it has finished loading
    // 0 (???) seems to also mean the same thing


    if (errCode === -3 || errCode === 0) return;
    lastPageLoadFailed = true;
    console.error('[WebContents] did-fail-load', errCode, errDesc, `retry in ${connectionBackoff.current} ms`);
    connectionBackoff.fail(() => {
      console.log('[WebContents] retrying load', URL_TO_LOAD);
      loadMainPage();
    });
  });
  mainWindow.webContents.on('did-finish-load', () => {
    if (insideAuthFlow && mainWindow.webContents && checkUrlOriginMatches(mainWindow.webContents.getURL(), WEBAPP_ENDPOINT)) {
      insideAuthFlow = false;
    }

    mainWindowDidFinishLoad = true; // if this is a first open and there's an initial path, direct user to that path

    if (mainWindowInitialPath != null) {
      webContentsSend('MAIN_WINDOW_PATH', mainWindowInitialPath);
      mainWindowInitialPath = null;
    }

    webContentsSend(mainWindow != null && mainWindow.isFocused() ? 'MAIN_WINDOW_FOCUS' : 'MAIN_WINDOW_BLUR');

    if (!lastPageLoadFailed) {
      connectionBackoff.succeed();
    }
    events.emit("ready")
  });
  mainWindow.webContents.on('crashed', (e, killed) => {
    if (killed) {
      _electron.app.quit();

      return;
    } // if we just crashed under 5 seconds ago, we are probably in a loop, so just die.


    const crashTime = Date.now();

    if (crashTime - lastCrashed < 5 * 1000) {
      console.error('[WebContents] double crashed... RIP =(');

      _electron.app.quit();

      return;
    }

    lastCrashed = crashTime;
    console.error('[WebContents] crashed... reloading');
    launchMainAppWindow(true);
  }); // Prevent navigation when links or files are dropping into the app, turning it into a browser.
  // https://github.com/discord/discord/pull/278

  mainWindow.webContents.on('will-navigate', (evt, url) => {
    if (!insideAuthFlow && !checkUrlOriginMatches(url, WEBAPP_ENDPOINT)) {
      evt.preventDefault();
    }
  }); // track intermediate auth flow

  mainWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
    if (checkUrlOriginMatches(oldUrl, WEBAPP_ENDPOINT) && checkUrlOriginMatches(newUrl, 'https://accounts.google.com/')) {
      insideAuthFlow = true;
    }
  });
  mainWindow.webContents.on('context-menu', (_, params) => {
    webContentsSend('SPELLCHECK_RESULT', params.misspelledWord, params.dictionarySuggestions);
  });
  mainWindow.webContents.on('devtools-opened', () => {
    webContentsSend('WINDOW_DEVTOOLS_OPENED');
  });
  mainWindow.webContents.on('devtools-closed', () => {
    webContentsSend('WINDOW_DEVTOOLS_CLOSED');
  });
  mainWindow.on('focus', () => {
    webContentsSend('MAIN_WINDOW_FOCUS');
  });
  mainWindow.on('blur', () => {
    webContentsSend('MAIN_WINDOW_BLUR');
  });
  mainWindow.on('page-title-updated', (e, title) => {
    if (mainWindow === null) {
      return;
    }

    e.preventDefault();

    if (!title.endsWith('Lightcord')) {
      title += ' - Lightcord';
    }

    mainWindow.setTitle(title);
  });
  mainWindow.on('leave-html-full-screen', () => {
    // fixes a bug wherein embedded videos returning from full screen cause our menu to be visible.
    mainWindow.setMenuBarVisibility(false);
  });
  mainWindow.webContents.on('did-navigate-in-page', (_, eventUrl) => {
    let parsedUrl;

    try {
      parsedUrl = _url.default.parse(eventUrl);
    } catch (_) {
      return;
    } // Prevent back navigation from revisting the login page after logging in,
    // or being able to navigate back after signing out.


    if (parsedUrl && parsedUrl.pathname === '/login') {
      mainWindow.webContents.clearHistory();
    }
  }); // 'swipe' only works if the classic 3 finger swipe style is enabled in
  // 'System Preferences > Trackpad > More Gestures.' The more modern 2 finger
  // gesture should be added when Electron adds support.

  mainWindow.on('swipe', (_, direction) => {
    switch (direction) {
      case 'left':
        webContentsSend('NAVIGATE_BACK', 'SWIPE');
        break;

      case 'right':
        webContentsSend('NAVIGATE_FORWARD', 'SWIPE');
        break;
    }
  }); // Windows/Linux media keys and 4th/5th mouse buttons.

  mainWindow.on('app-command', (_, cmd) => {
    switch (cmd) {
      case 'browser-backward':
        webContentsSend('NAVIGATE_BACK', 'BROWSER');
        break;

      case 'browser-forward':
        webContentsSend('NAVIGATE_FORWARD', 'BROWSER');
        break;
    }
  });

  if (process.platform === 'win32') {
    setupNotificationScreen(mainWindow);
  }

  setupSystemTray();
  setupAppBadge();
  setupAppConfig();
  setupPopouts();

  if (process.platform === 'linux' || process.platform === 'win32') {
    systemTray.show();
    mainWindow.on('close', e => {
      if (mainWindow === null) {
        // this means we're quitting
        popoutWindows.closePopouts();
        return;
      }

      webContentsSend('MAIN_WINDOW_BLUR'); // Save our app settings

      saveWindowConfig(mainWindow); // Quit app if that's the setting

      if (!settings.get('MINIMIZE_TO_TRAY', true)) {
        _electron.app.quit();

        return;
      } // Else, minimize to tray


      setWindowVisible(false);
      e.preventDefault();
    });
  }

  loadMainPage();
}

let updaterState = _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE;

function handleModuleUpdateCheckFinished(succeeded, updateCount, manualRequired) {
  if (!succeeded) {
    updaterState = _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE;
    webContentsSend(_Constants.UpdaterEvents.UPDATE_ERROR);
    return;
  }

  if (updateCount === 0) {
    updaterState = _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE;
  } else if (manualRequired) {
    updaterState = _Constants.UpdaterEvents.UPDATE_MANUALLY;
  } else {
    updaterState = _Constants.UpdaterEvents.UPDATE_AVAILABLE;
  }

  webContentsSend(updaterState);
}

function handleModuleUpdateDownloadProgress(name, progress) {
  if (mainWindow) {
    mainWindow.setProgressBar(progress);
  }

  webContentsSend(_Constants.UpdaterEvents.MODULE_INSTALL_PROGRESS, name, progress);
}

function handleModuleUpdateDownloadsFinished(succeeded, failed) {
  if (mainWindow) {
    mainWindow.setProgressBar(-1);
  }

  if (updaterState === _Constants.UpdaterEvents.UPDATE_AVAILABLE) {
    if (failed > 0) {
      updaterState = _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE;
      webContentsSend(_Constants.UpdaterEvents.UPDATE_ERROR);
    } else {
      updaterState = _Constants.UpdaterEvents.UPDATE_DOWNLOADED;
      webContentsSend(updaterState);
    }
  }
}

function handleModuleUpdateInstalledModule(name, current, total, succeeded) {
  if (mainWindow) {
    mainWindow.setProgressBar(-1);
  }

  webContentsSend(_Constants.UpdaterEvents.MODULE_INSTALLED, name, succeeded);
}

function setUpdaterState(newUpdaterState) {
  updaterState = newUpdaterState;
  webContentsSend(updaterState);
}

async function checkForUpdatesWithUpdater(updater) {
  if (updaterState === _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE) {
    setUpdaterState(_Constants.UpdaterEvents.CHECKING_FOR_UPDATES);

    try {
      let installedAnything = false;
      await updater.updateToLatest(progress => {
        const task = progress.task.HostInstall || progress.task.ModuleInstall;

        if (task != null && progress.state === 'Complete') {
          if (!installedAnything) {
            installedAnything = true;
            setUpdaterState(_Constants.UpdaterEvents.UPDATE_AVAILABLE);
          }
        }
      });
      setUpdaterState(installedAnything ? _Constants.UpdaterEvents.UPDATE_DOWNLOADED : _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE);
    } catch (e) {
      console.error('Update to latest failed: ', e);
      updaterState = _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE;
      webContentsSend(_Constants.UpdaterEvents.UPDATE_FAILED);
    }
  } else {
    webContentsSend(updaterState);
  }
} // Setup handling of events related to updates using the new updater.


function setupUpdaterEventsWithUpdater(updater) {
  _electron.app.on(_Constants.MenuEvents.CHECK_FOR_UPDATES, () => checkForUpdatesWithUpdater());

  _ipcMain.default.on(_Constants.UpdaterEvents.CHECK_FOR_UPDATES, () => {
    return checkForUpdatesWithUpdater(updater);
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.QUIT_AND_INSTALL, () => {
    saveWindowConfig(mainWindow);
    mainWindow = null; // TODO(eiz): This is a workaround for old Linux host versions whose host
    // updater did not have a quitAndInstall() method, which causes the module
    // updater to crash if a host update is available and we try to restart to
    // install modules. Remove when all hosts are updated.

    try {
      legacyModuleUpdater.quitAndInstallUpdates();
    } catch (e) {
      _electron.app.relaunch();

      _electron.app.quit();
    }
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.UPDATER_HISTORY_QUERY_AND_TRUNCATE, () => {
    if (updater.queryAndTruncateHistory != null) {
      webContentsSend(_Constants.UpdaterEvents.UPDATER_HISTORY_RESPONSE, updater.queryAndTruncateHistory());
    } else {
      webContentsSend(_Constants.UpdaterEvents.UPDATER_HISTORY_RESPONSE, []);
    }
  });
} // Setup events related to updates using the old module updater.
//
// sets up event listeners between the browser window and the app to send
// and listen to update-related events


function setupLegacyUpdaterEvents() {
  _electron.app.on(_Constants.MenuEvents.CHECK_FOR_UPDATES, () => legacyModuleUpdater.checkForUpdates());

  legacyModuleUpdater.events.on(legacyModuleUpdater.CHECKING_FOR_UPDATES, () => {
    updaterState = _Constants.UpdaterEvents.CHECKING_FOR_UPDATES;
    webContentsSend(updaterState);
  }); // TODO(eiz): We currently still need to handle the old style non-object-based
  // updater events to allow discord_desktop_core to be newer than the host asar,
  // which contains the updater itself.
  //
  // Once all clients have updated to a sufficiently new host, we can delete this.

  if (legacyModuleUpdater.supportsEventObjects) {
    legacyModuleUpdater.events.on(legacyModuleUpdater.UPDATE_CHECK_FINISHED, ({
      succeeded,
      updateCount,
      manualRequired
    }) => {
      handleModuleUpdateCheckFinished(succeeded, updateCount, manualRequired);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.DOWNLOADING_MODULE_PROGRESS, ({
      name,
      progress
    }) => {
      handleModuleUpdateDownloadProgress(name, progress);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.DOWNLOADING_MODULES_FINISHED, ({
      succeeded,
      failed
    }) => {
      handleModuleUpdateDownloadsFinished(succeeded, failed);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.INSTALLED_MODULE, ({
      name,
      current,
      total,
      succeeded
    }) => {
      handleModuleUpdateInstalledModule(name, current, total, succeeded);
    });
  } else {
    legacyModuleUpdater.events.on(legacyModuleUpdater.UPDATE_CHECK_FINISHED, (succeeded, updateCount, manualRequired) => {
      handleModuleUpdateCheckFinished(succeeded, updateCount, manualRequired);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.DOWNLOADING_MODULE_PROGRESS, (name, progress) => {
      handleModuleUpdateDownloadProgress(name, progress);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.DOWNLOADING_MODULES_FINISHED, (succeeded, failed) => {
      handleModuleUpdateDownloadsFinished(succeeded, failed);
    });
    legacyModuleUpdater.events.on(legacyModuleUpdater.INSTALLED_MODULE, (name, current, total, succeeded) => {
      handleModuleUpdateInstalledModule(name, current, total, succeeded);
    });
  }

  _ipcMain.default.on(_Constants.UpdaterEvents.CHECK_FOR_UPDATES, () => {
    if (updaterState === _Constants.UpdaterEvents.UPDATE_NOT_AVAILABLE) {
      legacyModuleUpdater.checkForUpdates();
    } else {
      webContentsSend(updaterState);
    }
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.QUIT_AND_INSTALL, () => {
    saveWindowConfig(mainWindow);
    mainWindow = null; // TODO(eiz): This is a workaround for old Linux host versions whose host
    // updater did not have a quitAndInstall() method, which causes the module
    // updater to crash if a host update is available and we try to restart to
    // install modules. Remove when all hosts are updated.

    try {
      legacyModuleUpdater.quitAndInstallUpdates();
    } catch (e) {
      _electron.app.relaunch();

      _electron.app.quit();
    }
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.MODULE_INSTALL, (_event, name) => {
    // NOTE: do NOT allow options to be passed in, as this enables a client to downgrade its modules to potentially
    // insecure versions.
    legacyModuleUpdater.install(name, false);
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.MODULE_QUERY, (_event, name) => {
    webContentsSend(_Constants.UpdaterEvents.MODULE_INSTALLED, name, legacyModuleUpdater.isInstalled(name));
  });

  _ipcMain.default.on(_Constants.UpdaterEvents.UPDATER_HISTORY_QUERY_AND_TRUNCATE, () => {
    webContentsSend(_Constants.UpdaterEvents.UPDATER_HISTORY_RESPONSE, legacyModuleUpdater.events.history);
    legacyModuleUpdater.events.history = [];
  });
}

function init() {
  // electron default behavior is to app.quit here, so long as there are no other listeners. we handle quitting
  // or minimizing to system tray ourselves via mainWindow.on('closed') so this is simply to disable the electron
  // default behavior.
  _electron.app.on('window-all-closed', () => { });

  _electron.app.on('before-quit', () => {
    saveWindowConfig(mainWindow);
    mainWindow = null;
    notificationScreen.close();
  }); // TODO: move this to main startup


  _electron.app.on('gpu-process-crashed', (e, killed) => {
    if (killed) {
      _electron.app.quit();
    }
  });

  _electron.app.on('accessibility-support-changed', (_event, accessibilitySupportEnabled) => webContentsSend('ACCESSIBILITY_SUPPORT_CHANGED', accessibilitySupportEnabled));

  _electron.app.on(_Constants.MenuEvents.OPEN_HELP, () => webContentsSend('HELP_OPEN'));

  _electron.app.on(_Constants.MenuEvents.OPEN_SETTINGS, () => webContentsSend('USER_SETTINGS_OPEN')); // TODO: this hotpatches an issue with focusing the app from background.
  //       delete this after next stable electron release.


  _electron.app.on('second-instance', (_event, args) => {
    // if the second instance is the uninstaller, the bootstrap listener will quit the running app
    if (args != null && args.indexOf('--squirrel-uninstall') > -1) {
      return;
    } // if the current instance is multi instance, we want to leave the window alone


    if (process.argv != null && process.argv.slice(1).includes('--multi-instance')) {
      return;
    }

    if (mainWindow == null) {
      return;
    }

    setWindowVisible(true, false);
    mainWindow.focus();
  });

  _ipcMain.default.on('SETTINGS_UPDATE_BACKGROUND_COLOR', (_event, backgroundColor) => {
    if (getBackgroundColor() !== backgroundColor) {
      setBackgroundColor(backgroundColor);
    }
  });

  const updater = _updater.default === null || _updater.default === void 0 ? void 0 : _updater.default.getUpdater();

  if (updater != null) {
    setupUpdaterEventsWithUpdater(updater);
  } else {
    setupLegacyUpdaterEvents();
  }

  launchMainAppWindow(false);
}

function handleOpenUrl(url) {
  const path = getSanitizedProtocolPath(url);

  if (path != null) {
    if (!mainWindowDidFinishLoad) {
      mainWindowInitialPath = path;
    }

    webContentsSend('MAIN_WINDOW_PATH', path);
  }

  if (mainWindow == null) {
    return;
  }

  setWindowVisible(true, false);
  mainWindow.focus();
}

function setMainWindowVisible(visible) {
  setWindowVisible(visible, false);
}
