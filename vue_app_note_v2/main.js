import Vue from "vue"
import App from "./components/App.vue"
// 这里将整个的store引用到全局这里
import store from "./vuex/store.js"


// 挂在在相关的页面
new Vue({
  store,
  el:"body",
  // 进行组件的注册
  components:{App}
})
