// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// TODO main.js为入口文件
// 设置反向代码: 前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')

// TODO 设置接口地址为服务器地址;
// axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.baseURL = 'http://www.tohongyi.fun:8443/api'
// 全局注册:之后可在其他组件中通过this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    //meta : 路由元信息; 每个路由身上携带的信息
    if (to.meta.requireAuth) {
      // <!-- 如果文档对象能获取到username信息,就放行 -->
      if (store.state.user.username) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

// 下方钩子函数??
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // 注意这里
  store,
  components: { App },
  template: '<App/>'
})
