const webpack = require("webpack"),
    path = require("path"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ROOT_DIR = path.resolve(__dirname, "../.."),
    DLL_DIR = path.resolve(__dirname, "../dll"),
    PUBLIC_DIR = "/";
module.exports = {
    devtool: "source-map",
    entry: {
        vendor: ['react', 'react-router', 'react-dom', 'react-addons', 'redux', 'react-redux', 'redux-thunk', 'redux-logger', 'redux-saga', 'redux-devtools', 'prop-type', 'moment', 'antd']
    },
    output: {
        publicPath: PUBLIC_DIR,
        filename: "[name].[hash].js",
        path: DLL_DIR,
        library: "[name]_[chunkhash]"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    sourceMap: true,
                    compress: {
                        unused: false,
                        dead_code: false,
                        warnings: true
                    },
                    output: {
                        comments: true
                    }
                }
            })
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllPlugin({
            path: path.join(DLL_DIR, "[name]_manifest.dll.json"),
            name: "[name]_[chunkhash]",
            context: ROOT_DIR
        })
    ]
};