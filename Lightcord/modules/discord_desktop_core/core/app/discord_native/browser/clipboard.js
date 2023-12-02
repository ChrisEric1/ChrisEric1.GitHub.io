"use strict";

const electron = require('electron');

const {
  CLIPBOARD_COPY,
  CLIPBOARD_CUT,
  CLIPBOARD_PASTE
} = require('../common/constants').IPCEvents;

electron.ipcMain.handle(CLIPBOARD_COPY, async _ => {
  electron.webContents.getFocusedWebContents().copy();
});
electron.ipcMain.handle(CLIPBOARD_CUT, async _ => {
  electron.webContents.getFocusedWebContents().cut();
});
electron.ipcMain.handle(CLIPBOARD_PASTE, async _ => {
  electron.webContents.getFocusedWebContents().paste();
});