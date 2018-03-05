<template>  
    <div>
        <header-nav message="1"></header-nav>
        <img src="@/assets/bg1.png" alt="" width="100%" height="500px">
        <middle-tab :mtData='imageCloudListData'></middle-tab>
    </div>

</template>
<script>
 import HeaderNav from './Header.vue'
 import MiddleTab from './MiddleTabCom.vue'
 export default {
     data () {
         return {
           imageCloudListData: {
                titleCN: "走进云影",
                titleEN: "CLOUD", 
                tabs: [
                    {label: '公司概况', name: 'companyProfile'}, 
                    {label: '发展历程', name: 'companyHistory'}, 
                    {label: '云影环境', name: 'cloudEnvironment'}, 
                    {label: '专家团队', name: 'expertTeams'}
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