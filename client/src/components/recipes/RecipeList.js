import React, { Component } from 'react';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
      <div>
        <h1>My Recipes</h1>
        <RecipeItem />
        
      </div>
    );
  }
}

export default RecipeList;
