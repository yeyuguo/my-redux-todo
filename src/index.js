import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// 开发工具
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk), // 异步
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
