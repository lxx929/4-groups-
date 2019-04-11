const base =require('./webpack.config.base')
const path=require('path')
const webpackMerge = require('webpack-merge')
const config = require('../config/index')
let configprod ={
    mode:config.prod.mode,
    output:{
        filename:'main-[hash].js',
        path:path.resolve(__dirname,'../dist')
    }
}
module.exports=webpackMerge(configprod,base)