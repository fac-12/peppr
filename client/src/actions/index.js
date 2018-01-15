import axios from 'axios';
import history from './history';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types'

export const getUser = () => {
  return(dispatch) => {
    axios.get('/getuser', {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: AUTH_USER
      })
    })
    .catch(err => {
      dispatch({
        type: UNAUTH_USER
      })
    })
  }
}

export const signupUser = values => {
  return dispatch => {
    axios.post('/signup', values)
    .then(response => {
      dispatch({
        type: AUTH_USER
      })
      localStorage.setItem('token', response.data.token)
      history.push('/recipes')
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
      dispatch({
        type: AUTH_USER
      })
      localStorage.setItem('token', response.data.token)
      history.push('/recipes')
    })
    .catch(error => {
      dispatch(authError('Email or password was incorrect'));
    })
  }
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
