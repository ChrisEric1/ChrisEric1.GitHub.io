"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRenderer = createRenderer;
exports.destroyRenderer = destroyRenderer;
exports.eventHandler = eventHandler;

var Backoff = require('./Backoff');

var _require = require('electron'),
    BrowserWindow = _require.BrowserWindow,
    _ipcMain = _require.ipcMain;

var Overlay = require('./overlay_module.js');

var _require2 = require('./securityUtils'),
    saferShellOpenExternal = _require2.saferShellOpenExternal;

var path = require('path'); // IPC events must be prefixed with `DISCORD_`


var ipcMain = {
  on: function on(event, callback) {
    return _ipcMain.on("DISCORD_".concat(event), callback);
  },
  removeListener: function removeListener(event, callback) {
    return _ipcMain.removeListener("DISCORD_".concat(event), callback);
  }
};
ipcMain.on('OPEN_EXTERNAL_URL', function (e, externalUrl) {
  saferShellOpenExternal(externalUrl);
});

function webContentsSend(win, event) {
  if (win != null && win.webContents != null) {
    var _win$webContents;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    (_win$webContents = win.webContents).send.apply(_win$webContents, ["DISCORD_".concat(event)].concat(args));
  }
}

var renderers = {};
var accelerators = {
  Z: 'undo',
  Y: 'redo',
  X: 'cut',
  C: 'copy',
  V: 'paste',
  A: 'selectAll'
};

function handleAccelerators(contents, event) {
  if (event['type'] !== 'keyDown') {
    return false;
  }

  if (!event['modifiers'] || !event['modifiers'].includes('control')) {
    return false;
  }

  var fname = accelerators[event['keyCode']];

  if (!fname) {
    return false;
  }

  var fn = contents[fname];

  if (!fn) {
    return false;
  }

  fn.apply(contents);
  return true;
}

function createRenderer(pid, url) {
  if (renderers[pid]) {
    return;
  }

  var _require3 = require('url'),
      URL = _require3.URL;

  var urlWithPid = new URL(url);
  urlWithPid.searchParams.append('pid', pid.toString());
  url = urlWithPid.toString();
  renderers[pid] = {
    pid: pid,
    url: "file://".concat(__dirname, "/start.html?pid=").concat(pid.toString()),
    overlayURL: url,
    backoff: new Backoff(1000, 30000),
    window: new BrowserWindow({
      show: false,
      skipTaskbar: true,
      webPreferences: {
        offscreen: true,
        transparent: true,
        nodeIntegration: false,
        preload: require.resolve('discord_desktop_core/core/app/mainScreenPreload.js'),
        enableRemoteModule: false,
        contextIsolation: true
      }
    })
  };
  var renderer = renderers[pid];
  Overlay.connectProcess(pid);

  if (renderer.window.webContents._setDiscordOverlayProcessId) {
    renderer.window.webContents._setDiscordOverlayProcessId(pid);
  } // "paint" event will be skipped if direct frame delivery is enabled.


  renderer.window.webContents.on('crashed', function (e, killed) {
    Overlay.logMessage("Overlay for pid ".concat(renderer.pid, " crashed").concat(killed ? ' (killed)' : ''));
    Overlay.sendCommand(renderer.pid, {
      message: 'relay',
      _relay: 'renderer_crashed'
    });
    destroyRenderer(pid);
  });
  renderer.window.webContents.on('console-message', function (_event, _level, message, _line_no, _source_id) {
    Overlay.logMessage("OverlayRenderer[".concat(pid, "]: ").concat(message));
  });
  renderer.window.webContents.on('paint', function (_event, _dirty, image, _legacy_width, _legacy_height) {
    // [adill] support electron <=1.8.4 which sent a (buffer, width, height) instead of (image)
    if (Buffer.isBuffer(image)) {
      var width = _legacy_width;
      var height = _legacy_height;
      Overlay.sendFramebuffer(renderer.pid, image, width, height);
      return;
    }

    Overlay.sendFramebuffer(renderer.pid, image.getBitmap(), image.getSize().width, image.getSize().height);
  });
  renderer.window.webContents.on('new-window', function (e, url) {
    e.preventDefault();
    webContentsSend(renderer.window, 'REQUEST_OPEN_EXTERNAL_URL', url);
  });
  renderer.window.loadURL(renderer.url);
}

