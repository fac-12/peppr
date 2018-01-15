import { SHOW_FORM } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return true;
    default:
      return state;
  }
}
