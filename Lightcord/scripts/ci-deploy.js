const package = require("../package.json")
const child_process = require("child_process")

const version = package.version+"-"+Date.now()+ "-" + child_process.execSync("git rev-parse HEAD").toString().split("\n")[0].trim().slice(0, 7)

child_process.execSync("git tag "+version)

console.log(`Set up tag as ${version}`)