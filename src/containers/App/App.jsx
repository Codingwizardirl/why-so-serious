import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Layout from '../Layout';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header" />
          <div className="input-container">
            <Layout />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
