"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElectronMajorVersion = getElectronMajorVersion;

const process = require('process');

function getElectronMajorVersion() {
  return process.versions.electron != null ? parseInt(process.versions.electron.split('.')[0]) : 0;
}