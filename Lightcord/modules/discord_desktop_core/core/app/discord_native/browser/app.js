"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectBuildInfo = injectBuildInfo;
exports.injectModuleUpdater = injectModuleUpdater;
exports.injectUpdater = injectUpdater;

const electron = require('electron');

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

let injectedBuildInfo = null;
let injectedModuleUpdater = null;
let injectedUpdater = null;

function injectBuildInfo(buildInfo) {
  injectedBuildInfo = buildInfo;
}

function injectModuleUpdater(moduleUpdater) {
  injectedModuleUpdater = moduleUpdater;
}

function injectUpdater(updater) {
  injectedUpdater = updater;
}

electron.ipcMain.on(APP_GET_RELEASE_CHANNEL_SYNC, event => {
  event.returnValue = injectedBuildInfo.releaseChannel;
});
electron.ipcMain.on(APP_GET_HOST_VERSION_SYNC, event => {
  event.returnValue = electron.app.getVersion();
});

async function newUpdaterGetModuleVersions(updater) {
  // eslint-disable-next-line camelcase
  return (await updater.queryCurrentVersions()).current_modules;
}

electron.ipcMain.handle(APP_GET_MODULE_VERSIONS, async _ => {
  var _injectedUpdater;

  const newUpdater = (_injectedUpdater = injectedUpdater) === null || _injectedUpdater === void 0 ? void 0 : _injectedUpdater.getUpdater();

  if (newUpdater != null) {
    return newUpdaterGetModuleVersions(newUpdater);
  }

  const versions = {};
  const installed = injectedModuleUpdater != null ? injectedModuleUpdater.getInstalled() : {};

  for (const name of Object.keys(installed)) {
    versions[name] = installed[name].installedVersion;
  }

  return versions;
});
electron.ipcMain.handle(APP_GET_PATH, async (_, path) => {
  return electron.app.getPath(path);
});
electron.ipcMain.handle(APP_SET_BADGE_COUNT, async (_, count) => {
  electron.app.setBadgeCount(count);
});
electron.ipcMain.handle(APP_DOCK_SET_BADGE, async (_, badge) => {
  if (electron.app.dock != null) {
    electron.app.dock.setBadge(badge);
  }
});
electron.ipcMain.handle(APP_DOCK_BOUNCE, async (_, type) => {
  if (electron.app.dock != null) {
    return electron.app.dock.bounce(type);
  } else {
    return -1;
  }
});
electron.ipcMain.handle(APP_DOCK_CANCEL_BOUNCE, async (_, id) => {
  if (electron.app.dock != null) {
    electron.app.dock.cancelBounce(id);
  }
});
electron.ipcMain.handle(APP_RELAUNCH, async _ => {
  electron.app.relaunch();
  electron.app.exit(0);
});
electron.ipcMain.handle(APP_GET_DEFAULT_DOUBLE_CLICK_ACTION, async _ => {
  return electron.systemPreferences.getUserDefault('AppleActionOnDoubleClick', 'string');
});