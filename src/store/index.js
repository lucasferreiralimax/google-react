import { createStore } from 'redux'

const INITIAL_STATE = {
  keyboard: false,
  voice: false,
  search: '',
  darkmode: JSON.parse(localStorage.getItem('darkmode')),
  lang: localStorage.getItem('lang'),
}

document.documentElement.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'TOGGLE_KEYBOARD':
      return { ...state , keyboard: !state.keyboard }
    case 'TOGGLE_VOICE':
      return { ...state , voice: !state.voice }
    case 'SET_VOICE':
      return { ...state , voice: action.payload }
    case 'SET_LANG':
      document.documentElement.lang = action.payload
      return { ...state , lang: action.payload }
    case 'TOGGLE_DARKMODE':
      return { ...state , darkmode: !state.darkmode }
    case 'SEARCH_VALUE':
      return { ...state , search: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
