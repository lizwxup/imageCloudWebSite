<template>
  <div id="fullpage">
  
  <!--nav-->
  <div class='nav-all'>
    <div class="in-nav p-a">
        <el-row :gutter="10">
          <el-col :span="6"><img src="@/assets/logoIndex.png" width="100%" height="100%" class="ver-middle"></el-col>
          <router-link :to="{path:'/'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3">首页</el-col></router-link>
          <router-link :to="{path:'/cloud'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3" >走进云影</el-col></router-link>
          <router-link :to="{path:'/news'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3">新闻动态</el-col></router-link>
          <router-link :to="{path:'/services'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3">服务项目</el-col></router-link>
          <router-link :to="{path:'/personal'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3" >个人中心</el-col></router-link>
          <router-link :to="{path:'/contact'}" class="router"><el-col :xs="3" :sm="2" :md="2" :lg="3" :xl="3">联系我们</el-col></router-link>
        </el-row>          
    </div>
  </div>
    <!--轮播-->
    <el-carousel height="600px">
      <el-carousel-item v-for="(item,index) in carouselData" :key="index"  class="set-bg" :style="{backgroundImage: 'url(' +Img.bgImg + ')' }">
        <div id="test" class="bg-cover"></div>
        <div class="fff item-title position-more font-24">{{ item.title }}</div>
        <div class="fff content-item position-more">{{ item.content}}</div>
        <div class="position-more get-more fff" @click="getMore">{{item.more}}</div>
      </el-carousel-item>
    </el-carousel>
    <!--走进云影-->
    <div class="go-enter">
        <div class="font-36 weight color-555 wow slideInDown">走进云影</div>
        <div class="ededed font-36 wow slideInDown">IMAGE CLOUD</div>
        <div class="go-enter-center  ">
            <div class="yunyingyingxiang wow slideInLeft">
            <img :src="Img.enterImg" width="400px" style="object-fit: cover"></img>
          </div>
        <div class="image-cont">
            <p class="ff5700 weight font-22 t-l  wow slideInDown">{{goImageCloud.title}}</p>
            <div class="text-indent t-l  wow slideInDown font-16 content-cloud">{{goImageCloud.content}}</div>
            <router-link :to="{path:'/cloud'}"><p class="bg-fa8d13 see-detail fff  wow slideInDown">查看详情</p></router-link>
        </div>
      </div>
    </div>
    <!--我们的服务-->
    <router-link :to="{path:'/services'}"><div :style="{backgroundImage: 'url(' + Img.bgServices + ')' }" class="p-r services-bg set-bg  "  >
    <div id="services-test1" class="bg-cover" ></div>
        <div class="weight fff ourservices-cn font-36 z-index  p-a ourservices  wow lightSpeedIn ">我们的服务</div>
        <div class="ededed  ourservices-en font-36 z-index  p-a ourservices wow lightSpeedIn">OUR SERVICES</div> 
      <!--图形列表-->
      <div class="services-list go-enter fff  p-a z-index ourservices" >
          <div>
              <el-row :gutter="20" >
                <el-col :span="6" v-for="(item,index) in servicesListData" :key='index'>
                    <div class="grid-content wow slideInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                    <div class="highbg">
                       <img :src="item.img" alt="" width="50%">
                    </div>
                      <p class="weight font-22">{{item.title}}</p>
                      <p class="ededed font-16">{{item.content}}</p>
                      </div>
                </el-col>
              </el-row>
          </div>
      </div>
    </div>
    <div>
    </div>
