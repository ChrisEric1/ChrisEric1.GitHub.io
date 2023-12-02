"use strict";

const electron = require('electron');

const {
  reconcileCrashReporterMetadata
} = require('../../../common/crashReporterUtils');

const {
  getElectronMajorVersion
} = require('../../../common/processUtils');

const {
  CRASH_REPORTER_UPDATE_METADATA
} = require('../common/constants').IPCEvents;

let metadata = {};
updateCrashReporter(metadata);

async function updateCrashReporter(additional_metadata) {
  const result = await electron.ipcRenderer.invoke(CRASH_REPORTER_UPDATE_METADATA, additional_metadata); // Calling crashReporter.start from a renderer process was deprecated in Electron 9.

  if (getElectronMajorVersion() < 9) {
    electron.crashReporter.start(result.args);
  }

  metadata = result.metadata || {};
  reconcileCrashReporterMetadata(electron.crashReporter, metadata);
}

function getMetadata() {
  return metadata;
}

module.exports = {
  updateCrashReporter,
  getMetadata
};