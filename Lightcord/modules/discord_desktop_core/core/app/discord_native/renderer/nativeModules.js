"use strict";

const electron = require('electron');

const {
  NATIVE_MODULES_GET_PATHS,
  NATIVE_MODULES_INSTALL,
  NATIVE_MODULES_GET_HAS_NEW_UPDATER
} = require('../common/constants').IPCEvents;

const modulePromises = {};

function getSanitizedModulePaths() {
  let sanitizedModulePaths = [];
  const {
    mainAppDirname,
    browserModulePaths
  } = electron.ipcRenderer.sendSync(NATIVE_MODULES_GET_PATHS);
  browserModulePaths.forEach(modulePath => {
    if (!modulePath.includes('electron.asar')) {
      sanitizedModulePaths.push(modulePath);
    }
  });

  const rendererModulePaths = require('module')._nodeModulePaths(mainAppDirname);

  sanitizedModulePaths = sanitizedModulePaths.concat(rendererModulePaths.slice(0, 2));
  return sanitizedModulePaths;
}

function getHasNewUpdater() {
  return electron.ipcRenderer.sendSync(NATIVE_MODULES_GET_HAS_NEW_UPDATER);
}

async function ensureModule(name) {
  let modulePromise = modulePromises[name];

  if (modulePromise == null) {
    modulePromise = electron.ipcRenderer.invoke(NATIVE_MODULES_INSTALL, name);
  }

  await modulePromise;
  module.paths = getSanitizedModulePaths();
}

function requireModule(name) {
  if (!/^discord_[a-z0-9_-]+$/.test(name) && name !== 'erlpack') {
    throw new Error('"' + String(name) + '" is not a whitelisted native module');
  }

  return require("../../../../../"+name);
}

module.paths = getSanitizedModulePaths();
module.exports = {
  ensureModule,
  requireModule,
  canBootstrapNewUpdater: !getHasNewUpdater()
};