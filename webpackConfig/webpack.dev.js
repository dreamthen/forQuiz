const webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const PUBLIC_DIR = "/",
    DLL_DIR = path.resolve(__dirname, "../dll"),
    BUILD_DIR = path.resolve(__dirname, "../build"),
    ROOT_DIR = path.resolve(__dirname, "../"),
    APP_DIR = path.resolve(__dirname, "../scripts"),
    STYLESHEET_DIR = path.resolve(__dirname, "../stylesheets"),
    MANIFEST_DIR = require(path.resolve(__dirname, `${DLL_DIR}/vendor_manifest.dll.json`));
const dev = "development";
const PORT = 9888;
module.exports = {
    devtool: "source-map",
    entry: {
        index: `${APP_DIR}/index.js`
    },
    output: {
        publicPath: PUBLIC_DIR,
        filename: "[name].[hash].js",
        path: BUILD_DIR
    },
    resolve: {
        modules: [
            APP_DIR,
            DLL_DIR,
            "node_modules"
        ]
    },
    externals: {
        jquery: "jQuery"
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            include: [
                APP_DIR,
                DLL_DIR,
                STYLESHEET_DIR
            ],
            use: [{loader: "babel-loader"}]
        }, {
            test: /.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{loader: "css-loader", options: {importLoaders: 1}}, {loader: "postcss-loader"}],
                publicPath: STYLESHEET_DIR
            })
        }, {
            test: /.(jpg|jpeg|png|bmp|gif)$/,
            use: [{
                loader: "url-loader",
                options: {limit: 10000}
            }, {loader: "image-webpack-loader"}]
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: MANIFEST_DIR,
            context: ROOT_DIR
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: dev
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": process.env.NODE_ENV
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new HtmlWebpackPlugin({
            publicPath: PUBLIC_DIR,
            filename: "index.html",
            template: `${ROOT_DIR}/index.html`,
            chunks: ['index'],
            inject: "body"
        })
    ],
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
    devServer: {
        host: "0.0.0.0",
        port: PORT,
        proxy: {}
    }
};