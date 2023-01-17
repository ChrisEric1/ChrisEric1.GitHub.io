"use strict";

const electron = require('electron');

const {
  POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP,
  POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP,
  POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP
} = require('../common/constants').IPCEvents;

const powerSaveBlockerIds = new Set();
electron.ipcMain.handle(POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP, async _ => {
  const newId = electron.powerSaveBlocker.start('prevent-display-sleep');
  powerSaveBlockerIds.add(newId);
  return newId;
});
electron.ipcMain.handle(POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP, async (_, id) => {
  electron.powerSaveBlocker.stop(id);
  powerSaveBlockerIds.delete(id);
});
electron.ipcMain.handle(POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP, async _ => {
  // cleanup all previous sleeps
  for (const id of powerSaveBlockerIds) {
    electron.powerSaveBlocker.stop(id);
  }

  powerSaveBlockerIds.clear();
});