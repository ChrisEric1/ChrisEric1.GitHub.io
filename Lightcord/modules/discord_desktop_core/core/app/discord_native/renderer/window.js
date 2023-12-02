"use strict";

const electron = require('electron');

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
  WINDOW_SET_ALWAYS_ON_TOP,
  WINDOW_DEVTOOLS_OPENED,
  WINDOW_DEVTOOLS_CLOSED
} = require('../common/constants').IPCEvents;

let devtoolsOpenedCallback = () => {};

let devtoolsClosedCallback = () => {};

electron.ipcRenderer.on(WINDOW_DEVTOOLS_OPENED, async _ => {
  if (devtoolsOpenedCallback != null) {
    devtoolsOpenedCallback();
  }
});
electron.ipcRenderer.on(WINDOW_DEVTOOLS_CLOSED, async _ => {
  if (devtoolsOpenedCallback != null) {
    devtoolsOpenedCallback();
  }
});

async function flashFrame(flag) {
  electron.ipcRenderer.invoke(WINDOW_FLASH_FRAME, flag);
}

async function minimize(key) {
  electron.ipcRenderer.invoke(WINDOW_MINIMIZE, key);
}

async function restore(key) {
  electron.ipcRenderer.invoke(WINDOW_RESTORE, key);
}

async function maximize(key) {
  electron.ipcRenderer.invoke(WINDOW_MAXIMIZE, key);
}

async function focus(_hack, key) {
  electron.ipcRenderer.invoke(WINDOW_FOCUS, key);
}

async function setAlwaysOnTop(key, enabled) {
  return electron.ipcRenderer.invoke(WINDOW_SET_ALWAYS_ON_TOP, key, enabled);
}

async function isAlwaysOnTop(key) {
  return electron.ipcRenderer.invoke(WINDOW_IS_ALWAYS_ON_TOP, key);
}

async function blur(key) {
  electron.ipcRenderer.invoke(WINDOW_BLUR, key);
}

async function setProgressBar(progress, key) {
  electron.ipcRenderer.invoke(WINDOW_SET_PROGRESS_BAR, key, progress);
}

async function fullscreen(key) {
  electron.ipcRenderer.invoke(WINDOW_TOGGLE_FULLSCREEN, key);
}

async function close(key) {
  electron.ipcRenderer.invoke(WINDOW_CLOSE, key);
}

async function setZoomFactor(factor) {
  if (!electron.webFrame.setZoomFactor) return;
  electron.webFrame.setZoomFactor(factor / 100);
}

async function setBackgroundThrottling(enabled) {
  electron.ipcRenderer.invoke(WINDOW_SET_BACKGROUND_THROTTLING, enabled);
}

async function setDevtoolsCallbacks(onOpened, onClosed) {
  devtoolsOpenedCallback = onOpened;
  devtoolsClosedCallback = onClosed;
}

module.exports = {
  flashFrame,
  minimize,
  restore,
  maximize,
  focus,
  blur,
  fullscreen,
  close,
  setAlwaysOnTop,
  isAlwaysOnTop,
  setZoomFactor,
  setBackgroundThrottling,
  setProgressBar,
  setDevtoolsCallbacks
};