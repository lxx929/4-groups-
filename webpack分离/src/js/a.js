class Person{
    constructor(obj){
        this.name=obj.name
        this.age=obj.age
    }
    say(doSomething){
        console.log(`我是${this.name},我在${doSomething}`)
    }
}
let obj = {name:'jim1234567'}
// function demo(){}
export default {name:'tom'}
import com from './common'
// export {Person,obj,demo}