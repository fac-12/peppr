import React, { Component } from 'react';
import RecipeList from './RecipeList';
import { connect } from "react-redux";
import { getRecipes } from '../../actions/recipes';


class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes();
    console.log('recipes', this.props.recipes);
  }

  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes };
}

export default connect(mapStateToProps, { getRecipes })(Recipes);
