"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _electron = require("electron");

var Constants = _interopRequireWildcard(require("../Constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  MenuEvents
} = Constants;
const SEPARATOR = {
  type: 'separator'
};
var _default = [{
  label: '&File',
  submenu: [{
    label: '&Options',
    click: () => _electron.app.emit(MenuEvents.OPEN_SETTINGS),
    accelerator: 'Ctrl+,'
  }, SEPARATOR, {
    label: '&Exit',
    click: () => _electron.app.quit(),
    accelerator: 'Alt+F4'
  }]
}, {
  label: '&View',
  submenu: [{
    label: '&Reload',
    click: () => _electron.BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache(),
    accelerator: 'Control+R'
  }, {
    label: 'Toggle &Full Screen',
    click: () => _electron.BrowserWindow.getFocusedWindow().setFullScreen(!_electron.BrowserWindow.getFocusedWindow().isFullScreen()),
    accelerator: 'Control+Shift+F'
  }, SEPARATOR, {
    label: '&Developer',
    submenu: [{
      label: 'Toggle Developer &Tools',
      click: () => _electron.BrowserWindow.getFocusedWindow().toggleDevTools(),
      accelerator: 'Control+Shift+I'
    }]
  }]
}, {
  label: '&Help',
  submenu: [{
    label: 'Check for Updates',
    click: () => _electron.app.emit(MenuEvents.CHECK_FOR_UPDATES)
  }, SEPARATOR, {
    label: 'Discord Help',
    click: () => _electron.app.emit(MenuEvents.OPEN_HELP)
  }]
}];
exports.default = _default;
module.exports = exports.default;