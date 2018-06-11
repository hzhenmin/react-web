import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './redux'

const store = createStore(rootReducer)

const todoApp = () => 
  <Provider store={store}>
    <App />
  </Provider>
export default todoApp;