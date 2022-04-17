<template>
<!-- 背景图片 -->
  <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">

      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
          <p v-show="isShow" style="color: red">{{ showAlert }}</p>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
    </el-form>
<!--    ————————————————-->
<!--    版权声明：本文为CSDN博主「Evan-Nightly」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。-->
<!--    原文链接：https://blog.csdn.net/Neuf_Soleil/article/details/89298717-->
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '1234'
      },
      isShow: false,
      showAlert: '请校验账号密码',
      responseResult: []
    }
  },
  methods: {
    login () {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            // var data = this.loginForm
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          } else {
            // 选择是否以游客身份进入浏览、如果是这样的话;如果是的话,设置用户信息为游客;
            var x
            var r = confirm('密码错误,是否以游客身份进行访问!')
            if (r == true) {
              this.showAlert = '时刻准备游客身份,对跳转,鉴权进行探索,进行拦截器校验'
              this.isShow = true
            } else {
              x = '请确认账户和密码'
              this.isShow = true
            }
          }
        })
        .catch(failResponse => {
          var notic = '系统繁忙,请重新输入'
          alert(notic)
        })
    }
  }
}
</script>
<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
#poster {
  background:url("../assets/img.png") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
</style>
