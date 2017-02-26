<template>
    <div>
        <h1>rrrrrrrr我是账号页面</h1>
        <el-button type="text" @click="fn">登录返回首页</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        fn: function(){
            console.log('我要返回首页啊')
            // console.log(this.router)
            // console.log(router)
            // console.log(window.router)
            // router.push('/');
            this.$router.push('/news'+3)
        }
    },

}

</script>
<style>
    h1{
        background: lime
    }
</style>