const child_process = require("child_process")
const path = require("path")
const { existsSync, promises: fsPromises, createWriteStream } = require("fs")
const yazl = require("yazl")

const PROJECT_DIR = path.resolve(__dirname, "..");

const supportedPlatforms = []
const Platforms = {
    linux: {
        name: "linux",
        run: () => {
            return awaitExec("npm", ["run", "build:electron_linux"])
        }
    },
    win: {
        name: "win",
        run: () => {
            return awaitExec("npm", ["run", "build:electron_win"])
        }
    },
    mac: {
        name: "mac",
        run: () => {
            return awaitExec("npm", ["run", "build:electron_mac"])
        }
    },
    mac_experimental: {
        name: "mac",
        experimental: true,
        run: async () => {
            const basePath = path.join(PROJECT_DIR, "..", "lightcord-darwin-x64")
            const nextPath = path.join(PROJECT_DIR, "builds", "lightcord-darwin-x64")
            if(existsSync(nextPath)){
                console.log(`Cleaning ${nextPath}.`)
                await fsPromises.rmdir(nextPath, {recursive: true})
            }
            console.log(`Copying files from ${basePath}.`)
            let nextDir = async (pth) => {
                const newPath = pth.replace(basePath, nextPath)
                await fsPromises.mkdir(newPath)
                for(let file of await fsPromises.readdir(pth, {withFileTypes: true})){
                    const filePath = path.join(pth, file.name)
                    const newFilePath = path.join(newPath, file.name)
                    if(file.isFile()){
                        await fsPromises.copyFile(filePath, newFilePath)
                    }else if(file.isDirectory()){
                        await nextDir(filePath)
                    }
                }
            }
            await nextDir(basePath)
            console.log(`Files are copied. Erasing current bundle if existing.`)
            const asarPath = path.join(nextPath, "lightcord.app", "Contents", "Resources", "app.asar")
            if(existsSync(asarPath))await fsPromises.unlink(asarPath)
            const asarUnpackPath = path.join(nextPath, "lightcord.app", "Contents", "Resources", "app.asar.unpacked")
            if(existsSync(asarUnpackPath))await fsPromises.rmdir(asarUnpackPath, {recursive: true})
            const asar = require("asar")
            await asar.createPackageWithOptions(path.join(PROJECT_DIR, "distApp"), asarPath, {
                unpack: "*.{node,dylib,so.4,dll}",
                unpackDir: asarUnpackPath
            })
            const iconPath = path.join(PROJECT_DIR, "discord.icns")
            if(existsSync(iconPath)){
                console.log(`Setting icon.`)
                const newIconPath = path.join(nextPath, "lightcord.app", "Contents", "Resources", "electron.icns")
                await fsPromises.copyFile(iconPath, newIconPath)
            }
            console.log("zipping")
            const zip = new yazl.ZipFile();
            zip.outputStream.pipe(createWriteStream(path.join(PROJECT_DIR, "builds", "lightcord-darwin-x64.zip")))
            .on("close", function() {
                console.log("Finished zipping.");
            });
            const startDir = path.join(PROJECT_DIR, "builds", "lightcord-darwin-x64")
            async function nextDir2(dir){
                for(let file of await fsPromises.readdir(dir, {withFileTypes: true})){
                    if(file.isDirectory()){
                        await nextDir2(path.join(dir, file.name))
                    }else if(file.isFile()){
                        zip.addFile(path.join(dir, file.name), path.relative(startDir, path.join(dir, file.name)))
                    }
                }
            }
            await nextDir2(startDir)
            zip.end();
        }
    }
}

switch(process.platform){
    case "win32":
        supportedPlatforms.push(Platforms.win)
        supportedPlatforms.push(Platforms.linux)
        if(existsSync(path.join(PROJECT_DIR, "..", "lightcord-darwin-x64"))){
            supportedPlatforms.push(Platforms.mac_experimental)
        }
        break
    case "linux":
        supportedPlatforms.push(Platforms.linux)
        if(existsSync(path.join(PROJECT_DIR, "..", "lightcord-darwin-x64"))){
            supportedPlatforms.push(Platforms.mac_experimental)
        }
        break
    case "darwin":
        supportedPlatforms.push(Platforms.mac)
        supportedPlatforms.push(Platforms.linux)
        break
}

(async function(){
    console.log(`[\x1b[33mINFO\x1b[0m] Will build platforms \x1b[34m${supportedPlatforms.map(e => e.name).join("\x1b[0m, \x1b[34m")}\x1b[0m`)
    for(let platform of supportedPlatforms){
        console.log(`[\x1b[33mINFO\x1b[0m] Building platform ${platform.name}`)
        if(platform.experimental)console.warn(`[\x1b[33mWARN\x1b[0m] This platform is experimental`)
        await platform.run()
    }
})().catch(err => {
    console.error(`Couldn't package app for electrons. Error:`, err)
})

function awaitExec(command, args = []){
    return new Promise((resolve, reject) => {
        if(process.platform === "win32")command += ".cmd"
        const child = child_process.spawn(command, args, {
            env: process.env,
            cwd: process.cwd(),
            stdio: "inherit"
        })
        child.on("close", (code) => {
            console.log()
            console.log()
            console.log(`Command ${command}${args.length > 0 ? " " + args.join(" ") : ""} ended with code ${code}.`)
            if(code !== 0){
                console.error("\x1b[31mFAILURE\x1b[0m Command failed. See logs above.")
                return reject(code)
            }
            resolve()
        })
    })
}
