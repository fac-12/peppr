import axios from 'axios';
import { GET_USER, AUTH_USER } from './types'

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
      console.log(response.data.token)
      dispatch({type: AUTH_USER})
      localStorage.setItem('token', response.data.token)
    })
    .catch(console.log)
  }
}