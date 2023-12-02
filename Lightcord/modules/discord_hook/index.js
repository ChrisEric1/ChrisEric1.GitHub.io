const hook = require('./discord_hook_'+process.platform+'.node');
const fs = require('fs');
const path = require('path');

let dataDirectory;

try {
  dataDirectory = window.DiscordNative.fileManager.getModuleDataPathSync
    ? path.join(window.DiscordNative.fileManager.getModuleDataPathSync(), 'discord_hook')
    : null;
} catch (e) {
  console.error('Failed to get data directory: ', e);
}

if (dataDirectory != null) {
  try {
    fs.mkdirSync(dataDirectory, {recursive: true});
  } catch (e) {
    console.warn("Couldn't create hook data directory ", dataDirectory, ':', e);
  }
}

hook.initialize({dataDirectory});
module.exports = hook;