</router-link>
    <!--专家团队-->
     <div class="go-enter">
        <div class="font-36 weight color-555 wow lightSpeedIn">专家团队</div>
        <div class="ededed font-36 wow lightSpeedIn">OUR TEAMS</div>
        <div class="font-24 teams-cont color-8b8b8b">严谨、高效、完美主义、强迫症、责任感是我们共同的特点</div>
        <!--轮播图-->
     </div>
      <div height="300px" :interval = '5000' indicator-position = 'outside' style="margin:0 auto;width:1140px;overflow:hidden;position:relative" @mouseenter="enterFlag"  @mouseleave="leaveFlag">
          <button class="p-a el-carousel__arrow el-carousel__arrow--right" style="right:0;top:50%;" @click="slideRight" v-show="!flagShow">
              <i class="el-icon-arrow-right"></i>
          </button>
          <button class="p-a el-carousel__arrow el-carousel__arrow--left" style="left:0;top:50%;" @click="slideLeft" v-show="!flagShow">
             <i class="el-icon-arrow-left"></i>
          </button>
          <div style="width:924px;margin:0 auto;overflow:hidden;">
              <div  class="set-bg-list" style="width:300000px;height:320px; transition-timing-function: ease;
        transition-duration: 300ms;" ref="wrapperContent">
                <div class="set-list-data p-r"  v-for="(item,index) in exportOnlineData" :key="index" @mouseenter="enter(index)" @mouseleave="leave(index)">
                    <img :src="Img.listdata" alt="" width="100%" height="100%">
                    <div id="expertCover" v-if="show===index ? true: false" ></div>
                    <div class="p-a list-cont-detail  fff" v-if="show===index ? true: false" >              
                        <span class="font-14">{{item.name}} {{item.profession}} <span class="bg-fa8d13 introduce-cont" @click="introduceContent(index)">查看介绍</span></span>
                    </div>
                </div> 
            </div>
          </div>
          <ul class="craousel-indicator">
                <li  v-for="(item,index) in lengthIndex" :key='index'  :class = "{ active: index===expertIndex}" @click="expertListIndex(index)">
                </li>
            </ul>
        </div>     
    <!-- slot  -->
  </slider>
    <!--新闻动态-->
     <div class="go-enter" style="margin-bottom:30px;">
        <div class="font-36 weight color-555 wow lightSpeedIn">新闻动态</div>
        <div class="ededed font-36 wow lightSpeedIn">LATEST NEWS</div>
        <div class="news-list">
          <el-row :gutter="10" style="width:75%;margin:0 auto;">
            <el-col :xs="6" :sm="12" :md="8" :lg="10" :xl="12">
            <div class="img-list  wow slideInLeft" v-for="(item,index) in newsImgListData" :key='index' data-wow-duration="0.5s" data-wow-delay="0.15s">
                <div><img src="../assets/newslist.png" alt="" width="100%" height="128px"></div>
                <div class="list-left t-l">
                <p class="e1423f news-list-title o-h font-16">{{item.title}}</p>
                <p class="font-14 color-686868">{{item.content}}</p>
                </div>
            </div>  
            </el-col>
            <el-col :xs="6" :sm="12" :md="8" :lg="10" :xl="12" style="padding-left:50px;">
              <div class="img-list wow slideInRight" v-for="(item,index) in newsList" :key="index" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <div class="news-date">
                  <div style="margin:15px auto"> <div class="font-30 weight">{{item.day}}</div><div class="font-14">{{item.date}}</div></div>
                </div>
                <div class="list-left t-l">
                <div class="o-h font-16">{{item.title}}</div>
                <div class="o-h font-14 color-939393">{{item.content}}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
     </div>
  </div>
</template>
<script>
import bgImg from '@/assets/bg4.png'
import enterImg from '@/assets/yunyingyingxiang.png'
import bgServices from '@/assets/servicesbg.png'
import highequip from '@/assets/highequip.png'
import report from '@/assets/report.png'
import doctor from '@/assets/doctor.png'
import qualificat from '@/assets/qualificat.png'
import listdata from '@/assets/img1.png'
import slider from 'vue-concise-slider'

