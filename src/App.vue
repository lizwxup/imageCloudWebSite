<template>
  <div id="app">
    <router-view/>
    <footer-content></footer-content>
  </div>
</template>

<script>
import cssStyle from '@/assets/css/index.css'  //这个是公共样式  根据实际情况可在里面完善信息
import FooterContent from '@/components/Footer'
export default {
  name: 'App',
  components:{
    FooterContent
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width:1000px;
  width: auto !important; 
  width: 100%; 
  min-width:1234px;
  width:expression_r(document.body.clientWidth < 1234 ? 1234: 1234);
}
</style>
