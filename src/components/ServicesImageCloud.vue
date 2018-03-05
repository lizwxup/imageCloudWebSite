<template>  
    <div>
        <header-nav message="3"></header-nav>
        <img src="@/assets/bg1.png" alt="" width="100%" height="500px">
        <middle-tab :mtData="servicesListData"></middle-tab>
    </div>
</template>
<script>
 import HeaderNav from './Header.vue'
 import MiddleTab from './MiddleTabCom' 
 export default {
     data () {
         return {
            servicesListData:{
                titleCN: "服务项目",
                titleEN: "SERVICES", 
                tabs: [
                    {label: '影像设备', name: 'imageEquip'}, 
                    {label: '影像科普', name: 'imageScience'}, 
                    {label: '检查项目', name: 'checkProject'}, 
                    {label: '案例赏析', name: 'caseAppreciate'}
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