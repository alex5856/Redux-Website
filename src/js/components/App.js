
import React, {Component, PropTypes} from 'react'

// 引入 Components
import TopNav from './share/TopNav'
import Main from './share/Main'
import Footer from './share/Footer'

class App extends Component {

  render() {
    return (
      <div>
        <TopNav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;