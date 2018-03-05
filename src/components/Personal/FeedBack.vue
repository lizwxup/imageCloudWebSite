<template>
  <div>
    <div class="fb-title">
      意见反馈
    </div>
    <div class="fb-sub-title">
      YI JIAN FAN KUI
    </div>
    <!--第一行-->
    <el-row :gutter="10" style="margin-top: 48px;">
      <el-col :span="9">
        <div class="fb-name">
          姓名
        </div>
      </el-col>
      <el-col :span="15">
        <div class="fb-input-1">
          <el-input placeholder="" :maxlength="30" v-model="FBName"></el-input>
        </div>
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row :gutter="10" style="margin-top: 16px;">
      <el-col :span="9">
        <div class="fb-name">
          Email
        </div>
      </el-col>
      <el-col :span="15">
        <div class="fb-input-1">
          <el-input placeholder="" :maxlength="50" v-model="FBEmail"></el-input>
        </div>
      </el-col>
    </el-row>
    <!--第三行-->
    <el-row :gutter="10" style="margin-top: 16px;">
      <el-col :span="9">
        <div class="fb-name">
          您的意见
        </div>
      </el-col>
      <el-col :span="15">
        <div class="fb-input-2">
          <el-input
            type="textarea"
            resize="none"
            :maxlength="255"
            v-model="FBQuestion"
            :autosize="{ minRows: 4, maxRows: 4}"
            placeholder="请输入内容"
          >
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!--第四行-->
    <el-row :gutter="10" style="margin-top: 16px;">
      <el-col :span="9">
        <div class="fb-name">
          其他联系方式
        </div>
      </el-col>
      <el-col :span="15">
        <div class="fb-input-2">
          <el-input
            type="textarea"
            :maxlength="100"
            resize="none"
            v-model="FBContact"
            :autosize="{ minRows: 4, maxRows: 4}"
            placeholder="请输入内容">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!--底部按钮-->
    <el-row :gutter="16" type="flex" class="row-bg" justify="center" style="margin-top:46px;margin-bottom: 48px;">
      <el-col :span="12">
        <div style="text-align: end">
          <div class="fb-btn-1" v-on:click="onReFill">
            重填
          </div>
          <!--<el-button plain style="color: #fd9d00">重填</el-button>-->
        </div>
      </el-col>
      <el-col :span="12">
        <div style="text-align: start">
          <div class="fb-btn-2" v-on:click="onSubmit">
            发送
          </div>
        </div>
      </el-col>
    </el-row>

  </div>

</template>


<script>
  function isEmail(FBEmail) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(FBEmail);
  }
  export default {
    props: [''],
    name: 'PhysicalExamination',
    data () {
      return {
        FBName: "",
        FBEmail: "",
        FBContact: "",
        FBQuestion: ""
      }
    }, methods: {
      onReFill(){
        this.FBName = "";
        this.FBEmail = "";
        this.FBContact = "";
        this.FBQuestion = "";
      },
      onSubmit(){
        if (
          this.FBName.size !== 0 && this.FBQuestion.size !== 0 &&
          isEmail(this.FBEmail)) {
          console.log('邮箱验证通过');
        //  this.axios.post('/user', {
        //    name: this.FBName,
        //    email: this.FBEmail,
        //    contact: this.FBContact,
        //    question: this.FBQuestion,
        //  })
        //    .then(function (response) {
        //      console.log(response);
        //    })
        //    .catch(function (error) {
        //      console.log(error);
        //    });
        } else {
          console.log('邮箱验证未通过');
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only  -->
<style>
  .fb-title {
    font-size: 28px;
    margin-top: 16px;
  }

  .fb-sub-title {
    font-size: 24px;
    font-weight: bold;
    color: #e0e0e0;
  }

  .fb-name {
    color: #000;
    margin-top: 4px;
    height: 100%;
    text-align: end;
  }

  .fb-input-1 {
    width: 60%;
  }

  .fb-input-2 {
    width: 80%;
  }


  .fb-btn-1 {
    font-size: 18px;
    color: #fd9d00;
    text-align: center;
    line-height: 40px;
    border-radius: 6px;
    float: right;
    width: 140px;
    height: 40px;
    border: 1px solid #fd9d00;
    background-color: #ffffff;
  }

  .fb-btn-2 {
    font-size: 18px;
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

  button:focus {
    outline: none;
  }

  .fb-btn-1:hover {
    outline: none;
    background-color: rgba(253, 157, 0, 0.38);
  }

  .fb-btn-2:hover {
    outline: none;
    background-color: rgb(225, 141, 0);
  }


</style>
