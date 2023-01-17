const EventEmitter = require('events');
const {CloudSync: CloudSyncNative} = require('./discord_cloudsync_'+process.platform+'.node');

const BACKSLASH_REGEX = /\\/g;
const ID_REGEX = /^[0-9]+$/;
const APPLICATION_STORAGE_ENDPOINT = (applicationId, branchId) =>
  `/applications/${applicationId}/branches/${branchId}/storage`;

const DefaultCloudSyncConfiguration = Object.freeze({
  STORAGE_MANIFEST: (normalizedInstallPath, userId) => `${normalizedInstallPath}/storage/${userId}/MANIFEST`,
  INSTALL_DIR: (normalizedInstallPath) => `${normalizedInstallPath}/content`,
  ROOT_PATTERN: ['**/*'],
  ROOT_STORAGE_PATH: (normalizedInstallPath, userId) => `${normalizedInstallPath}/storage/${userId}/content`,
  ROOT_ID: 'sdk',
  ROOT_PLATFORMS: {
    macos: 'macos',
    windows: 'windows',
    linux: 'linux',
  },
});

let dispatch;

function makeCallback(resolve, reject) {
  return (err, result) => {
    if (err != null && err !== '') {
      reject(new Error(JSON.parse(err)));
    } else {
      resolve(result != null && result !== '' ? JSON.parse(result) : null);
    }
  };
}

function ensureDispatch() {
  if (dispatch != null) {
    return;
  }
  dispatch = DiscordNative.nativeModules.requireModule('discord_dispatch');
}

function normalizePathForCloudSync(installPath) {
  return installPath.replace(BACKSLASH_REGEX, '/');
}

async function generateConfig({userId, userToken, applicationId, branchId, forceHash}) {
  if (!ID_REGEX.test(userId)) {
    throw new Error(`invalid user: ${userId}`);
  }

  const dispatchApplication = dispatch.getLastState().applications[applicationId];
  if (!ID_REGEX.test(applicationId) || dispatchApplication == null) {
    throw new Error(`invalid application: ${applicationId}`);
  }

  const dispatchBranch = dispatchApplication[branchId];
  if (!ID_REGEX.test(branchId) || dispatchBranch == null) {
    throw new Error(`invalid branch: ${branchId}`);
  }

  const normalizedInstallPath = normalizePathForCloudSync(dispatchBranch.install_path);
  const dispatchStorage = dispatchBranch.storage;
  const apiEndpoint = await DiscordNative.http.getAPIEndpoint();

  return {
    forceHash,
    manifestPath: DefaultCloudSyncConfiguration.STORAGE_MANIFEST(normalizedInstallPath, userId),
    roots:
      dispatchStorage.roots != null
        ? dispatchStorage.roots
        : [
            {
              id: DefaultCloudSyncConfiguration.ROOT_ID,
              paths: Object.keys(DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map((platform) => ({
                platform,
                path: DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(normalizedInstallPath, userId),
              })),
              patterns: DefaultCloudSyncConfiguration.ROOT_PATTERN,
            },
          ],
    storage: {
      baseURL: `${apiEndpoint}${APPLICATION_STORAGE_ENDPOINT(applicationId, branchId)}`,
      token: userToken,
    },
    replacements: {
      INSTALLDIR: DefaultCloudSyncConfiguration.INSTALL_DIR(normalizedInstallPath),
      USERID: userId,
      BRANCHID: branchId,
    },
  };
}

// TODO: remove deprecated config support
function upgradeConfig(id, config) {
  const [applicationId, branchId] = id.split(':');
  const {
    forceHash,
    storage: {token: userToken},
    replacements: {USERID: userId},
  } = config;
  return {applicationId, branchId, forceHash, userId, userToken};
}

class CloudSync extends EventEmitter {
  constructor() {
    super();

    this._cloudSync = new CloudSyncNative((state) => this.emit('state', JSON.parse(state)));
  }

  async sync(optionsOrOldId, oldConfig) {
    ensureDispatch();

    let options;
    if (typeof optionsOrOldId === 'string') {
      options = upgradeConfig(optionsOrOldId, oldConfig);
    } else {
      options = optionsOrOldId;
    }

    // TODO: remove deprecated config support
    const config = dispatch.getLastState != null ? await generateConfig(options) : oldConfig;
    const id = dispatch.getLastState != null ? `${options.applicationId}:${options.branchId}` : optionsOrOldId;

    return new Promise((resolve, reject) =>
      this._cloudSync.command(JSON.stringify({type: 'SYNC', id, config}), makeCallback(resolve, reject))
    );
  }
}

function cloudSyncConstructor() {
  const instance = new CloudSync();
  return {
    on: instance.on.bind(instance),
    sync: instance.sync.bind(instance),
  };
}

module.exports = cloudSyncConstructor;
