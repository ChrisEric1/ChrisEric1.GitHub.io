"use strict";

var _require = require('electron'),
    app = _require.app;

var path = require('path');

var _require2 = require('./host'),
    createRenderer = _require2.createRenderer,
    destroyRenderer = _require2.destroyRenderer,
    eventHandler = _require2.eventHandler;

var FeatureFlags = require('./FeatureFlags');

var Overlay = require('./overlay_module.js');

process.on('uncaughtException', function (e) {
  Overlay.logMessage("Overlay host process exception: ".concat(e.message));
  Overlay.logMessage(e.stack);
});
global.features = new FeatureFlags();
global.mainAppDirname = __dirname;

if (process.versions.electron) {
  var versionBits = process.versions.electron.split('.');
  var majorVersion = parseInt(versionBits[0], 10);

  if (majorVersion >= 4) {
    global.features.declareSupported('overlay-hidpi');
  }
}

app.disableHardwareAcceleration();
app.allowRendererProcessReuse = false;
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.whenReady().then(function () {
  var buildInfo = require(path.join(process.resourcesPath, 'build_info.json'));

  require('discord_desktop_core/core/app/discord_native/browser/accessibility');

  var app = require('discord_desktop_core/core/app/discord_native/browser/app');

  app.injectBuildInfo(buildInfo);

  require('discord_desktop_core/core/app/discord_native/browser/clipboard');

  require('discord_desktop_core/core/app/discord_native/browser/constants');

  var crashReporterSetup = require('discord_desktop_core/core/app/crashReporterSetup');

  crashReporterSetup.init(buildInfo);

  require('discord_desktop_core/core/app/discord_native/browser/crashReporter');

  var features = require('discord_desktop_core/core/app/discord_native/browser/features');

  features.injectFeaturesBackend(global.features);

  require('discord_desktop_core/core/app/discord_native/browser/fileManager');

  require('discord_desktop_core/core/app/discord_native/browser/gpuSettings');

  require('discord_desktop_core/core/app/discord_native/browser/nativeModules');

  require('discord_desktop_core/core/app/discord_native/browser/powerMonitor');

  require('discord_desktop_core/core/app/discord_native/browser/powerSaveBlocker');

  require('discord_desktop_core/core/app/discord_native/browser/processUtils');

  require('discord_desktop_core/core/app/discord_native/browser/settings');

  require('discord_desktop_core/core/app/discord_native/browser/spellCheck');

  require('discord_desktop_core/core/app/discord_native/browser/window');

  Overlay._initializeHostProcess({
    createRenderer: createRenderer,
    destroyRenderer: destroyRenderer
  });

  Overlay._setEventHandler(eventHandler);
});
