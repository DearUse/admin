<template>
	
    <div class="login-wrap">
    	<div class="loginpng">
    		<img style="width: 100%;height: 100%;" src="./img/login.png"/>
    	</div>
    	<div class="login">
    		<el-form  label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm login-container">
	        <h3 class="title">用户登录</h3>
	        <el-form-item prop="username">
	          <el-input type="text" v-model="ruleForm.username"  auto-complete="off" placeholder="账号" style="border: 1px solid #3872f6 !important;border-radius: 4px;"></el-input>
	        </el-form-item>
	        <el-form-item prop="password">
	          <el-input type="password"  v-model="ruleForm.password" auto-complete="off" placeholder="密码" v-on:blur="changeCount" style="border: 1px solid #3872f6 !important;border-radius: 4px;"></el-input>
	        </el-form-item>
	        <el-checkbox class="remember">记住密码</el-checkbox>
	        <el-form-item style="width:100%;">
	          <el-button type="primary" style="width:100%;margin: 0;background: #3872f6;color: #ffffff;"  @click="submitForm('ruleForm')" :loading="logining">登录</el-button>
	        </el-form-item>
	      </el-form>
    	</div>
    </div>
</template>

<script type="text/ecmascript-6">
import { requestLogin } from '../api/api';
import axios from 'axios';
const ERR_OK = 0;
export default {
  data() {
    return {
    	asd:"123456789",
    	asg:[],
    	asp:[],
    	suzu:[],
      	logining: false, //定义loading默认为false
     	ruleForm: {            //username和password默认为空
        username: '',
        password:''
      },
      rules: {          //rules前端验证
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]        
      }
    }
  },
  methods: {
  		changeCount: function() {
  			this.asg = this.ruleForm.username;
  			this.asp = this.ruleForm.password;
  			this.ruleForm.password = this.asd;
  			
  			console.log(this.asp);
  			console.log(this.asd);
	    },
      submitForm() {
      	
//      this.$refs[formName].validate((valid) => {
//        if (valid) {
//          this.logining = true;
//          setTimeout(() => {
//            this.logining = false;
//          //如果请求成功就让他3秒跳转路由
//          }, 2000);
//        } else {
//          this.$ruleForm.error({
//            title: '错误',
//            message: '请输入正确的用户名密码',
//            offset: 100
//          });
//          console.log('error submit!!');
//          return false;
//        }
//      });
		var that = this;
		console.log(this.ruleForm.username);
		console.log(this.ruleForm.password);
		var params = new URLSearchParams();
		params.append("name", this.asg);
		params.append("pass",this.asp);
		axios.post("http://192.168.0.233/Mudoor/Muapi/Login", params).then(function(ret){
			console.log(ret)
			if(ret.data.code==200){
					console.log(ret.data.msg);
					var c =ret.data.msg;
					that.suzu = c.slice(10);
					console.log(that.suzu);
//				  	location.href="#/echarts"
					that.$router.push({
						path: '/echarts'
					});
			}else{
				alert(ret.data);
				that.ruleForm.password = ""
			}
		},function(err){
			alert("失败");
			
		})
			
      },
  }
}
</script>

<style lang="less" scoped>
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
    .remember{
      margin: 0px 0px 35px 0px;
      color: #FFFFFF;
    }
    .loginpng{
    	width: 100%;
    	height: 100%;
    }
    .login{
    	position: fixed;
    	left: 0;
    	right: 0;
    	top: 10%;
    	margin: 0 auto;
    }
</style>