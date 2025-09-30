require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        watchFiles: ['./src/template.html'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
        new webpack.DefinePlugin({
            'process.env.VITE_WEATHER_API_KEY': JSON.stringify(
                process.env.VITE_WEATHER_API_KEY
            ),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
