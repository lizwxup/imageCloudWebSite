<template>
     <div>
        <header-nav message="4"></header-nav>
        <img src="@/assets/bg1.png" alt="" width="100%" height="500px">
            <div class="detail-cont">
                <div class="font-16">
                    当前位置：    
                </div>
                <div>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item  v-for="(item,index) in  realList" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
            <div class="weight font-20 detail-title">重磅!重磅!重磅!重磅!重磅!重磅!重磅!重磅!重磅!重磅!</div>
            <div class="detail-passage">
                <ul class="detail-author">
                    <li>作者：</li>
                    <li>时间:</li>
                    <li>浏览量：</li>
                    <li>字体大小  <span class='con-add' @click="add">+</span><span class="con-minus" @click="minus">&minus;</span></li>
                </ul>
                <div class="detail-main" ref='detailsMain' :style="{fontSize:theSize+'px'}">
                重磅消息重磅消息重磅消息重磅消息重磅消息重磅消息重磅消息重磅消息重磅消息
                     重磅消息重磅消息重磅消息重磅消息重磅消息</div>
            </div>

    </div>
</template>
<script>
 import HeaderNav from './Header.vue'
 export default {
     data () {
         return {
            sizeIndex:1,
            theSize: 16,
            realList: []
         }
     },
     created(){
        this.getRoutePath();
     },
     methods:{
         add(){
           this.theSize++
         },
         minus(){
           this.theSize--
           if (this.theSize<=10) {
             this.theSize = 10
           }
         },
        getRoutePath() {
            this.realList = this.$route.meta.routerList
        }
     },
     beforeRouteEnter(to, from, next){
        console.log(to.meta.routerList)
        next(vm=>{
          vm.routerList = to.meta.routerList
        })
     },
     components:{
        HeaderNav
     }
 }
</script>
<style lang="">
    .detail-cont,.detail-passage{
        width:60%;
        margin:0 auto;
    }
    .detail-cont{
        display:flex;
    }
    .detail-cont div:nth-child(1){
        height:50px;
        line-height:50px;
    }
    .el-breadcrumb{
        font-size:16px;
        line-height:50px;
    }
    .detail-author{
        display:flex;
        border-top:1px solid #e0e0e0;
        border-bottom:1px solid #e0e0e0;
        line-height:40px;
    }
    .detail-author li{
        width:25%;
    }
    .detail-title{
        line-height:50px;
    }
    .detail-author li span{
        font-size:16px;
        margin-right:5px;
        cursor:pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
    }
    .detail-main{
        margin-top:20px;
        margin-bottom:30px;
        font-size:16px;
    }
</style>