export default {
      data () {

        return {
          Img:{
             bgImg: bgImg,
             enterImg: enterImg,
             bgServices: bgServices,
             listdata:listdata
          },
          flagShow:true,
          expertRightIndex:0,
          expertLeftIndex:0,
          expertIndex:0,
          scroll:0,
          show:-1,
          goImageCloud:{
            title:'打造全国一体化医学影像服务平台',
            content:'2017年E诊断获得建立独立第三方影像中心的合法资质，随即全力以赴着手“影像诊断——高端体验——影像科研”三位'
          },
          lengthIndex:0,
          exportOnlineData: [
              {
                name:'郭美美1',
                profession:'主任医师1'
              },
              {
                name:'郭美美2',
                profession:'主任医师1'
              },
              {
                name:'郭美美3',
                profession:'主任医师1'
              } ,
              {
                name:'郭美美4',
                profession:'主任医师1'
              }
          ],
          activeName: 'second',
          carouselData: [
            {
              title: '影响诊断-高端体验-影像科研三位一体',
              content:'打造全国一体化医学影像服务平台',
              more:'了解更多'
            },
            { 
              title: '影响诊断-高端体验-影像科研三位一体1',
              content:'打造全国一体化医学影像服务平台1',
              more:'了解更多1'
            }
          ],
          newsList: [
            {
              day:'22',
              date:'2018.1',
              title:'2017年合法资质云影影像即将2017年合法',
              content:'2017年合法资质云影影像即将2017年合法'
            },
            {
              day:'23',
              date:'2018.1',
              title:'2017年合法资质云影影像即将2017年合法',
              content:'2017年合法资质云影影像即将2017年合法'
            },
            {
              day:'24',
              date:'2018.1',
              title:'2017年合法资质云影影像即将2017年合法',
              content:'2017年合法资质云影影像即将2017年合法'
            }
          ],
          newsImgListData:[
            {
              title:'云影影像即将建成',
              content:'2017年合法资质云影影像即将建成2017年合法资质云影影像即将建成2017年合法资质云'
            },                                       
            {
              title:'云影影像即将建成1',
              content:'2017年合法资质云影影像即将建成2017年合法资质云影影像即将建成2017年合法资质云1'
            }
          ],
          servicesListData:[
            {
              title:'高端设备',
              content: '目前国内最先进的影像诊断设备',
              img:highequip
            },
            {
              title:'名医坐诊',
              content: '来自西京，交大一附院的专家',
              img:doctor
            },
            {
              title:'速出报告',
              content: '平诊2小时，急诊1小时',
              img:qualificat
            },
            {
              title:'合法资质',
              content: '线下影像中心医疗机构资质',
              img:report
            }
          ]
        }
     },
     methods:{
       leave (index) {
          this.show = index
       },
       enter (index) {
          this.show = index
       },
       getMore () {
          this.$router.push('/test')
       },
       slideLeft () {
          var wrapperContent = this.$refs.wrapperContent,
             exportOnlineDataLength = this.exportOnlineData.length,
             num1;
              if (this.expertRightIndex  === -1 ) {
                 this.expertRightIndex =  this.expertRightIndex+2
              }
              if (this.expertRightIndex === 0 ) {
                  this.expertRightIndex = this.exportOnlineData.length-3 
              } else {
                  this.expertRightIndex--
              }
               num1 = this.expertRightIndex *'-310'
               this.expertIndex = this.expertRightIndex
               wrapperContent.style.transform="translate3d("+num1+"px, 0px, 0px)"
              if (this.expertRightIndex >= exportOnlineDataLength-3) {
                  this.expertRightIndex = exportOnlineDataLength-3
              }
              if (this.expertIndex === exportOnlineDataLength-2) {
                  this.expertIndex = 0
              } 
       },           
       slideRight () {
              var wrapperContent = this.$refs.wrapperContent,
                 exportOnlineDataLength = this.exportOnlineData.length;
              this.expertIndex++ 
              this.expertRightIndex++
              var num ='-310'*this.expertRightIndex  
              wrapperContent.style.transform="translate3d("+num+"px, 0px, 0px)"
              if (this.expertRightIndex >= exportOnlineDataLength-3  ) {
                 this.expertRightIndex = -1
              }
              if (this.expertIndex === exportOnlineDataLength-2) {
                  this.expertIndex = 0
              }  
       },
       expertListIndex (index) {
         this.expertIndex = index
         var wrapperContent = this.$refs.wrapperContent
         var num ='-310'*index
         wrapperContent.style.transform="translate3d("+num+"px, 0px, 0px)"
       },
       enterFlag () {
          if (this.exportOnlineData.length === 3) {
              this.flagShow = true
           } else {
             this.flagShow = false
           }
       },
       leaveFlag () {
          this.flagShow = true

       },
       introduceContent (index) {  //查看专家的内容信息 

       }
     },
     mounted () {
       this.$nextTick(()=>{
         new WOW().init()
        this.lengthIndex = parseInt(this.exportOnlineData.length - 3 )+1
         var self =this
         this.axios.get(global.serverUrl+'/order_api/v1/doctor/check/order/report?oid=76',{
           headers:{
             'uid':10000,
             'token':'c3c11293-77dd-417e-a128-909656c0b5b9'
           }
         }, r => {
            console.log('first')
            console.log(r)
            console.log('second')
        })
     })
     },
     components:{
       slider
     }
  }
