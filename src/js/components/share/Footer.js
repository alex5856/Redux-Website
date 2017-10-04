
import React, {Component} from 'react';

class Footer extends Component {

    render() {
      var footer = [
          <footer className="footer">
            <div className="container">
              <p className="text-muted text-center">&copy; 2017 WebSite</p>
            </div>
          </footer>
      ];

      return (
        <div className="footer">
          {footer}
        </div>
      );
    }
}
export default Footer