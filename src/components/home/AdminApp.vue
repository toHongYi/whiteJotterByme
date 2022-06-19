<template>
  <div class="demo-image__preview">
    <h1>
      <b1>{{currentDate}}</b1>
    </h1>
    <img src="../../assets/workInMac.jpg" height="1440" width="1080"/>
    <el-calendar v-model="value"/>
  </div>
</template>
<script>
export default {
  name: 'admin',
  data() {
    return {
      currentDate: '小林呀小林呀呀',
      value: new Date()
    }
  }
}
</script>

<style scoped>
demo-image__preview{
  transform:scale(2);/*设置缩放比例*/
-ms-transform:scale(2);
  -webkit-transform:scale(2);
  -o-transform:scale(2);
  -moz-transform:scale(2);
}
</style>
