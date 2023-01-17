const config = require("./webpack.config.js")

config.mode = "production"
config.devtool = "source-map"
config.output.filename = "main.min.js"

module.exports = config