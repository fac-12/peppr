import React, { Component } from 'react';
import image from '../../assets/images/norecipes.jpeg';

class NoRecipes extends Component {
  render() {
    return (
      <div>
        <img src={image} alt="Tomatoes on a marble surface"/>
        <p>No recipes saved yet!</p>
      </div>
    );
  }
}

export default NoRecipes;
