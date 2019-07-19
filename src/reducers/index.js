import {combineReducers} from 'redux'
import postReducer from './postReducer.js'
import selectReducer from './selectReducer.js'

export default combineReducers({
  postReducer,
  selectReducer
});