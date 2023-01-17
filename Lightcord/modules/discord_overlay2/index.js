const Overlay = require('./overlay_module.js');

const isOverlayContext =
  (typeof window !== 'undefined' && window != null && window.__OVERLAY__) ||
  document.getElementById('__OVERLAY__SENTINEL__') != null ||
  /overlay/.test(window.location.pathname);
const isElectronRenderer =
  typeof window !== 'undefined' && window != null && window.DiscordNative && window.DiscordNative.isRenderer;
const features = isElectronRenderer ? window.DiscordNative.features : global.features;

let clickZoneCallback;
let interceptInput = false;
let imeExclusiveFullscreenCallback;
let perfInfoCallback;

// [adill] indicates that the race condition between createHostProcess and connectProcess is fixed. remove ~7/2019.
features.declareSupported('create_host_on_attach');

function eventHandler(pid, event) {
  if (event.message === 'click_zone_event') {
    if (clickZoneCallback) {
      clickZoneCallback(event.name, event.x, event.y);
    }
  } else if (event.message === 'ime_exclusive_fullscreen') {
    if (imeExclusiveFullscreenCallback) {
      imeExclusiveFullscreenCallback();
    }
  } else if (event.message === 'perf_info') {
    if (perfInfoCallback) {
      perfInfoCallback(event.data);
    }
  }
}

Overlay._setEventHandler(eventHandler);

if (isOverlayContext) {
  const {URL} = require('url');
  const url = new URL(window.location);
  const pid = parseInt(url.searchParams.get('pid'));
  Overlay.connectProcess(pid);

  Overlay.rendererStarted = () => {
    Overlay.sendCommand(pid, {message: 'notify_renderer_started'});
  };
}

Overlay.setClickZoneCallback = (callback) => {
  clickZoneCallback = callback;
};
// NOTE: deprecated. Use `sendCommand` instead.
Overlay.setInputLocked = (locked) => {
  interceptInput = !locked;
  const payload = {message: 'intercept_input', intercept: interceptInput};
  Overlay.broadcastCommand(payload);
};
Overlay.setImeExclusiveFullscreenCallback = (callback) => {
  imeExclusiveFullscreenCallback = callback;
};
Overlay.setPerfInfoCallback = (callback) => {
  perfInfoCallback = callback;
};
module.exports = Overlay;
