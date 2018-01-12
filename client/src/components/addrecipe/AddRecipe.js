import React, { Component } from 'react';

import UrlForm from './UrlForm';
import NewRecipeForm from './NewRecipeForm';

const AddRecipe = (props) => {  

  return (
    <div>
      <h1>Add Recipe</h1>
      <UrlForm />
      <p>or enter your recipe details manually</p>
      <NewRecipeForm history={props.history} />
    </div>
  );
}



export default AddRecipe;
