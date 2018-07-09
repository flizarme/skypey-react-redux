import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/app'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import 'reset-css'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
