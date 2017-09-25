
import React, {Component} from 'react';

class Content extends Component {

    render() {
      var content = [
          <div className="container">
            <p className="text-center">Content</p>
          </div>
      ];

      return (
        <div className="content">
          {content}
        </div>
      );
    }
}
export default Content