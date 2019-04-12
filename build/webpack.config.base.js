let path = require("path")
let htmlWebpackPlugin = require("html-webpack-plugin")
let ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
let webpack = require("webpack")
let config = {
    entry: path.resolve(__dirname, "../src/js/main.js"),
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: ["style-loader"],
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(ttf|eot|svg|woff)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html")
        }),
        new ExtractTextWebpackPlugin("./css/style.css"),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js'], //省略扩展名
        alias: {
            "@css": path.resolve(__dirname, './src/css'),
            'vue$': 'vue/dist/vue.esm.js'
        } // 路径简写
    }


}
module.exports = config