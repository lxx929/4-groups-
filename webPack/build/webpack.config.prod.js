let base=require("./webpack.config.base") 
const path=require('path')
let webpackMerge=require("webpack-merge")
let configpro={
    mode:"production",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"../dist")
    }
}
module.exports=webpackMerge(configpro,base)