function loadOverlay(pid) {
  var renderer = renderers[pid];

  if (renderer == null) {
    return;
  }

  if (renderer.url === renderer.overlayURL) {
    return;
  }

  renderer.window.webContents.on('cursor-changed', function (_event, type) {
    var cursor;

    switch (type) {
      case 'default':
        cursor = 'IDC_ARROW';
        break;

      case 'pointer':
        cursor = 'IDC_HAND';
        break;

      case 'crosshair':
        cursor = 'IDC_CROSS';
        break;

      case 'text':
        cursor = 'IDC_IBEAM';
        break;

      case 'wait':
        cursor = 'IDC_WAIT';
        break;

      case 'help':
        cursor = 'IDC_HELP';
        break;

      case 'move':
        cursor = 'IDC_SIZEALL';
        break;

      case 'ns-resize':
        cursor = 'IDC_SIZENS';
        break;

      case 'ew-resize':
        cursor = 'IDC_SIZEWE';
        break;

      case 'nwse-resize':
        cursor = 'IDC_SIZENWSE';
        break;

      case 'nesw-resize':
        cursor = 'IDC_SIZENESW';
        break;

      case 'none':
        cursor = '';
        break;
    }

    if (cursor) {
      Overlay.sendCommand(renderer.pid, {
        message: 'set_cursor',
        cursor: cursor
      });
    }
  });
  renderer.window.webContents.on('start-drag', function (_event, image, offset) {
    Overlay.sendCommand(renderer.pid, {
      message: 'set_drag_state',
      dragging: true,
      image: image.getBitmap().toJSON().data,
      size: image.getSize(),
      offset: offset
    });
  });
  renderer.window.webContents.on('stop-drag', function (_event) {
    Overlay.sendCommand(renderer.pid, {
      message: 'set_drag_state',
      dragging: false
    });
  });
  renderer.window.webContents.on('ime-composition-range-changed', function (_event, start, end, bounds) {
    Overlay.sendCommand(renderer.pid, {
      message: 'ime_composition_range_changed',
      start: start,
      end: end,
      bounds: bounds
    });
  });
  renderer.window.webContents.on('selection-bounds-changed', function (_event, anchor, focus, isAnchorFirst) {
    Overlay.sendCommand(renderer.pid, {
      message: 'ime_selection_bounds_changed',
      anchor: anchor,
      focus: focus,
      isAnchorFirst: isAnchorFirst
    });
  });
  renderer.window.webContents.on('did-fail-load', function (e, errCode, errDesc, validatedURL) {
    if (validatedURL !== renderer.url) {
      Overlay.logMessage("Failed non-overlay URL load (".concat(validatedURL, ") with code ").concat(errCode, " and description ").concat(errDesc));
      return;
    }

    Overlay.logMessage("Failed overlay URL load (".concat(validatedURL, ") with code ").concat(errCode, " and description ").concat(errDesc));
    Overlay.sendCommand(renderer.pid, {
      message: 'relay',
      _relay: 'renderer_load_failed'
    });
    renderer.backoff.fail(function () {
      Overlay.logMessage("Retrying overlay URL load ".concat(renderer.url));
      renderer.window.loadURL(renderer.url);
    });
  });
  renderer.window.webContents.on('did-finish-load', function () {
    if (renderer.window.webContents.getURL() === renderer.overlayURL) {
      renderer.window.focusOnWebView();
      renderer.backoff.succeed();
      Overlay.logMessage('Overlay is ready to show');
      renderer.window.webContents.invalidate(); // NB: allow a short window for repainting to ameliorate white-screen flashes some users experience.
      // see https://github.com/electron/electron/pull/25448 for context as to why we aren't using
      // `ready-to-show` -- tl;dr: it is not consistent and the hack fix in electron only "fixes"
      // the event on the first page load. we load `start.html` as a canary test *before* loading the
      // overlay url and, thusly, miss `ready-to-show` on some systems / chromium versions.

      setTimeout(function () {
        Overlay.sendCommand(renderer.pid, {
          message: 'relay',
          _relay: 'ready_to_show'
        });
      }, 200);
    }
  });

  if (renderer.window.webContents.sendImeEvent) {
    Overlay.sendCommand(renderer.pid, {
      message: 'notify_ime_supported'
    });
  }

  renderer.url = renderer.overlayURL;
  renderer.window.loadURL(renderer.url);
}

function destroyRenderer(pid) {
  var renderer = renderers[pid];

  if (renderer == null) {
    return;
  }

  Overlay.disconnectProcess(pid);

  if (renderer.backoff) {
    renderer.backoff.cancel();
  }

  if (renderer.window && !renderer.window.isDestroyed()) {
    renderer.window.destroy();
  }

  delete renderers[pid];
}

function needsTranslation(event) {
  return 'msg' in event || !'type' in event;
}

function eventHandler(pid, event) {
  var renderer = renderers[pid];

  if (renderer == null || renderer.window == null || renderer.window.isDestroyed()) {
    return;
  }

  var _screen = require('electron').screen;

  if (event.message === 'graphics_info') {
    if (event.width > 0 && event.height > 0) {
      Overlay.logMessage("Resizing overlay renderer to ".concat(event.width, "x").concat(event.height));

      if (global.features.supports('overlay-hidpi')) {
        var screenRect = {
          x: 0,
          y: 0,
          width: event.width,
          height: event.height
        };

        var dipRect = _screen.screenToDipRect(renderer.window, screenRect);

        renderer.window.setContentSize(dipRect.width, dipRect.height);
      } else {
        renderer.window.setContentSize(event.width, event.height);
      }

      renderer.window.webContents.setFrameRate(60);
    } else {
      renderer.window.webContents.setFrameRate(1);
    }

    renderer.window.webContents.invalidate();
  } else if (event.message === 'input_event') {
    renderer.window.focusOnWebView();
    var translated = needsTranslation(event) ? Overlay.translateInputEvent(event) : event;

    if (translated) {
      if (!handleAccelerators(renderer.window.webContents, translated)) {
        if (global.features.supports('overlay-hidpi') && translated.x && translated.y) {
          var dipPoint = _screen.screenToDipPoint({
            x: translated.x,
            y: translated.y
          });

          translated.x = dipPoint.x;
          translated.y = dipPoint.y;
        }

        renderer.window.webContents.sendInputEvent(translated);
      }
    }
  } else if (event.message === 'renderer_started') {
    Overlay.logMessage("Overlay renderer for ".concat(pid, " started successfully."));
    renderer.started = true;

    if (!renderer.first_framebuffer) {
      renderer.window.webContents.invalidate();
    } else {
      loadOverlay(pid);
    }
  } else if (event.message === 'first_framebuffer') {
    renderer.first_framebuffer = true;

    if (renderer.started) {
      loadOverlay(pid);
    }
  } else if (event.message === 'ime') {
    renderer.window.webContents.sendImeEvent(event);
  }
}
