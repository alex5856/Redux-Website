import React, {Component, PropTypes} from 'react'
import { Route, Switch } from 'react-router-dom'

// 引入 Components
import About from '../../components/About'
import Home from '../../components/Home'
import Contact from '../../components/Contact'
import Todo from '../../components/Todo'
import SignUp from '../../components/Register'
import Login from '../../components/Login'
import Topics from '../../components/Topics'
import validatorObj from './validatorObj'

const rootDir = '/';

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route path={rootDir} exact component={Home} />
          <Route path={rootDir + "about"} component={About} />
          <Route path={rootDir + "topics"} component={Topics} />
          <Route path={rootDir + "contact"} component={Contact} />
          <Route path={rootDir + "todo"} component={Todo} />
          <Route path={rootDir + "signup"} component={SignUp} />
          <Route path={rootDir + "login"} component={Login} />
        </Switch>
    );
  }
}

export default Main;