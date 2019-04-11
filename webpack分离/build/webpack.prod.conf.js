// 生产环境
const config= require('../config/index')
const baseConfig = require('./webpack.base.conf')
const Merge = require('webpack-merge')
const path = require('path')
const prodConfig = {
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name]-[hash].js'
    },
    mode:config.prod.mode
}
module.exports = Merge(prodConfig,baseConfig)