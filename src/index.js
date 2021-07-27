import React from 'react';
import ReactDOM from 'react-dom';
import Home from './module4_1/Pages/Home/index'
import {Provider} from 'react-redux'
import {store} from './module4_1/redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

