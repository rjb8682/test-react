const path = require('path');
const webpack = require('webpack');

var webpackConfig = {

    context: __dirname + "/src/ts",

    entry: "./index",

    output: {
        filename: "bundle.js",
        path: __dirname + "/app"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [
            path.resolve('./node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "app/")
                ],
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: true,
                    configFile: "tslint.json"
                }
            }
        }),
    ],

    mode: "none"
};

module.exports = webpackConfig;
