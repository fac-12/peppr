import { GET_USER, AUTH_USER, AUTH_ERROR } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case GET_USER:
      const res = action.payload || false;
      return { ...state, authenticated: res, error: ''};
    case AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case AUTH_ERROR:
      return { ...state, error: action.payload};
    default:
      return state;
  }
}
