import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let helmet = {};
    helmet.title ='WebSite - Todo';
    helmet.descr = 'Todo';

    let head = [
      <Helmet
          title={helmet.title}
          meta={[
                {property: 'og:title', content: helmet.title},
                {property: 'description', content: helmet.descr}
          ]} />
    ];

    let content = [
      <div className="container">
        <h1 className="text-center">Todo</h1>
        <TodoHeader />
        <TodoList />
      </div>
    ];

    return (
      <div className="content">
        {head}
        {content}
      </div>
    );
  }
}

export default Todo;