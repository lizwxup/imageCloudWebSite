<template>  
    <div>
        <header-nav message="4"></header-nav>
        <img src="@/assets/bg1.png" alt="" width="100%" height="500px">
        <middle-tab :mtData='personalListData'></middle-tab>
    </div>

</template>
<script>
 import HeaderNav from './Header.vue'
 import MiddleTab from './MiddleTabCom.vue'
 export default {
     data () {
         return {
             personalListData: {
                titleCN: "个人中心",
                titleEN: "PERSONAL CENTER", 
                tabs: [
                    {label: '体检须知', name: 'examReport'}, 
                    {label: '体检预约', name: 'examOrder'}, 
                    {label: '我的报告', name: 'myReport'}, 
                    {label: '意见反馈', name: 'suggestion'}
                ]
            }     
         }
     },
     components:{
         HeaderNav,
         MiddleTab
     }
 }    
</script>
<style lang="">

</style>