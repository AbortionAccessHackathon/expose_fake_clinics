'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import TitleBar from './components/TitleBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme.js';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js'



const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <TitleBar></TitleBar>
      {children}
    </div>
)

render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ExampleApp}>
          <IndexRedirect to="/jokes" />
          <Route path="/jokes" component={Jokes} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
