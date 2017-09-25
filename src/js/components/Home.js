import React from 'react'
import Helmet from 'react-helmet'

export default React.createClass({
  render() {

    let helmet = {};
    helmet.title ='WebSite - Home';
    helmet.descr = 'Home';

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
        <h1 className="text-center">Home</h1>
      </div>
    ];

    return (
      <div className="content">
        {head}
        {content}
      </div>
    );
  }
})