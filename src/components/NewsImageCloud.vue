<template>  
    <div>
        <header-nav message="2"></header-nav>
        <img src="@/assets/bg1.png" alt="" width="100%" height="500px">
        <middle-tab :mtData='newslistData'></middle-tab>
    </div>

</template>
<script>
 import MiddleTab from './MiddleTabCom.vue'
 import HeaderNav from './Header.vue'
 export default {
     data () {
         return {
            newslistData: {
                titleCN: "新闻动态",
                titleEN: "NEWS", 
                tabs: [
                    {label: '公司资讯', name: 'companyConsult'}, 
                    {label: '媒体报道', name: 'mediaReport'}, 
                    {label: '公示公告', name: 'blicity'}, 
                    {label: '政策解读', name: 'policyInterpret'}
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