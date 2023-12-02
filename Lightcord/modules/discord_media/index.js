const native = require('./discord_media.node');

module.exports = {
  getSystemAnalyticsBlob() {
    return new Promise(resolve => native.getSystemAnalyticsBlob(resolve));
  },
};
