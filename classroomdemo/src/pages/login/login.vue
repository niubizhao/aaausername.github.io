<template>
  <div class="bg-login">
    <ul>
      <li class="lefttop"><img src="../../assets/image/bg-lefttop.png" alt=""></li>
      <li class="rightttop"><img src="../../assets/image/bg-righttop.png" alt=""></li>
      <li class="leftbottm"><img src="../../assets/image/bg-leftbottom.png" alt=""></li>
      <li class="rightbottom"><img src="../../assets/image/bg-rightbottom.png" alt=""></li>
    </ul>
    <div class="login-content">
      <div class="login-center-bg">
        <img src="../../assets/image/logo-c.png" alt="">
      </div>
      <div class="login-box">
        <div class="logtext">
          <img src="../../assets/image/log-text.png" alt="">
        </div>
        <div class="log-input">
          <div>
            <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" :label-position="labelPosition" >
              <el-form-item prop="username" label="账号：">
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
            </el-form-item>
            <el-form-item prop="password" label="密码：">
              <el-input name="password" :type="pwdType" @keyup.enter.native="login" v-model="loginForm.password" autoComplete="on"
                placeholder="password"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button  :loading="loading" @click.native.prevent="login">
                  登录
                </el-button>
            </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="bg-bottom">
          <img src="../../assets/image/bg-bottom.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      const validateUsername = (rule, value, callback) => {
           if (value.length < 5) {
                callback(new Error('请输入正确的用户名'))
            } else {
                callback()
            }
        }
        const validatePass = (rule, value, callback) => {
            if (value.length < 5) {
                callback(new Error('密码不能小于5位'))
          } else {
            callback()
          }
      }
      return {
        labelPosition:'top',
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        loginRules: {
          username: [
            {
              required: true,
              trigger: 'blur',
              validator: validateUsername
            }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePass }
          ]
        },
        loading: false,
        pwdType: 'password'
      }
    },
    methods: {
      login(){
        this.$router.push('/layout')
      },
    },
    
  }
</script>

<style lang="scss" scoped>
.bg-login{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/image/bg.png');
  background-size:100%;
  .lefttop{
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
  }
  .rightttop{
    position: absolute;
    top: 0;
    right: 0;
    height: 50%;
  }
  .leftbottm{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .rightbottom{
    position: absolute;
    bottom: 0;
    right: 0;
  
  }
  .login-content{
    position: absolute;
    top: 50%;
    margin-top: -400px;
    left: 50%;
    margin-left: -44%;
    width: 88%;
    height: 800px;
    display: flex;
    .login-center-bg{
      display: flex;
      justify-content: center;
      align-items: center;
      background:url('../../assets/image/bg-small.png');
      width: 80%;
      height: 98%;
      background-size:100%;
      box-shadow: 10px 10px 5px #321f82;
    }
    .login-box{
      background:url('../../assets/image/bg-log.png');
      background-color:#fff;
      background-position:-45px 10px;
      background-size:120%;
      width: 28%;
      display: flex;
      flex-direction: column;
      .log-input{
        padding: 0 60px;
        box-sizing: border-box;
        margin-top: 100px;
      }
      .bg-bottom{
        position: absolute;
        bottom: -5px;
        img{
          width: 100%;
        }
      }
    }
  }
}
.logtext{
  padding: 0 60px;
  box-sizing: border-box;;
 img{
   height: 45px;
    margin-top:30%;
 }
  
}
.el-button{
  margin-top: 120px;
  background-color: #7422a8;
  width: 40%;
  color: #fff;
}
</style>