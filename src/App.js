import React, { Component }       from 'react';
import { render }                 from 'react-dom';
import $                          from 'jquery';
import { HashRouter , Router }    from 'react-router-dom';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';
import {Provider}                 from 'react-redux';
import configureStore             from './store/AppStore';
import {Route, Switch, Redirect}  from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './App.scss';
import ProbudgetLink    from './probudget/ProbudgetRouter';
const store = configureStore();

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
      <MuiThemeProvider>
      <HashRouter>
        <Switch>
          <Route path="/"   component={ProbudgetLink} />
        </Switch>
      </HashRouter>
      </MuiThemeProvider>
      </Provider>
    );
  }
}

render(
  <Main />,
  document.getElementById('app')
);
