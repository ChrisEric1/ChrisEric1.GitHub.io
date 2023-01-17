const path = require("path");
//const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    mode: "development",
    target: "node",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "js"),
        library: "LightcordApi",
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
        "node-fetch": "node-fetch",
        "uuid/v1": "uuid/v1",
        "uuid/v4": "uuid/v4"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            "react$": path.resolve(__dirname, "src", "alias", "react.ts"),
            "react-dom$": path.resolve(__dirname, "src", "alias", "react-dom.ts")
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
                presets: [
                    ["@babel/env", {
                        targets: {
                            node: "12.8.1",
                            chrome: "78"
                        }
                    }], "@babel/react"
                ]
            }
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    }
};