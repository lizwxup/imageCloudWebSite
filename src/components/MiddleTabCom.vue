<template>
    <div style="width:80%;margin:10px auto;min-height:300px;">  
        <div class="service"><div>{{this.mtData.titleCN}} <span style="color: #999;" class="font-20"> {{this.mtData.titleEN}}</span></div></div> 
        <el-tabs v-model="activeName" > 
          <el-tab-pane
          :key="item.name"
          v-for="(item, index) in this.mtData.tabs"
          :label="item.label"
          :name="item.name"
          >
          <!--服务项目-->
          <div v-if="item.name==='imageEquip'">
            <equipment/>
          </div>
          <div v-if="item.name==='checkProject'">
           <inspection/>
          </div>
           <div v-if="item.name==='imageScience'">
           <image-science/>
          </div>
           <div v-if="item.name==='caseAppreciate'">
           <case-appreciate/>
          </div>
          <!--个人中心-->
          <div v-if="item.name==='examOrder'">
            <physical-examination/>
          </div>
          <div v-if="item.name==='suggestion'">
            <feed-back/>
          </div>
          <div v-if="item.name==='examReport'">
           <medical-notice/>
          </div>
          <div v-if="item.name==='myReport'">
            <login/>
          </div>
          <!--新闻动态-->
          <div v-if="item.name==='companyConsult'">
            <vertical-list/>
          </div> 
          <div v-if="item.name==='mediaReport'">
            <media-report/>
          </div>
          <div v-if="item.name==='blicity'">
            <blicity/>
          </div>
          <div v-if="item.name==='policyInterpret'">
            <policy-interpret/>
          </div>
          <!--走进云影-->
          <div v-if="item.name==='companyHistory'">
            <time-line/>
          </div>
          <div v-if="item.name==='companyProfile'">
            <com-Profile/>
          </div>
          <div v-if="item.name==='cloudEnvironment'">
           <cloud-environ/>
          </div>
          <div v-if="item.name==='expertTeams'"> 
            <expert-list/>
          </div>
          </el-tab-pane>
          </el-tabs> 
    </div> 
</template>
<script>
import Equipment from './Services/Equipment.vue'  //影像设备
import Inspection from './Services/Inspection.vue'  //检查项目
import ImageScience from './Services/ImageScience.vue'  //检查科普
import CaseAppreciate from './Services/CaseAppreciate.vue'  //案例赏析
import PhysicalExamination from './Personal/PhysicalExamination.vue'  //体检预约
import FeedBack from './Personal/FeedBack.vue'  //意见反馈
import MedicalNotice from './Personal/MedicalNotice.vue'  //意见反馈
import Login from './Personal/Login.vue'  //意见反馈
import TimeLine from './EnterCloud/TimeLine.vue'  //走进云影 --- 发展历程
import VerticalList from './News/VerticalList.vue' //
import MediaReport from './News/MediaReport.vue' //
import Blicity from './News/Blicity.vue' //
import PolicyInterpret from './News/PolicyInterpret.vue' //
import ComProfile from './EnterCloud/CompanyProfile.vue' //走进云影 --- 公司概况  
import CloudEnviron from './EnterCloud/CloudEnviron.vue' //走进云影 --- 云影环境  
import ExpertList from './EnterCloud/ExpertsList.vue' //走进云影 --- 专家列表
export default {
    props: ['mtData'],
    name: 'MiddleTab',
    data () {
      return {
        activeName: ""
      }
    }, 
    methods: {},
    mounted (){
      this.activeName = this.mtData.tabs[0].name
    },
    components: {//组件注册
      // Page1
     Equipment,
     Inspection,
     PhysicalExamination,
     TimeLine,
     FeedBack,
     VerticalList,
     ComProfile,
     CloudEnviron,
     MedicalNotice,
     ExpertList,
     Login,
     MediaReport,
     Blicity,
     PolicyInterpret,
     ImageScience,
     CaseAppreciate
    }
  }
</script>
<style>
    .service{
        font-size: 28px;
        color: #243a61;
        font-weight: 700;
        float: left;
        line-height: 40px;
        padding-right: 100px;
        position: relative;
        padding-left: 5%;
        height: 45px;
        width:50%;
    } 
    .service:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
       background-color: #e4e7ed;
        z-index: 1;
    }
    .el-tabs__item{
      font-size:16px;
      height:45px;
      /*width:110px;*/
    }
    .el-tabs__active-bar{
      background:#253b5f;
    }
    .el-tabs__nav-wrap{
       left: -100px;
    }
</style>