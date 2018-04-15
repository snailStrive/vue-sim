<template>
  <div id="app">
    <router-view/>
    <footers v-bind:totopshow="totop"></footers>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {title:"首页",totop:0}
  },
  mounted:function(){
  	window.addEventListener("scroll",this.handleScroll);
  },
  methods:{
  	handleScroll:function(){
  		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  		this.totop=scrollTop>100?1:0;
  	}
  }
}
</script>