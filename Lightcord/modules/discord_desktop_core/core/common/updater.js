"use strict";

// Too much Rust integration stuff in here.

/* eslint camelcase: 0 */
const childProcess = require('child_process');

const {
  app
} = require('electron');

const {
  EventEmitter
} = require('events');

const NodeModule = require('module');

const path = require('path');

const {
  hrtime
} = require('process');

let instance;
const TASK_STATE_COMPLETE = 'Complete';
const TASK_STATE_FAILED = 'Failed';
const TASK_STATE_WAITING = 'Waiting';
const TASK_STATE_WORKING = 'Working';

class Updater extends EventEmitter {
  constructor(options) {
    super();
    let nativeUpdaterModule = options.nativeUpdaterModule;

    if (nativeUpdaterModule == null) {
      try {
        // eslint-disable-next-line import/no-unresolved
        nativeUpdaterModule = require('../../../updater');
      } catch (e) {
        if (e.code === 'MODULE_NOT_FOUND') {
          return;
        }

        throw e;
      }
    }

    this.committedHostVersion = null;
    this.committedModules = new Set();
    this.rootPath = options.root_path;
    this.nextRequestId = 0;
    this.requests = new Map();
    this.updateEventHistory = [];
    this.isRunningInBackground = false;
    this.currentlyDownloading = {};
    this.currentlyInstalling = {};
    this.hasEmittedUnhandledException = false;
    this.nativeUpdater = new nativeUpdaterModule.Updater({
      response_handler: this._handleResponse.bind(this),
      ...options
    });
  }

  get valid() {
    return this.nativeUpdater != null;
  }

  _sendRequest(detail, progressCallback = null) {
    if (!this.valid) {
      // The dumb linters are mad at each other.
      // eslint-disable-next-line quotes
      throw new Error("Can't send request to updater because the native updater isn't loaded.");
    }

    const requestId = this.nextRequestId++;
    return new Promise((resolve, reject) => {
      this.requests.set(requestId, {
        resolve,
        reject,
        progressCallback
      });
      this.nativeUpdater.command(JSON.stringify([requestId, detail]));
    });
  }

  _sendRequestSync(detail) {
    if (!this.valid) {
      // eslint-disable-next-line quotes
      throw new Error("Can't send request to updater because the native updater isn't loaded.");
    }

    const requestId = this.nextRequestId++;
    return this.nativeUpdater.command_blocking(JSON.stringify([requestId, detail]));
  }

  _handleResponse(response) {
    try {
      const [id, detail] = JSON.parse(response);
      const request = this.requests.get(id);

      if (request == null) {
        console.error('Received response ', detail, ' for a request (', id, ') not in the updater request map.');
        return;
      }

      if (detail['Error'] != null) {
        request.reject(new Error(detail['Error']));
        this.requests.delete(id);
      } else if (detail === 'Ok') {
        request.resolve();
        this.requests.delete(id);
      } else if (detail['VersionInfo'] != null) {
        request.resolve(detail['VersionInfo']);
        this.requests.delete(id);
      } else if (detail['ManifestInfo'] != null) {
        request.resolve(detail['ManifestInfo']);
        this.requests.delete(id);
      } else if (detail['TaskProgress'] != null) {
        const msg = detail['TaskProgress'];
        const progress = {
          task: msg[0],
          state: msg[1],
          percent: msg[2],
          bytesProcessed: msg[3]
        };

        this._recordTaskProgress(progress);

        if (request.progressCallback != null) {
          request.progressCallback(progress);
        }

        if (progress.task['HostInstall'] != null && progress.state === 'Complete') {
          this.emit('host-updated');
        }
      } else {
        console.warn('Unknown updater response', detail);
      }
    } catch (e) {
      console.error('Unhandled exception in updater response handler:', e); // Report the first time this happens, but don't spam.

      if (!this.hasEmittedUnhandledException) {
        this.hasEmittedUnhandledException = true;
        this.emit('unhandled-exception', e);
      }
    }
  }

  _handleSyncResponse(response) {
    const detail = JSON.parse(response);

    if (detail['Error'] != null) {
      throw new Error(detail['Error']);
    } else if (detail === 'Ok') {
      return;
    } else if (detail['VersionInfo'] != null) {
      return detail['VersionInfo'];
    }

    console.warn('Unknown updater response', detail);
  }

  _getHostPath() {
    const [major, minor, revision] = this.committedHostVersion;
    const hostVersionStr = `${major}.${minor}.${revision}`;
    return path.join(this.rootPath, `app-${hostVersionStr}`);
  }

  _startCurrentVersionInner(options, versions) {
    if (this.committedHostVersion == null) {
      this.committedHostVersion = versions.current_host;
    }

    const hostPath = this._getHostPath();

    const hostExePath = path.join(hostPath, path.basename(process.execPath));

    if (path.resolve(hostExePath) != path.resolve(process.execPath) && !(options === null || options === void 0 ? void 0 : options.allowObsoleteHost)) {
      app.once('will-quit', () => {
        // TODO(eiz): the actual, correct way to do this (win32) is to inherit a
        // handle to the current process into a new child process which then
        // waits for that process handle to exit, then runs the new electron.
        // This requires either implementing a separate updater exe process (big
        // todo item atm) or likely modifying Electron?
        //
        // I intend to do it properly once the new production updater .exe is a
        // thing.
        childProcess.spawn(hostExePath, [], {
          detached: true,
          stdio: 'inherit'
        });
      });
      console.log(`Restarting from ${path.resolve(process.execPath)} to ${path.resolve(hostExePath)}`);
      app.quit();
      return;
    }

    this._commitModulesInner(versions);
  }

