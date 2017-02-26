<!-- 首页内容渲染 -->
<template>
  <div>
<el-row>
  <el-col :span="24">
    <!-- 可以删掉 顶部 -->
    <HeaderCompontent></HeaderCompontent>
  </el-col>
</el-row>

<el-row>
  <el-col :span="4">
    <!-- 可以删除 底部菜单 -->
    <MenuComponent></MenuComponent>
  </el-col>
  <el-col :span="20">
    <!-- 渲染出口 -->
    <router-view></router-view>
    
    </el-col>
</el-row>

  </div>
</template>
<script>
    import HeaderCompontent from './components/header.vue'
    import MenuComponent from './components/menu.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            HeaderCompontent,
            MenuComponent
        }
    }
</script>
<style>

</style>
