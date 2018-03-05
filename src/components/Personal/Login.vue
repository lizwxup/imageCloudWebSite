<template>
  <div style="margin-top: 48px;margin-bottom: 48px;">
    <el-card class="l-box-card" :body-style="{ padding: '0px' }">
      <div class="l-title-bg">
        <span style="margin: 0 auto;">
          <el-row>
            <el-col :span="11">
              <div class="l-title-style-right" v-on:click="tablePassWord(1)">密码登录</div>
              <transition name="el-zoom-in-center">
               <div v-show="show" class="l-title-style-right-bar"></div>
              </transition>

            </el-col>
            <el-col :span="2">
              <div class="l-title-split"></div>
            </el-col>

            <el-col :span="11">
              <div class="l-title-style-left" v-on:click="tablePassWord(2)">手机动态码登录</div>
               <transition name="el-zoom-in-center">
                 <div v-show="!show" class="l-title-style-left-bar"></div>
              </transition>

            </el-col>
          </el-row>
        </span>


      </div>
      <div>
        <el-form v-show="show" status-icon :rules="rules1" ref="ref1" style="margin: 32px auto;width:500px;"
                 label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名：" prop="name">
            <el-input style="width: 400px;float: left;" v-model="formLabelAlign.name"></el-input>
          </el-form-item>

          <el-form-item label="密码：" prop="pwd">
            <el-input style="width: 400px;float: left;" type="password" v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>

          <el-form-item label="验证码：" prop="verify">
            <el-input style="width: 100px;    float: left;" v-model.number="formLabelAlign.verify"></el-input>
            <span @click="refreshCode" class="identify-box">
        <identify :identifyCode="identifyCode"></identify>
        </span>
          </el-form-item>
          <el-form-item>
            <div class="btn-login" @click="LOnSubmit('formLabelAlign')">登录</div>

          </el-form-item>

        </el-form>
        <el-form v-show="!show" status-icon :rules="rules2" ref="ref2" style="margin: 32px auto;width:500px;"
                 label-position="right" label-width="80px" :model="MessageAuthenticationLogin">

          <el-form-item label="手机号：" prop="phoneNumber">
            <el-input style="width: 400px;float: left;"
                      v-model="MessageAuthenticationLogin.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="verifyCode">
            <el-input style="width: 270px;float:left;"
                      v-model.number="MessageAuthenticationLogin.verifyCode"></el-input>

            <el-button class="identify-box"
                       @click="getVerifyCode('MessageAuthenticationLogin')"
                       type="success"
                       plain
                       :disabled="disabled">{{verifyCodeBtnTxt}}
            </el-button>

          </el-form-item>
          <el-form-item>
            <div class="btn-login" @click="LOnSubmit2('MessageAuthenticationLogin')">登录</div>
          </el-form-item>

        </el-form>


      </div>

    </el-card>

  </div>

</template>


<script>
  import 'element-ui/lib/theme-chalk/base.css';
  import Identify from './identify.vue'
  export default {
    name: 'Login',
    data () {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      var checkIdentifyCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {

          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else if (this.identifyCode == value) {
            callback();
          } else {
            callback(new Error('验证码错误'));
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validateVerifyCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        } else {
          callback();
        }
      };
      var validatePhoneNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'));
        } else {
          callback();
        }
      };
      return {
        show: true,
        id: 1,
        disabled: false,
        verifyCodeBtnTxt: "获取验证码",
        count: '',
        timer: null,
        formLabelAlign: {
          name: '',
          pwd: '',
          verify: ''

        },
        MessageAuthenticationLogin: {
          phoneNumber: '',
          verifyCode: ''
        },
        identifyCodes: "1234567890",
        identifyCode: "",
        rules1: {
          name: [
            {validator: checkName, trigger: 'blur'}
          ],
          pwd: [
            {validator: validatePass, trigger: 'blur'}
          ],
          verify: [
            {validator: checkIdentifyCode, trigger: 'blur'}
          ]
        },
        rules2: {
          phoneNumber: [
            {validator: validatePhoneNumber, trigger: 'blur'}
          ],
          verifyCode: [
            {validator: validateVerifyCode, trigger: 'blur'}
          ]
        }
      }
    },
    mounted (){
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    }, methods: {
      LOnSubmit(formName) {
//        axios.post('/user', {
//            name: formName.name,
//            pwd: formName.pwd
//          })
//            .then(function (response) {
//              console.log(response);
//            })
//            .catch(function (error) {
//              console.log(error);
//            });
      }, LOnSubmit2(MessageAuthenticationLogin) {
//        axios.post('/user', {
//            name: formName.name,
//            pwd: formName.pwd
//          })
//            .then(function (response) {
//              console.log(response);
//            })
//            .catch(function (error) {
//              console.log(error);
//            });
      },
      tablePassWord(id){
        if (this.id !== id) {
          this.show = !this.show;
          this.id = id;
        }
      }, randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
      }, getVerifyCode(formLabelAlign){//获取短信验证码
//        axios.post('/user', {
//            phoneNumber: formLabelAlign.phoneNumber
//          })
//          .then(function (response) {

        //网络请求成功之后开始计时
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.disabled = true;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.verifyCodeBtnTxt = this.count + "秒后再试";
            } else {
              this.disabled = false;
              clearInterval(this.timer);
              this.timer = null;
              this.verifyCodeBtnTxt = "获取验证码";
            }
          }, 1000)
        }
