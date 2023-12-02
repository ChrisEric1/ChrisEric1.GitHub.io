"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanOldVersions = cleanOldVersions;
exports.init = init;
exports.getUserData = getUserData;
exports.getUserDataVersioned = getUserDataVersioned;
exports.getResources = getResources;
exports.getModuleDataPath = getModuleDataPath;
exports.getInstallPath = getInstallPath;

var _fs = _interopRequireDefault(require("fs"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _path = _interopRequireDefault(require("path"));

var _rimraf = _interopRequireDefault(require("rimraf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Determines environment-specific paths based on info provided
const originalFs = require('original-fs');

let userDataPath = null;
let userDataVersionedPath = null;
let resourcesPath = null;
let moduleDataPath = null;
let installPath = null;

function determineAppUserDataRoot() {
  const {
    app
  } = require('electron');

  return app.getPath('appData');
}

function determineUserData(userDataRoot, buildInfo) {
  return _path.default.join(userDataRoot, 'discord' + (buildInfo.releaseChannel == 'stable' ? '' : buildInfo.releaseChannel));
} // cleans old version data in the background


function cleanOldVersions(buildInfo) {
  const entries = _fs.default.readdirSync(userDataPath) || [];
  entries.forEach(entry => {
    const fullPath = _path.default.join(userDataPath, entry);

    if (_fs.default.lstatSync(fullPath).isDirectory() && entry.indexOf(buildInfo.version) === -1) {
      if (entry.match('^[0-9]+.[0-9]+.[0-9]+') != null) {
        console.log('Removing old directory ', entry);
        (0, _rimraf.default)(fullPath, originalFs, error => {
          if (error) {
            console.warn('...failed with error: ', error);
          }
        });
      }
    }
  });
}

function init(buildInfo) {
  resourcesPath = _path.default.join(require.main.filename, '..', '..', '..');
  const userDataRoot = determineAppUserDataRoot();
  userDataPath = determineUserData(userDataRoot, buildInfo);

  const {
    app
  } = require('electron');

  app.setPath('userData', userDataPath);
  userDataVersionedPath = _path.default.join(userDataPath, buildInfo.version);

  _mkdirp.default.sync(userDataVersionedPath);

  if (buildInfo.localModulesRoot != null) {
    moduleDataPath = buildInfo.localModulesRoot;
  } else if (buildInfo.newUpdater) {
    moduleDataPath = _path.default.join(userDataPath, 'module_data');
  } else {
    moduleDataPath = _path.default.join(userDataVersionedPath, 'modules');
  }

  const exeDir = _path.default.dirname(app.getPath('exe'));

  if (/^app-[0-9]+\.[0-9]+\.[0-9]+/.test(_path.default.basename(exeDir))) {
    installPath = _path.default.join(exeDir, '..');
  }
}

function getUserData() {
  return userDataPath;
}

function getUserDataVersioned() {
  return userDataVersionedPath;
}

function getResources() {
  return resourcesPath;
}

function getModuleDataPath() {
  return moduleDataPath;
}

function getInstallPath() {
  return installPath;
}