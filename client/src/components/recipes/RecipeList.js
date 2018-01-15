import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Navbar from '../Navbar';

class RecipeList extends Component {

  renderPosts() {
    return _.map(this.props.recipes, recipe => {
      return (
        <div key={recipe.id} className='recipeList__container'>
          <Link to={`/recipes/${recipe.id}`}>
            <img src={recipe.imageurl} className='recipeList__img'/>
          </Link>
          <p className='recipeList__recipeTitle'>{recipe.title}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.renderPosts()}

      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
