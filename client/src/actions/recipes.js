import axios from 'axios';
import { CHECK_URL, ADD_RECIPE } from './types';
import { authError } from './auth';
import history from './history';

export const checkUrl = (values) => {
  return(dispatch) => {
    axios.post('/urlscraper', values)
    .then(response => {
      dispatch({
        type: CHECK_URL,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch(authError('Sorry, we can\'t find the recipe details from this url.\nPlease try one of our partner recipe sites'));
    })
  }
}

export const addRecipe = (values) => {
  return(dispatch) => {
    axios.post('/addnewrecipe', values, {  headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      dispatch({
        type: ADD_RECIPE,
        payload: response.data
      })
      history.push('/recipes');
    })
    .catch(error => {
      history.push('/addrecipe');
    })
  }
}
