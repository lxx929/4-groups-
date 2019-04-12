let setString=require("./app/a")
let axios=require("./libs/axios")
let str="hello world"
console.log(setString(str)) 
// import "../css/index.css";
// import "../css/font/iconfont.css"
axios.get("/getList").then(({data})=>{
    console.log(data)
})
// axios.get("/api").then(({data})=>{
//     console.log(data)
// })
import Vue from "vue";
window.Vm=new Vue({
    el:"#app",
    data:{
        mes:"今天天气很好",
        checkAll:false,
        fuirtList:[
            {name:"西瓜",ischeck:false},
            {name:"香蕉",ischeck:false},
            {name:"提子",ischeck:false}
        ]
    },
    methods:{
        checkFn(index){
            //切换true和false
            this.fuirtList[index].ischeck=!this.fuirtList[index].ischeck 
            this.checkAll=this.fuirtList.every(item=>{
                //console.log(item.ischeck)
                return item.ischeck==true
            })
            //console.log(this.checkAll)
        },
        checkAllFn(){
            this.checkAll=!this.checkAll
            this.fuirtList.forEach(val=>{
                val.ischeck=this.checkAll
            })
        }
    }
})