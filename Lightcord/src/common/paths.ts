import * as fs from "fs"
import * as path from "path"
import rimraf from "rimraf"
import { app } from "electron"

// Determines environment-specific paths based on info provided
import originalFs from 'fs';

let userDataPath = null;
let resourcesPath = null;

function determineAppUserDataRoot() {
  return app.getPath('appData')
}

function determineUserData(userDataRoot, buildInfo) {
  return path.join(userDataRoot, 'Lightcord');
}

// cleans old version data in the background
export function cleanOldVersions(buildInfo) {
  const entries = fs.readdirSync(userDataPath) || [];
  entries.forEach(entry => {
    const fullPath = path.join(userDataPath, entry);
    if (fs.lstatSync(fullPath).isDirectory() && entry.indexOf(buildInfo.version) === -1) {
      if (entry.match('^[0-9]+.[0-9]+.[0-9]+') != null) {
        console.log('Removing old directory ', entry);
        rimraf(fullPath, originalFs, error => {
          if (error) {
            console.warn('...failed with error: ', error);
          }
        });
      }
    }
  });
}

export function init(buildInfo) {
  resourcesPath = path.join(require.main.filename, '..', '..', '..');

  const userDataRoot = determineAppUserDataRoot();

  userDataPath = determineUserData(userDataRoot, buildInfo);

  const { app } = require('electron');
  app.setPath('userData', userDataPath);
  console.log(userDataPath, buildInfo.version)
}

export function getUserData() {
  return userDataPath;
}

export function getResources() {
  return resourcesPath;
}
