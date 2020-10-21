import React from 'react'
import { createStore } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import Counter from './counter'
import reducer from './reducers'

const store = createStore(reducer)

function ReduxDemo() {
  return (
    <div>
      redux demo
      <ReduxProvider store={store}>
        <Counter />
      </ReduxProvider>
    </div>
  )
}

export default ReduxDemo
