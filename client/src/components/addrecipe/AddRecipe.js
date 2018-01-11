import React, { Component } from 'react';

import UrlForm from './UrlForm';
import NewRecipeForm from './NewRecipeForm';

class AddRecipe extends Component {

  render() {

    return (
      <div>
        <h1>Add Recipe</h1>
        <UrlForm />
        <p>or enter your recipe details manually</p>
        <NewRecipeForm />
      </div>
    );
  }
}



export default AddRecipe;
