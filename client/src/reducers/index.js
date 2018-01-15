import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import errorReducer from './errorReducer';
import newRecipeReducer from './newRecipeReducer';
import recipesReducer from './recipesReducer'
import showFormReducer from './showFormReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  newRecipe: newRecipeReducer,
  recipes: recipesReducer,
  showForm: showFormReducer
});
