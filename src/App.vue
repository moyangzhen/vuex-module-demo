<template>
    <div id="app">
        <h3>{{count}}</h3>
        名字<span>{{name}}</span>
        <div>
            <button @click="doMutatioin">添加</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: 'app',
        data(){
            return {
                name:''}
        },
        created(){
            console.log(this.buyTodos)
        },
        computed:{
            ...mapState('ListModule',['count']),
            ...mapGetters('ListModule',['getTodoById','buyTodos'])
        },
        methods:{
            ...mapMutations({add:'increment'}),
            ...mapActions('ListModule',
                ['increment']),
            doMutatioin(){
               this.increment({amount:1}).then((res)=>{
                console.log(res,'xx')
               })
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
