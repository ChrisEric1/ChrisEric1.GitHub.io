"use strict";

const electron = require('electron');

const {
  POWER_MONITOR_RESUME,
  POWER_MONITOR_SUSPEND,
  POWER_MONITOR_LOCK_SCREEN,
  POWER_MONITOR_UNLOCK_SCREEN,
  POWER_MONITOR_GET_SYSTEM_IDLE_TIME
} = require('../common/constants').IPCEvents;

electron.ipcMain.handle(POWER_MONITOR_GET_SYSTEM_IDLE_TIME, async _ => {
  return electron.powerMonitor.getSystemIdleTime() * 1000;
});

function sendToAllWindows(channel) {
  electron.BrowserWindow.getAllWindows().forEach(win => {
    const contents = win.webContents;

    if (contents != null) {
      contents.send(channel);
    }
  });
}

electron.powerMonitor.on('resume', () => {
  sendToAllWindows(POWER_MONITOR_RESUME);
});
electron.powerMonitor.on('suspend', () => {
  sendToAllWindows(POWER_MONITOR_SUSPEND);
});
electron.powerMonitor.on('lock-screen', () => {
  sendToAllWindows(POWER_MONITOR_LOCK_SCREEN);
});
electron.powerMonitor.on('unlock-screen', () => {
  sendToAllWindows(POWER_MONITOR_UNLOCK_SCREEN);
});