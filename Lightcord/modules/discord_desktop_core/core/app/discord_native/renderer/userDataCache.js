"use strict";

const electron = require('electron');

const {
  USER_DATA_CACHE_SAVE,
  USER_DATA_CACHE_GET,
  USER_DATA_CACHE_DELETE
} = require('../common/constants').IPCEvents;

async function getCached() {
  const cached = await electron.ipcRenderer.invoke(USER_DATA_CACHE_GET);
  return cached;
}

function cacheUserData(userData) {
  electron.ipcRenderer.send(USER_DATA_CACHE_SAVE, userData);
}

function deleteCache() {
  electron.ipcRenderer.send(USER_DATA_CACHE_DELETE);
}

module.exports = {
  getCached,
  cacheUserData,
  deleteCache
};