import React, { Component } from 'react';

import UrlForm from './UrlForm';
import NewRecipeForm from './NewRecipeForm';
import Banner from '../mobileBanner';
import Navbar from '../Navbar';

const AddRecipe = (props) => {

  return (
    <div>
      <Banner title={"Add a recipe"}/>
      <h1>Add Recipe</h1>
      <UrlForm />
      <p>or enter your recipe details manually</p>
      <NewRecipeForm />
      <Navbar />
    </div>
  );
}



export default AddRecipe;
