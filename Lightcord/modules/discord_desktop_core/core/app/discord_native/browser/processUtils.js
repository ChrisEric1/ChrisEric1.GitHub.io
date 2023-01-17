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

electron.ipcMain.handle(PROCESS_UTILS_GET_CPU_USAGE, async _ => {
  let totalProcessorUsagePercent = 0.0;

  for (const processMetric of electron.app.getAppMetrics()) {
    totalProcessorUsagePercent += processMetric.cpu.percentCPUUsage;
  }

  return totalProcessorUsagePercent;
});
electron.ipcMain.handle(PROCESS_UTILS_GET_MEMORY_INFO, async _ => {
  return process.getProcessMemoryInfo();
});
electron.ipcMain.handle(PROCESS_UTILS_FLUSH_DNS_CACHE, async _ => {
  const defaultSession = electron.session.defaultSession;
  if (!defaultSession || !defaultSession.clearHostResolverCache) return;
  defaultSession.clearHostResolverCache();
});
electron.ipcMain.handle(PROCESS_UTILS_FLUSH_COOKIES, async _ => {
  return electron.session.defaultSession.cookies.flushStore();
});
electron.ipcMain.handle(PROCESS_UTILS_FLUSH_STORAGE_DATA, async _ => {
  electron.session.defaultSession.flushStorageData();
});
electron.ipcMain.on(PROCESS_UTILS_GET_MAIN_ARGV_SYNC, event => {
  event.returnValue = process.argv;
});