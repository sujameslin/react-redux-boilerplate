import React from 'react';
import {
  Router,
  Route,
  Redirect,
  browserHistory
} from 'react-router';
import {
  App,
  Home,
  NoMatch
} from './containers';

export default () => (
  <Router history={browserHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);
