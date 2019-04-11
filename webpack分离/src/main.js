// import obj, {Person,obj as yiming,demo} from './js/a'
// import obj,{obj as obj3,obj2} from './js/b.js'
console.log(mark)


console.log('33333vxcvx3yrtyr8888');
import demo from './index.js';
import mark from './b.js'
import './css/base.less'

import $axios from 'axios'
$axios.get('/getList').then(({data})=>{
    //请求后台数据渲染到#app里面
    console.log(data)
    let str=``
     data.list.forEach((item)=>{
        str+=`<span>${item.name}</span>`
    })
    document.getElementById('app').innerHTML=str

})
$axios.post('/login',{name:'zs',pwd:'qwe123'}).then(({data})=>{
    console.log(data)
})



