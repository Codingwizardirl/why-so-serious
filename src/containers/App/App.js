import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Input from '../Input';
import logo from '../../logo.svg';
import './App.css';

const store = configureStore()

class App extends Component {
  componentDidMount(){

  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Why so serious?</h2>
        </div>
        <div className="input-container">
          <Input />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
