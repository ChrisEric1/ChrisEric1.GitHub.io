import * as child_process from "child_process"
import * as path from "path"

const regExe = process.env.SystemRoot ? path.join(process.env.SystemRoot, 'System32', 'reg.exe') : 'reg.exe';

// Spawn a command and invoke the callback when it completes with an error
// and the output from standard out.
export function spawn(command: string, args: child_process.SpawnOptionsWithoutStdio, callback: (arg0: Error, arg1: string) => void) {
  let stdout = '';
  console.log(`[\x1b[33mDEBUG\x1b[0m] Spawning "${command} with args`, args)

  let spawnedProcess: child_process.ChildProcessWithoutNullStreams;
  try {
    // TODO: contrary to below, it should not throw any error
    spawnedProcess = child_process.spawn(command, args);
  } catch (err) {
    // Spawn can throw an error
    process.nextTick(() => {
      if (callback != null) {
        callback(err, stdout);
      }
    });
    return;
  }

  // TODO: we need to specify the encoding for the data if we're going to concat it as a string
  spawnedProcess.stdout.on('data', (data: string) => {
    stdout += data;
  });

  let err = null;
  // TODO: close event might not get called, we should
  //       callback on error https://nodejs.org/api/child_process.html#child_process_event_error
  spawnedProcess.on('error', (err: any) => {
    // TODO: there should always be an error
    if (err != null) {
      err = err;
    }
  });

  // TODO: don't listen to close, but listen to exit instead
  spawnedProcess.on('close', (code: number, signal: any) => {
    if (err === null && code !== 0) {
      err = new Error('Command failed: ' + (signal || code));
    }
    if (err != null) {
      err.code = err.code || code;
      err.stdout = err.stdout || stdout;
    }
    if (callback != null) {
      callback(err, stdout);
    }
  });
}

// Spawn reg.exe and callback when it completes
export function spawnReg(args: any, callback: (arg0: Error, arg1: string) => any) {
  return spawn(regExe, args, callback);
}

// TODO: since we're doing this one by one, we could have a more graceful way of processing the queue
//       rather than mutating the array
export function addToRegistry(queue: any[], callback: () => any) {
  if (queue.length === 0) {
    return callback && callback();
  }

  const args = queue.shift();
  args.unshift('add');
  args.push('/f');
  return spawnReg(args, () => addToRegistry(queue, callback));
}