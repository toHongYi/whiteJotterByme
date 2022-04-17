<template>
<!-- 父子组件 -->
  <div>
<!--  menu引入导航栏  -->
    <nav-menu></nav-menu>
<!--  测试数据获取情况  -->
    <router-view/>
  </div>

</template>

<script>
import NavMenu from './common/NavMenu'
export default {
  name: 'Home',
  components: {NavMenu}
}
</script>

<style scoped>

</style>
