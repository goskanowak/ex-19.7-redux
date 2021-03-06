import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import { reducer } from './reducer.js';
import { addComment } from './actions';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));