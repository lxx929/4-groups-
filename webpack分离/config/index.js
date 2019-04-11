//配置项
const path=require('path')
const config={
    entry:path.resolve(__dirname,'../src/main.js'),
    dev:{
        mode:'development',
        host:'localhost',
        port:8090,
        hot:true

    },
    prod:{
        mode:'production'
    }
}
module.exports= config