/** settings */
import appSettings from "./appSettings";
let settings = appSettings.getSettings();

/** Glasstron */
if (settings.get("GLASSTRON", true))require("glasstron");

/** Modules */
import * as electron from "electron";
import requireNativeDiscordModule from "./requireNative";
import autoStart from "./autoStart";
import * as buildInfo from "./buildInfo";
import * as Constants from "./Constants";
import * as GPUSettings from "./GPUSettings";
import * as moduleUpdater from "./common/moduleUpdater";
import * as paths from "./common/paths";
import * as splashScreen from "./splashScreen";
import { join } from "path";
import { homedir } from "os";

if (process.platform === "linux") {
	// Some people are reporting audio problems on Linux that are fixed by setting
	// an environment variable PULSE_LATENCY_MSEC=30 -- the "real" fix is to see
	// what conditions require this and set this then (also to set it directly in
	// our webrtc setup code rather than here) but this should fix the bug for now.
	if (process.env.PULSE_LATENCY_MSEC === undefined) {
		process.env.PULSE_LATENCY_MSEC = "30";
	}
}

paths.init(buildInfo);
electron.app.commandLine.appendSwitch(
	"autoplay-policy",
	"no-user-gesture-required"
);
electron.app.commandLine.appendSwitch("no-force-async-hooks-checks");
electron.app.commandLine.appendSwitch("enable-transparent-visuals");

function setupHardwareAcceleration() {
	const settings = appSettings.getSettings();
	// TODO: this is a copy of gpuSettings.getEnableHardwareAcceleration
	if (!settings.get("enableHardwareAcceleration", true)) {
		electron.app.disableHardwareAcceleration();
	}
}

electron.app.allowRendererProcessReuse = false;

global["releaseChannel"] = "stable";

setupHardwareAcceleration();
function hasArgvFlag(flag) {
	return (process.argv || []).slice(1).includes(flag);
}

//Transform main thread into async
(async function Main() {
	await electron.app.whenReady();

	if (process.argv.includes("--should-create-shortcut")) {
		console.log(`Creating shortcuts.`);
		if (process.platform === "win32") {
			let options = {
				appUserModelId: Constants.APP_ID,
				description: Constants.packageJSON.description,
				target: process.execPath,
			}
			electron.shell.writeShortcutLink(
				join(homedir(), "Desktop", "Lightcord.lnk"),
				"create",
				options
			);
			electron.shell.writeShortcutLink(
				join(
					electron.app.getPath("appData"),
					"Microsoft",
					"Windows",
					"Start Menu",
					"Programs",
					"Lightcord.lnk"
				),
				"create",
				options
			);
			autoStart.isInstalled((installed) => {
				if(installed)return
				autoStart.install(console.log)
			})
		}
	}

	console.log(`Initializing Lightcord.`);
	console.log(`Version: ${buildInfo.version}
releaseChannel: ${buildInfo.releaseChannel}
commit: ${buildInfo.commit}`);

  	electron.app.setAppUserModelId(Constants.APP_ID);
  
	let coreModule;

	const isFirstInstance = electron.app.requestSingleInstanceLock();
	const allowMultipleInstances = hasArgvFlag("--multi-instance");
	if (!isFirstInstance && !allowMultipleInstances) {
		electron.app.quit();
		return
	}

	if (!allowMultipleInstances) {
		electron.app.on("second-instance", (_event, args, _workingDirectory) => {
			if(args && args[1] === "--overlay-host"){
				// this is a patch for Lightcord that focus itself when the user is playing a game.
				//console.warn("OVERLAY HOST DÉTECTÉ. EVENNEMENT IGNORÉ MAIS POURRAIT CAUSER UN PROBLÈME.")
				return;
			}
			
			if (coreModule) {
				coreModule.handleOpenUrl(args);
			}
		});
	}

	const startMinimized = hasArgvFlag("--start-minimized");

	coreModule = requireNativeDiscordModule("discord_desktop_core");
	coreModule.startup({
		paths,
		splashScreen,
		moduleUpdater,
		autoStart,
		buildInfo,
		appSettings,
		Constants,
		GPUSettings,
	});

	coreModule.setMainWindowVisible(!startMinimized);
})();
