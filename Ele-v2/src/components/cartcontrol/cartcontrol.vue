<template lang="html">
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">
        <i class="inner icon-remove_circle_outline">-</i>
      </div>
    </transition>
    <transition name="move">
      <div class="cart-count" v-show="food.count>0">
        <i class="inner">{{food.count}}</i>
      </div>
    </transition>
    <div class="cart-add icon-add_circle" @click="addCart($event)">
      <i>+</i>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props:{
    food:{
      type:Object
    }
  },
  created(){
    console.log("reng");
  },
  methods:{
    addCart(event){
      if(!event._constructed){
        return;
      }
      if(!this.food.count){
        // 这里设置不存在的属性的时候，需要用到vue.set
        Vue.set(this.food,"count",1);
      }else{
        this.food.count++;
      }
    },
    decreaseCart(event){
      if(!event._constructed){
        return;
      }
      if(this.food.count){
        this.food.count--;
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size:0
  .cart-decrease
    width:24px
    height:24px
    line-height:24px
    display:inline-block
    padding:0px
    font-size:24px
    text-align:center
    background:red
    border-radius:24px
    background:rgb(0,160,220)
    color:#fff
    transition:all 0.4s linear
    &.move-transition
      opacity:1
      transform:translate3d(0,0,0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
    &.move-enter-active,&.move-leave-active
      opacity: 0
      transform: translate3d(24px, 0, 0)
      .inner
        transform: rotate(180deg)
  .cart-count
    display:inline-block
    font-size:16px
    padding:0 8px
    padding-top:10px
    color:#999
    transition:all 0.4s linear
    &.move-transition
      opacity:1
      transform:translate3d(0,0,0)
      .inner
        transition: all 0.4s linear
        transform: rotate(0)
    &.move-enter-active,&.move-leave-active
      opacity: 0
      transform: translate3d(24px, 0, 0)
      .inner
        transform: rotate(180deg)
  .cart-add
    padding:0px
    width:24px
    height:24px
    border-radius:24px
    display:inline-block
    line-height:24px
    font-size:24px
    text-align:center
    background:rgb(0,160,220)
    color:#fff
</style>
