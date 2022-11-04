export const getHomeData=function(url,payload){
    console.log('我是获取主页面数据的接口')
}
export const getList=function(){
    console.log('我是获取列表的数据')
}
export const getImage=function(){
    return new Promise((resolve,reject)=>{
        resolve('我是嵌套请求的')
    })
}