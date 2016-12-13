<template>
  <div class="hello">
    <div class="classa">
      <div class="classb">
        this is the test content about the less!
      </div>
    </div>
    <hr/>
    <br/>
    <div class="reng">
      <button type="button" name="button" @click="goSuffle">suffle</button>
      <br/><hr/>
        <span v-for="item in items">
            {{item}}
        </span>
    </div>
  </div>
</template>

<script>

window._ = require('underscore')

export default {
  name: 'hello',
  data () {
    return {
      items:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{
    goSuffle:function(){
      this.items=_.shuffle(this.items)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../static/less/test.less";

  .classa{
    width: 300px;
    height: 100px;
    background: red;
    border: 1px solid blue;
    .classb{
      width: 200px;
      height: 50px;
      line-height: 50px;
      color: @color;
      font-size: @fontSize;
      border: 1px solid @color;
      overflow: hidden;
    }
  }
</style>
