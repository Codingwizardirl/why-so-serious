import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './configureStore';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

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
