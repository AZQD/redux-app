import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
console.log(54, applyMiddleware);

import rootReducers from './reducers';

const middleware = [thunk];
const initState = {};
const store = createStore(
  rootReducers,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;