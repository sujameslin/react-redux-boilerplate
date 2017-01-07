import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import getRoutes from './routes';


ReactDOM.render(
  (<Provider store={store}>
    {getRoutes()}
  </Provider>),
  document.querySelector('#app')
);
