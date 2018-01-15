import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import _ from 'lodash';

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
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <img src={recipe.imageurl} alt={recipe.title}/>
          </Link>
          <p>{recipe.title}</p>
        </div>
      );
    });
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
