import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';

/* Context */
import { ContextProvider } from './context';

import history from './resources/navigation/history';

ReactDOM.render(
  <ContextProvider>
    <Router history={history}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
