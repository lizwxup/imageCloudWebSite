<!--
使用方法
<middle-tab :mtData="数据"/>
数据: {
          titleCN: "走进云影", titleEN: "CLOUD", tabs: [
            {label: '公司概况', name: 'Index'}
            , {label: '发展历程', name: 'Index2'}
            , {label: '云影环境', name: 'Index3'}
            , {label: '专家团队', name: 'Index4'}
          ]
        }
  其中name对应的为组件的名称
  import MiddleTab from './MiddleTab.vue'

    components: {
      MiddleTab
    }
-->

<template>
  <div style="position: relative;min-height:300px;">
    <span>
      <div style="position: absolute;vertical-align:text-bottom;display: flex;align-items:flex-end;width: 100%;margin-top: 5px">
        <span class="cus-title-cn">  {{this.mtData.titleCN}}</span>
        <span class="cus-title-en"> {{this.mtData.titleEN}}</span>
      </div>
    </span>
    <div style="position: absolute;width: 100%">

      <el-tabs v-model="activeName">


        <el-tab-pane
          :key="item.name"
          v-for="(item, index) in this.mtData.tabs"
          :label="item.label"
          :name="item.name"
        >
          <!--这里的组件需要先添加-->
          <!--存放组件 根据ItemName来选择展示的组件-->
          <div v-if="item.name==='1'">
           <!--<service/> -->
         </div>
         
          <!--存放组件 根据ItemName来选择展示的组件-->
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>


<script>
  //组件导入
  //import Page1 from './MiddleTabTest/Page1.vue'
  //import Service from './Service.vue'

  export default {
    props: ['mtData'],
    name: 'MiddleTab',
    data () {
      return {
        activeName: ""
      }
    }, methods: {},
    mounted (){
      this.activeName = this.mtData.tabs[0].name
    },
    components: {//组件注册
      // Page1
     
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style>
  @media only screen and (min-width: 1201px) {
    .el-tabs__item {
      font-size: 24px;
      height: 80px;
      line-height: 80px;
      /*width: 180px;*/
    }

    .el-tabs__item.is-active {
      color: #126bfc !important;
      font-size: 24px;

    }

    .el-tabs__item:hover {
      color: #126bfc !important;
      font-size: 24px;
    }

    .el-tabs__active-bar {
      background-color: #253c61 !important;

      height: 3px;
    }

  

    .el-tabs__header {
      margin: 0 0 15px !important;
    }

    .cus-title-cn {
      font-size: 40px;
      color: #253b5f;
      font-weight: bold;
      margin-left: 18%;
      vertical-align: text-bottom;
    }

    .cus-title-en {
      font-size: 36px;
      color: #cccccc;
      font-weight: bold;
      margin-left: 16px;
      vertical-align: text-bottom;
    }
  }

  @media only screen and (min-width: 631px) and (max-width: 1200px) {
    .el-tabs__item {
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      /*width: 110px;*/
      /*padding:0 !important;*/
    }

    .el-tabs__item.is-active {
      color: #126bfc !important;
      font-size: 18px;
    }

    .el-tabs__item:hover {
      color: #126bfc !important;
      font-size: 18px;
    }

    .el-tabs__active-bar {
      background-color: #253c61 !important;
      height: 3px;
      /*width:90px !important;*/
    }

    .el-tabs__nav {
      margin-top: 50px;
      margin-left: 18%;
    }

    .el-tabs__header {
      margin: 0 0 15px !important;
    }

    .cus-title-cn {
      font-size: 30px;
      color: #253b5f;
      font-weight: bold;
      margin-left: 18%;
      vertical-align: text-bottom;
    }

    .cus-title-en {
      font-size: 24px;
      color: #cccccc;
      font-weight: bold;
      margin-left: 16px;
      vertical-align: text-bottom;
    }
  }

  @media only screen and  (max-width: 630px) {
    .el-tabs__item {
      font-size: 12px !important;

    }

    .el-tabs__item.is-active {
      color: #126bfc !important;
      font-size: 12px !important;

    }

    .el-tabs__item:hover {
      color: #126bfc !important;
      font-size: 12px !important;

    }

    .el-tabs__active-bar {
      background-color: #253c61 !important;
      height: 2px;
    }

    .el-tabs__nav {
      margin-top: 24px;
      margin-left: 4%;
    }

    .el-tabs__header {
      margin: 0 0 15px !important;
    }

    .cus-title-cn {
      font-size: 24px;
      color: #253b5f;
      font-weight: bold;
      margin-left: 4%;
      vertical-align: text-bottom;
    }

    .cus-title-en {
      font-size: 18px;
      color: #cccccc;
      font-weight: bold;
      margin-left: 12px;
      vertical-align: text-bottom;
    }

  }
</style>
