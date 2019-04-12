let base=require("./webpack.config.base") 
let webpackMerge=require("webpack-merge")
let configdev={
    mode:"development",
    devServer:{
        hot:true,
        open:true,
        before(app){
            app.get('/getList',(req,res)=>{
                res.json({code:0,data:{"name":"zhangsan"}})
            })
        }
    }

}
module.exports=webpackMerge(configdev,base)