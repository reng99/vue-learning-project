<template lang="html">
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>
<!-- App vue 整合了其他的三个模板 -->
<script>
import Editor from "./Editor.vue"
import NotesList from "./NotesList.vue"
import Toolbar from "./Toolbar.vue"
export default {
  components:{
    Editor:Editor,
    NotesList:NotesList,
    Toolbar:Toolbar
  }
}
</script>

<style lang="css">
</style>
