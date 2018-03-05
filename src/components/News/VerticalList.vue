<template>
  <div style="margin-top: 48px;margin-bottom: 48px;">
    <el-card class="box-card" v-for="(item,index) in data_list" :key="index" :body-style="{ padding: '0px' }">
      <el-row class="vl-content-box">
        <el-col :span="6" class="vl-item-date-box">
          <div class="vl-item-date">
            <div class="vl-item-date-month">{{item.month}}</div>
            <div class="vl-item-date-year">{{item.year}}</div>
          </div>
        </el-col>
        <el-col :span="7">
          <img :src="item.images" class="vl-image">
        </el-col>
        <el-col :span="11">
          <div class="vl-item-content-box">
            <div class="vl-item-title">
              {{item.title}}
            </div>
            <div class="vl-item-content">
              {{item.synopsis}}
            </div>
            <div class="vl-item-info" v-on:click="onClickInfo(item.essay_id,item.title)">
              查看详情
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="current_page"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="5"
      layout="sizes, prev, pager, next"
      background
      :total="60">
    </el-pagination>
  </div>

</template>


<script>
  import 'element-ui/lib/theme-chalk/base.css';
  export default {
    props: ['typeId','mediaReportData'],
    name: 'PhysicalExamination',
    data () {
      return {
        inner_type_id: 1,
        current_page: 1,
        total_page: 1,
        page_number: 1,
        data_list: [
          {
            month: "12-22",
            year: "2017",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/62.jpg",
            title: "阿司匹林和布洛",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达是最佳之选。",
            essay_id: 1
          },
          {
            month: "12-21",
            year: "2016",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/64.jpg",
            title: "芬均属于非甾体",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达喜和奥美拉唑往奥美拉唑往往是最佳之选。",
            essay_id: 2
          },
          {
            month: "11-20",
            year: "2012",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/66.jpg",
            title: "酸等物质对胃黏膜的刺",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达喜和奥美拉唑往达喜和奥美拉唑往往是最佳之选。",
            essay_id: 3
          },
          {
            month: "2-22",
            year: "2018",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/67.jpg",
            title: "的产生，从而加剧胃",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达喜和奥美拉唑往往是最佳之选。",
            essay_id: 4
          },
          {
            month: "4-4",
            year: "2015",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/68.jpg",
            title: "保护胃粘膜的物质--前列腺素",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡唑往往是最佳之选。",
            essay_id: 5
          },
          {
            month: "9-1",
            year: "2012",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/69.jpg",
            title: "会抑制",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达喜和奥美拉唑往往是最佳之选。",
            essay_id: 6
          },
          {
            month: "2-3",
            year: "2011",
            images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/610.jpg",
            title: "类抗炎药（NSAIDs），这种镇痛药",
            synopsis: "激作用，使胃痛加剧。胃炎胃溃疡导致的胃痛，达喜",
            essay_id: 7
          }
        ],
        // mediaReportList:[
        //     {
        //       month: "12-22",
        //       year: "2017",
        //       images: "https://gss0.bdstatic.com/70cFsj3f_gcX8t7mm9GUKT-xh_/zhidaoribao2014/2015year/0708/62.jpg",
        //       title: "极速极速近似数搜索 是是是是是 ",
        //       synopsis: "激作用111，使胃痛加剧。胃炎胃溃疡导致的胃痛，达是最佳之选。",
        //       essay_id: 1
        //   },
        //]    
      }
    },
    mounted (){
      this.inner_type_id = this.typeId
      console.log(this.mediaReportData)
      if (this.typeId === 'mediaReport' || 
          this.typeId === 'blicity' || 
          this.typeId === 'policyInterpret' || 
          this.typeId === 'imageScience' ||
          this.typeId === 'caseAppreciate') {
        this.data_list =this.mediaReportData
      }
    }, methods: {
      onClickInfo(id,title){
        this.$router.push('/detail/'+id)
      },
      handleSizeChange(val){
        this.page_number=val;
        if(this.current_page===1){//手动触发
          this.handleCurrentChange(1);
        }else{
          this.current_page=1;
        }
      },
      handleCurrentChange(val){
        this.current_page=val;
        console.log("刷新数据"+this.current_page);
//        在这里处理事件，因为每次的handleSizeChange都会触发这个方法

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style>
  .el-pagination.is-background .el-pager li.active {
    background-color: #fa8d13 !important;
  }

  .el-pager li:hover {
    color: #fa8d13 !important;
  }

  .vl-item-date {
    clear: both;

  }

  .vl-item-date-box {
    background-color: #eeeff0;
    height: 230px;
  }

  .box-card {
    width: 1000px;
    transition: all 0.2s;
    margin: 24px auto;
  }

  .box-card:hover {

    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    transform: scale(1.005);
  }


  .vl-image {
    width: 100%;
    height: 230px;
  }

  .vl-image :hover {
    transform: scale(1.3);
  }
  .vl-content-box {
    height: 230px;
  }

  .vl-item-info {
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    float: left;
    border-radius: 6px;
    width: 140px;
    height: 40px;
    border: 1px solid #fd9d00;
    background-color: #fd9d00;
  }

  .vl-item-info:hover {
    outline: none;
    background-color: rgb(225, 141, 0);
  }

  .vl-item-title {
    margin-top: 28px;
    font-size: 20px;
    text-align: start;
    font-weight: bold;
  }

  .vl-item-content {
    margin-top: 16px;
    max-lines: 2;
    height: 64px;;
    margin-right: 24px;
    font-size: 16px;
    text-align: start;
  }

  .vl-item-content-box {
    padding-left: 68px;
  }

  .vl-item-date-month {
    color: #253c61;
    margin-top: 69px;
    font-size: 45px;
    font-weight: bold;
  }

  .vl-item-date-year {
    color: #5a5b5c;
    font-size: 35px;
  }

  /*@media only screen and (min-width: 631px) and (max-width: 1100px){}*/

</style>
