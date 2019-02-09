// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import axios from 'axios'
import myaxios from '@/assets/js/myaxios.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'


import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// // 统一设置请求路径
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// // 挂载到 Vue 原型中
// Vue.prototype.$http = axios
Vue.use(myaxios)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts 

Vue.component(Bread.name, Bread)
Vue.component(ElTreeGrid.name, ElTreeGrid);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
