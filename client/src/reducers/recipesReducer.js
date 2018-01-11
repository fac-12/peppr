import { CHECK_URL } from '../actions/types';

const emptyRecipe = {
  title: '',
  ingredients: '',
  method: '',
  imageUrl: '',
  tags: ''
};

export default (state = emptyRecipe, action) => {

  switch (action.type) {
    case CHECK_URL:
      return action.payload;
    default:
      return state;
  }
}
