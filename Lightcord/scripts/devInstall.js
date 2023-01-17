//require('dotenv').config()
const { join } = require("path")
const PROJECT_DIRNAME=join(__dirname, "..")
const child_process = require("child_process")

function spawnProcess(cmd, ...args) {
    const postfix = cmd === "node" ? ".exe" : ".cmd"
    cmd = process.platform === "win32" ? cmd + postfix : cmd
    let result = child_process.spawnSync(cmd, args, {
        cwd: PROJECT_DIRNAME,
        env: process.env,
        stdio: "inherit"
    })
    if (result.error){
        console.error("error!")
        console.error(result)
        console.error(result.stderr)
        process.exit(1)
    }

}
spawnProcess("npm", "rm", "electron")
spawnProcess("npm", "i")
const arch = process.platform === "win32" ? "ia32" : "x64"
spawnProcess("npm", "i", "--save-dev", "--arch="+arch, "electron@9")

spawnProcess("node", join(PROJECT_DIRNAME, "scripts", "installSubModules.js"))


console.log("Everything is installed. You should be able to do `npm test` to compile everything and launch.")