<template lang="html">
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" :class="{starred:activeNote.favorite}" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import {addNote , deleteNote , toggleFavorite} from "../vuex/actions"
export default {
  vuex:{
    // 这里需要有getters来暴露store.js里面的数据，因为第三行代码引用了  activeNote.favorite
    getters:{
      activeNote:state=>state.activeNote
    },
    actions:{
      addNote,
      deleteNote,
      toggleFavorite
    }
  }
}
</script>

<style lang="css">
</style>
