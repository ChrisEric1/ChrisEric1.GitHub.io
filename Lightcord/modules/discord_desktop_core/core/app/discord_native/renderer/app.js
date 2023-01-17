"use strict";

const electron = require('electron');

const allowedAppPaths = new Set(['home', 'appData', 'desktop', 'documents', 'downloads', 'crashDumps']);

const {
  APP_GET_RELEASE_CHANNEL_SYNC,
  APP_GET_HOST_VERSION_SYNC,
  APP_GET_MODULE_VERSIONS,
  APP_GET_PATH,
  APP_SET_BADGE_COUNT,
  APP_DOCK_SET_BADGE,
  APP_DOCK_BOUNCE,
  APP_DOCK_CANCEL_BOUNCE,
  APP_RELAUNCH,
  APP_GET_DEFAULT_DOUBLE_CLICK_ACTION
} = require('../common/constants').IPCEvents;

let releaseChannel = electron.ipcRenderer.sendSync(APP_GET_RELEASE_CHANNEL_SYNC);
let hostVersion = electron.ipcRenderer.sendSync(APP_GET_HOST_VERSION_SYNC);
let moduleVersions = {};
electron.ipcRenderer.invoke(APP_GET_MODULE_VERSIONS).then(versions => {
  moduleVersions = versions;
});
electron.ipcRenderer.on('DISCORD_MODULE_INSTALLED', async _ => {
  moduleVersions = await electron.ipcRenderer.invoke(APP_GET_MODULE_VERSIONS);
});

function getReleaseChannel() {
  return releaseChannel;
}

function getVersion() {
  return hostVersion;
}

function getModuleVersions() {
  return moduleVersions;
}

async function getPath(path) {
  if (!allowedAppPaths.has(path)) {
    throw new Error(`${path} is not an allowed app path`);
  }

  return electron.ipcRenderer.invoke(APP_GET_PATH, path);
}

async function setBadgeCount(count) {
  electron.ipcRenderer.invoke(APP_SET_BADGE_COUNT, count);
}

async function dockSetBadge(badge) {
  electron.ipcRenderer.invoke(APP_DOCK_SET_BADGE, badge);
}

async function dockBounce(type) {
  return electron.ipcRenderer.invoke(APP_DOCK_BOUNCE, type);
}

async function dockCancelBounce(id) {
  electron.ipcRenderer.invoke(APP_DOCK_CANCEL_BOUNCE, id);
}

async function relaunch() {
  electron.ipcRenderer.invoke(APP_RELAUNCH);
}

async function getDefaultDoubleClickAction() {
  return electron.ipcRenderer.invoke(APP_GET_DEFAULT_DOUBLE_CLICK_ACTION);
}

function registerUserInteractionHandler(elementId, eventType, callback) {
  const element = document.getElementById(elementId);

  if (element == null) {
    throw new Error(`Element with id '${elementId}' was not found`);
  }

  function handleUserInteraction(ev) {
    if (!ev.isTrusted) {
      return;
    }

    callback(ev);
  }

  element.addEventListener(eventType, handleUserInteraction);
  return () => {
    element.removeEventListener(eventType, handleUserInteraction);
  };
}

module.exports = {
  getReleaseChannel,
  getVersion,
  getModuleVersions,
  getPath,
  setBadgeCount,
  dock: {
    setBadge: dockSetBadge,
    bounce: dockBounce,
    cancelBounce: dockCancelBounce
  },
  relaunch,
  getDefaultDoubleClickAction,
  registerUserInteractionHandler
};