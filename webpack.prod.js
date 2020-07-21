const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [new CleanWebpackPlugin()],
});