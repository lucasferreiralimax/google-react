import { createStore } from 'redux'

const INITIAL_STATE = {
  keyboard: false
}

function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'TOGGLE_KEYBOARD') {
    return { ...state , keyboard: !state.keyboard }
  }
  return state
}

const store = createStore(reducer)

export default store
