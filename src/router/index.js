import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index' 
import GoToImageCloud from '@/components/GotoImageCloud'
import NewsImageCloud from '@/components/NewsImageCloud'
import ServicesImageCloud from '@/components/ServicesImageCloud'
import PersonalImageCloud from '@/components/PersonalImageCloud'
import ContactImageCloud from '@/components/ContactImageCloud'
import NewsDetail from '@/components/NewsDetail'
import Ceshi from '@/components/Ceshi'
Vue.use(Router)
var router =  new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/cloud',
      name: '走进云影',
      component: GoToImageCloud
    },
    {
      path: '/news',
      name: '新闻动态',
      component: NewsImageCloud,
     },
     {
      path: '/services',
      name: '服务项目',
      component: ServicesImageCloud
     },
     {
      path: '/personal',
      name: '个人中心',
      component: PersonalImageCloud
     },
     {
      path: '/contact',
      name: '联系我们',
      component: ContactImageCloud
     },
     {
      path: '/detail/:id',
      name: '新闻详情',
      component: NewsDetail
     },
     {
      path: '/test',
      name: 'ceshi',
      component: Ceshi
     },
     {
      path:'*',
      redirect: '/'
    }
  ]
})


export default router
