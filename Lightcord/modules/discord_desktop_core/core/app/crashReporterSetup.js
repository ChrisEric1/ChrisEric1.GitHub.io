"use strict";

const bootstrapCrashReporterSetup = require('./bootstrapModules').crashReporterSetup;

module.exports = bootstrapCrashReporterSetup != null ? bootstrapCrashReporterSetup : require('../common/crashReporterSetup');