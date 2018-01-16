import axios from 'axios';
import history from './history';
import { AUTH_USER, UNAUTH_USER, DISPLAY_ERROR, RESET_ERROR } from './types'

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
    .catch(err => {
      dispatch(displayError(err.response.data.error));
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
    .catch(err => {
      if (err.message.includes('401')){
        dispatch(displayError('Email or password was incorrect'));
      } else {
        dispatch(displayError("There was an issue with our server. Please try again later"));
      }
    })
  }
}

export const displayError = err => {
  return {
    type: DISPLAY_ERROR,
    payload: err
  };
}

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}