import { FETCH_RECIPE,RESET_RECIPE } from '../actions/types';

const emptyRecipe = {
  title: '',
  ingredients: '',
  method: '',
  imageUrl: '',
  tags: ''
};

export default (state = emptyRecipe, action) => {

  switch (action.type) {
    case FETCH_RECIPE:
      return action.payload;
    case RESET_RECIPE:
      return emptyRecipe;
    default:
      return state;
  }
}
