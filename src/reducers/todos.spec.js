import { todos } from './todos'

// ADD_TODO 和 TOGGLE_TODO 两个状态
describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(
        // state
        undefined,
        // action
        {}
      )
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos(
        // state
        [],
        // action
        {
          type: 'ADD_TODO',
          text: 'Run the tests',
          // id1: 0,
          id: 0,
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos(
        // state
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        // action
        {
          type: 'ADD_TODO',
          text: 'Use Redux',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      todos(
        // state
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }, {
            text: 'Use Redux',
            completed: false,
            id: 1
          }
        ],
        // state
        {
          type: 'ADD_TODO',
          text: 'Fix the tests',
          id: 2
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        // state
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1
          }, {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        // action
        {
          type: 'TOGGLE_TODO',
          id: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
