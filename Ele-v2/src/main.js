// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from "./router/route.js"

// 引入vue-resource
import VueResource from "vue-resource"

Vue.use(VueResource)

/* eslint-disable no-new */
// 这里是进行相关的挂载
const app = new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
