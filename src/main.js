// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/common.css'

Vue.config.productionTip = false


import headers from './components/common/Headers.vue'
import Footers from './components/common/Footers.vue'
Vue.component("footers",Footers);
Vue.component("headers",headers);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
