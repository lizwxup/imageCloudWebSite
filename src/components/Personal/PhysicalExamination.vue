<template>
  <div>
    <div class="pe-title">
      体检预约
    </div>
    <div class="pe-sub-title">
      TI JIAN YU YUE
    </div>
    <el-row type="flex" class="row-bg" justify="center" style="margin-top: 48px;">
      <el-col style="width:150px;height:150px;">
        <img height="auto" width="100%" src="@/assets/qrcode_wx_yygzh.jpg"/>

      </el-col>
      <el-col :span="5">
        <div class="pe-contact-way" style="margin-top:25px;">
          诊疗时间：周一至周五8:00-17:30
        </div>
        <div class="pe-contact-way">
          咨询电话：400-00000000
        </div>
        <div class="pe-contact-way">
          预约时间：请提前1-2天预约
        </div>

      </el-col>

    </el-row>
    <el-row type="flex" class="row-bg" justify="center" style="margin-top: 48px; text-align: center">
      <el-col :span="3">
        <div class="pe-step one">
          关注公众号
        </div>
      </el-col>
      <el-col :span="1">
        <div class="pe-arrow">
        </div>
      </el-col>
      <el-col :span="3">
        <div class="pe-step two">
          点击<br>"预约检查"
        </div>
      </el-col>
      <el-col :span="1">
        <div class="pe-arrow">
        </div>
      </el-col>
      <el-col :span="3">
        <div class="pe-step three">
          填写资料递交
        </div>
      </el-col>
      <el-col :span="1">
        <div class="pe-arrow">
        </div>
      </el-col>
      <el-col :span="3">
        <div class="pe-step four">
          前往检查
        </div>
      </el-col>
    </el-row>
    <div class="pe-sec-title">
      高端体检介绍
    </div>
    <div class="pe-sec-title-line"/>
    <div class="pe-sec-content">{{content}}</div>
  </div>

</template>


<script>
  export default {
    props: [''],
    name: 'PhysicalExamination',
    data () {
      return {
          content:"PET-CT爱上；读卡机的书房空间啊点上方空间啊短发就是东方红积分了阿里斯顿积分哈技术打法史蒂夫哈苏地方哈里斯地方哈就开始地方啦说的话积分啦技术打法好阿里斯顿飞机哈伦裤健身房哈里斯剪短发收到回复阿斯顿发啦说的积分换啦"

      }
    }, methods: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style>
  .pe-title {
    font-size: 28px;
    margin-top: 16px;
  }

  .pe-sub-title {
    font-size: 26px;
    font-weight: bold;
    color: #e0e0e0;
  }

  .pe-contact-way {
    font-size: 16px;
    margin-top: 15px;
    font-weight: bold;
    margin-left: 4%;
    text-align: start;
  }

  .pe-step {
    font-size: 18px;
    color: white;
    text-align: center;
    /*display:table-cell;*/
    /*vertical-align:middle;*/

    font-weight: bold;
    width: 150px;
    height: 150px;

    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .pe-step.one {
    background-image: url("../../assets/blue.png");
    line-height: 150px;
  }

  .pe-step.two {
    background-image: url("../../assets/yellow.png");
    padding-top: 50px;
  }

  .pe-step.three {
    background-image: url("../../assets/green.png");
    line-height: 150px;
  }

  .pe-step.four {
    background-image: url("../../assets/purple.png");
    line-height: 150px;
  }

  .pe-arrow {
    width: 100%;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-top: 60px;
    background-image: url("../../assets/arrow.png");
  }
  .pe-sec-title{
    font-size: 20px;
    font-weight:bold;
    margin-left: 21%;
    text-align: start;
    margin-top:30px;
  }
  .pe-sec-content{
    font-size: 16px;
    margin-left: 21%;
    margin-right: 21%;
    text-align: start;
    margin-top: 24px;
    color: #000;
  }
  .pe-sec-title-line{
    background-color: black;
    margin-left: 21%;
    height: 1px;
    width: 240px;
    margin-top: 20px;
  }
  /*@media only screen and (min-width: 631px) and (max-width: 1100px){}*/

</style>
