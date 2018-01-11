import { GET_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload || false;
    default:
      return state;
  }
}