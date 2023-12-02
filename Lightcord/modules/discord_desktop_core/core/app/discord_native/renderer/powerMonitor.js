"use strict";

const electron = require('electron');

const EventEmitter = require('events');

const {
  POWER_MONITOR_RESUME,
  POWER_MONITOR_SUSPEND,
  POWER_MONITOR_LOCK_SCREEN,
  POWER_MONITOR_UNLOCK_SCREEN,
  POWER_MONITOR_GET_SYSTEM_IDLE_TIME
} = require('../common/constants').IPCEvents;

const events = new EventEmitter();
electron.ipcRenderer.on(POWER_MONITOR_RESUME, () => {
  events.emit('resume');
});
electron.ipcRenderer.on(POWER_MONITOR_SUSPEND, () => {
  events.emit('suspend');
});
electron.ipcRenderer.on(POWER_MONITOR_LOCK_SCREEN, () => {
  events.emit('lock-screen');
});
electron.ipcRenderer.on(POWER_MONITOR_UNLOCK_SCREEN, () => {
  events.emit('unlock-screen');
});

function on() {
  events.on.apply(events, arguments);
}

function removeListener() {
  events.removeListener.apply(events, arguments);
}

function removeAllListeners() {
  events.removeAllListeners.apply(events, arguments);
}

async function getSystemIdleTimeMs() {
  return electron.ipcRenderer.invoke(POWER_MONITOR_GET_SYSTEM_IDLE_TIME);
}

module.exports = {
  on,
  removeListener,
  removeAllListeners,
  getSystemIdleTimeMs
};