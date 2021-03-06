// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'vue-nprogress'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(NProgress)

const nprogress = new NProgress({ parent: '.nprogress-container' })

import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'
// register the component to use
Vue.component('chart', ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
