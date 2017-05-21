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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Input />
        </p>
      </div>
      </Provider>
    );
  }
}

export default App;
