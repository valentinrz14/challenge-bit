import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
