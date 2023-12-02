"use strict";

const electron = require('electron');

const {
  GPU_SETTINGS_SET_ENABLE_HWACCEL,
  GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC
} = require('../common/constants').IPCEvents;

const hardwareAccelerationEnabled = electron.ipcRenderer.sendSync(GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC);

function getEnableHardwareAcceleration() {
  return hardwareAccelerationEnabled;
}

async function setEnableHardwareAcceleration(enable) {
  electron.ipcRenderer.invoke(GPU_SETTINGS_SET_ENABLE_HWACCEL, enable);
}

module.exports = {
  getEnableHardwareAcceleration,
  setEnableHardwareAcceleration
};