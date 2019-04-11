//开发环境
const config = require('../config/index')
const baseConfig = require('./webpack.base.conf')
const Merge = require('webpack-merge')
const bodyParse = require('body-parser')
const devConfig = {
    mode: config.dev.mode,
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        hot: config.dev.hot,
        before: (app) => {
            app.get('/getList', (req, res) => {
                //响应前端请求
                console.log(req.query)
                res.json({ code: 0, msg: 'success', list: [{ name: 'zs' }, { name: 'jim' }] })
            })
            app.post('/login', bodyParse.json(), (req, res) => {
                console.log('bodyParse', req.body)
                res.json({ code: 0, msg: 'success' })
            })
        }
    },
    devtool: 'source-map' //调试工具
}

module.exports = Merge(devConfig, baseConfig)