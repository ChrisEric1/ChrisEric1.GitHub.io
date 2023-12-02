const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const child_process = require("child_process")

module.exports = {
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "BetterDiscord",
    libraryTarget: "commonjs2"
  },
  externals: {
    electron: `electron`,
    fs: `fs`,
    path: `path`,
    events: `events`,
    rimraf: `rimraf`,
    yauzl: `yauzl`,
    mkdirp: `mkdirp`,
    request: `request`,
    "node-fetch": "node-fetch"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve("src", "builtins"),
      path.resolve("src", "modules")
    ],
    alias: {
      react$: path.resolve(__dirname, "src", "react.js"),
      "react-dom$": path.resolve(__dirname, "src", "react-dom.js")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: [["@babel/env", {
            targets: {
                node: "12.8.1",
                chrome: "78"
            }
        }], "@babel/react"]
        }
      }
    ]
  },
  plugins: [  
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      // failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {drop_debugger:false}
        },
      })
    ]
  }
};