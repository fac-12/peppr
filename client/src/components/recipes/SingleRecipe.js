import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getSingleRecipe, deleteRecipe } from '../../actions/recipes';
import _ from 'lodash';

class SingleRecipe extends Component {

  componentDidMount() {
    if(!this.props.recipe) {
      const { id } = this.props.match.params;
      this.props.getSingleRecipe(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteRecipe(id);
  }

  renderStringToList(str) {
    return str.split('\n').map((line, index) => <li key={index}>{line}</li>);
  }

  render() {
    const { recipe } = this.props;

    if (!recipe) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/recipes">Back To Recipes</Link>
        <button onClick={this.onDeleteClick.bind(this)}>Delete Recipe</button>
        <h1>{recipe.title}</h1>
        <h2>Ingredients</h2>
        <ul>{this.renderStringToList(recipe.ingredients)}</ul>
        <h2>Method</h2>
        <ol>{this.renderStringToList(recipe.method)}</ol>
        <img src={recipe.imageurl} />
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }, ownProps) => {
  return recipes ? { recipe: recipes[ownProps.match.params.id] } : { recipe: recipes }
}

export default connect(mapStateToProps, { getSingleRecipe, deleteRecipe })(SingleRecipe);
