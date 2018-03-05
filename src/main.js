// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import  './assets/js/globalUrl.js'
Vue.prototype.axios = axios
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
/* eslint-disable no-new */
var routerList = []
router.beforeEach((to,from,next)=>{
   var index = -1;
  for(var i = 0; i < routerList.length; i++) {
    if(routerList[i].name == to.name) {
    index = i;
    break;
    }
  }
  //var index = routerList.indexOf(to.name)
  if (index !== -1) {
    routerList.splice(index+1,routerList.length-index-1)
  } else{
    routerList.push({"name":to.name,"path":to.fullPath});
  }
  to.meta.routerList = routerList
  next()
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
