"use strict";

const electron = require('electron');

const {
  ACCESSIBILITY_GET_ENABLED
} = require('../common/constants').IPCEvents;

async function isAccessibilitySupportEnabled() {
  return electron.ipcRenderer.invoke(ACCESSIBILITY_GET_ENABLED);
}

module.exports = {
  isAccessibilitySupportEnabled
};