import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return true;
    case UNAUTH_USER:
      return false;  
    default:
      return state;
  }
}
