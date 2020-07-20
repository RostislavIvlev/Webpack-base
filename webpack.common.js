var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template1.html"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};