import { initGlobalState } from 'qiankun'

import Vue from 'vue'

const initialState = Vue.observable({
  user: {
    name: 'Alice',
    age: 18,
  },
})

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  console.log('main change', JSON.stringify(newState), JSON.stringify(prev))

  Object.entries(newState).forEach(([key, value]) => {
    initialState[key] = value
  })
})

actions.getGlobalState = (key) => {
  return key ? initialState[key] : initialState
}

export default actions
