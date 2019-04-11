const path= require('path')
const htmlWebPlugin =require('html-webpack-plugin')
const webpack= require('webpack')
module.exports={
    mode:'development',//开发 生产
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:6000
                    }
                }]
            }
        ]
    },
    devServer:{
        host:'localhost',
        port:8090,
        hot:true,
        open:true,
        proxy: {
            '/api': {
                target: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', // 接口的域名
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/api': ''//以/api开头的接口
                }
            }
        },
        before(app){
            app.get('/list',(req,res)=>{
                res.json({code:0,list:[{name:'jim',age:18},{name:'tom',age:20}]})
            })
        }
    },
    plugins:[
        new htmlWebPlugin({
            filename:'index.html',
            template:path.relative(__dirname,'./index.html'),
            title:'这是一个demo'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}