import React from 'react';
import ReactDOM from 'react-dom';
import Home from './module4_1/Pages/Home/index'
import {Provider} from 'react-redux'
import {store} from './module4_1/redux/store'
window.React1 = require('react');

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

