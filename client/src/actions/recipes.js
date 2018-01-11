import axios from 'axios';
import { CHECK_URL } from './types'

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
