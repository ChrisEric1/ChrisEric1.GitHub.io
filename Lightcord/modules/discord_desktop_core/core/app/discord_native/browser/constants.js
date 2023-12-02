"use strict";

const electron = require('electron');

const {
  CONSTANTS_GET
} = require('../common/constants').IPCEvents;

const {
  APP_NAME,
  APP_ID,
  API_ENDPOINT,
  UPDATE_ENDPOINT
} = require('../../Constants');

const exposedConstants = {
  APP_NAME,
  APP_ID,
  API_ENDPOINT,
  UPDATE_ENDPOINT
};
electron.ipcMain.handle(CONSTANTS_GET, async (_, name) => {
  if (!exposedConstants.hasOwnProperty(name)) {
    return undefined;
  }

  return exposedConstants[name];
});