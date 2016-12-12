import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 创建状态树
const state = {
  notes:[],
  activeNote:{}
}

// 创建触发变化的函数
const mutations = {
  ADD_NOTE(state){
    // 创建一个节点的笔记
    const newNote = {
      text:"New note",
      favorite:false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  // 编辑一个节点笔记
  EDIT_NOTE(state,text){
    state.activeNote.text=text
  },
  // 删除一个节点笔记
  DELETE_NOTE(state){
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  //切换收藏以及所有的节点笔记
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite
  },
  // 切换节点的笔记
  SET_ACTIVE_NOTE(state,note){
    state.activeNote = note
  }
}

// 将存储的方法的仓库输出
export default new Vuex.Store({
  state,
  mutations
})
