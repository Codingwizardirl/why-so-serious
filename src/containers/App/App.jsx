import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Main from '../Main';
import './App.css';

const store = configureStore();

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header" />
          <div className="input-container">
            <Main />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
