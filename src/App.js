/* eslint-disable  */
import React from 'react';
import { Provider } from 'react-redux';

import Main from 'pages/Main';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Main/>
    </div>
  </Provider>
);

export default App;
