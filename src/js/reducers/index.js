import { combineReducers } from 'redux-immutable'
import todo from './TodoReducers'

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;