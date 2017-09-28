import { combineReducers } from 'redux-immutable'
import todo from './TodoReducers'
import user from './UserReducers'

const rootReducer = combineReducers({
  todo,
  user
});

export default rootReducer