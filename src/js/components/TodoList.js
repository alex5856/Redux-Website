import React from 'react'
import { connect } from 'react-redux'
import {
  deleteTodo,
  editTodo,
  saveTodo
} from '../actions/todoActions'

const TodoListStateToProps = (store) => ({
  // 經由 store 取得 todo store
  todos: store.getIn(['todo', 'todos']),
  edit: store.getIn(['todo', 'edit']),
  index: store.getIn(['todo', 'index']),
});

const TodoListDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
  ),
  onEditTodo: (index ,edit , text) => () => {
    dispatch(editTodo({ index, edit, text }))
  },
  onSaveTodo: (index) => (e) => {
    dispatch(saveTodo({ index }))
  }
});

const TodoList = ({
  todos,
  edit,
  index,
  onDeleteTodo,
  onEditTodo,
  onSaveTodo,
}) => {

  return (

    <div className="todo_list">
    {/**
    <p>{todos}</p>
    <p>index : {index}</p>
    <p>edit : {edit}</p>
    **/}
    <ul>
    {
      todos.map((todo, i) => (
        <li key={i}>
          {
            edit && index === i ?
              <div>
              <input id={"text" + i}
                     name="text" type="text"
                     defaultValue={todo.get('text')}/>
                <button onClick={onSaveTodo(i)}
                  className="btn btn-default">save</button>
              </div> :
              <div>{todo.get('text')}
              <button onClick={onEditTodo(i, todo.get('edit') ,todo.get('text'))}
                  className="btn btn-default">edit</button>
              <button onClick={onDeleteTodo(i)}
                  className="btn btn-default">X</button>
              </div>
          }
        </li>
      )).toJS()
    }
    </ul>
  </div>
  )
}

const TodoListContainers = connect(
  TodoListStateToProps,
  TodoListDispatchToProps
)(TodoList);

export default TodoListContainers