"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.isInitialized = isInitialized;
exports.metadata = void 0;

const electron = require('electron');

const childProcess = require('child_process');

const {
  flatten
} = require('./crashReporterUtils');

let initialized = false;
const metadata = {};
exports.metadata = metadata;
const DEFAULT_SENTRY_KEY = '384ce4413de74fe0be270abe03b2b35a';
const TEST_SENTRY_KEY = '1a27a96457b24ff286a000266c573919';
const CHANNEL_SENTRY_KEYS = {
  stable: DEFAULT_SENTRY_KEY,
  ptb: TEST_SENTRY_KEY,
  canary: TEST_SENTRY_KEY,
  development: TEST_SENTRY_KEY
};

function getCrashReporterArgs(metadata) {
  // NB: we need to flatten the metadata because modern electron caps metadata values at 127 bytes,
  // which our sentry subobject can easily exceed.
  let flat_metadata = flatten(metadata);
  const channel = metadata['channel'];
  const sentryKey = CHANNEL_SENTRY_KEYS[channel] != null ? CHANNEL_SENTRY_KEYS[channel] : DEFAULT_SENTRY_KEY;
  return {
    productName: 'Discord',
    companyName: 'Discord Inc.',
    submitURL: `https://sentry.io/api/146342/minidump/?sentry_key=${sentryKey}`,
    uploadToServer: true,
    ignoreSystemCrashHandler: false,
    extra: flat_metadata
  };
}

function init(buildInfo) {
  if (initialized) {
    console.warn('Ignoring double initialization of crash reporter.');
    return;
  }

  metadata['channel'] = buildInfo.releaseChannel;
  const sentryMetadata = metadata['sentry'] != null ? metadata['sentry'] : {};
  sentryMetadata['environment'] = buildInfo.releaseChannel;
  sentryMetadata['release'] = buildInfo.version;
  metadata['sentry'] = sentryMetadata;

  if (process.platform === 'linux') {
    const XDG_CURRENT_DESKTOP = process.env.XDG_CURRENT_DESKTOP || 'unknown';
    const GDMSESSION = process.env.GDMSESSION || 'unknown';
    metadata['wm'] = `${XDG_CURRENT_DESKTOP},${GDMSESSION}`;

    try {
      metadata['distro'] = childProcess.execFileSync('lsb_release', ['-ds'], {
        timeout: 100,
        maxBuffer: 512,
        encoding: 'utf-8'
      }).trim();
    } catch (_) {} // just in case lsb_release doesn't exist

  }

  const config = getCrashReporterArgs(metadata);
  initialized = true;
}

function isInitialized() {
  return initialized;
}