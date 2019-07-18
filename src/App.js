import React, {Component} from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';

import './App.css';

import Post from './component/post/Index.js';
import Add from './component/add/Index.js';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>

          <Add/>
          <Post/>
        </div>
      </Provider>
    );
  }
}

export default App;
