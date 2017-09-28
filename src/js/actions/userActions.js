import { createAction } from 'redux-actions'
import {
  CHECK_LOGIN,
  LOGOUT
} from '../constants/actionTypes'

export const checkLogin = createAction('CHECK_LOGIN')
export const Logout = createAction('LOGOUT')