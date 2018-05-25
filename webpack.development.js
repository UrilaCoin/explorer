var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
var nodeExternals = require('webpack-node-externals');


module.exports = function (env) {
    return [
        {

            mode: 'development',
            target: 'node',
            node: {
                __filename: true,
                __dirname: true
            },
            entry: {
                'app': './app.js',
                'sync': './scripts/sync.js',
                'peers': './scripts/peers.js',
                'benchmark': './scripts/benchmark.js',
                // 'api': './src/server/api.js',
                // 'admin': './src/server/admin.js',
                // 'job': './src/server/job.js'

            },
            output: {
                path: path.join(__dirname, './dist'),
                filename: '[name].js',

            },
            module: {
                rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    //exclude: /node_modules/
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    query: {
                        minimize: false
                    }
                },
                {
                    test: /\.tpl$/,
                    loader: 'html-loader',
                    query: {
                        minimize: false
                    }
                }

                ]
            },
            //externals: [/^(?!\.|\/).+/i,],
            externals: [nodeExternals()],
            plugins: [
                // new webpack.DefinePlugin({
                //     'process.env': { NODE_ENV: JSON.stringify(env) }
                // }),
                new webpack.DefinePlugin({
                    'process.env': {
                        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                    }
                }),
                new CopyWebpackPlugin([
                    // { from: 'src/www/favicon/**/*', to:'/www/favicon/' },
                    {
                        context: './public',
                        from: '**/*',
                        to: './public'
                    },
                    {
                        context: './locale',
                        from: '**/*',
                        to: './locale'
                    },

                    {
                        context: './views',
                        from: '**/*',
                        to: './views'
                    },


                ])
            ]
        },



    ]
}