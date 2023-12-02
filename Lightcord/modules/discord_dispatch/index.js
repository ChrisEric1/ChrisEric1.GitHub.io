const {Dispatch: DispatchNative} = require('./discord_dispatch_'+process.platform+'.node');

let lastState = null;

function dispatchConstructor(jsonConfigString, updateCallback, errorCallback, analyticsCallback) {
  const instance = new DispatchNative(
    jsonConfigString,
    (state) => {
      lastState = JSON.parse(state);
      updateCallback(state);
    },
    errorCallback,
    analyticsCallback
  );
  return {
    command: instance.command.bind(instance),
    destroy: (...args) => {
      instance.destroy(...args);
      lastState = null;
    },
  };
}

module.exports = {Dispatch: dispatchConstructor, getLastState: () => lastState};
