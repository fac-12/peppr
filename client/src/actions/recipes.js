import axios from 'axios';
import { CHECK_URL, ADD_RECIPE, GET_RECIPES, GET_SINGLE_RECIPE, DELETE_RECIPE, SHOW_FORM } from './types';
import { displayError } from './auth';
import history from './history';

export const checkUrl = (values) => {
  return(dispatch) => {
    axios.post('/urlscraper', values)
    .then(response => {
      dispatch({
        type: CHECK_URL,
        payload: response.data
      })
      dispatch(showForm());
    })
    .catch(err => {
      dispatch(displayError('Sorry, we can\'t find the recipe details from this url.\nPlease try one of our partner recipe sites'));
    })
  }
}

export const addRecipe = (values) => {
  return(dispatch) => {
    axios.post('/addnewrecipe', values, {headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      dispatch({
        type: ADD_RECIPE,
        payload: response.data
      })
      history.push('/recipes');
    })
    .catch(err => {
      history.push('/addrecipe');
    })
  }
}

export const getRecipes = () => {
  return (dispatch) => {
    axios.get('/getrecipes', {headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      dispatch({
        type: GET_RECIPES,
        payload: response.data
      })
    })
    .catch(err => {

    })
  }
}

export const getSingleRecipe = (id) => {
  return (dispatch) => {
    axios.get(`/getsinglerecipe/${id}`, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: GET_SINGLE_RECIPE,
        payload: response.data
      })
    })
    .catch(err => {

    })
  }
}

export const deleteRecipe = (id) => {
  return (dispatch) => {
    axios.get(`/deleterecipe/${id}`, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: DELETE_RECIPE,
        payload: id
      });
      history.push('/recipes');
    })
  }
}

export const showForm = () => {
  return {
    type: SHOW_FORM
  }
}
