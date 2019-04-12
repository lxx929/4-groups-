let setString = require("./app/a")
let axios = require("./libs/axios")
let str = "hello world"
console.log(setString(str))
import "../css/index.css";
import "../css/font/iconfont.css";
import Vue from 'vue';
window.vm = new Vue({
    el: '#app',
    data: {
        msg: '薛艳玲就是个猪',
        list: [{
            name: '葡萄',
            ischecked: false
        }, {
            name: '香蕉',
            ischecked: false
        }, {
            name: '苹果',
            ischecked: false
        }, {
            name: '火龙果',
            ischecked: false
        }],
        checkedAll: false
    },
    methods: {
        checkFn(index) {

            this.list[index].ischecked = !this.list[index].ischecked;
            this.checkedAll = this.list.every(item => item.ischecked)

        },
        checkAllFn() {

            this.checkedAll = !this.checkedAll;
            this.list.forEach(item => item.ischecked = this.checkedAll)
        }
    }


})
console.log(window.vm)
axios.get("/getList").then(({ data }) => {
    console.log(data)
})