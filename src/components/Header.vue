<template>
    <div class="block">
  <div class="in-nav" id="naviBG">
      <el-row :gutter="10">
        <el-col :span="6"><img src="@/assets/logo.png" width="100%" height="100%" style="vertical-align: middle;"></el-col>
        <router-link :to="{path:'/'}"  exact class="router-nav" ><el-col  :xs="2" :sm="2" :md="2" :lg="3" :xl="3" >首页</el-col></router-link>
        <router-link :to="{path:'/cloud'}" class="router-nav"><el-col  :xs="2" :sm="2" :md="2" :lg="3" :xl="3" >走进云影</el-col></router-link>
        <router-link :to="{path:'/news'}" class="router-nav"><el-col  :xs="2" :sm="2" :md="2" :lg="3" :xl="3">新闻动态</el-col></router-link>
        <router-link :to="{path:'/services'}" class="router-nav"><el-col  :xs="2" :sm="2" :md="2" :lg="3" :xl="3">服务项目</el-col></router-link>
        <router-link :to="{path:'/personal'}" class="router-nav"><el-col   :xs="2" :sm="2" :md="2" :lg="3" :xl="3" >个人中心</el-col></router-link>
        <router-link :to="{path:'/contact'}" class="router-nav"><el-col  :xs="2" :sm="2" :md="2" :lg="3" :xl="3">联系我们</el-col></router-link>
      </el-row>
  </div>
    </div>
</template>
<script>
    export  default{
        props: ['message'],
        data (){
            return {
                index:0
            }
        }
    }
</script>
<style>
    .in-nav{
        width:60%;
        z-index: 3;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        color:#2e2e2e;
        height: 84px;
        line-height: 84px;
        margin: 0 auto;
   }
    .router-nav{
        color:#2e2e2e !important;
        font-size:18px;
        font-weight:900;
    }
    .router-link-active{
        color:#0068f5 !important;
    }
    .router-nav:hover{
        color:#2e2e2e !important;
    }
</style>
