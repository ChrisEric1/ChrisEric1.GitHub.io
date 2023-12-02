"use strict";

const electron = require('electron');

const lodash = require('lodash');

const {
  reconcileCrashReporterMetadata
} = require('../../../common/crashReporterUtils');

const {
  getElectronMajorVersion
} = require('../../../common/processUtils');

const {
  metadata
} = require('../../crashReporterSetup');

const {
  CRASH_REPORTER_UPDATE_METADATA
} = require('../common/constants').IPCEvents;

electron.ipcMain.handle(CRASH_REPORTER_UPDATE_METADATA, async (_, additional_metadata) => {
  const final_metadata = lodash.defaultsDeep({}, metadata, additional_metadata || {});
  const result = {
    metadata: final_metadata
  }; // In Electron 9 we only start the crashReporter once and let reconcileCrashReporterMetadata
  // do the work of keeping `extra` up-to-date. Prior to this we would simply start crashReporter
  // again to apply new metadata as well as pass the full arguments back to the renderer so it
  // could do similarly.

  if (getElectronMajorVersion() < 9) {
    const args = getCrashReporterArgs(final_metadata);
    result.args = args;
  }

  return result;
});