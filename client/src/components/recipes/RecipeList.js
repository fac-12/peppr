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
          <Link to={`/recipes/${recipe.id}`}>
            <img src={recipe.imageurl} />
          </Link>
          <p>{recipe.title}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>My Recipes</h1>
        {this.renderPosts()}

      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeList);
