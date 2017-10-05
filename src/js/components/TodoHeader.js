import React from 'react'
import { connect } from 'react-redux'
import {
  changeText,
  createTodo,
} from '../actions/todoActions'

import swal from 'sweetalert2'
import validator from 'validator'

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo
}) => (
    <div className="todo">
      <form role="form" className="form-inline">
          <div className="form-group">
              <input type="text"
                     className="todo_text"
                     value={todo.get('text')}
                     onChange={onChangeText} />
          </div>
          <div className="form-group">
              <button onClick={onCreateTodo} className="btn btn-primary">Send</button>
          </div>
      </form>
    </div>
);

const TodoHeaderStateToProps = (store) => ({
  // 經由 store 取得 todo store
  todo: store.getIn(['todo', 'todo'])
});

const TodoHeaderDispatchToProps = (dispatch) => ({
  onChangeText: (e) => {
    dispatch(changeText({ text: e.target.value }))
  },
  onCreateTodo: (e) => {
    e.preventDefault()
    let x = document.getElementsByClassName("todo_text")[0];
    if(validator.isEmpty(x.value)) {
      swal('Oops!',
           'Please enter text',
           'error')
    } else {
      dispatch(createTodo());
      dispatch(changeText({ text: '' }));
    }
  }
});

const TodoHeaderContainers = connect(
  TodoHeaderStateToProps,
  TodoHeaderDispatchToProps
)(TodoHeader)

export default TodoHeaderContainers