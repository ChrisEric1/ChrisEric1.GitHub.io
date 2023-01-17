// Imported from main Discord package. 

import * as fs from "fs"
import * as path from "path"

// TODO: sync fs operations could cause slowdown and/or freezes, depending on usage
//       if this is fine, remove this todo
export default class Settings {
  path: string;
  lastSaved: string;
  settings: any;
  lastModified: number;
  constructor(root:string) {
    this.path = path.join(root, 'settings.json');
    try {
      this.lastSaved = fs.readFileSync(this.path, "utf8");
      this.settings = JSON.parse(this.lastSaved);
    } catch (e) {
      this.lastSaved = '';
      this.settings = {};
    }
    this.lastModified = this._lastModified();
  }

  _lastModified() {
    try {
      return fs.statSync(this.path).mtime.getTime();
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

  delete(key){
    delete this.settings[key]
  }

  exists(key){
    return key in this.settings
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
        fs.writeFileSync(this.path, toSave, "utf8");
        this.lastModified = this._lastModified();
      }
    } catch (err) {
      console.warn('Failed saving settings with error: ', err);
    }
  }
}
