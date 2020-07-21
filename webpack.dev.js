const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template1.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});