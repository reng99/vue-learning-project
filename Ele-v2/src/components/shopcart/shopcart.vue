<template lang="html">
  <div>
    <div class="shopcart">
    <div class="content" @click="toggleList">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon_shopping_cart"  :class="{'highlight':totalCount>0}">icon</i>
          </div>
          <div class="num" v-show="totalCount>0">
            {{totalCount}}
          </div>
        </div>
        <div class="price">
           ¥ {{totalPrice}}
        </div>
        <div class="desc"  :class="{'highlight':totalCount>0}">
          另需配送费 ¥{{deliveryPrice}} 元
        </div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <transition-group name="drop">
        <div v-for="(ball,index) in balls" v-show="ball.show" class="ball" key="index">
          <div class="inner">

          </div>
        </div>
      </transition-group>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <div class="title">
            购物车
          </div>
          <div class="empty" @click="emptyList">
            清空
          </div>
        </div>
        <div class="list-content" id="list-content">
          <ul>
            <li class="food" v-for="food in selectFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>¥ {{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
    <div class="list-mask" v-show="listShow">
    </div>
  </div>
</template>

<script>
import cartcontrol from "../cartcontrol/cartcontrol.vue";
import BScroll from "better-scroll"
export default {
  data(){
    return{
      fold:true,
      balls:[
        {
        show:false
      },
      {
      show:false
    },
      {
      show:false
    },
    {
    show:false
  },
    {
    show:false
    },
    ]
    };
  },
  // 这里是计算属性
  computed:{
    listShow(){
      if(!this.totalCount){
        this.fold=true;
        return false;
      }
      let show = !this.fold;
      if(show){
        this.$nextTick(()=>{
          // 无需重新实例化，调用refresh接口
          if(!this.scroll){
            this.scroll = new BScroll(document.getElementById("list-content"),{
              click:true
            });
          }else{
            this.scroll.refresh();
          }

        })
      }
      return show;
    },
    totalPrice(){
      let total =0;
      this.selectFoods.forEach((food)=>{
        total+=food.price*food.count;
      });
      return total;
    },
    totalCount(){
      let count =0;
      this.selectFoods.forEach((food)=>{
        count+=food.count;
      });
      return count;
    },
    payDesc(){
      if(this.totalPrice === 0){
        return `¥ ${this.minPrice} 元起送`;
      }else if(this.totalPrice<this.minPrice){
        let diff = this.minPrice-this.totalPrice;
        return `还差¥ ${diff} 元起送`;
      }else{
        return `去结算`;
      }
    },
    payClass(){
      if(this.totalPrice < this.minPrice){
        return "not-enough";
      }else{
        return "enough";
      }
    }
  },
  props:{
    selectFoods:{
      type:Array,
      // 这里是默认的值
      default(){
        return [
          {
            price:8,
            count:1
          }
        ];
      }
    },
    deliveryPrice:{
      type:Number,
      default:0
    },
    minPrice:{
      type:Number,
      default:0
    }
  },
  components:{
    cartcontrol
  },
  methods:{
    toggleList(){
      if(!this.totalCount){
        return;
      }
      this.fold=!this.fold;
    },
    emptyList(){
      this.selectFoods.forEach((food)=>{
        food.count = 0;
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
  .shopcart
    width:100%
    position:fixed
    left:0
    bottom:0
    z-index:50
    .content
      background:#141d27
      display:flex
      color:#fff
      .content-left
        flex:1
        .logo-wrapper
          display:inline-block
          position:relative
          top:-10px
          margin:0 12px
          padding:6px
          width:56px
          height:56px
          box-sizing:border-box
          vertical-align:top
          border-radius:50%
          background:#141d27
          .logo
            width:100%
            height:100%
            border-radius:50%
            background:#2b343c
            .icon_shopping_cart
              font-size:24px
              color:#808580
              line-height:44px
              text-align:center
              &.highlight
                color:#fff
          .num
            position:absolute
            top:0
            right:0
            width:24px
            height:16px
            line-height:16px
            text-align:center
            border-radius:16px
            font-size:9px
            font-weight:900
            color:#fff
            background:red
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
          &.highlight
            color:#999
      .content-right
        flex:0 0 105px
        width:105px
        .pay
          line-height:56px
          height:56px
          text-align:center
          font-size:12px
          font-weight:700
          background:#2b333b
          &.not-enough
            background:#2b333b
          &.enough
            background:#00b43c
            color:#fff
    .ball-container
      .ball
        position:fixed
        left:32px
        bottom:22px
        z-index:200
        &.drop-transition
          transition:all 0.4s
          .inner
            width:16px
            height:16px
            border-radius:50%
            background:blue
            transition:all 0.4s
    .shopcart-list
      position:absolute
      left:0
      bottom:56px
      z-index:-1
      width:100%
      &.fold-transition
        transition:all 0.5s
        transform:translate3d(0,-100%,0)
      &.fold-enter,&.fold-leave
        transform:translate3d(0,0,0)
      .list-header
        width:100%
        height:40px
        line-height:40px
        background:#f3f5f7
        border-bottom:1px solid rgba(7,17,27,0.1)
        .title
          float:left
          font-size:14px
          color:rgb(7,17,27)
          margin-left:8px
        .empty
          float:right
          font-size:12px
          color:rgb(0,160,220)
          margin-right:8px
      .list-content
        padding:0 18px
        max-height:217px
        background:#fff
        overflow:hidden
        .food
          position:relative
          padding:12px 0
          box-sizing:border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height:24px
            font-size:14px
            color:rgb(7,17,27)
          .price
            position:absolute
            right:90px
            bottom:12px
            line-height:24px
            font-weight:700
            font-size:14px
            color:rgb(240,20,20)
          .cartcontrol-wrapper
            position:absolute
            right:0
            bottom:10px
  .list-mask
    position:fixed
    width:100%
    height:800px
    z-index:40
    top:0
    left:0
    backdrop-filter:blur(10px)
    background:rgba(7,17,27,0.6)

</style>
