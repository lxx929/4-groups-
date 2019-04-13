import './css/base.css'

// import axios from 'axios' //es
//  const axios = require('axios')
// let dom = document.getElementById('app')


import './css/base.css'

// import axios from 'axios' //es
//  const axios = require('axios')
// let dom = document.getElementById('app');


import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        dogList: [{
            name: "金毛",
            isChecked: false
        }, {
            name: "二哈",
            isChecked: false
        }, {
            name: "大黄",
            isChecked: false
        }, {
            name: "泰迪",
            isChecked: false
        }],
        isCheckAll: false //全选
    },
    methods: {
        //单选
        checkAlone(index) {
            this.dogList[index].isChecked = !this.dogList[index].isChecked; //点击样式
            this.isCheckAll = this.dogList.every(item => item.isChecked);
        },
        //全选
        checkAll() {
            this.isCheckAll = !this.isCheckAll; //点击样式
            this.dogList.forEach(item => item.isChecked = item.isCheckAll);
        }
    }
});