//            })
//            .catch(function (error) {
//              console.log(error);
//            });
      }
    },
    components: {//组件注册
      Identify
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

  .l-box-card {
    width: 800px;
    height: 468px;
    margin: 24px auto;
  }

 /*.el-row {
    width: 800px;
    margin: 0 auto;
  }*/

  .l-title-bg {
    height: 100px;
    padding-top: 30px;
    background: -webkit-linear-gradient(left, #55a6ff, #be8bff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #55a6ff, #be8bff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #55a6ff, #be8bff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #55a6ff, #be8bff); /* 标准的语法（必须放在最后） */

  }

  .l-title-style-right {
    font-size: 22px;
    margin-right: 5px;
    color: #ffffff;
    cursor: default;
    text-align: right;

    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }

  .l-title-style-left {
    font-size: 22px;
    cursor: default;
    margin-left: 5px;
    color: #ffffff;
    text-align: left;

    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }

  .l-title-split {
    background-color: white;
    width: 2px;
    margin-top: 4px;
    margin-left: auto;
    margin-right: auto;
    height: 22px;

  }

  .l-title-style-right-bar {
    width: 100px;
    margin-top: 8px;
    margin-left: auto;
    height: 2px;
    background-color: white;
  }

  .l-title-style-left-bar {
    width: 163px;
    margin-top: 8px;
    margin-right: auto;
    height: 2px;
    background-color: white;
  }

  .l-name {
    color: #000;
    margin-top: 4px;
    height: 100%;
    font-size: 22px;
    text-align: end;
  }

  .l-input-1 {
    width: 60%;
  }

  .el-input__inner {
    font-size: 20px;
  }

  /*@media only screen and (min-width: 631px) and (max-width: 1100px){}*/
  .code {
    margin: 400px auto;
    width: 114px;
    height: 40px;
    border: 1px solid red;
  }

  .identify-box {
    display: inline-block;
    height: 38px;
    vertical-align: middle;
    float: left;
    margin-left: 16px;
  }

  .btn-login {
    /*border: 1px solid red;*/
    border-radius: 20px;
    width: 200px;
    font-size: 18px;
    margin: 0 auto;
    color: white;
    cursor: default;
    background: -webkit-linear-gradient(left, #55a6ff, #be8bff); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #55a6ff, #be8bff); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #55a6ff, #be8bff); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #55a6ff, #be8bff); /* 标准的语法（必须放在最后） */

    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }

  /*.btn-login:hover{*/
  /*-moz-box-shadow: 4px 4px 2px rgba(190, 139, 255, 0.26); !* 老的 Firefox *!*/
  /*box-shadow: 4px 4px 2px rgba(190, 139, 255, 0.26);*/
  /*}*/
  .btn-login:active {
    -moz-box-shadow: 4px 4px 2px rgba(190, 139, 255, 0.26); /* 老的 Firefox */
    box-shadow: 4px 4px 2px rgba(190, 139, 255, 0.26);
  }
</style>
