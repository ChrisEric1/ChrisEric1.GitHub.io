const fetch = require("node-fetch")
const yauzl = require("yauzl")
const tmp = require("tmp")
const fs = require("fs")
const util = require('util')
const { join, dirname } = require("path")
const { resolve: resolvePath } = require("path")
const streamPipeline = util.promisify(require('stream').pipeline)

const PROJECT_DIR = resolvePath(__dirname, "..");

const API_URL = "https://discord.com/api"
const branch = "stable"
const platforms = ["win", "linux", "osx"]
const platformsNormalized = {
    win: "win32",
    linux: "linux",
    osx: "darwin"
}

const manuallyDownloads = []
const patchedJS = []

;(async function(){
    for(let platform of platforms){
        console.log(`[\x1b[32mINFO\x1b[0m] Downloading modules for ${platform} (${branch})`)
        const version = await fetch(`${API_URL}/updates/${branch}?platform=${platform}`)
            .then(res => res.json()).then(res => res.name)
        console.log(`[\x1b[32mINFO\x1b[0m] Obtained version ${version} (${platform})`)
        const modules = await fetch(`${API_URL}/modules/${branch}/versions.json?host_version=${version}&platform=${platform}`)
            .then(res => res.json())
        console.log(`[\x1b[32mINFO\x1b[0m] Downloading ${Object.keys(modules).length} modules.`)
        for(const module in modules){
            if(["discord_desktop_core"].includes(module))continue
            const moduleVersion = modules[module]
            console.log(`[\x1b[32mINFO\x1b[0m] Downloading ${module} v${moduleVersion}.`)
            const file = tmp.fileSync({
                prefix: module+"-",
                postfix: ".zip"
            })
            const res = await fetch(`${API_URL}/modules/${branch}/${module}/${moduleVersion}?platform=${platform}&host_version=${version}`, {
                redirect: "follow"
            })
            if(res.status !== 200)throw new Error(`res.status !== 200. ${res.status} ${module} v${moduleVersion} ${branch} ${platform}`)
            await streamPipeline(res.body, fs.createWriteStream(file.name))
            /**
             * @type {yauzl.ZipFile}
             */
            const zipFile = await new Promise((resolve, reject) => {
                yauzl.open(file.name, {lazyEntries: true, autoClose: true}, (err, zip) => {
                    if(err)return reject(err)
                    resolve(zip)
                })
            })
            const modulePath = join(PROJECT_DIR, "modules", module)
            const exists = fs.existsSync(modulePath)
            let hasNode = false
            let hasBinaries = ["discord_hook", "discord_modules"].includes(module)
            let hasNativeDependencies = ["discord_voice", "discord_krisp"].includes(module)
            if(!exists){
                console.warn(`[\x1b[33mWARN\x1b[0m] Downloading whole module because it doesn't exists in your files.`)
                fs.mkdirSync(modulePath)
            }
            await new Promise((resolve) => {
                zipFile.readEntry()
                zipFile.on("entry", function(entry) {
                    const fileName = entry.fileName.toString("utf8")
                    if(fileName.endsWith("/")){
                        const folderPath = join(modulePath, fileName)
                        if(!fs.existsSync(folderPath))fs.mkdirSync(folderPath, {recursive: true})
                        zipFile.readEntry();
                    }else{
                        if(!exists){
                            const filePath = join(modulePath, fileName)
                            zipFile.openReadStream(entry, function(err, readStream) {
                                if (err) throw err;
                                readStream.on("end", function() {
                                    setTimeout(() => {
                                        let content = fs.readFileSync(filePath, "utf-8")
                                        let hasChanged = false
                                        if(content.includes(module+".node")){
                                            content = content.replace(createRegexp(`${module}.node`), `${module}_'+process.platform+'.node`)
                                            hasChanged = true
                                        }
                                        if(content.includes(".asar")){
                                            content = content.replace(createRegexp(`.asar`), ``)
                                            hasChanged = true
                                        }
                                        if(hasChanged)fs.writeFileSync(filePath, content)
                                    }, 10);
                                });
                                readStream.pipe(fs.createWriteStream(filePath));
                            });
                        }else{
                            let filePath = join(modulePath, fileName)
                            if(filePath.endsWith(".asar"))return zipFile.readEntry();
                            if(fileName.endsWith(".node")){
                                hasNode = true
                                filePath = filePath.replace(".node", "_"+platformsNormalized[platform]+".node")
                                extractFile()
                            }else if(join(filePath, "..") === modulePath && filePath.endsWith(".js")){
                                if(patchedJS.includes(filePath))return zipFile.readEntry();
                                patchedJS.push(filePath)
                                extractFile(() => {
                                    setTimeout(() => {
                                        let content = fs.readFileSync(filePath, "utf-8")
                                        let hasChanged = false
                                        if(content.includes(module+".node")){
                                            content = content.replace(createRegexp(`${module}.node`), `${module}_'+process.platform+'.node`)
                                            hasChanged = true
                                        }
                                        if(content.includes(".asar")){
                                            content = content.replace(createRegexp(`.asar`), ``)
                                            hasChanged = true
                                        }
                                        if(hasChanged)fs.writeFileSync(filePath, content)
                                    }, 10);
                                })
                            }else if(hasBinaries && ["exe", "dll"].map(e => {
                                return filePath.endsWith("."+e)
                            }).includes(true)){ // binaries
                                extractFile()
                            }else if(hasNativeDependencies && ["so.4", "dll", "dylib", "thw"].map(e => {
                                return filePath.endsWith("."+e)
                            }).includes(true)){
                                extractFile()
                            }else{
                                zipFile.readEntry();
                            }
                            async function extractFile(onEnd){
                                const dir = dirname(filePath)
                                if(!fs.existsSync(dir))await fs.promises.mkdir(dir, {recursive: true})
                                zipFile.openReadStream(entry, function(err, readStream) {
                                    if(err)throw err;
                                    readStream.on("end", function() {
                                        if(onEnd)onEnd()
                                        zipFile.readEntry();
                                    }).on("error", (err) => {
                                        zipFile.close()
                                        console.error(err)
                                        console.error(`[\x1b[31mERROR\x1b[0m] Skipping files because of error.`)
                                        console.error(`[\x1b[31mERROR\x1b[0m] Please download manually. ${API_URL}/modules/${branch}/${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                                        resolve()
                                        zipFile.readEntry();
                                        manuallyDownloads.push(`${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                                    })
                                    try{
                                        readStream.pipe(fs.createWriteStream(filePath));
                                    }catch(err){
                                        zipFile.close()
                                        console.error(err)
                                        console.error(`[\x1b[31mERROR\x1b[0m] Skipping files because of error.`)
                                        console.error(`[\x1b[31mERROR\x1b[0m] Please download manually. ${API_URL}/modules/${branch}/${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                                        resolve()
                                        zipFile.readEntry();
                                        manuallyDownloads.push(`${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                                    }
                                });
                            }
                        }
                    }
                }).on("end", () => resolve())
                .on("error", (err) => {
                    zipFile.close()
                    console.error(err)
                    console.error(`\x1b[31mERROR\x1b[0m] Skipping files because of error.`)
                    console.error(`\x1b[31mERROR\x1b[0m] Please download manually. ${API_URL}/modules/${branch}/${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                    manuallyDownloads.push(`${module}/${moduleVersion}?platform=${platform}&host_version=${version}`)
                })
            })
            if(hasNode){
                console.log(`[\x1b[32mINFO\x1b[0m] .node files are now in ${module}.`)
            }
        }
    }
    if(manuallyDownloads.length > 0){
        console.error(`[\x1b[31mERROR\x1b[0m] Couldn't download some modules. Manual links:`)
        manuallyDownloads.forEach(console.log)
    }
})()

function createRegexp(str){
    return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "g")
}