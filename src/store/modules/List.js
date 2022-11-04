import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
    namespaced:true,
    state:{
            count:5,
            todos:[
                {name:'雪糕',buy:false,id:1},
                {name:'冰淇淋',buy:true,id:2}
            ]
    },
    getters:{
        buyTodos:(state,rootState)=>{
            console.log(rootState.count);
            return state.todos.filter(todo=>todo.buy)
        },
        getTodoById:(state)=>(id)=>{
            return state.todos.find(todo=>todo.id===id)
        }
    },
    mutations:{
        // mutation的第一个参数必须写state,这是规定，为什么是规定
        increment(state,payload){
            console.log('我是异步触发的')
            state.count+=1
        },
        gotData(state){
            console.log('我是gotdata的')
        }
    },
    actions:{
        increment({state,rootState,commit},payload){
            return new Promise((resolve,reject)=>{
                   commit('increment',payload);
                   resolve('我处理成功了'); 
                   console.log(state.count,rootState.count)
            })
            
        }
    }
    
}