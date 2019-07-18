import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import './App.css';

import Post from './component/post/Index.js';

const middleware = [thunk];
const initState = {};
const store = createStore(
  ()=>{},
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
