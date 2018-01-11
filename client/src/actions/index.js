import axios from 'axios';
import { GET_USER } from './types'

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