  _commitModulesInner(versions) {
    const hostPath = this._getHostPath();

    const modulesPath = path.join(hostPath, 'modules');

    for (const module in versions.current_modules) {
      const moduleVersion = versions.current_modules[module];
      const moduleSearchPath = path.join(modulesPath, `${module}-${moduleVersion}`);

      if (!this.committedModules.has(module) && NodeModule.globalPaths.indexOf(moduleSearchPath) === -1) {
        this.committedModules.add(module);
        NodeModule.globalPaths.push(moduleSearchPath);
      }
    }
  }

  _recordDownloadProgress(name, progress) {
    const now = String(hrtime.bigint());

    if (progress.state === TASK_STATE_WORKING && !this.currentlyDownloading[name]) {
      this.currentlyDownloading[name] = true;
      this.updateEventHistory.push({
        type: 'downloading-module',
        name: name,
        now: now
      });
    } else if (progress.state === TASK_STATE_COMPLETE || progress.state === TASK_STATE_FAILED) {
      this.currentlyDownloading[name] = false;
      this.updateEventHistory.push({
        type: 'downloaded-module',
        name: name,
        now: now,
        succeeded: progress.state === TASK_STATE_COMPLETE,
        receivedBytes: progress.bytesProcessed
      });
    }
  }

  _recordInstallProgress(name, progress, newVersion, isDelta) {
    const now = String(hrtime.bigint());

    if (progress.state === TASK_STATE_WORKING && !this.currentlyInstalling[name]) {
      this.currentlyInstalling[name] = true;
      this.updateEventHistory.push({
        type: 'installing-module',
        name,
        now,
        newVersion,
        foreground: !this.isRunningInBackground
      });
    } else if (progress.state === TASK_STATE_COMPLETE || progress.state === TASK_STATE_FAILED) {
      this.currentlyInstalling[name] = false;
      this.updateEventHistory.push({
        type: 'installed-module',
        name,
        now,
        newVersion,
        succeeded: progress.state === TASK_STATE_COMPLETE,
        delta: isDelta,
        foreground: !this.isRunningInBackground
      });
    }
  }

  _recordTaskProgress(progress) {
    if (progress.task.HostDownload != null) {
      this._recordDownloadProgress('host', progress);
    } else if (progress.task.HostInstall != null) {
      this._recordInstallProgress('host', progress, null, progress.task.HostInstall.from_version != null);
    } else if (progress.task.ModuleDownload != null) {
      this._recordDownloadProgress(progress.task.ModuleDownload.version.module.name, progress);
    } else if (progress.task.ModuleInstall != null) {
      this._recordInstallProgress(progress.task.ModuleInstall.version.module.name, progress, progress.task.ModuleInstall.version.version, progress.task.ModuleInstall.from_version != null);
    }
  }

  queryCurrentVersions() {
    return this._sendRequest('QueryCurrentVersions');
  }

  queryCurrentVersionsSync() {
    return this._handleSyncResponse(this._sendRequestSync('QueryCurrentVersions'));
  }

  repair(progressCallback) {
    return this._sendRequest('Repair', progressCallback);
  }

  collectGarbage() {
    return this._sendRequest('CollectGarbage');
  }

  setRunningManifest(manifest) {
    return this._sendRequest({
      SetManifests: ['Running', manifest]
    });
  }

  setPinnedManifestSync(manifest) {
    return this._handleSyncResponse(this._sendRequestSync({
      SetManifests: ['Pinned', manifest]
    }));
  }

  installModule(name, progressCallback) {
    return this._sendRequest({
      InstallModule: name
    }, progressCallback);
  }

  updateToLatest(progressCallback) {
    return this._sendRequest('UpdateToLatest', progressCallback);
  } // If the running host is current, adopt the current installed modules and
  // set up the module search path accordingly. If the running host is not
  // current, start the new current host and exit this process.


  async startCurrentVersion(options) {
    const versions = await this.queryCurrentVersions();
    await this.setRunningManifest(versions.last_successful_update);

    this._startCurrentVersionInner(options, versions);
  }

  startCurrentVersionSync(options) {
    const versions = this.queryCurrentVersionsSync();

    this._startCurrentVersionInner(options, versions);
  }

  async commitModules(versions) {
    if (this.committedHostVersion == null) {
      throw new Error('Cannot commit modules before host version.');
    }

    if (versions == null) {
      versions = await this.queryCurrentVersions();
    }

    this._commitModulesInner(versions);
  }

  setRunningInBackground() {
    this.isRunningInBackground = true;
  }

  queryAndTruncateHistory() {
    const history = this.updateEventHistory;
    this.updateEventHistory = [];
    return history;
  }

}

function getUpdaterPlatformName(platform) {
  switch (platform) {
    case 'darwin':
      return 'osx';

    case 'win32':
      return 'win';

    default:
      return platform;
  }
}

function tryInitUpdater(buildInfo, repositoryUrl) {
  // We can't require this in module scope because it's not part of the
  // bootstrapper, which carries a copy of the Updater class.
  const paths = require('./paths');

  const rootPath = paths.getInstallPath(); // If we're not running from an actual install directory, don't bother trying
  // to initialize the updater.

  if (rootPath == null) {
    return false;
  }

  instance = new Updater({
    release_channel: buildInfo.releaseChannel,
    platform: getUpdaterPlatformName(process.platform),
    repository_url: repositoryUrl,
    root_path: rootPath
  });
  return instance.valid;
}

function getUpdater() {
  if (instance != null && instance.valid) {
    return instance;
  }
}

module.exports = {
  Updater,
  tryInitUpdater,
  getUpdater,
  TASK_STATE_COMPLETE,
  TASK_STATE_FAILED,
  TASK_STATE_WAITING,
  TASK_STATE_WORKING
};