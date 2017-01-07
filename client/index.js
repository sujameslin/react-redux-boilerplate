import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from './redux/store';
import getRoutes from './routes';


ReactDOM.render(
  (<Provider store={store}>
    <Router history={browserHistory} routes={getRoutes()} />
  </Provider>),
  document.querySelector('#app')
);
