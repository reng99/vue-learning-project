<template lang="html">
  <div id="notes-list">
    <div id="list-header">
      <h2>Note App</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" name="button" class="btn btn-default"
            @click ="show='all'"
            :class="{active:show==='all'}"
            >
            All Notes
          </button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" name="button" class="btn btn-default"
          @click ="show='favorites'"
          :class="{active:show==='favorites'}"
           >
            Favorites
          </button>

        </div>
      </div>
      <!-- 注意，这里面的active是bootstrap里面的样式来的 上面的active也是一样的-->
      <div class="container">
        <div class="list-group">
          <a href="#" class="list-group-item"
            v-for="note in filterNotes"
            :class="{active:activeNote === note}"
            @click="updateActiveNote(note)"
          >
            <h4 class="list-group-item-heading">
              {{note.text.trim().substring(0,10)}}
            </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import{ updateActiveNote} from "../vuex/actions"
export default {
  data(){
    return {
      // default
      show:"all"
    }
  },
  vuex:{
    // 暴露出store里面的数据
    getters:{
      notes:state=>state.notes,
      activeNote:state=>state.activeNote
    },
    actions:{
      updateActiveNote
    }
  },
  computed:{
    filterNotes(){
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
