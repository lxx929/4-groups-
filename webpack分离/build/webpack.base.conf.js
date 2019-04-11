//公共项配置
const config = require('../config/index')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = {
    entry: path.resolve(__dirname, '../src/main.js'),
    module: {
        rules: [{
            test: /\.js$/,
            include: /src/, //正则
            use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }

            ]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
            title: '这是一个测试'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })

    ],
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}

module.exports = base