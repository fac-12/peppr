import { DISPLAY_ERROR, RESET_ERROR } from '../actions/types'

export default (state = '', action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return action.payload;
    case RESET_ERROR:
      return '';
    default:
      return state;
  }
}