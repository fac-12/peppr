import axios from 'axios';
import { GET_USER, AUTH_USER, AUTH_ERROR } from './types'

export const getUser = () => {
  return(dispatch) => {
    axios.get('/getuser', {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: GET_USER,
        payload: response.data
      })
    })
    .catch(err => console.log)
  }
}

export const signupUser = values => {
  return dispatch => {
    axios.post('/signup', values)
    .then(response => {
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => {
      dispatch(authError(error.response.data.error));
    })
  }
}

export const signinUser = values => {
  return dispatch => {
    axios.post('/signin', values)
    .then(response => {
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => {
      dispatch(authError('Username or password was incorrect'));
    })
  }
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}