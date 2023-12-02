"use strict";

const electron = require('electron');

const {
  POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP,
  POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP,
  POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP
} = require('../common/constants').IPCEvents;

async function blockDisplaySleep() {
  return electron.ipcRenderer.invoke(POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP);
}

async function unblockDisplaySleep(id) {
  return electron.ipcRenderer.invoke(POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP, id);
}

async function cleanupDisplaySleep() {
  return electron.ipcRenderer.invoke(POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP);
}

module.exports = {
  blockDisplaySleep,
  unblockDisplaySleep,
  cleanupDisplaySleep
};