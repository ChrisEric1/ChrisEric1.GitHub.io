const { mkdirSync, existsSync } = require("fs")
const { join, resolve } = require("path")
const child_process = require("child_process")

const spawn = (...args) => {
    if(process.platform === "win32")args[0] += ".cmd"
    return child_process.spawn(...args)
}

const PROJECT_DIR = resolve(__dirname, "..");
/** Main Project */
spawnSync("tsc", PROJECT_DIR)
/** BetterDiscord */
if (!existsSync(join(PROJECT_DIR, "BetterDiscordApp", "dist"))){
    mkdirSync(join(PROJECT_DIR, "BetterDiscordApp", "dist"))
}
spawnSync("npm run build", join(PROJECT_DIR, "BetterDiscordApp"))
spawnSync("npm run build-prod", join(PROJECT_DIR, "BetterDiscordApp"))
spawnSync("npm run minify-css", join(PROJECT_DIR, "BetterDiscordApp"))
/** DiscordJS */
spawnSync("npm run build", join(PROJECT_DIR, "DiscordJS"))
/** LightcordApi */
spawnSync("npm run build", join(PROJECT_DIR, "LightcordApi"))
spawnSync("npm run build-prod", join(PROJECT_DIR, "LightcordApi"))
spawnSync("tsc", join(PROJECT_DIR, "LightcordApi"))

var exitedWithErrorProcessList = [];

function spawnSync(cmdString, cwd){
    let args = cmdString.split(" ")
    let command = args.shift()
    return spawn(command, args, {
        cwd: cwd || process.cwd(),
        env: process.env,
        stdio: "inherit"
    }).on("error", (err) => {
        const DIRSTRING = cwd || process.env.PWD
        console.error("Error while running " + cmdString + " in target directory " + DIRSTRING)
        console.error(err)
        exitedWithErrorProcessList.push({cmd: cmdString, cwd: DIRSTRING, err: err})
    })    
}

process.on("beforeExit", () => {
    if (exitedWithErrorProcessList.length != 0){
        console.error("Commands exited with errors:\n")
        exitedWithErrorProcessList.forEach((val)=>{
            console.error("\tcommand:\t\t" + val.cmd + "\n\ttarget directory:\t" + val.cwd + "\n")
            console.error(val.err)
        });
    }
    console.log(`Exiting compilation`)
})