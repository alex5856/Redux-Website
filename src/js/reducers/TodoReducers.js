import { handleActions } from 'redux-actions'
import { TodoState } from '../store/models'

import {
  CREATE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  DELETE_TODO,
  CHANGE_TEXT
} from '../actions/actionTypes'

const todoReducers = handleActions({

  CREATE_TODO: (state) => {
    let todos = state.get('todos').push(state.get('todo'))
    return state.set('todos', todos)
  },
  EDIT_TODO: (state, { payload }) => {
    let todo = state.update('index', () => (payload.index))
    todo = todo.update('edit', () => (true))
    return todo
  },
  SAVE_TODO: (state, { payload }) => {
    let t = document.getElementById('text'+ payload.index)
    let rText = state.set('edit', null)
                     .setIn(['todos', payload.index, 'text'], t.value)
    return rText
  },
  DELETE_TODO: (state, { payload }) => (
    state.set('todos', state.get('todos').splice(payload.index, 1))
  ),
  CHANGE_TEXT: (state, { payload }) => (
    state.merge({ 'todo': payload })
  )
}, TodoState);

export default todoReducers