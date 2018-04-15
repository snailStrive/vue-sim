<template>
  <nav :class="totopshow?'topAni':''">

    <div @click="switchTitle(0)">
    <router-link to="/" key="nav1">
      <i class="iconfont">&#xe6b8;</i>
      <p>首页</p>
    </router-link>
    </div>
    <div @click="switchTitle(1)">
    <router-link to="/article">
      <i class="iconfont">&#xe699;</i>
      <p>新闻</p>
    </router-link>
    </div>
    <div @click="switchTitle(2)">
    <router-link to="/photo">
      <i class="iconfont">&#xe69b;</i>
      <p>相册</p>
    </router-link>
    </div>
    <div @click="switchTitle(3)">
    <router-link to="/my">
      <i class="iconfont">&#xe736;</i>
      <p>我的</p>
    </router-link>
    </div>

    <span><a href="javascript:;" @click="toTop"><transition name="slide-fade"><i class="iconfont">&#xe69e;</i></transition></a></span>
  </nav>
</template>

<script>
export default {
  name: 'index',
  props:["totopshow"],
  data:function(){
  	return {show:this.totopshow}
  },
  methods:{
  	toTop:function(){
  		window.pageYOffset=0
      document.documentElement.scrollTop=0
      document.body.scrollTop=0;
  	},
    switchTitle:function(sid){
      this.$emit("switchtle",{switchid:sid})
    }
  }
}
</script>

