import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './app';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/default.scss';
import 'react-quill/dist/quill.snow.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
