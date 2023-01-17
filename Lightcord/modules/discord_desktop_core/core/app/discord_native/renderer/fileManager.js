"use strict";

const electron = require('electron');

const fs = require('fs');

const os = require('os');

const path = require('path');

const originalFs = require('original-fs');

const util = require('util');

const {
  getPath
} = require('./app');

const {
  getElectronMajorVersion
} = require('../../../common/processUtils');

const {
  FILE_MANAGER_GET_MODULE_PATH,
  FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC,
  FILE_MANAGER_SHOW_SAVE_DIALOG,
  FILE_MANAGER_SHOW_OPEN_DIALOG,
  FILE_MANAGER_SHOW_ITEM_IN_FOLDER
} = require('../common/constants').IPCEvents;

const INVALID_FILENAME_CHAR_REGEX = /[^a-zA-Z0-9-_.]/g;
const readdir = util.promisify(originalFs.readdir);

async function saveWithDialog(fileContents, fileName) {
  if (INVALID_FILENAME_CHAR_REGEX.test(fileName)) {
    throw new Error('fileName has invalid characters');
  }

  const defaultPath = path.join((await getPath('downloads')), fileName);
  const results = await electron.ipcRenderer.invoke(FILE_MANAGER_SHOW_SAVE_DIALOG, {
    defaultPath
  });

  if (results && results.filePath) {
    fs.writeFileSync(results.filePath, fileContents);
  }
}

async function showOpenDialog({
  filters,
  properties
}) {
  const results = await electron.ipcRenderer.invoke(FILE_MANAGER_SHOW_OPEN_DIALOG, {
    filters,
    properties
  });
  return results.filePaths;
}

function getTimes(filenames) {
  return Promise.allSettled(filenames.map(filename => new Promise((resolve, reject) => {
    originalFs.stat(filename, (err, stats) => {
      if (err) {
        return reject(err);
      }

      if (!stats.isFile()) {
        return reject(new Error('Not a file'));
      }

      return resolve({
        filename,
        mtime: stats.mtime
      });
    });
  })));
}

async function orderedFiles(folder) {
  try {
    const filenames = await readdir(folder);
    const times = await getTimes(filenames.map(filename => path.join(folder, filename)));
    return times.filter(result => result.status === 'fulfilled').map(result => result.value).sort((a, b) => b.mtime.getTime() - a.mtime.getTime()).map(a => a.filename);
  } catch (err) {
    return [];
  }
}

async function readLogFiles(maxSize) {
  const modulePath = await getModulePath();
  const webrtcLog0 = path.join(modulePath, 'discord_voice', 'discord-webrtc_0');
  const webrtcLog1 = path.join(modulePath, 'discord_voice', 'discord-webrtc_1');
  const webrtcLog2 = path.join(modulePath, 'discord_voice', 'discord-last-webrtc_0');
  const webrtcLog3 = path.join(modulePath, 'discord_voice', 'discord-last-webrtc_1');
  const hookLog = path.join(modulePath, 'discord_hook', 'hook.log');
  const audioState = path.join(modulePath, 'discord_voice', 'audio_state.json');
  const filesToUpload = [webrtcLog0, webrtcLog1, webrtcLog2, webrtcLog3, hookLog, audioState]; // Electron 9 changes crash folder location

  const crashBaseFolder = getElectronMajorVersion() < 9 ? path.join(os.tmpdir(), 'Discord Crashes') : await getPath('crashDumps');
  const crashFolder = process.platform === 'win32' ? path.join(crashBaseFolder, 'reports') : path.join(crashBaseFolder, 'completed');
  const crashFiles = await orderedFiles(crashFolder);

  if (crashFiles.length > 0) {
    filesToUpload.push(crashFiles[0]);
  }

  const files = await readFiles(filesToUpload, maxSize);
  return files.filter(result => result.status === 'fulfilled').map(result => result.value);
}

async function showItemInFolder(path) {
  electron.ipcRenderer.invoke(FILE_MANAGER_SHOW_ITEM_IN_FOLDER, path);
}

async function openFiles(dialogOptions, maxSize) {
  const filenames = await showOpenDialog(dialogOptions);

  if (filenames == null) {
    return;
  }

  const files = await readFiles(filenames, maxSize);
  files.forEach(result => {
    if (result.status === 'rejected') {
      throw result.reason;
    }
  });
  return files.map(result => result.value);
}

function readFiles(filenames, maxSize) {
  return Promise.allSettled(filenames.map(filename => new Promise((resolve, reject) => {
    originalFs.stat(filename, (err, stats) => {
      if (err) return reject(err);

      if (stats.size > maxSize) {
        // Used to help determine why openFiles failed.
        // Cannot use an error here because context bridge will remove the code field.
        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({
          code: 'ETOOLARGE',
          message: 'upload too large'
        });
      }

      originalFs.readFile(filename, (err, data) => {
        if (err) return reject(err);
        return resolve({
          data: data.buffer,
          filename: path.basename(filename)
        });
      });
    });
  })));
}

async function getModulePath() {
  return electron.ipcRenderer.invoke(FILE_MANAGER_GET_MODULE_PATH);
}

function getModuleDataPathSync() {
  return electron.ipcRenderer.sendSync(FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC);
}

module.exports = {
  readLogFiles,
  saveWithDialog,
  openFiles,
  showOpenDialog,
  showItemInFolder,
  getModulePath,
  getModuleDataPathSync,
  extname: path.extname,
  basename: path.basename,
  dirname: path.dirname,
  join: path.join
};