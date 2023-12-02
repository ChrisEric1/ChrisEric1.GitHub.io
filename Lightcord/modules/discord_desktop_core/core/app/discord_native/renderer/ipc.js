"use strict";

const electron = require('electron');

const {
  getDiscordIPCEvent,
  IPCEvents
} = require('../common/constants');

const ipcRenderer = electron.ipcRenderer; // Sending ipc directly from the renderer is considered deprecated.
// App still sends a few, so we whitelist those.

const RENDERER_IPC_WHITELIST = [IPCEvents.APP_BADGE_SET, IPCEvents.CHECK_FOR_UPDATES, IPCEvents.NOTIFICATION_CLOSE, IPCEvents.NOTIFICATION_SHOW, IPCEvents.NOTIFICATIONS_CLEAR, IPCEvents.OPEN_EXTERNAL_URL, IPCEvents.QUIT_AND_INSTALL, IPCEvents.SETTINGS_UPDATE_BACKGROUND_COLOR, IPCEvents.SYSTEM_TRAY_SET_ICON, IPCEvents.SYSTEM_TRAY_SET_APPLICATIONS, IPCEvents.TOGGLE_MINIMIZE_TO_TRAY, IPCEvents.TOGGLE_OPEN_ON_STARTUP, IPCEvents.TOGGLE_START_MINIMIZED, IPCEvents.UPDATE_OPEN_ON_STARTUP, IPCEvents.UPDATER_HISTORY_QUERY_AND_TRUNCATE, IPCEvents.UPDATED_QUOTES];

function send(ev, ...args) {
  const prefixedEvent = getDiscordIPCEvent(ev);

  if (!RENDERER_IPC_WHITELIST.includes(prefixedEvent)) {
    throw new Error('cannot send this event');
  }

  ipcRenderer.send(prefixedEvent, ...args);
}

function on(ev, callback) {
  ipcRenderer.on(getDiscordIPCEvent(ev), callback);
}

module.exports = {
  send,
  on
};