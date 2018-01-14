import { GET_RECIPES, GET_SINGLE_RECIPE, DELETE_RECIPE } from '../actions/types';
import _ from "lodash";

export default (state = null, action) => {

  switch (action.type) {
    case GET_RECIPES:
      return _.mapKeys(action.payload, "id");
    case GET_SINGLE_RECIPE:
      return state ? { ...state, [action.payload.id]: action.payload } : { [action.payload.id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
