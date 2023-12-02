const child_process = require("child_process")
const fs = require("fs")
const path = require("path")

const PROJECT_DIR = path.resolve(__dirname, "..");

const MODULES_DIRNAME = path.join(PROJECT_DIR, "modules")

var exitedWithErrorProcessList = [];

function spawnNpmInstallProcess (targetDir) {
    child_process.spawn((process.platform === "win32" ? "npm.cmd" : "npm"), ["i"], {
        cwd: targetDir,
        env: process.env,
        stdio: "inherit"
    }).on("error", (err) => {
        console.log("Error while running 'npm i' in target directory " + targetDir)
        console.error(err)
        exitedWithErrorProcessList.push(targetDir)
    })
}

fs.readdirSync(MODULES_DIRNAME, {withFileTypes: true})
.forEach(e => {
    if(!e.isDirectory())return
    const MODULE_DIRNAME = path.join(MODULES_DIRNAME, e.name)
    if(!fs.existsSync(path.join(MODULE_DIRNAME, "package.json")))return
    if(e.name === "discord_spellcheck")return
    
    console.log(`Installing modules in ${e.name}.`)
    spawnNpmInstallProcess(MODULE_DIRNAME)
})


const MODULE_DIRNAME = path.join(PROJECT_DIR, "modules", "discord_desktop_core", "core")
const BETTERDISCORD_DIRNAME = path.join(PROJECT_DIR, "BetterDiscordApp")
const DISCORDJS_DIRNAME = path.join(PROJECT_DIR, "DiscordJS")
const LIGHTCORDAPI_DIRNAME = path.join(PROJECT_DIR, "LightcordApi")

spawnNpmInstallProcess(MODULE_DIRNAME)
spawnNpmInstallProcess(BETTERDISCORD_DIRNAME)
spawnNpmInstallProcess(LIGHTCORDAPI_DIRNAME)
spawnNpmInstallProcess(DISCORDJS_DIRNAME)

process.on("beforeExit", () => {
    if (exitedWithErrorProcessList.length != 0){
        console.error("Failed to run 'npm install' on:\n")
        exitedWithErrorProcessList.forEach((val)=>{
            console.error(val)
        });
    }
    console.error();
})