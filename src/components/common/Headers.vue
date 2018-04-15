<template>
  <header>
    <div><a href="javascript:history.go(-1);"><i class="iconfont">&#xe7e0;</i></a></div>
    <h1><slot></slot></h1>
    <span><a href="javascript:;"><i class="iconfont">&#xe6f3;</i></a></span>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>
