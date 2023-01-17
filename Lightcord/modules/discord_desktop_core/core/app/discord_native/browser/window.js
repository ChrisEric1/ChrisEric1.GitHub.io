"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectGetWindow = injectGetWindow;

const electron = require('electron');

const process = require('process');

const {
  WINDOW_BLUR,
  WINDOW_CLOSE,
  WINDOW_FOCUS,
  WINDOW_MAXIMIZE,
  WINDOW_MINIMIZE,
  WINDOW_RESTORE,
  WINDOW_FLASH_FRAME,
  WINDOW_TOGGLE_FULLSCREEN,
  WINDOW_SET_BACKGROUND_THROTTLING,
  WINDOW_SET_PROGRESS_BAR,
  WINDOW_IS_ALWAYS_ON_TOP,
  WINDOW_SET_ALWAYS_ON_TOP
} = require('../common/constants').IPCEvents;

let injectedGetWindow = _key => {
  return null;
};

function injectGetWindow(getWindow) {
  injectedGetWindow = getWindow;
}

electron.ipcMain.handle(WINDOW_FLASH_FRAME, async (_, flag) => {
  const currentWindow = injectedGetWindow();
  if (currentWindow == null || currentWindow.flashFrame == null) return;
  currentWindow.flashFrame(!currentWindow.isFocused() && flag);
});
electron.ipcMain.handle(WINDOW_MINIMIZE, async (_, key) => {
  const win = injectedGetWindow(key);
  if (win == null) return;
  win.minimize();
});
electron.ipcMain.handle(WINDOW_RESTORE, async (_, key) => {
  const win = injectedGetWindow(key);
  if (win == null) return;
  win.restore();
});
electron.ipcMain.handle(WINDOW_MAXIMIZE, async (_, key) => {
  const win = injectedGetWindow(key);
  if (win == null) return;

  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});
electron.ipcMain.handle(WINDOW_FOCUS, async (_, key) => {
  const win = injectedGetWindow(key);
  if (win == null) return;
  win.show();
});
electron.ipcMain.handle(WINDOW_SET_ALWAYS_ON_TOP, async (_, key, enabled) => {
  const win = injectedGetWindow(key);
  if (win == null) return;
  win.setAlwaysOnTop(enabled);
});
electron.ipcMain.handle(WINDOW_IS_ALWAYS_ON_TOP, async (_, key) => {
  const win = injectedGetWindow(key);
  if (win == null) return false;
  return win.isAlwaysOnTop();
});
electron.ipcMain.handle(WINDOW_BLUR, async (_, key) => {
  const win = injectedGetWindow(key);

  if (win != null && !win.isDestroyed()) {
    win.blur();
  }
});
electron.ipcMain.handle(WINDOW_SET_PROGRESS_BAR, async (_, key, progress) => {
  const win = injectedGetWindow(key);
  if (win == null) return;
  win.setProgressBar(progress);
});
electron.ipcMain.handle(WINDOW_TOGGLE_FULLSCREEN, async (_, key) => {
  const currentWindow = injectedGetWindow(key);
  currentWindow.setFullScreen(!currentWindow.isFullScreen());
});
electron.ipcMain.handle(WINDOW_CLOSE, async (_, key) => {
  if (key == null && process.platform === 'darwin') {
    electron.Menu.sendActionToFirstResponder('hide:');
  } else {
    const win = injectedGetWindow(key);
    if (win == null) return;
    win.close();
  }
});
electron.ipcMain.handle(WINDOW_SET_BACKGROUND_THROTTLING, async (_, enabled) => {
  const win = injectedGetWindow();
  if (win == null) return;
  win.webContents.setBackgroundThrottling(enabled);
});