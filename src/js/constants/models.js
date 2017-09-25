import Immutable from 'immutable'

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    text: '',
  },
  'edit': null,
  'index': null
})

export const UserState = Immutable.fromJS({
  'user': {
    email: null,
    name: null
  },
  'login': false
})

// export default TodoState