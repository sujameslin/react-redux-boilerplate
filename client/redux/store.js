import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// combined reducers
import reducers from './modules/reducer';

const devMode = process.env.NODE_ENV === 'development';
const middlewares = [
  thunk,
  devMode ? createLogger() : f => f
];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);


// if (module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('../', () => {
//     const nextReducer = require('../');
//     store.replaceReducer(nextReducer);
//   });
// }

export default store;
