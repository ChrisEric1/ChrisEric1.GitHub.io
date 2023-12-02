"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: sync fs operations could cause slowdown and/or freezes, depending on usage
//       if this is fine, remove this todo
class Settings {
  constructor(root) {
    this.path = _path.default.join(root, 'settings.json');

    try {
      this.lastSaved = _fs.default.readFileSync(this.path);
      this.settings = JSON.parse(this.lastSaved);
    } catch (e) {
      this.lastSaved = '';
      this.settings = {};
    }

    this.lastModified = this._lastModified();
  }

  _lastModified() {
    try {
      return _fs.default.statSync(this.path).mtime.getTime();
    } catch (e) {
      return 0;
    }
  }

  get(key, defaultValue = false) {
    if (this.settings.hasOwnProperty(key)) {
      return this.settings[key];
    }

    return defaultValue;
  }

  set(key, value) {
    this.settings[key] = value;
  }

  save() {
    if (this.lastModified && this.lastModified !== this._lastModified()) {
      console.warn('Not saving settings, it has been externally modified.');
      return;
    }

    try {
      const toSave = JSON.stringify(this.settings, null, 2);

      if (this.lastSaved != toSave) {
        this.lastSaved = toSave;

        _fs.default.writeFileSync(this.path, toSave);

        this.lastModified = this._lastModified();
      }
    } catch (err) {
      console.warn('Failed saving settings with error: ', err);
    }
  }

}

exports.default = Settings;
module.exports = exports.default;