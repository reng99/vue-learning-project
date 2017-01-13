import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Goods from "../components/goods/goods.vue"
import Ratings from "../components/ratings/ratings.vue"
import Seller from "../components/seller/seller.vue"

//   这里是定义路由
const routes =[
  {
    path:"/goods",component:Goods
  },
  {
    path:"/ratings",component:Ratings
  },
  {
    path:"/seller",component:Seller
  }
]
// 这里是输出路由
export default new VueRouter({
  routes,
  linkActiveClass:"active"
})
