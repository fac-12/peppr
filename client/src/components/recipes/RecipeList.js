import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Navbar from '../Navbar';

class RecipeList extends Component {
  render() {
    return (
      <div>
        <h1>My Recipes</h1>
        {this.renderPosts()}
      </div>
    );
  }

  renderPosts() {
    return _.map(this.props.recipes, recipe => {
      return (
        <Link to={`/recipes/${recipe.id}`} className='recipeList__link recipelist--overlay' key={recipe.id}>
          <div className='recipeList__container' style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${recipe.imageurl})`}}>
              {/* <img src={recipe.imageurl} alt={recipe.title} className='recipeList__img'/> */}
            <h2 className='recipeList__recipeTitle'>{recipe.title}</h2>
          </div>
        </Link>
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
