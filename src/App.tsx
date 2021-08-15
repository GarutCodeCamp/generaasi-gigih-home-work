/* eslint-disable import/extensions */
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
import ListeningRoute from './Routes'

const App = () => (
  <Provider store={store}>
    <ListeningRoute />
  </Provider>
)

export default App;
