import * as fs from "fs"
import * as path from "path"
import { EventEmitter } from "events"
import * as process from "process"
import Backoff from "./Backoff"
import * as paths from "./paths"

// Manages additional module installation and management.
// We add the module folder path to require() lookup paths here.

// events
export const CHECKING_FOR_UPDATES = 'checking-for-updates';
export const INSTALLED_MODULE = 'installed-module';
export const UPDATE_CHECK_FINISHED = 'update-check-finished';
export const DOWNLOADING_MODULE = 'downloading-module';
export const DOWNLOADING_MODULE_PROGRESS = 'downloading-module-progress';
export const DOWNLOADING_MODULES_FINISHED = 'downloading-modules-finished';
export const UPDATE_MANUALLY = 'update-manually';
export const DOWNLOADED_MODULE = 'downloaded-module';
export const INSTALLING_MODULES_FINISHED = 'installing-modules-finished';
export const INSTALLING_MODULE = 'installing-module';
export const INSTALLING_MODULE_PROGRESS = 'installing-module-progress';
export const NO_PENDING_UPDATES = 'no-pending-updates';


const installedModules = fs.readdirSync(path.join(__dirname, "..", "..", "modules"))

class Events extends EventEmitter {
  history: any[];
  constructor() {
    super();
    this.history = [];
  }

  append(evt) {
    evt.now = String(process.hrtime.bigint());

    if (this._eventIsInteresting(evt)) {
      this.history.push(evt);
    }

    process.nextTick(() => this.emit(evt.type, evt));
  }

  _eventIsInteresting(evt) {
    return evt.type !== DOWNLOADING_MODULE_PROGRESS && evt.type !== INSTALLING_MODULE_PROGRESS;
  }
}

export const events = new Events();
export const supportsEventObjects = true;

export function initPathsOnly(_buildInfo) {
  return
}

export function init(_endpoint, _settings, _buildInfo) {
    return
}

// Indicates that the initial update process is complete and that future updates
// are background updates. This merely affects the content of the events sent to
// the app so that analytics can correctly attribute module download/installs
// depending on whether they were ui-blocking or not.
export function setInBackground() {

}

export function isInstalled(name, version?) {
  return installedModules.includes(name)
}

export function getInstalled() {
  return installedModules
}

export function install(name, defer, options) {
  if (isInstalled(name)) {
    if (!defer) {
      events.append({
        type: INSTALLED_MODULE,
        name: name,
        current: 1,
        total: 1,
        succeeded: true
      });
    }
    return;
  }
  return;
}

export function installPendingUpdates() {
    events.append({
      type: NO_PENDING_UPDATES
    });
}

export function checkForUpdates() {
  events.append({ type: CHECKING_FOR_UPDATES });
  events.append({
    type: UPDATE_CHECK_FINISHED,
    succeeded: true,
    updateCount: 0,
    manualRequired: false
  });
}