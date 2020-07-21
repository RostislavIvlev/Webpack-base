var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')


module.exports = {
    entry: {
        main: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template1.html'
        }),

        new webpack.ProvidePlugin({
            '$':          'jquery',
            '_':          'lodash',
            'ReactDOM':   'react-dom',
            'cssModule':  'react-css-modules',
            'Promise':    'bluebird'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader']
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "images" 
                    }
                }
            },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};