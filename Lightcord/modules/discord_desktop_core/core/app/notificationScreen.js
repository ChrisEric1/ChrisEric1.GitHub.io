"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.close = close;
exports.setMainWindow = setMainWindow;
exports.hasInit = exports.NOTIFICATION_CLICK = exports.events = void 0;

var _electron = require("electron");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _events = require("events");

var _url = _interopRequireDefault(require("url"));

var _ipcMain = _interopRequireDefault(require("./ipcMain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: transparency detection?
// TODO: SHQueryUserNotificationState
// ipcMain events
const IPC_NOTIFICATIONS_CLEAR = 'NOTIFICATIONS_CLEAR';
const IPC_NOTIFICATION_SHOW = 'NOTIFICATION_SHOW';
const IPC_NOTIFICATION_CLICK = 'NOTIFICATION_CLICK';
const IPC_NOTIFICATION_CLOSE = 'NOTIFICATION_CLOSE';
const IPC_THEME_UPDATE = "UPDATE_THEME" // events

const events = new _events.EventEmitter();
exports.events = events;
const NOTIFICATION_CLICK = 'notification-click';
exports.NOTIFICATION_CLICK = NOTIFICATION_CLICK;
let hasInit = false;
exports.hasInit = hasInit;

const variablesFilePath = _path.default.join(__dirname, 'notifications', 'variables.json');

let mainWindow;
let title;
let maxVisible;
let screenPosition;
let notifications;
let hideTimeout;
let notificationWindow;
let VARIABLES;

function webContentsSend(win, event, ...args) {
  if (win != null && win.webContents != null) {
    win.webContents.send(`DISCORD_${event}`, ...args);
  }
}

function init({
  mainWindow: _mainWindow,
  title: _title,
  maxVisible: _maxVisible,
  screenPosition: _screenPosition
}) {
  if (hasInit) {
    console.warn('notificationScreen: Has already init! Cancelling init.');
    return;
  }

  exports.hasInit = hasInit = true;
  VARIABLES = JSON.parse(_fs.default.readFileSync(variablesFilePath));
  mainWindow = _mainWindow;
  title = _title;
  maxVisible = _maxVisible;
  screenPosition = _screenPosition;
  notifications = [];
  hideTimeout = null;

  _ipcMain.default.on(IPC_NOTIFICATIONS_CLEAR, handleNotificationsClear);

  _ipcMain.default.on(IPC_NOTIFICATION_SHOW, handleNotificationShow);

  _ipcMain.default.on(IPC_NOTIFICATION_CLICK, handleNotificationClick);

  _ipcMain.default.on(IPC_NOTIFICATION_CLOSE, handleNotificationClose);

  _ipcMain.default.on(IPC_THEME_UPDATE, handleThemeUpdate)
}

function destroyWindow() {
  if (notificationWindow == null) return;
  notificationWindow.hide();
  notificationWindow.close();
  notificationWindow = null;
}

function close() {
  mainWindow = null;
  destroyWindow();

  _ipcMain.default.removeListener(IPC_NOTIFICATIONS_CLEAR, handleNotificationsClear);

  _ipcMain.default.removeListener(IPC_NOTIFICATION_SHOW, handleNotificationShow);

  _ipcMain.default.removeListener(IPC_NOTIFICATION_CLICK, handleNotificationClick);

  _ipcMain.default.removeListener(IPC_NOTIFICATION_CLOSE, handleNotificationClose);

  _ipcMain.default.removeListener(IPC_THEME_UPDATE, handleThemeUpdate)
}

function setMainWindow(_mainWindow) {
  mainWindow = _mainWindow;
}

function handleNotificationsClear() {
  notifications = [];
  updateNotifications();
}

function handleNotificationShow(e, notification) {
  if(lastUsedTheme !== notification.theme){
    lastUsedTheme = notification.theme
    webContentsSend(notificationWindow, "UPDATE_THEME", lastUsedTheme)
  }
  notifications.push(notification);
  updateNotifications();
  setTimeout(() => {
    if(!notifications.find(e => e.id === notification.id))return
    handleNotificationClose(null, notification.id)
  }, 5000)
}

function handleNotificationClick(e, notificationId) {
  webContentsSend(mainWindow, IPC_NOTIFICATION_CLICK, notificationId);
  events.emit(NOTIFICATION_CLICK);
}

let isClosing = []
function handleNotificationClose(e, notificationId) {
  if(isClosing.includes(notificationId))return
  isClosing.push(notificationId)
  if (notificationWindow) {
    webContentsSend(notificationWindow, 'FADE_OUT', notificationId);
  }

  setTimeout(() => {
    notifications = notifications.filter(notification => notification.id !== notificationId);
    isClosing = isClosing.filter(e => e!== notificationId)
    updateNotifications();
  }, VARIABLES.outDuration);
}

function handleThemeUpdate(e, theme){
  updateTheme(theme)
}

function updateNotifications() {
  if (notifications.length > 0) {
    clearTimeout(hideTimeout);
    hideTimeout = null;

    if (notificationWindow != null) {
      const {
        width,
        height,
        x,
        y
      } = calculateBoundingBox(); // [adill] this order is important. if you setPosition before you setSize electron
      // incorrectly computes the window size. i haven't investigated the root cause
      // further than this observation.

      notificationWindow.setSize(width, height);
      notificationWindow.setPosition(x, y);
      notificationWindow.showInactive();
    } else {
      createWindow();
      return;
    }
  } else if (hideTimeout == null) {
    hideTimeout = setTimeout(() => destroyWindow(), VARIABLES.outDuration * 1.1);
  }

  if (notificationWindow != null) {
    webContentsSend(notificationWindow, 'UPDATE', notifications.slice(0, maxVisible));
  }
}

let lastUsedTheme = "dark"
function updateTheme(theme){
  lastUsedTheme = theme
  if (notificationWindow != null) {
    webContentsSend(notificationWindow, 'UPDATE_THEME', theme);
  }
}

function calculateBoundingBox() {
  const [positionX, positionY] = mainWindow.getPosition();
  const [windowWidth, windowHeight] = mainWindow.getSize();
  const centerPoint = {
    x: Math.round(positionX + windowWidth / 2),
    y: Math.round(positionY + windowHeight / 2)
  };

  const activeDisplay = _electron.screen.getDisplayNearestPoint(centerPoint) || _electron.screen.getPrimaryDisplay();

  const workArea = activeDisplay.workArea;
  const width = VARIABLES.width;
  const height = maxVisible * VARIABLES.height;
  const x = workArea.x + workArea.width - width;
  let y;

  switch (screenPosition) {
    case 'top':
      y = workArea.y;
      break;

    case 'bottom':
      y = workArea.y + workArea.height - height;
      break;
  }

  return {
    x,
    y,
    width,
    height
  };
}

function createWindow() {
  if (notificationWindow != null) {
    return;
  }

  notificationWindow = new _electron.BrowserWindow({
    title: title,
    frame: false,
    resizable: false,
    show: false,
    acceptFirstMouse: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const notificationUrl = _url.default.format({
    protocol: 'file',
    slashes: true,
    pathname: _path.default.join(__dirname, 'notifications', 'index.html')
  });
  
  notificationWindow.loadURL(notificationUrl);
  notificationWindow.webContents.on('did-finish-load', () => {
    updateTheme(lastUsedTheme)
    updateNotifications()
  });
}