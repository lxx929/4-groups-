// 公共项文件
const path = require('path')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
let config = {
    entry: path.resolve(__dirname, '../src/main.js'),
    module: {
        rules: [{
                test: /\.css$/,
                // use:['style-loader','css-loader']
                use: extractTextWebpackPlugin.extract({
                    use: 'css-loader',
                    fallback: "style-loader"
                })
            }, {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }, {
                test: /\.(png|jpg|jpeg|bmp|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 6000
                    }
                }]
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(sass|scss)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            // title:''
        }),
        new extractTextWebpackPlugin('style.css'),
        new cleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            "@": path.resolve(__dirname, '../src'),
            " vue$": "vue/dist/vue.esm.js"
        }
    }
}

module.exports = config