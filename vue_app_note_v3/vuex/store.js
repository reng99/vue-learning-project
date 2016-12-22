// 存放的数据和相应的变化
// 触发的事件
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  notes:[],
  activeNote:{}
}

const mutations={
  ADD_NOTE(state){
    const newNote={
      text:"New Note",
      favorite:false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE(state,text){
    state.activeNote.text=text
  },
  DELETE_NOTE(state){
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite
  },
  SET_ACTIVE_NOTE(state,note){
    state.activeNote = note
  }
}
// 进行状态和变化的输出
// 这个项目中的store在整个入口的main.js已经进行全局的引用
export default new Vuex.Store({
  state,
  mutations
})
