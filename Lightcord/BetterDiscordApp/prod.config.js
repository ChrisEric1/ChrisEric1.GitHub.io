const config = require("./webpack.config.js")

config.mode = "production"
config.devtool = "source-map"
config.output.filename = "index.min.js"

module.exports = config