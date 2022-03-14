const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        panda: path.resolve(__dirname, './resources/assets/js/app.ts')
    },
    mode: 'development',
    devtool: 'inline-source-map', // tim file bi loi
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].[contenthash].js",
        publicPath: "" // public/
    },
    resolve: { // resole for search source 
        modules: ['node_modules', 'resources'],
        extensions: ["*", ".json", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'resources/assets/template/html.blade.php'),
            filename: path.resolve(__dirname, 'resources/views/layouts/html.blade.php')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    'ts-loader'
                ]

            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: "url-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // down version to compatitable version
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
        ]
    }
}