"use strict";

var _electron = _interopRequireDefault(require("electron"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _appFeatures = require("../../appFeatures");

var paths = _interopRequireWildcard(require("../../paths"));

var _constants = require("../common/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  USER_DATA_CACHE_SAVE,
  USER_DATA_CACHE_GET,
  USER_DATA_CACHE_DELETE
} = _constants.IPCEvents;
const features = (0, _appFeatures.getFeatures)();

function getCachePath() {
  return _path.default.join(paths.getUserData(), 'userDataCache.json');
}

function getMigratedPath() {
  return _path.default.join(paths.getUserData(), 'domainMigrated');
}

function cacheUserData(userData) {
  _fs.default.writeFile(getCachePath(), userData, e => {
    if (e) {
      console.warn('Failed updating user data cache with error: ', e);
    }
  });
}

function getCachedUserData() {
  try {
    return JSON.parse(_fs.default.readFileSync(getCachePath()));
  } catch (_err) {}

  return null;
}

function deleteCachedUserData() {
  try {
    _fs.default.unlinkSync(getCachePath());

    _fs.default.writeFile(getMigratedPath(), '', e => {
      if (e) {
        console.warn('Failed to create domainMigrated file with error: ', e);
      }
    });
  } catch (_err) {}
}

_electron.default.ipcMain.handle(USER_DATA_CACHE_GET, () => {
  return getCachedUserData();
});

_electron.default.ipcMain.on(USER_DATA_CACHE_SAVE, (_event, userData) => {
  cacheUserData(userData);
});

_electron.default.ipcMain.on(USER_DATA_CACHE_DELETE, _event => {
  deleteCachedUserData();
});

features.declareSupported('user_data_cache');