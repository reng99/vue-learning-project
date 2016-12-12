<template lang="html">
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
// 导入各个组件
import Toolbar from "./Toolbar.vue"
import NotesList from "./NotesList.vue"
import Editor from "./Editor.vue"

export default {
  components:{
    // 注册各个组件
    Toolbar,
    NotesList,
    Editor
  }
}
</script>

<style lang="css">
</style>
