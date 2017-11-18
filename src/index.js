import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MessageList from './components/MessageList'
import reducers from './reducers'
import socketMiddleware from './middleware/socket'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const createStoreWithMiddleware = applyMiddleware(socketMiddleware)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MessageList/>
  </Provider>
  , document.getElementById('root'))

