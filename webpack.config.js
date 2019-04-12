let path=require("path")
let htmlWebpackPlugin=require("html-webpack-plugin")
let ExtractTextWebpackPlugin=require("extract-text-webpack-plugin")
let webpack=require("webpack")
let config={
    entry:"./src/js/main",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:["style-loader"],
                    use:["css-loader"]
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
    plugins:[
        new htmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new ExtractTextWebpackPlugin("./css/style.css"),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        hot:true,
        open:true,
        proxy:{
            '/api':{
                target:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''//以/api开头的接口
                }
            }

        },
        before(app){
            app.get('/getList',(req,res)=>{
                res.json({code:0,data:{"name":"zhangsan"}})
            })
        }
    }

}
module.exports=config