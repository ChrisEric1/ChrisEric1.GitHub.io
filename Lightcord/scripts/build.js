const child_process = require("child_process")
const path = require("path")
const terser = require("terser")
const util = require("util")

const production = true
const includeSourcesMaps = true

let fs = require("fs")

exports.default = async function beforeBuild(context){
    await main()
    return true
}
const PROJECT_DIR = path.resolve(__dirname, "..");

console.log = (...args) => {
    process.stdout.write(Buffer.from(util.formatWithOptions({colors: true}, ...args)+"\n", "binary").toString("utf8"))
}
console.info = (...args) => {
    console.log(`\x1b[34m[INFO]\x1b[0m`, ...args)
}
let commit = child_process.execSync("git rev-parse HEAD").toString().split("\n")[0].trim()
console.info(`Obtained commit ${commit} for the build`)
    
async function processNextDir(folder, folders, predicate, compile, ignoreModules){
    if(typeof ignoreModules === "undefined")ignoreModules = false
    let files = fs.readdirSync(folder, {withFileTypes: true})
    for(let file of files){
        if(file.isFile()){
            let isMinified = file.name.endsWith(".min.js") || file.name.endsWith(".min.css")
            let filepath = path.join(folder, file.name)
            let type = file.name.split(".").pop().toLowerCase()
            if(type === file.name)type = ""
            if([
                "ts",
                "md",
                "gitignore",
                "map"
            ].includes(type)){
                console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because of type ${type}\x1b[0m`)
                continue
            }
            if([
                "tsconfig.json",
                "webpack.config.js"
            ].includes(file.name)){
                console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because of name ${file.name}\x1b[0m`)
                continue
            }
            if(folders.exclude && folders.exclude.test(filepath)){
                console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because regex\x1b[0m`)
                continue
            } 
            let hasMinifiedVersion = (type === "js" || type === "css") && !isMinified && files.find(f => {
                return f.name === file.name.split(".").slice(0, -1).join(".")+".min."+type
            })
            if(hasMinifiedVersion){
                console.warn(`\x1b[33mIgnored file ${path.relative(folders.startDir, filepath)} because it has a minified version.\x1b[0m`)
                continue
            }  
            if(!isMinified && predicate(filepath) && filepath.split(/[\\/]+/).reverse()[1] !== "js"){
                await compile(filepath, path.join(filepath.replace(folders.startDir, folders.newDir)), "..")
            }else{
                if(["js", "css"].includes(type)){
                    if(!includeSourcesMaps){
                        console.log(`We don't include sourcemap for this build. Skipping ${file.name}.`)
                        return await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                    }
                    let fileContent = (await fs.promises.readFile(filepath, "utf8"))
                    let sourceMap = fileContent.split(/[\n\r]+/g).pop()
                    if(!sourceMap || !sourceMap.startsWith("//# sourceMappingURL=")){
                        console.log(`This file doesn't have sourcemap. ${file.name}.`)
                        await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                        continue
                    }
                    let sourceMapContent
                    if(sourceMap.slice(21).startsWith("data:")){
                        console.log(`Extracting sourcemap from data uri. From file ${file.name}.`)
                        sourceMapContent = Buffer.from(sourceMap.split("=").slice(1).join("="), "base64").toString("utf-8")
                    }else{
                        console.log(`Extracting sourcemap from file ${file.name}.map.`)
                        await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                        sourceMapContent = await fs.promises.readFile(path.join(folder, sourceMap.slice(21)), "utf8")
                    }
                    sourceMapContent = JSON.parse(sourceMapContent)
                    sourceMapContent.sourcesContent = []
                    let sourceMapPath = filepath + ".map"
                    fileContent = fileContent
                    // source map
                    .replace(sourceMap, "//# sourceMappingURL="+filepath.split(/[\\\/]+/g).pop()+".map")
                    await fs.promises.writeFile(filepath.replace(folders.startDir, folders.newDir), fileContent)
                    await fs.promises.writeFile(filepath.replace(folders.startDir, folders.newDir)+".map", JSON.stringify(sourceMapContent))
                }else{
                    await fs.promises.copyFile(filepath, filepath.replace(folders.startDir, folders.newDir))
                }
            }
        }else if(file.isDirectory()){
            if(ignoreModules && file.name === "node_modules")continue
            if(folders.exclude && folders.exclude.test(path.join(folder, file.name)))continue 
            await fs.promises.mkdir(path.join(folder, file.name).replace(folders.startDir, folders.newDir), {recursive: true})
            await processNextDir(path.join(folder, file.name), ...Array.from(arguments).slice(1))
        }
    }
}

async function main(){
    let startTimestamp = Date.now()
    console.info("Starting build")
    
    console.info("Reseting existent directory...")
    try{
    	await fs.promises.rmdir("./distApp", {"recursive": true})
    } catch (error) {
	    console.error(error);
	}

    await fs.promises.mkdir(PROJECT_DIR+"/distApp/dist", {"recursive": true})
    
    console.info("Executing command `npm run compile`")
    child_process.execSync("npm run compile", {
        encoding: "binary",
        stdio: "inherit"
    })
    
    let startDir = path.join(PROJECT_DIR, "./dist")
    let newDir = path.join(PROJECT_DIR, "./distApp/dist")
    console.info("No error detected. Copying files from "+startDir+".")
    await fs.promises.mkdir(startDir, {recursive: true})

    await processNextDir(startDir, {
        startDir,
        newDir
    }, ((filepath) => filepath.endsWith(".js")), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)

        if(filepath.endsWith("git.js")){
            await fs.promises.writeFile(newpath, terser.minify(fs.readFileSync(filepath, "utf8").replace(/"{commit}"/g, `"${commit}"`)).code, "utf8")
        }else{
            await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
        }
    }, true).then(() => {
        console.info(`Copied files and minified them from ${startDir}.`)
    })
    
    await processNextDir(path.join(PROJECT_DIR, "modules"), {
        startDir: path.join(PROJECT_DIR, "modules"),
        newDir: path.join(PROJECT_DIR, "distApp", "modules"),
        exclude: /discord_spellcheck/g
    }, ((filepath) => filepath.endsWith(".js")), async (filepath, newpath) => {
        console.info(`Copying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, await fs.promises.readFile(filepath, "utf8"), "utf8")
    }, true).then(() => {
        console.info(`Copied files and minified them from ${path.join(PROJECT_DIR, "modules")}.`)
    })

    await Promise.all((await fs.promises.readdir(path.join(PROJECT_DIR, "distApp", "modules"))).map(async mdl => {
        let dir = path.join(PROJECT_DIR, "distApp", "modules", mdl)

        if(!fs.existsSync(path.join(dir, "package.json"))){
            if(mdl === "discord_desktop_core"){
                dir = path.join(dir, "core")
            }else{
                return
            }
        }
    
        console.info(`Installing modules for ${mdl}`)
        child_process.execSync("npm install --only=prod", {
            encoding: "binary",
            cwd: dir,
            stdio: "inherit"
        })
    }))

    await fs.promises.mkdir(path.join(PROJECT_DIR, "distApp", "modules", "discord_spellcheck"), {recursive: true})
    await processNextDir(path.join(PROJECT_DIR, "modules", "discord_spellcheck"), {
        startDir: path.join(PROJECT_DIR, "modules", "discord_spellcheck"),
        newDir: path.join(PROJECT_DIR, "distApp", "modules", "discord_spellcheck")
    }, ((filepath) => filepath.endsWith(".js")), async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }, false).then(() => {
        console.info(`Copied files and minified them from ${path.join(PROJECT_DIR, "modules")}.`)
    })

    await processNextDir(path.join(PROJECT_DIR, "LightcordApi"), {
        startDir: path.join(PROJECT_DIR, "LightcordApi"),
        newDir: path.join(PROJECT_DIR, "distApp", "LightcordApi"),
        exclude: /(src|webpack\.config\.js|tsconfig\.json|dist|docs)/g
    }, ((filepath) => filepath.endsWith(".js") && (!production ? !filepath.includes("node_modules") : true)), async (filepath, newpath) => {
        await fs.promises.copyFile(filepath, newpath)
    }, true).then(() => {
        console.info(`Copied files and minified them from ${path.join(PROJECT_DIR, "LightcordApi")}.`)
    })
    
    child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(PROJECT_DIR, "distApp", "LightcordApi"),
        stdio: "inherit"
    })

    function processDJS(dir){
        fs.mkdirSync(path.join(PROJECT_DIR, "distApp", "DiscordJS", dir), {recursive: true})
        return processNextDir(path.join(PROJECT_DIR, "DiscordJS", dir), {
            startDir: path.join(PROJECT_DIR, "DiscordJS", dir),
            newDir: path.join(PROJECT_DIR, "distApp", "DiscordJS", dir),
            exclude: /node_modules/g
        }, ((filepath) => filepath.endsWith(".js")), async (filepath, newpath) => {
            console.info(`Minifying ${filepath} to ${newpath}`)
            await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
        }).then(() => {
            console.info(`Copied files and minified them from ${path.join(PROJECT_DIR, "DiscordJS", dir)}.`)
        })
    }
    async function copyFileDJS(file){
        await fs.promises.writeFile(path.join(PROJECT_DIR, "distApp", "DiscordJS", file), await fs.promises.readFile(path.join(PROJECT_DIR, "DiscordJS", file)))
    }

    await processDJS("dist")
    await copyFileDJS("package.json")
    
    child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(PROJECT_DIR, "distApp", "DiscordJS"),
        stdio: "inherit"
    })
    
    fs.mkdirSync(path.join(PROJECT_DIR, "distApp", "BetterDiscordApp", "dist"), {recursive: true})
    const BDPackageJSON = require("../BetterDiscordApp/package.json")
    fs.writeFileSync(path.join(PROJECT_DIR, "distApp", "BetterDiscordApp", "package.json"), JSON.stringify(BDPackageJSON), "utf8")
    const files = [
        "index.min.js",
        "style.min.css"
    ]
    files.forEach(e => {
        files.push(e + ".map")
    })
    files.forEach(e => {
        const pth = path.join(PROJECT_DIR, "BetterDiscordApp", "dist", e)
        if(!fs.existsSync(pth))return console.error(`\x1b[31mFile ${pth} from betterdiscord does not exist.\x1b[0m`)
        if(e.endsWith(".map")){
            const data = JSON.parse(fs.readFileSync(pth, "utf8"))
            data.sourcesContent = []
            fs.writeFileSync(path.join(PROJECT_DIR, "distApp", "BetterDiscordApp", "dist", e), JSON.stringify(data))
        }else{
            fs.copyFileSync(pth, path.join(PROJECT_DIR, "distApp", "BetterDiscordApp", "dist", e))
        }
    })
    
    await fs.promises.mkdir(path.join(PROJECT_DIR, "distApp", "splash", "videos"), {recursive: true})
    await processNextDir(path.join(PROJECT_DIR, "splash"), {
        startDir: path.join(PROJECT_DIR, "splash"),
        newDir: path.join(PROJECT_DIR, "distApp", "splash"),
        exclude: /node_modules/g
    }, (filepath) => {
        if(filepath.endsWith(".js"))return true
        return false
    }, async (filepath, newpath) => {
        console.info(`Minifying ${filepath} to ${newpath}`)
        await fs.promises.writeFile(newpath, terser.minify(await fs.promises.readFile(filepath, "utf8")).code, "utf8")
    }).then(() => {
        console.info(`Copied files and minified them from ${path.join(PROJECT_DIR, "splash")}.`)
    })
    fs.writeFileSync(path.join(PROJECT_DIR, "distApp", "LICENSE"), fs.readFileSync(path.join(PROJECT_DIR, "LICENSE")))
    
    let packageJSON = require("../package.json")
    packageJSON.scripts["build:electron_linux"] = packageJSON.scripts["build:electron_linux"].replace("./distApp", ".")
    packageJSON.scripts["build:electron_win"] = packageJSON.scripts["build:electron_win"].replace("./distApp", ".")
    packageJSON.scripts["build:electron_mac"] = packageJSON.scripts["build:electron_mac"].replace("./distApp", ".")
    
    fs.writeFileSync(path.join(PROJECT_DIR, "distApp", "package.json"), JSON.stringify(packageJSON), "utf8")
    
    console.info(`Installing ${Object.keys(packageJSON.dependencies).length} packages...`)
    child_process.execSync("npm install --only=prod", {
        encoding: "binary",
        cwd: path.join(PROJECT_DIR, "distApp"),
        stdio: "inherit"
    })
    console.info("Build took "+(Date.now() - startTimestamp) +"ms.")
}
main()
.catch(err => {
    console.error(err)
    process.exit(1)
})
