<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--
        这里是根页面,整个组件之中只有这一个是最真实有效的;
        加入了路由，才实现了一些页面的跳转;
        可以将上方图片解注释测试;
    -->
    <router-view/>
  </div>
</template>
<!-- 获取数据 -->
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
