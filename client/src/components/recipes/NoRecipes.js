import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/no-recipes-img.jpg';

class NoRecipes extends Component {
  render() {
    return (
      <div className="noRecipes__container">
        <div style={{backgroundImage: `url(${image})`}} className='noRecipes__img'>
          <p className='noRecipes__message'>No recipes saved yet!</p>
          <Link to='/addrecipe' className='noRecipes__btn'><span>Add a recipe</span></Link>
        </div>
      </div>
    );
  }
}

export default NoRecipes;
