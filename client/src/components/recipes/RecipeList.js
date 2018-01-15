import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Navbar from '../Navbar';

class RecipeList extends Component {

  renderPosts() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div key={recipe.id}>
          <div className='recipeList__container'>
            <Link to={`/recipes/${recipe.id}`} className='recipeList__link'>
              <img src={recipe.imageurl} className='recipeList__img'/>
            </Link>
            <p className='recipeList__recipeTitle'>{recipe.title}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div >
        <div className='recipeList__allrecipes'>
          {this.renderPosts()}
        </div>
        <Navbar />
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
