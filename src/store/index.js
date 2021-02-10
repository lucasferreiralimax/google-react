import { createStore } from 'redux'

const INITIAL_STATE = {
  keyboard: false,
  voice: false,
  search: '',
  darkmode: JSON.parse(localStorage.getItem('darkmode'))
}

function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'TOGGLE_KEYBOARD') {
    return { ...state , keyboard: !state.keyboard }
  }
  if(action.type === 'TOGGLE_VOICE') {
    return { ...state , voice: !state.voice }
  }
  if(action.type === 'SET_VOICE') {
    return { ...state , voice: action.payload }
  }
  if(action.type === 'TOGGLE_DARKMODE') {
    return { ...state , darkmode: !state.darkmode}
  }
  if(action.type === 'SEARCH_VALUE') {
    return { ...state , search: action.payload }
  }
  return state
}

const store = createStore(reducer)

export default store
