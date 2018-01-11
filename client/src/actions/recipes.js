import axios from 'axios';
import { CHECK_URL, ADD_RECIPE } from './types'

export const checkUrl = (values) => {
  return(dispatch) => {
    axios.post('/urlscraper', values)
    .then(response => {
      dispatch({
        type: CHECK_URL,
        payload: response.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const addRecipe = (values, callback) => {
  return(dispatch) => {
    axios.post('/addnewrecipe', values, {  headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      dispatch({
        type: ADD_RECIPE,
        payload: response.data
      })
      callback();
    })
    .catch(err => console.log(err))
  }
}
