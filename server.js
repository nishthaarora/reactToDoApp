const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: "./app",
    hot: true,
    historyApiFallback: false
}).listen(8080, 'localhost', function(err, result) {
    if(err) {
        console.log(err);
    }
    console.log('listening to host 8080');
})
