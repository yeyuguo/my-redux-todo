
// import { ADD_TODO, TOGGLE_TODO } from '../actions/index'
import { VisibilityFilters } from '../actions'

/** 最终的 store 树形对象会变成下面的
 {
   todos: Array,
   visibilityFilter: String,
 }
 * 
 */

function _concat(data1, data2) {
  return [...data1].concat(data2)
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // 建议如下

    // return _concat(
    //   [...state],
    //   {
    //     id: ~~(action.id),
    //     text: action.text,
    //     completed: false
    //   }
    // )
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}




/**过滤 All / Active / Complete 事件  */
export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// export default todos