</script>
<style scoped>
.expand-enter-active {
  transition: all .5s;
}
.expand-leave-active{
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-trans-enter {
  transform: translateX(900px);
}

.router{
  color:#fff !important;
  font-size:18px;
  font-weight:900;
}
.teams-cont{
  margin-bottom:40px;
}
.img-list{
  display:flex;
  margin-top:15px;
}
.news-date{
  width:80px;
  height:80px;
  background:#f6f4f9;
}
.list-cont-detail{
  left:15px;
  bottom:10px;
  right:0;
}
.craousel-indicator li.active{
  width:10px;
  height:10px;
  background:#ff5700;
  border-radius:50%;
}
.craousel-indicator li{
  width:10px;
  height:10px;
  background:#b3b3b3;
  border-radius:50%;
  margin-right:10px;
}
.craousel-indicator{
  display:flex;
  justify-content:center;
}
#expertCover{
  position:absolute;
  left:0;
  bottom:0;
  background:-prefix-linear-zgradient( bottom, #000, rgba(0,0,0,0)); 
  background:linear-gradient(bottom, #000, rgba(0,0,0,0));
  background:-webkit-linear-gradient(bottom, #000, rgba(0,0,0,0));
  height: 100px;
  width: 100%;
  border-radius: 5px;
  opacity:0.4;
  filter: alpha(opacity=40);
}
.router-link-active{
      color:#0068f5 !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.cr-expert-cover{
  display:flex;
  justify-content:center;
}
.bg-purple {
  background: #d3dce6;
}
.item-title{
  top:200px;
  font-size:25px;
}
.introduce-cont{
  width:40%;
  height:40px;
  line-height:40px;
  border-radius:10px;
  padding: 3px 15px;
}
.in-nav{
  width:60%;
  z-index: 3;
  color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 84px;
  line-height: 84px;
  margin: 0 auto;
}
.el-tabs__item{
  width:200px !important;
}
.el-carousel__indicators--outside button{
  background-color: #fa8d13 !important;
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
}
.set-list-data{
  width:250px;
  height:300px;
  /*display:inline-block;*/
  float:left;
  margin:3px 30px;

}
.set-list-data img{
  margin-right:5px;
  border-radius:5px;
  box-shadow: 2px 2px 2px #ccc;
}
.el-carousel__indicator.is-active button{
  background-color:#ffb10d !important;
}
.position-more{
  position:absolute;
  left:0;
  bottom:0;
  right:0;  
  z-index:3;
}
.content-item{
  top:260px;
  font-size:50px;
  font-weight:bold;
}
.get-more{
  top:370px;
  border:1px solid #fff;
  padding:1px 3px;
  width:100px;
  height:40px;
  text-align:center;
  line-height:40px;
  border-radius:5px;
  margin-left:47.5%;
}
.set-bg{
  width:100%;
  background-position: center center;
  background-repeat:  no-repeat;
  background-size:cover;
}
.list-left{
  margin-left:10px;
  width:300px;
  padding-top:10px;
}
.list-left div{
  line-height:30px;
  height:30px;
}
.list-left p:nth-child(2) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.bg-cover{
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:2;
}
#test{
  height:600px;
  background:#000;
  opacity:0.7;
  /*兼容IE8及以下版本浏览器*/
  filter: alpha(opacity=70);
}
#services-test1{
  height:500px;
  background:#5f0c54;
  opacity:0.7;
/*兼容IE8及以下版本浏览器*/
  filter: alpha(opacity=20);
}
.go-enter{
  width:60%;
  margin: 20px auto;
}
.news-list-title{
  margin-top:0px;
  height:25px;
}
.go-enter-center{
  display:flex;
  justify-content: space-around;
  margin:8px auto;  
  margin-bottom:35px;
}
.see-detail{
  width:150px;
  height:40px;
  line-height:40px;
  text-align:center;
  border-radius:5px;
}
.go-enter div.ededed:nth-child(2){
  margin-top:-10px;
  margin-bottom:10px;
}
.content-cloud{
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
}
.image-cont{
  width:500px;
  margin-top:10px;
}
.services-bg{
  height:500px;
}
img{
  max-width:100%;
}
.ourservices{
  left:0;
  right:0;
  bottom:0
}
.grid-content p{
  line-height:55px;
}
.ourservices-en{
  top:86px;
  color:#b1b1b1;
}
.ourservices-cn{
 top:50px;
}
.highbg{
  width:100px;
  height:100px;
  border-radius:50%;
  background:#ededed;
  line-height:100px;
  margin: 0 auto;
}
.highbg img{
  vertical-align:middle;
}
.services-list{
  top:160px;
}
.el-carousel__indicators--outside button{
  background:#ffb10d;
}
.list-left p:nth-child(2){
  line-height:22px;
  margin-top:12px;
  margin-bottom:15px;
}
.nav-all{
 /* width:100%;
  height:84px;
  position:fixed;
  z-index:3;*/
}
</style>
