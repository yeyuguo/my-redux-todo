import { combineReducers } from 'redux'
import { todos, visibilityFilter } from './todos'



export default combineReducers({
  todos,
  visibilityFilter
})
