import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import Header from './header'
import TodoList from './TodoList.js'
import * as Action from '../actions'

const App = () => (
  <div>
    <Header />
    <TodoList />
    <Footer />
  </div>
)

const mapStateToProps = (state) => {
  return { ...state }
}
const mapDisPatchToProps = (dispatch, action) => {
  return {
    ...Action
  }
}


// export default App
// export default connect()(App) // state 和 action 都不绑定
// export default connect(mapStateToProps)(App) // 只绑定 state
export default connect(mapStateToProps, mapDisPatchToProps)(App) // state 和 action



