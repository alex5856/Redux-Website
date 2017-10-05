import { handleActions } from 'redux-actions'
import { UserState } from '../constants/models'

import {
  CHECK_LOGIN,
  LOGOUT
} from '../constants/actionTypes'

const userReducers = handleActions({

  CHECK_LOGIN: (state, { payload }) => {
    return state.set('login', true)
  },
  LOGOUT: (state) => (
    state.set('login', null)
  )
}, UserState)

export default userReducers