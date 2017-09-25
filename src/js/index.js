'use strict'

import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App'

// redux
import { Provider } from 'react-redux'
import store from './store/Store'

let app = document.getElementById('app')

render(
    <Provider store={store}>
        <HashRouter hashType="noslash">
            <App />
        </HashRouter>
    </Provider>
  , app
);
