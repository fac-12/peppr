import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import errorReducer from './errorReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer
});