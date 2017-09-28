import Immutable from 'immutable'

export const WebConfig = Immutable.fromJS({
    'title': 'WebSite',
    'descr': null
})

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
  'login': null
})

// export default TodoState