<template lang="html">
  <div id="notes-list">
    <div id='list-header'>
        <h2>Note | coligo</h2>
        <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group" role="group">
              <button type="button" name="button" class="btn btn-default"
                @click = "show='all'"
                :class="{active:show==='all'}"
              >
                  All Notes
              </button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" name="button" class="btn btn-default"
              @click="show = 'favorites'"
              :class="{active: show === 'favorites'}"
              >
                 Favorites
              </button>
            </div>
        </div>

        <div class="container">
          <div class="list-group">
              <a href="#"
                class="list-group-item"
                v-for="note in filteredNotes"
                :class="{active:activeNote === note}"
                @click="updateActiveNote(note)"
              >
                <h4 class="list-group-item-heading">
                  <!-- 截取30个字符作为标题 -->
                  {{note.text.trim().substring(0,30)}}
                </h4>
              </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'
export default {
  data(){
    return {
      show:"all"
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  computed:{
    filteredNotes(){
      if(this.show==="all"){
        return this.notes
      }else if(this.show==="favorites"){
        return this.notes.filter(note=>note.favorite)
      }
    }
  }
}
</script>

<style lang="css">
</style>
