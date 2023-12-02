"use strict";

var Overlay = require('./discord_overlay2_'+process.platform+'.node'); // [adill] when the module was converted to use N-API we lost the ability to
// parse json into javascript objects trivially so our event handler simply
// returns event json


if (!Overlay._setEventHandler && Overlay._setEventHandlerJson) {
  Overlay._setEventHandler = function (handler) {
    var wrappedHandler = function wrappedHandler(pid, eventJson) {
      var event = JSON.parse(eventJson);
      handler(pid, event);
    };

    Overlay._setEventHandlerJson(wrappedHandler);
  };
} // [adill] when the module was converted to use N-API we lost the ability to
// stringify javascript objects into json trivially sendCommand and
// broadcastCommand were removed and replaced with {}Json variants that accept
//  command json


if (!Overlay.sendCommand && Overlay.sendCommandJson) {
  Overlay.sendCommand = function (pid, command) {
    Overlay.sendCommandJson(pid, JSON.stringify(command));
  };
}

if (!Overlay.broadcastCommand && Overlay.broadcastCommandJson) {
  Overlay.broadcastCommand = function (command) {
    Overlay.broadcastCommandJson(JSON.stringify(command));
  };
}

module.exports = Overlay;
