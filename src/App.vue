<template>
    <div id="app">
        <h3>{{count}}</h3>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import ListModule from './store/modules/List'
 const {mapState} = createNamespacedHelpers('List')
    export default {
        name: 'app',
        data(){
            return {
                name:''}
        },
        beforeCreate(){
            this.$store.registerModule('List',ListModule)
        },
        created(){
            console.log(this.buyTodos)
        },
        computed:{
            ...mapState(["count"])
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
