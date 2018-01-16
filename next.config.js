const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: (config, { dev }) => {
        config.resolve = {
            modules: ['pages', 'node_modules'],
            extensions: [
                '.js',
                '.jsx',
                '.react.js',
                '.css',
            ],
        }
        config.module.rules.push(
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
        )
        config.plugins.push(
            new webpack.DefinePlugin({ // <-- key to reducing React's size
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            })
        )
        if(prod) {
            config.plugins.push(
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false,
                        screw_ie8: true,
                        conditionals: true,
                        unused: true,
                        comparisons: true,
                        sequences: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true
                    },
                    output: {
                        comments: false
                    }
                }),
                new CompressionPlugin({
                    asset: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.js$|\.css$|\.html$/,
                    threshold: 10240,
                    minRatio: 0
                })
            )
        }
        return config;
    }
}
