"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectGpuSettingsBackend = injectGpuSettingsBackend;

const electron = require('electron');

const {
  GPU_SETTINGS_SET_ENABLE_HWACCEL,
  GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC
} = require('../common/constants').IPCEvents;

let injectedGpuSettings = null;

function injectGpuSettingsBackend(gpuSettings) {
  injectedGpuSettings = gpuSettings;
}

electron.ipcMain.handle(GPU_SETTINGS_SET_ENABLE_HWACCEL, async (_, enable) => {
  if (injectedGpuSettings) {
    injectedGpuSettings.setEnableHardwareAcceleration(enable);
  }
});
electron.ipcMain.on(GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC, event => {
  event.returnValue = injectedGpuSettings != null ? injectedGpuSettings.getEnableHardwareAcceleration() : false;
});