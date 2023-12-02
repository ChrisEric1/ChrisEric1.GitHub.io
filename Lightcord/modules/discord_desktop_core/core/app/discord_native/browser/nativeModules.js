"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectModuleUpdater = injectModuleUpdater;
exports.injectUpdater = injectUpdater;

const childProcess = require('child_process');

const electron = require('electron');

const {
  once
} = require('events');

const path = require('path');

const process = require('process');

const {
  NATIVE_MODULES_GET_PATHS,
  NATIVE_MODULES_INSTALL,
  NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP,
  NATIVE_MODULES_GET_HAS_NEW_UPDATER
} = require('../common/constants').IPCEvents;

let injectedModuleUpdater = null;
let injectedUpdater = null;

function injectModuleUpdater(moduleUpdater) {
  injectedModuleUpdater = moduleUpdater;
}

function injectUpdater(updater) {
  injectedUpdater = updater;
}

electron.ipcMain.on(NATIVE_MODULES_GET_PATHS, event => {
  event.returnValue = {
    mainAppDirname: global.mainAppDirname,
    browserModulePaths: require('module').globalPaths
  };
});

async function newUpdaterInstall(updater, moduleName) {
  try {
    await updater.installModule(moduleName);
    await updater.commitModules();
  } catch (e) {
    throw new Error(`Failed to install ${moduleName}: ${e}`);
  }
}

electron.ipcMain.handle(NATIVE_MODULES_INSTALL, async (_, moduleName) => {
  var _injectedUpdater;

  const newUpdater = (_injectedUpdater = injectedUpdater) === null || _injectedUpdater === void 0 ? void 0 : _injectedUpdater.getUpdater();

  if (newUpdater != null) {
    return newUpdaterInstall(newUpdater, moduleName);
  }

  const updater = injectedModuleUpdater;

  if (!updater) {
    throw new Error('Module updater is not available!');
  }

  const waitForInstall = new Promise((resolve, reject) => {
    const installedHandler = installedModuleEvent => {
      if (installedModuleEvent.name === moduleName) {
        updater.events.removeListener(updater.INSTALLED_MODULE, installedHandler);

        if (installedModuleEvent.succeeded) {
          resolve();
        } else {
          reject(new Error(`Failed to install ${moduleName}`));
        }
      }
    };

    updater.events.on(updater.INSTALLED_MODULE, installedHandler);
  });
  updater.install(moduleName, false);
  await waitForInstall;
});
electron.ipcMain.on(NATIVE_MODULES_GET_HAS_NEW_UPDATER, event => {
  var _injectedUpdater2;

  event.returnValue = ((_injectedUpdater2 = injectedUpdater) === null || _injectedUpdater2 === void 0 ? void 0 : _injectedUpdater2.getUpdater()) != null;
}); // This endpoint is a bit special in the sense that it's exposed from
// discord_updater_bootstrap instead of discord_desktop_core. The reason for
// this is so that a malicious app can't pass in an arbitrary version number to
// launch.

electron.ipcMain.on(NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP, async (_, [major, minor, revision]) => {
  // TODO(eiz): This code is currently duplicated between the updater and here
  // due to bootstrapping reasons. I'd like to not have it be that way.
  if (typeof major !== 'number' || typeof minor !== 'number' || typeof revision !== 'number') {
    throw new Error('You tried.');
  }

  const hostVersionStr = `${major}.${minor}.${revision}`;
  const hostExePath = path.join(path.dirname(process.execPath), '..', `app-${hostVersionStr}`, path.basename(process.execPath));
  electron.app.once('will-quit', () => {
    childProcess.spawn(hostExePath, [], {
      detached: true,
      stdio: 'inherit'
    });
  });
  console.log(`Restarting from ${path.resolve(process.execPath)} to ${path.resolve(hostExePath)}`);
  electron.app.quit();
});