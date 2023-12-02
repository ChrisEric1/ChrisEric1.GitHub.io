"use strict";

const electron = require('electron');

const {
  SETTINGS_GET,
  SETTINGS_SET,
  SETTINGS_GET_SYNC
} = require('../common/constants').IPCEvents; // Updating app settings directly from the renderer is considered deprecated.
// Voice still sets a few options, so we whitelist those.


const RENDERER_SET_WHITELIST = ['audioSubsystem', 'useLegacyAudioDevice', 'debugLogging'];

async function get(name, defaultValue) {
  return electron.ipcRenderer.invoke(SETTINGS_GET, name, defaultValue);
}

async function set(name, value) {
  if (!RENDERER_SET_WHITELIST.includes(name)) {
    throw new Error('cannot set this setting key');
  }

  return electron.ipcRenderer.invoke(SETTINGS_SET, name, value);
}

function getSync(name, defaultValue) {
  return electron.ipcRenderer.sendSync(SETTINGS_GET_SYNC, name, defaultValue);
}

module.exports = {
  get,
  set,
  getSync
};