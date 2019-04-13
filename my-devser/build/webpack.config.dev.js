const base = require('./webpack.config.base')
const config = require('../config/index')
const webpackMerge = require('webpack-merge')
const configdev = {
    mode: config.dev.mode,
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        hot: true,
        open: true
    },
    devtool: 'source-map'
}
module.exports = webpackMerge(configdev, base)