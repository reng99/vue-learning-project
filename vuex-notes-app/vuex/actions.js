// 对state的监听，并且产生动作时候，对mutations 进行事件的派遣
export const addNote = ({dispatch})=>{
  dispatch("ADD_NOTE")
}

export const editNote= ({dispatch},e)=>{
  dispatch("EDIT_NOTE",e.target.value)
}

export const deleteNote = ({dispatch})=>{
  dispatch("DELETE_NOTE")
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}
