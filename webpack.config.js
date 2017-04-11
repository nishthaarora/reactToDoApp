var path = require('path');
var webpack = require('webpack');
var  babelDecoratorsPlugin = require('babel-plugin-transform-decorators-legacy');

module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:8080',
        // 'webpack/hot/only-dev-server',
        './app/app.js',
    ],
    output: {
        publicPath: '/dist',
        path: __dirname,
        filename: 'dist/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                include: /app/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["transform-decorators-legacy"]
                }
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: "eval-course-map"
};