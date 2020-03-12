//清理产出目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//产出html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index1',
    output: {
        path: path.resolve(__dirname, '../p-dist'),//产出目录
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: '../p-dist'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./p-dist'] // 非相对路劲
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html' // 非相对路劲 直接是./src
        })
    ]
}