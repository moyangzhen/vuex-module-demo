import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
import ListModule from './modules/List'
export default new Vuex.Store({
    state:{
            count:0,
            todos:[
                {name:'雪糕',buy:false,id:1},
                {name:'冰淇淋',buy:true,id:2}
            ]
    },
    getters:{
        buyTodos:state=>{
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
        increment({commit},payload){
            return new Promise((resolve,reject)=>{
                   commit('increment',payload);
                   resolve('我处理成功了'); 
            })
            
        }
    },
    modules:{
        ListModule
    },
    plugins: [createPersistedState()],
})