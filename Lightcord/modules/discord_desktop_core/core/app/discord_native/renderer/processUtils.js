"use strict";

const electron = require('electron');

const process = require('process');

const {
  PROCESS_UTILS_GET_CPU_USAGE,
  PROCESS_UTILS_GET_MEMORY_INFO,
  PROCESS_UTILS_FLUSH_DNS_CACHE,
  PROCESS_UTILS_FLUSH_COOKIES,
  PROCESS_UTILS_FLUSH_STORAGE_DATA,
  PROCESS_UTILS_GET_MAIN_ARGV_SYNC
} = require('../common/constants').IPCEvents;

const CPU_USAGE_GATHER_INTERVAL = 1000;
const MEMORY_USAGE_GATHER_INTERVAL = 5000;
const mainArgv = electron.ipcRenderer.sendSync(PROCESS_UTILS_GET_MAIN_ARGV_SYNC);
let totalProcessorUsagePercent = 0;
let totalMemoryUsageKB = 0;
setInterval(() => {
  electron.ipcRenderer.invoke(PROCESS_UTILS_GET_CPU_USAGE).then(usage => totalProcessorUsagePercent = usage);
}, CPU_USAGE_GATHER_INTERVAL);
setInterval(() => {
  Promise.all([process.getProcessMemoryInfo(), electron.ipcRenderer.invoke(PROCESS_UTILS_GET_MEMORY_INFO)].map(x => x.catch(() => 0))).then(usages => {
    totalMemoryUsageKB = usages.reduce((total, usage) => total + usage.private, 0);
  });
}, MEMORY_USAGE_GATHER_INTERVAL);

async function flushDNSCache() {
  electron.ipcRenderer.invoke(PROCESS_UTILS_FLUSH_DNS_CACHE);
}

async function flushCookies(callback) {
  try {
    await electron.ipcRenderer.invoke(PROCESS_UTILS_FLUSH_COOKIES);
    callback();
  } catch (err) {
    callback(err);
  }
}

async function flushStorageData(callback) {
  try {
    await electron.ipcRenderer.invoke(PROCESS_UTILS_FLUSH_STORAGE_DATA);
    callback();
  } catch (err) {
    callback(err);
  }
}

async function purgeMemory() {
  electron.webFrame.clearCache();
}

function getCurrentCPUUsagePercent() {
  return totalProcessorUsagePercent;
}

function getCurrentMemoryUsageKB() {
  return totalMemoryUsageKB;
}

function getMainArgvSync() {
  return mainArgv;
}

module.exports = {
  flushDNSCache,
  flushCookies,
  flushStorageData,
  purgeMemory,
  getCurrentCPUUsagePercent,
  getCurrentMemoryUsageKB,
  getMainArgvSync
};