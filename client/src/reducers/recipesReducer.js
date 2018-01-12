import { GET_RECIPES } from '../actions/types';

export default (state = null, action) => {

  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
