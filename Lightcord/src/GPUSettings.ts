// this file is here for two reasons:
// 1. web requires ./GPUSettings file from electron app (bad!), and requires are
//    relative to process.main (bootstrap's index.js)
// 2. GPUSettings has been refactored into GPUSettings, and because we want to
//    be able to update GPUSettings OTA, we will have the core module provide
//    us with the GPUSettings
// so tl;dr this is core module's GPUSettings, providing compat for web

export function replace(GPUSettings) {
  // replacing module.exports directly would have no effect, since requires are cached
  // so we mutate the existing object
  for (const name of Object.keys(GPUSettings)) {
    exports[name] = GPUSettings[name];
  }
};