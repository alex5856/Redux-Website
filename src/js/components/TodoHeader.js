import React from 'react';
import { connect } from 'react-redux'
import {
  changeText,
  createTodo,
} from '../actions/todoActions'

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo
}) => (
    <div className="todo">
      <form role="form" className="form-inline">
          <div className="form-group">
              <input type="text"
                     value={todo.get('text')}
                     onChange={onChangeText} />
          </div>
          <div className="form-group">
              <button onClick={onCreateTodo} className="btn btn-primary">Send</button>
          </div>
      </form>
    </div>
);

const mapStateToProps = (store) => ({
  // 經由 store 取得 todo store
  todo: store.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (e) => (
    dispatch(changeText({ text: e.target.value }))
  ),
  onCreateTodo: (e) => {
    e.preventDefault();
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoHeader);
