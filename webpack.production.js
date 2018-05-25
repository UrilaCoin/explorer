var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//var JavaScriptObfuscator = require('webpack-obfuscator');


module.exports = function (env) {

    var configs = require('./webpack.development.js')(env);

    // configs.forEach(function (config) {
    //     //config.plugins.push(new CleanWebpackPlugin(['dist']));
    //     config.mode = 'production',
    //         config.plugins.push(
    //             new webpack.optimize.UglifyJsPlugin({
    //                 beautify: false,
    //                 compress: true,
    //                 minimize: true,
    //                 comments: false
    //             }));
    // });

    return configs;
}