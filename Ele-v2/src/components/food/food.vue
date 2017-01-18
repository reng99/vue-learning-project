<template lang="html">
  <transition name="move">
    <div class="food" v-show="showFlag" id="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift">&lt;</i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}</span>
            <span class="rating">好评{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count===0" @click="addFirst">
              加入购物车
            </div>
          </transition>
        </div>
        <split></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <h1 class="title">商品评价</h1>
          <h1 class="title">商品评价</h1>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
import BScroll from "better-scroll"
import cartcontrol from "../cartcontrol/cartcontrol.vue"
import Vue from "vue"
import split from "../split/split.vue"
export default {
  data(){
    return{
      showFlag:false
    }
  },
  props:{
    food:{
      type:Object
    }
  },
  methods:{
    show(){
      this.showFlag=true;
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll = new BScroll(document.getElementById("food"),{
            click:true
          })
        }else{
            this.scroll.refresh();
        }
      });
    },
    hide(){
      this.showFlag=false;
    },
    addFirst(event){
      if(!event._constructed){
        return;
      }
      Vue.set(this.food,"count",1);
    }
  },
  components:{
    cartcontrol,
    split
  }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
.food
  position:fixed
  left:0
  top:0
  bottom:48spx
  z-index:30
  width:100%
  height:100%
  background:#fff
  &.move-enter-active, &.move-leave-active
    transition:all 0.3s ease
  &.move-enter, &.move-leave-active
    transform: translate3d(100%,0,0);
    opacity: 0;
  .food-content
    .image-header
      position:relative
      width:100%
      height:0
      padding-top:100%
      img
        position:absolute
        top:0
        left:0
        width:100%
        height:100%
      .back
        position:absolute
        top:10px;
        left:0
        color:#fff
        font-size:20px
        padding:10px
        .con-arrow_lift
          display:block
    .content
      position:relative
      padding:18px
      .title
        line-height:14px
        font-weight:700
        margin-bottom:8px
        font-size:14px
        color:rgb(7,17,27)
      .detail
        height:10px
        margin-bottom:18px
        line-height:10px
        font-size:0
        .sell-count,.rating
          font-size:10px
          color:rgb(147,153,159)
        .sell-count
          margin-right:12px
      .price
        font-weight:700
        line-height:24px
        .now
          margin-right:8px
          font-size:14px
          color:rgb(240,20,20)
        .old
          font-size:10px
          text-decoration:line-through
          color:rgb(147,153,159)
      .cartcontrol-wrapper
        position:absolute
        right:12px
        bottom:12px
      .buy
        position:absolute
        right:10px
        bottom:12px
        z-index:10
        height:24px
        line-height:12px
        padding:6px 12px
        box-sizing:border-box
        font-size:12px
        border-radius:12px
        color:#fff
        background:rgb(0,160,220)
        &.fade-enter-active,&.fade-leave-active
          transition:opacity .5s
        &.fade-enter,&.fade-leave
          opacity:0
    .info
      padding:18px
      .title
        line-height:14px
        margin-bottom:6px
        font-size:14px
        color:rgb(7,17,27)
      .text
        line-height:24px
        padding:0 8px
        font-size:12px
        color:#999






</style>
