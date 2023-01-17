"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;
exports.reconcileCrashReporterMetadata = reconcileCrashReporterMetadata;

const {
  getElectronMajorVersion
} = require('./processUtils');

function flatten(metadata, prefix, root) {
  root = root ? root : {};
  prefix = prefix ? prefix : '';

  if (typeof metadata === 'object') {
    for (const key in metadata) {
      const next_prefix = prefix === '' ? key : `${prefix}[${key}]`;
      flatten(metadata[key], next_prefix, root);
    }
  } else {
    root[prefix] = metadata;
  }

  return root;
}

function reconcileCrashReporterMetadata(crashReporter, metadata) {
  if (getElectronMajorVersion() < 8) {
    return;
  }

  const new_metadata = flatten(metadata);
  const old_metadata = crashReporter.getParameters();

  for (const key in old_metadata) {
    if (!new_metadata.hasOwnProperty(key)) {
      crashReporter.removeExtraParameter(key);
    }
  }

  for (const key in new_metadata) {
    if (!old_metadata.hasOwnProperty(key)) {
      crashReporter.addExtraParameter(key, new_metadata[key]);
    }
  }
}