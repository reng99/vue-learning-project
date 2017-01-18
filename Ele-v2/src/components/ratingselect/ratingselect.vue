<template lang="html">

</template>

<script>
const POSITIVE =0;
const NAGATIVE = 1;
const ALL =2;
export default {
  data(){
    return{}
  },
  props:{
    rating:{
      type:Array
      default(){
        return [];
      }
    },
    selectType:{
      type:Number,
      default:ALL
    },
    onlyContent:{
      type:Boolean,
      default:false
    },
    desc:{
      type:Object,
      default(){
        return{
          all:'全部',
          position:'满意',
          nagative:'不满意'
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
