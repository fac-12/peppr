import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/norecipes.jpeg';

class NoRecipes extends Component {
  render() {
    return (
      <div>
        <img src={image} alt="Tomatoes on a marble surface"/>
        <p>No recipes saved yet!</p>
        <Link to='/addrecipe'>Add a recipe</Link> 
      </div>
    );
  }
}

export default NoRecipes;
