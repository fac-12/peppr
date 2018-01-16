import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/no-recipes.jpg';

class NoRecipes extends Component {
  render() {
    return (
      <div>
        <div style={{backgroundImage: `url(${image})`}} className='noRecipes__img'></div>
        <div className='noRecipes__container'>
          <p className='noRecipes__message'>No recipes saved yet!</p>
          {/* <img src={image} alt="Tomatoes on a marble surface" className='noRecipes__img'/> */}
          <Link to='/addrecipe' className='noRecipes__btn'><span>Add a recipe</span></Link>
        </div>
      </div>
    );
  }
}

// linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),

export default NoRecipes;
