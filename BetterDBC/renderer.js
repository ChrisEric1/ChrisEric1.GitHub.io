/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/locales/index.js":
/*!**********************************!*\
  !*** ../assets/locales/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-multi-spaces */
module.exports = {
  "en-US": __webpack_require__(/*! ./en-us.json */ "../assets/locales/en-us.json"),
  // English, US
  "en-GB": __webpack_require__(/*! ./en-gb.json */ "../assets/locales/en-gb.json"),
  // English, UK
  "zh-CN": __webpack_require__(/*! ./zh-cn.json */ "../assets/locales/zh-cn.json"),
  // Chinese, Simplified
  "zh-TW": __webpack_require__(/*! ./zh-tw.json */ "../assets/locales/zh-tw.json"),
  // Chinese, Traditional
  "cs": __webpack_require__(/*! ./cs.json */ "../assets/locales/cs.json"),
  // Czech
  "da": __webpack_require__(/*! ./da.json */ "../assets/locales/da.json"),
  // Danish
  "nl": __webpack_require__(/*! ./nl.json */ "../assets/locales/nl.json"),
  // Dutch
  "fr": __webpack_require__(/*! ./fr.json */ "../assets/locales/fr.json"),
  // French
  "de": __webpack_require__(/*! ./de.json */ "../assets/locales/de.json"),
  // German
  "el": __webpack_require__(/*! ./el.json */ "../assets/locales/el.json"),
  // Greek
  "hu": __webpack_require__(/*! ./hu.json */ "../assets/locales/hu.json"),
  // Hungarian
  "it": __webpack_require__(/*! ./it.json */ "../assets/locales/it.json"),
  // Italian
  "ja": __webpack_require__(/*! ./ja.json */ "../assets/locales/ja.json"),
  // Japanese
  "ko": __webpack_require__(/*! ./ko.json */ "../assets/locales/ko.json"),
  // Korean
  "pl": __webpack_require__(/*! ./pl.json */ "../assets/locales/pl.json"),
  // Polish
  "pt-PT": __webpack_require__(/*! ./pt-pt.json */ "../assets/locales/pt-pt.json"),
  // Portuguese, Portugal
  "pt-BR": __webpack_require__(/*! ./pt-br.json */ "../assets/locales/pt-br.json"),
  // Protuguese, Brazil
  "ru": __webpack_require__(/*! ./ru.json */ "../assets/locales/ru.json"),
  // Russian
  "sk": __webpack_require__(/*! ./sk.json */ "../assets/locales/sk.json"),
  // Slovak
  "es-ES": __webpack_require__(/*! ./es-es.json */ "../assets/locales/es-es.json"),
  // Spanish (Spain)
  "sv-SE": __webpack_require__(/*! ./sv-se.json */ "../assets/locales/sv-se.json"),
  // Swedish
  "tr": __webpack_require__(/*! ./tr.json */ "../assets/locales/tr.json"),
  // Turkish
  "bg": __webpack_require__(/*! ./bg.json */ "../assets/locales/bg.json"),
  // Bulgarian
  "uk": __webpack_require__(/*! ./uk.json */ "../assets/locales/uk.json"),
  // Ukrainian
  "fi": __webpack_require__(/*! ./fi.json */ "../assets/locales/fi.json"),
  // Finnish
  "no": __webpack_require__(/*! ./no.json */ "../assets/locales/no.json"),
  // Norwegian
  "hr": __webpack_require__(/*! ./hr.json */ "../assets/locales/hr.json"),
  // Croation
  "ro": __webpack_require__(/*! ./ro.json */ "../assets/locales/ro.json"),
  // Romanian
  "lt": __webpack_require__(/*! ./lt.json */ "../assets/locales/lt.json"),
  // Lithuanian
  "th": __webpack_require__(/*! ./th.json */ "../assets/locales/th.json"),
  // Thai
  "vi": __webpack_require__(/*! ./vi.json */ "../assets/locales/vi.json"),
  // Vietnamese
  "hi": __webpack_require__(/*! ./hi.json */ "../assets/locales/hi.json") // Hindi

};
/*

The following is the list of Discord's available locales as of April 15th 2021

English, US: en-US
English, UK: en-GB
Chinese Simplified: 
Traditional Chinese: zh-TW
Czech: cs
Danish: da
Dutch: nl
French: fr
German: de
Greek: el
Hungarian: hu
Italian: it
Japanese: ja
Korean: ko
Polish: pl
Portuguese: pt-PT
Portuguese, Brazilian: pt-BR
Russian: ru
Slovak: sk
Spanish: es-ES
Swedish: sv-SE
Turkish: tr
Bulgarian: bg
Ukrainian: uk
Finnish: fi
Norwegian: no
Croatian: hr
Romanian: ro
Lithuanian: lt
Thai: th
Vietnamese: vi
Hindi: hi

List was retrieved using: DiscordModules.LocaleManager.getLanguages().map(l => `${l.englishName}: ${l.code}`)

This means that the above list includes locales that exist in their current system, but are not yet available to select via UI.

That list can be checked with DiscordModules.LocaleManager.getAvailableLocales()

*/

/***/ }),

/***/ "../common/constants/ipcevents.js":
/*!****************************************!*\
  !*** ../common/constants/ipcevents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MINIMIZE": () => (/* binding */ MINIMIZE),
/* harmony export */   "MAXIMIZE": () => (/* binding */ MAXIMIZE),
/* harmony export */   "RELAUNCH": () => (/* binding */ RELAUNCH),
/* harmony export */   "GET_PATH": () => (/* binding */ GET_PATH),
/* harmony export */   "RUN_SCRIPT": () => (/* binding */ RUN_SCRIPT),
/* harmony export */   "NAVIGATE": () => (/* binding */ NAVIGATE),
/* harmony export */   "OPEN_DEVTOOLS": () => (/* binding */ OPEN_DEVTOOLS),
/* harmony export */   "CLOSE_DEVTOOLS": () => (/* binding */ CLOSE_DEVTOOLS),
/* harmony export */   "TOGGLE_DEVTOOLS": () => (/* binding */ TOGGLE_DEVTOOLS),
/* harmony export */   "OPEN_WINDOW": () => (/* binding */ OPEN_WINDOW),
/* harmony export */   "INSPECT_ELEMENT": () => (/* binding */ INSPECT_ELEMENT),
/* harmony export */   "MINIMUM_SIZE": () => (/* binding */ MINIMUM_SIZE),
/* harmony export */   "DEVTOOLS_WARNING": () => (/* binding */ DEVTOOLS_WARNING),
/* harmony export */   "OPEN_DIALOG": () => (/* binding */ OPEN_DIALOG),
/* harmony export */   "REGISTER_PRELOAD": () => (/* binding */ REGISTER_PRELOAD)
/* harmony export */ });
/* eslint-disable no-multi-spaces */
const MINIMIZE = "bd-window-minimize";
const MAXIMIZE = "bd-window-maximize";
const RELAUNCH = "bd-relaunch-app";
const GET_PATH = "bd-get-path";
const RUN_SCRIPT = "bd-run-script";
const NAVIGATE = "bd-did-navigate-in-page";
const OPEN_DEVTOOLS = "bd-open-devtools";
const CLOSE_DEVTOOLS = "bd-close-devtools";
const TOGGLE_DEVTOOLS = "bd-toggle-devtools";
const OPEN_WINDOW = "bd-open-window";
const INSPECT_ELEMENT = "bd-inspect-element";
const MINIMUM_SIZE = "bd-minimum-size";
const DEVTOOLS_WARNING = "bd-remove-devtools-message";
const OPEN_DIALOG = "bd-open-dialog";
const REGISTER_PRELOAD = "bd-register-preload";

/***/ }),

/***/ "../common/logger.js":
/*!***************************!*\
  !*** ../common/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogTypes": () => (/* binding */ LogTypes),
/* harmony export */   "default": () => (/* binding */ Logger)
/* harmony export */ });
/**
 * Simple logger for the lib and plugins.
 *
 * @module Logger
 * @version 0.1.0
 */

/* eslint-disable no-console */

/**
 * List of logging types.
 */
const LogTypes = {
  /** Alias for error */
  err: "error",
  error: "error",

  /** Alias for debug */
  dbg: "debug",
  debug: "debug",
  log: "log",
  warn: "warn",
  info: "info"
};
class Logger {
  /**
   * Logs an error using a collapsed error group with stacktrace.
   *
   * @param {string} module - Name of the calling module.
   * @param {string} message - Message or error to have logged.
   * @param {Error} error - Error object to log with the message.
   */
  static stacktrace(module, message, error) {
    console.error(`%c[${module}]%c ${message}\n\n%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", error);
  }
  /**
   * Logs using error formatting. For logging an actual error object consider {@link module:Logger.stacktrace}
   *
   * @param {string} module - Name of the calling module.
   * @param {string} message - Messages to have logged.
   */


  static err(module, ...message) {
    Logger._log(module, message, "error");
  }
  /**
   * Alias for "err"
   * @param {string} module NAme of the calling module
   * @param  {...any} message Messages to have logged.
   */


  static error(module, ...message) {
    Logger._log(module, message, "error");
  }
  /**
   * Logs a warning message.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static warn(module, ...message) {
    Logger._log(module, message, "warn");
  }
  /**
   * Logs an informational message.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static info(module, ...message) {
    Logger._log(module, message, "info");
  }
  /**
   * Logs used for debugging purposes.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static debug(module, ...message) {
    Logger._log(module, message, "debug");
  }
  /**
   * Logs used for basic loggin.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static log(module, ...message) {
    Logger._log(module, message);
  }
  /**
   * Logs strings using different console levels and a module label.
   *
   * @param {string} module - Name of the calling module.
   * @param {any|Array<any>} message - Messages to have logged.
   * @param {module:Logger.LogTypes} type - Type of log to use in console.
   */


  static _log(module, message, type = "log") {
    type = Logger.parseType(type);
    if (!Array.isArray(message)) message = [message];
    console[type](`%c[BetterDiscord]%c [${module}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...message);
  }

  static parseType(type) {
    return LogTypes[type] || "log";
  }

}

/***/ }),

/***/ "./src/builtins/builtins.js":
/*!**********************************!*\
  !*** ./src/builtins/builtins.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCSS": () => (/* reexport safe */ _customcss__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "PublicServers": () => (/* reexport safe */ _general_publicservers__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "VoiceDisconnect": () => (/* reexport safe */ _general_voicedisconnect__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "MediaKeys": () => (/* reexport safe */ _general_mediakeys__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "EmoteModule": () => (/* reexport safe */ _emotes_emotes__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "EmoteMenu": () => (/* reexport safe */ _emotes_emotemenu__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "DevToolsListener": () => (/* reexport safe */ _developer_devtools__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Debugger": () => (/* reexport safe */ _developer_debugger__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "ReactDevTools": () => (/* reexport safe */ _developer_reactdevtools__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "InspectElement": () => (/* reexport safe */ _developer_inspectelement__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "StopDevToolsWarning": () => (/* reexport safe */ _developer_devtoolswarning__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "DebugLogs": () => (/* reexport safe */ _developer_debuglogs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "WindowPrefs": () => (/* reexport safe */ _window_transparency__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "RemoveMinimumSize": () => (/* reexport safe */ _window_removeminimumsize__WEBPACK_IMPORTED_MODULE_13__["default"])
/* harmony export */ });
/* harmony import */ var _customcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customcss */ "./src/builtins/customcss.js");
/* harmony import */ var _general_publicservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/publicservers */ "./src/builtins/general/publicservers.js");
/* harmony import */ var _general_voicedisconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/voicedisconnect */ "./src/builtins/general/voicedisconnect.js");
/* harmony import */ var _general_mediakeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/mediakeys */ "./src/builtins/general/mediakeys.js");
/* harmony import */ var _emotes_emotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emotes/emotes */ "./src/builtins/emotes/emotes.js");
/* harmony import */ var _emotes_emotemenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emotes/emotemenu */ "./src/builtins/emotes/emotemenu.js");
/* harmony import */ var _developer_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developer/devtools */ "./src/builtins/developer/devtools.js");
/* harmony import */ var _developer_debugger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developer/debugger */ "./src/builtins/developer/debugger.js");
/* harmony import */ var _developer_reactdevtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./developer/reactdevtools */ "./src/builtins/developer/reactdevtools.js");
/* harmony import */ var _developer_inspectelement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./developer/inspectelement */ "./src/builtins/developer/inspectelement.js");
/* harmony import */ var _developer_devtoolswarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./developer/devtoolswarning */ "./src/builtins/developer/devtoolswarning.js");
/* harmony import */ var _developer_debuglogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./developer/debuglogs */ "./src/builtins/developer/debuglogs.js");
/* harmony import */ var _window_transparency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./window/transparency */ "./src/builtins/window/transparency.js");
/* harmony import */ var _window_removeminimumsize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./window/removeminimumsize */ "./src/builtins/window/removeminimumsize.js");
// Export these two first because they add settings/panels





 // export {default as EmoteAutocaps} from "./emotes/emoteautocaps";










/***/ }),

/***/ "./src/builtins/customcss.js":
/*!***********************************!*\
  !*** ./src/builtins/customcss.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/customcss/csseditor */ "./src/ui/customcss/csseditor.jsx");
/* harmony import */ var _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/floatingwindows */ "./src/ui/floatingwindows.js");
/* harmony import */ var _ui_settings_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/utilities */ "./src/modules/utilities.js");







const fs = __webpack_require__(/*! fs */ "fs");

const electron = __webpack_require__(/*! electron */ "electron");

const UserSettings = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("updateAccount");
const Dispatcher = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("dirtyDispatch");
const ActionTypes = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("ActionTypes", "ActivityFlags").ActionTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class CustomCSS extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Custom CSS";
  }

  get category() {
    return "customcss";
  }

  get id() {
    return "customcss";
  }

  get startDetached() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get(this.collection, this.category, "openAction") == "detached";
  }

  get nativeOpen() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get(this.collection, this.category, "openAction") == "system";
  }

  constructor() {
    super();
    this.savedCss = "";
    this.insertedCss = "";
    this.isDetached = false;
  }

  async enabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.registerPanel(this.id, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Panels.customcss, {
      order: 2,
      element: () => [/*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.editorTitle
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
        css: this.savedCss,
        save: this.saveCSS.bind(this),
        update: this.insertCSS.bind(this),
        openNative: this.openNative.bind(this),
        openDetached: this.openDetached.bind(this),
        onChange: this.onChange.bind(this)
      })],
      onClick: thisObject => {
        if (this.isDetached) return;
        if (this.nativeOpen) return this.openNative();else if (this.startDetached) return this.openDetached(this.savedCss);
        const settingsView = _modules_utilities__WEBPACK_IMPORTED_MODULE_5__["default"].findInRenderTree(thisObject._reactInternals, m => m && m.onSetSection, {
          walkable: ["child", "memoizedProps", "props", "children"]
        });
        if (settingsView && settingsView.onSetSection) settingsView.onSetSection(this.id);
      }
    });
    this.loadCSS();
    this.insertCSS(this.savedCss);
    this.watchContent();
  }

  disabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.removePanel(this.id);
    this.unwatchContent();
    this.insertCSS("");
  }

  watchContent() {
    if (this.watcher) return this.error("Already watching content.");
    const timeCache = {};
    this.log("Starting to watch content.");
    this.watcher = fs.watch(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS, {
      persistent: false
    }, async (eventType, filename) => {
      if (!eventType || !filename) return;
      await new Promise(r => setTimeout(r, 50));

      try {
        fs.statSync(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS);
      } catch (err) {
        if (err.code !== "ENOENT") return;
        delete timeCache[filename];
        this.saveCSS("");
      }

      const stats = fs.statSync(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS);
      if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
      if (typeof stats.mtime.getTime() !== "number") return;
      if (timeCache[filename] == stats.mtime.getTime()) return;
      timeCache[filename] = stats.mtime.getTime();

      if (eventType == "change") {
        const newCSS = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.loadCustomCSS();
        if (newCSS == this.savedCss) return;
        this.savedCss = newCSS;
        this.insertCSS(this.savedCss);
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.emit("customcss-updated", this.savedCss);
      }
    });
  }

  unwatchContent() {
    if (!this.watcher) return this.error("Was not watching content.");
    this.watcher.close();
    delete this.watcher;
    this.log("No longer watching content.");
  }

  onChange(value) {
    if (!_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "customcss", "liveUpdate")) return;
    this.insertCSS(value);
    this.saveCSS(value);
  }

  loadCSS() {
    this.savedCss = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.loadCustomCSS();
  }

  insertCSS(newCss) {
    if (typeof newCss === "undefined") newCss = this.insertedCss;else this.insertedCss = newCss;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.updateCustomCSS(newCss);
  }

  saveCSS(newCss) {
    if (typeof newCss !== "undefined") this.savedCss = newCss;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.saveCustomCSS(this.savedCss);
  }

  openNative() {
    electron.shell.openExternal(`file://${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS}`);
  }

  openDetached(currentCSS) {
    const editorRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createRef();
    const editor = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "bd-floating-editor",
      ref: editorRef,
      css: currentCSS,
      save: this.saveCSS.bind(this),
      update: this.insertCSS.bind(this),
      openNative: this.openNative.bind(this),
      onChange: this.onChange.bind(this)
    });
    _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_3__["default"].open({
      onClose: () => {
        this.isDetached = false;
      },
      onResize: () => {
        if (!editorRef || !editorRef.current || !editorRef.current.resize) return;
        editorRef.current.resize();
      },
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.editorTitle,
      id: "floating-editor-window",
      height: 470,
      width: 410,
      center: true,
      resizable: true,
      children: editor,
      confirmClose: () => {
        if (!editorRef || !editorRef.current) return false;
        if (_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "customcss", "liveUpdate")) return false;
        return editorRef.current.hasUnsavedChanges;
      },
      confirmationText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.confirmationText
    });
    this.isDetached = true;
    UserSettings.close();
    Dispatcher.dispatch({
      type: ActionTypes.LAYER_POP
    });
  }

}());

/***/ }),

/***/ "./src/builtins/developer/debugger.js":
/*!********************************************!*\
  !*** ./src/builtins/developer/debugger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DeveloperMode extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Debugger";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "debuggerHotkey";
  }

  enabled() {
    document.addEventListener("keydown", this.debugListener);
  }

  disabled() {
    document.removeEventListener("keydown", this.debugListener);
  }

  debugListener(e) {
    if (e.key === "F7" || e.key == "F8") {
      debugger; // eslint-disable-line no-debugger

      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/debuglogs.js":
/*!*********************************************!*\
  !*** ./src/builtins/developer/debuglogs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/datastore */ "./src/modules/datastore.js");
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/utilities */ "./src/modules/utilities.js");
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");





const timestamp = () => new Date().toISOString().replace("T", " ").replace("Z", "");

const levels = ["log", "info", "warn", "error", "debug"];

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Circular Reference]";
      seen.add(value);
    }

    return value;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DebugLogs extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DebugLogs";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "debugLogs";
  }

  enabled() {
    this.logFile = path.join(_modules_datastore__WEBPACK_IMPORTED_MODULE_1__["default"].dataFolder, "debug.log");
    this.stream = fs.createWriteStream(this.logFile, {
      flags: "a"
    });
    this.stream.write(`\n\n================= Starting Debug Log (${timestamp()}) =================\n`);

    for (const level of levels) {
      this.after(console, level, (_, originalArgs) => {
        const data = this.sanitize(...originalArgs);
        this.stream.write(`[${timestamp()}][CONSOLE:${level.toUpperCase()}] ${data}\n`);
      });
    }
  }

  disabled() {
    this.unpatchAll();
    if (this.stream) this.stream.end(`\n\n================= Ending Debug Log (${timestamp()}) =================`);
  }

  sanitize(...args) {
    const sanitized = [];

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (typeof arg === "string") {
        const styleCount = _modules_utilities__WEBPACK_IMPORTED_MODULE_2__["default"].occurrences(arg, "%c");
        sanitized.push(arg.replace(/%c/g, ""));
        if (styleCount > 0) i += styleCount;
      }

      if (typeof arg === "undefined") sanitized.push("undefined");
      if (typeof arg === "object" && arg && arg.message && arg.stack) sanitized.push(`${arg.message}\n${arg.stack}`);else if (typeof arg === "object") sanitized.push(JSON.stringify(arg, getCircularReplacer()));
      if (typeof arg === "function" || typeof arg === "boolean" || typeof arg === "number") sanitized.push(arg.toString());
    }

    return sanitized.join(" ");
  }

}());

/***/ }),

/***/ "./src/builtins/developer/devtools.js":
/*!********************************************!*\
  !*** ./src/builtins/developer/devtools.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DevToolsListener extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DevTools";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "devTools";
  }

  initialize() {
    super.initialize(...arguments);
    this.toggleDevTools = this.toggleDevTools.bind(this);
    document.addEventListener("keydown", this.toggleDevTools);
  }

  toggleDevTools(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.stopPropagation();
      e.preventDefault();
      if (this.get(this.collection, this.category, this.id)) _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].toggleDevTools();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/devtoolswarning.js":
/*!***************************************************!*\
  !*** ./src/builtins/developer/devtoolswarning.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/webpackmodules */ "./src/modules/webpackmodules.js");

 // import IPC from "../../modules/ipc";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class StopDevToolsWarning extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "StopDevToolsWarning";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "devToolsWarning";
  }

  enabled() {
    var _window, _window$DiscordNative, _window$DiscordNative2;

    // IPC.stopDevtoolsWarning();
    (_window = window) === null || _window === void 0 ? void 0 : (_window$DiscordNative = _window.DiscordNative) === null || _window$DiscordNative === void 0 ? void 0 : (_window$DiscordNative2 = _window$DiscordNative.window) === null || _window$DiscordNative2 === void 0 ? void 0 : _window$DiscordNative2.setDevtoolsCallbacks(null, null);
  }

  disabled() {
    var _window2;

    const devtoolsModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByString("setDevtoolsCallbacks");
    const stringModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Messages");
    const hideModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => Object.keys(m).some(k => k.startsWith("hide")));
    if (!devtoolsModule || !stringModule || !hideModule) return;
    devtoolsModule(stringModule, hideModule, (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.DiscordNative);
  }

}());

/***/ }),

/***/ "./src/builtins/developer/inspectelement.js":
/*!**************************************************!*\
  !*** ./src/builtins/developer/inspectelement.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class InspectElement extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "InspectElementHotkey";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "inspectElement";
  }

  enabled() {
    document.addEventListener("keydown", this.inspectElement);
  }

  disabled() {
    document.removeEventListener("keydown", this.inspectElement);
  }

  inspectElement(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      // Ctrl + Shift + C
      _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].inspectElement();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/reactdevtools.js":
/*!*************************************************!*\
  !*** ./src/builtins/developer/reactdevtools.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ReactDevTools extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "ReactDevTools";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "reactDevTools";
  }

  async enabled() {
    this.showModal();
  }

  async disabled() {
    this.showModal();
  }

  showModal() {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartPrompt, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/builtins/emotes/category.jsx":
/*!******************************************!*\
  !*** ./src/builtins/emotes/category.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_icons_downarrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/icons/downarrow */ "./src/ui/icons/downarrow.jsx");


class Category extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-category"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-emote-header ${this.state.expanded ? "expanded" : "collapsed"}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-header-inner",
      onClick: () => this.setState({
        expanded: !this.state.expanded
      })
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-header-icon"
    }, this.props.icon ? this.props.icon : null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-header-label"
    }, this.props.label), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-emote-collapse-icon ${this.state.expanded ? "expanded" : "collapsed"}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_ui_icons_downarrow__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), this.state.expanded && this.props.children);
  }

}

/***/ }),

/***/ "./src/builtins/emotes/emotemenu.js":
/*!******************************************!*\
  !*** ./src/builtins/emotes/emotemenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _emotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotes */ "./src/builtins/emotes/emotes.js");
/* harmony import */ var _ui_emotemenucard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/emotemenucard */ "./src/ui/emotemenucard.jsx");
/* harmony import */ var _ui_emoteicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/emoteicon */ "./src/ui/emoteicon.jsx");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category */ "./src/builtins/emotes/category.jsx");
/* harmony import */ var _ui_icons_favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/icons/favorite */ "./src/ui/icons/favorite.jsx");
/* harmony import */ var _ui_icons_twitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icons/twitch */ "./src/ui/icons/twitch.jsx");








const EmojiPicker = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.find(m => m.type && m.type.displayName == "ExpressionPicker");
const {
  useExpressionPickerStore
} = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("useExpressionPickerStore") ?? {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class EmoteMenu extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "EmoteMenu";
  }

  get collection() {
    return "emotes";
  }

  get category() {
    return "general";
  }

  get id() {
    return "emoteMenu";
  }

  get hideEmojisID() {
    return "hideEmojiMenu";
  }

  get hideEmojis() {
    return this.get(this.hideEmojisID);
  }

  enabled() {
    this.after(EmojiPicker, "type", (_, __, returnValue) => {
      const originalChildren = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Utilities.getNestedProp(returnValue, "props.children.props.children");
      if (!originalChildren || originalChildren.__patched) return;
      const activePicker = useExpressionPickerStore(state => state.activeView);

      returnValue.props.children.props.children = props => {
        const childrenReturn = Reflect.apply(originalChildren, null, [props]); // Attach a try {} catch {} because this might crash the user.

        try {
          var _Utilities$findInReac, _head$;

          const head = (_Utilities$findInReac = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Utilities.findInReactTree(childrenReturn, e => (e === null || e === void 0 ? void 0 : e.role) === "tablist")) === null || _Utilities$findInReac === void 0 ? void 0 : _Utilities$findInReac.children;
          const body = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Utilities.findInReactTree(childrenReturn, e => {
            var _e$;

            return (e === null || e === void 0 ? void 0 : (_e$ = e[0]) === null || _e$ === void 0 ? void 0 : _e$.type) === "nav";
          });
          if (!head || !body) return childrenReturn;
          const isActive = activePicker == "bd-emotes";

          const TabItem = ((_head$ = head[0]) === null || _head$ === void 0 ? void 0 : _head$.type) ?? (() => null);

          if (!isActive && activePicker == "emoji" && this.hideEmojis) {
            useExpressionPickerStore.setState({
              activeView: "bd-emotes"
            });
          }

          if (this.hideEmojis) {
            const emojiTabIndex = head.findIndex(e => {
              var _e$props;

              return (e === null || e === void 0 ? void 0 : (_e$props = e.props) === null || _e$props === void 0 ? void 0 : _e$props.id) == "emoji-picker-tab";
            });
            if (emojiTabIndex > -1) head.splice(emojiTabIndex, 1);
          }

          head.push(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(TabItem, {
            "aria-controls": "bd-emotes",
            "id": "bd-emotes",
            "aria-selected": isActive,
            "isActive": isActive,
            "viewType": "bd-emotes"
          }, "Twitch"));

          if (isActive) {
            body.push(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_emotemenucard__WEBPACK_IMPORTED_MODULE_3__["default"], {
              type: "twitch"
            }, [_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_category__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Favorites",
              icon: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_icons_favorite__WEBPACK_IMPORTED_MODULE_6__["default"], {})
            }, Object.entries(_emotes__WEBPACK_IMPORTED_MODULE_2__["default"].favorites).map(([emote, url]) => {
              return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_emoteicon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                emote,
                url
              });
            })), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_category__WEBPACK_IMPORTED_MODULE_5__["default"], {
              label: "Twitch Emotes",
              icon: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_icons_twitch__WEBPACK_IMPORTED_MODULE_7__["default"], {})
            }, Object.keys(_emotes__WEBPACK_IMPORTED_MODULE_2__["default"].getCategory("TwitchGlobal")).map(emote => {
              const url = _emotes__WEBPACK_IMPORTED_MODULE_2__["default"].getUrl("TwitchGlobal", emote);
              return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_emoteicon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                emote,
                url
              });
            }))]));
          }
        } catch (error) {
          this.error("Error in EmojiPicker patch:\n", error);
        }

        return childrenReturn;
      };

      returnValue.props.children.props.children.__patched = true;
    });
  }

  disabled() {
    this.unpatchAll();
  }

}());

/***/ }),

/***/ "./src/builtins/emotes/emotes.js":
/*!***************************************!*\
  !*** ./src/builtins/emotes/emotes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/data.js */ "./src/data/data.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_emote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/emote */ "./src/ui/emote.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../structs/string */ "./src/structs/string.js");








const request = __webpack_require__(/*! request */ "request");

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const EmoteURLs = {
  TwitchGlobal: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://static-cdn.jtvnw.net/emoticons/v1/{{id}}/1.0`),
  TwitchSubscriber: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://static-cdn.jtvnw.net/emoticons/v1/{{id}}/1.0`),
  FrankerFaceZ: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://cdn.frankerfacez.com/emoticon/{{id}}/1`),
  BTTV: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://cdn.betterttv.net/emote/{{id}}/1x`)
};
const Emotes = {
  TwitchGlobal: {},
  TwitchSubscriber: {},
  BTTV: {},
  FrankerFaceZ: {}
};
const blocklist = [];
const overrides = ["twitch", "subscriber", "bttv", "ffz"];
const modifiers = ["flip", "spin", "pulse", "spin2", "spin3", "1spin", "2spin", "3spin", "tr", "bl", "br", "shake", "shake2", "shake3", "flap"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class EmoteModule extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Emotes";
  }

  get collection() {
    return "settings";
  }

  get category() {
    return "general";
  }

  get id() {
    return "emotes";
  }

  get categories() {
    return Object.keys(Emotes).filter(k => this.isCategoryEnabled(k));
  }

  get shouldDownload() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("emotes", this.category, "download");
  }

  get asarPath() {
    return path.join(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.baseFolder, "emotes.asar");
  }

  isCategoryEnabled(id) {
    return super.get("emotes", "categories", id.toLowerCase());
  }

  get(id) {
    return super.get("emotes", "general", id);
  }

  get MessageComponent() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.find(m => m.default && m.default.toString().search("childrenRepliedMessage") > -1);
  }

  get Emotes() {
    return Emotes;
  }

  get TwitchGlobal() {
    return Emotes.TwitchGlobal;
  }

  get TwitchSubscriber() {
    return Emotes.TwitchSubscriber;
  }

  get BTTV() {
    return Emotes.BTTV;
  }

  get FrankerFaceZ() {
    return Emotes.FrankerFaceZ;
  }

  get blocklist() {
    return blocklist;
  }

  get favorites() {
    return this.favoriteEmotes;
  }

  getUrl(category, name) {
    return EmoteURLs[category].format({
      id: Emotes[category][name]
    });
  }

  getCategory(category) {
    return Emotes[category];
  }

  getRemoteFile(category) {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Utilities.repoUrl(`assets/emotes/${category.toLowerCase()}.json`);
  }

  initialize() {
    super.initialize();
    const storedFavorites = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.getBDData("favoriteEmotes");
    this.favoriteEmotes = storedFavorites || {};
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.onCategoryToggle = this.onCategoryToggle.bind(this);
    this.resetEmotes = this.resetEmotes.bind(this);
  }

  async enabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.registerCollection("emotes", "Emotes", _data_data_js__WEBPACK_IMPORTED_MODULE_1__.EmoteConfig, {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.clearEmotes,
      onClick: this.resetEmotes.bind(this)
    }); // await this.getBlocklist();

    await this.loadEmoteData();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("emotes-favorite-added", this.addFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("emotes-favorite-removed", this.removeFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("setting-updated", this.onCategoryToggle);
    this.patchMessageContent();
  }

  disabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("setting-updated", this.onCategoryToggle);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("emotes-favorite-added", this.addFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("emotes-favorite-removed", this.removeFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.removeCollection("emotes");
    this.emptyEmotes();
    if (!this.cancelEmoteRender) return;
    this.cancelEmoteRender();
    delete this.cancelEmoteRender;
  }

  onCategoryToggle(collection, cat, category, enabled) {
    if (collection != "emotes" || cat != "categories") return;
    if (enabled) return this.loadEmoteData(category);
    return this.unloadEmoteData(category);
  }

  addFavorite(name, url) {
    if (!this.favoriteEmotes.hasOwnProperty(name)) this.favoriteEmotes[name] = url;
    this.saveFavorites();
  }

  removeFavorite(name) {
    if (!this.favoriteEmotes.hasOwnProperty(name)) return;
    delete this.favoriteEmotes[name];
    this.saveFavorites();
  }

  isFavorite(name) {
    return this.favoriteEmotes.hasOwnProperty(name);
  }

  saveFavorites() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("favoriteEmotes", this.favoriteEmotes);
  }

  emptyEmotes() {
    for (const cat in Emotes) Object.assign(Emotes, {
      [cat]: {}
    });
  }

  patchMessageContent() {
    if (this.cancelEmoteRender) return;
    this.cancelEmoteRender = this.before(this.MessageComponent, "default", (thisObj, args) => {
      const nodes = args[0].childrenMessageContent.props.content;
      if (!nodes || !nodes.length) return;

      for (let n = 0; n < nodes.length; n++) {
        const node = nodes[n];
        if (typeof node !== "string") continue;
        const words = node.split(/([^\s]+)([\s]|$)/g);

        for (let c = 0, clen = this.categories.length; c < clen; c++) {
          for (let w = 0, wlen = words.length; w < wlen; w++) {
            const emote = words[w];
            const emoteSplit = emote.split(":");
            const emoteName = emoteSplit[0];
            let emoteModifier = emoteSplit[1] ? emoteSplit[1] : "";
            let emoteOverride = emoteModifier.slice(0);
            if (emoteName.length < 4 || blocklist.includes(emoteName)) continue;
            if (!modifiers.includes(emoteModifier) || !_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("emotes", "general", "modifiers")) emoteModifier = "";
            if (!overrides.includes(emoteOverride)) emoteOverride = "";else emoteModifier = emoteOverride;
            let current = this.categories[c];

            if (emoteOverride === "twitch") {
              if (Emotes.TwitchGlobal[emoteName]) current = "TwitchGlobal";else if (Emotes.TwitchSubscriber[emoteName]) current = "TwitchSubscriber";
            } else if (emoteOverride === "subscriber") {
              if (Emotes.TwitchSubscriber[emoteName]) current = "TwitchSubscriber";
            } else if (emoteOverride === "bttv") {
              if (Emotes.BTTV[emoteName]) current = "BTTV";
            } else if (emoteOverride === "ffz") {
              if (Emotes.FrankerFaceZ[emoteName]) current = "FrankerFaceZ";
            }

            if (!Emotes[current][emoteName]) continue;
            const results = nodes[n].match(new RegExp(`([\\s]|^)${_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Utilities.escape(emoteModifier ? emoteName + ":" + emoteModifier : emoteName)}([\\s]|$)`));
            if (!results) continue;
            const pre = nodes[n].substring(0, results.index + results[1].length);
            const post = nodes[n].substring(results.index + results[0].length - results[2].length);
            nodes[n] = pre;
            const emoteComponent = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DiscordModules.React.createElement(_ui_emote__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: emoteName,
              url: EmoteURLs[current].format({
                id: Emotes[current][emoteName]
              }),
              modifier: emoteModifier,
              isFavorite: this.isFavorite(emoteName)
            });
            nodes.splice(n + 1, 0, post);
            nodes.splice(n + 1, 0, emoteComponent);
          }
        }
      }

      const onlyEmotes = nodes.every(r => {
        if (typeof r == "string" && r.replace(/\s*/, "") == "") return true;else if (r.type && r.type.name == "BDEmote") return true;else if (r.props && r.props.children && r.props.children.props && r.props.children.props.emojiName) return true;
        return false;
      });
      if (!onlyEmotes) return;

      for (const node of nodes) {
        if (typeof node != "object") continue;
        if (node.type.name == "BDEmote") node.props.jumboable = true;else if (node.props && node.props.children && node.props.children.props && node.props.children.props.emojiName) node.props.children.props.jumboable = true;
      }
    });
  }

  async loadEmoteData(categories) {
    if (!categories) categories = this.categories;
    if (!Array.isArray(categories)) categories = [categories];
    const all = Object.keys(Emotes);
    categories = categories.map(k => all.find(c => c.toLowerCase() == k.toLowerCase()));
    _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.loading, {
      type: "info"
    });
    this.emotesLoaded = false;
    const localOutdated = _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.tag_name > _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.getBDData("emoteVersion");
    if (!fs.existsSync(this.asarPath) || localOutdated && this.shouldDownload) await this.downloadEmotes();

    try {
      for (const category of categories) {
        this.log(category);

        const EmoteData = require(path.join(this.asarPath, category.toLowerCase()));

        Object.assign(Emotes[category], EmoteData);
        delete require.cache[path.join(this.asarPath, category.toLowerCase())];
        await new Promise(r => setTimeout(r, 1000));
      }

      const EmoteData = require(path.join(this.asarPath, "blocklist"));

      blocklist.push(...EmoteData);
      delete require.cache[path.join(this.asarPath, "blocklist")];
    } catch (err) {
      this.log("Failed to load emotes.");
    }

    this.emotesLoaded = true;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.dispatch("emotes-loaded");
    _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.loaded, {
      type: "success"
    });
  }

  unloadEmoteData(categories) {
    if (!categories) categories = this.categories;
    if (!Array.isArray(categories)) categories = [categories];
    const all = Object.keys(Emotes);
    categories = categories.map(k => all.find(c => c.toLowerCase() == k.toLowerCase()));

    for (const category of categories) {
      delete Emotes[category];
      Emotes[category] = {};
    }
  }

  async downloadEmotes() {
    try {
      const asar = _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.assets.find(a => a.name === "emotes.asar");
      this.log(`Downloading emotes from: ${asar.url}`);
      const buff = await new Promise((resolve, reject) => request(asar.url, {
        encoding: null,
        headers: {
          "User-Agent": "BetterDiscord Emotes",
          "Accept": "application/octet-stream"
        }
      }, (err, resp, body) => {
        if (err || resp.statusCode != 200) return reject(err || `${resp.statusCode} ${resp.statusMessage}`);
        return resolve(body);
      }));
      this.log("Successfully downloaded emotes.asar");
      const asarPath = this.asarPath;

      const originalFs = __webpack_require__(/*! original-fs */ "original-fs");

      originalFs.writeFileSync(asarPath, buff);
      this.log(`Saved emotes.asar to ${asarPath}`);
      _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("emoteVersion", _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.tag_name);
    } catch (err) {
      this.stacktrace("Failed to download emotes.", err);
      _ui_modals__WEBPACK_IMPORTED_MODULE_4__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.downloadFailed, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.failureMessage, {
        cancelText: null
      });
    }
  }

  resetEmotes() {
    this.unloadEmoteData();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("emoteVersion", "0");
    this.loadEmoteData();
  }

}());

/***/ }),

/***/ "./src/builtins/general/mediakeys.js":
/*!*******************************************!*\
  !*** ./src/builtins/general/mediakeys.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class MediaKeys extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DisableMediaKeys";
  }

  get category() {
    return "general";
  }

  get id() {
    return "mediaKeys";
  }

  enabled() {
    this.showModal();
  }

  disabled() {
    this.showModal();
  }

  showModal() {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartPrompt, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/builtins/general/publicservers.js":
/*!***********************************************!*\
  !*** ./src/builtins/general/publicservers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_publicservers_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/publicservers/menu */ "./src/ui/publicservers/menu.js");



const LayerStack = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("pushLayer");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PublicServers extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "PublicServers";
  }

  get category() {
    return "general";
  }

  get id() {
    return "publicServers";
  }

  enabled() {
    this._appendButton();

    const ListNavigators = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("ListNavigatorProvider");
    this.after(ListNavigators, "ListNavigatorProvider", (_, __, returnValue) => {
      if (returnValue.props.value.id !== "guildsnav") return;

      this._appendButton();
    });
  }

  disabled() {
    this.unpatchAll();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.query("#bd-pub-li").remove();
  }

  async _appendButton() {
    await new Promise(r => setTimeout(r, 1000));
    const existing = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.query("#bd-pub-li");
    if (existing) return;
    const guilds = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.query(`.${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.guilds} .${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.listItem}`);
    if (!guilds) return;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.after(guilds, this.button);
  }

  openPublicServers() {
    LayerStack.pushLayer(() => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.React.createElement(_ui_publicservers_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      close: LayerStack.popLayer
    }));
  }

  get button() {
    const btn = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createElement(`<div id="bd-pub-li" class="${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.listItem}">`);
    const label = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOM.createElement(`<div id="bd-pub-button" class="${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.wrapper + " " + _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.circleIconButton}">${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.PublicServers.button}</div>`);
    label.addEventListener("click", () => {
      this.openPublicServers();
    });
    btn.append(label);
    return btn;
  }

}());

/***/ }),

/***/ "./src/builtins/general/voicedisconnect.js":
/*!*************************************************!*\
  !*** ./src/builtins/general/voicedisconnect.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class VoiceDisconnect extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "VoiceDisconnect";
  }

  get category() {
    return "general";
  }

  get id() {
    return "voiceDisconnect";
  }

  constructor() {
    super();
    this.beforeUnload = this.beforeUnload.bind(this);
  }

  enabled() {
    window.addEventListener("beforeunload", this.beforeUnload);
  }

  disabled() {
    window.removeEventListener("beforeunload", this.beforeUnload);
  }

  beforeUnload() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.ChannelActions.selectVoiceChannel(null, null);
  }

}());

/***/ }),

/***/ "./src/builtins/window/removeminimumsize.js":
/*!**************************************************!*\
  !*** ./src/builtins/window/removeminimumsize.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class RemoveMinimumSize extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "RemoveMinimumSize";
  }

  get category() {
    return "window";
  }

  get id() {
    return "removeMinimumSize";
  }

  enabled() {
    _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].setMinimumSize(1, 1);
  }

  disabled() {
    _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].setMinimumSize(940, 500);
  }

}());

/***/ }),

/***/ "./src/builtins/window/transparency.js":
/*!*********************************************!*\
  !*** ./src/builtins/window/transparency.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class WindowTransparency extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "WindowTransparency";
  }

  get category() {
    return "window";
  }

  get id() {
    return "transparency";
  }

  enabled() {
    this.showModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.WindowPrefs.enabledInfo);
    document.body.classList.add("bd-transparency");
  }

  disabled() {
    this.showModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.WindowPrefs.disabledInfo);
    document.body.classList.remove("bd-transparency");
  }

  showModal(info) {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, info, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/data/changelog.js":
/*!*******************************!*\
  !*** ./src/data/changelog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  description: "Improvements coming soon!",
  changes: [{
    title: "Fixes",
    type: "fixed",
    items: ["Injection on Canary is fixed!"]
  }]
});

/***/ }),

/***/ "./src/data/config.js":
/*!****************************!*\
  !*** ./src/data/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  version: "1.5.3",
  release: {
    assets: []
  },
  // Get from main process
  path: "",
  appPath: "",
  userData: ""
});

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "EmoteConfig": () => (/* reexport safe */ _emotesettings__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SettingsConfig": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Changelog": () => (/* reexport safe */ _changelog__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/data/config.js");
/* harmony import */ var _emotesettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emotesettings */ "./src/data/emotesettings.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/data/settings.js");
/* harmony import */ var _changelog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog */ "./src/data/changelog.js");





/***/ }),

/***/ "./src/data/emotesettings.js":
/*!***********************************!*\
  !*** ./src/data/emotesettings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: "category",
  id: "general",
  name: "General",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "download",
    value: true
  }, {
    type: "switch",
    id: "emoteMenu",
    value: true
  }, {
    type: "switch",
    id: "hideEmojiMenu",
    value: false,
    enableWith: "emoteMenu"
  }, {
    type: "switch",
    id: "modifiers",
    value: true
  }, {
    type: "switch",
    id: "animateOnHover",
    value: false
  }]
}, {
  type: "category",
  id: "categories",
  name: "Categories",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "twitchglobal",
    value: true
  }, {
    type: "switch",
    id: "twitchsubscriber",
    value: false
  }, {
    type: "switch",
    id: "frankerfacez",
    value: true
  }, {
    type: "switch",
    id: "bttv",
    value: true
  }]
}]);

/***/ }),

/***/ "./src/data/settings.js":
/*!******************************!*\
  !*** ./src/data/settings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: "category",
  id: "general",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "emotes",
    value: true
  }, {
    type: "switch",
    id: "publicServers",
    value: true
  }, {
    type: "switch",
    id: "voiceDisconnect",
    value: false
  }, {
    type: "switch",
    id: "showToasts",
    value: true
  }, {
    type: "switch",
    id: "mediaKeys",
    value: false
  }]
}, {
  type: "category",
  id: "addons",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "addonErrors",
    value: true
  }, {
    type: "switch",
    id: "autoReload",
    value: true
  }, {
    type: "dropdown",
    id: "editAction",
    value: "detached",
    options: [{
      value: "detached"
    }, {
      value: "system"
    }]
  }]
}, {
  type: "category",
  id: "customcss",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "customcss",
    value: true
  }, {
    type: "switch",
    id: "liveUpdate",
    value: false
  }, {
    type: "dropdown",
    id: "openAction",
    value: "settings",
    options: [{
      value: "settings"
    }, {
      value: "detached"
    }, {
      value: "system"
    }]
  }]
}, {
  type: "category",
  id: "editor",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "lineNumbers",
    value: true
  }, {
    type: "switch",
    id: "minimap",
    value: true
  }, {
    type: "switch",
    id: "hover",
    value: true
  }, {
    type: "switch",
    id: "quickSuggestions",
    value: true
  }, {
    type: "number",
    id: "fontSize",
    min: 2,
    value: 14
  }, {
    type: "dropdown",
    id: "renderWhitespace",
    value: "selection",
    options: [{
      value: "none"
    }, {
      value: "all"
    }, {
      value: "selection"
    }]
  }]
}, {
  type: "category",
  id: "window",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "transparency",
    value: false
  }, {
    type: "switch",
    id: "removeMinimumSize",
    value: false
  }, {
    type: "switch",
    id: "frame",
    value: false,
    hidden: true
  }]
}, {
  type: "category",
  id: "developer",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "debugLogs",
    value: false
  }, {
    type: "switch",
    id: "devTools",
    value: false
  }, {
    type: "switch",
    id: "debuggerHotkey",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "reactDevTools",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "inspectElement",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "devToolsWarning",
    value: false,
    enableWith: "devTools"
  }]
}]);

/***/ }),

/***/ "./src/loadingicon.js":
/*!****************************!*\
  !*** ./src/loadingicon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const css = `/* BEGIN V2 LOADER */
/* =============== */

#bd-loading-icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAwIDIwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiMzRTgyRTUiIGQ9Ik0xNDAyLjIsNjMxLjdjLTkuNy0zNTMuNC0yODYuMi00OTYtNjQyLjYtNDk2SDY4LjR2NzE0LjFsNDQyLDM5OFY0OTAuN2gyNTdjMjc0LjUsMCwyNzQuNSwzNDQuOSwwLDM0NC45SDU5Ny42djMyOS41aDE2OS44YzI3NC41LDAsMjc0LjUsMzQ0LjgsMCwzNDQuOGgtNjk5djM1NC45aDY5MS4yYzM1Ni4zLDAsNjMyLjgtMTQyLjYsNjQyLjYtNDk2YzAtMTYyLjYtNDQuNS0yODQuMS0xMjIuOS0zNjguNkMxMzU3LjcsOTE1LjgsMTQwMi4yLDc5NC4zLDE0MDIuMiw2MzEuN3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTI2Mi41LDEzNS4yTDEyNjIuNSwxMzUuMmwtNzYuOCwwYzI2LjYsMTMuMyw1MS43LDI4LjEsNzUsNDQuM2M3MC43LDQ5LjEsMTI2LjEsMTExLjUsMTY0LjYsMTg1LjNjMzkuOSw3Ni42LDYxLjUsMTY1LjYsNjQuMywyNjQuNmwwLDEuMnYxLjJjMCwxNDEuMSwwLDU5Ni4xLDAsNzM3LjF2MS4ybDAsMS4yYy0yLjcsOTktMjQuMywxODgtNjQuMywyNjQuNmMtMzguNSw3My44LTkzLjgsMTM2LjItMTY0LjYsMTg1LjNjLTIyLjYsMTUuNy00Ni45LDMwLjEtNzIuNiw0My4xaDcyLjVjMzQ2LjIsMS45LDY3MS0xNzEuMiw2NzEtNTY3LjlWNzE2LjdDMTkzMy41LDMxMi4yLDE2MDguNywxMzUuMiwxMjYyLjUsMTM1LjJ6Ii8+PC9nPjwvc3ZnPg==);
}
#bd-loading-icon {
  position: fixed;
  bottom:5px;
  right:5px;
  z-index: 2147483647;
  display: block;
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  animation: bd-loading-animation 1.5s ease-in-out infinite;
}

@keyframes bd-loading-animation {
  0% { opacity: 0.05; }
  50% { opacity: 0.6; }
  100% { opacity: 0.05; }
}
/* =============== */
/*  END V2 LOADER  */`;
const iconStyle = document.createElement("style");
iconStyle.textContent = css;
const loadingIcon = document.createElement("div");
loadingIcon.id = "bd-loading-icon";
loadingIcon.className = "bd-loaderv2";
loadingIcon.title = "BetterDiscord is loading...";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  static show() {
    document.body.appendChild(iconStyle);
    document.body.appendChild(loadingIcon);
  }

  static hide() {
    if (iconStyle) iconStyle.remove();
    if (loadingIcon) loadingIcon.remove();
  }

});

/***/ }),

/***/ "./src/moduleloader.js":
/*!*****************************!*\
  !*** ./src/moduleloader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_pluginapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pluginapi */ "./src/modules/pluginapi.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const namespace = "betterdiscord";
  const prefix = `${namespace}/`;

  const Module = __webpack_require__(/*! module */ "module");

  const load = Module._load;

  Module._load = function (request) {
    if (request === "process") {
      return window.process;
    }

    if (request === namespace || request.startsWith(prefix)) {
      const requested = request.slice(prefix.length);
      if (requested == "bdapi") return _modules_pluginapi__WEBPACK_IMPORTED_MODULE_0__["default"];
    }

    return load.apply(this, arguments);
  };

  return function () {
    Module._load = load;
  };
}

/***/ }),

/***/ "./src/modules/addonmanager.js":
/*!*************************************!*\
  !*** ./src/modules/addonmanager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonManager)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _structs_metaerror__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../structs/metaerror */ "./src/structs/metaerror.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ui_misc_addoneditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/misc/addoneditor */ "./src/ui/misc/addoneditor.jsx");
/* harmony import */ var _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/floatingwindows */ "./src/ui/floatingwindows.js");












const React = _discordmodules__WEBPACK_IMPORTED_MODULE_8__["default"].React;

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const shell = (__webpack_require__(/*! electron */ "electron").shell);

const openItem = shell.openItem || shell.openPath;
const splitRegex = /[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/;
const escapedAtRegex = /^\\@/;

const stripBOM = function (fileContent) {
  if (fileContent.charCodeAt(0) === 0xFEFF) {
    fileContent = fileContent.slice(1);
  }

  return fileContent;
};

class AddonManager {
  get name() {
    return "";
  }

  get extension() {
    return "";
  }

  get duplicatePattern() {
    return /./;
  }

  get addonFolder() {
    return "";
  }

  get language() {
    return "";
  }

  get prefix() {
    return "addon";
  }

  get collection() {
    return "settings";
  }

  get category() {
    return "addons";
  }

  get id() {
    return "autoReload";
  }

  emit(event, ...args) {
    return _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit(`${this.prefix}-${event}`, ...args);
  }

  constructor() {
    this.timeCache = {};
    this.addonList = [];
    this.state = {};
    this.windows = new Set();
  }

  initialize() {
    _settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].on(this.collection, this.category, this.id, enabled => {
      if (enabled) this.watchAddons();else this.unwatchAddons();
    });
    return this.loadAllAddons();
  } // Subclasses should overload this and modify the addon object as needed to fully load it


  initializeAddon() {
    return;
  }

  startAddon() {
    return;
  }

  stopAddon() {
    return;
  }

  loadState() {
    const saved = _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].getData(`${this.prefix}s`);
    if (!saved) return;
    Object.assign(this.state, saved);
  }

  saveState() {
    _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].setData(`${this.prefix}s`, this.state);
  }

  watchAddons() {
    if (this.watcher) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].err(this.name, `Already watching ${this.prefix} addons.`);
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log(this.name, `Starting to watch ${this.prefix} addons.`);
    this.watcher = fs.watch(this.addonFolder, {
      persistent: false
    }, async (eventType, filename) => {
      if (!eventType || !filename) return;
      const absolutePath = path.resolve(this.addonFolder, filename);

      if (!filename.endsWith(this.extension)) {
        // Lets check to see if this filename has the duplicated file pattern `something(1).ext`
        const match = filename.match(this.duplicatePattern);
        if (!match) return;
        const ext = match[0];
        const truncated = filename.replace(ext, "");
        const newFilename = truncated + this.extension; // If this file already exists, give a warning and move on.

        if (fs.existsSync(newFilename)) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn(this.name, `Duplicate files found: ${filename} and ${newFilename}`);
          return;
        } // Rename the file and let it go on


        try {
          fs.renameSync(absolutePath, path.resolve(this.addonFolder, newFilename));
        } catch (error) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].err(this.name, `Could not rename file: ${filename} ${newFilename}`, error);
        }
      }

      await new Promise(r => setTimeout(r, 100));

      try {
        const stats = fs.statSync(absolutePath);
        if (!stats.isFile()) return;
        if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
        if (typeof stats.mtime.getTime() !== "number") return;
        if (this.timeCache[filename] == stats.mtime.getTime()) return;
        this.timeCache[filename] = stats.mtime.getTime();
        if (eventType == "rename") this.loadAddon(filename, true);
        if (eventType == "change") this.reloadAddon(filename, true);
      } catch (err) {
        if (err.code !== "ENOENT") return;
        delete this.timeCache[filename];
        this.unloadAddon(filename, true);
      }
    });
  }

  unwatchAddons() {
    if (!this.watcher) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(this.name, `Was not watching ${this.prefix} addons.`);
    this.watcher.close();
    delete this.watcher;
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log(this.name, `No longer watching ${this.prefix} addons.`);
  }

  extractMeta(fileContent) {
    const firstLine = fileContent.split("\n")[0];
    const hasOldMeta = firstLine.includes("//META");
    if (hasOldMeta) return this.parseOldMeta(fileContent);
    const hasNewMeta = firstLine.includes("/**");
    if (hasNewMeta) return this.parseNewMeta(fileContent);
    throw new _structs_metaerror__WEBPACK_IMPORTED_MODULE_6__["default"](_strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.metaNotFound);
  }

  parseOldMeta(fileContent) {
    const meta = fileContent.split("\n")[0];
    const metaData = meta.substring(meta.lastIndexOf("//META") + 6, meta.lastIndexOf("*//"));
    const parsed = _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].testJSON(metaData);
    if (!parsed) throw new _structs_metaerror__WEBPACK_IMPORTED_MODULE_6__["default"](_strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.metaError);
    if (!parsed.name) throw new _structs_metaerror__WEBPACK_IMPORTED_MODULE_6__["default"](_strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.missingNameData);
    parsed.format = "json";
    return parsed;
  }

  parseNewMeta(fileContent) {
    const block = fileContent.split("/**", 2)[1].split("*/", 1)[0];
    const out = {};
    let field = "";
    let accum = "";

    for (const line of block.split(splitRegex)) {
      if (line.length === 0) continue;

      if (line.charAt(0) === "@" && line.charAt(1) !== " ") {
        out[field] = accum;
        const l = line.indexOf(" ");
        field = line.substring(1, l);
        accum = line.substring(l + 1);
      } else {
        accum += " " + line.replace("\\n", "\n").replace(escapedAtRegex, "@");
      }
    }

    out[field] = accum.trim();
    delete out[""];
    out.format = "jsdoc";
    return out;
  } // Subclasses should overload this and modify the addon using the fileContent as needed to "require()"" the file


  requireAddon(filename) {
    let fileContent = fs.readFileSync(filename, "utf8");
    fileContent = stripBOM(fileContent);
    const stats = fs.statSync(filename);
    const addon = this.extractMeta(fileContent);
    if (!addon.author) addon.author = _strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.unknownAuthor;
    if (!addon.version) addon.version = "???";
    if (!addon.description) addon.description = _strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.noDescription; // if (!addon.name || !addon.author || !addon.description || !addon.version) return new AddonError(addon.name || path.basename(filename), filename, "Addon is missing name, author, description, or version", {message: "Addon must provide name, author, description, and version.", stack: ""}, this.prefix);

    addon.id = addon.name;
    addon.slug = path.basename(filename).replace(this.extension, "").replace(/ /g, "-");
    addon.filename = path.basename(filename);
    addon.added = stats.atimeMs;
    addon.modified = stats.mtimeMs;
    addon.size = stats.size;
    addon.fileContent = fileContent;
    return addon;
  } // Subclasses should use the return (if not AddonError) and push to this.addonList


  loadAddon(filename, shouldToast = false) {
    if (typeof filename === "undefined") return;
    const addon = this.requireAddon(path.resolve(this.addonFolder, filename));
    if (addon instanceof _structs_addonerror__WEBPACK_IMPORTED_MODULE_5__["default"]) return addon;
    if (this.addonList.find(c => c.id == addon.id)) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_5__["default"](addon.name, filename, _strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.alreadyExists.format({
      type: this.prefix,
      name: addon.name
    }), this.prefix);
    const error = this.initializeAddon(addon);
    if (error) return error;
    this.addonList.push(addon);
    if (shouldToast) _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].success(`${addon.name} v${addon.version} was loaded.`);
    this.emit("loaded", addon.id);
    if (!this.state[addon.id]) return this.state[addon.id] = false;
    return this.startAddon(addon);
  }

  unloadAddon(idOrFileOrAddon, shouldToast = true, isReload = false) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    if (!addon) return false;
    if (this.state[addon.id]) isReload ? this.stopAddon(addon) : this.disableAddon(addon);
    this.addonList.splice(this.addonList.indexOf(addon), 1);
    this.emit("unloaded", addon.id);
    if (shouldToast) _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].success(`${addon.name} was unloaded.`);
    return true;
  }

  reloadAddon(idOrFileOrAddon, shouldToast = true) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    const didUnload = this.unloadAddon(addon, shouldToast, true);
    if (addon && !didUnload) return didUnload;
    return this.loadAddon(addon ? addon.filename : idOrFileOrAddon, shouldToast);
  }

  isLoaded(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return false;
    return true;
  }

  isEnabled(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return false;
    return this.state[addon.id];
  }

  getAddon(idOrFile) {
    return this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
  }

  enableAddon(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    if (this.state[addon.id]) return;
    this.state[addon.id] = true;
    this.startAddon(addon);
    this.saveState();
  }

  disableAddon(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    if (!this.state[addon.id]) return;
    this.state[addon.id] = false;
    this.stopAddon(addon);
    this.saveState();
  }

  toggleAddon(id) {
    if (this.state[id]) this.disableAddon(id);else this.enableAddon(id);
  }

  loadNewAddons() {
    const files = fs.readdirSync(this.addonFolder);
    const removed = this.addonList.filter(t => !files.includes(t.filename)).map(c => c.id);
    const added = files.filter(f => !this.addonList.find(t => t.filename == f) && f.endsWith(this.extension) && fs.statSync(path.resolve(this.addonFolder, f)).isFile());
    return {
      added,
      removed
    };
  }

  updateList() {
    const results = this.loadNewAddons();

    for (const filename of results.added) this.loadAddon(filename);

    for (const name of results.removed) this.unloadAddon(name);
  }

  loadAllAddons() {
    this.loadState();
    const errors = [];
    const files = fs.readdirSync(this.addonFolder);

    for (const filename of files) {
      const absolutePath = path.resolve(this.addonFolder, filename);
      const stats = fs.statSync(absolutePath);
      if (!stats || !stats.isFile()) continue;
      this.timeCache[filename] = stats.mtime.getTime();

      if (!filename.endsWith(this.extension)) {
        // Lets check to see if this filename has the duplicated file pattern `something(1).ext`
        const match = filename.match(this.duplicatePattern);
        if (!match) continue;
        const ext = match[0];
        const truncated = filename.replace(ext, "");
        const newFilename = truncated + this.extension; // If this file already exists, give a warning and move on.

        if (fs.existsSync(newFilename)) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("AddonManager", `Duplicate files found: ${filename} and ${newFilename}`);
          continue;
        } // Rename the file and let it go on


        fs.renameSync(absolutePath, path.resolve(this.addonFolder, newFilename));
      }

      const addon = this.loadAddon(filename, false);
      if (addon instanceof _structs_addonerror__WEBPACK_IMPORTED_MODULE_5__["default"]) errors.push(addon);
    }

    this.saveState();
    if (_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.collection, this.category, this.id)) this.watchAddons();
    return errors;
  }

  deleteAddon(idOrFileOrAddon) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    return fs.unlinkSync(path.resolve(this.addonFolder, addon.filename));
  }

  saveAddon(idOrFileOrAddon, content) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    return fs.writeFileSync(path.resolve(this.addonFolder, addon.filename), content);
  }

  editAddon(idOrFileOrAddon, system) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    const fullPath = path.resolve(this.addonFolder, addon.filename);
    if (typeof system == "undefined") system = _settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get("settings", "addons", "editAction") == "system";
    if (system) return openItem(`${fullPath}`);
    return this.openDetached(addon);
  }

  openDetached(addon) {
    const fullPath = path.resolve(this.addonFolder, addon.filename);
    const content = fs.readFileSync(fullPath).toString();
    if (this.windows.has(fullPath)) return;
    this.windows.add(fullPath);
    const editorRef = React.createRef();
    const editor = React.createElement(_ui_misc_addoneditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "bd-floating-editor-" + addon.id,
      ref: editorRef,
      content: content,
      save: this.saveAddon.bind(this, addon),
      openNative: this.editAddon.bind(this, addon, true),
      language: this.language
    });
    _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_11__["default"].open({
      onClose: () => {
        this.windows.delete(fullPath);
      },
      onResize: () => {
        if (!editorRef || !editorRef.current || !editorRef.current.resize) return;
        editorRef.current.resize();
      },
      title: addon.name,
      id: "bd-floating-window-" + addon.id,
      className: "floating-addon-window",
      height: 470,
      width: 410,
      center: true,
      resizable: true,
      children: editor,
      confirmClose: () => {
        if (!editorRef || !editorRef.current) return false;
        return editorRef.current.hasUnsavedChanges;
      },
      confirmationText: _strings__WEBPACK_IMPORTED_MODULE_9__["default"].Addons.confirmationText.format({
        name: addon.name
      })
    });
  }

}

/***/ }),

/***/ "./src/modules/componentpatcher.js":
/*!*****************************************!*\
  !*** ./src/modules/componentpatcher.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _discordclasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discordclasses */ "./src/modules/discordclasses.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patcher */ "./src/modules/patcher.js");
/* harmony import */ var _ui_icons_bdlogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/icons/bdlogo */ "./src/ui/icons/bdlogo.jsx");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");








const React = _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React;
const Tooltip = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByDisplayName("Tooltip");
const Anchor = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByDisplayName("Anchor");
const Developers = [
/* Zerebos#7790 */
"249746236008169473",
/* Strencher#1044 */
"415849376598982656"];

const DeveloperBadge = function DeveloperBadge({
  type,
  size = 16
}) {
  return React.createElement(Tooltip, {
    color: "primary",
    position: "top",
    text: "BetterDiscord Developer"
  }, props => React.createElement(Anchor, Object.assign({
    className: `bd-${type}-badge`,
    href: "https://github.com/BetterDiscord/BetterDiscord",
    title: "BetterDiscord",
    target: "_blank"
  }, props), React.createElement(_ui_icons_bdlogo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size,
    className: "bd-logo"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ComponentPatcher {
  warn(...message) {
    return _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].warn("ComponentPatcher", ...message);
  }

  error(...message) {
    return _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("ComponentPatcher", ...message);
  }

  debug(...message) {
    return _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].debug("ComponentPatcher", ...message);
  }

  initialize() {
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchSocial.bind(this), "BD Social Patch")();
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")();
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")();
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchMessageHeader.bind(this), "BD Message Header Patch")();
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchMemberList.bind(this), "BD Member List Patch")();
    _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].suppressErrors(this.patchProfile.bind(this), "BD Profile Badges Patch")();
  }

  patchSocial() {
    if (this.socialPatch) return;
    const TabBar = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByDisplayName("TabBar");
    if (!TabBar) return;
    this.socialPatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", TabBar.prototype, "render", (thisObject, args, returnValue) => {
      const children = returnValue.props.children;
      if (!children || !children.length || children.length < 3) return;
      if (children[children.length - 3].type.displayName !== "Separator") return;
      if (!children[children.length - 2].type.toString().includes("socialLinks")) return;

      if (Anchor) {
        const original = children[children.length - 2].type;

        const newOne = function () {
          const returnVal = original(...arguments);
          returnVal.props.children.push(_discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(Anchor, {
            className: "bd-social-link",
            href: "https://twitter.com/_BetterDiscord_",
            title: "BetterDiscord",
            target: "_blank"
          }, _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement(_ui_icons_bdlogo__WEBPACK_IMPORTED_MODULE_6__["default"], {
            size: "16px",
            className: "bd-social-logo"
          })));
          return returnVal;
        };

        children[children.length - 2].type = newOne;
      }

      const additional = _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React.createElement("div", {
        className: `${_discordclasses__WEBPACK_IMPORTED_MODULE_3__["default"].Text.colorMuted} ${_discordclasses__WEBPACK_IMPORTED_MODULE_3__["default"].Text.size12}`
      }, `BetterDiscord ${_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version}`);
      const originalVersions = children[children.length - 1].type;

      children[children.length - 1].type = function () {
        const returnVal = originalVersions(...arguments);
        returnVal.props.children.splice(1, 0, additional);
        return returnVal;
      };
    });
  }

  patchGuildListItems() {
    if (this.guildListItemsPatch) return;
    const ListNavigators = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("ListNavigatorProvider");
    const GuildComponent = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].find(m => m.type && m.type.toString().includes("guildNode") && m.type.toString().includes("treeitem"));
    if (!GuildComponent || typeof GuildComponent.type !== "function") return this.warn("Failed to get Guild component.");
    if (!ListNavigators || typeof ListNavigators.ListNavigatorProvider !== "function") return this.warn("Failed to get ListNavigatorProvider component.");
    this.guildListItemsPatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", GuildComponent, "type", (_, [props], returnValue) => {
      if (!returnValue || !returnValue.props) return;

      try {
        returnValue.props.className += " bd-guild";
        if (props.unread) returnValue.props.className += " bd-unread";
        if (props.selected) returnValue.props.className += " bd-selected";
        if (props.mediaState.audio) returnValue.props.className += " bd-audio";
        if (props.mediaState.video) returnValue.props.className += " bd-video";
        if (props.badge) returnValue.props.className += " bd-badge";
        if (props.animatable) returnValue.props.className += " bd-animatable";
        if (props.unavailable) returnValue.props.className += " bd-unavailable";
        if (props.mediaState.screenshare) returnValue.props.className += " bd-screenshare";
        if (props.mediaState.liveStage) returnValue.props.className += " bd-live-stage";
        if (props.muted) returnValue.props.className += " bd-muted";
      } catch (err) {
        _common_logger__WEBPACK_IMPORTED_MODULE_7__["default"].error("ComponentPatcher:Guilds", `Error inside BDGuild:`, err);
        this.guildListItemsPatch();
      }
    });
    const {
      useState
    } = _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React;

    function useForceUpdate() {
      const [, setValue] = useState(false);
      return () => setValue(v => !v); // update the state to force render
    }

    let hasForced = false;
    this.cancelForceUpdate = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", ListNavigators, "ListNavigatorProvider", (_, __, returnValue) => {
      if (returnValue.props.value.id !== "guildsnav") return;
      const originalParent = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].findInTree(returnValue, m => {
        var _m$props;

        return m === null || m === void 0 ? void 0 : (_m$props = m.props) === null || _m$props === void 0 ? void 0 : _m$props.className;
      }, {
        walkable: ["children", "props"]
      });
      if (!originalParent) return;
      const original = originalParent.type;

      originalParent.type = e => {
        const forceUpdate = useForceUpdate();

        if (!hasForced) {
          hasForced = true;
          setTimeout(() => {
            forceUpdate();
            this.cancelForceUpdate();
          }, 1);
        }

        return Reflect.apply(original, null, [e]);
      };
    });
  }

  patchGuildPills() {
    if (this.guildPillPatch) return;
    const guildPill = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].find(m => m.default.displayName === "AnimatedHalfPill");
    if (!guildPill) return;
    this.guildPillPatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", guildPill, "default", (_, args, returnValue) => {
      const props = args[0];
      if (props.unread) returnValue.props.className += " bd-unread";
      if (props.selected) returnValue.props.className += " bd-selected";
      if (props.hovered) returnValue.props.className += " bd-hovered";
      return returnValue;
    });
  }

  patchMessageHeader() {
    if (this.messageHeaderPatch) return;
    const MessageTimestamp = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => {
      var _m$default;

      return (m === null || m === void 0 ? void 0 : (_m$default = m.default) === null || _m$default === void 0 ? void 0 : _m$default.toString().indexOf("showTimestampOnHover")) > -1;
    });
    this.messageHeaderPatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", MessageTimestamp, "default", (_, [{
      message
    }], returnValue) => {
      const userId = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].getNestedProp(message, "author.id");
      if (Developers.indexOf(userId) < 0) return;
      const children = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].getNestedProp(returnValue, "props.children.1.props.children");
      if (!Array.isArray(children)) return;
      children.splice(2, 0, React.createElement(DeveloperBadge, {
        type: "chat"
      }));
    });
  }

  patchMemberList() {
    var _MemberListItem$proto;

    if (this.memberListPatch) return;
    const MemberListItem = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].findByDisplayName("MemberListItem");
    if (!(MemberListItem !== null && MemberListItem !== void 0 && (_MemberListItem$proto = MemberListItem.prototype) !== null && _MemberListItem$proto !== void 0 && _MemberListItem$proto.renderDecorators)) return;
    this.memberListPatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", MemberListItem.prototype, "renderDecorators", (thisObject, args, returnValue) => {
      const user = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].getNestedProp(thisObject, "props.user");
      const children = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].getNestedProp(returnValue, "props.children");
      if (!children || Developers.indexOf(user.id) < 0) return;
      if (!Array.isArray(children)) return;
      children.push(React.createElement(DeveloperBadge, {
        type: "member"
      }));
    });
  }

  patchProfile() {
    if (this.profilePatch) return;
    const UserProfileBadgeList = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => {
      var _m$default2;

      return (m === null || m === void 0 ? void 0 : (_m$default2 = m.default) === null || _m$default2 === void 0 ? void 0 : _m$default2.displayName) === "UserProfileBadgeList";
    });
    this.profilePatch = _patcher__WEBPACK_IMPORTED_MODULE_5__["default"].after("ComponentPatcher", UserProfileBadgeList, "default", (_, [{
      user
    }], res) => {
      if (Developers.indexOf(user === null || user === void 0 ? void 0 : user.id) < 0) return;
      const children = _utilities__WEBPACK_IMPORTED_MODULE_4__["default"].getNestedProp(res, "props.children");
      if (!Array.isArray(children)) return;
      children.unshift(React.createElement(DeveloperBadge, {
        type: "profile",
        size: 18
      }));
    });
  }

}());

/***/ }),

/***/ "./src/modules/core.js":
/*!*****************************!*\
  !*** ./src/modules/core.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../builtins/builtins.js */ "./src/builtins/builtins.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _reactcomponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactcomponents */ "./src/modules/reactcomponents.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _componentpatcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentpatcher */ "./src/modules/componentpatcher.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ipc */ "./src/modules/ipc.js");
/* harmony import */ var _loadingicon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../loadingicon */ "./src/loadingicon.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editor */ "./src/modules/editor.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules.js */ "./src/modules/modules.js");
const path = __webpack_require__(/*! path */ "path");




















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Core {
  async startup() {
    if (this.hasStarted) return;
    this.hasStarted = true;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.appPath = process.env.DISCORD_APP_PATH;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.userData = process.env.DISCORD_USER_DATA;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.dataPath = process.env.BETTERDISCORD_DATA_PATH; // Load css early

    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Injecting BD Styles");
    _dommanager__WEBPACK_IMPORTED_MODULE_3__["default"].injectStyle("bd-stylesheet", _styles_index_css__WEBPACK_IMPORTED_MODULE_16__["default"].toString());
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing DataStore");
    _datastore__WEBPACK_IMPORTED_MODULE_10__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing LocaleManager");
    _localemanager__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Performing incompatibility checks");
    if (window.ED) return _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].alert(_strings__WEBPACK_IMPORTED_MODULE_13__["default"].Startup.notSupported, _strings__WEBPACK_IMPORTED_MODULE_13__["default"].Startup.incompatibleApp.format({
      app: "EnhancedDiscord"
    }));
    if (window.WebSocket && window.WebSocket.name && window.WebSocket.name.includes("Patched")) return _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].alert(_strings__WEBPACK_IMPORTED_MODULE_13__["default"].Startup.notSupported, _strings__WEBPACK_IMPORTED_MODULE_13__["default"].Startup.incompatibleApp.format({
      app: "Powercord"
    }));
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Getting update information");
    this.checkForUpdate();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Settings");
    _settingsmanager__WEBPACK_IMPORTED_MODULE_6__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing DOMManager");
    _dommanager__WEBPACK_IMPORTED_MODULE_3__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Waiting for connection...");
    await this.waitForConnection();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing ReactComponents");
    _reactcomponents__WEBPACK_IMPORTED_MODULE_9__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing ComponentPatcher");
    _componentpatcher__WEBPACK_IMPORTED_MODULE_12__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Editor");
    await _editor__WEBPACK_IMPORTED_MODULE_17__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Builtins");

    for (const module in _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__) {
      _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__[module].initialize();
    }

    this.polyfillWebpack();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Plugins"); // const pluginErrors = [];

    const pluginErrors = _pluginmanager__WEBPACK_IMPORTED_MODULE_4__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Themes"); // const themeErrors = [];

    const themeErrors = _thememanager__WEBPACK_IMPORTED_MODULE_5__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Removing Loading Icon");
    _loadingicon__WEBPACK_IMPORTED_MODULE_15__["default"].hide(); // Show loading errors

    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Collecting Startup Errors");
    _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: pluginErrors,
      themes: themeErrors
    });
    const previousVersion = _datastore__WEBPACK_IMPORTED_MODULE_10__["default"].getBDData("version");

    if (_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version > previousVersion) {
      _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showChangelogModal(_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Changelog);
      _datastore__WEBPACK_IMPORTED_MODULE_10__["default"].setBDData("version", _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version);
    }
  }

  polyfillWebpack() {
    if (typeof webpackJsonp !== "undefined") return;
    window.webpackJsonp = [];
    window.webpackJsonp.length = 10000; // In case plugins are waiting for that.

    window.webpackJsonp.flat = () => window.webpackJsonp; // eslint-disable-next-line no-empty-pattern


    window.webpackJsonp.push = ([[], module, [[id]]]) => {
      return module[id]({}, {}, _modules_js__WEBPACK_IMPORTED_MODULE_18__.WebpackModules.require);
    };
  }

  waitForConnection() {
    return new Promise(done => {
      if (_discordmodules__WEBPACK_IMPORTED_MODULE_11__["default"].UserStore.getCurrentUser()) return done();
      _discordmodules__WEBPACK_IMPORTED_MODULE_11__["default"].Dispatcher.subscribe("CONNECTION_OPEN", done);
    });
  }

  async checkForUpdate() {
    const resp = await fetch(`https://api.github.com/repos/BetterDiscord/BetterDiscord/releases/latest`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": "BetterDiscord Updater"
      }
    });
    const data = await resp.json();
    Object.assign(_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.release, data);
    const remoteVersion = data.tag_name.startsWith("v") ? data.tag_name.slice(1) : data.tag_name;
    const hasUpdate = remoteVersion > _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version;
    if (!hasUpdate) return; // TODO: move to strings file when updater is complete.

    _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showConfirmationModal("Update Available", `BetterDiscord (v${_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version}) has an update available (v${remoteVersion}). Would you like to update now?`, {
      confirmText: "Update Now!",
      cancelText: "Skip",
      onConfirm: () => this.update(data)
    });
  }

  async update(releaseInfo) {
    try {
      const asar = releaseInfo.assets.find(a => a.name === "betterdiscord.asar");

      const request = __webpack_require__(/*! request */ "request");

      const buff = await new Promise((resolve, reject) => request(asar.url, {
        encoding: null,
        headers: {
          "User-Agent": "BetterDiscord Updater",
          "Accept": "application/octet-stream"
        }
      }, (err, resp, body) => {
        if (err || resp.statusCode != 200) return reject(err || `${resp.statusCode} ${resp.statusMessage}`);
        return resolve(body);
      }));
      const asarPath = path.join(_datastore__WEBPACK_IMPORTED_MODULE_10__["default"].baseFolder, "betterdiscord.asar");

      const fs = __webpack_require__(/*! original-fs */ "original-fs");

      fs.writeFileSync(asarPath, buff);
      _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showConfirmationModal("Update Successful!", "BetterDiscord updated successfully. Discord needs to restart in order for it to take effect. Do you want to do this now?", {
        confirmText: _strings__WEBPACK_IMPORTED_MODULE_13__["default"].Modals.restartNow,
        cancelText: _strings__WEBPACK_IMPORTED_MODULE_13__["default"].Modals.restartLater,
        danger: true,
        onConfirm: () => _ipc__WEBPACK_IMPORTED_MODULE_14__["default"].relaunch()
      });
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("Updater", "Failed to update", err);
      _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showConfirmationModal("Update Failed", "BetterDiscord failed to update. Please download the latest version of the installer from GitHub (https://github.com/BetterDiscord/Installer/releases/latest) and reinstall.", {
        cancelText: null
      });
    }
  }

}());

/***/ }),

/***/ "./src/modules/datastore.js":
/*!**********************************!*\
  !*** ./src/modules/datastore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
var _window, _window$DiscordNative, _window$DiscordNative2, _window$DiscordNative3, _window2, _window2$DiscordNativ, _window2$DiscordNativ2, _window2$DiscordNativ3;





const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const releaseChannel = ((_window = window) === null || _window === void 0 ? void 0 : (_window$DiscordNative = _window.DiscordNative) === null || _window$DiscordNative === void 0 ? void 0 : (_window$DiscordNative2 = _window$DiscordNative.app) === null || _window$DiscordNative2 === void 0 ? void 0 : (_window$DiscordNative3 = _window$DiscordNative2.getReleaseChannel) === null || _window$DiscordNative3 === void 0 ? void 0 : _window$DiscordNative3.call(_window$DiscordNative2)) ?? "stable";
const discordVersion = ((_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$DiscordNativ = _window2.DiscordNative) === null || _window2$DiscordNativ === void 0 ? void 0 : (_window2$DiscordNativ2 = _window2$DiscordNativ.remoteApp) === null || _window2$DiscordNativ2 === void 0 ? void 0 : (_window2$DiscordNativ3 = _window2$DiscordNativ2.getVersion) === null || _window2$DiscordNativ3 === void 0 ? void 0 : _window2$DiscordNativ3.call(_window2$DiscordNativ2)) ?? "0.0.309"; // Schema
// =======================
// %appdata%\BetterDiscord
//     -> data
//         -> [releaseChannel]\ (stable/canary/ptb)
//             -> settings.json
//             -> plugins.json
//             -> themes.json

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DataStore {
  constructor() {
    this.data = {
      misc: {}
    };
    this.pluginData = {};
    this.cacheData = {};
  }

  initialize() {
    const bdFolderExists = fs.existsSync(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath);
    if (!bdFolderExists) fs.mkdirSync(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath);
    const pluginFolderExists = fs.existsSync(this.pluginFolder);
    if (!pluginFolderExists) fs.mkdirSync(this.pluginFolder);
    const themeFolderExists = fs.existsSync(this.themeFolder);
    if (!themeFolderExists) fs.mkdirSync(this.themeFolder);
    const newStorageExists = fs.existsSync(this.baseFolder);
    if (!newStorageExists) fs.mkdirSync(this.baseFolder);
    if (!fs.existsSync(this.dataFolder)) fs.mkdirSync(this.dataFolder);
    if (!fs.existsSync(this.customCSS)) fs.writeFileSync(this.customCSS, "");
    const dataFiles = fs.readdirSync(this.dataFolder).filter(f => !fs.statSync(path.resolve(this.dataFolder, f)).isDirectory() && f.endsWith(".json"));

    for (const file of dataFiles) {
      let data = {};

      try {
        data = require(path.resolve(this.dataFolder, file));
      } catch (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].stacktrace("DataStore", `Could not load file ${file}`, e);
      }

      this.data[file.split(".")[0]] = data;
    }

    if (newStorageExists) return;

    try {
      this.convertOldData();
    } // Convert old data if it exists (routine checks existence and removes existence)
    catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].stacktrace("DataStore", `Could not convert old data.`, e);
    }
  }

  convertOldData() {
    const oldFile = path.join(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "bdstorage.json");
    if (!fs.existsSync(oldFile)) return;

    const oldData = require(oldFile); // got the data


    fs.renameSync(oldFile, `${oldFile}.bak`); // rename file after grabbing data to prevent loop

    const setChannelData = (channel, key, value, ext = "json") => fs.writeFileSync(path.resolve(this.baseFolder, channel, `${key}.${ext}`), JSON.stringify(value, null, 4));

    const channels = ["stable", "canary", "ptb"];
    let customcss = "";
    let favoriteEmotes = {};

    try {
      customcss = oldData.bdcustomcss ? atob(oldData.bdcustomcss) : "";
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].stacktrace("DataStore:convertOldData", "Error decoding custom css", e);
    }

    try {
      favoriteEmotes = oldData.bdfavemotes ? JSON.parse(atob(oldData.bdfavemotes)) : {};
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].stacktrace("DataStore:convertOldData", "Error decoding favorite emotes", e);
    }

    for (const channel of channels) {
      if (!fs.existsSync(path.resolve(this.baseFolder, channel))) fs.mkdirSync(path.resolve(this.baseFolder, channel));
      const channelData = oldData.settings[channel];
      if (!channelData || !channelData.settings) continue;
      const oldSettings = channelData.settings;
      const newSettings = {
        general: {
          publicServers: oldSettings["bda-gs-1"],
          voiceDisconnect: oldSettings["bda-dc-0"],
          showToasts: oldSettings["fork-ps-2"]
        },
        appearance: {
          twentyFourHour: oldSettings["bda-gs-6"],
          minimalMode: oldSettings["bda-gs-2"],
          coloredText: oldSettings["bda-gs-7"]
        },
        addons: {
          addonErrors: oldSettings["fork-ps-1"],
          autoReload: oldSettings["fork-ps-5"]
        },
        developer: {
          debuggerHotkey: oldSettings["bda-gs-8"],
          reactDevTools: oldSettings.reactDevTools
        }
      };
      const newEmotes = {
        general: {
          download: oldSettings["fork-es-3"],
          emoteMenu: oldSettings["bda-es-0"],
          hideEmojiMenu: !oldSettings["bda-es-9"],
          modifiers: oldSettings["bda-es-8"],
          animateOnHover: oldSettings["fork-es-2"]
        },
        categories: {
          twitchglobal: oldSettings["bda-es-7"],
          twitchsubscriber: oldSettings["bda-es-7"],
          frankerfacez: oldSettings["bda-es-1"],
          bttv: oldSettings["bda-es-2"]
        }
      };
      setChannelData(channel, "settings", newSettings); // settingsCookie

      setChannelData(channel, "emotes", newEmotes); // emotes (from settingsCookie)

      setChannelData(channel, "plugins", channelData.plugins || {}); // pluginCookie

      setChannelData(channel, "themes", channelData.themes || {}); // themeCookie

      setChannelData(channel, "misc", {
        favoriteEmotes
      }); // favorite emotes

      fs.writeFileSync(path.resolve(this.baseFolder, channel, "custom.css"), customcss); // customcss
    }

    this.initialize(); // Reinitialize data store with the converted data
  }

  get injectionPath() {
    if (this._injectionPath) return this._injectionPath;
    const base = _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.appPath;
    const roamingBase = _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.userData;
    const roamingLocation = path.resolve(roamingBase, discordVersion, "modules", "discord_desktop_core", "injector");
    const location = path.resolve(base, "..", "app");
    const realLocation = fs.existsSync(location) ? location : fs.existsSync(roamingLocation) ? roamingLocation : null;
    if (!realLocation) return this._injectionPath = null;
    return this._injectionPath = realLocation;
  }

  get pluginFolder() {
    return this._pluginFolder || (this._pluginFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins"));
  }

  get themeFolder() {
    return this._themeFolder || (this._themeFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "themes"));
  }

  get customCSS() {
    return this._customCSS || (this._customCSS = path.resolve(this.dataFolder, "custom.css"));
  }

  get baseFolder() {
    return this._baseFolder || (this._baseFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "data"));
  }

  get dataFolder() {
    return this._dataFolder || (this._dataFolder = path.resolve(this.baseFolder, `${releaseChannel}`));
  }

  getPluginFile(pluginName) {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins", pluginName + ".config.json");
  }

  _getFile(key) {
    if (key == "settings" || key == "plugins" || key == "themes" || key == "window") return path.resolve(this.dataFolder, `${key}.json`);
    return path.resolve(this.dataFolder, `misc.json`);
  }

  getBDData(key) {
    return this.data.misc[key] || "";
  }

  setBDData(key, value) {
    this.data.misc[key] = value;
    fs.writeFileSync(path.resolve(this.dataFolder, `misc.json`), JSON.stringify(this.data.misc, null, 4));
  }

  getLocale(locale) {
    const file = path.resolve(this.localeFolder, `${locale}.json`);
    if (!fs.existsSync(file)) return null;
    return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].testJSON(fs.readFileSync(file).toString());
  }

  saveLocale(locale, strings) {
    fs.writeFileSync(path.resolve(this.localeFolder, `${locale}.json`), JSON.stringify(strings, null, 4));
  }

  getData(key) {
    return this.data[key] || "";
  }

  setData(key, value) {
    this.data[key] = value;
    fs.writeFileSync(path.resolve(this.dataFolder, `${key}.json`), JSON.stringify(value, null, 4));
  }

  loadCustomCSS() {
    return fs.readFileSync(this.customCSS).toString();
  }

  saveCustomCSS(css) {
    return fs.writeFileSync(this.customCSS, css);
  }

  ensurePluginData(pluginName) {
    if (typeof this.pluginData[pluginName] !== "undefined") return; // Already have data cached
    // Setup blank data if config doesn't exist

    if (!fs.existsSync(this.getPluginFile(pluginName))) return this.pluginData[pluginName] = {}; // Getting here means not cached, read from disk

    this.pluginData[pluginName] = JSON.parse(fs.readFileSync(this.getPluginFile(pluginName)));
  }

  getPluginData(pluginName, key) {
    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    return this.pluginData[pluginName][key]; // Return blindly to allow falsey values
  }

  setPluginData(pluginName, key, value) {
    if (value === undefined) return; // Can't set undefined, use deletePluginData

    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    this.pluginData[pluginName][key] = value; // Set the value blindly to allow falsey values

    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4)); // Save to disk
  }

  deletePluginData(pluginName, key) {
    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    delete this.pluginData[pluginName][key];
    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4));
  }

}());

/***/ }),

/***/ "./src/modules/discordclasses.js":
/*!***************************************!*\
  !*** ./src/modules/discordclasses.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _structs_classname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/classname */ "./src/structs/classname.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");




const combineClasses = function (...props) {
  return Object.assign({}, ...props.map(prop => _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps(...prop)));
};

const DiscordClassModules = _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].memoizeObject({
  get Text() {
    return combineClasses(["size20", "size12"], ["selectable", "colorMuted"]);
  },

  get Titles() {
    return combineClasses(["wrapper", "base"], ["defaultColor", "h4"]);
  },

  get EmptyImage() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("emptyImage", "emptyHeader");
  },

  get Modal() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("content", "root", "header", "close");
  },

  get Scrollers() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("thin", "scrollerBase", "content");
  },

  get Margins() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("marginXSmall", "marginBottom8");
  },

  get Integrations() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("secondaryHeader", "detailsWrapper");
  },

  get Card() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("card", "topDivider", "description");
  }

});
const emptyClassModule = new Proxy({}, {
  get() {
    return "";
  }

});
const DiscordClasses = new Proxy(DiscordClassModules, {
  get(list, item) {
    if (list[item] === undefined) return emptyClassModule;
    if (typeof list[item] === "string") return list[item];
    return new Proxy(list[item], {
      get(obj, prop) {
        if (!Reflect.has(obj, prop)) return "";
        return new _structs_classname__WEBPACK_IMPORTED_MODULE_1__["default"](obj[prop]);
      }

    });
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscordClasses);

/***/ }),

/***/ "./src/modules/discordmodules.js":
/*!***************************************!*\
  !*** ./src/modules/discordmodules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/**
 * A large list of known and useful webpack modules internal to Discord.
 *
 * @module DiscordModules
 * @version 0.0.3
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utilities__WEBPACK_IMPORTED_MODULE_0__["default"].memoizeObject({
  get React() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createElement", "cloneElement");
  },

  get ReactDOM() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("render", "findDOMNode");
  },

  get Flux() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("connectStores");
  },

  get Events() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByPrototypes("setMaxListeners", "emit");
  },

  /* Guild Info, Stores, and Utilities */
  get GuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuild");
  },

  get SortedGuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSortedGuilds");
  },

  get SelectedGuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getLastSelectedGuildId");
  },

  get GuildSync() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSyncedGuilds");
  },

  get GuildInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getAcronym");
  },

  get GuildChannelsStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getChannels", "getDefaultChannel");
  },

  get GuildMemberStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMember");
  },

  get MemberCountStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMemberCounts");
  },

  get GuildEmojiStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getEmojis");
  },

  get GuildActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("markGuildAsRead");
  },

  get GuildPermissions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuildPermissions");
  },

  /* Channel Store & Actions */
  get ChannelStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getChannel", "getDMFromUserId");
  },

  get SelectedChannelStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getLastSelectedChannelId");
  },

  get ChannelActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("selectChannel");
  },

  get PrivateChannelActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("openPrivateChannel");
  },

  get ChannelSelector() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("selectGuild", "selectChannel");
  },

  /* Current User Info, State and Settings */
  get UserInfoStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getToken");
  },

  get UserSettingsStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("guildPositions");
  },

  get AccountManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("register", "login");
  },

  get UserSettingsUpdater() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("updateRemoteSettings");
  },

  get OnlineWatcher() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isOnline");
  },

  get CurrentUserIdle() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getIdleTime");
  },

  get RelationshipStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isBlocked", "getFriendIDs");
  },

  get RelationshipManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("addRelationship");
  },

  get MentionStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMentions");
  },

  /* User Stores and Utils */
  get UserStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getCurrentUser");
  },

  get UserStatusStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getStatus", "getState");
  },

  get UserTypingStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isTyping");
  },

  get UserActivityStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getActivity");
  },

  get UserNameResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getName");
  },

  get UserNoteStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getNote");
  },

  get UserNoteActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("updateNote");
  },

  /* Emoji Store and Utils */
  get EmojiInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isEmojiDisabled");
  },

  get EmojiUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuildEmoji");
  },

  get EmojiStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getByCategory", "EMOJI_NAME_RE");
  },

  /* Invite Store and Utils */
  get InviteStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getInvites");
  },

  get InviteResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("findInvite");
  },

  get InviteActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("acceptInvite");
  },

  /* Discord Objects & Utils */
  get DiscordConstants() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Permissions", "ActivityTypes", "StatusTypes");
  },

  get DiscordPermissions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Permissions", "ActivityTypes", "StatusTypes").Permissions;
  },

  get PermissionUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getHighestRole");
  },

  get ColorConverter() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("hex2int");
  },

  get ColorShader() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("darken");
  },

  get TinyColor() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByPrototypes("toRgb");
  },

  get ClassResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getClass");
  },

  get ButtonData() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("ButtonSizes");
  },

  get IconNames() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("IconNames");
  },

  get NavigationUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("transitionTo", "replaceWith", "getHistory");
  },

  /* Discord Messages */
  get MessageStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMessages");
  },

  get MessageActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("jumpToMessage", "_sendMessage");
  },

  get MessageQueue() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("enqueue");
  },

  get MessageParser() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createMessage", "parse", "unparse");
  },

  /* Text Processing */
  get hljs() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("highlight", "highlightBlock");
  },

  get SimpleMarkdown() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("parseBlock", "parseInline", "defaultOutput");
  },

  /* Experiments */
  get ExperimentStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getExperimentOverrides");
  },

  get ExperimentsManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isDeveloper");
  },

  get CurrentExperiment() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getExperimentId");
  },

  /* Images, Avatars and Utils */
  get ImageResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getUserAvatarURL", "getGuildIconURL");
  },

  get ImageUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSizedImageSrc");
  },

  get AvatarDefaults() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getUserAvatarURL", "DEFAULT_AVATARS");
  },

  /* Window, DOM, HTML */
  get WindowInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isFocused", "windowSize");
  },

  get TagInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("VALID_TAG_NAMES");
  },

  get DOMInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("canUseDOM");
  },

  /* Locale/Location and Time */
  get LocaleManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setLocale");
  },

  get Moment() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("parseZone");
  },

  get LocationManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createLocation");
  },

  get Timestamps() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("fromTimestamp");
  },

  get TimeFormatter() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("dateFormat");
  },

  /* Strings and Utils */
  get Strings() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Messages").Messages;
  },

  get StringFormats() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("a", "z");
  },

  get StringUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("toASCII");
  },

  /* URLs and Utils */
  get URLParser() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Url", "parse");
  },

  get ExtraURLs() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getArticleURL");
  },

  /* Drag & Drop */
  get DNDActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("beginDrag");
  },

  get DNDSources() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("addTarget");
  },

  get DNDObjects() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("DragSource");
  },

  /* Media Stuff (Audio/Video) */
  get MediaDeviceInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Codecs", "SUPPORTED_BROWSERS");
  },

  get MediaInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getOutputVolume");
  },

  get MediaEngineInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("MediaEngineFeatures");
  },

  get VoiceInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("EchoCancellation");
  },

  get VideoStream() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getVideoStream");
  },

  get SoundModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("playSound");
  },

  /* Electron & Other Internals with Utils*/
  get ElectronModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setBadge");
  },

  get Dispatcher() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("dirtyDispatch");
  },

  get PathUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("hasBasename");
  },

  get NotificationModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("showNotification");
  },

  get RouterModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Router");
  },

  get APIModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getAPIBaseURL");
  },

  get AnalyticEvents() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("AnalyticEventConfigs");
  },

  get KeyGenerator() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByRegex(/"binary"/);
  },

  get Buffers() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Buffer", "kMaxLength");
  },

  get DeviceStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getDevices");
  },

  get SoftwareInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("os");
  },

  get CurrentContext() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setTagsContext");
  },

  /* Commonly Used Classes */
  get GuildClasses() {
    const guildsWrapper = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("base", "guilds");
    const guilds = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("wrapper", "acronym");
    const pill = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("circleIconButton");
    const listItem = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => m.listItem && !m.pill && !m.sidebar);
    return Object.assign({}, guildsWrapper, guilds, pill, listItem);
  },

  get LayerStack() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("pushLayer");
  }

}));

/***/ }),

/***/ "./src/modules/dommanager.js":
/*!***********************************!*\
  !*** ./src/modules/dommanager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMManager)
/* harmony export */ });
class DOMManager {
  static get bdHead() {
    return this.getElement("bd-head");
  }

  static get bdBody() {
    return this.getElement("bd-body");
  }

  static get bdScripts() {
    return this.getElement("bd-scripts");
  }

  static get bdStyles() {
    return this.getElement("bd-styles");
  }

  static get bdThemes() {
    return this.getElement("bd-themes");
  }

  static get bdCustomCSS() {
    return this.getElement("#customcss");
  }

  static get bdTooltips() {
    return this.getElement("bd-tooltips") || this.createElement("bd-tooltips").appendTo(this.bdBody);
  }

  static get bdModals() {
    return this.getElement("bd-modals") || this.createElement("bd-modals").appendTo(this.bdBody);
  }

  static get bdToasts() {
    return this.getElement("bd-toasts") || this.createElement("bd-toasts").appendTo(this.bdBody);
  }

  static initialize() {// this.createElement("bd-head", {target: document.head});
    // this.createElement("bd-body", {target: document.body});
    // this.createElement("bd-scripts", {target: this.bdHead});
    // this.createElement("bd-styles", {target: this.bdHead});
    // this.createElement("bd-themes", {target: this.bdHead});
    // this.createElement("style", {id: "customcss", target: this.bdHead});
  }

  static escapeID(id) {
    return id.replace(/^[^a-z]+|[^\w-]+/gi, "-");
  }

  static getElement(e, baseElement = document) {
    if (e instanceof Node) return e;
    return baseElement.querySelector(e);
  }

  static createElement(tag, options = {}) {
    const {
      className,
      id,
      target
    } = options;
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (id) element.id = id;
    if (target) this.getElement(target).append(element);
    return element;
  }

  static removeStyle(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdStyles);
    if (exists) exists.remove();
  }

  static injectStyle(id, css) {
    id = this.escapeID(id);
    const style = this.getElement(`#${id}`, this.bdStyles) || this.createElement("style", {
      id
    });
    style.textContent = css;
    this.bdStyles.append(style);
  }

  static unlinkStyle(id) {
    return this.removeStyle(id);
  }

  static linkStyle(id, url, {
    documentHead = false
  } = {}) {
    id = this.escapeID(id);
    return new Promise(resolve => {
      const link = this.getElement(`#${id}`, this.bdStyles) || this.createElement("link", {
        id
      });
      link.rel = "stylesheet";
      link.href = url;
      link.onload = resolve;
      const target = documentHead ? document.head : this.bdStyles;
      target.append(link);
    });
  }

  static removeTheme(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdThemes);
    if (exists) exists.remove();
  }

  static injectTheme(id, css) {
    id = this.escapeID(id);
    const style = this.getElement(`#${id}`, this.bdThemes) || this.createElement("style", {
      id
    });
    style.textContent = css;
    this.bdThemes.append(style);
  }

  static updateCustomCSS(css) {
    this.bdCustomCSS.textContent = css;
  }

  static removeScript(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdScripts);
    if (exists) exists.remove();
  }

  static injectScript(id, url) {
    id = this.escapeID(id);
    return new Promise((resolve, reject) => {
      const script = this.getElement(`#${id}`, this.bdScripts) || this.createElement("script", {
        id
      });
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this.bdScripts.append(script);
    });
  }

}
DOMManager.createElement("bd-head", {
  target: document.head
});
DOMManager.createElement("bd-body", {
  target: document.body
});
DOMManager.createElement("bd-scripts", {
  target: DOMManager.bdHead
});
DOMManager.createElement("bd-styles", {
  target: DOMManager.bdHead
});
DOMManager.createElement("bd-themes", {
  target: DOMManager.bdHead
});
DOMManager.createElement("style", {
  id: "customcss",
  target: DOMManager.bdHead
});

/***/ }),

/***/ "./src/modules/domtools.js":
/*!*********************************!*\
  !*** ./src/modules/domtools.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMTools)
/* harmony export */ });
/**
 * Copyright 2018 Zachary Rauen
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * From: https://github.com/rauenzi/BDPluginLibrary
 */

/**
 * @interface
 * @name Offset
 * @property {number} top - Top offset of the target element.
 * @property {number} right - Right offset of the target element.
 * @property {number} bottom - Bottom offset of the target element.
 * @property {number} left - Left offset of the target element.
 * @property {number} height - Outer height of the target element.
 * @property {number} width - Outer width of the target element.
 */

/**
* Function that automatically removes added listener.
* @callback module:DOMTools~CancelListener
*/
class DOMTools {
  static escapeID(id) {
    return id.replace(/^[^a-z]+|[^\w-]+/gi, "-");
  }
  /**
   * Adds a style to the document.
   * @param {string} id - identifier to use as the element id
   * @param {string} css - css to add to the document
   */


  static addStyle(id, css) {
    document.head.append(DOMTools.createElement(`<style id="${id}">${css}</style>`));
  }
  /**
   * Removes a style from the document.
   * @param {string} id - original identifier used
   */


  static removeStyle(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
  }
  /**
   * Adds/requires a remote script to be loaded
   * @param {string} id - identifier to use for this script
   * @param {string} url - url from which to load the script
   * @returns {Promise} promise that resolves when the script is loaded
   */


  static addScript(id, url) {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.id = id;
      script.src = url;
      script.type = "text/javascript";
      script.onload = resolve;
      document.head.append(script);
    });
  }
  /**
   * Removes a remote script from the document.
   * @param {string} id - original identifier used
   */


  static removeScript(id) {
    id = this.escapeID(id);
    const element = document.getElementById(id);
    if (element) element.remove();
  } // https://javascript.info/js-animation


  static animate({
    timing = _ => _,
    update,
    duration
  }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // calculate the current animation state

      const progress = timing(timeFraction);
      update(progress); // draw it

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
  /**
   * This is my shit version of not having to use `$` from jQuery. Meaning
   * that you can pass a selector and it will automatically run {@link module:DOMTools.query}.
   * It also means that you can pass a string of html and it will perform and return `parseHTML`.
   * @see module:DOMTools.parseHTML
   * @see module:DOMTools.query
   * @param {string} selector - Selector to query or HTML to parse
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - Either the result of `parseHTML` or `query`
   */


  static Q(selector) {
    const element = this.parseHTML(selector);
    const isHTML = element instanceof NodeList ? Array.from(element).some(n => n.nodeType === 1) : element.nodeType === 1;
    if (isHTML) return element;
    return this.query(selector);
  }
  /**
   * Essentially a shorthand for `document.querySelector`. If the `baseElement` is not provided
   * `document` is used by default.
   * @param {string} selector - Selector to query
   * @param {Element} [baseElement] - Element to base the query from
   * @returns {(Element|null)} - The found element or null if not found
   */


  static query(selector, baseElement) {
    if (!baseElement) baseElement = document;
    return baseElement.querySelector(selector);
  }
  /**
   * Essentially a shorthand for `document.querySelectorAll`. If the `baseElement` is not provided
   * `document` is used by default.
   * @param {string} selector - Selector to query
   * @param {Element} [baseElement] - Element to base the query from
   * @returns {Array<Element>} - Array of all found elements
   */


  static queryAll(selector, baseElement) {
    if (!baseElement) baseElement = document;
    return baseElement.querySelectorAll(selector);
  }
  /**
   * Parses a string of HTML and returns the results. If the second parameter is true,
   * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
   * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
   * 
   * If the second parameter is false, then the return value will be the list of parsed
   * nodes and there were multiple top level nodes, otherwise the single node is returned.
   * @param {string} html - HTML to be parsed
   * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
   */


  static parseHTML(html, fragment = false) {
    const template = document.createElement("template");
    template.innerHTML = html;
    const node = template.content.cloneNode(true);
    if (fragment) return node;
    return node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
  }
  /** Alternate name for {@link module:DOMTools.parseHTML} */


  static createElement(html, fragment = false) {
    return this.parseHTML(html, fragment);
  }
  /**
   * Takes a string of html and escapes it using the brower's own escaping mechanism.
   * @param {String} html - html to be escaped
   */


  static escapeHTML(html) {
    const textNode = document.createTextNode("");
    const spanElement = document.createElement("span");
    spanElement.append(textNode);
    textNode.nodeValue = html;
    return spanElement.innerHTML;
  }
  /**
   * Adds a list of classes from the target element.
   * @param {Element} element - Element to edit classes of
   * @param {...string} classes - Names of classes to add
   * @returns {Element} - `element` to allow for chaining
   */


  static addClass(element, ...classes) {
    classes = classes.flat().filter(c => c);

    for (let c = 0; c < classes.length; c++) classes[c] = classes[c].toString().split(" ");

    classes = classes.flat().filter(c => c);
    element.classList.add(...classes);
    return element;
  }
  /**
   * Removes a list of classes from the target element.
   * @param {Element} element - Element to edit classes of
   * @param {...string} classes - Names of classes to remove
   * @returns {Element} - `element` to allow for chaining
   */


  static removeClass(element, ...classes) {
    for (let c = 0; c < classes.length; c++) classes[c] = classes[c].toString().split(" ");

    classes = classes.flat().filter(c => c);
    element.classList.remove(...classes);
    return element;
  }
  /**
   * When only one argument is present: Toggle class value;
   * i.e., if class exists then remove it and return false, if not, then add it and return true.
   * When a second argument is present:
   * If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
   * @param {Element} element - Element to edit classes of
   * @param {string} classname - Name of class to toggle
   * @param {boolean} [indicator] - Optional indicator for if the class should be toggled
   * @returns {Element} - `element` to allow for chaining
   */


  static toggleClass(element, classname, indicator) {
    classname = classname.toString().split(" ").filter(c => c);
    if (typeof indicator !== "undefined") classname.forEach(c => element.classList.toggle(c, indicator));else classname.forEach(c => element.classList.toggle(c));
    return element;
  }
  /**
   * Checks if an element has a specific class
   * @param {Element} element - Element to edit classes of
   * @param {string} classname - Name of class to check
   * @returns {boolean} - `true` if the element has the class, `false` otherwise.
   */


  static hasClass(element, classname) {
    return classname.toString().split(" ").filter(c => c).every(c => element.classList.contains(c));
  }
  /**
   * Replaces one class with another
   * @param {Element} element - Element to edit classes of
   * @param {string} oldName - Name of class to replace
   * @param {string} newName - New name for the class
   * @returns {Element} - `element` to allow for chaining
   */


  static replaceClass(element, oldName, newName) {
    element.classList.replace(oldName, newName);
    return element;
  }
  /**
   * Appends `thisNode` to `thatNode`
   * @param {Node} thisNode - Node to be appended to another node
   * @param {Node} thatNode - Node for `thisNode` to be appended to
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static appendTo(thisNode, thatNode) {
    if (typeof thatNode == "string") thatNode = this.query(thatNode);
    if (!thatNode) return null;
    thatNode.append(thisNode);
    return thisNode;
  }
  /**
   * Prepends `thisNode` to `thatNode`
   * @param {Node} thisNode - Node to be prepended to another node
   * @param {Node} thatNode - Node for `thisNode` to be prepended to
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static prependTo(thisNode, thatNode) {
    if (typeof thatNode == "string") thatNode = this.query(thatNode);
    if (!thatNode) return null;
    thatNode.prepend(thisNode);
    return thisNode;
  }
  /**
   * Insert after a specific element, similar to jQuery's `thisElement.insertAfter(otherElement)`.
   * @param {Node} thisNode - The node to insert
   * @param {Node} targetNode - Node to insert after in the tree
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static insertAfter(thisNode, targetNode) {
    targetNode.parentNode.insertBefore(thisNode, targetNode.nextSibling);
    return thisNode;
  }
  /**
   * Insert after a specific element, similar to jQuery's `thisElement.after(newElement)`.
   * @param {Node} thisNode - The node to insert
   * @param {Node} newNode - Node to insert after in the tree
   * @returns {Node} - `thisNode` to allow for chaining
   */


  static after(thisNode, newNode) {
    thisNode.parentNode.insertBefore(newNode, thisNode.nextSibling);
    return thisNode;
  }
  /**
   * Gets the next sibling element that matches the selector.
   * @param {Element} element - Element to get the next sibling of
   * @param {string} [selector=""] - Optional selector
   * @returns {Element} - The sibling element
   */


  static next(element, selector = "") {
    return selector ? element.querySelector("+ " + selector) : element.nextElementSibling;
  }
  /**
   * Gets all subsequent siblings.
   * @param {Element} element - Element to get next siblings of
   * @returns {NodeList} - The list of siblings
   */


  static nextAll(element) {
    return element.querySelectorAll("~ *");
  }
  /**
   * Gets the subsequent siblings until an element matches the selector.
   * @param {Element} element - Element to get the following siblings of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of siblings
   */


  static nextUntil(element, selector) {
    const next = [];

    while (element.nextElementSibling && !element.nextElementSibling.matches(selector)) next.push(element = element.nextElementSibling);

    return next;
  }
  /**
   * Gets the previous sibling element that matches the selector.
   * @param {Element} element - Element to get the previous sibling of
   * @param {string} [selector=""] - Optional selector
   * @returns {Element} - The sibling element
   */


  static previous(element, selector = "") {
    const previous = element.previousElementSibling;
    if (selector) return previous && previous.matches(selector) ? previous : null;
    return previous;
  }
  /**
   * Gets all preceeding siblings.
   * @param {Element} element - Element to get preceeding siblings of
   * @returns {NodeList} - The list of siblings
   */


  static previousAll(element) {
    const previous = [];

    while (element.previousElementSibling) previous.push(element = element.previousElementSibling);

    return previous;
  }
  /**
   * Gets the preceeding siblings until an element matches the selector.
   * @param {Element} element - Element to get the preceeding siblings of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of siblings
   */


  static previousUntil(element, selector) {
    const previous = [];

    while (element.previousElementSibling && !element.previousElementSibling.matches(selector)) previous.push(element = element.previousElementSibling);

    return previous;
  }
  /**
   * Find which index in children a certain node is. Similar to jQuery's `$.index()`
   * @param {HTMLElement} node - The node to find its index in parent
   * @returns {number} Index of the node
   */


  static indexInParent(node) {
    const children = node.parentNode.childNodes;
    let num = 0;

    for (let i = 0; i < children.length; i++) {
      if (children[i] == node) return num;
      if (children[i].nodeType == 1) num++;
    }

    return -1;
  }
  /** Shorthand for {@link module:DOMTools.indexInParent} */


  static index(node) {
    return this.indexInParent(node);
  }
  /**
   * Gets the parent of the element if it matches the selector,
   * otherwise returns null.
   * @param {Element} element - Element to get parent of
   * @param {string} [selector=""] - Selector to match parent
   * @returns {(Element|null)} - The sibling element or null
   */


  static parent(element, selector = "") {
    return !selector || element.parentElement.matches(selector) ? element.parentElement : null;
  }
  /**
   * Gets all children of Element that match the selector if provided.
   * @param {Element} element - Element to get all children of
   * @param {string} selector - Selector to match the children to
   * @returns {Array<Element>} - The list of children
   */


  static findChild(element, selector) {
    return element.querySelector(":scope > " + selector);
  }
  /**
   * Gets all children of Element that match the selector if provided.
   * @param {Element} element - Element to get all children of
   * @param {string} selector - Selector to match the children to
   * @returns {Array<Element>} - The list of children
   */


  static findChildren(element, selector) {
    return element.querySelectorAll(":scope > " + selector);
  }
  /**
   * Gets all ancestors of Element that match the selector if provided.
   * @param {Element} element - Element to get all parents of
   * @param {string} [selector=""] - Selector to match the parents to
   * @returns {Array<Element>} - The list of parents
   */


  static parents(element, selector = "") {
    const parents = [];
    if (selector) while (element.parentElement && element.parentElement.closest(selector)) parents.push(element = element.parentElement.closest(selector));else while (element.parentElement) parents.push(element = element.parentElement);
    return parents;
  }
  /**
   * Gets the ancestors until an element matches the selector.
   * @param {Element} element - Element to get the ancestors of
   * @param {string} selector - Selector to stop at
   * @returns {Array<Element>} - The list of parents
   */


  static parentsUntil(element, selector) {
    const parents = [];

    while (element.parentElement && !element.parentElement.matches(selector)) parents.push(element = element.parentElement);

    return parents;
  }
  /**
   * Gets all siblings of the element that match the selector.
   * @param {Element} element - Element to get all siblings of
   * @param {string} [selector="*"] - Selector to match the siblings to
   * @returns {Array<Element>} - The list of siblings
   */


  static siblings(element, selector = "*") {
    return Array.from(element.parentElement.children).filter(e => e != element && e.matches(selector));
  }
  /**
   * Sets or gets css styles for a specific element. If `value` is provided
   * then it sets the style and returns the element to allow for chaining,
   * otherwise returns the style.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} attribute - Attribute to get or set
   * @param {string} [value] - Value to set for attribute
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static css(element, attribute, value) {
    if (typeof value == "undefined") return global.getComputedStyle(element)[attribute];
    element.style[attribute] = value;
    return element;
  }
  /**
   * Sets or gets the width for a specific element. If `value` is provided
   * then it sets the width and returns the element to allow for chaining,
   * otherwise returns the width.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} [value] - Width to set
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static width(element, value) {
    if (typeof value == "undefined") return parseInt(getComputedStyle(element).width);
    element.style.width = value;
    return element;
  }
  /**
   * Sets or gets the height for a specific element. If `value` is provided
   * then it sets the height and returns the element to allow for chaining,
   * otherwise returns the height.  
   * @param {Element} element - Element to set the CSS of
   * @param {string} [value] - Height to set
   * @returns {Element|string} - When setting a value, element is returned for chaining, otherwise the value is returned.
   */


  static height(element, value) {
    if (typeof value == "undefined") return parseInt(getComputedStyle(element).height);
    element.style.height = value;
    return element;
  }
  /**
   * Sets the inner text of an element if given a value, otherwise returns it.
   * @param {Element} element - Element to set the text of
   * @param {string} [text] - Content to set
   * @returns {string} - Either the string set by this call or the current text content of the node.
   */


  static text(element, text) {
    if (typeof text == "undefined") return element.textContent;
    return element.textContent = text;
  }
  /**
   * Returns the innerWidth of the element.
   * @param {Element} element - Element to retrieve inner width of
   * @return {number} - The inner width of the element.
   */


  static innerWidth(element) {
    return element.clientWidth;
  }
  /**
   * Returns the innerHeight of the element.
   * @param {Element} element - Element to retrieve inner height of
   * @return {number} - The inner height of the element.
   */


  static innerHeight(element) {
    return element.clientHeight;
  }
  /**
   * Returns the outerWidth of the element.
   * @param {Element} element - Element to retrieve outer width of
   * @return {number} - The outer width of the element.
   */


  static outerWidth(element) {
    return element.offsetWidth;
  }
  /**
   * Returns the outerHeight of the element.
   * @param {Element} element - Element to retrieve outer height of
   * @return {number} - The outer height of the element.
   */


  static outerHeight(element) {
    return element.offsetHeight;
  }
  /**
   * Gets the offset of the element in the page.
   * @param {Element} element - Element to get offset of
   * @return {Offset} - The offset of the element
   */


  static offset(element) {
    return element.getBoundingClientRect();
  }

  static get listeners() {
    return this._listeners || (this._listeners = {});
  }
  /**
   * This is similar to jQuery's `on` function and can *hopefully* be used in the same way.
   * 
   * Rather than attempt to explain, I'll show some example usages.
   * 
   * The following will add a click listener (in the `myPlugin` namespace) to `element`.
   * `DOMTools.on(element, "click.myPlugin", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (in the `myPlugin` namespace) to `element` that only fires when the target is a `.block` element.
   * `DOMTools.on(element, "click.myPlugin", ".block", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (without namespace) to `element`.
   * `DOMTools.on(element, "click", () => {console.log("clicked!");});`
   * 
   * The following will add a click listener (without namespace) to `element` that only fires once.
   * `const cancel = DOMTools.on(element, "click", () => {console.log("fired!"); cancel();});`
   * 
   * @param {Element} element - Element to add listener to
   * @param {string} event - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} delegate - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {module:DOMTools~CancelListener} - A function that will undo the listener
   */


  static on(element, event, delegate, callback) {
    const [type, namespace] = event.split(".");
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? callback : function (ev) {
      if (ev.target.matches(delegate)) {
        callback(ev);
      }
    };
    element.addEventListener(type, eventFunc);

    const cancel = () => {
      element.removeEventListener(type, eventFunc);
    };

    if (namespace) {
      if (!this.listeners[namespace]) this.listeners[namespace] = [];

      const newCancel = () => {
        cancel();
        this.listeners[namespace].splice(this.listeners[namespace].findIndex(l => l.event == type && l.element == element), 1);
      };

      this.listeners[namespace].push({
        event: type,
        element: element,
        cancel: newCancel
      });
      return newCancel;
    }

    return cancel;
  }
  /**
   * Functionality for this method matches {@link module:DOMTools.on} but automatically cancels itself
   * and removes the listener upon the first firing of the desired event.
   * 
   * @param {Element} element - Element to add listener to
   * @param {string} event - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} delegate - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {module:DOMTools~CancelListener} - A function that will undo the listener
   */


  static once(element, event, delegate, callback) {
    const [type, namespace] = event.split(".");
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? function (ev) {
      callback(ev);
      element.removeEventListener(type, eventFunc);
    } : function (ev) {
      if (!ev.target.matches(delegate)) return;
      callback(ev);
      element.removeEventListener(type, eventFunc);
    };
    element.addEventListener(type, eventFunc);

    const cancel = () => {
      element.removeEventListener(type, eventFunc);
    };

    if (namespace) {
      if (!this.listeners[namespace]) this.listeners[namespace] = [];

      const newCancel = () => {
        cancel();
        this.listeners[namespace].splice(this.listeners[namespace].findIndex(l => l.event == type && l.element == element), 1);
      };

      this.listeners[namespace].push({
        event: type,
        element: element,
        cancel: newCancel
      });
      return newCancel;
    }

    return cancel;
  }

  static __offAll(event, element) {
    const [type, namespace] = event.split(".");

    let matchFilter = listener => listener.event == type,
        defaultFilter = _ => _;

    if (element) {
      matchFilter = l => l.event == type && l.element == element;

      defaultFilter = l => l.element == element;
    }

    const listeners = this.listeners[namespace] || [];
    const list = type ? listeners.filter(matchFilter) : listeners.filter(defaultFilter);

    for (let c = 0; c < list.length; c++) list[c].cancel();
  }
  /**
   * This is similar to jQuery's `off` function and can *hopefully* be used in the same way.
   * 
   * Rather than attempt to explain, I'll show some example usages.
   * 
   * The following will remove a click listener called `onClick` (in the `myPlugin` namespace) from `element`.
   * `DOMTools.off(element, "click.myPlugin", onClick);`
   * 
   * The following will remove a click listener called `onClick` (in the `myPlugin` namespace) from `element` that only fired when the target is a `.block` element.
   * `DOMTools.off(element, "click.myPlugin", ".block", onClick);`
   * 
   * The following will remove a click listener (without namespace) from `element`.
   * `DOMTools.off(element, "click", onClick);`
   * 
   * The following will remove all listeners in namespace `myPlugin` from `element`.
   * `DOMTools.off(element, ".myPlugin");`
   * 
   * The following will remove all click listeners in namespace `myPlugin` from *all elements*.
   * `DOMTools.off("click.myPlugin");`
   * 
   * The following will remove all listeners in namespace `myPlugin` from *all elements*.
   * `DOMTools.off(".myPlugin");`
   * 
   * @param {(Element|string)} element - Element to remove listener from
   * @param {string} [event] - Event to listen to with option namespace (e.g. "event.namespace")
   * @param {(string|callable)} [delegate] - Selector to run on element to listen to
   * @param {callable} [callback] - Function to fire on event
   * @returns {Element} - The original element to allow for chaining
   */


  static off(element, event, delegate, callback) {
    if (typeof element == "string") return this.__offAll(element);
    const [type, namespace] = event.split(".");
    if (namespace) return this.__offAll(event, element);
    const hasDelegate = delegate && callback;
    if (!callback) callback = delegate;
    const eventFunc = !hasDelegate ? callback : function (ev) {
      if (ev.target.matches(delegate)) {
        callback(ev);
      }
    };
    element.removeEventListener(type, eventFunc);
    return element;
  }
  /**
   * Adds a listener for when the node is added/removed from the document body.
   * The listener is automatically removed upon firing.
   * @param {HTMLElement} node - node to wait for
   * @param {callable} callback - function to be performed on event
   * @param {boolean} onMount - determines if it should fire on Mount or on Unmount
   */


  static onMountChange(node, callback, onMount = true) {
    const wrappedCallback = () => {
      this.observer.unsubscribe(wrappedCallback);
      callback();
    };

    this.observer.subscribe(wrappedCallback, mutation => {
      const nodes = Array.from(onMount ? mutation.addedNodes : mutation.removedNodes);
      const directMatch = nodes.indexOf(node) > -1;
      const parentMatch = nodes.some(parent => parent.contains(node));
      return directMatch || parentMatch;
    });
    return node;
  }
  /** Shorthand for {@link module:DOMTools.onMountChange} with third parameter `true` */


  static onMount(node, callback) {
    return this.onMountChange(node, callback);
  }
  /** Shorthand for {@link module:DOMTools.onMountChange} with third parameter `false` */


  static onUnmount(node, callback) {
    return this.onMountChange(node, callback, false);
  }
  /** Alias for {@link module:DOMTools.onMount} */


  static onAdded(node, callback) {
    return this.onMount(node, callback);
  }
  /** Alias for {@link module:DOMTools.onUnmount} */


  static onRemoved(node, callback) {
    return this.onUnmount(node, callback, false);
  }
  /**
   * Helper function which combines multiple elements into one parent element
   * @param {Array<HTMLElement>} elements - array of elements to put into a single parent
   */


  static wrap(elements) {
    const domWrapper = this.parseHTML(`<div class="dom-wrapper"></div>`);

    for (let e = 0; e < elements.length; e++) domWrapper.appendChild(elements[e]);

    return domWrapper;
  }

}

/***/ }),

/***/ "./src/modules/editor.js":
/*!*******************************!*\
  !*** ./src/modules/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Editor {
  async initialize() {
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min";
    Object.defineProperty(window, "MonacoEnvironment", {
      value: {
        getWorkerUrl: function () {
          return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                        self.MonacoEnvironment = {
                            baseUrl: '${baseUrl}'
                        };
                        importScripts('${baseUrl}/vs/base/worker/workerMain.min.js');`)}`;
        }
      }
    });
    const commonjsLoader = window.require;
    delete window.module; // Make monaco think this isn't a local node script or else it freaks out

    _dommanager__WEBPACK_IMPORTED_MODULE_1__["default"].linkStyle("monaco-style", `${baseUrl}/vs/editor/editor.main.min.css`, {
      documentHead: true
    });

    try {
      await _dommanager__WEBPACK_IMPORTED_MODULE_1__["default"].injectScript("monaco-script", `${baseUrl}/vs/loader.min.js`);
      const amdLoader = window.require; // Grab Monaco's amd loader

      window.require = commonjsLoader; // Revert to commonjs
      // Configure Monaco's AMD loader

      amdLoader.config({
        paths: {
          vs: `${baseUrl}/vs`
        }
      });
      amdLoader(["vs/editor/editor.main"], () => {}); // exposes the monaco global
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Editor", "Failed to load monaco editor", e);
    } finally {
      // Revert the global require to CommonJS
      window.require = commonjsLoader;
    }
  }

}());

/***/ }),

/***/ "./src/modules/emitter.js":
/*!********************************!*\
  !*** ./src/modules/emitter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EventEmitter = __webpack_require__(/*! events */ "events");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class BDEvents extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(20);
  }

  dispatch(eventName, ...args) {
    this.emit(eventName, ...args);
  }

}());

/***/ }),

/***/ "./src/modules/ipc.js":
/*!****************************!*\
  !*** ./src/modules/ipc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants/ipcevents */ "../common/constants/ipcevents.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class IPCRenderer {
  constructor() {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.NAVIGATE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("navigate"));
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MAXIMIZE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("maximize"));
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MINIMIZE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("minimize"));
  }

  openDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_DEVTOOLS);
  }

  closeDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.CLOSE_DEVTOOLS);
  }

  toggleDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_DEVTOOLS);
  }

  relaunch() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.RELAUNCH);
  }

  runScript(script) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.RUN_SCRIPT, script);
  }

  openWindow(url, options) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_WINDOW, url, options);
  }

  inspectElement() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.INSPECT_ELEMENT);
  }

  setMinimumSize(width, height) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MINIMUM_SIZE, width, height);
  }

  stopDevtoolsWarning() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.DEVTOOLS_WARNING);
  }

  openDialog(options) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_DIALOG, options);
  }

}());

/***/ }),

/***/ "./src/modules/localemanager.js":
/*!**************************************!*\
  !*** ./src/modules/localemanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/locales */ "../assets/locales/index.js");
/* harmony import */ var _assets_locales__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_locales__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");




const {
  Dispatcher,
  DiscordConstants,
  UserSettingsStore
} = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class LocaleManager {
  get discordLocale() {
    return UserSettingsStore.locale;
  }

  get defaultLocale() {
    return "en-US";
  }

  constructor() {
    this.locale = "";
    this.strings = _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].extend({}, _assets_locales__WEBPACK_IMPORTED_MODULE_0__[this.defaultLocale]);
  }

  initialize() {
    this.setLocale(this.discordLocale);
    Dispatcher.subscribe(DiscordConstants.ActionTypes.USER_SETTINGS_UPDATE, ({
      settings
    }) => {
      const newLocale = settings.locale;
      if (newLocale && newLocale != this.locale) this.setLocale(newLocale);
    });
  }

  setLocale(newLocale) {
    let newStrings;

    if (newLocale != this.defaultLocale) {
      newStrings = _assets_locales__WEBPACK_IMPORTED_MODULE_0__[newLocale];
      if (!newStrings) return this.setLocale(this.defaultLocale);
    } else {
      newStrings = _assets_locales__WEBPACK_IMPORTED_MODULE_0__[this.defaultLocale];
    }

    this.locale = newLocale;
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].extendTruthy(this.strings, newStrings);
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("strings-updated");
  }

}());

/***/ }),

/***/ "./src/modules/modules.js":
/*!********************************!*\
  !*** ./src/modules/modules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebpackModules": () => (/* reexport safe */ _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "ReactDOM": () => (/* binding */ ReactDOM),
/* harmony export */   "DiscordModules": () => (/* reexport safe */ _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Utilities": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "DataStore": () => (/* reexport safe */ _datastore__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Events": () => (/* reexport safe */ _emitter__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Settings": () => (/* reexport safe */ _settingsmanager__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "DOMManager": () => (/* reexport safe */ _dommanager__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "DOM": () => (/* reexport safe */ _domtools__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Patcher": () => (/* reexport safe */ _patcher__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "ReactComponents": () => (/* reexport safe */ _reactcomponents__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "LocaleManager": () => (/* reexport safe */ _localemanager__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Strings": () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "IPC": () => (/* reexport safe */ _ipc__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Logger": () => (/* reexport safe */ _common_logger__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "DiscordClasses": () => (/* reexport safe */ _discordclasses__WEBPACK_IMPORTED_MODULE_14__["default"])
/* harmony export */ });
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patcher */ "./src/modules/patcher.js");
/* harmony import */ var _reactcomponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactcomponents */ "./src/modules/reactcomponents.js");
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ipc */ "./src/modules/ipc.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _discordclasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./discordclasses */ "./src/modules/discordclasses.js");


const React = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"].React;
const ReactDOM = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"].ReactDOM;















/***/ }),

/***/ "./src/modules/patcher.js":
/*!********************************!*\
  !*** ./src/modules/patcher.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patcher)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/**
 * Patcher that can patch other functions allowing you to run code before, after or
 * instead of the original function. Can also alter arguments and return values.
 *
 * This is from Zerebos' library {@link https://github.com/rauenzi/BDPluginLibrary}
 *
 * @module Patcher
 * @version 0.0.2
 */



class Patcher {
  static get patches() {
    return this._patches || (this._patches = []);
  }
  /**
   * Returns all the patches done by a specific caller
   * @param {string} name - Name of the patch caller
   * @method
   */


  static getPatchesByCaller(name) {
    if (!name) return [];
    const patches = [];

    for (const patch of this.patches) {
      for (const childPatch of patch.children) {
        if (childPatch.caller === name) patches.push(childPatch);
      }
    }

    return patches;
  }
  /**
   * Unpatches all patches passed, or when a string is passed unpatches all
   * patches done by that specific caller.
   * @param {Array|string} patches - Either an array of patches to unpatch or a caller name
   */


  static unpatchAll(patches) {
    if (typeof patches === "string") patches = this.getPatchesByCaller(patches);

    for (const patch of patches) {
      patch.unpatch();
    }
  }

  static resolveModule(module) {
    if (!module || typeof module === "function" || typeof module === "object" && !Array.isArray(module)) return module;
    if (typeof module === "string") return _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"][module];
    if (Array.isArray(module)) return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].findByUniqueProperties(module);
    return null;
  }

  static makeOverride(patch) {
    return function () {
      let returnValue;
      if (!patch.children || !patch.children.length) return patch.originalFunction.apply(this, arguments);

      for (const superPatch of patch.children.filter(c => c.type === "before")) {
        try {
          superPatch.callback(this, arguments);
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire before callback of ${patch.functionName} for ${superPatch.caller}`, err);
        }
      }

      const insteads = patch.children.filter(c => c.type === "instead");

      if (!insteads.length) {
        returnValue = patch.originalFunction.apply(this, arguments);
      } else {
        for (const insteadPatch of insteads) {
          try {
            const tempReturn = insteadPatch.callback(this, arguments, patch.originalFunction.bind(this));
            if (typeof tempReturn !== "undefined") returnValue = tempReturn;
          } catch (err) {
            _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire instead callback of ${patch.functionName} for ${insteadPatch.caller}`, err);
          }
        }
      }

      for (const slavePatch of patch.children.filter(c => c.type === "after")) {
        try {
          const tempReturn = slavePatch.callback(this, arguments, returnValue);
          if (typeof tempReturn !== "undefined") returnValue = tempReturn;
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire after callback of ${patch.functionName} for ${slavePatch.caller}`, err);
        }
      }

      return returnValue;
    };
  }

  static rePatch(patch) {
    patch.proxyFunction = patch.module[patch.functionName] = this.makeOverride(patch);
  }

  static makePatch(module, functionName, name) {
    const patch = {
      name,
      module,
      functionName,
      originalFunction: module[functionName],
      proxyFunction: null,
      revert: () => {
        // Calling revert will destroy any patches added to the same module after this
        patch.module[patch.functionName] = patch.originalFunction;
        patch.proxyFunction = null;
        patch.children = [];
      },
      counter: 0,
      children: []
    };
    patch.proxyFunction = module[functionName] = this.makeOverride(patch);
    Object.assign(module[functionName], patch.originalFunction);
    module[functionName].__originalFunction = patch.originalFunction;

    module[functionName].toString = () => patch.originalFunction.toString();

    this.patches.push(patch);
    return patch;
  }
  /**
   * Function with no arguments and no return value that may be called to revert changes made by {@link module:Patcher}, restoring (unpatching) original method.
   * @callback module:Patcher~unpatch
   */

  /**
   * A callback that modifies method logic. This callback is called on each call of the original method and is provided all data about original call. Any of the data can be modified if necessary, but do so wisely.
   *
   * The third argument for the callback will be `undefined` for `before` patches. `originalFunction` for `instead` patches and `returnValue` for `after` patches.
   *
   * @callback module:Patcher~patchCallback
   * @param {object} thisObject - `this` in the context of the original function.
   * @param {arguments} arguments - The original arguments of the original function.
   * @param {(function|*)} extraValue - For `instead` patches, this is the original function from the module. For `after` patches, this is the return value of the function.
   * @return {*} Makes sense only when using an `instead` or `after` patch. If something other than `undefined` is returned, the returned value replaces the value of `returnValue`. If used for `before` the return value is ignored.
   */

  /**
   * This method patches onto another function, allowing your code to run beforehand.
   * Using this, you are also able to modify the incoming arguments before the original method is run.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run before the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static before(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "before"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run after.
   * Using this, you are also able to modify the return value, using the return of your code instead.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run instead of the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static after(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "after"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run instead.
   * Using this, you are also able to modify the return value, using the return of your code instead.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run after the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static instead(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "instead"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run before, instead or after the original function.
   * Using this you are able to modify the incoming arguments before the original function is run as well as the return
   * value before the original function actually returns.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run after the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.type=after] - Determines whether to run the function `before`, `instead`, or `after` the original.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static pushChildPatch(caller, moduleToPatch, functionName, callback, options = {}) {
    const {
      type = "after",
      forcePatch = true
    } = options;
    const module = this.resolveModule(moduleToPatch);
    if (!module) return null;
    if (!module[functionName] && forcePatch) module[functionName] = function () {};
    if (!(module[functionName] instanceof Function)) return null;
    if (typeof moduleToPatch === "string") options.displayName = moduleToPatch;
    const displayName = options.displayName || module.displayName || module.name || module.constructor.displayName || module.constructor.name;
    const patchId = `${displayName}.${functionName}`;
    const patch = this.patches.find(p => p.module == module && p.functionName == functionName) || this.makePatch(module, functionName, patchId);
    if (!patch.proxyFunction) this.rePatch(patch);
    const child = {
      caller,
      type,
      id: patch.counter,
      callback,
      unpatch: () => {
        patch.children.splice(patch.children.findIndex(cpatch => cpatch.id === child.id && cpatch.type === type), 1);

        if (patch.children.length <= 0) {
          const patchNum = this.patches.findIndex(p => p.module == module && p.functionName == functionName);
          if (patchNum < 0) return;
          this.patches[patchNum].revert();
          this.patches.splice(patchNum, 1);
        }
      }
    };
    patch.children.push(child);
    patch.counter++;
    return child.unpatch;
  }

}

/***/ }),

/***/ "./src/modules/pluginapi.js":
/*!**********************************!*\
  !*** ./src/modules/pluginapi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/notices */ "./src/ui/notices.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patcher */ "./src/modules/patcher.js");
/* harmony import */ var _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../builtins/emotes/emotes */ "./src/builtins/emotes/emotes.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ipc */ "./src/modules/ipc.js");
















const BdApi = {
  get React() {
    return _discordmodules__WEBPACK_IMPORTED_MODULE_3__["default"].React;
  },

  get ReactDOM() {
    return _discordmodules__WEBPACK_IMPORTED_MODULE_3__["default"].ReactDOM;
  },

  get WindowConfigFile() {
    return "";
  },

  get settings() {
    return _settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].collections;
  },

  get emotes() {
    return new Proxy(_builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_14__["default"].Emotes, {
      get(obj, category) {
        if (category === "blocklist") return _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_14__["default"].blocklist;
        const group = _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_14__["default"].Emotes[category];
        if (!group) return undefined;
        return new Proxy(group, {
          get(cat, emote) {
            return group[emote];
          },

          set() {
            _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].warn("BdApi.emotes", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
          }

        });
      },

      set() {
        _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].warn("BdApi.emotes", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
      }

    });
  },

  get version() {
    return _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version;
  }

};

BdApi.getAllWindowPreferences = function () {
  _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].warn("Deprecated", "BdApi.getAllWindowPreferences() has been deprecated due to the new handling of window transparency.");
};

BdApi.getWindowPreference = function () {
  _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].warn("Deprecated", "BdApi.getWindowPreference() has been deprecated due to the new handling of window transparency.");
  return null;
};

BdApi.setWindowPreference = function () {
  _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].warn("Deprecated", "BdApi.setWindowPreference() has been deprecated due to the new handling of window transparency.");
}; // Inject CSS to document head
// id = id of element
// css = custom css


BdApi.injectCSS = function (id, css) {
  _dommanager__WEBPACK_IMPORTED_MODULE_5__["default"].injectStyle(id, css);
}; // Clear css/remove any element
// id = id of element


BdApi.clearCSS = function (id) {
  _dommanager__WEBPACK_IMPORTED_MODULE_5__["default"].removeStyle(id);
}; // Inject CSS to document head
// id = id of element
// css = custom css


BdApi.linkJS = function (id, url) {
  return _dommanager__WEBPACK_IMPORTED_MODULE_5__["default"].injectScript(id, url);
}; // Clear css/remove any element
// id = id of element


BdApi.unlinkJS = function (id) {
  _dommanager__WEBPACK_IMPORTED_MODULE_5__["default"].removeScript(id);
};
/**
 * Shows a generic but very customizable modal.
 * @param {string} title - title of the modal
 * @param {string} content - a string of text to display in the modal
 */


BdApi.alert = function (title, content) {
  _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].alert(title, content);
};
/**
 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
 * @param {string} title - title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
 * @param {object} [options] - options to modify the modal
 * @param {boolean} [options.danger=false] - whether the main button should be red or not
 * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
 * @param {string} [options.cancelText=Cancel] - text for the cancel button
 * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
 * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
 */


BdApi.showConfirmationModal = function (title, content, options = {}) {
  return _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showConfirmationModal(title, content, options);
};
/**
 * This shows a toast similar to android towards the bottom of the screen.
 *
 * @param {string} content The string to show in the toast.
 * @param {object} options Options object. Optional parameter.
 * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
 * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
 * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
 * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
 */


BdApi.showToast = function (content, options = {}) {
  _ui_toasts__WEBPACK_IMPORTED_MODULE_6__["default"].show(content, options);
};
/**
 * Show a notice above discord's chat layer.
 * @param {string|Node} content Content of the notice
 * @param {object} options Options for the notice.
 * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
 * @param {Array<{label: string, onClick: (immediately?: boolean = false) => void}>} [options.buttons] Buttons that should be added next to the notice text.
 * @param {number} [options.timeout=10000] Timeout until the notice is closed. Won't fire if it's set to 0;
 * @returns {(immediately?: boolean = false) => void}
 */


BdApi.showNotice = function (content, options = {}) {
  return _ui_notices__WEBPACK_IMPORTED_MODULE_7__["default"].show(content, options);
}; // Finds module


BdApi.findModule = function (filter) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getModule(filter);
}; // Finds module


BdApi.findAllModules = function (filter) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getModule(filter, false);
}; // Finds module


BdApi.findModuleByProps = function (...props) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps(...props);
};

BdApi.findModuleByPrototypes = function (...protos) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByPrototypes(...protos);
};

BdApi.findModuleByDisplayName = function (name) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByDisplayName(name);
}; // Gets react instance


BdApi.getInternalInstance = function (node) {
  // if (!(node instanceof window.jQuery) && !(node instanceof Element)) return undefined;
  // if (node instanceof jQuery) node = node[0];
  return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].getReactInstance(node);
}; // Gets data


BdApi.loadData = function (pluginName, key) {
  return _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].getPluginData(pluginName, key);
};

BdApi.getData = BdApi.loadData; // Sets data

BdApi.saveData = function (pluginName, key, data) {
  return _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].setPluginData(pluginName, key, data);
};

BdApi.setData = BdApi.saveData; // Deletes data

BdApi.deleteData = function (pluginName, key) {
  return _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].deletePluginData(pluginName, key);
}; // Patches other functions


BdApi.monkeyPatch = function (what, methodName, options) {
  const {
    before,
    after,
    instead,
    once = false,
    callerId = "BdApi"
  } = options;
  const patchType = before ? "before" : after ? "after" : instead ? "instead" : "";
  if (!patchType) return _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].err("BdApi", "Must provide one of: after, before, instead");
  const originalMethod = what[methodName];
  const data = {
    originalMethod: originalMethod,
    callOriginalMethod: () => data.originalMethod.apply(data.thisObject, data.methodArguments)
  };
  data.cancelPatch = _patcher__WEBPACK_IMPORTED_MODULE_13__["default"][patchType](callerId, what, methodName, (thisObject, args, returnValue) => {
    data.thisObject = thisObject;
    data.methodArguments = args;
    data.returnValue = returnValue;

    try {
      const patchReturn = Reflect.apply(options[patchType], null, [data]);
      if (once) data.cancelPatch();
      return patchReturn;
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].stacktrace(`${callerId}:monkeyPatch`, `Error in the ${patchType} of ${methodName}`, err);
    }
  });
  return data.cancelPatch;
}; // Event when element is removed


BdApi.onRemoved = function (node, callback) {
  return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].onRemoved(node, callback);
}; // Wraps function in try..catch


BdApi.suppressErrors = function (method, message) {
  return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].suppressErrors(method, message);
}; // Tests for valid JSON


BdApi.testJSON = function (data) {
  return _utilities__WEBPACK_IMPORTED_MODULE_1__["default"].testJSON(data);
};

BdApi.isSettingEnabled = function (collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].get(collection, category, id);
};

BdApi.enableSetting = function (collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].set(collection, category, id, true);
};

BdApi.disableSetting = function (collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].set(collection, category, id, false);
};

BdApi.toggleSetting = function (collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].set(collection, category, id, !_settingsmanager__WEBPACK_IMPORTED_MODULE_11__["default"].get(collection, category, id));
}; // Gets data


BdApi.getBDData = function (key) {
  return _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].getBDData(key);
}; // Sets data


BdApi.setBDData = function (key, data) {
  return _datastore__WEBPACK_IMPORTED_MODULE_4__["default"].setBDData(key, data);
}; // Opens a filesystem dialog


BdApi.openDialog = async function (options) {
  const data = await _ipc__WEBPACK_IMPORTED_MODULE_15__["default"].openDialog(options);
  if (data.error) throw new Error(data.error);
  return data;
};

const makeAddonAPI = manager => new class AddonAPI {
  get folder() {
    return manager.addonFolder;
  }

  isEnabled(idOrFile) {
    return manager.isEnabled(idOrFile);
  }

  enable(idOrAddon) {
    return manager.enableAddon(idOrAddon);
  }

  disable(idOrAddon) {
    return manager.disableAddon(idOrAddon);
  }

  toggle(idOrAddon) {
    return manager.toggleAddon(idOrAddon);
  }

  reload(idOrFileOrAddon) {
    return manager.reloadAddon(idOrFileOrAddon);
  }

  get(idOrFile) {
    return manager.getAddon(idOrFile);
  }

  getAll() {
    return manager.addonList.map(a => manager.getAddon(a.id));
  }

}();

BdApi.Plugins = makeAddonAPI(_pluginmanager__WEBPACK_IMPORTED_MODULE_9__["default"]);
BdApi.Themes = makeAddonAPI(_thememanager__WEBPACK_IMPORTED_MODULE_10__["default"]);
BdApi.Patcher = {
  patch: (caller, moduleToPatch, functionName, callback, options = {}) => {
    if (typeof caller !== "string") return _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].err("BdApi.Patcher", "Parameter 0 of patch must be a string representing the caller");
    if (options.type !== "before" && options.type !== "instead" && options.type !== "after") return _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].err("BdApi.Patcher", "options.type must be one of: before, instead, after");
    return _patcher__WEBPACK_IMPORTED_MODULE_13__["default"].pushChildPatch(caller, moduleToPatch, functionName, callback, options);
  },
  before: (caller, moduleToPatch, functionName, callback, options = {}) => BdApi.Patcher.patch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
    type: "before"
  })),
  instead: (caller, moduleToPatch, functionName, callback, options = {}) => BdApi.Patcher.patch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
    type: "instead"
  })),
  after: (caller, moduleToPatch, functionName, callback, options = {}) => BdApi.Patcher.patch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
    type: "after"
  })),
  getPatchesByCaller: caller => {
    if (typeof caller !== "string") return _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].err("BdApi.Patcher", "Parameter 0 of getPatchesByCaller must be a string representing the caller");
    return _patcher__WEBPACK_IMPORTED_MODULE_13__["default"].getPatchesByCaller(caller);
  },
  unpatchAll: caller => {
    if (typeof caller !== "string") return _common_logger__WEBPACK_IMPORTED_MODULE_12__["default"].err("BdApi.Patcher", "Parameter 0 of unpatchAll must be a string representing the caller");
    return _patcher__WEBPACK_IMPORTED_MODULE_13__["default"].unpatchAll(caller);
  }
};
Object.freeze(BdApi);
Object.freeze(BdApi.Plugins);
Object.freeze(BdApi.Themes);
Object.freeze(BdApi.Patcher);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BdApi);

/***/ }),

/***/ "./src/modules/pluginmanager.js":
/*!**************************************!*\
  !*** ./src/modules/pluginmanager.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _addonmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addonmanager */ "./src/modules/addonmanager.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/settings */ "./src/ui/settings.js");
/* module decorator */ module = __webpack_require__.hmd(module);











const path = __webpack_require__(/*! path */ "path");

const vm = __webpack_require__(/*! vm */ "vm");

const normalizeExports = name => `
if (module.exports.default) {
    module.exports = module.exports.default;
}
if (typeof(module.exports) !== "function") {
    module.exports = eval("${name}");
}`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PluginManager extends _addonmanager__WEBPACK_IMPORTED_MODULE_2__["default"] {
  get name() {
    return "PluginManager";
  }

  get extension() {
    return ".plugin.js";
  }

  get duplicatePattern() {
    return /\.plugin\s?\([0-9]+\)\.js/;
  }

  get addonFolder() {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins");
  }

  get prefix() {
    return "plugin";
  }

  get language() {
    return "javascript";
  }

  constructor() {
    super();
    this.onSwitch = this.onSwitch.bind(this);
    this.observer = new MutationObserver(mutations => {
      for (let i = 0, mlen = mutations.length; i < mlen; i++) {
        this.onMutation(mutations[i]);
      }
    });
  }

  initialize() {
    const errors = super.initialize();
    this.setupFunctions();
    _settingsmanager__WEBPACK_IMPORTED_MODULE_4__["default"].registerPanel("plugins", _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.plugins, {
      element: () => _ui_settings__WEBPACK_IMPORTED_MODULE_9__["default"].getAddonPanel(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.plugins, this.addonList, this.state, {
        type: this.prefix,
        folder: this.addonFolder,
        onChange: this.togglePlugin.bind(this),
        reload: this.reloadPlugin.bind(this),
        refreshList: this.updatePluginList.bind(this),
        saveAddon: this.saveAddon.bind(this),
        editAddon: this.editAddon.bind(this),
        deleteAddon: this.deleteAddon.bind(this),
        prefix: this.prefix
      })
    });
    return errors;
  }
  /* Aliases */


  updatePluginList() {
    return this.updateList();
  }

  loadAllPlugins() {
    return this.loadAllAddons();
  }

  enablePlugin(idOrAddon) {
    return this.enableAddon(idOrAddon);
  }

  disablePlugin(idOrAddon) {
    return this.disableAddon(idOrAddon);
  }

  togglePlugin(id) {
    return this.toggleAddon(id);
  }

  unloadPlugin(idOrFileOrAddon) {
    return this.unloadAddon(idOrFileOrAddon);
  }

  loadPlugin(filename) {
    return this.loadAddon(filename);
  }

  loadAddon(filename, shouldCTE = true) {
    const error = super.loadAddon(filename, shouldCTE);
    if (error && shouldCTE) _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: [error]
    });
    return error;
  }

  reloadPlugin(idOrFileOrAddon) {
    const error = this.reloadAddon(idOrFileOrAddon);
    if (error) _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: [error]
    });
    return typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
  }
  /* Overrides */


  initializeAddon(addon) {
    if (!addon.exports || !addon.name) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin had no exports or @name property", {
      message: "Plugin had no exports or no @name property. @name property is required for all addons.",
      stack: ""
    }, this.prefix);

    try {
      const isValid = typeof addon.exports === "function";
      if (!isValid) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin not a valid format.", {
        message: "Plugins should be either a function or a class",
        stack: ""
      }, this.prefix);
      const PluginClass = addon.exports;
      const meta = Object.assign({}, addon);
      delete meta.exports;
      const thePlugin = PluginClass.prototype ? new PluginClass(meta) : addon.exports(meta);
      if (!thePlugin.start || !thePlugin.stop) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Missing start or stop function.", {
        message: "Plugins must have both a start and stop function.",
        stack: ""
      }, this.prefix);
      addon.instance = thePlugin;
      addon.name = thePlugin.getName ? thePlugin.getName() : addon.name;
      addon.author = thePlugin.getAuthor ? thePlugin.getAuthor() : addon.author;
      addon.description = thePlugin.getDescription ? thePlugin.getDescription() : addon.description;
      addon.version = thePlugin.getVersion ? thePlugin.getVersion() : addon.version;
      if (!addon.name || !addon.author || !addon.description || !addon.version) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin is missing name, author, description, or version", {
        message: "Plugin must provide name, author, description, and version.",
        stack: ""
      }, this.prefix);

      try {
        if (typeof addon.instance.load == "function") addon.instance.load();
      } catch (error) {
        this.state[addon.id] = false;
        return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, "load() could not be fired.", {
          message: error.message,
          stack: error.stack
        }, this.prefix);
      }
    } catch (error) {
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, "Could not be constructed.", {
        message: error.message,
        stack: error.stack
      }, this.prefix);
    }
  }

  requireAddon(filename) {
    const addon = super.requireAddon(filename);

    try {
      const module = {
        filename,
        exports: {}
      }; // Test if the code is valid gracefully

      vm.compileFunction(addon.fileContent, ["require", "module", "exports", "__filename", "__dirname"]);
      addon.fileContent += normalizeExports(addon.exports || addon.name);
      addon.fileContent += `\n//# sourceURL=betterdiscord://plugins/${addon.filename}`;
      const wrappedPlugin = new Function(["require", "module", "exports", "__filename", "__dirname"], addon.fileContent); // eslint-disable-line no-new-func

      wrappedPlugin(window.require, module, module.exports, module.filename, this.addonFolder);
      addon.exports = module.exports;
      delete addon.fileContent;
      return addon;
    } catch (err) {
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, module.filename, "Plugin could not be compiled", {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }
  }

  startAddon(id) {
    return this.startPlugin(id);
  }

  stopAddon(id) {
    return this.stopPlugin(id);
  }

  getAddon(id) {
    return this.getPlugin(id);
  }

  startPlugin(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    const plugin = addon.instance;

    try {
      plugin.start();
    } catch (err) {
      this.state[addon.id] = false;
      _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].error(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.couldNotStart.format({
        name: addon.name,
        version: addon.version
      }));
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `${addon.name} v${addon.version} could not be started.`, err);
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
        method: "start()"
      }), {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }

    this.emit("started", addon.id);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  stopPlugin(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    const plugin = addon.instance;

    try {
      plugin.stop();
    } catch (err) {
      this.state[addon.id] = false;
      _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].error(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.couldNotStop.format({
        name: addon.name,
        version: addon.version
      }));
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `${addon.name} v${addon.version} could not be started.`, err);
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
        method: "stop()"
      }), {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }

    this.emit("stopped", addon.id);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.disabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  getPlugin(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return;
    return addon;
  }

  setupFunctions() {
    _emitter__WEBPACK_IMPORTED_MODULE_6__["default"].on("navigate", this.onSwitch);
    this.observer.observe(document, {
      childList: true,
      subtree: true
    });
  }

  onSwitch() {
    for (let i = 0; i < this.addonList.length; i++) {
      const plugin = this.addonList[i].instance;
      if (!this.state[this.addonList[i].id]) continue;

      if (typeof plugin.onSwitch === "function") {
        try {
          plugin.onSwitch();
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `Unable to fire onSwitch for ${this.addonList[i].name} v${this.addonList[i].version}`, err);
        }
      }
    }
  }

  onMutation(mutation) {
    for (let i = 0; i < this.addonList.length; i++) {
      const plugin = this.addonList[i].instance;
      if (!this.state[this.addonList[i].id]) continue;

      if (typeof plugin.observer === "function") {
        try {
          plugin.observer(mutation);
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `Unable to fire observer for ${this.addonList[i].name} v${this.addonList[i].version}`, err);
        }
      }
    }
  }

}());

/***/ }),

/***/ "./src/modules/reactcomponents.js":
/*!****************************************!*\
  !*** ./src/modules/reactcomponents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patcher */ "./src/modules/patcher.js");


const React = _discordmodules__WEBPACK_IMPORTED_MODULE_0__["default"].React;
const components = {};
const unknownComponents = new Set();
const listeners = new Set();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ReactComponents {
  get named() {
    return components;
  }

  get unknown() {
    return unknownComponents;
  }

  get listeners() {
    return listeners;
  }

  constructor() {
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].after("ReactComponents", React, "createElement", (_, __, returnValue) => {
      this.walkRenderTree(returnValue);
    });
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].instead("ReactComponents", React.Component.prototype, "componentWillMount", thisObject => {
      this.addComponent(thisObject.constructor);
    });
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].instead("ReactComponents", React.Component.prototype, "UNSAFE_componentWillMount", thisObject => {
      this.addComponent(thisObject.constructor);
    });
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].instead("ReactComponents", React.PureComponent.prototype, "componentWillMount", thisObject => {
      this.addComponent(thisObject.constructor);
    });
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].instead("ReactComponents", React.PureComponent.prototype, "UNSAFE_componentWillMount", thisObject => {
      this.addComponent(thisObject.constructor);
    });
  }

  initialize() {
    this.walkReactTree(document.querySelector("#app-mount")._reactRootContainer._internalRoot.current);
  }

  get(name, filter) {
    return new Promise(resolve => {
      if (components[name]) return resolve(components[name]);
      listeners.add({
        name,
        filter,
        resolve
      });
      if (!filter) return;

      for (const component of unknownComponents) {
        if (!filter(component)) continue;
        component.displayName = name;
        unknownComponents.delete(component);
        this.addNamedComponent(component);
      }
    });
  }

  addNamedComponent(component) {
    const name = component.displayName;

    if (!components[name]) {
      components[name] = component;

      for (const listener of listeners) {
        if (listener.name !== name) continue;
        listener.resolve(component);
        listeners.delete(listener);
      }
    }
  }

  addUnknownComponent(component) {
    if (unknownComponents.has(component)) return;

    for (const listener of listeners) {
      if (!listener.filter || !listener.filter(component)) continue;
      component.displayName = listener.name;
      this.addNamedComponent(component);
    }

    if (!component.displayName) unknownComponents.add(component);
  }

  addComponent(component) {
    if (component.displayName) return this.addNamedComponent(component);
    return this.addUnknownComponent(component);
  }

  walkRenderTree(tree) {
    if (!tree) return;
    if (typeof tree.type == "function") this.addComponent(tree.type);
    if (Array.isArray(tree)) for (const value of tree) this.walkRenderTree(value);
    if (tree.props && tree.props.children) this.walkRenderTree(tree.props.children);
  }

  walkReactTree(tree) {
    if (!tree) return;
    if (typeof tree.type == "function") this.addComponent(tree.type);
    if (tree.child) this.walkReactTree(tree.child);
    if (tree.sibling) this.walkReactTree(tree.sibling);
  }

}());

/***/ }),

/***/ "./src/modules/settingsmanager.js":
/*!****************************************!*\
  !*** ./src/modules/settingsmanager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class SettingsManager {
  constructor() {
    this.state = {};
    this.collections = [];
    this.panels = [];
    this.updateStrings = this.updateStrings.bind(this);
  }

  initialize() {
    this.registerCollection("settings", "Settings", _data_data_js__WEBPACK_IMPORTED_MODULE_0__.SettingsConfig);
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("strings-updated", this.updateStrings); // this.patchSections();
  }

  registerCollection(id, name, settings, button = null) {
    if (this.collections.find(c => c.id == id)) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "Already have a collection with id " + id);
    this.collections.push({
      type: "collection",
      id: id,
      name: name,
      settings: settings,
      button: button
    });
    this.setupCollection(id);
    this.loadCollection(id);
    this.updateStrings();
  }

  removeCollection(id) {
    const location = this.collections.findIndex(c => c.id == id);
    if (location < 0) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "No collection with id " + id);
    this.collections.splice(location, 1);
  } // TODO: Move this to SettingsRenderer and also add a registerContentPanel


  registerPanel(id, name, options) {
    if (this.panels.find(p => p.id == id)) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "Already have a panel with id " + id);
    const {
      element,
      onClick,
      order = 1
    } = options;
    const section = {
      id,
      order,
      label: name,
      section: id
    };
    if (onClick) section.clickListener = onClick;
    if (element) section.element = element instanceof _discordmodules__WEBPACK_IMPORTED_MODULE_4__["default"].React.Component ? () => _discordmodules__WEBPACK_IMPORTED_MODULE_4__["default"].React.createElement(element, {}) : typeof element == "function" ? element : () => element;
    this.panels.push(section);
  }

  removePanel(id) {
    const location = this.panels.findIndex(c => c.id == id);
    if (location < 0) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "No collection with id " + id);
    this.panels.splice(location, 1);
  }

  getPath(path, collectionId = "", categoryId = "") {
    const collection = path.length == 3 ? path[0] : collectionId;
    const category = path.length == 3 ? path[1] : path.length == 2 ? path[0] : categoryId;
    const setting = path[path.length - 1];
    return {
      collection,
      category,
      setting
    };
  }

  setupCollection(id) {
    const collection = this.collections.find(c => c.id == id);
    if (!collection) return;
    const categories = collection.settings;
    if (!this.state[collection.id]) this.state[collection.id] = {};

    for (let cc = 0; cc < categories.length; cc++) {
      const category = categories[cc];

      if (category.type != "category") {
        if (!this.state[collection.id].hasOwnProperty(category.id)) this.state[collection.id][category.id] = category.value;
      } else {
        if (!this.state[collection.id].hasOwnProperty(category.id)) this.state[collection.id][category.id] = {};

        for (let s = 0; s < category.settings.length; s++) {
          const setting = category.settings[s];
          if (!this.state[collection.id][category.id].hasOwnProperty(setting.id)) this.state[collection.id][category.id][setting.id] = setting.value;
          if (setting.hasOwnProperty("disabled")) continue;
          if (!setting.enableWith && !setting.disableWith) continue;
          const pathString = setting.enableWith || setting.disableWith;
          const path = this.getPath(pathString.split("."), collection.id, category.id);
          Object.defineProperty(setting, "disabled", {
            get: () => {
              const other = this.state[path.collection][path.category][path.setting];
              return setting.enableWith ? !other : other;
            }
          });
        }
      }
    }
  }

  saveSettings() {
    for (const collection in this.state) this.saveCollection(collection);
  }

  loadSettings() {
    for (const collection in this.state) this.loadCollection(collection);
  }

  saveCollection(collection) {
    _datastore__WEBPACK_IMPORTED_MODULE_2__["default"].setData(collection, this.state[collection]);
  }

  loadCollection(id) {
    const previousState = _datastore__WEBPACK_IMPORTED_MODULE_2__["default"].getData(id);
    if (!previousState) return this.saveCollection(id);

    for (const category in this.state[id]) {
      if (!previousState[category]) Object.assign(previousState, {
        [category]: this.state[id][category]
      });

      for (const setting in this.state[id][category]) {
        if (previousState[category][setting] == undefined) continue;
        const settingObj = this.getSetting(id, category, setting);
        if (settingObj.type == "switch") this.state[id][category][setting] = previousState[category][setting];
        if (settingObj.type == "number") this.state[id][category][setting] = previousState[category][setting];

        if (settingObj.type == "dropdown") {
          const exists = settingObj.options.some(o => o.value == previousState[category][setting]);
          if (exists) this.state[id][category][setting] = previousState[category][setting];
        }
      }
    }

    this.saveCollection(id); // in case new things were added
  }

  onSettingChange(collection, category, id, value) {
    this.state[collection][category][id] = value;
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("setting-updated", collection, category, id, value);
    this.saveCollection(collection);
  }

  getSetting(collection, category, id) {
    if (arguments.length == 2) return this.collections[0].find(c => c.id == arguments[0]).settings.find(s => s.id == arguments[1]);
    return this.collections.find(c => c.id == collection).settings.find(c => c.id == category).settings.find(s => s.id == id);
  }

  get(collection, category, id) {
    if (arguments.length == 2) {
      id = category;
      category = collection;
      collection = "settings";
    }

    if (!this.state[collection] || !this.state[collection][category]) return false;
    return this.state[collection][category][id];
  }

  set(collection, category, id, value) {
    if (arguments.length == 3) {
      value = id;
      id = category;
      category = collection;
      collection = "settings";
    }

    return this.onSettingChange(collection, category, id, value);
  }

  on(collection, category, identifier, callback) {
    const handler = (col, cat, id, value) => {
      if (col !== collection || cat !== category || id !== identifier) return;
      callback(value);
    };

    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("setting-updated", handler);
    return () => {
      _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].off("setting-updated", handler);
    };
  }

  updateStrings() {
    // Update settings collections
    for (let c = 0; c < this.collections.length; c++) {
      const collection = this.collections[c];
      const CS = _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Collections[collection.id];
      if (!CS) continue;
      collection.name = CS.name || collection.name;
      const categories = this.collections[c].settings;

      for (let cat = 0; cat < categories.length; cat++) {
        const category = categories[cat];
        const CatStr = CS[category.id];
        if (!CatStr) continue;
        category.name = CatStr.name || category.name;

        for (let s = 0; s < category.settings.length; s++) {
          const setting = category.settings[s];
          const SetStr = CatStr[setting.id];
          if (!SetStr) continue;
          setting.name = SetStr.name || setting.name;
          setting.note = SetStr.note || setting.note;
          if (!setting.options) continue;

          for (const opt of setting.options) {
            opt.label = SetStr.options[opt.id] || SetStr.options[opt.value] || opt.label;
          }
        }
      }
    } // Update panel labels


    for (let p = 0; p < this.panels.length; p++) {
      const panel = this.panels[p];
      const Str = _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels[panel.id];
      panel.label = Str || panel.label;
    }
  }

}());

/***/ }),

/***/ "./src/modules/strings.js":
/*!********************************!*\
  !*** ./src/modules/strings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/string */ "./src/structs/string.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(_localemanager__WEBPACK_IMPORTED_MODULE_0__["default"].strings, {
  get: function (strings, category) {
    if (!strings.hasOwnProperty(category)) {
      return new Proxy({}, {
        get: function () {
          return `String group "${category}" not found.`;
        }
      });
    }

    return new Proxy(strings[category], {
      get: function (obj, prop) {
        if (typeof obj[prop] == "string") return new _structs_string__WEBPACK_IMPORTED_MODULE_1__["default"](obj[prop]);
        return obj[prop];
      }
    });
  }
}));

/***/ }),

/***/ "./src/modules/thememanager.js":
/*!*************************************!*\
  !*** ./src/modules/thememanager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _addonmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addonmanager */ "./src/modules/addonmanager.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/settings */ "./src/ui/settings.js");










const path = __webpack_require__(/*! path */ "path");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ThemeManager extends _addonmanager__WEBPACK_IMPORTED_MODULE_1__["default"] {
  get name() {
    return "ThemeManager";
  }

  get extension() {
    return ".theme.css";
  }

  get duplicatePattern() {
    return /\.theme\s?\([0-9]+\)\.css/;
  }

  get addonFolder() {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "themes");
  }

  get prefix() {
    return "theme";
  }

  get language() {
    return "css";
  }

  initialize() {
    const errors = super.initialize();
    _settingsmanager__WEBPACK_IMPORTED_MODULE_3__["default"].registerPanel("themes", _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.themes, {
      element: () => _ui_settings__WEBPACK_IMPORTED_MODULE_8__["default"].getAddonPanel(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.themes, this.addonList, this.state, {
        type: this.prefix,
        folder: this.addonFolder,
        onChange: this.toggleTheme.bind(this),
        reload: this.reloadTheme.bind(this),
        refreshList: this.updateThemeList.bind(this),
        saveAddon: this.saveAddon.bind(this),
        editAddon: this.editAddon.bind(this),
        deleteAddon: this.deleteAddon.bind(this),
        prefix: this.prefix
      })
    });
    return errors;
  }
  /* Aliases */


  updateThemeList() {
    return this.updateList();
  }

  loadAllThemes() {
    return this.loadAllAddons();
  }

  enableTheme(idOrAddon) {
    return this.enableAddon(idOrAddon);
  }

  disableTheme(idOrAddon) {
    return this.disableAddon(idOrAddon);
  }

  toggleTheme(id) {
    return this.toggleAddon(id);
  }

  unloadTheme(idOrFileOrAddon) {
    return this.unloadAddon(idOrFileOrAddon);
  }

  loadTheme(filename) {
    return this.loadAddon(filename);
  }

  reloadTheme(idOrFileOrAddon) {
    return this.reloadAddon(idOrFileOrAddon);
  }

  loadAddon(filename, shouldCTE = true) {
    const error = super.loadAddon(filename, shouldCTE);
    if (error && shouldCTE) _ui_modals__WEBPACK_IMPORTED_MODULE_7__["default"].showAddonErrors({
      themes: [error]
    });
    return error;
  }
  /* Overrides */


  initializeAddon(addon) {
    if (!addon.name || !addon.author || !addon.description || !addon.version) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_2__["default"](addon.name || addon.filename, addon.filename, "Addon is missing name, author, description, or version", {
      message: "Addon must provide name, author, description, and version.",
      stack: ""
    }, this.prefix);
  }

  requireAddon(filename) {
    const addon = super.requireAddon(filename);
    addon.css = addon.fileContent;
    delete addon.fileContent;
    if (addon.format == "json") addon.css = addon.css.split("\n").slice(1).join("\n");
    return addon;
  }

  startAddon(id) {
    return this.addTheme(id);
  }

  stopAddon(id) {
    return this.removeTheme(id);
  }

  addTheme(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].injectTheme(addon.slug + "-theme-container", addon.css);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_6__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  removeTheme(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].removeTheme(addon.slug + "-theme-container");
    _ui_toasts__WEBPACK_IMPORTED_MODULE_6__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.disabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

}());

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _domtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domtools */ "./src/modules/domtools.js");



class Utilities {
  static repoUrl(path) {
    return `https://cdn.staticaly.com/gh/BetterDiscord/BetterDiscord/${_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.hash}/${path}`;
  }
  /**
   * Parses a string of HTML and returns the results. If the second parameter is true,
   * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
   * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
   *
   * If the second parameter is false, then the return value will be the list of parsed
   * nodes and there were multiple top level nodes, otherwise the single node is returned.
   * @param {string} html - HTML to be parsed
   * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
   */


  static parseHTML(html, fragment = false) {
    const template = document.createElement("template");
    template.innerHTML = html;
    const node = template.content.cloneNode(true);
    if (fragment) return node;
    return node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
  }

  static getTextArea() {
    return _domtools__WEBPACK_IMPORTED_MODULE_2__["default"].query(".channelTextArea-1LDbYG textarea");
  }

  static insertText(textarea, text) {
    textarea.focus();
    textarea.selectionStart = 0;
    textarea.selectionEnd = textarea.value.length;
    document.execCommand("insertText", false, text);
  }

  static escape(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  static testJSON(data) {
    try {
      return JSON.parse(data);
    } catch (err) {
      return false;
    }
  }

  static suppressErrors(method, message) {
    return (...params) => {
      try {
        return method(...params);
      } catch (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("SuppressedError", "Error occurred in " + message, e);
      }
    };
  }

  static occurrences(source, substring) {
    const regex = new RegExp(substring, "g");
    return (source.match(regex) || []).length;
  }

  static onRemoved(node, callback) {
    const observer = new MutationObserver(mutations => {
      for (let m = 0; m < mutations.length; m++) {
        const mutation = mutations[m];
        const nodes = Array.from(mutation.removedNodes);
        const directMatch = nodes.indexOf(node) > -1;
        const parentMatch = nodes.some(parent => parent.contains(node));

        if (directMatch || parentMatch) {
          observer.disconnect();
          callback();
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true
    });
  }

  static onAdded(selector, callback) {
    if (document.body.querySelector(selector)) return callback(document.body.querySelector(selector));
    const observer = new MutationObserver(mutations => {
      for (let m = 0; m < mutations.length; m++) {
        for (let i = 0; i < mutations[m].addedNodes.length; i++) {
          const mutation = mutations[m].addedNodes[i];
          if (mutation.nodeType === 3) continue; // ignore text

          const directMatch = mutation.matches(selector) && mutation;
          const childrenMatch = mutation.querySelector(selector);

          if (directMatch || childrenMatch) {
            observer.disconnect();
            return callback(directMatch ?? childrenMatch);
          }
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true
    });
    return () => {
      observer.disconnect();
    };
  }

  static isEmpty(obj) {
    if (obj === null || typeof undefined === "undefined" || 0) return true;
    if (typeof obj !== "object") return false;
    if (Array.isArray(obj)) return obj.length == 0;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  }

  static isClass(obj) {
    return typeof obj === "function" && /^\s*class\s+/.test(obj.toString());
  }
  /**
   * Generates an automatically memoizing version of an object.
   * @author Zerebos
   * @param {Object} object - object to memoize
   * @returns {Proxy} the proxy to the object that memoizes properties
   */


  static memoizeObject(object) {
    const proxy = new Proxy(object, {
      get: function (obj, mod) {
        if (!obj.hasOwnProperty(mod)) return undefined;

        if (Object.getOwnPropertyDescriptor(obj, mod).get) {
          const value = obj[mod];
          delete obj[mod];
          obj[mod] = value;
        }

        return obj[mod];
      },
      set: function (obj, mod, value) {
        if (obj.hasOwnProperty(mod)) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("MemoizedObject", "Trying to overwrite existing property");
        obj[mod] = value;
        return obj[mod];
      }
    });
    Object.defineProperty(proxy, "hasOwnProperty", {
      value: function (prop) {
        return this[prop] !== undefined;
      }
    });
    return proxy;
  }
  /**
   * Protects prototypes from external assignment.
   * 
   * Needs some work before full usage
   * @param {Class} Component - component with prototype to protect
   */


  static protectPrototype(Component) {
    const descriptors = Object.getOwnPropertyDescriptors(Component.prototype);

    for (const name in descriptors) {
      const descriptor = descriptors[name];
      descriptor.configurable = false;
      descriptor.enumerable = false;
      if (Object.prototype.hasOwnProperty.call(descriptor, "get")) descriptor.set = () => _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("protectPrototype", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
      if (Object.prototype.hasOwnProperty.call(descriptor, "value") && typeof descriptor.value === "function") descriptor.value.bind(Component.prototype);
      if (Object.prototype.hasOwnProperty.call(descriptor, "writable")) descriptor.writable = false;
    }

    Object.defineProperties(Component.prototype, descriptors);
  }
  /**
   * Deep extends an object with a set of other objects. Objects later in the list
   * of `extenders` have priority, that is to say if one sets a key to be a primitive,
   * it will be overwritten with the next one with the same key. If it is an object,
   * and the keys match, the object is extended. This happens recursively.
   * @param {object} extendee - Object to be extended
   * @param {...object} extenders - Objects to extend with
   * @returns {object} - A reference to `extendee`
   */


  static extend(extendee, ...extenders) {
    for (let i = 0; i < extenders.length; i++) {
      for (const key in extenders[i]) {
        if (extenders[i].hasOwnProperty(key)) {
          if (typeof extendee[key] === "object" && typeof extenders[i][key] === "object") {
            this.extend(extendee[key], extenders[i][key]);
          } else if (typeof extenders[i][key] === "object") {
            extendee[key] = {};
            this.extend(extendee[key], extenders[i][key]);
          } else {
            extendee[key] = extenders[i][key];
          }
        }
      }
    }

    return extendee;
  }
  /**
   * Deep extends an object with a set of other objects. Objects later in the list
   * of `extenders` have priority, that is to say if one sets a key to be a primitive,
   * it will be overwritten with the next one with the same key. If it is an object,
   * and the keys match, the object is extended. This happens recursively.
   * @param {object} extendee - Object to be extended
   * @param {...object} extenders - Objects to extend with
   * @returns {object} - A reference to `extendee`
   */


  static extendTruthy(extendee, ...extenders) {
    for (let i = 0; i < extenders.length; i++) {
      for (const key in extenders[i]) {
        if (extenders[i].hasOwnProperty(key)) {
          if (typeof extendee[key] === "object" && typeof extenders[i][key] === "object") {
            this.extendTruthy(extendee[key], extenders[i][key]);
          } else if (typeof extenders[i][key] === "object") {
            extendee[key] = {};
            this.extendTruthy(extendee[key], extenders[i][key]);
          } else if (extenders[i][key]) {
            extendee[key] = extenders[i][key];
          }
        }
      }
    }

    return extendee;
  }
  /**
   * Format strings with placeholders (`{{placeholder}}`) into full strings.
   * Quick example: `PluginUtilities.formatString("Hello, {{user}}", {user: "Zerebos"})`
   * would return "Hello, Zerebos".
   * @param {string} string - string to format
   * @param {object} values - object literal of placeholders to replacements
   * @returns {string} the properly formatted string
   */


  static formatString(string, values) {
    for (const val in values) {
      let replacement = values[val];
      if (Array.isArray(replacement)) replacement = JSON.stringify(replacement);
      if (typeof replacement === "object" && replacement !== null) replacement = replacement.toString();
      string = string.replace(new RegExp(`{{${val}}}`, "g"), replacement);
    }

    return string;
  }
  /**
   * Finds a value, subobject, or array from a tree that matches a specific filter.
   * @param {object} tree Tree that should be walked
   * @param {callable} searchFilter Filter to check against each object and subobject
   * @param {object} options Additional options to customize the search
   * @param {Array<string>|null} [options.walkable=null] Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable
   * @param {Array<string>} [options.ignore=[]] Array of strings to use as keys to exclude from the search, most helpful when `walkable = null`.
   */


  static findInTree(tree, searchFilter, {
    walkable = null,
    ignore = []
  } = {}) {
    if (typeof searchFilter === "string") {
      if (tree.hasOwnProperty(searchFilter)) return tree[searchFilter];
    } else if (searchFilter(tree)) {
      return tree;
    }

    if (typeof tree !== "object" || tree == null) return undefined;
    let tempReturn;

    if (tree instanceof Array) {
      for (const value of tree) {
        tempReturn = this.findInTree(value, searchFilter, {
          walkable,
          ignore
        });
        if (typeof tempReturn != "undefined") return tempReturn;
      }
    } else {
      const toWalk = walkable == null ? Object.keys(tree) : walkable;

      for (const key of toWalk) {
        if (typeof tree[key] == "undefined" || ignore.includes(key)) continue;
        tempReturn = this.findInTree(tree[key], searchFilter, {
          walkable,
          ignore
        });
        if (typeof tempReturn != "undefined") return tempReturn;
      }
    }

    return tempReturn;
  }
  /**
   * Gets a nested property (if it exists) safely. Path should be something like `prop.prop2.prop3`.
   * Numbers can be used for arrays as well like `prop.prop2.array.0.id`.
   * @param {Object} obj - object to get nested property of
   * @param {string} path - representation of the property to obtain
   */


  static getNestedProp(obj, path) {
    return path.split(/\s?\.\s?/).reduce(function (currentObj, prop) {
      return currentObj && currentObj[prop];
    }, obj);
  }
  /**
   * Finds a value, subobject, or array from a tree that matches a specific filter. Great for patching render functions.
   * @param {object} tree React tree to look through. Can be a rendered object or an internal instance.
   * @param {callable} searchFilter Filter function to check subobjects against.
   */


  static findInRenderTree(tree, searchFilter, {
    walkable = ["props", "children", "child", "sibling"],
    ignore = []
  } = {}) {
    return this.findInTree(tree, searchFilter, {
      walkable,
      ignore
    });
  }
  /**
   * Finds a value, subobject, or array from a tree that matches a specific filter. Great for patching render functions.
   * @param {object} tree React tree to look through. Can be a rendered object or an internal instance.
   * @param {callable} searchFilter Filter function to check subobjects against.
   */


  static findInReactTree(tree, searchFilter) {
    return this.findInTree(tree, searchFilter, {
      walkable: ["props", "children", "return", "stateNode"]
    });
  }

  static getReactInstance(node) {
    if (node.__reactInternalInstance$) return node.__reactInternalInstance$;
    return node[Object.keys(node).find(k => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"))] || null;
  }
  /**
   * Grabs a value from the react internal instance. Allows you to grab
   * long depth values safely without accessing no longer valid properties.
   * @param {HTMLElement} node - node to obtain react instance of
   * @param {object} options - options for the search
   * @param {array} [options.include] - list of items to include from the search
   * @param {array} [options.exclude=["Popout", "Tooltip", "Scroller", "BackgroundFlash"]] - list of items to exclude from the search
   * @param {callable} [options.filter=_=>_] - filter to check the current instance with (should return a boolean)
   * @return {(*|null)} the owner instance or undefined if not found.
   */


  static getOwnerInstance(node, {
    include,
    exclude = ["Popout", "Tooltip", "Scroller", "BackgroundFlash"],
    filter = _ => _
  } = {}) {
    if (node === undefined) return undefined;
    const excluding = include === undefined;
    const nameFilter = excluding ? exclude : include;

    function getDisplayName(owner) {
      const type = owner.type;
      if (!type) return null;
      return type.displayName || type.name || null;
    }

    function classFilter(owner) {
      const name = getDisplayName(owner);
      return name !== null && !!(nameFilter.includes(name) ^ excluding);
    }

    let curr = this.getReactInstance(node);

    for (curr = curr && curr.return; curr !== null; curr = curr.return) {
      const owner = curr.stateNode;
      if (!(owner instanceof HTMLElement) && classFilter(curr) && filter(owner)) return owner;
    }

    return null;
  }

}

/***/ }),

/***/ "./src/modules/webpackmodules.js":
/*!***************************************!*\
  !*** ./src/modules/webpackmodules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filters": () => (/* binding */ Filters),
/* harmony export */   "default": () => (/* binding */ WebpackModules)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/**
 * Allows for grabbing and searching through Discord's webpacked modules.
 * @module WebpackModules
 * @version 0.0.2
 */

/**
 * Checks if a given module matches a set of parameters.
 * @callback module:WebpackModules.Filters~filter
 * @param {*} module - module to check
 * @returns {boolean} - True if the module matches the filter, false otherwise
 */

/**
 * Filters for use with {@link module:WebpackModules} but may prove useful elsewhere.
 */

class Filters {
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties.
   * @param {Array<string>} props - Array of property names
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */
  static byProperties(props, filter = m => m) {
    return module => {
      const component = filter(module);
      if (!component) return false;

      for (let p = 0; p < props.length; p++) {
        if (component[props[p]] === undefined) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties on the object's prototype.
   * @param {Array<string>} fields - Array of property names
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties on the object's prototype
   */


  static byPrototypeFields(fields, filter = m => m) {
    return module => {
      const component = filter(module);
      if (!component) return false;
      if (!component.prototype) return false;

      for (let f = 0; f < fields.length; f++) {
        if (component.prototype[fields[f]] === undefined) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a regex.
   * @param {RegExp} search - A RegExp to check on the module
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */


  static byCode(search, filter = m => m) {
    return module => {
      const method = filter(module);
      if (!method) return false;
      let methodString = "";

      try {
        methodString = method.toString([]);
      } catch (err) {
        methodString = method.toString();
      }

      return methodString.search(search) !== -1;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by strings.
   * @param {...String} search - A RegExp to check on the module
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of strings
   */


  static byString(...strings) {
    return module => {
      let moduleString = "";

      try {
        moduleString = module.toString([]);
      } catch (err) {
        moduleString = module.toString();
      }

      for (const s of strings) {
        if (!moduleString.includes(s)) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties.
   * @param {string} name - Name the module should have
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */


  static byDisplayName(name) {
    return module => {
      return module && module.displayName === name;
    };
  }
  /**
   * Generates a combined {@link module:WebpackModules.Filters~filter} from a list of filters.
   * @param {...module:WebpackModules.Filters~filter} filters - A list of filters
   * @returns {module:WebpackModules.Filters~filter} - Combinatory filter of all arguments
   */


  static combine(...filters) {
    return module => {
      return filters.every(filter => filter(module));
    };
  }

}

const protect = theModule => {
  if (theModule.remove && theModule.set && theModule.clear && theModule.get && !theModule.sort) return null;
  if (!theModule.getToken && !theModule.getEmail && !theModule.showToken) return theModule;
  const proxy = new Proxy(theModule, {
    getOwnPropertyDescriptor: function (obj, prop) {
      if (prop === "getToken" || prop === "getEmail" || prop === "showToken") return undefined;
      return Object.getOwnPropertyDescriptor(obj, prop);
    },
    get: function (obj, func) {
      if (func == "getToken") return () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa";
      if (func == "getEmail") return () => "puppet11112@gmail.com";
      if (func == "showToken") return () => true; // if (func == "__proto__") return proxy;

      return obj[func];
    }
  });
  return proxy;
};

class WebpackModules {
  static find(filter, first = true) {
    return this.getModule(filter, first);
  }

  static findAll(filter) {
    return this.getModule(filter, false);
  }

  static findByUniqueProperties(props, first = true) {
    return first ? this.getByProps(...props) : this.getAllByProps(...props);
  }

  static findByDisplayName(name) {
    return this.getByDisplayName(name);
  }
  /**
   * Finds a module using a filter function.
   * @param {Function} filter A function to use to filter modules
   * @param {Boolean} first Whether to return only the first matching module
   * @return {Any}
   */


  static getModule(filter, first = true) {
    const wrappedFilter = m => {
      try {
        return filter(m);
      } catch (err) {
        return false;
      }
    };

    const modules = this.getAllModules();
    const rm = [];

    for (const index in modules) {
      if (!modules.hasOwnProperty(index)) continue;
      const module = modules[index];
      const {
        exports
      } = module;
      let foundModule = null;
      if (!exports) continue;
      if (exports.__esModule && exports.default && wrappedFilter(exports.default)) foundModule = exports.default;
      if (wrappedFilter(exports)) foundModule = exports;
      if (!foundModule) continue;
      if (first) return protect(foundModule);
      rm.push(protect(foundModule));
    }

    return first || rm.length == 0 ? undefined : rm;
  }
  /**
   * Finds all modules matching a filter function.
   * @param {Function} filter A function to use to filter modules
   */


  static getModules(filter) {
    return this.getModule(filter, false);
  }
  /**
   * Finds a module by its display name.
   * @param {String} name The display name of the module
   * @return {Any}
   */


  static getByDisplayName(name) {
    return this.getModule(Filters.byDisplayName(name), true);
  }
  /**
   * Finds a module using its code.
   * @param {RegEx} regex A regular expression to use to filter modules
   * @param {Boolean} first Whether to return the only the first matching module
   * @return {Any}
   */


  static getByRegex(regex, first = true) {
    return this.getModule(Filters.byCode(regex), first);
  }
  /**
   * Finds a single module using properties on its prototype.
   * @param {...string} prototypes Properties to use to filter modules
   * @return {Any}
   */


  static getByPrototypes(...prototypes) {
    return this.getModule(Filters.byPrototypeFields(prototypes), true);
  }
  /**
   * Finds all modules with a set of properties of its prototype.
   * @param {...string} prototypes Properties to use to filter modules
   * @return {Any}
   */


  static getAllByPrototypes(...prototypes) {
    return this.getModule(Filters.byPrototypeFields(prototypes), false);
  }
  /**
   * Finds a single module using its own properties.
   * @param {...string} props Properties to use to filter modules
   * @return {Any}
   */


  static getByProps(...props) {
    return this.getModule(Filters.byProperties(props), true);
  }
  /**
   * Finds all modules with a set of properties.
   * @param {...string} props Properties to use to filter modules
   * @return {Any}
   */


  static getAllByProps(...props) {
    return this.getModule(Filters.byProperties(props), false);
  }
  /**
   * Finds a single module using a set of strings.
   * @param {...String} props Strings to use to filter modules
   * @return {Any}
   */


  static getByString(...strings) {
    return this.getModule(Filters.byString(...strings), true);
  }
  /**
   * Finds all modules with a set of strings.
   * @param {...String} strings Strings to use to filter modules
   * @return {Any}
   */


  static getAllByString(...strings) {
    return this.getModule(Filters.byString(...strings), false);
  }
  /**
   * Finds a module that lazily loaded.
   * @param {(m) => boolean} filter A function to use to filter modules.
   * @returns {Promise<any>}
   */


  static getLazy(filter) {
    const fromCache = this.getModule(filter);
    if (fromCache) return Promise.resolve(fromCache);
    return new Promise(resolve => {
      const cancel = () => {
        this.removeListener(listener);
      };

      const listener = function (m) {
        const directMatch = filter(m);

        if (directMatch) {
          cancel();
          return resolve(directMatch);
        }

        const defaultMatch = filter(m.default);
        if (!defaultMatch) return;
        cancel();
        resolve(m.default);
      };

      this.addListener(listener);
    });
  }
  /**
   * Discord's __webpack_require__ function.
   */


  static get require() {
    if (this._require) return this._require;
    const id = "bd-webpackmodules";

    let __discord_webpack_require__;

    if (typeof webpackJsonp !== "undefined") {
      __discord_webpack_require__ = window.webpackJsonp.push([[], {
        [id]: (module, exports, __internal_require__) => module.exports = __internal_require__
      }, [[id]]]);
    } else if (typeof window[this.chunkName] !== "undefined") {
      window[this.chunkName].push([[id], {}, __internal_require__ => __discord_webpack_require__ = __internal_require__]);
    }

    delete __discord_webpack_require__.m[id];
    delete __discord_webpack_require__.c[id];
    return this._require = __discord_webpack_require__;
  }
  /**
   * Returns all loaded modules.
   * @return {Array}
   */


  static getAllModules() {
    return this.require.c;
  } // Webpack Chunk Observing


  static get chunkName() {
    return "webpackChunkdiscord_app";
  }

  static initialize() {
    this.handlePush = this.handlePush.bind(this);
    this.listeners = new Set();
    this.__ORIGINAL_PUSH__ = window[this.chunkName].push;
    Object.defineProperty(window[this.chunkName], "push", {
      configurable: true,
      get: () => this.handlePush,
      set: newPush => {
        this.__ORIGINAL_PUSH__ = newPush;
        Object.defineProperty(window[this.chunkName], "push", {
          value: this.handlePush,
          configurable: true,
          writable: true
        });
      }
    });
  }
  /**
   * Adds a listener for when discord loaded a chunk. Useful for subscribing to lazy loaded modules.
   * @param {Function} listener - Function to subscribe for chunks
   * @returns {Function} A cancelling function
   */


  static addListener(listener) {
    this.listeners.add(listener);
    return this.removeListener.bind(this, listener);
  }
  /**
   * Removes a listener for when discord loaded a chunk.
   * @param {Function} listener
   * @returns {boolean}
   */


  static removeListener(listener) {
    return this.listeners.delete(listener);
  }

  static handlePush(chunk) {
    const [, modules] = chunk;

    for (const moduleId in modules) {
      const originalModule = modules[moduleId];

      modules[moduleId] = (module, exports, require) => {
        try {
          Reflect.apply(originalModule, null, [module, exports, require]);
          const listeners = [...this.listeners];

          for (let i = 0; i < listeners.length; i++) {
            try {
              listeners[i](exports);
            } catch (error) {
              _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("WebpackModules", "Could not fire callback listener:", error);
            }
          }
        } catch (error) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("WebpackModules", "Could not patch pushed module", error);
        }
      };

      Object.assign(modules[moduleId], originalModule, {
        toString: () => originalModule.toString()
      });
    }

    return Reflect.apply(this.__ORIGINAL_PUSH__, window[this.chunkName], [chunk]);
  }

}
WebpackModules.initialize();

/***/ }),

/***/ "./src/secure.js":
/*!***********************!*\
  !*** ./src/secure.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentWindowGetter = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
  Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    get: function () {
      const contentWindow = Reflect.apply(contentWindowGetter, this, arguments);
      return new Proxy(contentWindow, {
        getOwnPropertyDescriptor: function (obj, prop) {
          if (prop === "localStorage") return undefined;
          return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, prop) {
          if (prop === "localStorage") return null;
          const val = obj[prop];
          if (typeof val === "function") return val.bind(obj);
          return val;
        }
      });
    }
  }); // Prevent interception by patching Reflect.apply and Function.prototype.bind

  Object.defineProperty(Reflect, "apply", {
    value: Reflect.apply,
    writable: false,
    configurable: false
  });
  Object.defineProperty(Function.prototype, "bind", {
    value: Function.prototype.bind,
    writable: false,
    configurable: false
  });
  const oOpen = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function () {
    const url = arguments[1];
    if (url.toLowerCase().includes("api/webhooks")) return null;
    return Reflect.apply(oOpen, this, arguments);
  };
}

/***/ }),

/***/ "./src/structs/addonerror.js":
/*!***********************************!*\
  !*** ./src/structs/addonerror.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonError)
/* harmony export */ });
class AddonError extends Error {
  constructor(name, filename, message, error, type) {
    super(message);
    this.name = name;
    this.file = filename;
    this.error = error;
    this.type = type;
  }

}

/***/ }),

/***/ "./src/structs/builtin.js":
/*!********************************!*\
  !*** ./src/structs/builtin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuiltinModule)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/emitter */ "./src/modules/emitter.js");
/* harmony import */ var _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _modules_patcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/patcher */ "./src/modules/patcher.js");




class BuiltinModule {
  get name() {
    return "Unnamed Builtin";
  }

  get collection() {
    return "settings";
  }

  get category() {
    return "general";
  }

  get id() {
    return "None";
  }

  async initialize() {
    if (_modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.collection, this.category, this.id)) await this.enable();
    _modules_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].on("setting-updated", (collection, category, id, enabled) => {
      if (collection != this.collection || category !== this.category || id !== this.id) return;
      if (enabled) this.enable();else this.disable();
    });
    this.initialized = true;
  }

  registerSetting(collection, category, id, onEnable, onDisable) {
    if (arguments.length == 4) {
      collection = this.collection;
      category = arguments[0];
      id = arguments[1];
      onEnable = arguments[2];
      onDisable = arguments[3];
    } else if (arguments.length == 3) {
      collection = this.collection;
      category = this.category;
      id = arguments[0];
      onEnable = arguments[1];
      onDisable = arguments[2];
    }

    return _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].on(collection, category, id, value => {
      if (value) onEnable();else onDisable();
    });
  }

  get(collection, category, id) {
    if (arguments.length == 2) {
      collection = this.collection;
      category = arguments[0];
      id = arguments[1];
    } else if (arguments.length == 1) {
      collection = this.collection;
      category = this.category;
      id = arguments[0];
    }

    return _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get(collection, category, id);
  }

  async enable() {
    this.log("Enabled");

    try {
      await this.enabled();
    } catch (e) {
      this.stacktrace("Could not be enabled", e);
    }
  }

  async disable() {
    this.log("Disabled");

    try {
      await this.disabled();
    } catch (e) {
      this.stacktrace("Could not be disabled", e);
    }
  }

  async enabled() {}

  async disabled() {}

  log(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log(this.name, ...message);
  }

  warn(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn(this.name, ...message);
  }

  error(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err(this.name, ...message);
  }

  stacktrace(message, error) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace(this.name, message, error);
  }

  before(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].before(this.name, object, func, callback);
  }

  instead(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].instead(this.name, object, func, callback);
  }

  after(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].after(this.name, object, func, callback);
  }

  unpatchAll() {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].unpatchAll(this.name);
  }

}

/***/ }),

/***/ "./src/structs/classname.js":
/*!**********************************!*\
  !*** ./src/structs/classname.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import Selector from "./selector";

/** 
 * Representation of a Class Name
 * @memberof module:DOMTools
 **/
class ClassName {
  /**
   * 
   * @param {string} name - name of the class to represent
   */
  constructor(name) {
    this.value = name;
  }
  /**
   * Concatenates new class names to the current one using spaces.
   * @param {string} classNames - list of class names to add to this class name
   * @returns {ClassName} returns self to allow chaining
   */


  add(...classNames) {
    for (let i = 0; i < classNames.length; i++) this.value += " " + classNames[i];

    return this;
  }
  /**
   * Returns the raw class name, this is how native function get the value.
   * @returns {string} raw class name.
   */


  toString() {
    return this.value;
  }
  /**
   * Returns the raw class name, this is how native function get the value.
   * @returns {string} raw class name.
   */


  valueOf() {
    return this.value;
  } // /**
  //  * Returns the classname represented as {@link module:DOMTools.Selector}.
  //  * @returns {Selector} selector representation of this class name.
  //  */
  // get selector() {
  //     return new Selector(this.value);
  // }


  get single() {
    return this.value.split(" ")[0];
  }

  get first() {
    return this.value.split(" ")[0];
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassName);

/***/ }),

/***/ "./src/structs/markdown.js":
/*!*********************************!*\
  !*** ./src/structs/markdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleMarkdownExt)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

class SimpleMarkdownExt {
  static parseToReact(str) {
    if (!this._parser) this._initialize();
    return this._renderer(this._parse(str, {
      inline: true
    }));
  }

  static _initialize() {
    const SMD = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.SimpleMarkdown;
    const originalLink = SMD.defaultRules.link.react;
    const newRules = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Utilities.extend({}, SMD.defaultRules, {
      link: {
        react: function () {
          const original = Reflect.apply(originalLink, undefined, arguments);
          original.props.className = "bd-link";
          original.props.target = "_blank";
          original.props.rel = "noopener noreferrer";
          return original;
        }
      }
    });
    this._parse = SMD.parserFor(newRules);
    this._renderer = SMD.reactFor(SMD.ruleOutput(newRules, "react"));
  }

}

/***/ }),

/***/ "./src/structs/metaerror.js":
/*!**********************************!*\
  !*** ./src/structs/metaerror.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetaError)
/* harmony export */ });
class MetaError extends Error {
  constructor(message) {
    super(message);
    this.name = "MetaError";
  }

}

/***/ }),

/***/ "./src/structs/psconnection.js":
/*!*************************************!*\
  !*** ./src/structs/psconnection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


const SortedGuildStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getSortedGuilds");
const AvatarDefaults = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getUserAvatarURL", "DEFAULT_AVATARS");
const InviteActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("acceptInvite"); // const BrowserWindow = require("electron").remote.BrowserWindow;

const betterDiscordServer = {
  name: "BetterDiscord",
  members: 55000,
  categories: ["community", "programming", "support"],
  description: "Official BetterDiscord server for plugins, themes, support, etc",
  identifier: "86004744966914048",
  iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/babd1af3fa6011a50e418a80f4970ceb.webp",
  nativejoin: true,
  invite_code: "BJD2yvJ",
  pinned: true,
  insertDate: 1517806800
};
const ITEMS_PER_PAGE = 50;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PublicServersConnection {
  constructor() {
    this.cache = new Map();
    this.cache.set("featured", [betterDiscordServer]);
    this.cache.set("popular", []);
    this.cache.set("keywords", []);
    this.cache.set("accessToken", "");
  }

  get endPoint() {
    return "https://search.discordservers.com";
  }

  get joinEndPoint() {
    return "https://j.discordservers.com";
  }

  get connectEndPoint() {
    return "https://auth.discordservers.com/info";
  }

  get authorizeEndPoint() {
    return `https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=${this.connectEndPoint}`;
  }

  getDefaultAvatar() {
    return AvatarDefaults.DEFAULT_AVATARS[Math.floor(Math.random() * 5)];
  }

  hasJoined(id) {
    return SortedGuildStore.getFlattenedGuildIds().includes(id);
  }

  async search({
    term = "",
    keyword = "",
    page = 1
  } = {}) {
    if (this.cache.has(term + keyword + page)) return this.cache.get(term + keyword + page);
    const from = (page - 1) * ITEMS_PER_PAGE;
    const queries = [];
    if (keyword) queries.push(`keyword=${keyword.replace(/ /g, "%20").toLowerCase()}`);
    if (term) queries.push(`term=${term.replace(/ /g, "%20")}`);
    if (from) queries.push(`from=${from}`);
    const query = `?${queries.join("&")}`;

    try {
      const response = await fetch(`${this.endPoint}${query}`, {
        method: "GET"
      });
      const data = await response.json();
      const results = {
        servers: data.results,
        size: data.size,
        total: data.total,
        page: Math.ceil(from / ITEMS_PER_PAGE) + 1,
        numPages: Math.ceil(data.total / ITEMS_PER_PAGE)
      };
      this.cache.set(term + keyword + page, results);
      return results;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("PublicServers", "Could not reach search endpoint.", error);
    }
  }

  async getDashboard() {
    const cachedKeywords = this.cache.get("keywords");
    if (cachedKeywords && cachedKeywords.length) return {
      featured: this.cache.get("featured"),
      popular: this.cache.get("popular"),
      keywords: cachedKeywords
    };

    try {
      const response = await fetch(`${this.endPoint}/dashboard`, {
        method: "GET"
      });
      const data = await response.json();
      const featuredFirst = data.results[0].key === "featured";
      const featuredServers = data.results[featuredFirst ? 0 : 1].response.hits;
      const popularServers = data.results[featuredFirst ? 1 : 0].response.hits;
      const mainKeywords = data.mainKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).sort();
      featuredServers.unshift(betterDiscordServer);
      this.cache.set("featured", featuredServers);
      this.cache.set("popular", popularServers);
      this.cache.set("keywords", mainKeywords);
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("PublicServers", "Could not download dashboard.", error);
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    }
  }

  async join(id, native = false) {
    if (native) return InviteActions.acceptInvite(id);

    try {
      await fetch(`${this.joinEndPoint}/${id}`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      return true;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("PublicServers", "Could not join server.");
      return false;
    }
  }

  async checkConnection() {
    try {
      const response = await fetch(this.connectEndPoint, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      this._accessToken = data.access_token;
      return data;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("PublicServers", "Could not verify connection.");
      return false;
    }
  }

  async connect() {
    await _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.IPC.openWindow(this.authorizeEndPoint, {
      windowOptions: this.windowOptions,
      closeOnUrl: this.connectEndPoint
    });
  }

  get windowOptions() {
    return {
      width: 520,
      height: 580,
      backgroundColor: "#282b30",
      show: true,
      resizable: true,
      maximizable: false,
      minimizable: false,
      alwaysOnTop: true,
      frame: false,
      center: true,
      webPreferences: {
        nodeIntegration: false
      }
    };
  }

}());

/***/ }),

/***/ "./src/structs/screen.js":
/*!*******************************!*\
  !*** ./src/structs/screen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
class Screen {
  /** Document/window width */
  static get width() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  /** Document/window height */


  static get height() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}

/***/ }),

/***/ "./src/structs/string.js":
/*!*******************************!*\
  !*** ./src/structs/string.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormattableString)
/* harmony export */ });
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/utilities */ "./src/modules/utilities.js");

const LINK = /\[(.+?)]/;
class FormattableString extends String {
  format(values) {
    return _modules_utilities__WEBPACK_IMPORTED_MODULE_0__["default"].formatString(this, values);
  }

  replaceLink(callback) {
    const match = this.match(LINK);
    if (!match) return [this];
    const array = this.split(match[0]);
    const element = callback(match[1]);
    array.splice(1, 0, element);
    return array;
  }

}

/***/ }),

/***/ "./src/ui/addonerrormodal.jsx":
/*!************************************!*\
  !*** ./src/ui/addonerrormodal.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonErrorModal)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/extension */ "./src/ui/icons/extension.jsx");
/* harmony import */ var _icons_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/theme */ "./src/ui/icons/theme.jsx");
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divider */ "./src/ui/divider.jsx");




const Parser = Object(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("defaultRules", "parse")).defaultRules;

const joinClassNames = (...classNames) => classNames.filter(e => e).join(" ");

class AddonError extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderErrorBody(err) {
    var _err$error;

    const stack = (err === null || err === void 0 ? void 0 : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.stack) ?? err.stack;
    if (!this.state.expanded || !stack) return null;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-body"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_divider__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-stack"
    }, Parser ? Parser.codeBlock.react({
      content: stack,
      lang: "js"
    }, null, {}) : stack));
  }

  render() {
    const err = this.props.err;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      key: `${err.type}-${this.props.index}`,
      className: joinClassNames("bd-addon-error", this.state.expanded ? "expanded" : "collapsed")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-header",
      onClick: () => {
        this.toggle();
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-icon"
    }, err.type == "plugin" ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_extension__WEBPACK_IMPORTED_MODULE_1__["default"], null) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_theme__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-header-inner"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", {
      className: `bd-addon-error-file ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.colorHeaderPrimary} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.secondaryHeader} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size16}`
    }, err.name), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-addon-error-details ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.detailsWrapper}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.detailsIcon,
      "aria-hidden": "false",
      width: "16",
      height: "16",
      viewBox: "0 0 12 12"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "currentColor",
      d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.colorHeaderSecondary} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size12}`
    }, err.message))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-addon-error-expander",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M7 10L12 15 17 10",
      "aria-hidden": "true"
    }))), this.renderErrorBody(err));
  }

}

class AddonErrorModal extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    const tabs = this.getTabs();
    this.state = {
      selectedTab: tabs[0].id
    };
  }

  mergeErrors(errors1 = [], errors2 = []) {
    const list = [];
    const allErrors = [...errors2, ...errors1];

    for (const error of allErrors) {
      if (list.find(e => e.file === error.file)) continue;
      list.push(error);
    }

    return list;
  }

  refreshTabs(pluginErrors, themeErrors) {
    this._tabs = null;
    this.props.pluginErrors = this.mergeErrors(this.props.pluginErrors, pluginErrors);
    this.props.themeErrors = this.mergeErrors(this.props.themeErrors, themeErrors);
    this.forceUpdate();
  }

  generateTab(id, errors) {
    return {
      id: id,
      name: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Panels[id],
      errors: errors
    };
  }

  getTabs() {
    return this._tabs || (this._tabs = [this.props.pluginErrors.length && this.generateTab("plugins", this.props.pluginErrors), this.props.themeErrors.length && this.generateTab("themes", this.props.themeErrors)].filter(e => e));
  }

  switchToTab(id) {
    this.setState({
      selectedTab: id
    });
  }

  render() {
    const selectedTab = this.getTabs().find(e => this.state.selectedTab === e.id);
    const tabs = this.getTabs();
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-error-modal-header ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.header} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.separator}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", {
      className: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Titles.defaultColor} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size14} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Titles.h4} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Margins.marginBottom8}`
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.addonErrors), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-tab-bar"
    }, tabs.map(tab => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      onClick: () => {
        this.switchToTab(tab.id);
      },
      className: joinClassNames("bd-tab-item", tab.id === selectedTab.id && "selected")
    }, tab.name)))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-error-modal-content ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.content} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Scrollers.thin}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-errors"
    }, selectedTab.errors.map((error, index) => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(AddonError, {
      index: index,
      err: error
    })))));
  }

}

/***/ }),

/***/ "./src/ui/blankslates/emptyimage.jsx":
/*!*******************************************!*\
  !*** ./src/ui/blankslates/emptyimage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyImage)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structs/markdown */ "./src/structs/markdown.js");


class EmptyImage extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-container ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyContainer}` + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyImage}`
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-header ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyHeader}`
    }, this.props.title || "You don't have anything!"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-message`
    }, _structs_markdown__WEBPACK_IMPORTED_MODULE_1__["default"].parseToReact(this.props.message || "You should probably get something.")), this.props.children);
  }

}

/***/ }),

/***/ "./src/ui/blankslates/noresults.jsx":
/*!******************************************!*\
  !*** ./src/ui/blankslates/noresults.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoResults)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/magnifyingglass */ "./src/ui/icons/magnifyingglass.jsx");


class NoResults extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-empty-results" + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-empty-results-text"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.Strings.SEARCH_NO_RESULTS || ""));
  }

}

/***/ }),

/***/ "./src/ui/customcss/checkbox.jsx":
/*!***************************************!*\
  !*** ./src/ui/customcss/checkbox.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Checkbox extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      checked: this.props.checked || false
    };
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-item"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-label label-JWQiNe da-label"
    }, this.props.text), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-wrapper checkbox-3kaeSU da-checkbox checkbox-3EVISJ da-checkbox",
      onClick: this.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-inner checkboxInner-3yjcPe da-checkboxInner"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      className: "checkbox checkboxElement-1qV33p da-checkboxElement",
      checked: this.state.checked,
      type: "checkbox"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null)));
  }

  onClick() {
    this.props.onChange(!this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
  }

}

/***/ }),

/***/ "./src/ui/customcss/csseditor.jsx":
/*!****************************************!*\
  !*** ./src/ui/customcss/csseditor.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CssEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/ui/customcss/editor.jsx");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.jsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/save */ "./src/ui/icons/save.jsx");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");
/* harmony import */ var _icons_detach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/detach */ "./src/ui/icons/detach.jsx");

 // import Checkbox from "./checkbox";





class CssEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.hasUnsavedChanges = false;
    this.onChange = this.onChange.bind(this);
    this.toggleLiveUpdate = this.toggleLiveUpdate.bind(this);
    this.updateCss = this.updateCss.bind(this);
    this.saveCss = this.saveCss.bind(this);
    this.openDetached = this.props.openDetached ? this.openDetached.bind(this) : null;
    this.openNative = this.openNative.bind(this);
    this.updateEditor = this.updateEditor.bind(this);
    this.controls = [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.update,
      onClick: this.updateCss
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_save__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.save,
      onClick: this.saveCss
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openNative,
      onClick: this.openNative
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Collections.settings.customcss.liveUpdate.name,
      type: "checkbox",
      onChange: this.toggleLiveUpdate,
      checked: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "customcss", "liveUpdate"),
      side: "right"
    }];
    if (this.openDetached) this.controls.push({
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_detach__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openDetached,
      onClick: this.openDetached,
      side: "right"
    });
  }

  componentDidMount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.on("customcss-updated", this.updateEditor);
  }

  componentWillUnmount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.off("customcss-updated", this.updateEditor);
  }

  updateEditor(newCSS) {
    if (!this.editor) return;
    this.editor.value = newCSS;
  }

  get value() {
    return this.editor.session.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    return this.editor.resize();
  }

  setEditorRef(editor) {
    this.editor = editor;
    if (this.props.editorRef && typeof this.props.editorRef.current !== "undefined") this.props.editorRef.current = editor;else if (this.props.editorRef) this.props.editorRef = editor;
  }

  onChange() {
    this.hasUnsavedChanges = true;
    if (this.props.onChange) this.props.onChange(...arguments);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.setEditorRef.bind(this),
      readOnly: this.props.readOnly,
      id: this.props.id || "bd-customcss-editor",
      onChange: this.onChange,
      controls: this.controls,
      value: this.props.css
    });
  }

  toggleLiveUpdate(checked) {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.set("settings", "customcss", "liveUpdate", checked);
  }

  updateCss(event, newCss) {
    if (this.props.update) this.props.update(newCss);
  }

  saveCss(event, newCss) {
    this.hasUnsavedChanges = false;
    if (this.props.save) this.props.save(newCss);
  }

  openDetached(event, currentCSS) {
    if (!this.props.openDetached) return;
    this.props.openDetached(currentCSS);
  }

  openNative() {
    if (this.props.openNative) this.props.openNative();
  }

}

/***/ }),

/***/ "./src/ui/customcss/editor.jsx":
/*!*************************************!*\
  !*** ./src/ui/customcss/editor.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ "./src/ui/customcss/checkbox.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByDisplayName("Tooltip");
const languages = ["abap", "abc", "actionscript", "ada", "apache_conf", "asciidoc", "assembly_x86", "autohotkey", "batchfile", "bro", "c_cpp", "c9search", "cirru", "clojure", "cobol", "coffee", "coldfusion", "csharp", "csound_document", "csound_orchestra", "csound_score", "css", "curly", "d", "dart", "diff", "dockerfile", "dot", "drools", "dummy", "dummysyntax", "eiffel", "ejs", "elixir", "elm", "erlang", "forth", "fortran", "ftl", "gcode", "gherkin", "gitignore", "glsl", "gobstones", "golang", "graphqlschema", "groovy", "haml", "handlebars", "haskell", "haskell_cabal", "haxe", "hjson", "html", "html_elixir", "html_ruby", "ini", "io", "jack", "jade", "java", "javascript", "json", "jsoniq", "jsp", "jssm", "jsx", "julia", "kotlin", "latex", "less", "liquid", "lisp", "livescript", "logiql", "lsl", "lua", "luapage", "lucene", "makefile", "markdown", "mask", "matlab", "maze", "mel", "mushcode", "mysql", "nix", "nsis", "objectivec", "ocaml", "pascal", "perl", "pgsql", "php", "pig", "powershell", "praat", "prolog", "properties", "protobuf", "python", "r", "razor", "rdoc", "red", "rhtml", "rst", "ruby", "rust", "sass", "scad", "scala", "scheme", "scss", "sh", "sjs", "smarty", "snippets", "soy_template", "space", "sql", "sqlserver", "stylus", "svg", "swift", "tcl", "tex", "text", "textile", "toml", "tsx", "twig", "typescript", "vala", "vbscript", "velocity", "verilog", "vhdl", "wollok", "xml", "xquery", "yaml", "django"];
class CodeEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  static get defaultId() {
    return "bd-editor";
  }

  constructor(props) {
    super(props);
    this.props.theme = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore && _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore.theme === "light" ? "vs" : "vs-dark";
    this.props.language = this.props.language.toLowerCase().replace(/ /g, "_");
    if (!languages.includes(this.props.language)) this.props.language = CodeEditor.defaultProps.language;
    this.bindings = [];
    this.resize = this.resize.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  static get defaultProps() {
    return {
      controls: [],
      language: "css",
      id: this.defaultId
    };
  }

  componentDidMount() {
    var _window$monaco;

    if ((_window$monaco = window.monaco) !== null && _window$monaco !== void 0 && _window$monaco.editor) {
      this.editor = window.monaco.editor.create(document.getElementById(this.props.id), {
        value: this.props.value,
        language: this.props.language,
        theme: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore.theme == "light" ? "vs" : "vs-dark",
        fontSize: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "fontSize"),
        lineNumbers: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "lineNumbers"),
        minimap: {
          enabled: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "minimap")
        },
        hover: {
          enabled: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "hover")
        },
        quickSuggestions: {
          other: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions"),
          comments: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions"),
          strings: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions")
        },
        renderWhitespace: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "renderWhitespace")
      });
      this.bindings.push(this.editor.onDidChangeModelContent(this.onChange));
    } else {
      const textarea = document.createElement("textarea");
      textarea.className = "bd-fallback-editor";
      textarea.value = this.props.value;

      textarea.onchange = e => this.onChange(e.target.value);

      textarea.oninput = e => this.onChange(e.target.value);

      this.editor = {
        dispose: () => textarea.remove(),
        getValue: () => textarea.value,
        setValue: value => textarea.value = value,
        layout: () => {}
      };
      document.getElementById(this.props.id).appendChild(textarea);
    }

    if (_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore) _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore.addChangeListener(this.onThemeChange);
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    if (_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore) _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore.removeChangeListener(this.onThemeChange);

    for (const binding of this.bindings) binding.dispose();

    this.editor.dispose();
  }

  onThemeChange() {
    var _window$monaco2;

    const newTheme = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.UserSettingsStore.theme === "light" ? "vs" : "vs-dark";
    if (newTheme === this.props.theme) return;
    this.props.theme = newTheme;
    if ((_window$monaco2 = window.monaco) !== null && _window$monaco2 !== void 0 && _window$monaco2.editor) window.monaco.editor.setTheme(this.props.theme);
  }

  get value() {
    return this.editor.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  onChange() {
    if (this.props.onChange) this.props.onChange(this.value);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    this.editor.layout();
  }

  buildControl(control) {
    if (control.type == "checkbox") return this.makeCheckbox(control);
    return this.makeButton(control);
  }

  makeCheckbox(checkbox) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: checkbox.label,
      onChange: checkbox.onChange,
      checked: checkbox.checked
    });
  }

  makeButton(button) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: button.tooltip
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", _extends({}, props, {
        className: "btn btn-primary",
        onClick: event => {
          button.onClick(event, this.value);
        }
      }), button.label);
    });
  }

  render() {
    if (this.editor && this.editor.layout) this.editor.layout();
    const controlsLeft = this.props.controls.filter(c => c.side != "right").map(this.buildControl.bind(this));
    const controlsRight = this.props.controls.filter(c => c.side == "right").map(this.buildControl.bind(this));
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-editor-panel",
      className: this.props.theme
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-editor-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "controls-section controls-left"
    }, controlsLeft), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "controls-section controls-right"
    }, controlsRight)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "editor-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: this.props.id,
      className: "editor " + this.props.theme
    })));
  }

}

/***/ }),

/***/ "./src/ui/divider.jsx":
/*!****************************!*\
  !*** ./src/ui/divider.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  className
}) => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: `bd-divider ${className || ""}`
}));

/***/ }),

/***/ "./src/ui/emote.js":
/*!*************************!*\
  !*** ./src/ui/emote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BDEmote)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

const TooltipWrapper = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByDisplayName("Tooltip");
class BDEmote extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAnimate: !this.animateOnHover,
      isFavorite: this.props.isFavorite
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  get animateOnHover() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("emotes", "general", "animateOnHover");
  }

  get label() {
    return this.props.modifier ? `${this.props.name}:${this.props.modifier}` : this.props.name;
  }

  get modifierClass() {
    return this.props.modifier ? ` emote${this.props.modifier}` : "";
  }

  onMouseEnter() {
    if (!this.state.shouldAnimate && this.animateOnHover) this.setState({
      shouldAnimate: true
    });
  }

  onMouseLeave() {
    if (this.state.shouldAnimate && this.animateOnHover) this.setState({
      shouldAnimate: false
    });
  }

  onClick(e) {
    if (this.props.onClick) this.props.onClick(e);
  }

  toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.isFavorite) _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.emit("emotes-favorite-removed", this.label);else _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.emit("emotes-favorite-added", this.label, this.props.url);
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  render() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TooltipWrapper, {
      color: "primary",
      position: "top",
      text: this.label,
      delay: 750
    }, childProps => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", Object.assign({
        className: "emotewrapper" + (this.props.jumboable ? " jumboable" : ""),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      }, childProps), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
        draggable: false,
        className: "emote" + this.modifierClass + (this.props.jumboable ? " jumboable" : "") + (!this.state.shouldAnimate ? " stop-animation" : ""),
        dataModifier: this.props.modifier,
        alt: this.label,
        src: this.props.url
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
        className: "fav" + (this.state.isFavorite ? " active" : ""),
        title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Emotes.favoriteAction,
        type: "button",
        onClick: this.toggleFavorite
      }));
    });
  }

}

/***/ }),

/***/ "./src/ui/emoteicon.jsx":
/*!******************************!*\
  !*** ./src/ui/emoteicon.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmoteIcon)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builtins/emotes/emotes */ "./src/builtins/emotes/emotes.js");


const ContextMenuActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("openContextMenu");
const {
  MenuItem,
  MenuGroup
} = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.find(m => m.MenuRadioItem && !m.default);
const ContextMenu = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("default", "MenuStyle").default;
const {
  ComponentDispatch
} = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("ComponentDispatch");
class EmoteIcon extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-item",
      onClick: this.handleOnClick.bind(this),
      onContextMenu: this.handleOnContextMenu.bind(this)
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
      src: this.props.url,
      alt: this.props.emote,
      title: this.props.emote
    }));
  }

  handleOnClick() {
    this.insertText(this.props.emote);
  }

  handleOnContextMenu(e) {
    ContextMenuActions.openContextMenu(e, () => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ContextMenu, {
      navId: "EmoteContextMenu",
      onClose: ContextMenuActions.closeContextMenu
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(MenuGroup, null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(MenuItem, {
      label: _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_1__["default"].isFavorite(this.props.emote) ? "Remove Favorite" : "Add Favorite",
      id: "favorite",
      action: this.handlefavorite.bind(this),
      onClose: ContextMenuActions.closeContextMenu
    }))));
  }

  handlefavorite() {
    ContextMenuActions.closeContextMenu();
    _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_1__["default"].isFavorite(this.props.emote) ? _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_1__["default"].removeFavorite(this.props.emote) : _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_1__["default"].addFavorite(this.props.emote, this.props.url);
  }

  insertText(emote) {
    ComponentDispatch.dispatchToLastSubscribed("INSERT_TEXT", {
      content: emote
    });
  }

}

/***/ }),

/***/ "./src/ui/emotemenucard.jsx":
/*!**********************************!*\
  !*** ./src/ui/emotemenucard.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmoteMenuCard)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

const {
  ScrollerAuto: Scroller
} = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("ScrollerAuto");
class EmoteMenuCard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-emote-menu`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Scroller, {
      className: "bd-emote-scroller"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-emote-menu-inner"
    }, this.props.children)));
  }

}

/***/ }),

/***/ "./src/ui/errorboundary.jsx":
/*!**********************************!*\
  !*** ./src/ui/errorboundary.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


class ErrorBoundary extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      onClick: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.IPC.openDevTools(),
      className: "react-error"
    }, "There was an unexpected Error. Click to open console for more details.");
    return this.props.children;
  }

}
const originalRender = ErrorBoundary.prototype.render;
Object.defineProperty(ErrorBoundary.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("ErrorBoundary", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/floating/container.jsx":
/*!***************************************!*\
  !*** ./src/ui/floating/container.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ "./src/ui/floating/window.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class FloatingWindowContainer extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windows: []
    };
  }

  get minY() {
    const appContainer = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOM.query(`#app-mount > div[class*="app-"]`);
    if (appContainer) return appContainer.offsetTop;
    return 0;
  }

  render() {
    return this.state.windows.map(window => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_window__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, window, {
      close: this.close.bind(this, window.id),
      minY: this.minY,
      key: window.id
    }), window.children));
  }

  open(window) {
    this.setState(state => {
      state.windows.push(window);
      return {
        windows: state.windows
      };
    });
  }

  close(id) {
    this.setState(state => {
      return {
        windows: state.windows.filter(w => {
          if (w.id == id && w.onClose) w.onClose();
          return w.id != id;
        })
      };
    });
  }

  static get id() {
    return "floating-windows";
  }

  static get root() {
    if (this._root) return this._root;
    const container = document.createElement("div");
    container.id = this.id;
    document.body.append(container);
    return this._root = container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingWindowContainer);

/***/ }),

/***/ "./src/ui/floating/window.jsx":
/*!************************************!*\
  !*** ./src/ui/floating/window.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingWindow)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structs/screen */ "./src/structs/screen.js");
/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/close */ "./src/ui/icons/close.jsx");
/* harmony import */ var _icons_fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/fullscreen */ "./src/ui/icons/fullscreen.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");




 // const Draggable = WebpackModules.getByDisplayName("Draggable");
// {
//     "dragAnywhere": true,
//     "className": "pictureInPictureWindow-1B5qSe",
//     "maxX": 1969,
//     "maxY": this.maxY,
//     "onDragStart": "ƒ () {}",
//     "onDrag": "ƒ () {}",
//     "onDragEnd": "ƒ () {}",
//     "children": "<div />",
//     "initialX": 0,
//     "initialY": 0
//   }

class FloatingWindow extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.offX = 0;
    this.offY = 0;
    this.maxX = this.props.maxX || _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].width;
    this.maxY = this.props.maxY || _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].height;
    this.minX = this.props.minX || 0;
    this.minY = this.props.minY || 0;
    this.titlebar = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.window = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.close = this.close.bind(this);
    this.maximize = this.maximize.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onResizeStart = this.onResizeStart.bind(this);
  }

  componentDidMount() {
    this.window.current.addEventListener("mousedown", this.onResizeStart, false);
    this.titlebar.current.addEventListener("mousedown", this.onDragStart, false);
    document.addEventListener("mouseup", this.onDragStop, false);
  }

  onResizeStart() {
    this.currentWidth = this.window.current.offsetWidth;
    this.currentHeight = this.window.current.offsetHeight;
  }

  onDragStop() {
    document.removeEventListener("mousemove", this.onDrag, true);
    const width = this.window.current.offsetWidth;
    const height = this.window.current.offsetHeight;

    if (width != this.currentWidth || height != this.currentHeight) {
      if (this.props.onResize) this.props.onResize();
      const left = parseInt(this.window.current.style.left);
      const top = parseInt(this.window.current.style.top);
      if (left + width >= this.maxX) this.window.current.style.width = this.maxX - left + "px";
      if (top + height >= this.maxY) this.window.current.style.height = this.maxY - top + "px";
    }

    this.currentWidth = width;
    this.currentHeight = height;
  }

  onDragStart(e) {
    const div = this.window.current;
    this.offY = e.clientY - parseInt(div.offsetTop);
    this.offX = e.clientX - parseInt(div.offsetLeft);
    document.addEventListener("mousemove", this.onDrag, true);
  }

  onDrag(e) {
    const div = this.window.current;
    let newTop = e.clientY - this.offY;
    if (newTop <= this.minY) newTop = this.minY;
    if (newTop + this.currentHeight >= this.maxY) newTop = this.maxY - this.currentHeight;
    let newLeft = e.clientX - this.offX;
    if (newLeft <= this.minX) newLeft = this.minX;
    if (newLeft + this.currentWidth >= this.maxX) newLeft = this.maxX - this.currentWidth;
    div.style.top = newTop + "px";
    div.style.left = newLeft + "px";
  }

  componentWillUnmount() {
    this.titlebar.current.removeEventListener("mousedown", this.onDragStart, false);
    document.removeEventListener("mouseup", this.onDragStop, false);
  }

  render() {
    const top = this.props.center ? _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].height / 2 - this.props.height / 2 : this.props.top;
    const left = this.props.center ? _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].width / 2 - this.props.width / 2 : this.props.left; // console.log(top, left);

    const className = `floating-window${` ${this.props.className}` || ""}${this.props.resizable ? " resizable" : ""}${this.state.modalOpen ? " modal-open" : ""}`;
    const styles = {
      height: this.props.height,
      width: this.props.width,
      left: left || 0,
      top: top || 0
    };
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: this.props.id,
      className: className,
      ref: this.window,
      style: styles
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-titlebar",
      ref: this.titlebar
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
      className: "title"
    }, this.props.title), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-buttons"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "button maximize-button",
      onClick: this.maximize
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_fullscreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "18px"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "button close-button",
      onClick: this.close
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-content"
    }, this.props.children));
  }

  maximize() {
    this.window.current.style.width = "100%";
    this.window.current.style.height = "100%";
    if (this.props.onResize) this.props.onResize();
    const width = this.window.current.offsetWidth;
    const height = this.window.current.offsetHeight;
    const left = parseInt(this.window.current.style.left);
    const top = parseInt(this.window.current.style.top);
    const right = left + width;
    const bottom = top + height; // Prevent expanding off the bottom and right and readjust position

    if (bottom > this.maxY) this.window.current.style.top = this.maxY - height + "px";
    if (right > this.maxX) this.window.current.style.left = this.maxX - width + "px";
    const newLeft = parseInt(this.window.current.style.left);
    const newTop = parseInt(this.window.current.style.top); // For small screens it's possible this pushes us off the other direction... we need to readjust size

    if (newTop < this.minY) {
      const difference = this.minY - newTop;
      this.window.current.style.top = this.minY + "px";
      this.window.current.style.height = height - difference + "px";
    }

    if (newLeft < this.minX) {
      const difference = this.minX - newLeft;
      this.window.current.style.left = this.minX + "px";
      this.window.current.style.height = width - difference + "px";
    }
  }

  async close() {
    let shouldClose = true;
    const confirmClose = typeof this.props.confirmClose == "function" ? this.props.confirmClose() : this.props.confirmClose;

    if (confirmClose) {
      this.setState({
        modalOpen: true
      });
      shouldClose = await this.confirmClose();
      this.setState({
        modalOpen: false
      });
    }

    if (this.props.close && shouldClose) this.props.close();
  }

  confirmClose() {
    return new Promise(resolve => {
      _modals__WEBPACK_IMPORTED_MODULE_4__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.confirmAction, this.props.confirmationText, {
        danger: true,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.close,
        onConfirm: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/ui/floatingwindows.js":
/*!***********************************!*\
  !*** ./src/ui/floatingwindows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingWindows)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _floating_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating/container */ "./src/ui/floating/container.jsx");


/* eslint-disable new-cap */

const LayerProviders = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("AppReferencePositionLayer");
class FloatingWindows {
  static initialize() {
    const containerRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    const container = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_floating_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: containerRef
    });
    const wrapped = LayerProviders ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(LayerProviders.AppLayerProvider().props.layerContext.Provider, {
      value: [document.querySelector("#app-mount > .layerContainer-yqaFcK")]
    }, container) // eslint-disable-line new-cap
    : container;
    const div = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOM.createElement(`<div id="floating-windows-layer">`);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager.bdBody.append(div);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.render(wrapped, div);
    this.ref = containerRef;
  }

  static open(window) {
    if (!this.ref) this.initialize();
    return this.ref.current.open(window);
  }

}

/***/ }),

/***/ "./src/ui/icons/bdlogo.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/bdlogo.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BDLogo)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class BDLogo extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-logo " + this.props.className,
      height: "100%",
      width: this.props.size || "16px",
      viewBox: "0 0 2000 2000"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#3E82E5",
      d: "M1402.2,631.7c-9.7-353.4-286.2-496-642.6-496H68.4v714.1l442,398V490.7h257c274.5,0,274.5,344.9,0,344.9H597.6v329.5h169.8c274.5,0,274.5,344.8,0,344.8h-699v354.9h691.2c356.3,0,632.8-142.6,642.6-496c0-162.6-44.5-284.1-122.9-368.6C1357.7,915.8,1402.2,794.3,1402.2,631.7z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#FFFFFF",
      d: "M1262.5,135.2L1262.5,135.2l-76.8,0c26.6,13.3,51.7,28.1,75,44.3c70.7,49.1,126.1,111.5,164.6,185.3c39.9,76.6,61.5,165.6,64.3,264.6l0,1.2v1.2c0,141.1,0,596.1,0,737.1v1.2l0,1.2c-2.7,99-24.3,188-64.3,264.6c-38.5,73.8-93.8,136.2-164.6,185.3c-22.6,15.7-46.9,30.1-72.6,43.1h72.5c346.2,1.9,671-171.2,671-567.9V716.7C1933.5,312.2,1608.7,135.2,1262.5,135.2z"
    })));
  }

}

/***/ }),

/***/ "./src/ui/icons/close.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/close.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseButton)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class CloseButton extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 12 12",
      style: {
        width: "18px",
        height: "18px"
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      className: "background",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h12v12H0"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      className: "fill",
      fill: "#dcddde",
      d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
    })));
  }

}

/***/ }),

/***/ "./src/ui/icons/cog.jsx":
/*!******************************!*\
  !*** ./src/ui/icons/cog.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cog)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Cog extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 20 20",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h20v20H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/delete.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/delete.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Delete)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Delete extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/detach.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/detach.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detach)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Detach extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/dollarsign.jsx":
/*!*************************************!*\
  !*** ./src/ui/icons/dollarsign.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DollarSign)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class DollarSign extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/downarrow.jsx":
/*!************************************!*\
  !*** ./src/ui/icons/downarrow.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DownArrow)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class DownArrow extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "currentColor",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/edit.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/edit.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Edit extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/extension.jsx":
/*!************************************!*\
  !*** ./src/ui/icons/extension.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Extension)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Extension extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick,
      className: this.props.className
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/favorite.jsx":
/*!***********************************!*\
  !*** ./src/ui/icons/favorite.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Favorite)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Favorite extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      "aria-hidden": "false",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "currentColor",
      d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/fullscreen.jsx":
/*!*************************************!*\
  !*** ./src/ui/icons/fullscreen.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullScreen)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class FullScreen extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/github.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/github.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GitHub)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class GitHub extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/globe.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/globe.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Globe extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/grid.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/grid.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Grid extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/history.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/history.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class History extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      className: this.props.className || "",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/list.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/list.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class List extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/magnifyingglass.jsx":
/*!******************************************!*\
  !*** ./src/ui/icons/magnifyingglass.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MagnifyingGlass)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class MagnifyingGlass extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "160px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: size,
        height: size
      },
      viewBox: "0 0 160 160"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      transform: "translate(9 9)"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "rgba(0,0,0,0.1)",
      d: "M42.1262,100.7598 C25.1382,83.7718 25.1382,56.2288 42.1262,39.2408 C59.1142,22.2538 86.6572,22.2538 103.6452,39.2408 C120.6322,56.2288 120.6322,83.7718 103.6452,100.7598 C86.6572,117.7478 59.1142,117.7478 42.1262,100.7598"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M121.8938,119.4976 C94.5578,146.8346 50.2358,146.8346 22.8988,119.4976 C-4.4382,92.1616 -4.4382,47.8396 22.8988,20.5026 C50.2358,-6.8334 94.5578,-6.8344 121.8938,20.5026 C149.2308,47.8396 149.2308,92.1616 121.8938,119.4976 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "4 5"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#C9D2F0",
      d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#9F7373",
      d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#F3F9FF",
      d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 M108.007,34.3897 C88.34,14.7227 56.453,14.7227 36.786,34.3897 C17.119,54.0567 17.119,85.9437 36.786,105.6107 C56.453,125.2777 88.34,125.2777 108.007,105.6107 C127.674,85.9437 127.674,54.0567 108.007,34.3897"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M116.386 94.545C115.853 95.498 115.287 96.438 114.688 97.362M108.0071 105.6109C88.3401 125.2779 56.4531 125.2779 36.7861 105.6109 17.1191 85.9439 17.1191 54.0569 36.7861 34.3899 56.4531 14.7229 88.3401 14.7229 108.0071 34.3899 122.7701 49.1529 126.4511 70.7999 119.0511 88.9969",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", {
      width: "160",
      height: "160",
      y: "-1"
    })));
  }

}

/***/ }),

/***/ "./src/ui/icons/next.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/next.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ArrowRight extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M10 17l5-5-5-5v10z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 24V0h24v24H0z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/patreon.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/patreon.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patreon)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Patreon extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m0 .5h4.219v23h-4.219z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m15.384.5c-4.767 0-8.644 3.873-8.644 8.633 0 4.75 3.877 8.61 8.644 8.61 4.754 0 8.616-3.865 8.616-8.61 0-4.759-3.863-8.633-8.616-8.633z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/previous.jsx":
/*!***********************************!*\
  !*** ./src/ui/icons/previous.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ArrowLeft extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M14 7l-5 5 5 5V7z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M24 0v24H0V0h24z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/reload.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/reload.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReloadIcon)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ReloadIcon extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      onClick: this.props.onClick,
      fill: "#dcddde",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/save.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/save.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Save extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/search.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/search.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Search extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/support.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/support.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Support)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Support extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/theme.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/theme.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Theme extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick,
      className: this.props.className
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/twitch.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/twitch.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Twitch)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Twitch extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "currentColor",
      d: "M40.1 32L10 108.9v314.3h107V480h60.2l56.8-56.8h87l117-117V32H40.1zm357.8 254.1L331 353H224l-56.8 56.8V353H76.9V72.1h321v214zM331 149v116.9h-40.1V149H331zm-107 0v116.9h-40.1V149H224z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/misc/addoneditor.jsx":
/*!*************************************!*\
  !*** ./src/ui/misc/addoneditor.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _customcss_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customcss/editor */ "./src/ui/customcss/editor.jsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/save */ "./src/ui/icons/save.jsx");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");




class AddonEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.hasUnsavedChanges = false;
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.openNative = this.openNative.bind(this);
    this.update = this.update.bind(this);
    this.controls = [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.save,
      onClick: this.save
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openNative,
      onClick: this.openNative
    }];
  }

  update() {
    this.forceUpdate();
  }

  updateEditor(newCSS) {
    if (!this.editor) return;
    this.editor.value = newCSS;
  }

  get value() {
    return this.editor.session.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    return this.editor.resize();
  }

  setEditorRef(editor) {
    this.editor = editor;
    if (this.props.editorRef && typeof this.props.editorRef.current !== "undefined") this.props.editorRef.current = editor;else if (this.props.editorRef) this.props.editorRef = editor;
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_customcss_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.setEditorRef.bind(this),
      language: this.props.language,
      id: this.props.id || "bd-addon-editor",
      controls: this.controls,
      value: this.props.content,
      onChange: this.onChange
    });
  }

  onChange() {
    this.hasUnsavedChanges = true;
  }

  save(event, content) {
    this.hasUnsavedChanges = false;
    if (this.props.save) this.props.save(content);
  }

  openNative() {
    if (this.props.openNative) this.props.openNative();
  }

}

/***/ }),

/***/ "./src/ui/modals.js":
/*!**************************!*\
  !*** ./src/ui/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modals)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structs/string */ "./src/structs/string.js");
/* harmony import */ var _addonerrormodal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addonerrormodal */ "./src/ui/addonerrormodal.jsx");
/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorboundary */ "./src/ui/errorboundary.jsx");






class Modals {
  static get shouldShowAddonErrors() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("settings", "addons", "addonErrors");
  }

  static get ModalActions() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("openModal", "updateModal");
  }

  static get ModalStack() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("push", "update", "pop", "popWithKey");
  }

  static get ModalComponents() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("ModalRoot");
  }

  static get ModalClasses() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("modal", "content");
  }

  static get AlertModal() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByPrototypes("handleCancel", "handleSubmit", "handleMinorConfirm");
  }

  static get FlexElements() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Child", "Align");
  }

  static get FormTitle() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.findByDisplayName("FormTitle");
  }

  static get TextElement() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Sizes", "Weights");
  }

  static get ConfirmationModal() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.findByDisplayName("ConfirmModal");
  }

  static get Markdown() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.find(m => m.displayName === "Markdown" && m.rules);
  }

  static get Buttons() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("ButtonSizes");
  }

  static default(title, content) {
    const modal = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DOM.createElement(`<div class="bd-modal-wrapper theme-dark">
                <div class="bd-backdrop backdrop-1wrmKB"></div>
                <div class="bd-modal modal-1UGdnR">
                    <div class="bd-modal-inner inner-1JeGVc">
                        <div class="header header-1R_AjF">
                            <div class="title">${title}</div>
                        </div>
                        <div class="bd-modal-body">
                            <div class="scroller-wrap fade">
                                <div class="scroller">
                                    ${content}
                                </div>
                            </div>
                        </div>
                        <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp">
                            <button type="button" class="bd-button">${_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay}</button>
                        </div>
                    </div>
                </div>
            </div>`);
    modal.querySelector(".footer button").addEventListener("click", () => {
      modal.classList.add("closing");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
    modal.querySelector(".bd-backdrop").addEventListener("click", () => {
      modal.classList.add("closing");
      setTimeout(() => {
        modal.remove();
      }, 300);
    });
    document.querySelector("#app-mount").append(modal);
  }

  static alert(title, content) {
    this.showConfirmationModal(title, content, {
      cancelText: null
    });
  }
  /**
   * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
   * @param {string} title - title of the modal
   * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Everything is wrapped in Discord's `Markdown` component so strings will show and render properly.
   * @param {object} [options] - options to modify the modal
   * @param {boolean} [options.danger=false] - whether the main button should be red or not
   * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
   * @param {string} [options.cancelText=Cancel] - text for the cancel button
   * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
   * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
   * @param {string} [options.key] - key used to identify the modal. If not provided, one is generated and returned
   * @returns {string} - the key used for this modal
   */


  static showConfirmationModal(title, content, options = {}) {
    const Markdown = this.Markdown;
    const ConfirmationModal = this.ConfirmationModal;
    const ModalActions = this.ModalActions;
    if (content instanceof _structs_string__WEBPACK_IMPORTED_MODULE_3__["default"]) content = content.toString();
    if (!this.ModalActions || !this.ConfirmationModal || !this.Markdown) return this.default(title, content);

    const emptyFunction = () => {};

    const {
      onConfirm = emptyFunction,
      onCancel = emptyFunction,
      confirmText = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay,
      cancelText = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.cancel,
      danger = false,
      key = undefined
    } = options;
    if (!Array.isArray(content)) content = [content];
    content = content.map(c => typeof c === "string" ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Markdown, null, c) : c);
    return ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(ConfirmationModal, Object.assign({
        header: title,
        confirmButtonColor: danger ? this.Buttons.ButtonColors.RED : this.Buttons.ButtonColors.BRAND,
        confirmText: confirmText,
        cancelText: cancelText,
        onConfirm: onConfirm,
        onCancel: onCancel
      }, props), content);
    }, {
      modalKey: key
    });
  }

  static showAddonErrors({
    plugins: pluginErrors = [],
    themes: themeErrors = []
  }) {
    if (!pluginErrors || !themeErrors || !this.shouldShowAddonErrors) return;
    if (!pluginErrors.length && !themeErrors.length) return;

    if (this.addonErrorsRef && this.addonErrorsRef.current) {
      return this.addonErrorsRef.current.refreshTabs(Array.isArray(pluginErrors) ? pluginErrors : [], Array.isArray(themeErrors) ? themeErrors : []);
    }

    this.addonErrorsRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createRef();
    this.ModalActions.openModal(props => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalComponents.ModalRoot, Object.assign(props, {
      size: "medium",
      className: "bd-error-modal",
      children: [_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_addonerrormodal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.addonErrorsRef,
        pluginErrors: Array.isArray(pluginErrors) ? pluginErrors : [],
        themeErrors: Array.isArray(themeErrors) ? themeErrors : [],
        onClose: props.onClose
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalComponents.ModalFooter, {
        className: "bd-error-modal-footer"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.Buttons.default, {
        onClick: props.onClose,
        className: "bd-button"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay))]
    })));
  }

  static showChangelogModal(options = {}) {
    const ModalStack = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("push", "update", "pop", "popWithKey");
    const ChangelogClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("fixed", "improved");
    const TextElement = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.findByDisplayName("Text");
    const FlexChild = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Child");
    const Titles = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Tags", "default");
    const Changelog = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => m.defaultProps && m.defaultProps.selectable == false);
    const MarkdownParser = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("defaultRules", "parse");
    if (!Changelog || !ModalStack || !ChangelogClasses || !TextElement || !FlexChild || !Titles || !MarkdownParser) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Modals", "showChangelogModal missing modules");
    const {
      image = "https://i.imgur.com/wuh5yMK.png",
      description = "",
      changes = [],
      title = "BetterDiscord",
      subtitle = `v${_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version}`,
      footer
    } = options;
    const ce = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement;
    const changelogItems = [options.video ? ce("video", {
      src: options.video,
      poster: options.poster,
      controls: true,
      className: ChangelogClasses.video
    }) : ce("img", {
      src: image
    })];
    if (description) changelogItems.push(ce("p", null, MarkdownParser.parse(description)));

    for (let c = 0; c < changes.length; c++) {
      const entry = changes[c];
      const type = ChangelogClasses[entry.type] ? ChangelogClasses[entry.type] : ChangelogClasses.added;
      const margin = c == 0 ? ChangelogClasses.marginTop : "";
      changelogItems.push(ce("h1", {
        className: `${type} ${margin}`
      }, entry.title));
      if (entry.description) changelogItems.push(ce("p", null, MarkdownParser.parse(entry.description)));
      const list = ce("ul", null, entry.items.map(i => ce("li", null, MarkdownParser.parse(i))));
      changelogItems.push(list);
    }

    const renderHeader = function () {
      return ce(FlexChild.Child, {
        grow: 1,
        shrink: 1
      }, ce(Titles.default, {
        tag: Titles.Tags.H4
      }, title), ce(TextElement, {
        size: TextElement.Sizes.SMALL,
        color: TextElement.Colors.STANDARD,
        className: ChangelogClasses.date
      }, subtitle));
    };

    const renderFooter = () => {
      const Anchor = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => m.displayName == "Anchor");
      const AnchorClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("anchorUnderlineOnHover") || {
        anchor: "anchor-3Z-8Bb",
        anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
      };

      const joinSupportServer = click => {
        click.preventDefault();
        click.stopPropagation();
        ModalStack.pop();
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DiscordModules.InviteActions.acceptInviteAndTransitionToInviteChannel("0Tmfo5ZbORCRqbAd");
      };

      const supportLink = Anchor ? ce(Anchor, {
        onClick: joinSupportServer
      }, "Join our Discord Server.") : ce("a", {
        className: `${AnchorClasses.anchor} ${AnchorClasses.anchorUnderlineOnHover}`,
        onClick: joinSupportServer
      }, "Join our Discord Server.");
      const defaultFooter = ce(TextElement, {
        size: TextElement.Sizes.SMALL,
        color: TextElement.Colors.STANDARD
      }, "Need support? ", supportLink);
      return ce(FlexChild.Child, {
        grow: 1,
        shrink: 1
      }, footer ? footer : defaultFooter);
    };

    const ModalActions = this.ModalActions;
    const OriginalModalClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("hideOnFullscreen", "root");
    const originalRoot = OriginalModalClasses.root;
    if (originalRoot) OriginalModalClasses.root = `${originalRoot} bd-changelog-modal`;
    const key = ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Changelog, Object.assign({
        className: `bd-changelog ${ChangelogClasses.container}`,
        selectable: true,
        onScroll: _ => _,
        onClose: _ => _,
        renderHeader: renderHeader,
        renderFooter: renderFooter
      }, props), changelogItems);
    });
    const closeModal = ModalActions.closeModal;

    ModalActions.closeModal = function (k) {
      Reflect.apply(closeModal, this, arguments);
      setTimeout(() => {
        if (originalRoot && k === key) OriginalModalClasses.root = originalRoot;
      }, 1000);
      ModalActions.closeModal = closeModal;
    };

    return key;
  }

  static showAddonSettingsModal(name, panel) {
    let child = panel;

    if (panel instanceof Node || typeof panel === "string") {
      child = class ReactWrapper extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.Component {
        constructor(props) {
          super(props);
          this.elementRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createRef();
          this.element = panel;
        }

        componentDidMount() {
          if (this.element instanceof Node) this.elementRef.current.appendChild(this.element);
        }

        render() {
          const props = {
            className: "bd-addon-settings-wrap",
            ref: this.elementRef
          };
          if (typeof this.element === "string") props.dangerouslySetInnerHTML = {
            __html: this.element
          };
          return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", props);
        }

      };
    }

    if (typeof child === "function") child = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(child);
    const mc = this.ModalComponents;

    const modal = props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.ModalRoot, Object.assign({
        size: mc.ModalSize.MEDIUM,
        className: "bd-addon-modal"
      }, props), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.ModalHeader, {
        separator: false,
        className: "bd-addon-modal-header"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.FormTitle, {
        tag: "h4"
      }, `${name} Settings`)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.ModalContent, {
        className: "bd-addon-modal-settings"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], {}, child)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.ModalFooter, {
        className: "bd-addon-modal-footer"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.Buttons.default, {
        onClick: props.onClose,
        className: "bd-button"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.done)));
    };

    return this.ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(modal, props);
    });
  }

}

/***/ }),

/***/ "./src/ui/notices.js":
/*!***************************!*\
  !*** ./src/ui/notices.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notices)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

class Notices {
  static get baseClass() {
    var _WebpackModules$getBy;

    return this.__baseClass || (this.__baseClass = (_WebpackModules$getBy = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("container", "base")) === null || _WebpackModules$getBy === void 0 ? void 0 : _WebpackModules$getBy.base);
  }
  /** Shorthand for `type = "info"` for {@link module:Notices.show} */


  static info(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "info"
    }));
  }
  /** Shorthand for `type = "warning"` for {@link module:Notices.show} */


  static warn(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "warning"
    }));
  }
  /** Shorthand for `type = "error"` for {@link module:Notices.show} */


  static error(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "error"
    }));
  }
  /** Shorthand for `type = "success"` for {@link module:Notices.show} */


  static success(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "success"
    }));
  }

  static createElement(type, options = {}, ...children) {
    const element = document.createElement(type);
    Object.assign(element, options);
    const filteredChildren = children.filter(n => n);
    if (filteredChildren.length > 0) element.append(...filteredChildren);
    return element;
  }

  static joinClassNames(...classNames) {
    return classNames.filter(n => n).join(" ");
  }
  /**
   * Show a notice above discord's chat layer.
   * @param {string} content Content of the notice
   * @param {object} options Options for the notice.
   * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
   * @param {Array<{label: string, onClick: (immediately?: boolean = false) => void}>} [options.buttons] Buttons that should be added next to the notice text.
   * @param {number} [options.timeout=10000] Timeout until the toast is closed. Won't fire if it's set to 0;
   * @returns {(immediately?: boolean = false) => void}
   */


  static show(content, options = {}) {
    const {
      type,
      buttons = [],
      timeout = 0
    } = options;
    const haveContainer = this.ensureContainer();
    if (!haveContainer) return;

    const closeNotification = function (immediately = false) {
      // Immediately remove the notice without adding the closing class.
      if (immediately) return noticeElement.remove();
      noticeElement.classList.add("bd-notice-closing");
      setTimeout(() => {
        noticeElement.remove();
      }, 300);
    };

    const noticeElement = this.createElement("div", {
      className: this.joinClassNames("bd-notice", type && `bd-notice-${type}`)
    }, this.createElement("div", {
      className: "bd-notice-close",
      onclick: closeNotification.bind(null, false)
    }), this.createElement("span", {
      className: "bd-notice-content"
    }, content), ...buttons.map(button => {
      if (!button || !button.label || typeof button.onClick !== "function") return null;
      return this.createElement("button", {
        className: "bd-notice-button",
        onclick: button.onClick.bind(null, closeNotification)
      }, button.label);
    }));
    document.getElementById("bd-notices").appendChild(noticeElement);

    if (timeout > 0) {
      setTimeout(closeNotification, timeout);
    }

    return closeNotification;
  }

  static ensureContainer() {
    if (document.getElementById("bd-notices")) return true;
    const container = document.querySelector(`.${this.baseClass}`);
    if (!container) return false;
    const noticeContainer = this.createElement("div", {
      id: "bd-notices"
    });
    container.prepend(noticeContainer);
    return true;
  }

}

/***/ }),

/***/ "./src/ui/publicservers/card.jsx":
/*!***************************************!*\
  !*** ./src/ui/publicservers/card.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerCard)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

const badge = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: "flowerStarContainer-3zDVtj verified-1eC5dy background-2uufRq guildBadge-RlDbED",
  style: {
    width: "16px",
    height: "16px"
  }
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
  "aria-label": "Verified & Partnered",
  className: "flowerStar-1GeTsn",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
})), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: "childContainer-1wxZNh"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
  className: "icon-1ihkOt",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
  fill: "currentColor"
}))));
class ServerCard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    if (!this.props.server.iconUrl) this.props.server.iconUrl = this.props.defaultAvatar();
    this.state = {
      joined: this.props.joined
    };
    this.join = this.join.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    const {
      server
    } = this.props;
    const addedDate = new Date(server.insertDate * 1000); // Convert from unix timestamp

    const buttonText = typeof this.state.joined == "string" ? `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.joining}...` : this.state.joined ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.joined : _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.join;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-card",
      role: "button",
      tabIndex: "0",
      onClick: this.join
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-splash-container"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-splash"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-icon"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-info"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-title"
    }, server.pinned && badge, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-name"
    }, server.name), this.state.joined && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-tag"
    }, buttonText)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-description"
    }, server.description), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-footer"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-text"
    }, server.members.toLocaleString(), " Members")), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-text"
    }, "Added ", addedDate.toLocaleDateString())))));
  }

  handleError() {
    this.props.server.iconUrl = this.props.defaultAvatar();
  }

  async join() {
    if (this.state.joined) return this.props.navigateTo(this.props.server.identifier);
    this.setState({
      joined: "joining"
    });
    const didJoin = await this.props.join(this.props.server.identifier, this.props.server.nativejoin);
    this.setState({
      joined: didJoin
    });
  }

}

/***/ }),

/***/ "./src/ui/publicservers/menu.js":
/*!**************************************!*\
  !*** ./src/ui/publicservers/menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PublicServers)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/ui/publicservers/card.jsx");
/* harmony import */ var _blankslates_noresults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blankslates/noresults */ "./src/ui/blankslates/noresults.jsx");
/* harmony import */ var _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../structs/psconnection */ "./src/structs/psconnection.js");
/* harmony import */ var _settings_components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/components/search */ "./src/ui/settings/components/search.jsx");
/* harmony import */ var _icons_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/previous */ "./src/ui/icons/previous.jsx");
/* harmony import */ var _icons_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/next */ "./src/ui/icons/next.jsx");









const SettingsView = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByDisplayName("SettingsView");
const GuildActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("transitionToGuildSync");
const LayerManager = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("popLayer");
const EMPTY_RESULTS = {
  servers: [],
  size: 0,
  total: 0,
  page: 1,
  numPages: 1
};
class PublicServers extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "Featured",
      query: "",
      loading: true,
      user: null,
      results: Object.assign({}, EMPTY_RESULTS)
    };
    this.featured = [];
    this.popular = [];
    this.keywords = [];
    this.changeTab = this.changeTab.bind(this);
    this.searchKeyDown = this.searchKeyDown.bind(this);
    this.connect = this.connect.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.join = this.join.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    this.getDashboard();
    this.checkConnection();
  }

  async checkConnection() {
    const userData = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].checkConnection();
    if (!userData) return this.setState({
      user: null
    });
    this.setState({
      user: userData
    });
  }

  async getDashboard() {
    const dashboardData = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].getDashboard();
    this.featured = dashboardData.featured;
    this.popular = dashboardData.popular;
    this.keywords = dashboardData.keywords;
    this.setState({
      loading: false
    });
    this.changeTab(this.state.tab);
    if (!this.keywords || !this.keywords.length) _modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionError, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionErrorMessage);
  }

  async connect() {
    await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].connect();
    this.checkConnection();
  }

  searchKeyDown(e) {
    if (this.state.loading || e.key !== "Enter") return;
    const term = e.target.value;
    if (this.state.tab == "Featured" || this.state.tab == "Popular") this.setState({
      tab: "All"
    }, () => this.search(term));else this.search(term);
  }

  async search(term = "", page = 1) {
    this.setState({
      query: term,
      loading: true
    });
    const results = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].search({
      term,
      keyword: this.state.tab == "All" || this.state.tab == "Featured" || this.state.tab == "Popular" ? "" : this.state.tab,
      page
    });
    if (!results) return this.setState({
      results: Object.assign({}, EMPTY_RESULTS)
    });
    this.setState({
      loading: false,
      results
    });
  }

  async changeTab(id) {
    if (this.state.loading) return;
    await new Promise(resolve => this.setState({
      tab: id
    }, resolve));

    if (this.state.tab === "Featured" || this.state.tab == "Popular") {
      const fakeResults = {
        servers: this[this.state.tab.toLowerCase()],
        size: this[this.state.tab.toLowerCase()].length,
        total: this[this.state.tab.toLowerCase()].length,
        page: 1,
        numPages: 1
      };
      return this.setState({
        results: fakeResults
      });
    }

    this.search();
  }

  get hasPrevious() {
    return this.state.results.page > 1;
  }

  get hasNext() {
    return this.state.results.page < this.state.results.numPages;
  }

  loadPreviousPage() {
    if (this.state.loading || !this.hasPrevious) return;
    this.search(this.state.query, this.state.results.page - 1);
  }

  loadNextPage() {
    if (this.state.loading || !this.hasNext) return;
    this.search(this.state.query, this.state.results.page + 1);
  }

  async join(id, native = false) {
    if (!this.state.user && !native) {
      return _modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.notConnected, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionRequired, {
        cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.nevermind,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.okay,
        onConfirm: () => {
          this.connect().then(() => _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].join(id, native));
        }
      });
    }

    return await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].join(id, native);
  }

  navigateTo(id) {
    if (GuildActions) GuildActions.transitionToGuildSync(id);
    if (LayerManager) LayerManager.popLayer();
  }

  get searchBox() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onKeyDown: this.searchKeyDown,
      className: "bd-server-search",
      placeholder: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.search}...`,
      value: this.state.query
    });
  }

  get title() {
    if (this.state.loading) return `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.loading}...`;

    if (this.state.query) {
      const start = (this.state.results.page - 1) * this.state.results.size + 1;
      const total = this.state.results.total;
      const end = this.hasNext ? start - 1 + this.state.results.size : total;
      let title = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.results.format({
        start,
        end,
        total,
        category: this.state.tab
      });
      if (this.state.query) title += " " + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.query.format({
        query: this.state.query
      });
      return title;
    }

    return this.state.tab;
  }

  get content() {
    const connectButton = this.state.user ? null : {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connect,
      onClick: this.connect
    };
    const servers = this.state.results.servers.map(server => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: server.identifier,
        server: server,
        joined: _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].hasJoined(server.identifier),
        join: this.join,
        navigateTo: this.navigateTo,
        defaultAvatar: _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].getDefaultAvatar
      });
    });
    let content = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_blankslates_noresults__WEBPACK_IMPORTED_MODULE_4__["default"]);
    if (this.state.loading) content = this.loadingScreen;else if (this.state.results.total) content = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-card-list"
    }, servers);
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: this.title,
      button: connectButton
    }), this.state.results.numPages > 1 && this.pagination, content, this.state.results.numPages > 1 && this.pagination];
  }

  get loadingScreen() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-card-list"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }));
  }

  get pagination() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-pagination"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-previous",
      disabled: !this.hasPrevious,
      onClick: this.loadPreviousPage
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_previous__WEBPACK_IMPORTED_MODULE_7__["default"], null)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
      className: "bd-pagination-info"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.pagination.format({
      page: this.state.results.page,
      count: this.state.results.numPages
    })), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-next",
      disabled: !this.hasNext,
      onClick: this.loadNextPage
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_next__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
  }

  get connection() {
    const {
      user
    } = this.state;
    if (!user) return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-connection"
    });
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-connection"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-footnote"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connection.format(user)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-button-reconnect",
      onClick: this.connect
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.reconnect));
  }

  render() {
    const keywords = this.keywords.map(name => ({
      section: name,
      label: name,
      element: () => this.content
    }));
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SettingsView, {
      onClose: this.props.close,
      onSetSection: this.changeTab,
      section: this.state.tab,
      sections: [{
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.search
      }, {
        section: "CUSTOM",
        element: () => this.searchBox
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.categories
      }, {
        section: "All",
        label: "All",
        element: () => this.content
      }, {
        section: "Featured",
        label: "Featured",
        element: () => this.content
      }, {
        section: "Popular",
        label: "Popular",
        element: () => this.content
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.keywords
      }, ...keywords, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("a", {
          href: "https://discordservers.com",
          target: "_blank"
        }, "DiscordServers.com")
      }, {
        section: "DIVIDER"
      }, {
        section: "CUSTOM",
        element: () => this.connection
      }],
      theme: "dark"
    });
  }

}

/***/ }),

/***/ "./src/ui/settings.js":
/*!****************************!*\
  !*** ./src/ui/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _settings_addonlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/addonlist */ "./src/ui/settings/addonlist.jsx");
/* harmony import */ var _settings_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/group */ "./src/ui/settings/group.jsx");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _settings_sidebarheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/sidebarheader */ "./src/ui/settings/sidebarheader.jsx");
/* harmony import */ var _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/webpackmodules */ "./src/modules/webpackmodules.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class SettingsRenderer {
  constructor() {
    this.patchSections();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.on("strings-updated", this.forceUpdate);
  }

  onDrawerToggle(collection, group, state) {
    const drawerStates = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.getBDData("drawerStates") || {};
    if (!drawerStates[collection]) drawerStates[collection] = {};
    drawerStates[collection][group] = state;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.setBDData("drawerStates", drawerStates);
  }

  getDrawerState(collection, group, defaultValue) {
    const drawerStates = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.getBDData("drawerStates") || {};
    if (!drawerStates[collection]) return defaultValue;
    if (!drawerStates[collection].hasOwnProperty(group)) return defaultValue;
    return drawerStates[collection][group];
  }

  onChange(onChange) {
    return (collection, category, id) => {
      const before = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections.length + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.length;
      onChange(collection, category, id);
      const after = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections.length + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.length;
      if (before != after) setTimeout(this.forceUpdate.bind(this), 50);
    };
  }

  buildSettingsPanel(id, title, config, state, onChange, button = null) {
    config.forEach(section => {
      section.settings.forEach(item => item.value = state[section.id][item.id]);
    });
    return this.getSettingsPanel(id, title, config, this.onChange(onChange), button);
  }

  getSettingsPanel(id, title, groups, onChange, button = null) {
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: title,
      button: button
    }), groups.map(section => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_group__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, section, {
        onChange: onChange,
        onDrawerToggle: state => this.onDrawerToggle(id, section.id, state),
        shown: this.getDrawerState(id, section.id, section.hasOwnProperty("shown") ? section.shown : true)
      }));
    })];
  }

  getAddonPanel(title, addonList, addonState, options = {}) {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_addonlist__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, {
      title: title,
      addonList: addonList,
      addonState: addonState
    }, options));
  }

  async patchSections() {
    const UserSettings = await _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getLazy(_modules_webpackmodules__WEBPACK_IMPORTED_MODULE_5__.Filters.byDisplayName("SettingsView"));
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Patcher.after("SettingsManager", UserSettings.prototype, "getPredicateSections", (thisObject, args, returnValue) => {
      let location = returnValue.findIndex(s => s.section.toLowerCase() == "changelog") - 1;
      if (location < 0) return;

      const insert = section => {
        returnValue.splice(location, 0, section);
        location++;
      };

      insert({
        section: "DIVIDER"
      }); // Header

      insert({
        section: "CUSTOM",
        element: _settings_sidebarheader__WEBPACK_IMPORTED_MODULE_4__["default"]
      });

      for (const collection of _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections) {
        if (collection.disabled) continue;
        insert({
          section: collection.name,
          label: collection.name.toString(),
          className: `bd-${collection.id}-tab`,
          element: () => this.buildSettingsPanel(collection.id, collection.name, collection.settings, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.state[collection.id], _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.onSettingChange.bind(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings, collection.id), collection.button ? collection.button : null)
        });
      }

      for (const panel of _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.sort((a, b) => a.order > b.order)) {
        if (panel.clickListener) panel.onClick = event => panel.clickListener(thisObject, event, returnValue);
        if (!panel.className) panel.className = `bd-${panel.id}-tab`;
        if (typeof panel.label !== "string") panel.label = panel.label.toString();
        insert(panel);
      }
    });
  }

  forceUpdate() {
    var _WebpackModules$getBy;

    const viewClass = (_WebpackModules$getBy = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("standardSidebarView")) === null || _WebpackModules$getBy === void 0 ? void 0 : _WebpackModules$getBy.standardSidebarView.split(" ")[0];
    const node = document.querySelector(`.${viewClass}`);
    if (!node) return;
    const stateNode = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Utilities.findInReactTree(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Utilities.getReactInstance(node), m => m && m.getPredicateSections, {
      walkable: ["return", "stateNode"]
    });
    if (stateNode) stateNode.forceUpdate();
  }

}());

/***/ }),

/***/ "./src/ui/settings/addoncard.jsx":
/*!***************************************!*\
  !*** ./src/ui/settings/addoncard.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonCard)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../structs/markdown */ "./src/structs/markdown.js");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.jsx");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");
/* harmony import */ var _icons_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/delete */ "./src/ui/icons/delete.jsx");
/* harmony import */ var _icons_cog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/cog */ "./src/ui/icons/cog.jsx");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/switch */ "./src/ui/settings/components/switch.jsx");
/* harmony import */ var _icons_github__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/github */ "./src/ui/icons/github.jsx");
/* harmony import */ var _icons_dollarsign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/dollarsign */ "./src/ui/icons/dollarsign.jsx");
/* harmony import */ var _icons_globe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/globe */ "./src/ui/icons/globe.jsx");
/* harmony import */ var _icons_patreon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/patreon */ "./src/ui/icons/patreon.jsx");
/* harmony import */ var _icons_support__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/support */ "./src/ui/icons/support.jsx");
/* harmony import */ var _icons_extension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/extension */ "./src/ui/icons/extension.jsx");
/* harmony import */ var _icons_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/theme */ "./src/ui/icons/theme.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../toasts */ "./src/ui/toasts.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const LinkIcons = {
  website: _icons_globe__WEBPACK_IMPORTED_MODULE_10__["default"],
  source: _icons_github__WEBPACK_IMPORTED_MODULE_8__["default"],
  invite: _icons_support__WEBPACK_IMPORTED_MODULE_12__["default"],
  donate: _icons_dollarsign__WEBPACK_IMPORTED_MODULE_9__["default"],
  patreon: _icons_patreon__WEBPACK_IMPORTED_MODULE_11__["default"]
};
const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("Tooltip");
const LayerStack = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("popLayer");
const UserStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getCurrentUser");
const ChannelStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getDMFromUserId");
const PrivateChannelActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("openPrivateChannel");
const ChannelActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("selectPrivateChannel");
class AddonCard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.settingsPanel = "";
    this.panelRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createRef();
    this.onChange = this.onChange.bind(this);
    this.reload = this.reload.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.messageAuthor = this.messageAuthor.bind(this);
  }

  showSettings() {
    if (!this.props.hasSettings || !this.props.enabled) return;
    const name = this.getString(this.props.addon.name);

    try {
      _modals__WEBPACK_IMPORTED_MODULE_15__["default"].showAddonSettingsModal(name, this.props.getSettingsPanel());
    } catch (err) {
      _toasts__WEBPACK_IMPORTED_MODULE_16__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.settingsError.format({
        name
      }), {
        type: "error"
      });
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("Addon Settings", "Unable to get settings panel for " + name + ".", err);
    }
  }

  reload() {
    if (!this.props.reload) return;
    this.props.addon = this.props.reload(this.props.addon.id);
    this.forceUpdate();
  }

  getString(value) {
    return typeof value == "string" ? value : value.toString();
  }

  onChange() {
    this.props.onChange && this.props.onChange(this.props.addon.id);
    this.props.enabled = !this.props.enabled;
    this.forceUpdate();
  }

  messageAuthor() {
    if (!this.props.addon.authorId) return;
    if (LayerStack) LayerStack.popLayer();
    if (!UserStore || !ChannelActions || !ChannelStore || !PrivateChannelActions) return;
    const selfId = UserStore.getCurrentUser().id;
    if (selfId == this.props.addon.authorId) return;
    const privateChannelId = ChannelStore.getDMFromUserId(this.props.addon.authorId);
    if (privateChannelId) return ChannelActions.selectPrivateChannel(privateChannelId);
    PrivateChannelActions.openPrivateChannel(selfId, this.props.addon.authorId);
  }

  buildTitle(name, version, author) {
    const authorArray = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.byline.split(/({{[A-Za-z]+}})/);
    const authorComponent = author.link || author.id ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("a", {
      className: "bd-link bd-link-website",
      href: author.link || null,
      onClick: this.messageAuthor,
      target: "_blank",
      rel: "noopener noreferrer"
    }, author.name) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-author"
    }, author.name);
    const authorIndex = authorArray.findIndex(s => s == "{{author}}");
    if (authorIndex) authorArray[authorIndex] = authorComponent;
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-name"
    }, name), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-meta"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-version"
    }, `v${version}`), ...authorArray)];
  }

  buildLink(which) {
    const url = this.props.addon[which];
    if (!url) return null;
    const icon = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(LinkIcons[which]);
    const link = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("a", {
      className: "bd-link bd-link-website",
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, icon);

    if (which == "invite") {
      link.props.onClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        let code = url;
        const tester = /\.gg\/(.*)$/;
        if (tester.test(code)) code = code.match(tester)[1];
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.LayerStack.popLayer();
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.InviteActions.acceptInviteAndTransitionToInviteChannel(code);
      };
    }

    return this.makeButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons[which], link);
  }

  get controls() {
    // {this.props.hasSettings && <button onClick={this.showSettings} className="bd-button bd-button-addon-settings" disabled={!this.props.enabled}>{Strings.Addons.addonSettings}</button>}
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls"
    }, this.props.hasSettings && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.addonSettings, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_cog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "20px"
    }), this.showSettings, {
      disabled: !this.props.enabled
    }), this.props.showReloadIcon && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.reload, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "20px"
    }), this.reload), this.props.editAddon && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.editAddon, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: "20px"
    }), this.props.editAddon), this.props.deleteAddon && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.deleteAddon, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_delete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "20px"
    }), this.props.deleteAddon, {
      danger: true
    }));
  }

  get footer() {
    const links = ["website", "source", "invite", "donate", "patreon"];
    const linkComponents = links.map(this.buildLink.bind(this)).filter(c => c); // linkComponents.map((comp, i) => i < linkComponents.length - 1 ? [comp, " | "] : comp).flat()

    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-footer"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-links"
    }, linkComponents), this.controls);
  }

  makeButton(title, children, action) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", _extends({}, props, {
        className: "bd-addon-button",
        onClick: action
      }), children);
    });
  }

  makeControlButton(title, children, action, {
    danger = false,
    disabled = false
  } = {}) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", _extends({}, props, {
        className: "bd-button bd-addon-button" + (danger ? " bd-button-danger" : "") + (disabled ? " bd-button-disabled" : ""),
        onClick: action
      }), children);
    });
  }

  render() {
    const addon = this.props.addon;
    const name = this.getString(addon.name);
    const author = this.getString(addon.author);
    const description = this.getString(addon.description);
    const version = this.getString(addon.version);
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      id: `${addon.id}-card`,
      className: "bd-addon-card settings-closed"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-header"
    }, this.props.type === "plugin" ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_extension__WEBPACK_IMPORTED_MODULE_13__["default"], {
      size: "18px",
      className: "bd-icon"
    }) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_theme__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "18px",
      className: "bd-icon"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-title"
    }, this.buildTitle(name, version, {
      name: author,
      id: this.props.addon.authorId,
      link: this.props.addon.authorLink
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      checked: this.props.enabled,
      onChange: this.onChange
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-description-wrap"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-description"
    }, _structs_markdown__WEBPACK_IMPORTED_MODULE_2__["default"].parseToReact(description))), this.footer);
  }

}
const originalRender = AddonCard.prototype.render;
Object.defineProperty(AddonCard.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("AddonCard", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/settings/addonlist.jsx":
/*!***************************************!*\
  !*** ./src/ui/settings/addonlist.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonList)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.jsx");
/* harmony import */ var _addoncard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addoncard */ "./src/ui/settings/addoncard.jsx");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropdown */ "./src/ui/settings/components/dropdown.jsx");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search */ "./src/ui/settings/components/search.jsx");
/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../errorboundary */ "./src/ui/errorboundary.jsx");
/* harmony import */ var _icons_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/list */ "./src/ui/icons/list.jsx");
/* harmony import */ var _icons_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/grid */ "./src/ui/icons/grid.jsx");
/* harmony import */ var _blankslates_noresults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blankslates/noresults */ "./src/ui/blankslates/noresults.jsx");
/* harmony import */ var _blankslates_emptyimage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../blankslates/emptyimage */ "./src/ui/blankslates/emptyimage.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("Tooltip");
class AddonList extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      sort: this.getControlState("sort", "name"),
      ascending: this.getControlState("ascending", true),
      view: this.getControlState("view", "list")
    };
    this.sort = this.sort.bind(this);
    this.reverse = this.reverse.bind(this);
    this.search = this.search.bind(this);
    this.update = this.update.bind(this);
    this.listView = this.listView.bind(this);
    this.gridView = this.gridView.bind(this);
    this.openFolder = this.openFolder.bind(this);
  }

  componentDidMount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`${this.props.prefix}-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`${this.props.prefix}-unloaded`, this.update);
  }

  componentWillUnmount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`${this.props.prefix}-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`${this.props.prefix}-unloaded`, this.update);
  }

  onControlChange(control, value) {
    const addonlistControls = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.getBDData("addonlistControls") || {};
    if (!addonlistControls[this.props.type]) addonlistControls[this.props.type] = {};
    addonlistControls[this.props.type][control] = value;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.setBDData("addonlistControls", addonlistControls);
  }

  getControlState(control, defaultValue) {
    const addonlistControls = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.getBDData("addonlistControls") || {};
    if (!addonlistControls[this.props.type]) return defaultValue;
    if (!addonlistControls[this.props.type].hasOwnProperty(control)) return defaultValue;
    return addonlistControls[this.props.type][control];
  }

  update() {
    this.forceUpdate();
  }

  reload() {
    if (this.props.refreshList) this.props.refreshList();
    this.forceUpdate();
  }

  listView() {
    this.changeView("list");
  }

  gridView() {
    this.changeView("grid");
  }

  changeView(view) {
    this.onControlChange("view", view);
    this.setState({
      view
    });
  }

  reverse(value) {
    this.onControlChange("ascending", value);
    this.setState({
      ascending: value
    });
  }

  sort(value) {
    this.onControlChange("sort", value);
    this.setState({
      sort: value
    });
  }

  search(event) {
    this.setState({
      query: event.target.value.toLocaleLowerCase()
    });
  }

  openFolder() {
    const shell = (__webpack_require__(/*! electron */ "electron").shell);

    const open = shell.openItem || shell.openPath;
    open(this.props.folder);
  }

  get sortOptions() {
    return [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.name,
      value: "name"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.author,
      value: "author"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.version,
      value: "version"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.added,
      value: "added"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.modified,
      value: "modified"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.isEnabled,
      value: "isEnabled"
    }];
  }

  get directions() {
    return [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.ascending,
      value: true
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.descending,
      value: false
    }];
  }

  get emptyImage() {
    const message = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.blankSlateMessage.format({
      link: `https://betterdiscord.app/${this.props.type}s`,
      type: this.props.type
    }).toString();
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_blankslates_emptyimage__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.blankSlateHeader.format({
        type: this.props.type
      }),
      message: message
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", {
      className: "bd-button",
      onClick: this.openFolder
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.openFolder.format({
      type: this.props.type
    })));
  }

  makeControlButton(title, children, action, selected = false) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", _extends({}, props, {
        className: "bd-button bd-view-button" + (selected ? " selected" : ""),
        onClick: action
      }), children);
    });
  }

  render() {
    const {
      title,
      folder,
      addonList,
      addonState,
      onChange,
      reload
    } = this.props;
    const showReloadIcon = !_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "addons", "autoReload");
    const button = folder ? {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.openFolder.format({
        type: title
      }),
      onClick: this.openFolder
    } : null;
    let sortedAddons = addonList.sort((a, b) => {
      const sortByEnabled = this.state.sort === "isEnabled";
      const first = sortByEnabled ? addonState[a.id] : a[this.state.sort];
      const second = sortByEnabled ? addonState[b.id] : b[this.state.sort];

      const stringSort = (str1, str2) => str1.toLocaleLowerCase().localeCompare(str2.toLocaleLowerCase());

      if (typeof first == "string") return stringSort(first, second);
      if (typeof first == "boolean") return first === second ? stringSort(a.name, b.name) : first ? -1 : 1;
      if (first > second) return 1;
      if (second > first) return -1;
      return 0;
    });
    if (!this.state.ascending) sortedAddons.reverse();

    if (this.state.query) {
      sortedAddons = sortedAddons.filter(addon => {
        let matches = addon.name.toLocaleLowerCase().includes(this.state.query);
        matches = matches || addon.author.toLocaleLowerCase().includes(this.state.query);
        matches = matches || addon.description.toLocaleLowerCase().includes(this.state.query);
        if (!matches) return false;
        return true;
      });
    }

    const renderedCards = sortedAddons.map(addon => {
      const hasSettings = addon.instance && typeof addon.instance.getSettingsPanel === "function";
      const getSettings = hasSettings && addon.instance.getSettingsPanel.bind(addon.instance);
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_addoncard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: this.props.type,
        editAddon: this.editAddon.bind(this, addon.id),
        deleteAddon: this.deleteAddon.bind(this, addon.id),
        showReloadIcon: showReloadIcon,
        key: addon.id,
        enabled: addonState[addon.id],
        addon: addon,
        onChange: onChange,
        reload: reload,
        hasSettings: hasSettings,
        getSettingsPanel: getSettings
      }));
    });
    const hasAddonsInstalled = this.props.addonList.length !== 0;
    const isSearching = !!this.state.query;
    const hasResults = sortedAddons.length !== 0;
    return [/*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "title",
      text: title,
      button: button,
      otherChildren: showReloadIcon && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "bd-reload",
        onClick: this.reload.bind(this)
      })
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls bd-addon-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: this.search,
      placeholder: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.search.format({
        type: this.props.title
      })}...`
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls-advanced"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-dropdowns"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", {
      className: "bd-label"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.sortBy, ":"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      options: this.sortOptions,
      value: this.state.sort,
      onChange: this.sort,
      style: "transparent"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", {
      className: "bd-label"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.order, ":"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      options: this.directions,
      value: this.state.ascending,
      onChange: this.reverse,
      style: "transparent"
    }))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-views"
    }, this.makeControlButton("List View", /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_list__WEBPACK_IMPORTED_MODULE_9__["default"], null), this.listView, this.state.view === "list"), this.makeControlButton("Grid View", /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_grid__WEBPACK_IMPORTED_MODULE_10__["default"], null), this.gridView, this.state.view === "grid")))), !hasAddonsInstalled && this.emptyImage, isSearching && !hasResults && hasAddonsInstalled && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_blankslates_noresults__WEBPACK_IMPORTED_MODULE_11__["default"], null), hasAddonsInstalled && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      key: "addonList",
      className: "bd-addon-list" + (this.state.view == "grid" ? " bd-grid-view" : "")
    }, renderedCards)];
  }

  editAddon(id) {
    if (this.props.editAddon) this.props.editAddon(id);
  }

  async deleteAddon(id) {
    const addon = this.props.addonList.find(a => a.id == id);
    const shouldDelete = await this.confirmDelete(addon);
    if (!shouldDelete) return;
    if (this.props.deleteAddon) this.props.deleteAddon(addon);
  }

  confirmDelete(addon) {
    return new Promise(resolve => {
      _modals__WEBPACK_IMPORTED_MODULE_2__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Modals.confirmAction, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.confirmDelete.format({
        name: addon.name
      }), {
        danger: true,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.deleteAddon,
        onConfirm: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
  }

}
const originalRender = AddonList.prototype.render;
Object.defineProperty(AddonList.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("AddonList", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/settings/components/dropdown.jsx":
/*!*************************************************!*\
  !*** ./src/ui/settings/components/dropdown.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_downarrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/downarrow */ "./src/ui/icons/downarrow.jsx");


class Select extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: this.props.hasOwnProperty("value") ? this.props.value : this.props.options[0].value
    };
    this.dropdown = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.onChange = this.onChange.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState(state => ({
      open: !state.open
    }), () => {
      if (!this.state.open) return;
      document.addEventListener("click", this.hideMenu);
    });
  }

  hideMenu() {
    this.setState({
      open: false
    }, () => {
      document.removeEventListener("click", this.hideMenu);
    });
  }

  onChange(value) {
    this.setState({
      value
    });
    if (this.props.onChange) this.props.onChange(value);
  }

  get selected() {
    return this.props.options.find(o => o.value == this.state.value);
  }

  get options() {
    const selected = this.selected;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-select-options"
    }, this.props.options.map(opt => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-select-option${selected.value == opt.value ? " selected" : ""}`,
      onClick: this.onChange.bind(this, opt.value)
    }, opt.label)));
  }

  render() {
    const style = this.props.style == "transparent" ? " bd-select-transparent" : "";
    const isOpen = this.state.open ? " menu-open" : "";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-select${style}${isOpen}`,
      onClick: this.showMenu,
      ref: this.dropdown
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-select-value"
    }, this.selected.label), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_downarrow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "bd-select-arrow"
    }), this.state.open && this.options);
  }

}

/***/ }),

/***/ "./src/ui/settings/components/item.jsx":
/*!*********************************************!*\
  !*** ./src/ui/settings/components/item.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingItem)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class SettingItem extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-item"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", {
      htmlFor: this.props.id,
      className: "bd-setting-title"
    }, this.props.name), this.props.children), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-note"
    }, this.props.note), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-divider"
    }));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/number.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/number.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Number)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Number extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      type: "number",
      className: "bd-number-input",
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      value: this.state.value
    });
  }

}

/***/ }),

/***/ "./src/ui/settings/components/search.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/search.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/search */ "./src/ui/icons/search.jsx");


class Search extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-search-wrapper" + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      onKeyDown: this.props.onKeyDown,
      type: "text",
      className: "bd-search",
      placeholder: this.props.placeholder,
      maxLength: "50",
      value: this.state.value
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_search__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/switch.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/switch.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Switch extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.disabled) return;
    this.props.onChange(!this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const enabledClass = this.props.disabled ? " bd-switch-disabled" : "";
    const checkedClass = this.state.checked ? " bd-switch-checked" : "";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-switch` + enabledClass + checkedClass
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      id: this.props.id,
      type: "checkbox",
      disabled: this.props.disabled,
      checked: this.state.checked,
      onChange: this.onChange
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-switch-body"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-switch-slider",
      viewBox: "0 0 28 20",
      preserveAspectRatio: "xMinYMid meet"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", {
      className: "bd-switch-handle",
      fill: "white",
      x: "4",
      y: "0",
      height: "20",
      width: "20",
      rx: "10"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-switch-symbol",
      viewBox: "0 0 20 20",
      fill: "none"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", null)))));
  }

}

/***/ }),

/***/ "./src/ui/settings/group.jsx":
/*!***********************************!*\
  !*** ./src/ui/settings/group.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../divider */ "./src/ui/divider.jsx");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/switch */ "./src/ui/settings/components/switch.jsx");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dropdown */ "./src/ui/settings/components/dropdown.jsx");
/* harmony import */ var _components_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/number */ "./src/ui/settings/components/number.jsx");
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/item */ "./src/ui/settings/components/item.jsx");








const baseClassName = "bd-settings-group";
class Group extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);

    if (this.props.button && this.props.collapsible) {
      const original = this.props.button.onClick;

      this.props.button.onClick = event => {
        event.stopPropagation();
        original(...arguments);
      };
    }

    if (!this.props.hasOwnProperty("shown")) this.props.shown = true;
    this.container = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createRef();
    this.state = {
      collapsed: this.props.collapsible && !this.props.shown
    };
    this.onChange = this.onChange.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const container = this.container.current;
    const timeout = this.state.collapsed ? 300 : 1;
    container.style.setProperty("height", container.scrollHeight + "px");
    container.classList.add("animating");
    this.setState({
      collapsed: !this.state.collapsed
    }, () => setTimeout(() => {
      container.style.setProperty("height", "");
      container.classList.remove("animating");
    }, timeout));
    if (this.props.onDrawerToggle) this.props.onDrawerToggle(this.state.collapsed);
  }

  onChange(id, value) {
    if (!this.props.onChange) return;
    if (this.props.id) this.props.onChange(this.props.id, id, value);else this.props.onChange(id, value);
    this.forceUpdate();
  }

  render() {
    const {
      settings
    } = this.props;
    const collapseClass = this.props.collapsible ? `collapsible ${this.state.collapsed ? "collapsed" : "expanded"}` : "";
    const groupClass = `${baseClassName} ${collapseClass}`;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: groupClass
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: this.props.name,
      collapsible: this.props.collapsible,
      onClick: this.toggleCollapse,
      button: this.props.button,
      isGroup: true
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-settings-container",
      ref: this.container
    }, settings.filter(s => !s.hidden).map(setting => {
      let component = null;
      if (setting.type == "dropdown") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        options: setting.options,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "number") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        min: setting.min,
        max: setting.max,
        step: setting.step,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "switch") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        checked: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (!component) return null;
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: setting.id,
        key: setting.id,
        name: setting.name,
        note: setting.note
      }, component);
    })), this.props.showDivider && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_divider__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}
const originalRender = Group.prototype.render;
Object.defineProperty(Group.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("Group", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/settings/sidebarheader.jsx":
/*!*******************************************!*\
  !*** ./src/ui/settings/sidebarheader.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsTitle)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.js */ "./src/data/data.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/history */ "./src/ui/icons/history.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SidebarComponents = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getModule(m => m.Header && m.Separator && m.Item);
const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("Tooltip");
class SettingsTitle extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-sidebar-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(SidebarComponents.Header, null, "BetterDiscord"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: "Changelog"
    }, props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", _extends({}, props, {
      className: "bd-changelog-button",
      onClick: () => _modals__WEBPACK_IMPORTED_MODULE_3__["default"].showChangelogModal(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Changelog)
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_history__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bd-icon",
      size: "16px"
    }))));
  }

}

/***/ }),

/***/ "./src/ui/settings/title.jsx":
/*!***********************************!*\
  !*** ./src/ui/settings/title.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsTitle)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

const className = "bd-settings-title";
const className2 = "bd-settings-title bd-settings-group-title";
class SettingsTitle extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const baseClass = this.props.isGroup ? className2 : className;
    const titleClass = this.props.className ? `${baseClass} ${this.props.className}` : baseClass;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h2", {
      className: titleClass,
      onClick: () => {
        this.props.onClick && this.props.onClick();
      }
    }, this.props.text, this.props.button && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      className: "bd-button bd-button-title",
      onClick: this.props.button.onClick
    }, this.props.button.title), this.props.otherChildren);
  }

}

/***/ }),

/***/ "./src/ui/toasts.js":
/*!**************************!*\
  !*** ./src/ui/toasts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toasts)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


class Toasts {
  static get ChannelsClass() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("sidebar", "hasNotice").sidebar.split(" ")[0];
  }

  static get MembersWrapClass() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("membersWrap").membersWrap.split(" ")[0];
  }

  static get shouldShowToasts() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "general", "showToasts");
  }
  /** Shorthand for `type = "success"` for {@link module:Toasts.show} */


  static async success(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "success"
    }));
  }
  /** Shorthand for `type = "info"` for {@link module:Toasts.show} */


  static async info(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "info"
    }));
  }
  /** Shorthand for `type = "warning"` for {@link module:Toasts.show} */


  static async warning(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "warning"
    }));
  }
  /** Shorthand for `type = "error"` for {@link module:Toasts.show} */


  static async error(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "error"
    }));
  }
  /** Shorthand for `type = "default"` for {@link module:Toasts.show} */


  static async default(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: ""
    }));
  }
  /**
   * This shows a toast similar to android towards the bottom of the screen.
   *
   * @param {string} content The string to show in the toast.
   * @param {object} options Options object. Optional parameter.
   * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
   * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
   * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
   * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
   */


  static show(content, options = {}) {
    try {
      const {
        type = "",
        icon = true,
        timeout = 3000,
        forceShow = false
      } = options;
      if (!this.shouldShowToasts && !forceShow) return;
      this.ensureContainer();
      const toastElem = document.createElement("div");
      toastElem.classList.add("bd-toast");
      if (type) toastElem.classList.add("toast-" + type);
      if (type && icon) toastElem.classList.add("icon");
      toastElem.innerText = content;
      document.querySelector(".bd-toasts").appendChild(toastElem);
      setTimeout(() => {
        toastElem.classList.add("closing");
        setTimeout(() => {
          toastElem.remove();
          if (!document.querySelectorAll(".bd-toasts .bd-toast").length) document.querySelector(".bd-toasts").remove();
        }, 300);
      }, timeout);
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("Toasts", "Unable to show toast", err);
    }
  }

  static ensureContainer() {
    if (document.querySelector(".bd-toasts")) return;
    const container = document.querySelector(`.${this.ChannelsClass} ~ div:not([style])`);
    const memberlist = container ? container.querySelector(`.${this.MembersWrapClass}`) : null;
    const form = container ? container.querySelector("form") : null;
    const left = container ? container.getBoundingClientRect().left : 310;
    const right = memberlist ? memberlist.getBoundingClientRect().left : 0;
    const width = right ? right - container.getBoundingClientRect().left : container.offsetWidth;
    const bottom = form ? form.offsetHeight : 80;
    const toastWrapper = document.createElement("div");
    toastWrapper.classList.add("bd-toasts");
    toastWrapper.style.setProperty("left", left + "px");
    toastWrapper.style.setProperty("width", width + "px");
    toastWrapper.style.setProperty("bottom", bottom + "px");
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.bdBody.appendChild(toastWrapper);
  }

}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\r\n\r\n#bd-editor-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#bd-editor-controls button {\r\n    margin: 0 5px 0 0;\r\n    background: none;\r\n    color: var(--interactive-normal);\r\n    height: 26px;\r\n    font-weight: 600;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#bd-editor-controls button:hover {\r\n    background: var(--background-modifier-hover);\r\n    color: var(--interactive-hover);\r\n}\r\n\r\n#bd-editor-controls button:active {\r\n    background: var(--background-modifier-active);\r\n}\r\n\r\n#bd-editor-controls button svg {\r\n    fill: currentColor;\r\n}\r\n\r\n#bd-editor-controls {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background: var(--background-secondary-alt);\r\n    color: var(--text-normal);\r\n    border: none;\r\n    box-shadow: var(--elevation-low);\r\n    padding: 5px;\r\n    z-index: 10;\r\n}\r\n\r\n.editor-wrapper {\r\n    display: flex;\r\n}\r\n\r\n.editor {\r\n    box-sizing: border-box;\r\n    height: calc(100vh - 250px);\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n.controls-section {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.controls-section .checkbox-inner {\r\n    width: 14px;\r\n    height: 14px;\r\n}\r\n\r\n.controls-section .checkbox-inner .checkbox:checked + span::after {\r\n    left: 2px;\r\n    top: -2px;\r\n}\r\n\r\n.controls-section .checkbox-label {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n}\r\n\r\n.monaco-editor:not(.rename-box),\r\n.monaco-editor .overflow-guard,\r\n.monaco-editor .editor-scrollable,\r\n.monaco-editor .minimap-shadow-visible,\r\n.monaco-editor .decorationsOverviewRuler {\r\n    height: 100% !important;\r\n}\r\n\r\n.monaco-editor:not(.rename-box),\r\n.monaco-editor .overflow-guard,\r\n.monaco-editor .overlayWidgets,\r\n#bd-customcss-editor > div > .overflow-guard > div:nth-child(3) {\r\n    width: 100% !important;\r\n}\r\n\r\n.monaco-editor .minimap {\r\n    right: 14px;\r\n    left: unset !important;\r\n    height: 100% !important;\r\n}\r\n\r\n.monaco-editor .editor-scrollable {\r\n    width: calc(100% - 64px) !important;\r\n}\r\n\r\n.monaco-editor .view-overlays .current-line {\r\n    width: 1e+06px !important;\r\n}\r\n\r\n.bd-fallback-editor {\r\n    height: 100%;\r\n    width: 100%;\r\n    resize: none;\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bd-emote-menu {\r\n    min-height: 0;\r\n}\r\n\r\n.bd-emote-menu-inner {\r\n    padding: 8px 0 0 16px;\r\n}\r\n\r\n.bd-emote-scroller {\r\n    height: 100%;\r\n}\r\n\r\n.bd-emote-header {\r\n    display: flex;\r\n    align-items: center;\r\n    background: var(--background-secondary);\r\n    height: 32px;\r\n    padding: 0 4px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 2;\r\n}\r\n\r\n.bd-emote-header-inner {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    color: var(--header-secondary);\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    transition: color 0.125s;\r\n    width: fit-content;\r\n}\r\n\r\n.bd-emote-header-inner:hover {\r\n    color: var(--header-primary);\r\n}\r\n\r\n.bd-emote-header-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.bd-emote-header-icon svg {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n}\r\n\r\n.bd-emote-header-label {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n    margin: 0 8px;\r\n}\r\n\r\n.bd-emote-collapse-icon svg {\r\n    transition: transform 0.1s;\r\n}\r\n\r\n.bd-emote-collapse-icon.collapsed svg {\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.bd-emote-item {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n    width: 30px;\r\n    height: 30px;\r\n    position: relative;\r\n}\r\n\r\n.bd-emote-item:hover {\r\n    background: var(--background-accent);\r\n}\r\n\r\n.bd-emote-item img {\r\n    max-width: 100%;\r\n}\r\n\r\n.emotewrapper {\r\n    position: relative;\r\n    display: inline-flex;\r\n    object-fit: contain;\r\n    margin: -0.1em 0.05em -0.2em 0.1em;\r\n    vertical-align: top;\r\n}\r\n\r\n.emotewrapper.jumboable {\r\n    margin-bottom: 0;\r\n    margin-top: 0.2em;\r\n    vertical-align: -0.3em;\r\n}\r\n\r\n.emote {\r\n    object-fit: contain;\r\n    width: 1.375em;\r\n    height: 1.375em;\r\n    vertical-align: bottom;\r\n}\r\n\r\n.emote.jumboable {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    min-height: 3rem;\r\n}\r\n\r\n.fav {\r\n    display: none;\r\n    position: absolute;\r\n    width: 15px;\r\n    height: 15px;\r\n    right: -7px;\r\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAzFBMVEUAAABQUFBMTExLS0tNTU1MTExNTU1NTU1MTExMTExNTU1LS0tEREBEREBEREBEREBJSUhLS0tLS0tEREBNTU1NTU1NTU1EREArKyhNTU1NTU0AAABMTExKSklMTExNTU1NTU1NTU1KSkpMTExKSkhNTU1KSkpISEZNTU1LS0tAQDxOTk5KSkpLS0tNTU1MTExMTEx/f39MTExMTExLS0pLS0tMTExNTU1NTU1LS0pNTU1NTU1NTU1NTU1NTU1NTUxNTU1NTU1NTUxMTEzB8C/5AAAAOnRSTlMAI8X96oWAgYSF68QBAg0PMCb9BIuLgQUD4N0Bh0mKhZSOQ4gcrKscaW8QRE6fmJyjAshASceG7cIpqQOxTQAAALVJREFUGFddx6FOA0EYAOGZvd07Qm6vVCAAgUUgQEDfX/YZMAigqaFN7iC5tsmPqGPUN/AvUVeoEbGOCElJz08Uzeixqu4AqomVVSNngOVjTqDGZSl3UFtPGV2ot2zaq96YM9p5Ddzcf/nTTAlj+/sNtNu8OcwkIsbPBtrUfMQeEhGQmHbmGIFMwLPzu6UMIwBNgToshgq8Nr2ki+Oy7ebDHp70LRPWB6OZgfWLWei7fJonOOsPCGA9kVlssOoAAAAASUVORK5CYII=\");\r\n    border: none;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    background-color: #303030;\r\n    border-radius: 5px;\r\n    top: -7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.fav.active {\r\n    background-color: yellow;\r\n}\r\n\r\n.emotewrapper:hover .fav {\r\n    display: block;\r\n}\r\n\r\n.emote.stop-animation {\r\n    animation: none;\r\n}\r\n\r\n.emoteflip,\r\n.emotespinflip {\r\n    transform: scaleX(-1);\r\n}\r\n\r\n.emotespin {\r\n    animation: 1s emote-spin infinite linear;\r\n}\r\n\r\n.emote1spin {\r\n    animation: 1s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotespin2 {\r\n    animation: 0.5s emote-spin infinite linear;\r\n}\r\n\r\n.emote2spin {\r\n    animation: 0.5s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotespin3 {\r\n    animation: 0.2s emote-spin infinite linear;\r\n}\r\n\r\n.emote3spin {\r\n    animation: 0.2s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotepulse {\r\n    animation: 1s emote-pulse infinite linear;\r\n}\r\n\r\n.emotetr {\r\n    transform: translateX(-3px);\r\n}\r\n\r\n.emotebl {\r\n    transform: translateY(-3px);\r\n}\r\n\r\n.emotebr {\r\n    transform: translate(-3px, -3px);\r\n}\r\n\r\n.emoteshake {\r\n    animation: 1s emote-shake infinite linear;\r\n}\r\n\r\n.emoteflap {\r\n    transform: scaleY(-1);\r\n}\r\n\r\n.emoteshake2 {\r\n    animation: emote-shake2 0.3s linear infinite;\r\n}\r\n\r\n.emoteshake3 {\r\n    animation: emote-shake3 0.1s linear infinite;\r\n}\r\n\r\n@keyframes emote-shake2 {\r\n    25% {\r\n        transform: translate(-1px, -1px);\r\n    }\r\n\r\n    50% {\r\n        transform: translate(-1px, 1px);\r\n    }\r\n\r\n    75% {\r\n        transform: translate(1px, 1px);\r\n    }\r\n\r\n    75% {\r\n        transform: translate(1px, -1px);\r\n    }\r\n}\r\n\r\n@keyframes emote-shake3 {\r\n    25% {\r\n        transform: translate(-1px, -1px);\r\n    }\r\n\r\n    50% {\r\n        transform: translate(-1px, 1px);\r\n    }\r\n\r\n    75% {\r\n        transform: translate(1px, 1px);\r\n    }\r\n\r\n    75% {\r\n        transform: translate(1px, -1px);\r\n    }\r\n}\r\n\r\n@keyframes emote-spin {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes emote-spin-reverse {\r\n    from {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    to {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n\r\n@keyframes emote-pulse {\r\n    0% {\r\n        -webkit-transform: scale(1, 1);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: scale(1.2, 1.2);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1, 1);\r\n    }\r\n}\r\n\r\n@keyframes emote-shake {\r\n    10%,\r\n    90% {\r\n        transform: translate3d(-1px, 0, 0);\r\n    }\r\n\r\n    20%,\r\n    80% {\r\n        transform: translate3d(2px, 0, 0);\r\n    }\r\n\r\n    30%,\r\n    50%,\r\n    70% {\r\n        transform: translate3d(-4px, 0, 0);\r\n    }\r\n\r\n    40%,\r\n    60% {\r\n        transform: translate3d(4px, 0, 0);\r\n    }\r\n}\r\n\r\n@keyframes bd-placeholder-card-pulse {\r\n    0% {\r\n        opacity: 0.6;\r\n    }\r\n\r\n    50% {\r\n        opacity: 0.8;\r\n    }\r\n\r\n    to {\r\n        opacity: 0.6;\r\n    }\r\n}\r\n\r\n#bd-pub-li {\r\n    height: 24px;\r\n    overflow: hidden;\r\n}\r\n\r\n#bd-pub-button {\r\n    border-radius: 4px;\r\n    background-color: var(--background-primary);\r\n    color: var(--text-normal);\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    height: 24px;\r\n    transition: background-color 0.15s ease-out, color 0.15s ease-out;\r\n}\r\n\r\n#bd-pub-button:hover {\r\n    color: #FFFFFF;\r\n    background-color: #3E82E5;\r\n}\r\n\r\n#bd-connection {\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-footnote {\r\n    color: #B9BBBE;\r\n    font-size: 11px;\r\n}\r\n\r\n.bd-button-next,\r\n.bd-button-reconnect {\r\n    margin: 5px 10px 10px 0;\r\n    width: 100%;\r\n    min-height: 20px;\r\n}\r\n\r\n/* Rewrite */\r\n\r\n.bd-server-search {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.bd-card-list {\r\n    display: grid;\r\n    grid-gap: 16px;\r\n    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));\r\n}\r\n\r\n.bd-server-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 320px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n    position: relative;\r\n    transition: box-shadow 0.2s ease-out, transform 0.2s ease-out, background 0.2s ease-out, opacity 0.2s ease-in;\r\n    cursor: pointer;\r\n    background-color: var(--activity-card-background);\r\n}\r\n\r\n.theme-light .bd-server-card {\r\n    box-shadow: 0 0 0 1px rgba(185, 187, 190, 0.3), var(--elevation-medium);\r\n}\r\n\r\n.theme-dark .bd-server-card {\r\n    background-color: var(--background-secondary-alt);\r\n}\r\n\r\n.bd-server-card:hover,\r\n.bd-server-card:focus,\r\n.theme-light .bd-server-card:hover,\r\n.theme-light .bd-server-card:focus {\r\n    transform: translateY(-1px);\r\n    box-shadow: var(--elevation-high);\r\n}\r\n\r\n.theme-dark .bd-server-card:hover,\r\n.theme-dark .bd-server-card:focus {\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\n.bd-placeholder-card {\r\n    background-color: var(--background-secondary-alt);\r\n    animation: bd-placeholder-card-pulse 1.8s ease-in-out infinite;\r\n    height: 320px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n    position: relative;\r\n}\r\n\r\n.bd-server-header {\r\n    height: 143px;\r\n    position: relative;\r\n    display: block;\r\n    overflow: visible;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.bd-server-splash-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: opacity 0.2s, transform 0.2s ease-out;\r\n    transform: scale(1);\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-server-card:hover .bd-server-splash-container {\r\n    -webkit-transform: scale(1.01) translateZ(0);\r\n    transform: scale(1.01) translateZ(0);\r\n}\r\n\r\n.bd-server-splash {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    filter: blur(20px);\r\n}\r\n\r\n.bd-server-icon {\r\n    position: absolute;\r\n    bottom: -21px;\r\n    left: 12px;\r\n    width: 40px;\r\n    background: var(--background-secondary-alt);\r\n    border: 4px solid var(--background-secondary-alt);\r\n    border-radius: 25%;\r\n    transition: background 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out;\r\n}\r\n\r\n.bd-server-card:hover .bd-server-icon {\r\n    border-color: var(--background-tertiary);\r\n    background: var(--background-tertiary);\r\n}\r\n\r\n.bd-server-info {\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    position: relative;\r\n    flex-direction: column;\r\n    align-content: stretch;\r\n    padding: 0 16px 16px;\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-server-title {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bd-server-name {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    color: var(--header-primary);\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n}\r\n\r\n.bd-server-description {\r\n    flex: 1 1 auto;\r\n    overflow: hidden;\r\n    margin: 4px 0 16px;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    color: var(--header-secondary);\r\n    font-size: 14px;\r\n    line-height: normal;\r\n}\r\n\r\n.bd-server-footer {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.bd-server-count {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    margin-right: 16px;\r\n}\r\n\r\n.bd-server-count-dot {\r\n    background-color: #43B581;\r\n    border-radius: 50%;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-right: 4px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.bd-server-count + .bd-server-count .bd-server-count-dot {\r\n    background-color: #B9BBBE;\r\n}\r\n\r\n.bd-server-count-text {\r\n    color: var(--header-secondary);\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n}\r\n\r\n.bd-server-tag {\r\n    margin-left: 5px;\r\n    font-size: 10px;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    text-indent: 0;\r\n    height: 15px;\r\n    padding: 0 4px;\r\n    margin-top: 1px;\r\n    border-radius: 3px;\r\n    background: #3E82E5;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.bd-pagination {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 15px;\r\n    color: var(--header-primary);\r\n}\r\n\r\n.bd-pagination span {\r\n    font-weight: 600;\r\n}\r\n\r\n.bd-pagination button {\r\n    background: none;\r\n    opacity: 0.7;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid var(--background-tertiary);\r\n    border-radius: 3px;\r\n    padding: 0;\r\n}\r\n\r\n.bd-pagination button:hover,\r\n.bd-pagination button:active {\r\n    opacity: 1;\r\n    background: var(--background-accent);\r\n}\r\n\r\n.bd-pagination button:active {\r\n    opacity: 1;\r\n    background: var(--background-secondary);\r\n}\r\n\r\n.bd-pagination button svg {\r\n    fill: var(--header-primary);\r\n}\r\n\r\n.bd-pagination button[disabled] {\r\n    opacity: 0.2;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.bd-pagination + .bd-settings-title {\r\n    margin-top: 20px;\r\n}\r\n\r\n.bd-reload {\r\n    cursor: pointer;\r\n    vertical-align: top;\r\n    fill: #DCDDDE;\r\n}\r\n\r\n.bd-reload:hover {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n.bd-reload-header {\r\n    margin-left: 5px;\r\n}\r\n\r\n.bd-reload-card {\r\n    margin-right: 5px;\r\n}\r\n\r\n.bd-controls,\r\n.bd-controls-advanced {\r\n    display: flex;\r\n}\r\n\r\n.bd-addon-list {\r\n    user-select: text;\r\n}\r\n\r\n.bd-addon-list.bd-grid-view {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    column-gap: 10px;\r\n    row-gap: 10px;\r\n}\r\n\r\n.bd-addon-list .bd-addon-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    background: var(--background-secondary);\r\n}\r\n\r\n.bd-addon-list.bd-grid-view .bd-addon-card {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.bd-addon-list .bd-addon-header {\r\n    color: var(--header-primary);\r\n    background: var(--background-secondary-alt);\r\n    padding: 16px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: 600;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-addon-header .bd-icon {\r\n    margin-right: 8px;\r\n    fill: var(--header-primary);\r\n}\r\n\r\n.bd-title,\r\n.bd-name,\r\n.bd-meta {\r\n    display: inline;\r\n    line-height: normal;\r\n}\r\n\r\n.bd-title {\r\n    flex: 1;\r\n    min-width: 0;\r\n}\r\n\r\n.bd-meta {\r\n    color: var(--channels-default);\r\n    font-weight: 500;\r\n}\r\n\r\n.bd-name {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.bd-name::after,\r\n.bd-version::after {\r\n    display: inline;\r\n    content: \" \";\r\n}\r\n\r\n.bd-grid-view .bd-title {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.bd-grid-view .bd-meta {\r\n    font-size: 12px;\r\n}\r\n\r\n.bd-description-wrap {\r\n    flex: 1;\r\n    padding: 8px 16px 0 16px;\r\n}\r\n\r\n.bd-addon-list .bd-description {\r\n    word-break: break-word;\r\n    margin-bottom: 5px;\r\n    padding: 5px 0;\r\n    overflow-y: auto;\r\n    max-height: 175px;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    -webkit-line-clamp: 3;\r\n    color: var(--header-secondary);\r\n}\r\n\r\n.bd-description em {\r\n    font-style: italic;\r\n}\r\n\r\n.bd-description code {\r\n    padding: 0.2em;\r\n    margin: -0.2em 0;\r\n    border-radius: 3px;\r\n    font-size: 85%;\r\n    line-height: 1.125rem;\r\n    white-space: pre-wrap;\r\n    background: var(--background-tertiary);\r\n}\r\n\r\n.bd-addon-list .scroller::-webkit-scrollbar-track-piece,\r\n.bd-addon-list .scroller::-webkit-scrollbar-thumb {\r\n    border-radius: 0 !important;\r\n    border-color: transparent;\r\n}\r\n\r\n.bd-addon-list .bd-footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 8px 16px 16px 16px;\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-controls > .bd-addon-button {\r\n    border-radius: 0;\r\n    padding: 4px 6px;\r\n}\r\n\r\n.bd-links .bd-addon-button + .bd-addon-button {\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-controls > .bd-addon-button svg {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n.bd-controls > .bd-addon-button:first-of-type {\r\n    border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.bd-controls > .bd-addon-button:last-of-type {\r\n    border-radius: 0 3px 3px 0;\r\n}\r\n\r\n.bd-controls > .bd-addon-button:only-child {\r\n    border-radius: 3px;\r\n}\r\n\r\n.bd-controls + .bd-addon-list {\r\n    margin-top: 10px;\r\n}\r\n\r\n.bd-addon-controls {\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.bd-addon-controls .bd-search {\r\n    font-size: 13px;\r\n    margin: 0;\r\n    width: 200px;\r\n}\r\n\r\n.bd-addon-dropdowns {\r\n    display: flex;\r\n}\r\n\r\n/* Error Boundary stuff */\r\n\r\n.react-error {\r\n    color: red;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    cursor: pointer;\r\n}\r\n\r\n.settings-open .bd-close {\r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n\r\n.bd-addon-modal {\r\n    min-height: unset;\r\n}\r\n\r\n.bd-addon-modal-settings {\r\n    /* padding: 16px; */\r\n    padding: 0 16px 16px 16px;\r\n}\r\n\r\n.bd-addon-modal-footer .bd-button {\r\n    background-color: #3E82E5;\r\n}\r\n\r\n.bd-addon-modal-footer .bd-button:hover {\r\n    background-color: rgb(56, 117, 206);\r\n}\r\n\r\n.bd-addon-modal-footer .bd-button:active {\r\n    background-color: rgb(50, 104, 183);\r\n}\r\n\r\n.bd-addon-views {\r\n    display: flex;\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-addon-views .bd-view-button {\r\n    background-color: transparent;\r\n    padding: 3px 4px;\r\n}\r\n\r\n.bd-addon-views .bd-view-button svg {\r\n    fill: var(--interactive-normal);\r\n}\r\n\r\n.bd-addon-views .bd-view-button.selected svg {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n.bd-addon-views .bd-view-button:hover {\r\n    background-color: var(--background-modifier-selected);\r\n}\r\n\r\n.bd-addon-views .bd-view-button:active {\r\n    background-color: var(--background-modifier-accent);\r\n}\r\n\r\n.bd-addon-views .bd-view-button.selected {\r\n    background-color: #3E82E5;\r\n}\r\n\r\n.bd-addon-views .bd-view-button + .bd-view-button {\r\n    margin-left: 5px;\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-links,\r\n.bd-addon-list .bd-footer .bd-links a,\r\n.bd-addon-list .bd-footer .bd-addon-button {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-link {\r\n    color: var(--interactive-normal);\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-link:hover {\r\n    color: var(--interactive-hover);\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-link:active {\r\n    color: var(--interactive-active);\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-link svg {\r\n    fill: currentColor;\r\n}\r\n\r\n.bd-addon-list .bd-footer .bd-links .bd-addon-button {\r\n    height: 24px;\r\n}\r\n\r\n.theme-dark .bd-social-logo path {\r\n    fill: #ADADAD;\r\n}\r\n\r\n.theme-light .bd-social-logo path {\r\n    fill: #B9BBBE;\r\n}\r\n\r\n.bd-social-link:hover .bd-social-logo {\r\n    opacity: 1;\r\n}\r\n\r\n.bd-social-link:hover .bd-social-logo path:first-of-type {\r\n    fill: #3E82E5;\r\n}\r\n\r\n.bd-button-title {\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-select-wrapper {\r\n    color: var(--text-muted);\r\n    font-size: 13px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.bd-select-wrapper + .bd-select-wrapper {\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-select-wrapper label {\r\n    margin-right: 5px;\r\n}\r\n\r\n.bd-select {\r\n    position: relative;\r\n    cursor: pointer;\r\n    color: var(--text-normal);\r\n    font-size: 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: var(--deprecated-text-input-bg);\r\n    border: 1px solid var(--deprecated-text-input-border);\r\n    border-radius: 3px;\r\n    padding: 5px 5px 5px 0;\r\n    transition: 150ms ease border-color;\r\n}\r\n\r\n.bd-select:hover,\r\n.bd-select.menu-open {\r\n    border-color: var(--background-tertiary);\r\n}\r\n\r\n.bd-select.bd-select-transparent {\r\n    align-items: flex-start;\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n}\r\n\r\n.bd-select-value {\r\n    padding-left: 8px;\r\n}\r\n\r\n.bd-select-arrow {\r\n    margin-left: 10px;\r\n    fill: var(--interactive-normal);\r\n}\r\n\r\n.bd-select .bd-select-options {\r\n    position: absolute;\r\n    background: var(--background-secondary);\r\n    border-radius: 0 0 3px 3px;\r\n    max-height: 300px;\r\n    min-width: calc(100% + 2px);\r\n    overflow-y: auto;\r\n    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 5px 0;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    border-top: 0;\r\n    margin-top: -1px;\r\n    margin-left: -1px;\r\n    z-index: 2;\r\n    top: 100%;\r\n}\r\n\r\n.bd-select-transparent .bd-select-options {\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    margin-top: 3px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.bd-select .bd-select-option {\r\n    padding: 8px 12px;\r\n    cursor: pointer;\r\n    white-space: pre;\r\n}\r\n\r\n.bd-select .bd-select-option:hover {\r\n    background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.bd-select .bd-select-option.selected {\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.bd-setting-item .bd-select {\r\n    min-width: 200px;\r\n}\r\n\r\n.bd-setting-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.bd-setting-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.bd-setting-header label {\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    word-wrap: break-word;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: var(--header-primary);\r\n}\r\n\r\n.bd-setting-note {\r\n    color: var(--header-secondary);\r\n    margin-top: 4px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.bd-setting-divider {\r\n    width: 100%;\r\n    height: 1px;\r\n    margin-top: 20px;\r\n    border-bottom: thin solid var(--background-modifier-accent);\r\n}\r\n\r\n.bd-settings-container {\r\n    height: auto;\r\n    overflow: hidden;\r\n    transition: height 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\r\n}\r\n\r\n.bd-settings-group.collapsed .bd-settings-container {\r\n    height: 0;\r\n}\r\n\r\n.bd-settings-group.expanded .bd-settings-container:not(.animating) {\r\n    overflow: visible;\r\n}\r\n\r\n.bd-settings-title {\r\n    color: #FFFFFF;\r\n    font-weight: 600;\r\n    cursor: default;\r\n    flex: 1;\r\n}\r\n\r\n.bd-settings-title:not(.bd-settings-group-title) {\r\n    margin-bottom: 20px;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n.bd-settings-group.collapsible .bd-settings-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    order: 1;\r\n}\r\n\r\n.bd-settings-group.collapsible .bd-settings-title::before {\r\n    content: \"\";\r\n    background-color: var(--background-modifier-accent);\r\n    height: 2px;\r\n    order: 2;\r\n    flex: 1;\r\n    margin: 0 10px 0 15px;\r\n}\r\n\r\n.bd-settings-group.collapsible .bd-settings-title::after {\r\n    content: \"\";\r\n    -webkit-mask: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K') center/contain no-repeat;\r\n    mask: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K') center/contain no-repeat;\r\n    background: var(--header-secondary);\r\n    height: 20px;\r\n    width: 20px;\r\n    display: inline-block;\r\n    vertical-align: bottom;\r\n    transition: transform 0.3s ease;\r\n    transform: rotate(0);\r\n    order: 3;\r\n}\r\n\r\n.bd-settings-group.collapsed .bd-settings-title::after {\r\n    transition: transform 0.3s ease;\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.bd-settings-group ~ .bd-settings-group .bd-settings-title {\r\n    margin-top: 30px;\r\n    transition: margin-top 300ms ease;\r\n}\r\n\r\n.bd-settings-group.collapsed + .bd-settings-group .bd-settings-title {\r\n    margin-top: 0;\r\n}\r\n\r\n.bd-settings-title.bd-settings-group-title {\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    color: var(--interactive-normal);\r\n}\r\n\r\n.checkbox-item {\r\n    display: flex;\r\n}\r\n\r\n.checkbox-item .checkbox-label {\r\n    margin-right: 8px;\r\n}\r\n\r\n.bd-addon-errors {\r\n    margin-top: 16px;\r\n}\r\n\r\n.bd-addon-error {\r\n    position: relative;\r\n    border-radius: 5px;\r\n    padding: 0;\r\n    margin-bottom: 16px;\r\n    background: var(--deprecated-card-editable-bg);\r\n    border: 1px solid;\r\n}\r\n\r\n.theme-dark .bd-addon-error {\r\n    border-color: var(--background-secondary-alt);\r\n}\r\n\r\n.theme-light .bd-addon-error {\r\n    border-color: var(--background-tertiary);\r\n}\r\n\r\n.bd-addon-error-header {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 20px 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bd-addon-error-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    align-self: flex-start;\r\n    background-color: var(--background-floating);\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.bd-addon-error-icon svg {\r\n    fill: var(--interactive-normal);\r\n    width: 24px !important;\r\n    height: 24px !important;\r\n}\r\n\r\n.bd-addon-error-expander {\r\n    color: var(--interactive-normal);\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\n.bd-addon-error-expander,\r\n.bd-addon-error-icon {\r\n    flex: 0 0 auto;\r\n}\r\n\r\n.bd-addon-error.collapsed .bd-addon-error-expander {\r\n    transform: rotate(90deg);\r\n}\r\n\r\n.bd-addon-error-header-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.bd-addon-error-body {\r\n    padding: 0 16px 24px;\r\n}\r\n\r\n.bd-addon-error-stack code {\r\n    user-select: text;\r\n    font-size: 0.875rem;\r\n    line-height: 1.125rem;\r\n    text-indent: 0;\r\n    white-space: pre-wrap;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: var(--background-tertiary) var(--background-secondary);\r\n    background: var(--background-secondary);\r\n    border: 1px solid var(--background-tertiary);\r\n}\r\n\r\n@keyframes open-window {\r\n    from {\r\n        transform: scale(0.9);\r\n    }\r\n\r\n    to {\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.floating-window {\r\n    animation: open-window 200ms ease;\r\n    min-width: 200px;\r\n    min-height: 300px;\r\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    -webkit-app-region: no-drag;\r\n    position: fixed;\r\n    z-index: 1001;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.floating-window.modal-open {\r\n    z-index: 999;\r\n}\r\n\r\n.floating-window.resizable {\r\n    overflow: auto;\r\n    resize: both;\r\n    padding-bottom: 10px;\r\n    background: var(--background-tertiary);\r\n}\r\n\r\n.floating-window-titlebar {\r\n    width: 100%;\r\n    height: 28px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    color: #FFFFFF;\r\n    background: var(--background-tertiary); /* #2F3129background-color: #202225; */\r\n}\r\n\r\n.floating-window-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--background-secondary);\r\n    color: #FFFFFF;\r\n    flex: 1;\r\n    overflow: hidden;\r\n}\r\n\r\n.floating-window-titlebar .title {\r\n    /* font-weight: bold; */\r\n    font-size: 0.85em;\r\n    font-weight: 600;\r\n    color: var(--header-secondary);\r\n    flex: 1;\r\n    padding: 0 8px;\r\n}\r\n\r\n.floating-window-buttons {\r\n    display: flex;\r\n}\r\n\r\n.floating-window-buttons .button {\r\n    cursor: pointer;\r\n    height: 28px;\r\n    width: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: var(--interactive-normal);\r\n}\r\n\r\n.floating-window-buttons .button svg,\r\n.floating-window-buttons .button .fill {\r\n    fill: currentColor;\r\n}\r\n\r\n.floating-window-buttons .maximize-button:hover {\r\n    background: var(--background-modifier-hover);\r\n}\r\n\r\n.floating-window-buttons .maximize-button:active {\r\n    background: var(--background-modifier-active);\r\n}\r\n\r\n.floating-window-buttons .close-button:hover {\r\n    background: #F04747;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.floating-window-content #bd-editor-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.floating-window .editor-wrapper {\r\n    flex: 1;\r\n    overflow: hidden;\r\n}\r\n\r\n.floating-window .editor {\r\n    height: auto;\r\n    flex: 1;\r\n}\r\n\r\n.floating-window #bd-editor-controls {\r\n    z-index: 10;\r\n    height: auto;\r\n    background: var(--background-secondary-alt);\r\n    border: none;\r\n    box-shadow: var(--elevation-low);\r\n}\r\n\r\n#floating-editor-window {\r\n    min-width: 340px;\r\n    min-height: 280px;\r\n    max-height: 900px;\r\n    max-width: 750px;\r\n}\r\n\r\n.floating-addon-window {\r\n    min-width: 535px;\r\n    min-height: 605px;\r\n    max-height: 90%;\r\n    max-width: 90%;\r\n}\r\n\r\n.bd-notice-success {\r\n    --color: #3BA55D;\r\n}\r\n\r\n.bd-notice-error {\r\n    --color: #ED4245;\r\n}\r\n\r\n.bd-notice-info {\r\n    --color: #4A8FE1;\r\n}\r\n\r\n.bd-notice-warning {\r\n    --color: #FAA81A;\r\n}\r\n\r\n.bd-notice-closing {\r\n    transition: height 400ms ease;\r\n    height: 0 !important;\r\n}\r\n\r\n@keyframes bd-open-notice {\r\n    from {\r\n        height: 0;\r\n    }\r\n}\r\n\r\n.bd-notice {\r\n    animation: bd-open-notice 400ms ease;\r\n    overflow: hidden;\r\n    height: 36px;\r\n    font-size: 14px;\r\n    line-height: 36px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    position: relative;\r\n    padding-left: 4px;\r\n    padding-right: 28px;\r\n    z-index: 101;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    box-shadow: var(--elevation-low);\r\n    color: #FFFFFF;\r\n    background: var(--color, var(--brand-experiment-600, #3C45A5));\r\n}\r\n\r\n.bd-notice:first-child {\r\n    border-radius: 8px 0 0;\r\n}\r\n\r\n.bd-notice-close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 36px;\r\n    height: 36px;\r\n    background: url(https://discord.com/assets/7731c77d99babca1a8faec204d98c380.svg) no-repeat;\r\n    background-position: 50% 55%;\r\n    background-size: 10px 10px;\r\n    opacity: 0.5;\r\n    transition: opacity 0.2s;\r\n    cursor: pointer;\r\n    -webkit-app-region: no-drag;\r\n}\r\n\r\n.bd-notice-button {\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    position: relative;\r\n    top: 6px;\r\n    border: 1px solid;\r\n    color: #FFFFFF;\r\n    border-radius: 3px;\r\n    height: 24px;\r\n    padding: 0 10px;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 10px;\r\n    line-height: 22px;\r\n    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;\r\n    -webkit-app-region: no-drag;\r\n    border-color: #FFFFFF;\r\n    background: transparent;\r\n}\r\n\r\n.bd-notice-button:hover {\r\n    color: var(--color, var(--background-mobile-primary));\r\n    background: #FFFFFF;\r\n}\r\n\r\n.bd-notice-close:hover {\r\n    opacity: 1;\r\n}\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n    opacity: 0.5;\r\n}\r\n\r\n.bd-number-input {\r\n    display: flex;\r\n    background-color: var(--deprecated-text-input-bg);\r\n    border: 1px solid var(--deprecated-text-input-border);\r\n    color: var(--text-normal);\r\n    font-size: 14px;\r\n    padding: 5px;\r\n    margin: 0;\r\n    border-radius: 3px;\r\n    width: 70px;\r\n}\r\n\r\n.bd-sidebar-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.bd-sidebar-header .bd-changelog-button {\r\n    height: 16px;\r\n}\r\n\r\n.bd-sidebar-header .bd-icon {\r\n    cursor: pointer;\r\n    fill: var(--interactive-normal);\r\n}\r\n\r\n.bd-sidebar-header .bd-icon:hover {\r\n    fill: var(--interactive-hover);\r\n}\r\n\r\n/* Switches */\r\n\r\n.bd-switch {\r\n    position: relative;\r\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1) filter, 250ms cubic-bezier(0, 0.3, 0.7, 1) opacity;\r\n}\r\n\r\n.bd-switch-body {\r\n    --switch-color: rgb(114, 118, 125);\r\n    --symbol1path: path('M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z');\r\n    --symbol2path: path('M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z');\r\n\r\n    border-radius: 14px;\r\n    width: 40px;\r\n    height: 24px;\r\n    background-color: var(--switch-color);\r\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1) background-color;\r\n    position: relative;\r\n}\r\n\r\n.bd-switch input:active + .bd-switch-body {\r\n    --switch-color: rgba(100, 137, 126);\r\n}\r\n\r\n.bd-switch input:checked + .bd-switch-body {\r\n    --switch-color: rgb(67, 181, 129);\r\n    --symbol1path: path('M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z');\r\n    --symbol2path: path('M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z');\r\n}\r\n\r\n.full-motion .bd-switch input:active + .bd-switch-body {\r\n    --symbol1path: path('M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z');\r\n    --symbol2path: path('M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z');\r\n}\r\n\r\n.bd-switch input:checked:active + .bd-switch-body {\r\n    --switch-color: rgba(81, 162, 128);\r\n}\r\n\r\n.full-motion .bd-switch input:checked:active + .bd-switch-body {\r\n    --symbol1path: path('M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z');\r\n    --symbol2path: path('M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z');\r\n}\r\n\r\n.bd-switch .bd-switch-symbol path {\r\n    fill: var(--switch-color);\r\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\r\n}\r\n\r\n.bd-switch .bd-switch-symbol path:first-child {\r\n    d: var(--symbol1path);\r\n}\r\n\r\n.bd-switch .bd-switch-symbol path:last-child {\r\n    d: var(--symbol2path);\r\n}\r\n\r\n.bd-switch input {\r\n    position: absolute;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bd-switch-body .bd-switch-slider {\r\n    display: block;\r\n    position: absolute;\r\n    left: -3px;\r\n    width: 28px;\r\n    height: 18px;\r\n    margin: 3px;\r\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\r\n}\r\n\r\n.bd-switch input:active + .bd-switch-body .bd-switch-slider {\r\n    left: 1px;\r\n}\r\n\r\n.bd-switch input:checked + .bd-switch-body .bd-switch-slider {\r\n    left: 12px;\r\n}\r\n\r\n.bd-switch input:active:checked + .bd-switch-body .bd-switch-slider {\r\n    left: 8px;\r\n}\r\n\r\n.bd-switch-body .bd-switch-slider .bd-switch-handle {\r\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\r\n    position: relative;\r\n}\r\n\r\n.bd-switch input:active + .bd-switch-body .bd-switch-handle {\r\n    width: 28px;\r\n    height: 18px;\r\n    y: 1;\r\n    x: 0;\r\n}\r\n\r\n.bd-switch input:checked:active + .bd-switch-body .bd-switch-handle {\r\n    x: 0;\r\n}\r\n\r\n.bd-switch-disabled {\r\n    opacity: 0.5;\r\n    filter: grayscale(1);\r\n}\r\n\r\n.bd-tab-bar {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.bd-tab-item {\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-width: 40px;\r\n    display: flex;\r\n    border-radius: 4px;\r\n    margin-right: 16px;\r\n    padding: 2px 8px;\r\n    -webkit-app-region: no-drag;\r\n    cursor: pointer;\r\n    position: relative;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    color: var(--interactive-normal);\r\n    flex-shrink: 0;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n}\r\n\r\n.bd-tab-item:last-child {\r\n    margin: 0;\r\n}\r\n\r\n.bd-tab-item:hover,\r\n.bd-tab-item.selected {\r\n    color: var(--interactive-active);\r\n}\r\n\r\n.bd-tab-item.selected {\r\n    cursor: default;\r\n    background-color: var(--background-modifier-selected);\r\n}\r\n\r\n.bd-tab-item:hover {\r\n    background-color: var(--background-modifier-hover);\r\n}\r\n\r\n.bd-tab-item:active {\r\n    background-color: var(--background-modifier-active);\r\n}\r\n\r\n.bd-toasts {\r\n    position: fixed;\r\n    display: flex;\r\n    top: 0;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    pointer-events: none;\r\n    z-index: 4000;\r\n}\r\n\r\n@keyframes bd-toast-up {\r\n    from {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.bd-toast {\r\n    animation: bd-toast-up 300ms ease;\r\n    transform: translateY(-10px);\r\n    background-color: var(--background-primary);\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    box-shadow: var(--elevation-medium), var(--elevation-stroke);\r\n    font-weight: 500;\r\n    color: var(--header-primary);\r\n    font-size: 14px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n    pointer-events: none;\r\n    user-select: none;\r\n}\r\n\r\n@keyframes bd-toast-down {\r\n    to {\r\n        transform: translateY(0);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.bd-toast.toast-info,\r\n.bd-toast.toast-success,\r\n.bd-toast.toast-danger,\r\n.bd-toast.toast-error,\r\n.bd-toast.toast-warning,\r\n.bd-toast.toast-warn {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.bd-toast.closing {\r\n    animation: bd-toast-down 200ms ease;\r\n    animation-fill-mode: forwards;\r\n    opacity: 1;\r\n    transform: translateY(-10px);\r\n}\r\n\r\n.bd-toast.icon {\r\n    padding-left: 30px;\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    background-position: 6px 50%;\r\n}\r\n\r\n.bd-toast.toast-info {\r\n    background-color: #4A90E2;\r\n}\r\n\r\n.bd-toast.toast-info.icon {\r\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=\");\r\n}\r\n\r\n.bd-toast.toast-success {\r\n    background-color: #43B581;\r\n}\r\n\r\n.bd-toast.toast-success.icon {\r\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz48L3N2Zz4=\");\r\n}\r\n\r\n.bd-toast.toast-danger,\r\n.bd-toast.toast-error {\r\n    background-color: #F04747;\r\n}\r\n\r\n.bd-toast.toast-danger.icon,\r\n.bd-toast.toast-error.icon {\r\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+\");\r\n}\r\n\r\n.bd-toast.toast-warning,\r\n.bd-toast.toast-warn {\r\n    background-color: #FFA600;\r\n}\r\n\r\n.bd-toast.toast-warning.icon,\r\n.bd-toast.toast-warn.icon {\r\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==\");\r\n}\r\n\r\n.bd-empty-image-container {\r\n    background: transparent;\r\n}\r\n\r\n.bd-empty-image-header {\r\n    color: var(--header-primary);\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.bd-empty-image-message {\r\n    color: var(--header-secondary);\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.bd-empty-image-container .bd-button {\r\n    margin-top: 10px;\r\n    padding: 10px 16px;\r\n}\r\n\r\n.bd-empty-results {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    color: var(--text-normal);\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.bd-empty-results-text {\r\n    width: 280px;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.bd-button {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #3E82E5;\r\n    color: #FFFFFF;\r\n    border-radius: 3px;\r\n    padding: 4px 8px;\r\n    transition: background-color 0.17s ease, color 0.17s ease, opacity 250ms ease;\r\n}\r\n\r\n.bd-button:hover {\r\n    background-color: #3875CE;\r\n}\r\n\r\n.bd-button:active {\r\n    background-color: #3268B7;\r\n}\r\n\r\n.bd-button.bd-button-success {\r\n    background-color: #43B581;\r\n}\r\n\r\n.bd-button.bd-button-success:hover {\r\n    background-color: #3CA374;\r\n}\r\n\r\n.bd-button.bd-button-success:active {\r\n    background-color: #369167;\r\n}\r\n\r\n.bd-button.bd-button-warning {\r\n    background-color: #FAA61A;\r\n}\r\n\r\n.bd-button.bd-button-warning:hover {\r\n    background-color: #E19517;\r\n}\r\n\r\n.bd-button.bd-button-warning:active {\r\n    background-color: #C88515;\r\n}\r\n\r\n.bd-button.bd-button-danger {\r\n    background-color: #F04747;\r\n}\r\n\r\n.bd-button.bd-button-danger:hover {\r\n    background-color: #D84040;\r\n}\r\n\r\n.bd-button.bd-button-danger:active {\r\n    background-color: #C03939;\r\n}\r\n\r\n.bd-button-disabled {\r\n    opacity: 0.4;\r\n}\r\n\r\n.bd-button-disabled:hover {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.bd-spinner {\r\n    width: 32px;\r\n    height: 32px;\r\n    position: relative;\r\n}\r\n\r\n.bd-cube1,\r\n.bd-cube2 {\r\n    background-color: #3E82E5;\r\n    width: 10px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    animation: bd-sk-cubemove 1.8s infinite ease-in-out;\r\n}\r\n\r\n.bd-cube2 {\r\n    animation-delay: -0.9s;\r\n}\r\n\r\n@keyframes bd-sk-cubemove {\r\n    25% {\r\n        transform: translateX(22px) rotate(-90deg) scale(0.5);\r\n    }\r\n\r\n    50% {\r\n        transform: translateX(22px) translateY(22px) rotate(-179deg);\r\n    }\r\n\r\n    50.1% {\r\n        transform: translateX(22px) translateY(22px) rotate(-180deg);\r\n    }\r\n\r\n    75% {\r\n        transform: translateX(0) translateY(22px) rotate(-270deg) scale(0.5);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(-360deg);\r\n    }\r\n}\r\n\r\n.bd-search-wrapper {\r\n    padding: 3px;\r\n    border-radius: 3px;\r\n    outline: none;\r\n    border: 0;\r\n    background-color: var(--background-tertiary);\r\n    color: var(--text-muted);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.bd-search {\r\n    padding: 2px 3px;\r\n    background: none;\r\n    border: 0;\r\n    color: var(--text-normal);\r\n    flex: 1;\r\n}\r\n\r\n.bd-search::-webkit-input-placeholder {\r\n    color: var(--text-muted);\r\n}\r\n\r\n.bd-search-wrapper > svg {\r\n    margin-right: 2px;\r\n    fill: var(--interactive-normal);\r\n}\r\n\r\n.bd-chat-badge {\r\n    vertical-align: bottom;\r\n    line-height: 1.375rem;\r\n    display: inline-block;\r\n    height: 1.25rem;\r\n}\r\n\r\n.bd-member-badge {\r\n    height: 15px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.bd-changelog-modal video,\r\n.bd-changelog-modal img {\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n.bd-changelog-modal code.inline {\r\n    padding: 0.2em;\r\n    margin: -0.2em 0;\r\n    border-radius: 3px;\r\n    font-size: 85%;\r\n    line-height: 1.125rem;\r\n    white-space: pre-wrap;\r\n    background: var(--background-secondary);\r\n}\r\n\r\n.bd-link {\r\n    text-decoration: none;\r\n}\r\n\r\n.bd-link:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.bd-divider {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-top: thin solid var(--background-modifier-accent);\r\n    margin-bottom: 1em;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("vm");

/***/ }),

/***/ "electron":
/*!****************************************!*\
  !*** external "require(\"electron\")" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "events":
/*!**************************************!*\
  !*** external "require(\"events\")" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!**********************************!*\
  !*** external "require(\"fs\")" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "original-fs":
/*!*******************************************!*\
  !*** external "require(\"original-fs\")" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
if(typeof require("original-fs") === 'undefined') { var e = new Error("Cannot find module 'require(\"original-fs\")'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = require("original-fs");

/***/ }),

/***/ "path":
/*!************************************!*\
  !*** external "require(\"path\")" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "request":
/*!***************************************!*\
  !*** external "require(\"request\")" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("request");

/***/ }),

/***/ "../assets/locales/bg.json":
/*!*********************************!*\
  !*** ../assets/locales/bg.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/cs.json":
/*!*********************************!*\
  !*** ../assets/locales/cs.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Pluginy","themes":"Témata","customcss":"Vlastní CSS"},"Collections":{"settings":{"name":"Nastavení","general":{"name":"Obecné","emotes":{"name":"Systém emotů","note":"Povolí systém emotů BD"},"publicServers":{"name":"Veřejné servery","note":"Zobrazí tlačítko veřejných serverů"},"voiceDisconnect":{"name":"Odpojení z hlas. kanálu","note":"Odpojit z hlasového kanálu při zavření Discordu"},"showToasts":{"name":"Zobrazit vyskakovací okna","note":"Zobrazí malé oznámení pro důležité informace"},"mediaKeys":{"name":"Zakázat klávesy médií","note":"Zabrání Discordu přivlastnění kláves médií při přehrávání videa."}},"appearance":{"name":"Vzhled","minimalMode":{"name":"Minimalistický režim","note":"Skryje prvky a zmenší velikost prvků"},"twentyFourHour":{"name":"24-hodinová časová razítka","note":"Převede 12-hodinová razítka na 24-hodinový formát"},"coloredText":{"name":"Barevný text","note":"Udělá barvu textu stejnou jako barvu role"},"hideGIFButton":{"name":"Skrýt tlačítko GIF","note":"Skryje tlačítko pro výběr GIFů v textové oblasti"},"hideGiftButton":{"name":"Skrýt tlačítko dárku","note":"Skryje tlačítko darování Nitra v textové oblasti"}},"window":{"removeMinimumSize":{"name":"Odebrat minimální velikost","note":"Odebere Discordem vynucenou minimální velikost okna 940x500"},"name":"Předvolby okna","transparency":{"name":"Povolit průhlednost","note":"Povolí průhlednost hlavního okna (vyžaduje restart)"},"frame":{"name":"Okraj okna","note":"Přidá nativní systémový okraj okna k hlavnímu oknu"}},"addons":{"name":"Správce doplňků","addonErrors":{"name":"Zobrazit chyby doplňků","note":"Zobrazí okno s chybami pluginů/témat"},"autoReload":{"name":"Automatické načítání","note":"Automaticky načte, znovu načte a odnačte pluginy a témata"},"editAction":{"name":"Upravit akci","note":"Kde se objeví doplňky a témata při úpravě","options":{"detached":"Oddělené okno","system":"Systémový editor"}}},"customcss":{"name":"Vlastní CSS","customcss":{"name":"Vlastní CSS","note":"Povolí záložku Vlastní CSS"},"liveUpdate":{"name":"Okamžitá aktualizace","note":"Aktualizuje CSS při psaní"},"startDetached":{"name":"Spustit odděleně","note":"Kliknutí na záložku Vlastní CSS otevře editor v odděleném okně"},"nativeOpen":{"name":"Otevřít v nativním editoru","note":"Kliknutí na záložku Vlastní CSS otevře tvé vlastní CSS ve tvém nativním editoru"},"openAction":{"name":"Lokace editoru","note":"Kde se má ve výchozím nastavení otevřít Vlastní CSS","options":{"settings":"Menu nastavení","detached":"Oddělené okno","system":"Systémový editor"}}},"developer":{"name":"Vývojářská nastavení","debuggerHotkey":{"name":"Zkratka ladění","note":"Povolí aktivaci ladění při stisknutí F8"},"reactDevTools":{"name":"Vývojářské nástroje React","note":"Vloží tvou lokální instalaci React Developer Tools do Discordu"},"inspectElement":{"name":"Zkratka prozkoumání prvku","note":"Povolí klávesovou zkratku prozkoumání prvku (Ctrl + Shift + C), která je normální ve většině prohlížečů"},"devToolsWarning":{"name":"Zastavit varování DevTools","note":"Zabrání Discordu vypisovat jeho \\"Zadrž!\\" zprávu"},"debugLogs":{"name":"Ladicí protokoly","note":"Vypíše vše z konzole do souboru debug.log ve složce BetterDiscordu"}}},"emotes":{"name":"Emoty","general":{"name":"Obecné","download":{"name":"Stáhnout emoty","note":"Stáhne emoty vždy, kdy jsou zastaralé"},"emoteMenu":{"name":"Menu emotů","note":"Zobrazit Twitch/oblíbené emoty v menu emotů"},"hideEmojiMenu":{"name":"Skrýt menu smajlíků","note":"Skryje menu smajlíků Discordu při používání menu emotů"},"autoCaps":{"name":"Automatická kapitalizace emotů","note":"Automatická kapitalizace emote příkazů"},"modifiers":{"name":"Zobrazit modifikátory emotů","note":"Povolit modifikátory emotů (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animovat při přejetí","note":"Animovat modifikátory emotů pouze při přejetí myší"}},"categories":{"name":"Kategorie","twitchglobal":{"name":"Globální Twitch","note":"Zobrazí globální Twitch emoty"},"twitchsubscriber":{"name":"Odběratelé Twitch","note":"Zobrazí odběratelské Twitch emoty"},"frankerfacez":{"name":"FrankerFaceZ","note":"Zobrazí emoty od FFZ"},"bttv":{"name":"BetterTTV","note":"Zobrazí emoty od BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} od {{author}}","byline":"od {{author}}","openFolder":"Otevřít složku {{type}}","reload":"Znovu načíst","addonSettings":"Nastavení","website":"Web","source":"Zdroj","invite":"Server podpory","donate":"Přispět","patreon":"Patreon","name":"Název","author":"Autor","version":"Verze","added":"Datum přidání","modified":"Datum upravení","search":"Hledat {{type}}","editAddon":"Upravit","deleteAddon":"Odstranit","confirmDelete":"Opravdu chceš odstranit {{name}}?","confirmationText":"Máš neuložené změny u {{name}}. Zavřením tohoto okna je všechny ztratíš.","enabled":"Doplněk {{name}} byl povolen.","disabled":"Doplněk {{name}} byl zakázán.","couldNotEnable":"Doplněk {{name}} nemohl být povolen.","couldNotDisable":"Doplněk {{name}} nemohl být zakázán.","couldNotStart":"Doplněk {{name}} nemohl být spuštěn.","couldNotStop":"Doplněk {{name}} nemohl být zastaven.","settingsError":"Nepodařilo se otevřít nastavení {{name}}","methodError":"Nepodařilo se spustit metodu {{method}}.","unknownAuthor":"Neznámý autor","noDescription":"Bez popisu.","alreadyExists":"Již existuje {{type}} s názvem {{name}}","alreadWatching":"Již sledujete doplňky.","metaError":"META být nemohl parsován.","missingNameData":"META chybějící údaje názvu.","metaNotFound":"META nebyl nalezen.","compileError":"Nepodařilo se zkompilovat.","wasUnloaded":"Doplněk {{name}} byl odnačten.","blankSlateHeader":"Nemáš žádné/žádný {{type}}!","blankSlateMessage":"Najdi si nějaké na [tomto webu]({{link}}) a přidej je do své {{type}} složky."},"CustomCSS":{"confirmationText":"Máš neuložené změny ve vlastním CSS. Zavřením tohoto okna je všechny ztratíš.","update":"Aktualizovat","save":"Uložit","openNative":"Otevřít v systémovém editoru","openDetached":"Oddělit okno","settings":"Nastavení editoru","editorTitle":"Okno vlastního CSS"},"Emotes":{"loading":"Načítání emotů v pozadí - neobnovuj.","loaded":"Všechny emoty byly úspěšně načteny.","clearEmotes":"Vyčistit data emotů","favoriteAction":"Oblíbené!","downloadFailed":"Stahování selhalo","failureMessage":"BetterDiscordu se nepodařilo stáhnout emoty, zkontroluj prosím své internetové připojení a firewall."},"PublicServers":{"button":"veřejné","join":"Připojit se","joining":"Připojuji se","joined":"Připojen","loading":"Načítání","loadMore":"Načíst více","notConnected":"Nepřipojen","connectionRequired":"Aby ses mohl/a připojovat na servery, musíš připojit svůj účet.","connectionError":"Chyba spojení","connectionErrorMessage":"Při připojování k DiscordServers.com se vyskytla chyba, je možné, že jejich web/API je offline. Zkus to prosím znovu později.","pagination":"Strana {{page}} z {{count}}","search":"Hledat","connect":"Připojit","reconnect":"Znovu připojit","categories":"Kategorie","keywords":"Klíčová slova","connection":"Připojen/a jako: {{username}}#{{discriminator}}","results":"Zobrazování {{start}}-{{end}} z {{total}} výsledků v kategorii {{category}}","query":"pro dotaz {{query}}"},"Modals":{"confirmAction":"Opravdu?","okay":"Dobře","done":"Hotovo","cancel":"Zrušit","nevermind":"Ne","close":"Zavřít","name":"Název","message":"Zpráva","error":"Chyba","addonErrors":"Chyby doplňku","restartRequired":"Vyžadován restart","restartNow":"Restartovat nyní","restartLater":"Restartovat později","additionalInfo":"Dodatečné informace","restartPrompt":"Aby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?"},"ReactDevTools":{"notFound":"Rozšíření nenalezeno","notFoundDetails":"Nepodařilo se nalézt rozšíření React Developer Tools na tvém počítači. Nainstaluj si prosím rozšíření na své lokální Chrome instalaci."},"Sorting":{"sortBy":"Seřadit podle","order":"Pořadí","ascending":"Vzestupně","descending":"Sestupně"},"Startup":{"notSupported":"Nepodporováno","incompatibleApp":"BetterDiscord nefunguje s {{app}}. Odinstaluj prosím jednu z nich.","updateNow":"Aktualizovat","maybeLater":"Možná později","updateAvailable":"Dostupná aktualizace","updateInfo":"Je dostupná nová aktualizace BetterDiscord Injectoru ({{version}}).\\n\\nMůžeš aktualizovat a restartovat buď teď, nebo později.","updateFailed":"Aktualizace selhala","manualUpdate":"Nepodařilo se automaticky nainstalovat aktualizaci, stáhni si prosím instalátor a normálně přeinstaluj aplikaci.\\n\\n[Stáhnout instalátor](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"Nepodařilo se načíst jQuery","jqueryFailedDetails":"Nepodařilo se načíst jQuery, některé pluginy nemusí fungovat správně. Pokračuj na vlastní nebezpečí."},"WindowPrefs":{"enabledInfo":"Tato možnost vyžaduje průhledné téma, aby fungovala správně. Na Windows to může rozbít Areo přichytávání a maximalizování.\\n\\nAby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?","disabledInfo":"Aby se tato změna projevila, bude potřeba restartovat Discord. Chceš jej restartovat nyní?"}}');

/***/ }),

/***/ "../assets/locales/da.json":
/*!*********************************!*\
  !*** ../assets/locales/da.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/de.json":
/*!*********************************!*\
  !*** ../assets/locales/de.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Themes","customcss":"Custom-CSS"},"Collections":{"settings":{"name":"Einstellungen","general":{"name":"Allgemein","emotes":{"name":"Emotesystem","note":"Aktiviert das BD-Emotesystem"},"publicServers":{"name":"Öffentliche Server","note":"Zeigt den Knopf für öffentliche Server"},"voiceDisconnect":{"name":"Verbindung zum Sprachchat trennen","note":"Trennt beim Schließen von Discord die Verbindung zum Sprachchat"},"showToasts":{"name":"Toast-Benachrichtigungen anzeigen","note":"Zeigt eine kleine Benachrichtigung für wichtige Informationen an"},"mediaKeys":{"name":"Medien-Tasten deaktivieren","note":"Verhindert, dass Discord deine Medien-Tasten nach dem Abspielen eines Videos beansprucht"}},"appearance":{"name":"Erscheinungsbild","minimalMode":{"name":"Minimaler Modus","note":"Versteckt und verkleinert zahlreiche Elemente"},"twentyFourHour":{"name":"24-Stunden Zeitstempel","note":"Erzwingt die Anzeige von Uhrzeiten im 24-Stunden Format"},"coloredText":{"name":"Farbiger Text","note":"Färbt Text entsprechend der Rollenfarbe"},"hideGIFButton":{"name":"GIF-Knopf verstecken","note":"Entfernt den Knopf für die GIF-Auswahl aus der Nachrichteneingabe"},"hideGiftButton":{"name":"Geschenk-Knopf verstecken","note":"Entfernt den Knopf für Nitro-Geschenke aus der Nachrichteneingabe"}},"window":{"removeMinimumSize":{"name":"Freie Fenstergröße","note":"Entfernt die Beschränkung der minimalen Fenstergröße von 940x500 Pixel"},"name":"Fenster-Einstellungen","transparency":{"name":"Transparenz aktivieren","note":"Macht den Discord-Hintergrund transparent (Benötigt Discord Neustart)"},"frame":{"name":"Standard-Design","note":"Stellt das Hauptfenster im Standard-Design des Betriebssystems dar"}},"addons":{"name":"Erweiterungsverwaltung","addonErrors":{"name":"Fehlernachricht für Erweiterungen anzeigen","note":"Zeigt ein Informationsfenster bei Ladefehlern von Erweiterungen an"},"autoReload":{"name":"Automatisches Laden","note":"Lädt und entlädt Plugins und Themes automatisch"},"editAction":{"name":"Bearbeitungsaktion","note":"Bestimmt womit Plugins und Themes zum Bearbeiten geöffnet werden","options":{"detached":"Losgelöstes Fenster","system":"Systemweiter Standard-Texteditor"}}},"customcss":{"name":"Custom-CSS","customcss":{"name":"Custom-CSS","note":"Aktiviert den Custom-CSS Reiter in den Einstellungen"},"liveUpdate":{"name":"Echtzeitaktualisierung","note":"Aktualisert den CSS Code während des Schreibens"},"startDetached":{"name":"In losgelöstem Fenster öffnen","note":"Das Öffnen des \\\\\\"Custom-CSS\\\\\\"-Reiters öffnet den Editor in einem separaten Fenster"},"nativeOpen":{"name":"Im System-Editor öffnen","note":"Das Öffnen des \\\\\\"Custom-CSS\\\\\\"-Reiters öffnet den Editor im systemweiten Standard-Texteditor"},"openAction":{"name":"Editormodus","note":"Wo soll Custom-CSS standardmäßig geöffnet werden","options":{"settings":"in den Einstellungen","detached":"im losgelöstem Fenster","system":"im Standard-Texteditor"}}},"developer":{"name":"Entwickler-Einstellungen","debuggerHotkey":{"name":"Debugger-Tastenkürzel","note":"Erlaubt das Starten des Debuggers durch Drücken der F8-Taste"},"reactDevTools":{"name":"React-Entwicklerwerzeuge","note":"Koppelt eine vorhandene Installation der React-Entwicklerwerkzeuge in Discord ein"},"inspectElement":{"name":"Tastenkürzel für \\"Element untersuchen\\"","note":"Aktiviert das Tastenkürzel für \\\\\\"Element Untersuchen\\\\\\" (Strg + Shift + C), welches in gängigen Browsern vorhanden ist"},"devToolsWarning":{"name":"Entwicklerwerkzeuge Warnungen stoppen","note":"Hält Discord davon ab ihre \\\\\\"Hold Up!\\\\\\" Warnung zu zeigen"},"debugLogs":{"name":"Debugger Logs","note":"Speichert alle Ausgaben aus der Konsole in die \\\\\\"debug.log\\\\\\" Datei im BetterDiscord Verzeichnis"}}},"emotes":{"name":"Emotes","general":{"name":"Allgemein","download":{"name":"Emotes herunterladen","note":"Lade Emotes herunter, wenn sie nicht mehr aktuell sind"},"emoteMenu":{"name":"Emote-Menü","note":"Twitch- und favorisierte Emotes im Emote-Menü anzeigen"},"hideEmojiMenu":{"name":"Emoji-Menü verstecken","note":"Versteckt Discords Emoji-Menü bei der Nutzung des Emote-Menüs"},"autoCaps":{"name":"Automatische Großschreibung von Emotes","note":"Emote-Befehle werden automatisch großgeschrieben"},"modifiers":{"name":"Emote-Modifikatoren anzeigen","note":"Aktiviert Emote-Modifikatoren (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Beim Hovern animieren","note":"Animiert Emote-Modifikatoren nur beim Hovern über dem Emote"}},"categories":{"name":"Kategorien","twitchglobal":{"name":"Twitch Global","note":"Twitch-Global-Emotes anzeigen"},"twitchsubscriber":{"name":"Twitch Subscribers","note":"Twitch-Subscriber-Emotes anzeigen"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ-Emotes anzeigen"},"bttv":{"name":"BetterTTV","note":"BTTV-Emotes anzeigen"}}}},"Addons":{"title":"{{name}} v{{version}} von {{author}}","byline":"von {{author}}","openFolder":"{{type}}-Ordner öffnen","reload":"Neu laden","addonSettings":"Einstellungen","website":"Webseite","source":"Quelle","invite":"Support-Server","donate":"Spenden","patreon":"Patreon","name":"Name","author":"Autor","version":"Version","added":"Hinzufügedatum","modified":"Bearbeitungsdatum","search":"{{type}} suchen","editAddon":"Bearbeiten","deleteAddon":"Löschen","confirmDelete":"Bist du dir sicher, dass du {{name}} löschen willst?","confirmationText":"Du hast ungespeicherte Änderungen in {{name}}. Durch das Schließen dieses Fensters verlierst du alle Änderungen.","enabled":"{{name}} wurde aktiviert.","disabled":"{{name}} wurde deaktiviert.","couldNotEnable":"{{name}} konnte nicht aktiviert werden.","couldNotDisable":"{{name}} konnte nicht deaktiviert werden.","couldNotStart":"{{name}} konnte nicht gestartet werden.","couldNotStop":"{{name}} konnte nicht gestoppt werden.","settingsError":"Einstellungen für {{name}} konnten nicht geöffnet werden","methodError":"{{method}} konnte nicht ausgeführt werden.","unknownAuthor":"Unbekannter Autor","noDescription":"Keine Beschreibung angegeben.","alreadyExists":"Es existiert bereits ein {{type}} mit dem Namen {{name}}","alreadWatching":"Erweiterungen werden bereits beobachtet.","metaError":"META konnte nicht geparst werden.","missingNameData":"META enthält keinen \\\\\\"name\\\\\\" Parameter.","metaNotFound":"META nicht gefunden.","compileError":"Konnte nicht kompiliert werden.","wasUnloaded":"{{name}} wurde entladen.","blankSlateHeader":"Du besitzt keine {{type}}s!","blankSlateMessage":"Lade dir welche von [this website]({{link}}) herunter und füge sie deinem {{type}} Ordner hinzu."},"CustomCSS":{"confirmationText":"Du hast ungespeicherte Änderungen im Custom-CSS. Durch das Schließen dieses Fensters verlierst du alle Änderungen.","update":"Aktualisieren","save":"Speichern","openNative":"Im System-Editor öffnen","openDetached":"Fenster trennen","settings":"Editor-Einstellungen","editorTitle":"Custom-CSS-Editor"},"Emotes":{"loading":"Lade alle Emotes im Hintergrund.","loaded":"Alle Emotes erfolgreich geladen.","clearEmotes":"Emote-Daten löschen","favoriteAction":"Favorisieren!","downloadFailed":"Download fehlgeschlagen","failureMessage":"BetterDiscord konnte die Emotes nicht herunterladen, bitte überprüfe deine Internetverbindung und Firewall."},"PublicServers":{"button":"public","join":"Beitreten","joining":"Trete bei","joined":"Beigetreten","loading":"Laden","loadMore":"Mehr laden","notConnected":"Nicht mit DiscordServers.com verbunden!","connectionRequired":"Du musst dein Konto verbinden, um Server beitreten zu können.","connectionError":"Verbindungsfehler","connectionErrorMessage":"Bei der Verbindung zu DiscordServers.com ist ein Fehler aufgetreten. Es ist möglich, dass die Website/Api offline ist. Versuch es später noch einmal.","pagination":"Seite {{page}} von {{count}}","search":"Suchen","connect":"Verbinden","reconnect":"Wiederverbinden","categories":"Kategorien","keywords":"Schlüsselwörter","connection":"Verbunden als: {{username}}#{{discriminator}}","results":"{{start}}-{{end}} von {{total}} Ergebnissen in {{category}} angezeigt","query":"für {{query}}"},"Modals":{"confirmAction":"Bist du dir sicher?","okay":"Okay","done":"Fertig","cancel":"Abbrechen","nevermind":"Egal","close":"Schließen","name":"Name","message":"Nachricht","error":"Fehler","addonErrors":"Erweiterungsfehler","restartRequired":"Neustart erforderlich","restartNow":"Jetzt neustarten","restartLater":"Später neustarten","additionalInfo":"Zusätzliche Informationen","restartPrompt":"Damit die Veränderungen wirksam werden, muss Discord neu gestartet werden. Möchtest du jetzt neustarten?"},"ReactDevTools":{"notFound":"Erweiterung nicht gefunden","notFoundDetails":"React-Entwicklerwerkzeuge-Erweiterung konnte nicht gefunden werden. Füg die Erweiterung zu deiner Chrome-Installation hinzu."},"Sorting":{"sortBy":"Sortieren nach","order":"Reihenfolge","ascending":"Aufsteigend","descending":"Absteigend"},"Startup":{"notSupported":"Nicht unterstützt","incompatibleApp":"BetterDiscord ist nicht mit {{app}} kompatibel. Bitte entferne entweder BetterDiscord oder {{app}}.","updateNow":"Jetzt aktualisieren","maybeLater":"Später","updateAvailable":"Update verfügbar","updateInfo":"Ein Update für BetterDiscords Injector ({{version}}) ist verfügbar.\\n\\nDu kannst entweder jetzt oder später aktualisieren und neustarten.","updateFailed":"Konnte nicht aktualisiert werden","manualUpdate":"Bei der automatischen Aktualisierung ist ein Fehler aufgetreten. Bitte lade das Installationsprogramm herunter und installiere BetterDiscord erneut.\\n\\n[Installationsprogramm herunterladen](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery konnte nicht geladen werden","jqueryFailedDetails":"jQuery konnte nicht geladen werden, wodurch einige Plugins gegebenenfalls nicht richtig funktionieren."},"WindowPrefs":{"enabledInfo":"Um diese Funktion zu verwenden, benötigst du ein Theme mit transparentem Hintergrund. Auf Windows funktioniert das Einrasten für maximierte Fenster ggf. nicht mehr.\\n\\nUm die Änderungen zu übernehmen muss Discord neugestartet werden. Möchtest du jetzt neustarten?","disabledInfo":"Um die Änderungen zu übernehmen muss Discord neugestartet werden. Möchtest du jetzt neustarten?"}}');

/***/ }),

/***/ "../assets/locales/el.json":
/*!*********************************!*\
  !*** ../assets/locales/el.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/en-gb.json":
/*!************************************!*\
  !*** ../assets/locales/en-gb.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/en-us.json":
/*!************************************!*\
  !*** ../assets/locales/en-us.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Themes","customcss":"Custom CSS"},"Collections":{"settings":{"name":"Settings","general":{"name":"General","emotes":{"name":"Emote System","note":"Enables BD\'s emote system"},"publicServers":{"name":"Public Servers","note":"Display public servers button"},"voiceDisconnect":{"name":"Voice Disconnect","note":"Disconnect from voice server when closing Discord"},"showToasts":{"name":"Show Toasts","note":"Shows a small notification for important information"},"mediaKeys":{"name":"Disable Media Keys","note":"Prevents Discord from hijacking your media keys after playing a video."}},"addons":{"name":"Addon Manager","addonErrors":{"name":"Show Addon Errors","note":"Shows a modal with plugin/theme errors"},"autoReload":{"name":"Automatic Loading","note":"Automatically loads, reloads, and unloads plugins and themes"},"editAction":{"name":"Edit Action","note":"Where plugins & themes appear when editing","options":{"detached":"Detached Window","system":"System Editor"}}},"customcss":{"name":"Custom CSS","customcss":{"name":"Custom CSS","note":"Enables the Custom CSS tab"},"liveUpdate":{"name":"Live Update","note":"Updates the css as you type"},"startDetached":{"name":"Start Detached","note":"Clicking the Custom CSS tab opens the editor in a separate window"},"nativeOpen":{"name":"Open in Native Editor","note":"Clicking the Custom CSS tab opens your custom css in your native editor"},"openAction":{"name":"Editor Location","note":"Where Custom CSS should open by default","options":{"settings":"Settings Menu","detached":"Detached Window","system":"System Editor"}}},"editor":{"name":"Editor Preferences","lineNumbers":{"name":"Line Numbers","note":"Enables showing line numbers on the side of the editor"},"fontSize":{"name":"Font Size","note":"Size of the font (pt) to use in the editor"},"minimap":{"name":"Minimap","note":"Enables showing the code minimap on the side of the editor"},"hover":{"name":"Reference Tooltips","note":"Enables showing the reference tooltips when hovering rules and selectors"},"quickSuggestions":{"name":"Quick Suggestions","note":"Enables showing the autocomplete suggestions as you type"},"renderWhitespace":{"name":"Show Whitespace","note":"When whitespace should be shown by the editor","options":{"all":"Always","none":"Never","selection":"Selection"}}},"developer":{"name":"Developer Settings","devTools":{"name":"DevTools","note":"Enables toggling DevTools with ctrl+shift+i"},"debuggerHotkey":{"name":"Debugger Hotkey","note":"Allows activating debugger when pressing F8 with DevTools open"},"reactDevTools":{"name":"React Developer Tools","note":"Injects your local installation of React Developer Tools into Discord"},"inspectElement":{"name":"Inspect Element Hotkey","note":"Enables the inspect element hotkey (ctrl + shift + c) that is common in most browsers"},"devToolsWarning":{"name":"Stop DevTools Warning","note":"Stops Discord from printing out their \\"Hold Up!\\" message"},"debugLogs":{"name":"Debug Logs","note":"Outputs everything from the console into the debug.log file in the BetterDiscord folder"}},"window":{"name":"Window Preferences","transparency":{"name":"Enable Transparency","note":"Enables the main window to be see-through (requires restart)"},"frame":{"name":"Window Frame","note":"Adds the native os window frame to the main window"},"removeMinimumSize":{"name":"Remove Minimum Size","note":"Removes Discord\'s forced minimum window size of 940x500"}}},"emotes":{"name":"Emotes","general":{"name":"General","download":{"name":"Download Emotes","note":"Download emotes whenever they are out of date"},"emoteMenu":{"name":"Emote Menu","note":"Show Twitch/Favourite emotes in emote menu"},"hideEmojiMenu":{"name":"Hide Emoji Menu","note":"Hides Discord\'s emoji menu when using emote menu"},"autoCaps":{"name":"Emote Autocapitalization","note":"Autocapitalize emote commands"},"modifiers":{"name":"Show Emote Modifiers","note":"Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animate On Hover","note":"Only animate the emote modifiers on hover"}},"categories":{"name":"Categories","twitchglobal":{"name":"Twitch Globals","note":"Show Twitch global emotes"},"twitchsubscriber":{"name":"Twitch Subscribers","note":"Show Twitch subscriber emotes"},"frankerfacez":{"name":"FrankerFaceZ","note":"Show emotes from FFZ"},"bttv":{"name":"BetterTTV","note":"Show emotes from BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"by {{author}}","openFolder":"Open {{type}} Folder","reload":"Reload","addonSettings":"Settings","website":"Website","source":"Source","invite":"Support Server","donate":"Donate","patreon":"Patreon","name":"Name","author":"Author","version":"Version","added":"Date Added","modified":"Date Modified","isEnabled":"Enabled","search":"Search {{type}}","editAddon":"Edit","deleteAddon":"Delete","confirmDelete":"Are you sure you want to delete {{name}}?","confirmationText":"You have unsaved changes to {{name}}. Closing this window will lose all those changes.","enabled":"{{name}} has been enabled.","disabled":"{{name}} has been disabled.","couldNotEnable":"{{name}} could not be enabled.","couldNotDisable":"{{name}} could not be disabled.","couldNotStart":"{{name}} could not be started.","couldNotStop":"{{name}} could not be stopped.","settingsError":"Could not open settings for {{name}}","methodError":"{{method}} could not be fired.","unknownAuthor":"Unknown Author","noDescription":"Description not provided.","alreadyExists":"There is already a {{type}} with name {{name}}","alreadWatching":"Already watching  addons.","metaError":"META could not be parsed.","missingNameData":"META missing name data.","metaNotFound":"META was not found.","compileError":"Could not be compiled. See console for details.","wasUnloaded":"{{name}} was unloaded.","blankSlateHeader":"You don\'t have any {{type}}s!","blankSlateMessage":"Grab some from [this website]({{link}}) and add them to your {{type}} folder."},"CustomCSS":{"confirmationText":"You have unsaved changes to your Custom CSS. Closing this window will lose all those changes.","update":"Update","save":"Save","openNative":"Open in System Editor","openDetached":"Detach Window","settings":"Editor Settings","editorTitle":"Custom CSS Editor"},"Emotes":{"loading":"Loading emotes in the background do not reload.","loaded":"All emotes successfully loaded.","clearEmotes":"Clear Emote Data","favoriteAction":"Favorite!","downloadFailed":"Download Failed","failureMessage":"BetterDiscord failed to download emotes, please check your internet connection and firewall."},"PublicServers":{"button":"public","join":"Join","joining":"Joining","joined":"Joined","loading":"Loading","loadMore":"Load More","notConnected":"Not Connected","connectionRequired":"You must connect your account in order to join servers.","connectionError":"Connection Error","connectionErrorMessage":"There was an error connecting to DiscordServers.com, it\'s possible their website/api is down. Please try again later.","pagination":"Page {{page}} of {{count}}","search":"Search","connect":"Connect","reconnect":"Reconnect","categories":"Categories","keywords":"Keywords","connection":"Connected as: {{username}}#{{discriminator}}","results":"Showing {{start}}-{{end}} of {{total}} results in {{category}}","query":"for {{query}}"},"Modals":{"confirmAction":"Are You Sure?","okay":"Okay","done":"Done","cancel":"Cancel","nevermind":"Nevermind","close":"Close","name":"Name","message":"Message","error":"Error","addonErrors":"Addon Errors","restartRequired":"Restart Required","restartNow":"Restart Now","restartLater":"Restart Later","additionalInfo":"Additional Info","restartPrompt":"In order to take effect, Discord needs to be restarted. Do you want to restart now?"},"ReactDevTools":{"notFound":"Extension Not Found","notFoundDetails":"Unable to find the React Developer Tools extension on your PC. Please install the extension on your local Chrome installation."},"Sorting":{"sortBy":"Sort By","order":"Order","ascending":"Ascending","descending":"Descending"},"Startup":{"notSupported":"Not Supported","incompatibleApp":"BetterDiscord does not work with {{app}}. Please uninstall one of them.","updateNow":"Update Now","maybeLater":"Maybe Later","updateAvailable":"Update Available","updateInfo":"There is an update available for BetterDiscord\'s Injector ({{version}}).\\n\\nYou can either update and restart now, or later.","updateFailed":"Could Not Update","manualUpdate":"Unable to update automatically, please download the installer and reinstall normally.\\n\\n[Download Installer](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery Failed To Load","jqueryFailedDetails":"jQuery could not be loaded, and some plugins may not work properly. Proceed at your own risk."},"WindowPrefs":{"enabledInfo":"This option requires a transparent theme in order to work properly. On Windows this may break your aero snapping and maximizing.\\n\\nIn order to take effect, Discord needs to be restarted. Do you want to restart now?","disabledInfo":"In order to take effect, Discord needs to be restarted. Do you want to restart now?"}}');

/***/ }),

/***/ "../assets/locales/es-es.json":
/*!************************************!*\
  !*** ../assets/locales/es-es.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Ajustes","general":{"name":"General","emotes":{"name":"Sistema de Emoticonos","note":"Activa el sistema de emoticonos de BD"},"publicServers":{"name":"Servidores Públicos","note":"Muestra el botón de servidores públicos"},"voiceDisconnect":{"name":"Desconexión de Voz","note":"Desconectarse del servidor de voz al cerrar Discord"},"showToasts":{"name":"Mostrar Notificaciones","note":"Muestra una pequeña notificación de información importante"},"mediaKeys":{"name":"Desactivar las Teclas Multimedia","note":"Evita que Discord se apropie de tus teclas multimedia después de reproducir un vídeo"}},"appearance":{"name":"Apariencia","minimalMode":{"name":"Modo Mínimo","note":"Ocultar elementos y reducir su tamaño"},"twentyFourHour":{"name":"Horas en Formato 24 Horas","note":"Convierte las marcas de tiempo de los mensajes de formato 12 horas a 24 horas"},"coloredText":{"name":"Texto Coloreado","note":"Hace que el color de los mensajes sea el mismo que el de los roles"},"hideGIFButton":{"name":"Ocultar Botón de GIFs","note":"Oculta el botón de selección de GIF de la entrada de texto"},"hideGiftButton":{"name":"Ocultar Botón de Regalar","note":"Oculta el botón de regalar nitro de la entrada de texto"}},"window":{"removeMinimumSize":{"name":"Eliminar Tamaño Mínimo","note":"Elimina el tamaño mínimo de Discord de 940x500"},"name":"Preferencias de la Ventana","transparency":{"name":"Activar Transparencia","note":"Hace que la ventana principal pueda ser transparente (requiere reinicio)"},"frame":{"name":"Marco de la Ventana","note":"Añade el marco de ventana nativo de tu sistema operativo a la ventana principal"}},"addons":{"name":"Gestor de Complementos","addonErrors":{"name":"Mostrar Errores de Complementos","note":"Muestra una ventana con los errores de plugin/temas"},"autoReload":{"name":"Carga Automática","note":"Carga, recarga y descarga automáticamente plugins y temas"},"editAction":{"name":"Acción al Editar","note":"Donde aparecerán los plugins y temas al editarlos","options":{"detached":"Ventana Independiente","system":"Editor del Sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Activa la pestaña de CSS Personalizado"},"liveUpdate":{"name":"Actualización en Vivo","note":"Actualiza el CSS a medida que se escribe"},"startDetached":{"name":"Comenzar en Ventana Independiente","note":"Al hacer clic en la pestaña de CSS Personalizado se abre el editor en una ventana independiente"},"nativeOpen":{"name":"Abrir en Editor Nativo","note":"Al hacer clic en la pestaña de CSS Personalizado se abre el editor en tu editor nativo"},"openAction":{"name":"Ubicación del Editor","note":"Donde deberá el CSS Personalizado abrirse por defecto","options":{"settings":"Menú de Ajustes","detached":"Ventana Independiente","system":"Editor del Sistema"}}},"developer":{"name":"Ajustes de Desarrollador","debuggerHotkey":{"name":"Tecla de Acceso Rápido al Depurador","note":"Permite activar el depurador al presionar la tecla F8"},"reactDevTools":{"name":"React Developer Tools","note":"Inyecta tu instalación local de React Developer Tools en Discord"},"inspectElement":{"name":"Tecla de Acceso Rápido al Inspector de Elementos","note":"Activa la tecla de acceso rápido al inspector de elementos (ctrl + shift + c) que es común en la mayoria de navegadores"},"devToolsWarning":{"name":"Quitar el Aviso del Inspector de Elementos","note":"Previene que Discord muestre su mensaje \\"¡Espera!\\""},"debugLogs":{"name":"Registros de Depuración","note":"Envía todo lo que aparece en la consola a un archivo llamado debug.log en la carpeta de BetterDiscord"}}},"emotes":{"name":"Emoticonos","general":{"name":"General","download":{"name":"Descargar Emoticonos","note":"Descargar los emoticonos siempre que estén desactualizados"},"emoteMenu":{"name":"Menú de Emoticonos","note":"Mostrar los emoticonos de Twitch y favoritos en el menú de emoticonos"},"hideEmojiMenu":{"name":"Ocultar Menú de Emoticonos","note":"Oculta el menú de emojis de Discord cuando se utiliza el menú de emoticonos"},"autoCaps":{"name":"Autocapitalización de Emoticonos","note":"Autocapitalizar los comandos de emoticonos"},"modifiers":{"name":"Mostrar Modificadores de Emoticonos","note":"Activar los modificadores de emoticonos (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar al Pasar el Ratón","note":"Solo animar los modificadores de emoticonos al pasar el ratón por encima de ellos"}},"categories":{"name":"Categorías","twitchglobal":{"name":"Globales de Twitch","note":"Mostrar los emoticonos globales de Twitch"},"twitchsubscriber":{"name":"Suscriptores de Twitch","note":"Mostrar emoticonos de suscriptores de Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostrar los emoticonos de FrankerFaceZ"},"bttv":{"name":"BetterTTV","note":"Mostrar los emoticonos de BetterTTV"}}}},"Addons":{"title":"{{name}} v{{version}} por {{author}}","byline":"por {{author}}","openFolder":"Abrir Carpeta de {{type}}","reload":"Recargar","addonSettings":"Ajustes","website":"Sitio web","source":"Fuente","invite":"Servidor de Soporte","donate":"Donar","patreon":"Patreon","name":"Nombre","author":"Autor","version":"Versión","added":"Fecha de Adición","modified":"Fecha de Modificación","search":"Buscar {{type}}","editAddon":"Editar","deleteAddon":"Eliminar","confirmDelete":"¿Estás seguro de que quieres borrar {{name}}?","confirmationText":"Tiene cambios no guardados en {{name}}. Al cerrar esta ventana se perderán todos los cambios.","enabled":"{{name}} ha sido activado.","disabled":"{{name}} ha sido desactivado.","couldNotEnable":"{{name}} no pudo ser activado.","couldNotDisable":"{{name}} no pudo ser desactivado.","couldNotStart":"{{name}} no se pudo iniciar.","couldNotStop":"{{name}} no se pudo detener.","settingsError":"No se pudieron abrir los ajustes de {{name}}","methodError":"{{method}} no pudo ser lanzado.","unknownAuthor":"Autor Desconocido","noDescription":"Descripción no proporcionada.","alreadyExists":"Ya existe un {{type}} con nombre {{name}}","alreadWatching":"Ya está viendo los complementos.","metaError":"El META no pudo ser analizado.","missingNameData":"El META no contiene datos del nombre.","metaNotFound":"El META no ha sido encontrado.","compileError":"No se ha podido compilar.","wasUnloaded":"{{name}} ha sido descargado.","blankSlateHeader":"¡No tienes {{type}}s!","blankSlateMessage":"Consigue alguno en [esta página web]({{link}}) y añadelos a tu carpeta de {{type}}."},"CustomCSS":{"confirmationText":"Tienes cambios sin guardar en tu CSS Personalizado. Al cerrar esta ventana se perderán todos los cambios.","update":"Actualizar","save":"Guardar","openNative":"Abrir en el Editor del Sistema","openDetached":"Mostrar en Ventana Independiente","settings":"Ajustes del Editor","editorTitle":"Editor de CSS Personalizado"},"Emotes":{"loading":"Cargando emoticonos en segundo plano, no recargues.","loaded":"Todos los emoticonos han sido cargados satisfactoriamente.","clearEmotes":"Borrar los Datos de los Emoticonos","favoriteAction":"¡Favoritos!","downloadFailed":"Descarga Fallida","failureMessage":"BetterDiscord no ha podido descargar los emoticonos, por favor, comprueba tu conexión a internet y tu cortafuegos."},"PublicServers":{"button":"Públicos","join":"Unirse","joining":"Uniéndose","joined":"Unido","loading":"Cargando","loadMore":"Cargar Más","notConnected":"No está Conectado","connectionRequired":"Debes conectar tu cuenta para poder unirte a los servidores.","connectionError":"Error de Conexión","connectionErrorMessage":"Se ha producido un error al conectar con DiscordServers.com, es posible que su sitio web/api esté caído. Vuelve a intentarlo más tarde.","pagination":"Página {{page}} de {{count}}","search":"Buscar","connect":"Conectar","reconnect":"Reconectar","categories":"Categorías","keywords":"Palabras clave","connection":"Conectado como: {{username}}#{{discriminator}}","results":"Mostrando {{start}}-{{end}} de {{total}} resultados en {{category}}","query":"por {{query}}"},"Modals":{"confirmAction":"¿Estás seguro?","okay":"Vale","done":"Hecho","cancel":"Cancelar","nevermind":"No importa","close":"Cerrar","name":"Nombre","message":"Mensaje","error":"Error","addonErrors":"Errores de Complementos","restartRequired":"Reinicio Requerido","restartNow":"Reiniciar Ahora","restartLater":"Reiniciar más Tarde","additionalInfo":"Información Adicional","restartPrompt":"Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"},"ReactDevTools":{"notFound":"Extensión no Encontrada","notFoundDetails":"No se puede encontrar la extensión React Developer Tools en su PC. Por favor, instale la extensión en su instalación local de Chrome."},"Sorting":{"sortBy":"Ordenar por","order":"Orden","ascending":"Ascendente","descending":"Descendente"},"Startup":{"notSupported":"No Compatible","incompatibleApp":"BetterDiscord no funciona con {{app}}. Por favor, desinstale uno de ellos.","updateNow":"Actualizar ahora","maybeLater":"Quizás más tarde","updateAvailable":"Actualización Disponible","updateInfo":"Hay una actualización disponible para el Inyector de BetterDiscord ({{version}}).\\n\\nPuedes actualizar y reiniciar ahora, o más tarde.","updateFailed":"No se pudo actualizar","manualUpdate":"No se pudo actualizar automáticamente, por favor descargue el instalador y reinstale normalmente.\\n\\n[Descargar Instalador](https://github.com/BetterDiscord/Installer/releases/latest)","jqueryFailed":"jQuery no se pudo cargar","jqueryFailedDetails":"jQuery no se ha podido cargar y algunos plugins podrían no funcionar correctamente. Proceda bajo su propio riesgo."},"WindowPrefs":{"enabledInfo":"Esta opción requiere un tema transparente para que funcione correctamente. En Windows esto podría hacer que el ajuste automático de la ventana (Aero Snap) y la maximización dejen de funcionar.\\n\\nPara que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?","disabledInfo":"Para que surta efecto, es necesario reiniciar Discord. ¿Quieres reiniciar ahora?"}}');

/***/ }),

/***/ "../assets/locales/fi.json":
/*!*********************************!*\
  !*** ../assets/locales/fi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/fr.json":
/*!*********************************!*\
  !*** ../assets/locales/fr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Thèmes","customcss":"CSS personnalisé"},"Collections":{"settings":{"name":"Réglages","general":{"name":"Général","emotes":{"name":"Système D\'émojis","note":"Active le système d\'émojis de BD"},"publicServers":{"name":"Serveurs publics","note":"Afficher le bouton des serveurs publics"},"voiceDisconnect":{"name":"Déconnexion vocale","note":"Déconnexion du serveur vocal lors de la fermeture de Discord"},"showToasts":{"name":"Afficher les notifications bulles","note":"Afficher une petite notification pour les informations importantes"},"mediaKeys":{"name":"Désactiver les Touches Médias","note":"Empêche Discord de détourner vos touches multimédia après la lecture d\'une vidéo."}},"appearance":{"name":"Apparence","minimalMode":{"name":"Mode Minimal","note":"Masquer les éléments et réduire leurs tailles"},"twentyFourHour":{"name":"Horodatage en 24-Heures","note":"Convertit l\'horodatage 12-heures au format 24-heures"},"coloredText":{"name":"Texte Coloré","note":"Faire en sorte que la couleur du texte soit la même que celle du rôle"},"hideGIFButton":{"name":"Masquer le Bouton GIF","note":"Masque le bouton du sélecteur de GIF dans la zone de texte"},"hideGiftButton":{"name":"Masquer le Bouton Gift","note":"Masquer le bouton Nitro Gift dans la zone de texte"}},"window":{"removeMinimumSize":{"name":"Enlever la Taille Minimale","note":"Enlève la taille de fenêtre minimale forcée de Discord qui est de 940x500"},"name":"Fenêtre des Préférences","transparency":{"name":"Activer la Transparence","note":"Permet à la fenêtre principale d\'être transparente (nécessite un redémarrage)"},"frame":{"name":"Cadre de la Fenêtre","note":"Ajoute le cadre de la fenêtre native de l\'OS à la fenêtre principale."}},"addons":{"name":"Gestionnaire d\'Extensions","addonErrors":{"name":"Afficher les Erreurs d\'Extensions","note":"Affiche une modale avec les erreurs de plugin/thème"},"autoReload":{"name":"Chargement automatique","note":"Charge, recharge, et décharge des extensions et des thèmes automatiquement"},"editAction":{"name":"Action Édition","note":"Là où les thèmes & extensions apparaîtront lors de l\'édition","options":{"detached":"Fenêtre détachée","system":"Éditeur système"}}},"customcss":{"name":"CSS Personnalisé","customcss":{"name":"CSS Personnalisé","note":"Activer l\'onglet de CSS personnalisé"},"liveUpdate":{"name":"Mise à Jour Directe","note":"Met à jour le CSS pendant que vous écrivez"},"startDetached":{"name":"Démarrer Détaché","note":"En cliquant sur l\'onglet CSS Personnalisé, l\'éditeur s\'ouvre dans une fenêtre distincte."},"nativeOpen":{"name":"Ouvrir dans l\'Éditeur Natif","note":"En cliquant sur CSS Personnalisé, l\'onglet ouvrira votre CSS personnalisé dans votre éditeur natif"},"openAction":{"name":"Emplacement de l\'Éditeur","note":"Là où le CSS personnalisé doit s\'ouvrir par défaut","options":{"settings":"Menu Réglages","detached":"Fenêtre Détachée","system":"Éditeur système"}}},"developer":{"name":"Réglages Développeur","debuggerHotkey":{"name":"Touches Raccourcis du Débugueur","note":"Permettre l\'activation du débugueur quand F8 est pressé"},"reactDevTools":{"name":"Outils Développeurs React","note":"Injecte votre installation locale des Outils Développeurs React dans Discord"},"inspectElement":{"name":"Touche pour Inspecter l\'Élément","note":"Active le raccourci clavier de l\'inspecteur d\'élément (ctrl + shift + c) qui est commun à la plupart des navigateurs"},"devToolsWarning":{"name":"Arrêter les Avertissements des Outils Développement","note":"Empêche Discord d\'imprimer son message \\\\\\"Attends!\\\\\\""},"debugLogs":{"name":"Journaux de Débogage","note":"Transmet tout ce qui se trouve dans la console au fichier debug.log situé dans le dossier de BetterDiscord"}}},"emotes":{"name":"Emoticônes","general":{"name":"Général","download":{"name":"Télécharger les Émojis","note":"Télécharger les émojis quand ils ne sont plus à jour"},"emoteMenu":{"name":"Menu Émojis","note":"Afficher les Émojis Favoris/de Twitch dans le menu des émojis"},"hideEmojiMenu":{"name":"Masquer le Menu d\'Émojis","note":"Masquer le menu des émojis de Discord quand le menu des émojis est utilisé"},"autoCaps":{"name":"Autocapitalisation des émojis","note":"Met en majuscule automatiquement les commandes émojis"},"modifiers":{"name":"Afficher le Modificateur d\'Emojis","note":"Activer les mods d\'émojis (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animation Au Survol","note":"Uniquement animer les modificateurs d\'émojis au survol"}},"categories":{"name":"Catégories","twitchglobal":{"name":"Twitch Globaux","note":"Afficher les émojis globaux de Twitch"},"twitchsubscriber":{"name":"Abonnés Twitch","note":"Afficher les émojis des abonnés Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Afficher les émojis de FFZ"},"bttv":{"name":"BetterTTV","note":"Afficher les émojis de BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} par {{author}}","byline":"par {{author}}","openFolder":"Ouvrir dossier {{type}}","reload":"Recharger","addonSettings":"Réglages","website":"Site web","source":"Source","invite":"Server de support","donate":"Donner","patreon":"Patreon","name":"Nom","author":"Auteur","version":"Version","added":"Date d\'Ajout","modified":"Date Modifiée","search":"Rechercher {{type}}","editAddon":"Édition","deleteAddon":"Suppression","confirmDelete":"Êtes-vous sûr de vouloir supprimer {{name}}?","confirmationText":"Vous n\'avez pas sauvegardé les changements pour {{name}}. Fermer cette fenêtre fera perdre ces changements.","enabled":"{{name}} a été activé.","disabled":"{{name}} a été désactivé.","couldNotEnable":"{{name}} ne peut pas être activé.","couldNotDisable":"{{name}} n\'a pas pu être désactivé.","couldNotStart":"{{name}} n\'a pas pu être lancé.","couldNotStop":"{{name}} n\'a pas pu être arrêté.","settingsError":"Impossible d\'ouvrir les paramètres pour {{name}}","methodError":"{{method}} n\'a pas pu être renvoyé.","unknownAuthor":"Auteur Inconnu","noDescription":"Description non fournie.","alreadyExists":"Il y a déjà un {{type}} avec comme nom {{name}}","alreadWatching":"Déjà en train de regarder les extensions.","metaError":"Le META n\'a pas pu être analysé.","missingNameData":"Les données de META ne possèdent pas de nom.","metaNotFound":"Les données de META sont introuvables.","compileError":"Compilation impossible.","wasUnloaded":"{{name}} a été déchargé.","blankSlateHeader":"Vous n\'avez pas de {{type}}!","blankSlateMessage":"Récupère-les depuis [ce site]({{link}}) et ajoute-les dans ton dossier {{type}}."},"CustomCSS":{"confirmationText":"Vous avez des changements non sauvegardés dans votre CSS Personnalisé. Fermer cette fenêtre vous fera perdre ces changements.","update":"Mise à jour","save":"Sauvegarder","openNative":"Ouvrir dans l\'Éditeur Système","openDetached":"Détacher la Fenêtre","settings":"Réglages de l\'Éditeur","editorTitle":"Éditeur CSS Personnalisé"},"Emotes":{"loading":"Le chargement des emotes en arrière-plan ne se recharge pas.","loaded":"Tous les émojis sont chargés avec succès.","clearEmotes":"Éffacer les Données des Émojis","favoriteAction":"Ajouté aux favoris!","downloadFailed":"Échec Téléchargement","failureMessage":"BetterDiscord n\'a pas réussi à télécharger les émotes, veuillez vérifier votre connexion Internet et votre pare-feu."},"PublicServers":{"button":"public","join":"Rejoindre","joining":"En train de rejoindre","joined":"Rejoint","loading":"Chargement","loadMore":"Charger plus","notConnected":"Vous n\'êtes pas connecté","connectionRequired":"Vous devez connecter votre compte afin de rejoindre des serveurs.","connectionError":"Erreur de Connexion","connectionErrorMessage":"Une erreur s\'est produite lors de la connexion à DiscordServers.com, il est possible que leur site web/api soit en panne. Veuillez réessayer plus tard.","pagination":"Page {{page}} sur {{count}}","search":"Rechercher","connect":"Connecter","reconnect":"Reconnecter","categories":"Catégories","keywords":"Mots Clés","connection":"Connecté en tant que: {{username}}#{{discriminator}}","results":"Afficher {{start}}-{{end}} sur les {{total}} résultats dans la catégorie {{category}}","query":"pour {{query}}"},"Modals":{"confirmAction":"Êtes-vous sûr?","okay":"D\'accord","done":"Terminé","cancel":"Annuler","nevermind":"Laisse tomber","close":"Fermer","name":"Nom","message":"Message","error":"Erreur","addonErrors":"Erreurs d\'extension","restartRequired":"Redémarrage Requis","restartNow":"Redémarrer Maintenant","restartLater":"Redémarrer Ultérieurement","additionalInfo":"Info Additionnelle","restartPrompt":"Pour appliquer ces changements, Discord à besoin d\'être redémarré. Voulez-vous redémarrer l\'application maintenant?"},"ReactDevTools":{"notFound":"Extension Introuvable","notFoundDetails":"Impossible de trouver l\'extension de React Developer Tools sur ton PC. Merci d\'installer l\'extension dans votre installation locale de Chrome."},"Sorting":{"sortBy":"Trier Par","order":"Ordre","ascending":"Ascendant","descending":"Descendant"},"Startup":{"notSupported":"Non supporté","incompatibleApp":"BetterDiscord ne fonctionne pas avec {{app}}. Merci de désinstaller l\'une d\'elles.","updateNow":"Mettre à Jour Maintenant","maybeLater":"Peut-être Plus Tard","updateAvailable":"Mise à Jour Disponible","updateInfo":"Il y a une mise à jour disponible pour l\'injecteur de BetterDiscord ({{version}}).\\n\\nVous pouvez soit mettre à jour et redémarrer maintenant, soit plus tard.","updateFailed":"Mise à Jour Impossible","manualUpdate":"Nous n\'avons pas pu mettre à jour l\'appli automatiquement, merci de télécharger l\'installateur et de le réinstaller normalement.\\n\\n[Télécharger l\'installateur](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery N\'a Pas Pu Être Chargé","jqueryFailedDetails":"jQuery n\'a pas pu être chargé, et plusieures extensions pourraient ne pas fonctionner correctement. Précédez à vos propres risques."},"WindowPrefs":{"enabledInfo":"Cette option requière un thème transparent pour pouvoir fonctionner correctement. Sous Windows, cela peut casser le style Aero de Windows lors de la maximisation et du clipsement de la fenêtre.\\n\\nAfin que ce changement soit actif, Discord doit être redémarré. Voulez-vous redémarrer l\'application maintenant?","disabledInfo":"Afin que ce changement soit actif, Discord doit être redémarré. Voulez-vous redémarrer l\'application maintenant?"}}');

/***/ }),

/***/ "../assets/locales/hi.json":
/*!*********************************!*\
  !*** ../assets/locales/hi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"प्लग-इन","themes":"विषयों","customcss":"कस्टम सीएसएस"},"Collections":{"settings":{"name":"समायोजन","general":{"name":"आम","emotes":{"name":"भावना प्रणाली","note":"BD के इमोशन सिस्टम को सक्षम करता है"},"publicServers":{"name":" सार्वजनिक सर्वर","note":"सार्वजनिक सर्वर बटन प्रदर्शित करें"},"voiceDisconnect":{"name":"आवाज डिस्कनेक्ट","note":"डिसॉर्डर को बंद करते समय वॉयस सर्वर से डिस्कनेक्ट करें"},"showToasts":{"name":"टोस्ट दिखाओ","note":"महत्वपूर्ण जानकारी के लिए एक छोटी अधिसूचना दिखाता है"},"mediaKeys":{"name":"मीडिया कुंजी अक्षम करें","note":"वीडियो चलाने के बाद डिस्कॉर्ड को अपनी मीडिया कुंजियों को हाईजैक करने से रोकें।"}},"appearance":{"name":"दिखावट","minimalMode":{"name":"न्यूनतम मोड","note":"तत्वों को छुपाएं और तत्वों के आकार को कम करें"},"twentyFourHour":{"name":"24 घंटे का टाइमस्टैम्प","note":"12-घंटे के टाइमस्टैम्प को 24-घंटे के प्रारूप में बदलें"},"coloredText":{"name":"रंगीन पाठ","note":"टेक्स्ट रंग को भूमिका रंग के समान बनाएं"},"hideGIFButton":{"name":"जीआईएफ बटन छुपाएं","note":"टेक्स्ट क्षेत्र में GIF पिकर बटन छुपाता है"},"hideGiftButton":{"name":"जीआईएफ बटन छुपाएं","note":"टेक्स्ट क्षेत्र में नाइट्रो उपहार बटन छुपाता है"}},"window":{"removeMinimumSize":{"name":"न्यूनतम आकार निकालें","note":"940x500 . के डिस्कॉर्ड के मजबूर न्यूनतम विंडो आकार को हटा देता है\\nध्यान दें"},"name":"","transparency":{"name":"","note":""},"frame":{"name":"","note":""}},"addons":{"name":"एडऑन मैनेजर\\n","addonErrors":{"name":"एडऑन त्रुटि दिखाएं","note":"प्लगइन/थीम त्रुटियों के साथ एक मोडल दिखाता है"},"autoReload":{"name":"स्वचालित लोड हो रहा है","note":"प्लगइन्स और थीम को स्वचालित रूप से लोड, पुनः लोड और अनलोड करता है"},"editAction":{"name":"क्रिया संपादित करें","note":"संपादन करते समय प्लगइन्स और थीम कहाँ दिखाई देते हैं","options":{"detached":"","system":""}}},"customcss":{"name":"","customcss":{"name":"","note":""},"liveUpdate":{"name":"","note":""},"startDetached":{"name":"","note":""},"nativeOpen":{"name":"","note":""},"openAction":{"name":"","note":"","options":{"settings":"","detached":"","system":""}}},"developer":{"name":"","debuggerHotkey":{"name":"","note":""},"reactDevTools":{"name":"","note":""},"inspectElement":{"name":"","note":""},"devToolsWarning":{"name":"","note":""},"debugLogs":{"name":"","note":""}}},"emotes":{"name":"","general":{"name":"","download":{"name":"","note":""},"emoteMenu":{"name":"","note":""},"hideEmojiMenu":{"name":"","note":""},"autoCaps":{"name":"","note":""},"modifiers":{"name":"","note":""},"animateOnHover":{"name":"","note":""}},"categories":{"name":"","twitchglobal":{"name":"","note":""},"twitchsubscriber":{"name":"","note":""},"frankerfacez":{"name":"","note":""},"bttv":{"name":"","note":""}}}},"Addons":{"title":"","byline":"","openFolder":"","reload":"","addonSettings":"","website":"","source":"","invite":"","donate":"","patreon":"","name":"","author":"","version":"","added":"","modified":"","search":"","editAddon":"","deleteAddon":"","confirmDelete":"","confirmationText":"","enabled":"","disabled":"","couldNotEnable":"","couldNotDisable":"","couldNotStart":"","couldNotStop":"","settingsError":"","methodError":"","unknownAuthor":"","noDescription":"","alreadyExists":"","alreadWatching":"","metaError":"","missingNameData":"","metaNotFound":"","compileError":"","wasUnloaded":"","blankSlateHeader":"","blankSlateMessage":""},"CustomCSS":{"confirmationText":"","update":"","save":"","openNative":"","openDetached":"","settings":"","editorTitle":""},"Emotes":{"loading":"","loaded":"","clearEmotes":"","favoriteAction":"","downloadFailed":"","failureMessage":""},"PublicServers":{"button":"","join":"","joining":"","joined":"","loading":"","loadMore":"","notConnected":"","connectionRequired":"","connectionError":"","connectionErrorMessage":"","pagination":"","search":"","connect":"","reconnect":"","categories":"","keywords":"","connection":"","results":"","query":""},"Modals":{"confirmAction":"","okay":"","done":"","cancel":"","nevermind":"","close":"","name":"","message":"","error":"","addonErrors":"","restartRequired":"","restartNow":"","restartLater":"","additionalInfo":"","restartPrompt":""},"ReactDevTools":{"notFound":"","notFoundDetails":""},"Sorting":{"sortBy":"","order":"","ascending":"","descending":""},"Startup":{"notSupported":"","incompatibleApp":"","updateNow":"","maybeLater":"","updateAvailable":"","updateInfo":"","updateFailed":"","manualUpdate":"","jqueryFailed":"","jqueryFailedDetails":""},"WindowPrefs":{"enabledInfo":"","disabledInfo":""}}');

/***/ }),

/***/ "../assets/locales/hr.json":
/*!*********************************!*\
  !*** ../assets/locales/hr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/hu.json":
/*!*********************************!*\
  !*** ../assets/locales/hu.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/it.json":
/*!*********************************!*\
  !*** ../assets/locales/it.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plug-ins","themes":"Temi","customcss":"CSS Personalizzato"},"Collections":{"settings":{"name":"Impostazioni","general":{"name":"Generale","emotes":{"name":"Sistema di Emotes","note":"Abilita il sistema di Emotes di BD"},"publicServers":{"name":"Servers Pubblici","note":"Mostra il pulsante di servers pubblici"},"voiceDisconnect":{"name":"Esci dalla chat vocale","note":"Esci automaticamente dalla chat vocale quando chiudi Discord"},"showToasts":{"name":"Mostra Notifiche","note":"Mostra delle piccole notifiche per le informazioni importanti"},"mediaKeys":{"name":"Disabilita i tasti multimediali","note":"Impedisce a Discord di prendere il controllo dei tasti multimediali dopo la riproduzione di un video."}},"appearance":{"name":"Apparenze","minimalMode":{"name":"Modalità Minimale","note":"Nascondi elementi e riducine la grandezza"},"twentyFourHour":{"name":"Formato orario 24 ore","note":"Converte il formato orario di 12 ore in 24 ore"},"coloredText":{"name":"Testo Colorato","note":"Colora il testo allo stesso modo del ruolo"},"hideGIFButton":{"name":"Nascondi il pulsante GIF","note":"Nasconde il pulsante GIF nell\'area di testo"},"hideGiftButton":{"name":"Nascondi il pulsante \\"Regala Nitro\\"","note":"Nasconde il pulsante per regalare Nitro nell\'area di testo"}},"window":{"removeMinimumSize":{"name":"Rimuovi la grandezza minima","note":"Rimuove la grandezza minima forzata di 940x500 di Discord"},"name":"","transparency":{"name":"","note":""},"frame":{"name":"","note":""}},"addons":{"name":"Gestore degli Add-ons","addonErrors":{"name":"Mostra gli errori degli Add-ons","note":"Mostra un modale con errori dei plug-ins e temi"},"autoReload":{"name":"Caricamento Automatico","note":"Attiva, aggiorna, e disattiva automaticamente plugins e temi quando spenti o accesi"},"editAction":{"name":"Modifica Azione","note":"Dove appaiono plugins e temi durante le modifiche","options":{"detached":"Finestra distaccata","system":"Editor di sistema"}}},"customcss":{"name":"CSS personalizzato","customcss":{"name":"CSS personalizzato","note":"Abilita la scheda di CSS personalizzato"},"liveUpdate":{"name":"Aggiornamento automatico","note":"Aggiorna l\'aspetto della finestra mentre modifichi il codice CSS"},"startDetached":{"name":"Inizia una finestra a parte","note":"Cliccare la scheda di CSS personalizzato apre l\'editor in una finestra a parte"},"nativeOpen":{"name":"Apri nell\'editor nativo","note":"Cliccare la scheda di CSS personalizzato apre il CSS nel tuo editor nativo"},"openAction":{"name":"Locazione dell\'editor","note":"Dove il CSS personalizzato dovrebbe aprirsi di default","options":{"settings":"Impostazioni","detached":"staccato","system":"sistema"}}},"developer":{"name":"","debuggerHotkey":{"name":"","note":""},"reactDevTools":{"name":"","note":""},"inspectElement":{"name":"","note":""},"devToolsWarning":{"name":"","note":""},"debugLogs":{"name":"","note":""}}},"emotes":{"name":"","general":{"name":"","download":{"name":"","note":""},"emoteMenu":{"name":"","note":""},"hideEmojiMenu":{"name":"","note":""},"autoCaps":{"name":"","note":""},"modifiers":{"name":"","note":""},"animateOnHover":{"name":"","note":""}},"categories":{"name":"","twitchglobal":{"name":"","note":""},"twitchsubscriber":{"name":"","note":""},"frankerfacez":{"name":"","note":""},"bttv":{"name":"","note":""}}}},"Addons":{"title":"titolo","byline":"byline","openFolder":"openFolder","reload":"ricaricare","addonSettings":"addonSettings","website":"sito web","source":"fonte","invite":"invita","donate":"donare","patreon":"patreon","name":"","author":"autore","version":"versione","added":"aggiunto","modified":"modificato","search":"cerca","editAddon":"editAddon","deleteAddon":"deleteAddon","confirmDelete":"confirmDelete","confirmationText":"confirmationText","enabled":"abilitato","disabled":"disattivato","couldNotEnable":"couldNotEnable","couldNotDisable":"couldNotDisable","couldNotStart":"couldNotStart","couldNotStop":"couldNotStop","settingsError":"settingsError","methodError":"methodError","unknownAuthor":"unknownAuthor","noDescription":"noDescription","alreadyExists":"alreadyExists","alreadWatching":"alreadWatching","metaError":"metaErrore","missingNameData":"missingNameData","metaNotFound":"metaNotFound","compileError":"compileError","wasUnloaded":"wasUnloaded","blankSlateHeader":"blankSlateHeader","blankSlateMessage":"blankSlateMessage"},"CustomCSS":{"confirmationText":"confirmationText","update":"aggiornamento","save":"salva","openNative":"openNative","openDetached":"openDetached","settings":"impostazioni","editorTitle":"editorTitle"},"Emotes":{"loading":"caricamento","loaded":"caricato","clearEmotes":"clearEmotes","favoriteAction":"favoriteAction","downloadFailed":"downloadFailed","failureMessage":"failureMessage"},"PublicServers":{"button":"pulsante","join":"unisciti a","joining":"unirsi a","joined":"ha aderito a","loading":"caricamento","loadMore":"loadMore","notConnected":"notConnected","connectionRequired":"connectionRequired","connectionError":"connectionError","connectionErrorMessage":"connectionErrorMessage","pagination":"paginazione","search":"cerca","connect":"collegare","reconnect":"ricollegare","categories":"categorie","keywords":"parole chiave","connection":"collegamento","results":"risultati","query":"interrogare"},"Modals":{"confirmAction":"confirmAction","okay":"ok","done":"fatto","cancel":"cancellare","nevermind":"non importa","close":"chiudere","name":"","message":"messaggio","error":"errore","addonErrors":"addonErrors","restartRequired":"restartRequired","restartNow":"restartNow","restartLater":"restartLater","additionalInfo":"additionalInfo","restartPrompt":"restartPrompt"},"ReactDevTools":{"notFound":"notFound","notFoundDetails":"notFoundDetails"},"Sorting":{"sortBy":"sortBy","order":"ordine","ascending":"ascendente","descending":"discendente"},"Startup":{"notSupported":"notSupported","incompatibleApp":"incompatibileApp","updateNow":"updateNow","maybeLater":"maybeLater","updateAvailable":"updateAvailable","updateInfo":"updateInfo","updateFailed":"updateFailed","manualUpdate":"manualUpdate","jqueryFailed":"jqueryFailed","jqueryFailedDetails":"jqueryFailedDetails"},"WindowPrefs":{"enabledInfo":"enabledInfo","disabledInfo":"disabledInfo"}}');

/***/ }),

/***/ "../assets/locales/ja.json":
/*!*********************************!*\
  !*** ../assets/locales/ja.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"プラグイン","themes":"テーマ","customcss":"カスタム CSS"},"Collections":{"settings":{"name":"BD設定","general":{"name":"全般","emotes":{"name":"BD絵文字システム","note":"BetterDiscordの絵文字システムを有効にします。"},"publicServers":{"name":"公開サーバボタン","note":"公開サーバボタンを表示します"},"voiceDisconnect":{"name":"ボイスチャンネル自動切断","note":"Discordを終了する際、自動的にボイスチャンネルから切断します。"},"showToasts":{"name":"トースト表示","note":"重要な情報を小さな通知として表示します。"}},"appearance":{"name":"外観","twentyFourHour":{"name":"24時間表記","note":"時間を24時間表記に変更します。"},"minimalMode":{"name":"コンパクトモード","note":"表示をコンパクトにします。"},"coloredText":{"name":"カラーテキスト","note":"テキストカラーをサーバルールの色と同じにします。"}},"addons":{"name":"アドオンマネージャ","addonErrors":{"name":"アドオンエラーの表示","note":"プラグイン/テーマで発生したエラーを表示"},"autoScroll":{"name":"設定までスクロール","note":"プラグインの設定が収まらない場合、自動でスクロールします"},"autoReload":{"name":"自動リロード","note":"プラグイン・テーマを自動でロード・アンロード・リロードします"}},"customcss":{"name":"カスタム CSS","customcss":{"name":"カスタム CSS","note":"カスタム CSS タブを有効にします"},"liveUpdate":{"name":"自動更新","note":"コードを自動再読み込みする"},"startDetached":{"name":"デタッチ","note":"カスタムCSSエディターをウィンドウに独立させます"},"nativeOpen":{"name":"外部エディタを起動","note":"カスタムCSSを外部のエディタで起動します"}},"developer":{"name":"開発者設定","developerMode":{"name":"開発者モード","note":"デバッグモードを有効にします(デバッガ起動はF8)"},"copySelector":{"name":"セレクターコピー","note":"開発者モードが有効時に、コンテキストメニューに\\"Copy Selector\\"を追加します"}},"window":{"name":"ウィンドウ設定","transparency":{"name":"透過を有効","note":"Discordのメインウィンドウを透過します(要再起動)"},"frame":{"name":"ウィンドウフレーム表示","note":"OSにあわせたフレームを追加します"}}},"emotes":{"name":"絵文字","general":{"name":"全般","download":{"name":"絵文字をダウンロード","note":"絵文字をダウンロードします(1週間ごと)"},"emoteMenu":{"name":"絵文字メニュー","note":"Twitch/お気に入りの絵文字を表示します"},"hideEmojiMenu":{"name":"絵文字メニューを非表示","note":"Discord標準の絵文字メニューを非表示にします"},"autoCaps":{"name":"絵文字自動補完","note":"絵文字を自動で補完します"},"modifiers":{"name":"BetterDiscord絵文字を表示","note":"BetterDiscordの絵文字を有効化します(flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"ホバー時にアニメーション","note":"ホバー時にアニメーションします(アニメーション絵文字限定)"}},"categories":{"name":"カテゴリ","twitch":{"name":"Twitch","note":"Twitchに登録されている絵文字を表示します"},"ffz":{"name":"FrankerFaceZ","note":"FFZに登録されている絵文字を表示します"},"bttv":{"name":"BetterTTV","note":"BTTVに登録されている絵文字を表示します"}}}},"Emotes":{"downloading":"絵文字をダウンロード中…","downloaded":"すべての絵文字のダウンロードが完了しました","clearEmotes":"絵文字データをクリアします","favoriteAction":"お気に入り!!"},"CustomCSS":{"confirmationText":"Discordを終了すると、保存されていないカスタムCSSは破棄されます","update":"更新","save":"保存","openNative":"外部エディタで開く","openDetached":"別ウィンドウで開く","settings":"エディター設定","editorTitle":"カスタム CSS エディター"},"PublicServers":{"button":"公開サーバ","join":"参加","joining":"参加中","joined":"参加済み","loading":"読み込み中","loadMore":"もっと読み込む","notConnected":"DiscordServers.comに接続できませんでした","search":"検索","connect":"接続","reconnect":"再接続","categories":"カテゴリ","connection":"接続済み: {{username}}#{{discriminator}}","results":"カテゴリ{{category}}  合計{{total}}中 {{start}}-{{end}}を表示中","query":"クエリー:{{query}}"},"Modals":{"confirmClose":"Discordを終了しますか?","okay":"はい","cancel":"いいえ","name":"名前","message":"メッセージ","error":"エラー","addonErrors":"アドオンエラー"}}');

/***/ }),

/***/ "../assets/locales/ko.json":
/*!*********************************!*\
  !*** ../assets/locales/ko.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/lt.json":
/*!*********************************!*\
  !*** ../assets/locales/lt.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/nl.json":
/*!*********************************!*\
  !*** ../assets/locales/nl.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plug-ins","themes":"Thema\'s","customcss":"Aangepaste CSS"},"Collections":{"settings":{"name":"Instellingen","general":{"name":"Algemeen","emotes":{"name":"Emote systeem","note":"Schakel het emote-systeem van BD in"},"publicServers":{"name":"Openbare servers","note":"Knop openbare servers weergeven"},"voiceDisconnect":{"name":"Stem Verbroken","note":"Verbreek de verbinding met de oproep"},"showToasts":{"name":"Laat Toasts Zien","note":"Toont een melding voor belangrijke informatie"},"mediaKeys":{"name":"Schakel mediatoetsen uit","note":"Voorkomt dat Discord uw mediatoetsen kaapt na het afspelen van een video."}},"appearance":{"name":"Uiterlijk","minimalMode":{"name":"Minimale modus","note":"Verberg elementen en verklein de elementen"},"twentyFourHour":{"name":"24","note":"24-uurs tijdstempels"},"coloredText":{"name":"Gekleurde Tekst","note":"Tekstkleur hetzelfde maken als rolkleur"},"hideGIFButton":{"name":"Verberg GIF knop.","note":"Verbergt de GIF-kiezerknop in het tekstgebied"},"hideGiftButton":{"name":"Cadeauknop verbergen","note":"Verbergt de Nitro Gift-knop in het tekstgebied"}},"window":{"removeMinimumSize":{"name":"","note":""},"name":"","transparency":{"name":"","note":""},"frame":{"name":"","note":""}},"addons":{"name":"","addonErrors":{"name":"","note":""},"autoReload":{"name":"","note":""},"editAction":{"name":"","note":"","options":{"detached":"","system":""}}},"customcss":{"name":"","customcss":{"name":"","note":""},"liveUpdate":{"name":"","note":""},"startDetached":{"name":"","note":""},"nativeOpen":{"name":"","note":""},"openAction":{"name":"","note":"","options":{"settings":"","detached":"","system":""}}},"developer":{"name":"","debuggerHotkey":{"name":"","note":""},"reactDevTools":{"name":"","note":""},"inspectElement":{"name":"","note":""},"devToolsWarning":{"name":"","note":""},"debugLogs":{"name":"","note":""}}},"emotes":{"name":"","general":{"name":"Algemeen","download":{"name":"","note":""},"emoteMenu":{"name":"Emote Menu","note":""},"hideEmojiMenu":{"name":"Verberg emoji-menu","note":""},"autoCaps":{"name":"","note":""},"modifiers":{"name":"","note":""},"animateOnHover":{"name":"","note":""}},"categories":{"name":"","twitchglobal":{"name":"","note":""},"twitchsubscriber":{"name":"","note":""},"frankerfacez":{"name":"FrankerFaceZ","note":""},"bttv":{"name":"BetterTTV","note":"Laat emotes zien van BTTV"}}}},"Addons":{"title":"","byline":"door {{author}}","openFolder":"Open {{type}} folder","reload":"Herladeen","addonSettings":"Instellingen","website":"Website","source":"Bronnen","invite":"Support Server","donate":"Donatie","patreon":"Patreon","name":"Naam","author":"Schrijver","version":"Versie","added":"Datum toegevoegd","modified":"Datum gewijzigd ","search":"","editAddon":"Bewerken","deleteAddon":"Verwijderen","confirmDelete":"Weet je het zeker dat je {{name}} wilt verwijderen?","confirmationText":"Je hebt niet-opgeslagen wijzigingen in {{naam}}. Als je dit venster sluit, gaan alle wijzigingen verloren.","enabled":"","disabled":"","couldNotEnable":"","couldNotDisable":"","couldNotStart":"","couldNotStop":"","settingsError":"","methodError":"","unknownAuthor":"Onbekende schrijver","noDescription":"Beschrijving kon niet worden weergegeven","alreadyExists":"","alreadWatching":"","metaError":"","missingNameData":"","metaNotFound":"","compileError":"","wasUnloaded":"","blankSlateHeader":"","blankSlateMessage":""},"CustomCSS":{"confirmationText":"","update":"","save":"","openNative":"","openDetached":"","settings":"","editorTitle":""},"Emotes":{"loading":"","loaded":"","clearEmotes":"","favoriteAction":"Favorieten","downloadFailed":"","failureMessage":""},"PublicServers":{"button":"openbaar","join":"","joining":"","joined":"","loading":"Aan het laden...","loadMore":"Laad meer...","notConnected":"Niet verbonden.","connectionRequired":"","connectionError":"","connectionErrorMessage":"","pagination":"","search":"Zoeken","connect":"Verbindeen","reconnect":"","categories":"Categorieën","keywords":"","connection":"","results":"","query":""},"Modals":{"confirmAction":"Weet je het zeker?","okay":"Oké","done":"","cancel":"Annuleren","nevermind":"","close":"Bijna","name":"Naam","message":"Berich","error":"Fout!","addonErrors":"","restartRequired":"","restartNow":"","restartLater":"","additionalInfo":"","restartPrompt":""},"ReactDevTools":{"notFound":"","notFoundDetails":""},"Sorting":{"sortBy":"","order":"Volgorde","ascending":"","descending":""},"Startup":{"notSupported":"Niet ondersteund","incompatibleApp":"","updateNow":"","maybeLater":"Misschien later ","updateAvailable":"Er is een update mogelijk","updateInfo":"","updateFailed":"","manualUpdate":"","jqueryFailed":"","jqueryFailedDetails":""},"WindowPrefs":{"enabledInfo":"","disabledInfo":""}}');

/***/ }),

/***/ "../assets/locales/no.json":
/*!*********************************!*\
  !*** ../assets/locales/no.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"","themes":"","customcss":"Tilpasset CSS"},"Collections":{"settings":{"name":"Innstillinger","general":{"name":"Generell","emotes":{"name":"Emote-system","note":""},"publicServers":{"name":"Offentlige Servere","note":""},"voiceDisconnect":{"name":"","note":""},"showToasts":{"name":"Vis Toasts","note":""},"mediaKeys":{"name":"","note":""}},"appearance":{"name":"Utseende","minimalMode":{"name":"Minimalistisk Modus","note":""},"twentyFourHour":{"name":"24-Timers Tidsstempler","note":""},"coloredText":{"name":"Farget Tekst","note":""},"hideGIFButton":{"name":"","note":""},"hideGiftButton":{"name":"","note":""}},"window":{"removeMinimumSize":{"name":"","note":""},"name":"","transparency":{"name":"","note":""},"frame":{"name":"","note":""}},"addons":{"name":"","addonErrors":{"name":"","note":""},"autoReload":{"name":"","note":""},"editAction":{"name":"","note":"","options":{"detached":"","system":""}}},"customcss":{"name":"Tilpasset CSS","customcss":{"name":"Tilpasset CSS","note":""},"liveUpdate":{"name":"","note":""},"startDetached":{"name":"","note":""},"nativeOpen":{"name":"","note":""},"openAction":{"name":"","note":"","options":{"settings":"","detached":"","system":""}}},"developer":{"name":"","debuggerHotkey":{"name":"","note":""},"reactDevTools":{"name":"","note":""},"inspectElement":{"name":"","note":""},"devToolsWarning":{"name":"","note":""},"debugLogs":{"name":"","note":""}}},"emotes":{"name":"Emotes","general":{"name":"Generell","download":{"name":"Last ned Emotes","note":""},"emoteMenu":{"name":"","note":""},"hideEmojiMenu":{"name":"","note":""},"autoCaps":{"name":"","note":""},"modifiers":{"name":"","note":""},"animateOnHover":{"name":"","note":""}},"categories":{"name":"Kategorier","twitchglobal":{"name":"","note":""},"twitchsubscriber":{"name":"","note":""},"frankerfacez":{"name":"FrankerFaceZ","note":""},"bttv":{"name":"BetterTTV","note":""}}}},"Addons":{"title":"","byline":"","openFolder":"","reload":"","addonSettings":"Innstillinger","website":"Nettsted","source":"","invite":"","donate":"Donere","patreon":"Patreon","name":"Navn","author":"Forfatter","version":"Versjon","added":"","modified":"","search":"","editAddon":"Redigere","deleteAddon":"Slett","confirmDelete":"","confirmationText":"","enabled":"","disabled":"","couldNotEnable":"","couldNotDisable":"","couldNotStart":"","couldNotStop":"","settingsError":"","methodError":"","unknownAuthor":"","noDescription":"","alreadyExists":"","alreadWatching":"","metaError":"","missingNameData":"","metaNotFound":"","compileError":"","wasUnloaded":"","blankSlateHeader":"","blankSlateMessage":""},"CustomCSS":{"confirmationText":"","update":"Oppdater","save":"Lagre","openNative":"","openDetached":"","settings":"","editorTitle":""},"Emotes":{"loading":"","loaded":"","clearEmotes":"","favoriteAction":"Favoritt!","downloadFailed":"","failureMessage":""},"PublicServers":{"button":"offentlig","join":"","joining":"","joined":"","loading":"","loadMore":"","notConnected":"","connectionRequired":"","connectionError":"","connectionErrorMessage":"","pagination":"","search":"Søk","connect":"","reconnect":"","categories":"","keywords":"","connection":"","results":"","query":""},"Modals":{"confirmAction":"Er Du Sikker?","okay":"Okay","done":"","cancel":"","nevermind":"","close":"","name":"","message":"","error":"","addonErrors":"","restartRequired":"","restartNow":"Start på nytt nå","restartLater":"Start på nytt senere","additionalInfo":"","restartPrompt":""},"ReactDevTools":{"notFound":"","notFoundDetails":""},"Sorting":{"sortBy":"Sorter etter","order":"","ascending":"","descending":""},"Startup":{"notSupported":"Ikke Støttet","incompatibleApp":"BetterDiscord fungerer ikke med {{app}}. Avinstaller en av dem. ","updateNow":"Oppdater Nå","maybeLater":"Kanskje Senere","updateAvailable":"Oppdatering Tilgjengelig","updateInfo":"Det er en oppdatering tilgjengelig for BetterDiscords injektor ({{version}})\\n\\nDu kan enten oppdatere å starte på nytt nå, eller senere.","updateFailed":"Kunne Ikke Oppdatere","manualUpdate":"","jqueryFailed":"","jqueryFailedDetails":""},"WindowPrefs":{"enabledInfo":"","disabledInfo":"For å kunne tre i kraft må Discord startes på nytt. Vil du starte på nytt nå?"}}');

/***/ }),

/***/ "../assets/locales/pl.json":
/*!*********************************!*\
  !*** ../assets/locales/pl.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Wtyczki","themes":"Motywy","customcss":"Niestandardowy CSS"},"Collections":{"settings":{"name":"Ustawienia","general":{"name":"Ogólne","emotes":{"name":"System emoji","note":"Aktywuje system emoji BetterDiscorda"},"publicServers":{"name":"Publiczne serwery","note":"Wyświetla przycisk do publicznych serwerów"},"voiceDisconnect":{"name":"Rozłączaj z czatem głosowym","note":"Rozłącza z serwerem czatu głosowego przy wyłączaniu Discorda"},"showToasts":{"name":"Wyświetlaj okienka powiadomień","note":"Wyświetla małe powiadomienia dla ważnych zdarzeń"},"mediaKeys":{"name":"Wyłącz przyciski multimedialne","note":"Zapobiega korzystaniu z klawiszy multimedialnych przez Discorda podczas odtwarzania filmów."}},"appearance":{"name":"Wygląd","minimalMode":{"name":"Tryb kompaktowy","note":"Zmniejsza lub ukrywa niektóre elementy interfejsu"},"twentyFourHour":{"name":"24-godzinne znaczniki czasu","note":"Zmienia 12-godzinne znaczniki czasu na format 24-godzinny"},"coloredText":{"name":"Kolorowy tekst","note":"Zmienia kolor wiadomości na kolor głównej roli użytkownika"},"hideGIFButton":{"name":"Ukryj przycisk z GIF-ami","note":"Ukrywa przycisk z menu GIF-ów w polu tekstowym"},"hideGiftButton":{"name":"Ukryj przycisk do podarowywania Nitro","note":"Ukrywa przycisk do podarowywania Nitro w polu tekstowym"}},"window":{"removeMinimumSize":{"name":"Usuń limit minimalnego rozmiaru okna","note":"Usuwa wymuszony przez Discorda limit minimalnego rozmiaru okna (940x500)"},"name":"Ustawienia okna","transparency":{"name":"Włącz przezroczystość","note":"Dodaje efekt przezroczytstości do okna Discorda (wymaga ponownego uruchomienia)"},"frame":{"name":"Ramka okna","note":"Dodaje systemową ramkę do okna Discorda"}},"addons":{"name":"Menedżer dodatków","addonErrors":{"name":"Wyświetlaj błędy dodatków","note":"Wyświetla okno z błędami wtyczek i motywów"},"autoReload":{"name":"Automatyczne załadowywanie","note":"Automatycznie ładuje, przeładowuje i odładowuje wtyczki oraz motywy"},"editAction":{"name":"Edytor dodatków","note":"Ustawia domyślny edytor kodu wtyczek i motywów","options":{"detached":"Osobne okno","system":"Edytor systemowy"}}},"customcss":{"name":"Niestandardowy CSS","customcss":{"name":"Niestandardowy CSS","note":"Wyświetla zakładkę z niestandardoweym kodem CSS"},"liveUpdate":{"name":"Automatyczny podgląd","note":"Aktualizuje CSS Discorda wraz z pisaniem kodu"},"startDetached":{"name":"Osobne okno edytora","note":"Kliknięcie na zakładkę z niestandardowym kodem CSS uruchomi edytor w osobnym oknie"},"nativeOpen":{"name":"Otwórz w edytorze systemowym","note":"Kliknięcie na zakładkę z niestandardowym kodem CSS uruchomi plik w edytorze systemowym"},"openAction":{"name":"Domyślny edytor","note":"Ustawia domyślny edytor niestandardowego kodu CSS","options":{"settings":"Ustawienia","detached":"Osobne okno","system":"Edytor systemowy"}}},"developer":{"name":"Ustawienia dla programistów","debuggerHotkey":{"name":"Debugger","note":"Uruchamia debugger po naciśnięciu F8"},"reactDevTools":{"name":"React Developer Tools","note":"Wprowadza zainstalowane na twoim komputerze rozszerzenie React Developer Tools do Discorda"},"inspectElement":{"name":"Narzędzie „Zbadaj element”","note":"Umożliwia korzystanie z narzędzia „Zbadaj element” po użyciu skrótu klawiszowego Ctrl+Shift+C"},"devToolsWarning":{"name":"Nie wyświetlaj ostrzeżenia o szybkim wysyłaniu wiadomości","note":"Zapobiega wyświetlaniu informacji o zbyt szybkim wysyłaniu wiadomości przez Discorda"},"debugLogs":{"name":"Dziennik zdarzeń","note":"Przekierowuje informacje z konsoli do pliku debug.log w folderze BetterDiscorda"}}},"emotes":{"name":"Emoji","general":{"name":"Ogólne","download":{"name":"Pobieraj emoji","note":"Pobiera emoji, gdy jest dostępna aktualizacja"},"emoteMenu":{"name":"Menu emoji","note":"Wyświetla ulubione emoji oraz emoji z Twitcha w oddzielnym menu"},"hideEmojiMenu":{"name":"Ukryj menu emoji","note":"Ukrywa menu z emoji Discorda"},"autoCaps":{"name":"Automatyczna zmiana wielkości liter w emoji","note":"Automatycznie zmienia wielkość liter przy wprowadzaniu emoji"},"modifiers":{"name":"Pokazuj modyfikacje emoji","note":"Wyświetla modyfikacje emoji (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animacje po najechaniu","note":"Wyświetla animacje wyłącznie przy najechaniu na zmodyfikowane emoji"}},"categories":{"name":"Kategorie","twitchglobal":{"name":"Globalne emoji Twitcha","note":"Wyświetla globalne emoji Twitcha"},"twitchsubscriber":{"name":"Emoji dla subskrybentów Twitcha","note":"Wyświetla emoji dla subskrybentów Twitcha"},"frankerfacez":{"name":"FrankerFaceZ","note":"Wyświetla emoji z FrankerFaceZ"},"bttv":{"name":"BetterTTV","note":"Wyświetla emoji z BetterTTV"}}}},"Addons":{"title":"{{name}} (wersja {{version}}) autorstwa {{author}}","byline":"autorstwa {{author}}","openFolder":"Otwórz folder ({{type}})","reload":"Odśwież","addonSettings":"Ustawienia","website":"Strona internetowa","source":"Źródło","invite":"Wspomóż serwer","donate":"Przekaż darowiznę","patreon":"Patreon","name":"Nazwa","author":"Twórca","version":"Wersja","added":"Data dodania","modified":"Data modyfikacji","search":"Wyszukaj","editAddon":"Edytuj","deleteAddon":"Usuń","confirmDelete":"Czy na pewno chcesz usunąć {{name}}?","confirmationText":"Masz niezapisane zmiany w kodzie {{name}}. Zamknięcie tego okna spowoduje utratę danych.","enabled":"Dodatek {{name}} został włączony.","disabled":"Dodatek {{name}} został wyłączony.","couldNotEnable":"Dodatek {{name}} nie może zostać włączony.","couldNotDisable":"Dodatek {{name}} nie może zostać wyłączony.","couldNotStart":"Dodatek {{name}} nie może zostać włączony.","couldNotStop":"Dodatek {{name}} nie może zostać wyłączony.","settingsError":"Nie udało się otworzyć ustawień {{name}}","methodError":"Metoda {{method}} nie może zostać wywołana.","unknownAuthor":"Nieznany twórca","noDescription":"Brak opisu.","alreadyExists":"Masz już dodatek z nazwą {{name}}","alreadWatching":"Dodatki są już obserwowane.","metaError":"Nie udało się przetworzyć metadanych.","missingNameData":"Brak nazwy dodatku w metadanych.","metaNotFound":"Nie odnaleziono metadanych.","compileError":"Błąd kompilacji.","wasUnloaded":"Dodatek {{name}} został odładowany.","blankSlateHeader":"Wygląda na to, że nic tu nie ma!","blankSlateMessage":"Pobierz nowe dodatki z [tej strony]({{link}}) i przenieś je do odpowiedniego folderu."},"CustomCSS":{"confirmationText":"Masz niezapisane zmiany w swoim niestandardowym kodzie CSS. Zamknięcie tego okienka spowoduje utratę danych.","update":"Zaktualizuj","save":"Zapisz","openNative":"Otwórz w edytorze systemowym","openDetached":"Otwórz w osobnym oknie","settings":"Ustawienia edytora","editorTitle":"Edytor niestandardowego kodu CSS"},"Emotes":{"loading":"Ładowanie emoji w tle, nie odświeżaj Discorda.","loaded":"Wszystkie emoji zostały załadowane poprawnie.","clearEmotes":"Wyczyść dane emoji","favoriteAction":"Dodaj do ulubionych","downloadFailed":"Pobieranie nie powiodło się","failureMessage":"Nie udało się pobrać emoji, sprawdź swoje połączenie z internetem lub zaporę ogniową."},"PublicServers":{"button":"serwery","join":"Dołącz","joining":"Dołączanie","joined":"Dołączono","loading":"Ładowanie","loadMore":"Załaduj więcej","notConnected":"Nie połączono","connectionRequired":"Musisz połączyć swoje konto, by wejść na serwer.","connectionError":"Błąd połączenia","connectionErrorMessage":"Wystąpił błąd podczas łączenia z DiscordServers.com (najprawdopodobniej ich strona lub API nie działa). Spróbuj ponownie później.","pagination":"Strona {{page}} z {{count}}","search":"Wyszukaj","connect":"Połącz","reconnect":"Odnów połączenie","categories":"Kategorie","keywords":"Słowa klucze","connection":"Połączono jako: {{username}}#{{discriminator}}","results":"Wyświetlanie {{start}}-{{end}} z {{total}} wszystkich wyników w {{category}}","query":"dla {{query}}"},"Modals":{"confirmAction":"Czy na pewno chcesz to zrobić?","okay":"Zamknij","done":"Potwierdź","cancel":"Anuluj","nevermind":"Anuluj","close":"Zamknij","name":"Nazwa","message":"Komunikat","error":"Błąd","addonErrors":"Błędy wtyczek","restartRequired":"Wymagane ponowne uruchomienie","restartNow":"Zrestartuj teraz","restartLater":"Zrestartuj później","additionalInfo":"Dodatkowe informacje","restartPrompt":"Uruchom ponownie Discorda, by zmiany odniosły efekty. Czy chcesz to zrobić teraz?"},"ReactDevTools":{"notFound":"Nie znaleziono rozszerzenia","notFoundDetails":"Nie udało się znaleźć React Developer Tools na twoim urządzeniu. By kontynuuować, zainstaluj to rozszerzenie w swoim Chrome."},"Sorting":{"sortBy":"Sortuj wg","order":"Kolejność","ascending":"Rosnąca","descending":"Malejąca"},"Startup":{"notSupported":"Brak wsparcia","incompatibleApp":"BetterDiscord nie jest kompatybilny z {{app}}. Odinstaluj jedną z tych aplikacji.","updateNow":"Zaktualizuj teraz","maybeLater":"Może później","updateAvailable":"Dostępna jest aktualizacja","updateInfo":"Dostępna jest aktualizacja injectora BetterDiscorda ({{version}}).\\n\\nZaktualizuj go teraz lub później.","updateFailed":"Aktualizacja nie powiodła się","manualUpdate":"Nie udało się zaktualizować BetterDiscorda automatycznie. Pobierz instalator i zainstaluj BD ponownie.\\n\\n[Pobierz instalator](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"Ładowanie jQuery nie powiodło się","jqueryFailedDetails":"Nie udało się załadować jQuery i niektóre wtyczki mogą nie działać poprawnie. Kontynuuj na własne ryzyko."},"WindowPrefs":{"enabledInfo":"Ta opcja wymaga przezroczystego motywu do poprawnego działania. Na Windowsie mogą pojawić się problemy ze zmianą wielkości okna.\\n\\nUruchom ponownie Discorda, by zmiany odniosły efekty. Czy chcesz to zrobić teraz?","disabledInfo":"Uruchom ponownie Discorda, by zmiany odniosły efekty. Czy chcesz to zrobić teraz?"}}');

/***/ }),

/***/ "../assets/locales/pt-br.json":
/*!************************************!*\
  !*** ../assets/locales/pt-br.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Configurações","general":{"name":"Geral","emotes":{"name":"Sistema de Emotes","note":"Ativa o sistema de emotes do BetterDiscord"},"publicServers":{"name":"Servidores Públicos","note":"Mostra o botão de servidores públicos"},"voiceDisconnect":{"name":"Desconexão de Voz","note":"Desconecta do servidor de voz quando o discord é fechado"},"showToasts":{"name":"Mostrar Toasts","note":"Mostra uma pequena notificação para informações importantes"},"mediaKeys":{"name":"Desabilitar Teclas de Media","note":"Previne que o discord roube suas teclas de media depois de dar play em um vídeo"}},"appearance":{"name":"Aparência","minimalMode":{"name":"Modo Mínimo","note":"Esconde alguns elementos e reduz o tamanho de outros"},"twentyFourHour":{"name":"Relógio de 24 Horas","note":"Converte o formato de 12 horas para o de 24 horas"},"coloredText":{"name":"Texto Colorido","note":"Faz com que a cor do texto seja a mesma do cargo"},"hideGIFButton":{"name":"Esconder o Botão de GIF","note":"Esconde o botão do selecionador de GIFs na caixa de texto"},"hideGiftButton":{"name":"Esconder o Botão de Presente","note":"Esconde o botão de enviar nitro na caixa de texto"}},"window":{"removeMinimumSize":{"name":"Remover Tamanho Mínimo","note":"Remove o tamanho mínimo forçado pelo discord de 940x500"},"name":"Preferências da Janela","transparency":{"name":"Habilitar Transparência","note":"Faz a janela principal ser transparente (requer reinicialização)"},"frame":{"name":"Moldura da Janela","note":"Adiciona a moldura nativa na janela principal"}},"addons":{"name":"Gerenciador de Addons","addonErrors":{"name":"Mostrar erros dos Addons","note":"Mostra um modal com os erros do plugin/tema"},"autoReload":{"name":"Carregamento Automático","note":"Automaticamente carrega, recarrega e descarrega plugins e temas"},"editAction":{"name":"Ação de Edição","note":"Onde plugins e temas aparecerão quando os editar","options":{"detached":"Janela Separada","system":"Editor do Sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Habilita a aba de css personalizado"},"liveUpdate":{"name":"Atualização em Tempo Real","note":"Atualiza o css à medida que você digita"},"startDetached":{"name":"Iniciar Separado","note":"Clicar na aba do CSS Personalizado irá abrir o editor numa janela separada"},"nativeOpen":{"name":"Abrir no Editor Nativo","note":"Clicar na aba do CSS Personalizado irá o abrir usando seu editor nativo"},"openAction":{"name":"Localização do Editor","note":"Onde o CSS Personalizado deve aparecer por padrão","options":{"settings":"Menu de Configurações","detached":"Janela Separada","system":"Editor do Sistema"}}},"developer":{"name":"Configurações de Desenvolvedor","debuggerHotkey":{"name":"Atalho para o Depurador","note":"Permite ativar o depurador quando pressionar F8"},"reactDevTools":{"name":"React Developer Tools","note":"Injeta a sua instalação local do React Developer Tools no discord"},"inspectElement":{"name":"Atalho para Inspecionar Elemento","note":"Habilita o atalho para inspecionar elemento (ctrl + shift + c) que é comum na maioria dos navegadores"},"devToolsWarning":{"name":"Remove os Avisos de DevTools","note":"Faz o discord parar de imprimir as mensagens de \\"Calma Aí!\\""},"debugLogs":{"name":"Registro de Depuração","note":"Salva todas os logs do console no arquivo debug.log dentro da pasta do BetterDiscord"}}},"emotes":{"name":"Emotes","general":{"name":"Geral","download":{"name":"Baixar Emotes","note":"Baixa os emotes sempre que eles estiverem desatualizados"},"emoteMenu":{"name":"Menu de Emotes","note":"Mostra os emotes favoritos e da twitch no menu"},"hideEmojiMenu":{"name":"Esconder o Menu de Emojis","note":"Esconde o menu de emojis do discord quando estiver usando o menu de emotes"},"autoCaps":{"name":"Capitalização Automática de Emotes ","note":"Capitaliza automaticamente os comandos de emote"},"modifiers":{"name":"Mostrar Modificadores de Emotes","note":"Ativa as modificação de emotes (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar ao Interagir","note":"Só anima os emotes quando o cursor passar sobre eles"}},"categories":{"name":"Categorias","twitchglobal":{"name":"Globais da Twitch","note":"Mostra os emotes globais da twitch"},"twitchsubscriber":{"name":"Subscribers da Twitch","note":"Mostra os emotes de subscribers da twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostra os emotes da FFZ"},"bttv":{"name":"BetterTTV","note":"Mostra os emotes da BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"por {{author}}","openFolder":"Abrir Pasta de {{type}}s","reload":"Recarregar","addonSettings":"Configurações","website":"Site","source":"Source","invite":"Servidor de Suporte","donate":"Doar","patreon":"Patreon","name":"Nome","author":"Autor","version":"Versão","added":"Date de Adição","modified":"Data de Modificação","search":"Pesquisar {{type}}","editAddon":"Editar","deleteAddon":"Remover","confirmDelete":"Você tem certeza que quer remover o {{name}}?","confirmationText":"Você tem mudanças ainda não salvas em {{name}}. Fechar essa janela fará você perder todas elas.","enabled":"{{name}} foi ativado.","disabled":"{{name}} foi desativado.","couldNotEnable":"{{name}} não pôde ser ativado.","couldNotDisable":"{{name}} não pôde ser desativado.","couldNotStart":"{{name}} não pôde ser iniciado.","couldNotStop":"{{name}} não pôde ser parado.","settingsError":"Não foi possível abrir as configurações do(a) {{name}}","methodError":"{{method}} não pode ser disparado.","unknownAuthor":"Autor Desconhecido","noDescription":"Descrição não fornecida.","alreadyExists":"Já existe um {{type}} com o nome {{name}}","alreadWatching":"Já assistindo os addons.","metaError":"META não pode ser reconhecida.","missingNameData":"META sem dados de nome.","metaNotFound":"META não encontrado.","compileError":"Não foi possível compilar.","wasUnloaded":"{{name}} foi descarregado.","blankSlateHeader":"Você não tem nenhum {{type}}!","blankSlateMessage":"Baixe alguns [desse website]({{link}}) e os adicione na sua pasta de {{type}}s."},"CustomCSS":{"confirmationText":"Você tem mudanças ainda não salvas no seu CSS Personalizado. Fechar essa janela fará você perder todas elas.","update":"Atualizar","save":"Salvar","openNative":"Abrir no Editor do Sistema","openDetached":"Abrir numa Janela Separada","settings":"Configurações do Editor","editorTitle":"Editor do CSS Personalizado"},"Emotes":{"loading":"Carregando emotes em segundo plano, por favor não recarregue.","loaded":"Todos os emotes carregaram com sucesso.","clearEmotes":"Limpar os dados de Emotes","favoriteAction":"Favoritar!","downloadFailed":"Download Falhou","failureMessage":"BetterDiscord não conseguiu baixar os emotes, por favor verifique sua conexão da internet e seu firewall."},"PublicServers":{"button":"público","join":"Entrar","joining":"Entrando","joined":"Entrou","loading":"Carregando","loadMore":"Carregar Mais","notConnected":"Não Conectado","connectionRequired":"Você precisa conectar na sua conta para entrar em servidores.","connectionError":"Erro de Conexão","connectionErrorMessage":"Algum erro ocorreu enquanto conectava no DiscordServers.com, é possível que o site/api deles esteja fora do ar. Tente novamente mais tarde.","pagination":"Página {{page}} de {{count}}","search":"Pesquisar","connect":"Conectar","reconnect":"Reconectar","categories":"Categorias","keywords":"Palavras Chave","connection":"Conectado como: {{username}}#{{discriminator}}","results":"Mostrando {{start}}-{{end}} de {{total}} resultados da categoria {{category}}","query":"por {{query}}"},"Modals":{"confirmAction":"Você Tem Certeza?","okay":"Okay","done":"Feito","cancel":"Cancelar","nevermind":"Deixe pra lá","close":"Fechar","name":"Nome","message":"Mensagem","error":"Erro","addonErrors":"Erros dos Addons","restartRequired":"Reinicialização Necessária","restartNow":"Reiniciar Agora","restartLater":"Reiniciar Mais Tarde","additionalInfo":"Informações Adicionais","restartPrompt":"Para as mudanças terem efeito o discord precisa ser reinciado. Você deseja reiniciar agora?"},"ReactDevTools":{"notFound":"Extensão Não Encontrada","notFoundDetails":"Não foi possível encontrar a exntesão do React Developer Tools no seu PC. Por favor instale a extensão na sua instalação do Chrome local."},"Sorting":{"sortBy":"Ordenar Por","order":"Ordem","ascending":"Ascendente","descending":"Descendente"},"Startup":{"notSupported":"Não Suportado","incompatibleApp":"BetterDiscord não funciona com {{app}}. Por favor desinstale um deles.","updateNow":"Atualizar Agora","maybeLater":"Talvez Mais Tarde","updateAvailable":"Atualização Disponível","updateInfo":"Tem uma atualização disponível para o injetor do BetterDiscord ({{version}}).\\n\\nVocê pode atualizar e reiniciar agora ou mais tarde se preferir.","updateFailed":"Não Foi Possível Atualizar","manualUpdate":"Não foi possível atualizar automaticamente, por favor baixe o instalador e reinstale normalmente.\\n\\n[Baixar Instalador](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery não carregou","jqueryFailedDetails":"jQuery não pôde ser carregado, e alguns plugins podem não funcionar corretamente. Prossiga por sua conta e risco."},"WindowPrefs":{"enabledInfo":"Essa opção necessita de um tema transparente para funcionar corretamente. No Windows isso pode quebrar o aero snapping e a maximização.\\n\\nO discord precisa ser reiniciado para as mudanças terem efeito. Você deseja reiniciar agora?","disabledInfo":"O discord precisa ser reiniciado para as mudanças terem efeito. Você deseja reiniciar agora?"}}');

/***/ }),

/***/ "../assets/locales/pt-pt.json":
/*!************************************!*\
  !*** ../assets/locales/pt-pt.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Definições","general":{"name":"Geral","emotes":{"name":"Sistema de Emotes","note":"Ativa o sistema de emotes do BD"},"publicServers":{"name":"Servidores Publicos","note":"Mostra o botão de servidores publicos"},"voiceDisconnect":{"name":"Disconectar Voz","note":"Disconectar do servidor de voz quando fechar o discord"},"showToasts":{"name":"Mostrar notificações","note":"Mostra uma pequena notificação para informações importantes"},"mediaKeys":{"name":"Desativar as chaves Mídia","note":"Previne o Discord de dar hijack as chaves Mídia depois de ver um video."}},"appearance":{"name":"Aparência","minimalMode":{"name":"Modo mínimo","note":"Esconde e reduz o tamanho dos elementos"},"twentyFourHour":{"name":"Marca de tempo 24 horas","note":"Converte a marca de tempo 12 horas para o formato 24 horas"},"coloredText":{"name":"Texto colorido","note":"Coloca o texto colorido da mesma cor do cargo"},"hideGIFButton":{"name":"Esconde o botão GIF","note":"Esconde o botão GIF picker na área de texto"},"hideGiftButton":{"name":"Esconde o botão de Presentes","note":"Esconde o botão de Presentes Nitro na área de texto"}},"window":{"removeMinimumSize":{"name":"Remove o tamanho mínimo","note":"Remove o tamanho mínimo obrigatório de janela do Discord de 940x500"},"name":"Preferência de Janela","transparency":{"name":"Ativar Transparência","note":"Ativa a janela principal para ter transparência (requer reniciar)"},"frame":{"name":"Moldura da janela","note":"Adiciona a moldura de janela nativa do sistema operativo à janela principal"}},"addons":{"name":"Gestor de extensões","addonErrors":{"name":"Mostra os erros das extensões","note":"Mostra uma janela com os erros dos plugins/temas"},"autoReload":{"name":"Carregar automáticamente","note":"Carrega, recarrega e descarrega automáticamente plugins e temas"},"editAction":{"name":"Editar ação","note":"Onde os plugins e os temas irão aparecer quando se edita","options":{"detached":"Separar janela","system":"Editor de sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Ativa a aba de CSS Personalizado"},"liveUpdate":{"name":"Atualizações diretas","note":"Atualiza o css a medida que se escreve"},"startDetached":{"name":"Começar desanexado","note":"Clicar na aba de CSS Personalizado abre o editor numa janela separada"},"nativeOpen":{"name":"Abrir o editor Nativo","note":"Clicar na aba de CSS Personalizado abre o css personalizado no seu editor nativo"},"openAction":{"name":"Editor de localização","note":"Onde o CSS personalizado abre por predifinição","options":{"settings":"Menu de definições","detached":"Separar Janela","system":"Editor de sistema"}}},"developer":{"name":"Definições de desenvolvedor","debuggerHotkey":{"name":"Debugger Hotkey","note":"Permite a ativação do debugger quando pressiona o F8"},"reactDevTools":{"name":"Ferramentas de Desenvolvedor React","note":"Injeta a instalação local da Ferramenta de Desenvolvedor React para o Discord"},"inspectElement":{"name":"Tecla de Inspecionar Elemento","note":"Ativa a tecla de inspecionar elemento (ctrl + shift + c) que é comum na maioria dos navegadores browser"},"devToolsWarning":{"name":"Pára o aviso de DevTools","note":"Pára o Discord de mostrar a mensagem \\"Hold up!\\""},"debugLogs":{"name":"Debug Logs","note":"Saída de tudo da consola para o ficheiro debug.log na pasta BetterDiscord"}}},"emotes":{"name":"Emotes","general":{"name":"Geral","download":{"name":"Transferir Emotes","note":"Transferir Emotes mesmo estando indisponiveis"},"emoteMenu":{"name":"Menu de Emotes","note":"Mostra os emotes Twitch/Favoritos no menu de emotes"},"hideEmojiMenu":{"name":"Esconde o Emoji Menu","note":"Esconde o menu de emojis do Discord quando se usa o menu de emotes"},"autoCaps":{"name":"Emote Autocapitalização","note":"Autocapitaliza o comando de emotes"},"modifiers":{"name":"Mostra as modificações de emotes","note":"Ativa a modificação de emotes (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar ao pairar","note":"Anima os modificadores de emote apenas ao passar o cursor"}},"categories":{"name":"Categorias","twitchglobal":{"name":"Twitch Globals","note":"Mostra os emotes da Twitch global"},"twitchsubscriber":{"name":"Subscrições Twitch","note":"Mostra os emotes de subscrição da Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostra os emotes da FFZ"},"bttv":{"name":"BetterTTV","note":"Mostra os emotes da"}}}},"Addons":{"title":"{{name}} v{{version}} feito por {{author}}","byline":"feito por {{author}}","openFolder":"Abrir a pasta {{type}}","reload":"Recarregar","addonSettings":"Definições","website":"Website","source":"Fonte","invite":"Servidor de Suporte","donate":"Doar","patreon":"Patreon","name":"Nome","author":"Autor","version":"Versão","added":"Data Adicionada","modified":"Data Modificada","search":"Procurar {{type}}","editAddon":"Editar","deleteAddon":"Apagar","confirmDelete":"Tem a certeza que quer apagar {{name}}?","confirmationText":"Tem alterações não guardadas no {{name}}. Se fechar esta janela irá perder essas alterações.","enabled":"{{name}} foi ativo.","disabled":"{{name}} foi desativado.","couldNotEnable":"{{name}} não foi possível ser ativado.","couldNotDisable":"{{name}} não pode ser desativado.","couldNotStart":"{{name}} não pode ser iniciado.","couldNotStop":"{{name}} não pode ser parádo.","settingsError":"Não foi possível abrir as configurações para {{name}}","methodError":"{{method}} não pode ser retirado.","unknownAuthor":"Autor Desconhecido","noDescription":"Descrição não fornecida.","alreadyExists":"Já existe um {{type}} com o nome {{name}}","alreadWatching":"Já assiste as extensões.","metaError":"META não pôde ser analisado.","missingNameData":"Em falta dados do nome de META.","metaNotFound":"META não encontrada.","compileError":"Não foi possível compilar.","wasUnloaded":"{{name}} foi descarregado.","blankSlateHeader":"Não tem nenhum {{type}}!","blankSlateMessage":"Pega um pouco deste [this website]({{link}}) e adiciona eles à tua pasta {{type}}."},"CustomCSS":{"confirmationText":"Tem alterações não guardadas no CSS Personalizado. Se fechar esta janela irá perder essas alterações.","update":"Atualizar","save":"Guardar","openNative":"Abrir o Editor de Sistema","openDetached":"Separar Janela","settings":"Definições de Editor","editorTitle":"Editor de CSS Personalizado"},"Emotes":{"loading":"Carregar emotes em segundo plano não carregam.","loaded":"Todos os emotes foram carregados com sucesso.","clearEmotes":"Limpar dados de Emotes","favoriteAction":"Favorito!","downloadFailed":"Transfêrencia falhou","failureMessage":"BetterDiscord falhou a transfêrencia de emotes, por favor verifique a sua conexão à Internet e à Firewall."},"PublicServers":{"button":"público","join":"Entrar","joining":"Entrando","joined":"Entrou","loading":"A Carregar","loadMore":"Carregar Mais","notConnected":"Não Conectado","connectionRequired":"Tem que estár conectado a sua conta para se entrar nos servidores.","connectionError":"Erro de conexão","connectionErrorMessage":"Houve um error ao tentar conectar com os DiscordServers.com, é possível que o website/api esteja em baixo. Por favor tente mais tarde.","pagination":"Página {{page}} de {{count}}","search":"Procurar","connect":"Conectar","reconnect":"Reconectar","categories":"Categorias","keywords":"Palavras-Chave","connection":"Conectado com: {{username}}#{{discriminator}}","results":"Mostrar {{start}}-{{end}} do {{total}} resultados na {{category}}","query":"para {{query}}"},"Modals":{"confirmAction":"Tem a certeza?","okay":"Okay","done":"Feito","cancel":"Cancelar","nevermind":"Deixa estár","close":"Fechar","name":"Nome","message":"Mensagem","error":"Erro","addonErrors":"Erro de extensão","restartRequired":"Necessário Reniciar","restartNow":"Reniciar Agora","restartLater":"Reniciar Mais Tarde","additionalInfo":"Informação Adicional","restartPrompt":"Para ter efeito, o Discord precisa ser reiniciado. Deseja reiniciar agora?"},"ReactDevTools":{"notFound":"Extensão não encontrada","notFoundDetails":"Não foi possivel achar a extensão Ferramenta Desenvolvedor React no seu computador. Por favor instale a extensão no seu Chrome local."},"Sorting":{"sortBy":"Ordenar por","order":"Ordenar","ascending":"Ascendente","descending":"Descendente"},"Startup":{"notSupported":"Não Suportado","incompatibleApp":"BetterDiscord não funciona com {{app}}. Por favor desinstale uma delas.","updateNow":"Atualizar Agora","maybeLater":"Talvez mais Tarde","updateAvailable":"Atualização Disponível","updateInfo":"Existe uma atualização disponível para o Injector BetterDiscord ({{version}}).\\n\\nPode atualizar e reiniciar agora ou mais tarde.","updateFailed":"Não foi possível atualizar","manualUpdate":"Não foi possível atualizar automáticamente, por favor transfira e reinstale normalmente.\\n\\n[Download Installer](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"Não foi possível carregar jQuery","jqueryFailedDetails":"Não foi possível carregar jQuery, e alguns plugins podem não funcionar normalmente. Prossiga por sua conta e risco."},"WindowPrefs":{"enabledInfo":"Esta opção requer um tema transparente para funcionar corretamente. No Windows, isso pode interromper o ajuste e a maximização do aero.\\n\\nPara ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?","disabledInfo":"Para ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?"}}');

/***/ }),

/***/ "../assets/locales/ro.json":
/*!*********************************!*\
  !*** ../assets/locales/ro.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"plugin-uri","themes":"temă","customcss":"CSS personalizat"},"Collections":{"settings":{"name":"setări","general":{"name":"general","emotes":{"name":"Sistemul de emote-uri","note":"Activează sistemul de emote-uri din cadrul BD"},"publicServers":{"name":"servere publice","note":"Afișează butonul de servere publice"},"voiceDisconnect":{"name":"Deconectare de la voce","note":"Deconectează-te de la un canal de voce când inchizi Discord-ul"},"showToasts":{"name":"Arată mesajele de sistem","note":"Afișează notificări pentru informațiile importante"},"mediaKeys":{"name":"Dezactivează tastele Media","note":"Previn-o Discord din a fura tastele media după redarea unui videoclip."}},"appearance":{"name":"Aspect","minimalMode":{"name":"Mod Minimal","note":"Ascunde elemente și redu"},"twentyFourHour":{"name":"Format de 24 de ore","note":"Convertește formatul de 12 ore in cel de 24 de ore"},"coloredText":{"name":"Text colorat","note":"Culoarea textului unui mesaj este aceeași cu culoarea rolului"},"hideGIFButton":{"name":"Ascunde butonul GIF","note":"Ascunde butonul pentru mediul de GIF-uri in zona text"},"hideGiftButton":{"name":"Ascunde butonul de cadouri","note":"Ascunde butonul de cadouri din zona de text"}},"window":{"removeMinimumSize":{"name":"Elimină mărimea minimă","note":"Elimina marimea minima de 940x500 a ferestrei"},"name":"Preferinte în privința mărimii ferestrei","transparency":{"name":"Activează Transparența","note":"Fă ca fereastra principală să fie transparentă (necesită repornire)"},"frame":{"name":"Cadrul ferestrei","note":"Adaugă cadrul sistemului de operare în fereastra principală"}},"addons":{"name":"Manager de adăugiri","addonErrors":{"name":"Arată erorile adăugirilor","note":"Afișează un modal cu erorile plugin-urilor/temelor"},"autoReload":{"name":"Incărcare automată","note":"Încarcă, reîncarcă si dezactivează plugin-urile si temele in mod automat"},"editAction":{"name":"Modifică acțiunea","note":"Unde apar plugin-urile si temele atunci când sunt editate","options":{"detached":"Fereastră detașabilă","system":"Editor de sistem"}}},"customcss":{"name":"CSS personalizat","customcss":{"name":"CSS personalizat","note":"Activează tab-ul de CSS personalizat"},"liveUpdate":{"name":"Actualizări live","note":"Actualizează CSS-ul in timp ce scrii"},"startDetached":{"name":"Pornește intr-o altă fereastră","note":"Click-ul pe tab-ul de CSS personalizat va deschide editor-ul intr-o fereastra separată"},"nativeOpen":{"name":"Deschide în editor-ul nativ","note":"Click-ul pe fereastra de CSS personalizat va deschide editorul nativ al calculatorului"},"openAction":{"name":"Locația editorului","note":"Unde ar trebui să se deschide CSS-ul personalizat","options":{"settings":"Meniu de setări","detached":"Fereastră detașabilă","system":"Editor de sistem"}}},"developer":{"name":"Setări de dezvoltator","debuggerHotkey":{"name":"Scurtătură pentru Debugger","note":"Activează deschiderea debugger-ului la apasarea tastei F8"},"reactDevTools":{"name":"React Developer Tools","note":"Instalează React Developer Tools in Discord"},"inspectElement":{"name":"Scurtătură pentru Inspect Element","note":"Activează scurtătura pentru Inspect Element (CTRL + SHIFT + C) ce se găsește in cele mai multe browsere"},"devToolsWarning":{"name":"Dezactivează avertismentele","note":"Opreste Discord-ul din a afișa mesajul \\"Stai puțin!\\""},"debugLogs":{"name":"Debug Logs","note":"Transferă tot din consolă in fișierul debug.log din folderul BetterDiscord"}}},"emotes":{"name":"Emoji-uri","general":{"name":"general","download":{"name":"Descarcă emoji-urile","note":"Descarcă emoji-urile oricănd nu mai sunt actualizate la zi"},"emoteMenu":{"name":"Meniu emoji","note":"Arată emote-urile Twitch/Favorite în meniu"},"hideEmojiMenu":{"name":"Ascunde meniul de emoji-uri","note":"Ascunde meniul de emoji-uri al Discord-ului atunci când folosiți meniul de emote-uri"},"autoCaps":{"name":"Scriere cu majusculă a emote-urilor","note":"Scrie in mod automat cu majusculă comenzile pentru emote-uri"},"modifiers":{"name":"Arată modificările emote-urilor","note":"Activează mod-urile pentru emote-uri (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animează la atingere","note":"Animează emote-urile doar când treci cu cursorul peste ele"}},"categories":{"name":"Categorii","twitchglobal":{"name":"Twitch Globals","note":"Arată emote-urile globale Twitch"},"twitchsubscriber":{"name":"Abonări Twitch","note":"Arată emote-urile"},"frankerfacez":{"name":"FrankerFaceZ","note":"Arată emote-urile de la FFZ"},"bttv":{"name":"BetterTTV","note":"Arată emote-urile de la BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} de {{author}}","byline":"de {{author}}","openFolder":"Deschide fișierul {{type}}","reload":"Reîmprospatează","addonSettings":"Setări","website":"Site Web","source":"Sursă","invite":"Susține Server-ul","donate":"Donează","patreon":"Patreon","name":"Nume","author":"Autor","version":"Versiune","added":"Data adăugării","modified":"Data modificării","search":"Caută {{type}}","editAddon":"Modifică","deleteAddon":"Șterge","confirmDelete":"Ești sigur că vrei să ștergi {{name}} ?","confirmationText":"Ai schimbări nesalvate la {{name}}. Închiderea acestei ferestre v-a duce la pierderea tuturor modificărilor.","enabled":"{{name}} a fost activat.","disabled":"{{name}} a fost dezactivat.","couldNotEnable":"{{name}} nu a putut fi activat.","couldNotDisable":"{{name}} nu a putut fi dezactivat.","couldNotStart":"{{name}} nu a putut porni.","couldNotStop":"{{name}} nu a putut fi oprit.","settingsError":"Nu s-au putut deschide setările pentru {{name}}","methodError":"{{method}} nu a putut fi executat.","unknownAuthor":"Autor necunoscut","noDescription":"Fără descriere.","alreadyExists":"Deja există un {{type}} cu numele {{name}}","alreadWatching":"Deja te uiti la addon-uri.","metaError":"META nu a putut fi analizat.","missingNameData":"META nu are un nume.","metaNotFound":"META nu a putut fi găsit.","compileError":"Nu s-a putut incărca.","wasUnloaded":"{{name}} a fost dezactivat.","blankSlateHeader":"Nu ai nici un {{type}}!","blankSlateMessage":"Descarcă câteva din [acest website]({{link}}) și adaugă-le in folder-ul tău {{type}}."},"CustomCSS":{"confirmationText":"Ai modificări nesalvate in CSS-ul personalizat. Închiderea acestei ferestre va duce la anularea schimbărilor.","update":"Actualizare","save":"Salvează","openNative":"Deschide în editorul de sistem","openDetached":"Detașează fereastra","settings":"Setările editor-ului","editorTitle":"Editor de CSS personalizat"},"Emotes":{"loading":"Emote-urile care se incarcă pe fundal nu se reîncarcă.","loaded":"Toate emote-urile s-au încărcat cu succes.","clearEmotes":"Curăță datele legate de emote-uri","favoriteAction":"Favorite!","downloadFailed":"Descărcarea a eșuat","failureMessage":"BetterDiscord nu a putut încărca emote-urile, te rugăm să verifici conexiunea la internet si firewall-ul."},"PublicServers":{"button":"public","join":"Alătură-te","joining":"În curs de alăturare","joined":"Alăturat","loading":"Se încarcă","loadMore":"Încarcă mai multe","notConnected":"Deconectat","connectionRequired":"Trebuie să vă conectați pentru a vă alătura la servere.","connectionError":"Eroare de conexiune","connectionErrorMessage":"A apărut o eroare în conectarea la DiscordServers.com, este posibil ca website-ul/API-ul să fie offline. Vă rugăm să încercațti mai târziu.","pagination":"Pagina {{page}} din {{count}}","search":"Caută","connect":"Conectează-te","reconnect":"Reconectează-te","categories":"Categorii","keywords":"Cuvinte cheie","connection":"Conectat ca: {{username}}#{{discriminator}}","results":"Arătând {{start}}-{{end}} din {{total}} rezultate in {{category}}","query":"pentru {{query}}"},"Modals":{"confirmAction":"Ești sigur ?","okay":"Okay","done":"Gata","cancel":"Anulează","nevermind":"Nu contează","close":"Închide","name":"Nume","message":"Mesaj","error":"Eroare","addonErrors":"Eroare a","restartRequired":"Repornirea este necesară","restartNow":"Repornește acum","restartLater":"Reîncarcă mai târziu","additionalInfo":"Informații adiționale","restartPrompt":"Pentru a fi aplicate, Discord trebuie să repornească. Dorești să il repornești acuma ?"},"ReactDevTools":{"notFound":"Extensia nu a putut fi găsită","notFoundDetails":"Nu s-au putut găsi extensia React Developer Tools in calculatorul tău. Te rugăm să instalezi extensia în cadrul Chrome."},"Sorting":{"sortBy":"Sortează După","order":"Ordonează","ascending":"Crescător","descending":"Descrescător"},"Startup":{"notSupported":"Nesuportat","incompatibleApp":"BetterDiscord nu poate funcționa in tandem cu {{app}}. Te rugăm să dezinstalezi una dintre ele.","updateNow":"Actualizează acum","maybeLater":"Poate mai târziu","updateAvailable":"Actualizare Disponibilă","updateInfo":"Există o versiune mai nouă a BetterDiscord ({{version}}).\\n\\nPoți să actualizezi acum BD, sau mai incolo.","updateFailed":"Nu s-a putut actualiza","manualUpdate":"Nu am putut realiza actualizarea automată, te rugăm să descarci installer-ul și să reinstalezi in mod normal.\\n\\n[Descarcă installer-ul](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery nu a putut fi incărcat","jqueryFailedDetails":"jQuery nu poate fi încărcat, iar câteva plugin-uri posibil să nu meargă cum trebuie. Continuă pe propria răspundere."},"WindowPrefs":{"enabledInfo":"Această opțiune necesită o temă transparentă pentru a funcționa normal. \\nPe Windows ar putea putea să strice maximizarea.\\nPentru ca aceste efecte să intre în vigoare, Discord trebuie să repornească. Dorești să il repornești acum ?","disabledInfo":"Pentru ca aceste setări să intre în efect, Discord trebuie să repornească. Dorești să îl repornești acum ?"}}');

/***/ }),

/***/ "../assets/locales/ru.json":
/*!*********************************!*\
  !*** ../assets/locales/ru.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Плагины","themes":"Темы","customcss":"Быстрый CSS"},"Collections":{"settings":{"name":"Настройки","general":{"name":"Основные","emotes":{"name":"","note":""},"publicServers":{"name":"Публичные сервера","note":"Отображает кнопку публичных серверов"},"voiceDisconnect":{"name":"Отключение голосового чата","note":"Отключает от голосового чата, когда Discord закрыт"},"showToasts":{"name":"Показывать уведомления","note":"Показывает небольшие уведомления с важной информацией"},"mediaKeys":{"name":"Отключить медиа-ключи","note":"Предотвращает перехват ваших медиа-ключей в Discord после воспроизведения видео."}},"appearance":{"name":"Внешний вид","minimalMode":{"name":"Компактный режим","note":"Скрыть и уменьшить размер некоторых элементов"},"twentyFourHour":{"name":"24 часовой формат","note":"Преобразует 12 часовой формат времени в 24"},"coloredText":{"name":"Цветной текст","note":"Сделает цвет текста такого же цвета как у роли"},"hideGIFButton":{"name":"Скрыть GIF кнопку","note":"Скрывает кнопку выбора GIF в области набора текста"},"hideGiftButton":{"name":"Скрыть кнопку подарка","note":"Скрывает кнопку подарка Нитро в области набора текста"}},"window":{"removeMinimumSize":{"name":"Удалить минимальные размеры","note":"Удаляет минимальный размер окна Discord\'а 940x500"},"name":"Настройки окна","transparency":{"name":"Включить прозрачность","note":"Делает основное окно прозрачным (нужна перезагрузка)"},"frame":{"name":"Шапка окна","note":"Добавляет встроенную шапку окна системы к основному окну"}},"addons":{"name":"Менеджер дополнений","addonErrors":{"name":"Скрыть ошибки расширений ","note":"Скрывает модальные окна с ошибками плагина/темы"},"autoReload":{"name":"Автоматическая загрузка","note":"Автоматически загружать, перезагружать и выгружать плагины и темы"},"editAction":{"name":"Действие редактирования","note":"Появляются при редактировании, где плагины или темы","options":{"detached":"Отдельное окно","system":"Системный редактор"}}},"customcss":{"name":"Быстрый CSS","customcss":{"name":"Быстрый CSS","note":"Включить кнопку быстрого CSS"},"liveUpdate":{"name":"Обновление в прямом эфире","note":"Обновляет ваш CSS, когда вы пишите"},"startDetached":{"name":"","note":"При нажатии на вкладку Быстрый CSS редактор открывается в отдельном окне"},"nativeOpen":{"name":"Открыть во встроенном редакторе","note":"Нажатие по вкладке Быстрый CSS открывает ваш быстрый CSS в вашем встроенном редакторе"},"openAction":{"name":"Положение редактора","note":"Где ваш быстрый CSS должен быть открыт по умолчанию","options":{"settings":"","detached":"Отдельное окно","system":"Системный редактор"}}},"developer":{"name":"Настройки разработчика","debuggerHotkey":{"name":"Горячая кнопка отладчика","note":"Активирует отладку при нажатии F8"},"reactDevTools":{"name":"Инструменты React разработчика","note":"Внедряет вашу локальную установку React Developer Tools в Discord"},"inspectElement":{"name":"Горячая кнопка инспектора элементов","note":"Включает поведение комбинации клавиш инспектора элементов (ctrl + shift + c), как в большинстве браузеров"},"devToolsWarning":{"name":"","note":"Останавливает отправку сообщения \\"Hold Up!\\""},"debugLogs":{"name":"Логировать ошибки","note":"Записывает весь вывод из консоли в файл debug.log в папке BetterDiscord"}}},"emotes":{"name":"","general":{"name":"Основные","download":{"name":"","note":""},"emoteMenu":{"name":"","note":""},"hideEmojiMenu":{"name":"","note":""},"autoCaps":{"name":"","note":""},"modifiers":{"name":"","note":""},"animateOnHover":{"name":"Анимировать при наведении","note":""}},"categories":{"name":"","twitchglobal":{"name":"","note":""},"twitchsubscriber":{"name":"","note":""},"frankerfacez":{"name":"","note":""},"bttv":{"name":"","note":""}}}},"Addons":{"title":"{{name}} v{{version}} от {{author}}","byline":"от {{author}}","openFolder":"Открыть папку {{type}}","reload":"Перезагрузить","addonSettings":"Настройки","website":"Сайт","source":"Источник","invite":"Сервер поддержки","donate":"Донат","patreon":"Patreon","name":"Имя","author":"Автор","version":"Версия","added":"Дата добавления","modified":"Дата изменения","search":"Искать {{type}}","editAddon":"Редактировать","deleteAddon":"Удалить","confirmDelete":"Вы уверены, что хотите удалить {{name}}?","confirmationText":"У вас есть несохраненные изменения в {{name}}. При закрытии этого окна все изменения будут потеряны.","enabled":"{{name}} включён.","disabled":"{{name}} выключен.","couldNotEnable":"{{name}} не может быть включён.","couldNotDisable":"{{name}} не может быть отключён.","couldNotStart":"{{name}} не может быть запущен.","couldNotStop":"{{name}} не может быть остановлен.","settingsError":"Не удалось открыть настройки для {{name}}","methodError":"{{method}} не может быть уволен.","unknownAuthor":"Неизвестный автор","noDescription":"Нету описания.","alreadyExists":"{{type}} уже существует с именем {{name}}","alreadWatching":"Уже слежу за дополнениями.","metaError":"Не удалось проанализировать метаданные.","missingNameData":"В метаданных отсутствуют данные об имени.","metaNotFound":"Метаданные не найдены.","compileError":"Не удалось скомпилировать.","wasUnloaded":"{{name}} был выгружен.","blankSlateHeader":"У вас нету {{type}}","blankSlateMessage":"Возьмите что-то с [этого сайта]({{link}}) и добавьте их в свою папку {{type}}."},"CustomCSS":{"confirmationText":"У вас есть не сохраненные изменения в быстром CSS.  При закрытии этого окна все изменения будут потеряны.","update":"Обновить","save":"Сохранить","openNative":"Открыть в системном редакторе","openDetached":"Отдельное окно","settings":"Настройки редактора","editorTitle":"Редактор быстрого CSS"},"Emotes":{"loading":"","loaded":"","clearEmotes":"","favoriteAction":"Избранное!","downloadFailed":"","failureMessage":""},"PublicServers":{"button":"public","join":"Присоединился","joining":"Присоединение","joined":"Присоединился","loading":"Загрузка","loadMore":"Загрузить больше","notConnected":"Не подключен","connectionRequired":"Вы должны подключить свою учетную запись, чтобы присоединиться к серверам.","connectionError":"Ошибка соединения","connectionErrorMessage":"Произошла ошибка при подключении к DiscordServers.com, возможно, их сайт/api не упали.  Пожалуйста, повторите попытку позже.","pagination":"Страница {{page}} и {{count}}","search":"Поиск","connect":"Подключить","reconnect":"Переподключиться","categories":"Категории","keywords":"Ключевые слова","connection":"Подключён как: {{username}}#{{discriminator}}","results":"Показано {{start}}-{{end}} из {{total}} результатов в {{category}}","query":"для {{query}}"},"Modals":{"confirmAction":"Ты уверен?","okay":"Ок","done":"Готово","cancel":"Отмена","nevermind":"Забей","close":"Закрыть","name":"Имя","message":"Сообщение","error":"Ошибка","addonErrors":"Ошибки расширений","restartRequired":"Требуется перезагрузка","restartNow":"Перезагрузить сейчас","restartLater":"Перезагрузить позже","additionalInfo":"Дополнительная информация","restartPrompt":"Чтобы изменения вступили в силу, необходимо перезапустить Discord.  Вы хотите перезапустить сейчас?"},"ReactDevTools":{"notFound":"Расширение не найдено","notFoundDetails":"Не удалось найти расширение React Developer Tools на вашем ПК. Пожалуйста, установите расширение в локальную установку Chrome."},"Sorting":{"sortBy":"Сортировать по","order":"Порядок","ascending":"По возрастанию","descending":"По убыванию"},"Startup":{"notSupported":"Не поддерживается","incompatibleApp":"BetterDiscord не работает с {{app}}. Удалите один из них.","updateNow":"Обновить сейчас","maybeLater":"Может быть позже","updateAvailable":"Обновление доступно","updateInfo":"Доступно обновление для инжектора BetterDiscord ({{version}}).\\n\\nВы можете обновить и перезапустить сейчас или позже.","updateFailed":"Не удалось обновить","manualUpdate":"Не удается обновить автоматически, загрузите установщик и переустановите его в обычном режиме.\\n\\n[Загрузить установщик](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"Не удалось загрузить jQuery","jqueryFailedDetails":"Не удалось загрузить jQuery, некоторые плагины могут работать некорректно. Действуйте на свой страх и риск."},"WindowPrefs":{"enabledInfo":"Для правильной работы этой опции требуется прозрачная тема.  В Windows это может нарушить вашу aero snapping и максимизацию.\\n\\n\\n\\nЧтобы изменения вступили в силу, необходимо перезапустить Discord.  Вы хотите перезапустить сейчас?","disabledInfo":"Чтобы изменения вступили в силу, необходимо перезапустить Discord.  Вы хотите перезапустить сейчас?"}}');

/***/ }),

/***/ "../assets/locales/sk.json":
/*!*********************************!*\
  !*** ../assets/locales/sk.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Pluginy","themes":"Témy","customcss":"Custom CSS"},"Collections":{"settings":{"name":"Nastavenia","general":{"name":"Základné","emotes":{"name":"Emote Systém","note":"Povoliť BD emote systém"},"publicServers":{"name":"Verejné servery","note":"Zobraziť tlačidlo verejných serverov"},"voiceDisconnect":{"name":"Odpojenie hovoru","note":"Odpojiť z hovoru pri vypnutí Discordu"},"showToasts":{"name":"Zobraziť toasty","note":"Zobraziť notifikáciu pre dôležité info"},"mediaKeys":{"name":"Zakázať Média tlačidlá","note":"Zabráni Discordu prevziať kontrolu nad média tlačidlami po prehratí videa."}},"appearance":{"name":"Vzhľad","minimalMode":{"name":"Minimálny režim","note":"Skryť elementy a zmenšiť veľkosť elementov"},"twentyFourHour":{"name":"24-Hodinové časové značky","note":"Konvertuje 12-hod. časové značky na 24-hod. formát"},"coloredText":{"name":"Farebný text","note":"Zafarbí text každej správy podľa farby role"},"hideGIFButton":{"name":"Skryť GIF Tlačidlo","note":"Skryje tlačidlo na výber GIF-u v textovom poli"},"hideGiftButton":{"name":"Skryť tlačidlo \\"Darovať\\"","note":"Skryje tlačidlo na darovanie Nitra"}},"window":{"removeMinimumSize":{"name":"Zrušiť minimálnu velkosť","note":"Zruší minimálnu veľkosť Discord okna 940x500"},"name":"Vlastnosti Okna","transparency":{"name":"Povoliť priehľadnosť","note":"Povolí, aby bolo hlavné okno priehľadné (potrebný reštart)"},"frame":{"name":"Rám okna","note":"Pridá klasický OS rám pre hlavné okno"}},"addons":{"name":"Manažér doplnkov","addonErrors":{"name":"Zobraziť chyby doplnkov","note":"Zobrazí panel s chybou pluginu alebo témy"},"autoReload":{"name":"Automatické načítanie","note":"Automaticky načítava a obnovuje pluginy a témy"},"editAction":{"name":"Úprava akcie","note":"Kde sa pluginy a témy zobrazia pri editovaní","options":{"detached":"Oddelené okno","system":"Systémový editor"}}},"customcss":{"name":"Custom CSS","customcss":{"name":"Custom CSS","note":"Aktivuje kartu \\"Custom CSS\\""},"liveUpdate":{"name":"Živý update","note":"Aktualizuje css pri zmene"},"startDetached":{"name":"Spustiť oddelené","note":"Kliknutie na kartu Custom CSS ju otvori v oddelenom okne"},"nativeOpen":{"name":"Otvoriť v natívnom editore","note":"Kliknutie na kartu Custom CSS ju otvori v natívnom editore"},"openAction":{"name":"Cesta editora","note":"Predvolený spôsob otvorenia Custom CSS","options":{"settings":"Menu nastavení","detached":"Oddelené okno","system":"Systémový editor"}}},"developer":{"name":"Vývojarske nastavenia","debuggerHotkey":{"name":"Klávesová skratka Debuggera","note":"Povolí spustenie debuggera pri stlačení F8"},"reactDevTools":{"name":"React Developer Tools","note":"Pridá inštaláciu React Developer Tools do Discordu"},"inspectElement":{"name":"Klávesová skratka Inspect Element","note":"Povolí klávesovú skratku Inspect Element (ctrl + shift + c) ako pre bežné prehliadače"},"devToolsWarning":{"name":"Vypnúť DevTools Upozornenia","note":"Vypne \\"Hold Up!\\" upozornenie od Discordu v konzole"},"debugLogs":{"name":"Výpis ladenia","note":"Zapíše všetko z konzole do súboru debug.log v BetterDiscord zložke"}}},"emotes":{"name":"Emoty","general":{"name":"Všeobecné","download":{"name":"Stiahnuť Emoty","note":"Stiahnuť Emoty ak sú zastaralé"},"emoteMenu":{"name":"Emote Menu","note":"Zobraziť Twtich/Obľúbené emoty v emote menu"},"hideEmojiMenu":{"name":"Skryť Emoji Menu","note":"Skryje Discord Emoji menu pri používaní emote menu"},"autoCaps":{"name":"Automatická kapitalizácia Emote","note":"Automaticky kapitalizuje emote commandy"},"modifiers":{"name":"Zobraziť Emote Modifikátory","note":"Povoliť emote modifikátory (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animovať pri umiestnení kurzora","note":"Animovať emote modifikátory iba pri umiestnení kurzora"}},"categories":{"name":"Kategórie","twitchglobal":{"name":"Twtich globálne","note":"Zobraziť globálne Twitch emoty"},"twitchsubscriber":{"name":"Twitch predplatitelia","note":"Zobraziť predplatiteľské Twitch emoty"},"frankerfacez":{"name":"FrankerFaceZ","note":"Zobraziť FFZ emoty"},"bttv":{"name":"BetterTTV","note":"Zobraziť BTTV emoty"}}}},"Addons":{"title":"{{name}} v{{version}} od {{author}}","byline":"od {{author}}","openFolder":"Otvoriť {{type}} Zložku","reload":"Znova načítať","addonSettings":"Nastavenia","website":"Stránka","source":"Zdroj","invite":"Server podpory","donate":"Prispieť","patreon":"Patreon","name":"Meno","author":"Autor","version":"Verzia","added":"Dátum pridania","modified":"Dátum zmeny","search":"Hľadať {{type}}","editAddon":"Upraviť","deleteAddon":"Zmazať","confirmDelete":"Ste si istý, že chcete zmazať {{name}}?","confirmationText":"Máte neuložené zmeny pre {{name}}. Zatvorením tohto okna stratíte všetky zmeny.","enabled":"{{name}} bol aktivovaný.","disabled":"{{name}} bol deaktivovaný.","couldNotEnable":"{{name}} nebolo možné aktivovať.","couldNotDisable":"{{name}} nebolo možné deaktivovať.","couldNotStart":"{{name}} nebolo možné spustiť.","couldNotStop":"{{name}} nebolo možné zastaviť.","settingsError":"Nie je možné otvoriť nastavenia pre {{name}}","methodError":"{{method}} nemohla byť vykonaná.","unknownAuthor":"Neznámy Autor","noDescription":"Bez popisu.","alreadyExists":"{{type}} s menom {{name}} už existuje","alreadWatching":"Doplnky sa už sledujú.","metaError":"META sa nepodarila načítať.","missingNameData":"META chýbajúce dáta názvu.","metaNotFound":"META nebola nájedná.","compileError":"Nepodarilo sa zostaviť.","wasUnloaded":"{{name}} bol odpojený.","blankSlateHeader":"Nenachádza sa žiadny/žiadna {{type}}!","blankSlateMessage":"Nájdi nejaké na [tejto stránke]({{link}}) a pridaj ich do zložky pre {{type}}."},"CustomCSS":{"confirmationText":"Máte neuložené zmeny pre Custom CSS. Zatvorením tohto okna stratíte všetky zmeny.","update":"Aktualizovať","save":"Uložiť","openNative":"Otvoriť v Systémovom Editore","openDetached":"Oddeliť Okno","settings":"Nastavenia Editora","editorTitle":"Custom CSS Editor"},"Emotes":{"loading":"Načítavanie emotov v pozadí, nerefreshujte.","loaded":"Všetky emoty úspešne načítané.","clearEmotes":"Vyčistiť emote dáta","favoriteAction":"Uložiť!","downloadFailed":"Sťahovanie Zlyhalo","failureMessage":"BetterDiscord nedokázal načítať emoty, prosím skontrolujte internetové pripojenie a firewall."},"PublicServers":{"button":"verejné","join":"Pridať","joining":"Pridávanie","joined":"Pridaný","loading":"Načítavanie","loadMore":"Načítať Viac","notConnected":"Nepripojený","connectionRequired":"Musíte pripojiť svoj účet pre pripojenie sa na servery.","connectionError":"Chyba spojenia","connectionErrorMessage":"Pri pripájaní k serveru DiscordServers.com sa vyskytla chyba. Je možné, že ich webové stránky / rozhranie API nefunguje. Skúste neskôr prosím.","pagination":"Stránka {{page}} z {{count}}","search":"Hľadať","connect":"Pripojiť","reconnect":"Znova pripojiť","categories":"Kategórie","keywords":"Kľúčové slová","connection":"Pripojený ako: {{username}}#{{discriminator}}","results":"Zobrazených {{start}}-{{end}} z {{total}} výsledkov v {{category}}","query":"pre {{query}}"},"Modals":{"confirmAction":"Ste si istý?","okay":"Ok","done":"Dokončiť","cancel":"Zrušiť","nevermind":"Radšej nie","close":"Zavrieť","name":"Meno","message":"Správa","error":"Chyba","addonErrors":"Chyby Doplnkov","restartRequired":"Potrebný Reštart","restartNow":"Reštartovať Teraz","restartLater":"Reštartovať Neskôr","additionalInfo":"Ďalšie Info","restartPrompt":"Pre aplikáciu zmien je potrebné reštartovať Discord. Chcete reštartovať teraz?"},"ReactDevTools":{"notFound":"Rozšírenie sa nenašlo","notFoundDetails":"Nebolo možné nájsť rozšírenie React Developer Tools na vašom PC. Prosím nainštalujte rozšírenie vo vašom prehliadači Chrome."},"Sorting":{"sortBy":"Triediť podľa","order":"Poradie","ascending":"Vzostupne","descending":"Zostupne"},"Startup":{"notSupported":"Nie je podporované","incompatibleApp":"BetterDiscord nefunguje s {{app}}. Prosím odinštalujte jednu z nich.","updateNow":"Aktualizovať teraz","maybeLater":"Možno neskôr","updateAvailable":"Aktualizácia dostupná","updateInfo":"K dispozícii je aktualizácia injektora pre BetterDiscord ({{version}}).\\n\\nMôžete ju aktualizovať a reštartovať teraz alebo neskôr.","updateFailed":"Nebolo možné aktualizovať","manualUpdate":"Nie je možné automaticky aktualizovať. Stiahnite si inštalátor a pre-inštalujte BetterDiscord normálne.\\n\\n[Stiahnuť Inštalátor](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"Nepodarilo sa načítať jQuery","jqueryFailedDetails":"Nepodarilo sa načítať jQuery a niektoré doplnky nemusia fungovať správne. Postupujte na svoje vlastné riziko."},"WindowPrefs":{"enabledInfo":"Táto možnosť si vyžaduje priehľadnú tému, aby správne fungovala. V systéme Windows to môže spôsobiť prerušenie a maximalizáciu vášho aero.\\n\\nNa to, aby sa prejavila účinnosť, je potrebné reštartovať Discord. Chcete reštartovať teraz?","disabledInfo":"Pre aplikáciu zmien je potrebné reštartovať Discord. Chcete reštartovať teraz?"}}');

/***/ }),

/***/ "../assets/locales/sv-se.json":
/*!************************************!*\
  !*** ../assets/locales/sv-se.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Tillägg","themes":"Teman","customcss":"Egen CSS"},"Collections":{"settings":{"name":"Inställningar","general":{"name":"Generellt","emotes":{"name":"Emotessystem","note":"Aktiverar BD\'s emotessystem"},"publicServers":{"name":"Publika Servrar","note":"Visa knappen för publika servrar"},"voiceDisconnect":{"name":"Lämna Röst","note":"Lämna röstsamtal när Discord stängs ner"},"showToasts":{"name":"Visa Toasts","note":"Visar en liten notification för viktig information"}},"appearance":{"name":"Utseende","twentyFourHour":{"name":"24-Timmars Tidsstämpel","note":"Visar 24-timmars tidsstämplar istället för AM/PM"},"minimalMode":{"name":"Minimalt Läge","note":"Gömmer och förminskar komponenter"},"coloredText":{"name":"Färgad Text","note":"Gör att text får samma färg som rollfärgen"}},"addons":{"name":"Tilläggshanterare","addonErrors":{"name":"Visa tilläggsfel","note":"Visar en modal med tillägg- och temafel"},"autoScroll":{"name":"Skrolla till inställningar Scroll To Settings","note":"Skrollar automatisks till ett tilläggs inställningar när knappen är tryckt (endast om inställningarna är utanför vy)"},"autoReload":{"name":"Automatisk Laddning","note":"Laddar automatisk in, om och ur tillägg och teman"}},"customcss":{"name":"Egen CSS","customcss":{"name":"Egen CSS","note":"Aktiverar \\"Egen CSS\\"-fliken"},"liveUpdate":{"name":"Uppdatera Direkt","note":"Uppdaterar css allteftersom du skriver"},"startDetached":{"name":"Starta Frånkopplad","note":"Öppnar CSS redigeraren i ett separat fönster när \\"Egen CSS\\"-fliken klickas"},"nativeOpen":{"name":"Öppna I Standardredigerare","note":"Öppnar CSS filen i operativsystemets standardredigerare när \\"Egen CSS\\"-fliken klickas"}},"developer":{"name":"Utvecklarinställningar","developerMode":{"name":"Utvecklarläge","note":"Gör det möjligt att aktivera avlusare med F8"},"copySelector":{"name":"Kopiera Selektor","note":"Lägger till valet \\"Kopiera Selektor\\" i kontext menyn när utvecklarläge är aktiverat"}},"window":{"name":"Fönsterinställningar","transparency":{"name":"Aktivera Genomskinlighet","note":"Gör att huvudfönstret blir genomskinligt (kräver omstart)"},"frame":{"name":"Fönsterram","note":"Lägger till operativsystemets standard fönsterram runt huvudfönstret"}}},"emotes":{"name":"Emotes","general":{"name":"Generellt","download":{"name":"Ladda Ner Emotes","note":"Ladda ner emotes en gång i veckan för att hålla sig uppdaterad"},"emoteMenu":{"name":"Emote Meny","note":"Visa Twitch/Favorit emotes i emote meny"},"hideEmojiMenu":{"name":"Gömmer Emoji Meny","note":"Gömmer Discord\'s emoji meny när emote meny är aktiverad"},"autoCaps":{"name":"Automatiskt Stor Bokstav I Emotes","note":"Gör automatiskt stor bokstav i emote kommandon"},"modifiers":{"name":"Visa Emote Modifierare","note":"Aktivera emote modifierare (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animera När Musen Hålls Över","note":"Animera endast emote midiferare när musen hålls över emoten"}},"categories":{"name":"Kategorier","twitch":{"name":"Twitch","note":"Visa Twitch global & prenumerant emotes"},"ffz":{"name":"FrankerFaceZ","note":"Visa emotes från FFZ"},"bttv":{"name":"BetterTTV","note":"Visa emotes från BTTV"}}}},"Emotes":{"downloading":"Laddar ner emotes i backgrunden, ladda inte om","downloaded":"Alla emotes laddades ner utan problem.","clearEmotes":"Rensa Emote Data","favoriteAction":"Favorit!"},"CustomCSS":{"confirmationText":"Du har osparade ändringar av egna CSS:en. Alla ändringar kommer försvinna om du stänger det här fönstret","update":"Uppdatera","save":"Spara","openNative":"Öppna I Standardredigerare","openDetached":"Koppla Loss Fönster","settings":"Inställningar för redigerare","editorTitle":"Egen CSS Redigerare"},"PublicServers":{"button":"Publik","join":"Gå med","joining":"Går med","joined":"Gick med","loading":"Laddar","loadMore":"ladda mer","notConnected":"Ingen anslutning till DiscordServers.com!","search":"Sök","connect":"Anslut","reconnect":"Återanslut","categories":"Kategorier","connection":"Ansluten som: {{username}}#{{discriminator}}","results":"Visar {{start}}-{{end}} av {{total}} resultat i {{category}}","query":"för {{query}}"},"Modals":{"confirmClose":"Är du säker?","okay":"Okej","cancel":"Avbryt","name":"Namn","message":"Meddelande","error":"Fel","addonErrors":"Tilläggsfel"}}');

/***/ }),

/***/ "../assets/locales/th.json":
/*!*********************************!*\
  !*** ../assets/locales/th.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/tr.json":
/*!*********************************!*\
  !*** ../assets/locales/tr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Eklentiler","themes":"Temalar","customcss":"Özel CSS"},"Collections":{"settings":{"name":"Ayarlar","general":{"name":"Genel","emotes":{"name":"Emoji Sistemi","note":"BD\'nin emoji sistemini etkileştirir"},"publicServers":{"name":"Herkese-açık Sunucular","note":"Herkese-açık Sunucu düğmesini göster"},"voiceDisconnect":{"name":"Ses Kanalından Ayrılma","note":"Discord\'u kapatırken aktif ses kanalından ayrılır"},"showToasts":{"name":"Bildirimleri Göster","note":"Önemli bilgilendirmeler için küçük bir bidirim gösterir"},"mediaKeys":{"name":"Medya Tuşlarını Deaktive Et","note":"Bir video oynattıktan sonra Discord\'un Multimedya tuşlarını ele geçirmesini engeller."}},"appearance":{"name":"Görünüm","minimalMode":{"name":"Minimal Görünüm","note":"Elementleri gizler ve boyutlarını düşürür"},"twentyFourHour":{"name":"24-Saat Zaman Formatı","note":"12-Saat formatlamasını 24-Saat ile değiştirir"},"coloredText":{"name":"Renkli Yazı","note":"Yazı rengini rol rengiyle aynı yap"},"hideGIFButton":{"name":"GIF tuşunu gizle","note":"Yazı kutusundaki GIF tuşunu gizler"},"hideGiftButton":{"name":"Hediye tuşunu gizle","note":"Yazı kutusundaki Nitro Hediye tuşunu gizler"}},"window":{"removeMinimumSize":{"name":"Minimum boyutu kaldır","note":"Discord\'un 940x500 boyut limitini kaldırır"},"name":"Pencere Tercihleri","transparency":{"name":"Şeffaflığı Etkinleştir","note":"Ana pencerenin şeffaf olmasına el verir (yeniden başlatma gerekli)"},"frame":{"name":"Pencere Çerçevesi","note":"Yerel işletim sistemi penceresini ana pencereye ekler"}},"addons":{"name":"Eklenti Yöneticisi","addonErrors":{"name":"Eklenti Hatalarını Göster","note":"Eklenti/tema hatalarında yazı baloncuğu gösterir"},"autoReload":{"name":"Otomatik Yükleme","note":"Temaları ve eklentileri otomatik olarak başlatır, yeniden-başlatır ve kapatır"},"editAction":{"name":"Eylemi düzenle","note":"Eklenti ve temaları düzenlerken çıkacakları yer","options":{"detached":"Bağımsız Pencere","system":"Sistem Düzenleyici"}}},"customcss":{"name":"Özel CSS","customcss":{"name":"Özel CSS","note":"Özel CSS sekmesini aktifleştirir"},"liveUpdate":{"name":"Canlı Güncelleme","note":"Yazdıkca CSS\'i günceller"},"startDetached":{"name":"Bağımsız Başlat","note":"Özel CSS sekme tuşuna basınca bağımsız sekmede açar"},"nativeOpen":{"name":"Seçili editör\'de aç","note":"Özel CSS sekme tuşuna basınca seçili yazı editörünüzde açar"},"openAction":{"name":"Editör Yeri","note":"Özel CSS\'in varsayılan açılma yeri","options":{"settings":"Ayarlar Menüsü","detached":"Bağımsız Pencere","system":"Sistem Editörü"}}},"developer":{"name":"Geliştirici (Developer) Ayarları","debuggerHotkey":{"name":"Hata ayıklayıcı kısayolu","note":"F8\'e basınca hata ayıklayıcının açılmasını sağlar"},"reactDevTools":{"name":"React Geliştirici Araçları","note":"Yerli React Geliştirici araçlarınızı Discord\'a ekler"},"inspectElement":{"name":"Öğeyi Denetle Kısayolu","note":"Çoğu tarayıca yaygın olan (ctrl + shift + c) Öğeyi Denetle kısayolunu etkinleştirir"},"devToolsWarning":{"name":"DevTools uyarısını kapat","note":"Discord\'un \\"Bekle!\\" mesajını yazmasını engeller"},"debugLogs":{"name":"Hata Ayıklama çıktıları","note":"Konsoldaki herşeyi BetterDiscord klasöründeki debug.log dosyasına kaydeder"}}},"emotes":{"name":"Emojiler","general":{"name":"Genel","download":{"name":"Emoji Indir","note":"Eski olduklarında emojileri indir"},"emoteMenu":{"name":"Emoji Menüsü","note":"Twitch/Favori emojileri emoji menüsünde göster"},"hideEmojiMenu":{"name":"Emoji Menüsünü Gizle","note":"Emoji Menüsünü kullanırken Discord\'ün emoji menüsünü gizler"},"autoCaps":{"name":"Emoji Kapitalizasyonu","note":"Otomatik olarak emoji komutlarını kapitalize et"},"modifiers":{"name":"Emoji Değiştiricilerini Göster","note":"Emoji modlarını etkinleştir  (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Üzerindeyken Oynat","note":"Sadece fare emoji üzerindeyken oynat"}},"categories":{"name":"Kategoriler","twitchglobal":{"name":"Twitch Globaller","note":"Twitch Global emojilerini göster"},"twitchsubscriber":{"name":"Twitch Aboneleri","note":"Twitch Abone emojilerini göster"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ emojilerini göster"},"bttv":{"name":"BetterTTV","note":"BTTV emojilerini göster"}}}},"Addons":{"title":"{{author}} tarafından {{name}} v{{version}}","byline":"{{author}} tarafından","openFolder":"{{type}} Dosyasını Aç","reload":"Yeniden-Başlat","addonSettings":"Ayarlar","website":"Website","source":"Kaynak","invite":"Destek Sunucusu","donate":"Bağış","patreon":"Patreon","name":"İsim","author":"Yapımcı","version":"Versiyon","added":"Eklenim Tarihi","modified":"Düzenlenme Tarihi","search":"{{type}} ara","editAddon":"Düzenle","deleteAddon":"Sil","confirmDelete":"{{name}} eklentisini silmek istediğinize emin misiniz?","confirmationText":"{{name}} eklentisinde kaydedilmemiş değişiklikler var. Bu pencereyi kapatmak değişikliklerin kaybolmasına yol açar.","enabled":"{{name}} başlatıldı.","disabled":"{{name}} kapatıldı.","couldNotEnable":"{{name}} başlatılamadı.","couldNotDisable":"{{name}} kapatılamadı.","couldNotStart":"{{name}} başlatılamadı.","couldNotStop":"{{name}} durdurulamadı.","settingsError":"{{name}} için ayarlar açılamadı.","methodError":"{{method}} çalıştırılamadı.","unknownAuthor":"Bilinmeyen Yapımcı","noDescription":"Açıklama Yok.","alreadyExists":"{{name}} isimli bir {{type}} zaten var","alreadWatching":"Eklentiler zaten izleniyor.","metaError":"META ayrıştırılamadı.","missingNameData":"META isim verisi yok.","metaNotFound":"META bulunamadı.","compileError":"Derlenemedi.","wasUnloaded":"{{name}} çıkarıldı.","blankSlateHeader":"Hiç {{type}}(a/e)arın yok!","blankSlateMessage":"[Bu siteden]({{link}}) al ve {{type}} klasörüne ekle."},"CustomCSS":{"confirmationText":"Özel CSS\'inde kaydedilmemiş değişimler var. Bu pencereyi kapatmak değişikliklerin kaybolmasına yol açar.","update":"Güncelle","save":"Kaydet","openNative":"Sistem Editöründe aç","openDetached":"Pencereyi Ayır","settings":"Editör Ayarları","editorTitle":"Özel CSS Editörü"},"Emotes":{"loading":"Arkaplanda emojiler yükleniyor yeniden başlatmayınız.","loaded":"Bütün emojiler yüklendi.","clearEmotes":"Emoji Verilerini Sil","favoriteAction":"Favori ekle!","downloadFailed":"Yükleme başarısız oldu","failureMessage":"BetterDiscord emojileri yüklemede başarısız oldu, lütfen internet bağlantınızı kontrol ediniz."},"PublicServers":{"button":"Herkese Açık","join":"Katıl","joining":"Katılınıyor","joined":"Katılındı","loading":"Yükleniyor","loadMore":"Daha Fazla Yükle","notConnected":"Bağlı Değil","connectionRequired":"Sunuculara katılmak için hesabını bağlamalısın.","connectionError":"Bağlantı Hatası.","connectionErrorMessage":"DiscordServers.com\'a bağlanırken hata oldu, websitelerini kapalı olması mümkün. Lütfen daha sonra tekrar deneyiniz.","pagination":"{{count}} içerisinden {{page}}. sayfa","search":"Ara","connect":"Bağlan","reconnect":"Geri Bağlan","categories":"Kategoriler","keywords":"Anahtar Kelimeler","connection":"{{username}}#{{discriminator}} olarak bağlanıldı","results":"{{category}} kategorisinde {{total}} üzerinden {{start}}-{{end}} gösteriliyor","query":"{{query}} için"},"Modals":{"confirmAction":"Emin Misin?","okay":"Tamam","done":"Bitti","cancel":"İptal","nevermind":"Boşver","close":"Kapat","name":"İsim","message":"Mesaj","error":"Hata","addonErrors":"Eklenti Hataları","restartRequired":"Yeniden Başlatma Lazım","restartNow":"Şimdi Yeniden Başlat","restartLater":"Sonra Yeniden Başlat","additionalInfo":"Ek Bilgi","restartPrompt":"Etki görmek için Discord\'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?"},"ReactDevTools":{"notFound":"Eklenti Bulunamadı","notFoundDetails":"React Geliştirici Araçları bilgisayarınızda bulunamadı.\\nLütfen eklentiyi Chrome tarayıcınıza indiriniz."},"Sorting":{"sortBy":"Göre Sırala","order":"Sıra","ascending":"Yükselen","descending":"Azalan"},"Startup":{"notSupported":"Desteklenmiyor","incompatibleApp":"BetterDiscord {{app}} ile çalışmıyor. Lütfen birini siliniz.","updateNow":"Şimdi Güncelle","maybeLater":"Belki Sonra","updateAvailable":"Güncelleme Mevcut","updateInfo":"BetterDiscord\'un enjektörü için yeni bir version var ({{version}}).\\n\\nŞimdi yeniden başlatabilir, veya sonra.","updateFailed":"Güncellenemedi","manualUpdate":"Otomatik güncellenemiyor, lütfen normal olarak yükleyiciyi indirin ve kurun.\\n\\n[Yükleyiciyi indir]\\n(https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"jQuery yüklemesi başarısız oldu","jqueryFailedDetails":"jQuery yüklenemedi, bazı eklentiler çalışmaya bilir. Kendi sorumluluğunuzda ilerleyin."},"WindowPrefs":{"enabledInfo":"Bu seçeneğin düzgün çalışması için şeffaf bir tema gerekiyor.\\nWindows\'da bu aero snapping ve maksimize etmeyi bozabilir.\\n\\nEtki etmesi için Discord\'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?","disabledInfo":"Etki etmesi için Discord\'un yeniden başlatılması gerek. Şimdi yeniden başlatmak ister misiniz?"}}');

/***/ }),

/***/ "../assets/locales/uk.json":
/*!*********************************!*\
  !*** ../assets/locales/uk.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/vi.json":
/*!*********************************!*\
  !*** ../assets/locales/vi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/zh-cn.json":
/*!************************************!*\
  !*** ../assets/locales/zh-cn.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"插件","themes":"主题","customcss":"自定义样式"},"Collections":{"settings":{"name":"设置","general":{"name":"一般","emotes":{"name":"表情系统","note":"启用 BetterDiscord 表情系统"},"publicServers":{"name":"公共服务器","note":"显示公共服务器按钮"},"voiceDisconnect":{"name":"自动断开语音","note":"自动在关闭 Discord 时断开语音"},"showToasts":{"name":"显示弹出提示","note":"在有重要信息时弹出小通知"},"mediaKeys":{"name":"禁用媒体控制键","note":"防止 Discord 在播放视频时劫持媒体控制键"}},"appearance":{"name":"外观","minimalMode":{"name":"最小化模式","note":"隐藏及缩小部分元素"},"twentyFourHour":{"name":"24小时制时间","note":"将12小时制时间转换为24小时制时间"},"coloredText":{"name":"彩色文字","note":"将消息颜色与发送者的角色颜色同步"},"hideGIFButton":{"name":"隐藏 GIF 按钮","note":"隐藏输入框右侧的 GIF 选择器"},"hideGiftButton":{"name":"隐藏礼物按钮","note":"隐藏输入框右侧的 Nitro 礼物按钮"}},"window":{"removeMinimumSize":{"name":"移除最小化限制","note":"移除 Discord 限制的最小窗口尺寸（940x500）"},"name":"窗口设置","transparency":{"name":"透明化","note":"允许主窗口透明（需要重启以生效）"},"frame":{"name":"窗口框","note":"向主窗口增加原生系统窗口框"}},"addons":{"name":"插件管理","addonErrors":{"name":"显示插件错误","note":"在插件/主题发生错误时显示弹窗"},"autoReload":{"name":"自动加载","note":"自动加载、重载及卸载插件和主题"},"editAction":{"name":"编辑器","note":"在何处编辑插件及主题","options":{"detached":"独立窗口","system":"系统编辑器"}}},"customcss":{"name":"自定义样式","customcss":{"name":"自定义样式","note":"启用自定义样式选项卡"},"liveUpdate":{"name":"热更新","note":"自动在 CSS 修改时应用变更"},"startDetached":{"name":"在独立窗口中打开","note":"在独立窗口中编辑自定义样式"},"nativeOpen":{"name":"在系统编辑器中打开","note":"在系统编辑器中编辑自定义样式"},"openAction":{"name":"编辑器","note":"在何处编辑自定义样式","options":{"settings":"设置菜单","detached":"独立窗口","system":"系统编辑器"}}},"developer":{"name":"开发者设置","debuggerHotkey":{"name":"调试器快捷键","note":"按下 F8 时启动调试器"},"reactDevTools":{"name":"React 开发者工具","note":"向 Discord 注入 React 开发者工具"},"inspectElement":{"name":"元素审查快捷键","note":"启用在大多数浏览器中常用的元素审查快捷键（Ctrl + Shift + C）"},"devToolsWarning":{"name":"屏蔽开发者工具警告","note":"禁止 Discord 打印「Hold Up!」警告"},"debugLogs":{"name":"调试日志","note":"输出控制台中的所有信息到 BetterDiscord 文件夹下的 debug.log 文件"}}},"emotes":{"name":"表情","general":{"name":"一般","download":{"name":"下载表情","note":"自动下载即将过期的表情"},"emoteMenu":{"name":"表情菜单","note":"在表情菜单中显示 Twitch/我的最爱 表情"},"hideEmojiMenu":{"name":"隐藏表情符号菜单Hide Emoji Menu","note":"在使用表情菜单时隐藏 Discord 的表情符号菜单"},"autoCaps":{"name":"表情自动大写","note":"自动大写表情命令"},"modifiers":{"name":"显示表情修饰符","note":"启用表情修饰符（flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap）"},"animateOnHover":{"name":"悬停动画","note":"仅在悬停时播放表情修饰符动画"}},"categories":{"name":"分类","twitchglobal":{"name":"Twitch 全局","note":"显示 Twitch 全局表情"},"twitchsubscriber":{"name":"Twitch 订阅","note":"显示 Twitch 订阅者表情"},"frankerfacez":{"name":"FrankerFaceZ","note":"显示来自 FFZ 的表情"},"bttv":{"name":"BetterTTV","note":"显示来自 BTTV 的表情"}}}},"Addons":{"title":"{{name}} 版本：{{version}} 作者：{{author}}","byline":"作者： {{author}}","openFolder":"打开{{type}}文件夹","reload":"重新加载","addonSettings":"设置","website":"网站","source":"源码","invite":"支持服务器","donate":"捐赠","patreon":"Patreon","name":"名称","author":"作者","version":"版本","added":"安装时间","modified":"最后更新时间","search":"搜索{{type}}","editAddon":"编辑","deleteAddon":"删除","confirmDelete":"你真的要删除{{name}}吗？","confirmationText":"你还有未保存的更改，关闭此窗口将失去所有对{{name}}所做的更改。","enabled":"已启用{{name}}","disabled":"已禁用{{name}}","couldNotEnable":"无法启用{{name}}。","couldNotDisable":"无法禁用{{name}}。","couldNotStart":"无法启动{{name}}。","couldNotStop":"无法停止{{name}}。","settingsError":"无法打开{{name}}设置","methodError":"无法调用{{method}}。","unknownAuthor":"未知的作者","noDescription":"作者没有留下任何描述","alreadyExists":"已经存在相同名称「{{name}}」的{{type}}了","alreadWatching":"已经在监听插件了","metaError":"无法解析元数据","missingNameData":"元数据缺少名称。","metaNotFound":"无法找到元数据","compileError":"无法编译。","wasUnloaded":"已卸载{{name}}。","blankSlateHeader":"你还添加任何{{type}}！","blankSlateMessage":"你可以在[此网站]({{link}})中获取，并将其添加到你的{{type}}文件夹中。"},"CustomCSS":{"confirmationText":"你还有未保存的更改，关闭此窗口将失去所有对自定义样式所做的更改。","update":"更新","save":"保存","openNative":"在系统编辑器中打开","openDetached":"在独立窗口中打开","settings":"编辑器设置","editorTitle":"自定义样式编辑器"},"Emotes":{"loading":"在后台加载表情时不会重新加载。","loaded":"所有表情均已成功加载。","clearEmotes":"清除表情数据","favoriteAction":"爱了！","downloadFailed":"下载失败","failureMessage":"BetterDiscord 无法下载表情，请检查你的网络连接和防火墙。"},"PublicServers":{"button":"公共","join":"加入","joining":"加入中","joined":"已加入","loading":"加载中","loadMore":"加载更多","notConnected":"尚未连接","connectionRequired":"你必须先连接你的账号才能加入公共服务器","connectionError":"连接错误","connectionErrorMessage":"连接到D iscordServers.com 时发生错误，可能是他们的网站/接口暂时不可用。请稍后再试。","pagination":"共{{count}}页中的第{{page}}页","search":"搜索","connect":"连接","reconnect":"重新连接","categories":"分类","keywords":"关键词","connection":"使用 {{username}}#{{discriminator}} 进行连接","results":"显示{{category}}分类下的{{total}}个结果，当前正在显示{{start}}-{{end}}个结果","query":"为了 {{query}}"},"Modals":{"confirmAction":"你确定吗？","okay":"确定","done":"完成","cancel":"取消","nevermind":"别在意","close":"关闭","name":"名称","message":"消息","error":"错误","addonErrors":"插件错误","restartRequired":"需要重启以生效","restartNow":"立即重启","restartLater":"稍候自行重启","additionalInfo":"额外信息","restartPrompt":"Discord 需要重新启动以应用最新变更。立刻进行重启吗？"},"ReactDevTools":{"notFound":"未找到扩展","notFoundDetails":"无法在你的电脑上找到 React 开发者工具扩展。请在本地的 Chrome 上安装该扩展。"},"Sorting":{"sortBy":"排序方式","order":"顺序","ascending":"正序","descending":"倒序"},"Startup":{"notSupported":"不支持的","incompatibleApp":"BetterDiscord 无法与 {{app}} 共同工作，要么留它要么留我。","updateNow":"立即更新","maybeLater":"下次吧","updateAvailable":"更新已可用","updateInfo":"BetterDiscord 的 Injector v{{version}} 有可用的更新。\\n\\n你可以立即更新并重启，或者稍后再更新。","updateFailed":"无法更新","manualUpdate":"无法自动更新，请下载安装器并重新进行安装。\\n\\n[下载安装器](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"无法加载 jQuery","jqueryFailedDetails":"无法加载 jQuery，部分插件可能无法正常工作。继续使用需要你自担风险。"},"WindowPrefs":{"enabledInfo":"此选项需要透明主题才能正常工作。在 Windows 上，这可能会破坏 AERO 的捕捉和最大化。\\n\\n该变更需要重启以生效。您要立即进行重启吗？","disabledInfo":"Discord 需要重新启动以应用最新变更。立刻进行重启吗？"}}');

/***/ }),

/***/ "../assets/locales/zh-tw.json":
/*!************************************!*\
  !*** ../assets/locales/zh-tw.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"附加元件","themes":"佈景主題","customcss":"客製化樣式"},"Collections":{"settings":{"name":"設置","general":{"name":"一般","emotes":{"name":"表情系統","note":"啟用 BetterDiscord 表情系統"},"publicServers":{"name":"公共伺服器","note":"顯示公共伺服器按鈕"},"voiceDisconnect":{"name":"自動斷開語音","note":"自動在關閉 Discord 時斷開語音"},"showToasts":{"name":"顯示彈出提示","note":"在有重要通知時彈出提示"},"mediaKeys":{"name":"禁用媒體控制鍵","note":"防止 Discord 在播放影片時劫持媒體控制鍵"}},"appearance":{"name":"外觀","minimalMode":{"name":"最小化模式","note":"隱藏及縮小部分元素"},"twentyFourHour":{"name":"24小時製時間","note":"將12小時製時間轉換為24小時製時間"},"coloredText":{"name":"彩色文字","note":"將消息顏色與發送者的身份組顏色同步"},"hideGIFButton":{"name":"隱藏 GIF 按鈕","note":"隱藏輸入框右側的 GIF 選擇器"},"hideGiftButton":{"name":"隱藏禮物按鈕","note":"隱藏輸入框右側的 Nitro 禮物按鈕"}},"window":{"removeMinimumSize":{"name":"移除最小化限制","note":"移除 Discord 限制的最小窗口尺寸（940x500）"},"name":"窗口設置","transparency":{"name":"透明化","note":"允許主窗口透明（需要重啟以生效）"},"frame":{"name":"窗口框","note":"向主窗口添加原生系統窗口框"}},"addons":{"name":"附加元件管理","addonErrors":{"name":"顯示附加元件錯誤","note":"在附加元件/佈景主題發生錯誤時顯示彈窗"},"autoReload":{"name":"自動加載","note":"自動加載、重載及卸載附加元件和佈景主題"},"editAction":{"name":"編輯器","note":"在何處编辑附加元件及佈景主題","options":{"detached":"獨立窗口","system":"系統編輯器"}}},"customcss":{"name":"客製化樣式","customcss":{"name":"客製化樣式","note":"啟用客製化樣式選項卡"},"liveUpdate":{"name":"熱更新","note":"自動在 CSS 發生變更時重新加載"},"startDetached":{"name":"在獨立窗口中打開","note":"在獨立窗口中編輯客製化樣式"},"nativeOpen":{"name":"在系統編輯器中打開","note":"在系統編輯器中編輯客製化樣式"},"openAction":{"name":"編輯器","note":"在何處編輯客製化樣式","options":{"settings":"設置菜單","detached":"獨立窗口","system":"系統編輯器"}}},"developer":{"name":"開發人員設置","debuggerHotkey":{"name":"調試器快捷鍵","note":"按下 F8 時啟動調試器"},"reactDevTools":{"name":"React 開發人員工具","note":"向 Discord 注入 React 開發人員工具"},"inspectElement":{"name":"元素檢測快捷鍵","note":"啟用在大多數瀏覽器中常用的元素檢測快捷鍵（Ctrl + Shift + C）"},"devToolsWarning":{"name":"屏蔽開發人員工具警告","note":"禁止 Discord 輸出「Hold Up!」警告"},"debugLogs":{"name":"調試日誌","note":"輸出控制台中的所有信息到 BetterDiscord 資料夾下的 debug.log 檔案"}}},"emotes":{"name":"表情","general":{"name":"一般","download":{"name":"下載表情","note":"自動下載即將過期的表情"},"emoteMenu":{"name":"表情菜單","note":"在表情菜單中顯示 Twitch/我的最愛 表情"},"hideEmojiMenu":{"name":"隐藏表情符號菜单","note":"在使用表情表情時隐藏 Discord 的表情符號菜單"},"autoCaps":{"name":"表情自動大寫","note":"自動大寫表情指令"},"modifiers":{"name":"顯示表情修飾符","note":"啟用表情修飾符（flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap）"},"animateOnHover":{"name":"懸停動畫","note":"僅在懸停時播放表情修飾符動畫"}},"categories":{"name":"分類","twitchglobal":{"name":"Twitch 全局","note":"顯示 Twitch 全局表情"},"twitchsubscriber":{"name":"Twitch 訂閱","note":"顯示 Twitch 訂閱者表情"},"frankerfacez":{"name":"FrankerFaceZ","note":"顯示來自 FFZ 的表情"},"bttv":{"name":"BetterTTV","note":"顯示來自 BTTV 的表情"}}}},"Addons":{"title":"{{name}} 版本：{{version}} 作者：{{author}}","byline":"作者： {{author}}","openFolder":"開啟{{type}}資料夾","reload":"重新加載","addonSettings":"設置","website":"網站","source":"源碼","invite":"支持服務器","donate":"捐贈","patreon":"Patreon","name":"名稱","author":"作者","version":"版本","added":"安裝時間","modified":"最後更新時間","search":"搜索{{type}}","editAddon":"編輯","deleteAddon":"刪除","confirmDelete":"你真的要刪除{{name}}嗎？","confirmationText":"你还有未保存的更改，關閉此窗口將失去所有對{{name}}所做的更改。","enabled":"已啟用{{name}}","disabled":"已禁用{{name}}","couldNotEnable":"無法啟用{{name}}。","couldNotDisable":"無法禁用{{name}}。","couldNotStart":"無法启动{{name}}。","couldNotStop":"無法停止{{name}}。","settingsError":"無法打开{{name}}设置","methodError":"無法调用{{method}}。","unknownAuthor":"未知的作者","noDescription":"作者没有留下任何描述","alreadyExists":"已經存在相同名稱「{{name}}」的{{type}}了","alreadWatching":"已經在監聽附加元件了","metaError":"無法解析元數據","missingNameData":"元數據缺少名稱。","metaNotFound":"無法找到元數據","compileError":"無法編譯。","wasUnloaded":"已卸載{{name}}。","blankSlateHeader":"你还未添加任何{{type}}！","blankSlateMessage":"你可以在[此网站]({{link}})中獲取，並將其添加到你的{{type}}資料夾中。"},"CustomCSS":{"confirmationText":"你还有未保存的更改，關閉此窗口將失去所有對客製化樣式所做的更改。","update":"更新","save":"保存","openNative":"在系統編輯器中打開","openDetached":"在獨立窗口中打開","settings":"編輯器設置","editorTitle":"客製化樣式編輯器"},"Emotes":{"loading":"在後台加載表情時不會重新加載。","loaded":"所有表情均已成功加載。","clearEmotes":"清除表情數據","favoriteAction":"添加到我的最愛","downloadFailed":"下載失敗","failureMessage":"BetterDiscord 無法下載表情，請檢查你的網絡連接和防火牆。"},"PublicServers":{"button":"公共","join":"加入","joining":"加入中","joined":"已加入","loading":"加載中","loadMore":"加載更多","notConnected":"尚未連接","connectionRequired":"你必須先連接你的賬號才能加入公共伺服器","connectionError":"連接錯誤","connectionErrorMessage":"連接到 DiscordServers.com 時發生錯誤，可能是他们的網站/接口暫時不可用。請稍後再試。","pagination":"共{{count}}頁中的第{{page}}頁","search":"搜索","connect":"連接","reconnect":"重新連接","categories":"分類","keywords":"關鍵詞","connection":"使用 {{username}}#{{discriminator}} 進行連接","results":"線上{{category}}分類下的{{total}}個結果，當前正在線上{{start}}-{{end}}個結果","query":"為了 {{query}}"},"Modals":{"confirmAction":"你確定嗎？","okay":"確定","done":"完成","cancel":"取消","nevermind":"別在意","close":"關閉","name":"名稱","message":"消息","error":"錯誤","addonErrors":"附加元件錯誤","restartRequired":"需要重啟以生效","restartNow":"立即重啟","restartLater":"稍候自行重啟","additionalInfo":"額外信息","restartPrompt":"Discord 需要重啟以應用更新。立刻進行重啟嗎？"},"ReactDevTools":{"notFound":"未找到框架","notFoundDetails":"無法在你的電腦上找到 React 開發者工具擴充套件。請在本地的 Chrome 上安裝該擴充套件。"},"Sorting":{"sortBy":"排序方式","order":"順序","ascending":"正序","descending":"倒序"},"Startup":{"notSupported":"不支持的","incompatibleApp":"BetterDiscord 無法與 {{app}} 共同工作，請做出選擇。","updateNow":"立即更新","maybeLater":"下次再說","updateAvailable":"更新已可用","updateInfo":"BetterDiscord 的 Injector v{{version}} 有可用的更新。\\n\\n你可以立即更新並重啟，或者稍候再更新。","updateFailed":"無法更新","manualUpdate":"無法自動更新，請下載安裝器並重新進行安裝。\\n\\n[下載安裝器](https://github.com/rauenzi/BetterDiscordApp/releases/latest)","jqueryFailed":"無法加載 jQuery","jqueryFailedDetails":"無法加載 jQuery，部分附加元件可能無法正常工作。繼續使用需要你自擔風險。"},"WindowPrefs":{"enabledInfo":"此選項需要透明佈景主題才能正常工作。在 Windows 上，這可能會破壞 AERO 的捕捉和最大化。\\n\\n該變更需要重啟以生效。你要立即進行重啟嗎？","disabledInfo":"Discord 需要重啟以應用最新變更。立刻進行重啟嗎？"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _secure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure */ "./src/secure.js");
/* harmony import */ var _moduleloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleloader */ "./src/moduleloader.js");
/* harmony import */ var _loadingicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingicon */ "./src/loadingicon.js");
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core */ "./src/modules/core.js");
/* harmony import */ var _modules_pluginapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pluginapi */ "./src/modules/pluginapi.js");




 // Perform some setup

(0,_secure__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_moduleloader__WEBPACK_IMPORTED_MODULE_1__["default"])();
window.BdApi = _modules_pluginapi__WEBPACK_IMPORTED_MODULE_4__["default"]; // Add loading icon at the bottom right

_loadingicon__WEBPACK_IMPORTED_MODULE_2__["default"].show();
_modules_core__WEBPACK_IMPORTED_MODULE_3__["default"].startup();
})();

/******/ })()
;