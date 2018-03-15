<template>
  <div class="login-wrap">
    <div class="loginpng">
      <img style="width: 100%;height: 100%;" src="./img/login.png"/>
    </div>
    <div class="login">
      <div class="login-container">
        <h3 class="title">用户登录</h3>
        <el-input type="text" v-model="username" auto-complete="off" placeholder="账号"
                  style="border: 1px solid #3872f6 !important;border-radius: 4px;"></el-input>
        <el-input type="password" v-model="password" auto-complete="off" placeholder="密码"
                  style="border: 1px solid #3872f6 !important;border-radius: 4px;margin-top: 20px"></el-input>

        <el-checkbox style="color: #fff;margin: 20px auto" v-model="checked">记住密码</el-checkbox>

        <el-button type="primary" style="width:100%;margin: 0;background: #3872f6;color: #ffffff;"
                   @click="submitForm('ruleForm')">登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Message} from '../common/js/services/login.services'
  export default {
    data() {
      return {
        username: window.localStorage.getItem('username') ? window.localStorage.getItem('username') : '',
        password: window.localStorage.getItem('password') ? window.localStorage.getItem('password') : '',
        checked:''
      }
    },
    mounted(){
      this.checkRememberPass();
    },
    methods: {
      /*
       * 检查是否已记住密码
       * */
      checkRememberPass(){
        if (window.localStorage.getItem('username') && window.localStorage.getItem('username')) {
          this.checked = true;
        }
      },
      submitForm() {
        if(!this.username){
          this.$message({
            message: '请输入账号',
            type: 'warning'
          });
          return false;
        }else if(!this.password){
          this.$message({
            message: '请输入密码',
            type: 'warning'
          });
          return false;
        }else if(this.password.length <4){
          this.$message({
            message: '请输入大于4位密码',
            type: 'warning'
          });
          return false;
        }

        const data = {
          name:this.username,
          pass:this.password,
        };
        Message.Login(this,data,(e)=>{
          if(e.data.code && e.data.code == 200){
            //是否勾选保存密码
            if(this.checked){
              window.localStorage.setItem('username', this.username);
              if(!window.localStorage.getItem('password')){
                window.localStorage.setItem('password', this.password);
              }
            }else {
              window.localStorage.setItem('username', '');
              window.localStorage.setItem('password', '');
            }
            window.localStorage.setItem('userId',e.data.msg.substr(10));
            this.$message(e.data.data);
            setTimeout(()=>{
                this.$router.push('/index')
            },1500)
          }else {
            this.$message.error(e.data);
          }
        })

      },
    }
  }
</script>

<style lang="less" scoped>
  .login-wrap {
    height: 100%
  }

  .login-container {
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    background: #000000;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    color: #FFFFFF;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #FFFFFF;
  }

  .remember {
    margin: 0px 0px 35px 0px;
    color: #FFFFFF;
  }

  .loginpng {
    width: 100%;
    height: 100%;
  }

  .login {
    position: fixed;
    left: 0;
    right: 0;
    top: 10%;
    margin: 0 auto;
  }
</style>
