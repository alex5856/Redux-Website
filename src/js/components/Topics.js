import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import Helmet from 'react-helmet'

class Topics extends Component {

  render() {

    let helmet = {};
    helmet.title ='WebSite - Topics';
    helmet.descr = 'Topics';

    let head = [
      <Helmet
          title={helmet.title}
          meta={[
                {property: 'og:title', content: helmet.title},
                {property: 'description', content: helmet.descr}
          ]} />
    ];

    let Topics = ({ match }) => (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1 className="text-center">Topics</h1>
            <ul>
              <li>
                <Link to={`${match.url}/rendering`}>
                  Rendering with React
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/components`}>
                  Components
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}>
                  Props v. State
                </Link>
              </li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={() => (
              <h3>Please select a topic.</h3>
            )}/>
          </div>
        </div>
      </div>
    )

    let Topic = ({ match }) => (
      <div>
          <Helmet
          title={helmet.title + ' - ' + match.params.topicId}
          meta={[
                {property: 'og:title', content: helmet.title},
                {property: 'description', content: helmet.descr +' '+ match.params.topicId}
          ]} />
        <h3>{match.params.topicId}</h3>
      </div>
    )

    return (
      <div className="content">
        {head}
        <Route path="/:id" component={Topics}/>
      </div>
    );
  }
}

export default Topics