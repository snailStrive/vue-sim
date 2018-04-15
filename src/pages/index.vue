<template>
  <div>
  	<headers>网站首页</headers>
    <main>
      <app-banner :listImg="listImg"></app-banner>
      <div style="font-size:.7em; height:25rem;">首页信息</div>
    </main>
  </div>
</template>

<script>
import banner from '../components/Banner.vue' //导入Banner组件
export default {
  name: 'index',
  data:function(){
    return {listImg:[{url:"static/1.jpg"},{url:"static/2.jpg"}]}
  },
  components:{
    'app-banner': banner,
  }
}
</script>

<style type="text/css">
.swiper-slide{background-size:100% auto;}

</style>

