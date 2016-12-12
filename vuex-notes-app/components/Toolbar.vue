<template lang="html">
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" :class="{starred: activeNote.favorite}" class="glyphicon glyphicon-star"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>

// 导入各个 actions 动作
import {addNote , deleteNote , toggleFavorite} from "../vuex/actions"
export default {
  vuex:{
    getters:{
      activeNote:state => state.activeNote
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
