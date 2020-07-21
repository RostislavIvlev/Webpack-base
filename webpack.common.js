const path = require('path');
const webpack = require('webpack')


module.exports = {
    entry: {
        main: './src/index.js',
        typescript: './src/index.ts'
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
    },

    devtool: 'source-map',

    plugins: [
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
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
};