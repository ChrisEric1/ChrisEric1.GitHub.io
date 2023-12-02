const CleanCSS = require("clean-css")
const fs = require("fs")
const path = require("path")

function minify(){
    let start = Date.now()
    console.log(`\x1b[33mMinifying...\x1b[0m`)
    const css = fs.readFileSync(path.join(__dirname, "./src/styles/index.css"), "utf-8")
    fs.writeFileSync(path.join(__dirname, "./dist/style.css"), css)
    
    const output = new CleanCSS({
        sourceMap: true
    }).minify(css)

    if(output.errors.length > 0){
        console.error("\x1b[31m"+output.errors.join("\n")+"\x1b[0m")
    }
    if(output.warnings.length > 0){
        console.warn("\x1b[33m"+output.warnings.join("\n")+"\x1b[0m")
    }

    fs.writeFileSync(path.join(__dirname, "./dist/style.min.css"), output.styles+"\n/*# sourceMappingURL=style.min.css.map */")
    fs.writeFileSync(path.join(__dirname, "./dist/style.min.css.map"), output.sourceMap.toString())
    console.log(`\x1b[32mMinified in ${(Date.now() - start)}ms. Minified by ${Math.floor(output.stats.efficiency*100)}%\x1b[0m`)
}
module.exports.minify = minify

if(require.main === module){
    if(process.argv.includes("--watch")){
        console.log("\x1b[32mStarting watch mode.\x1b[0m")
        minify()
        console.log()
        fs.watchFile(path.join(__dirname, "./src/styles/index.css"), () => {
            minify()
            console.log()
        })
    }else{
        minify()
    }
}