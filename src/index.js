import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './client/configureStore';
import App from './client/containers/App';
import registerServiceWorker from './client/registerServiceWorker';
import './client/index.css';

async function init() {
  const store = await configureStore();
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={App} />
      </Provider>
    </Router>,
document.getElementById('root'),
);
}
init();
registerServiceWorker();
