import { handleActions } from 'redux-actions'
import { UserState } from '../store/models'

import {
  CHECK_LOGIN,
  LOGOUT
} from '../actions/actionTypes'

const userReducers = handleActions({

  CHECK_LOGIN: (state, { payload }) => {
    return state.set('login', true)
  },
  LOGOUT: (state) => (
    state.set('login', null)
  )
}, UserState)

export default userReducers