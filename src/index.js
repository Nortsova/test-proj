import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import './styles/styles.scss';
import storeData from './store';


render(
  <BrowserRouter>
    <Provider store={storeData}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
