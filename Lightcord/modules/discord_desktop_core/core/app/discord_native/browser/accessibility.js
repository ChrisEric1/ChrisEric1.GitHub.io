"use strict";

const electron = require('electron');

const {
  ACCESSIBILITY_GET_ENABLED
} = require('../common/constants').IPCEvents;

electron.ipcMain.handle(ACCESSIBILITY_GET_ENABLED, async _ => {
  return electron.app.accessibilitySupportEnabled;
});