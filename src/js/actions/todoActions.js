import { createAction } from 'redux-actions'
import {
  CREATE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  DELETE_TODO,
  CHANGE_TEXT
} from '../constants/actionTypes'

export const createTodo = createAction('CREATE_TODO')
export const editTodo = createAction('EDIT_TODO')
export const saveTodo = createAction('SAVE_TODO')
export const deleteTodo = createAction('DELETE_TODO')
export const changeText = createAction('CHANGE_TEXT')