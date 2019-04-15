// webpack 是遵循commonjs
/**
 * entry
 * output
 * module  loader重点 
 * devServer 起服务重点
 * plugins   重点
 * resolve
 * mode
 * devtool
 * 为了顺利配置好webpack，有如下坑点需要避免：
 * 1、建项目时不可用webpack命名，否则npm init 会报错
 * 2、extract-text-webpack-plugin@next
 * 3、抽离css和sass时为了能生成不同的文件名，新new了ExtCssPlugin和ExtSassPlugin都需要在plugins里配置
 * 4、成功解析.vue的文件需要如下操作：
 *    npm install vue-loader vue-template-compiler -D
 *    loader中配置vue
 *    plugins中配置 new VueLoaderPlugin()
 *    "vue$":'vue/dist/vue.esm.js' 修改vue包文件路径
 *    
 */
const path = require('path')
    // ********以下是plugins中的配置***********
    // 1、生成模板文件 install ->require->plugins中new
const htmlWebPlugin = require('html-webpack-plugin')
    //2、打包生成dist文件前先清空dist文件夹
const cleanPlugin = require('clean-webpack-plugin')
    //3、代码打包压缩
const Ugligyjs = require('uglifyjs-webpack-plugin')
    //4、安装extract-text-webpack-plugin@next 然后引入
const ExtTextPlugin = require('extract-text-webpack-plugin')
    //抽离css文件，并生成文件为style.css
const ExtCssPlugin = new ExtTextPlugin('style.css')
    //抽离sass文件，并生成文件sass.css
const ExtSassPlugin = new ExtTextPlugin('sass.css')
    /*5、将配置的loader一并应用的vue文件中，这个require路径在下载的vue-loader文件的lib文件夹中可查到
     在plugins中new*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')
    //6、引入webpack是配合模块热更新
const webpack = require('webpack')
let config = {
    mode: "development",
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: /src/, //正则
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtCssPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
                    // use:['style-loader','css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtSassPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                    // use:['style-loader','css-loader','sass-loader'] 
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 6000
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ['url-loader']
            }, {
                test: /\.vue/,
                loader: "vue-loader"
            }
        ]
    },
    // 服务器
    devServer: {
        host: 'localhost',
        port: 9000,
        hot: true,
        open: true
            // compress:true
    },
    //插件
    plugins: [
        // 模板文件
        new htmlWebPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '这是一个测试'
        }),
        // new ExtTextPlugin({
        //     filename:"[name].css"
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new cleanPlugin(),
        new Ugligyjs(),
        new VueLoaderPlugin(),
        ExtCssPlugin,
        ExtSassPlugin
    ],
    resolve: {
        extensions: ['.js', '.css', '.png', '.scss'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, './src/css'),
            "vue$": 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'source-map'
}
module.exports = config