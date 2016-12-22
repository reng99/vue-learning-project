<template lang="html">
  <div id="note-editor">
    <textarea class="form-control"
      :value="activeNoteText"
      @input="editNote"
    >

    </textarea>
  </div>
</template>

<script>
import {editNote} from "../vuex/actions"
export default {
  vuex:{
    // 这里也要暴露store.js里面的方法，第四行运用到
    getters:{
      activeNoteText:state=>state.activeNote.text
    },
    actions:{
      editNote
    }
  }
}
</script>

<style lang="css">
</style>
