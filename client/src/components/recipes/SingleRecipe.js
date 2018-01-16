import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getSingleRecipe, deleteRecipe } from '../../actions/recipes';
import Navbar from '../Navbar';

class SingleRecipe extends Component {
  render() {
    const { recipe } = this.props;

    if (!recipe) return <div>Loading...</div>;

    return (
      <div>
        {/* <Link to="/recipes">Back To Recipes</Link> */}
        {/* <img  src={recipe.imageurl} alt={recipe.title}/> */}
        <div className='singleRecipe__img' style={{backgroundImage: `url(${recipe.imageurl})`}}></div>
        <div className='singleRecipe__container'>
          <h1 className='singleRecipe__title'>{recipe.title}</h1>
          <h2 className='singleRecipe__sub-title'>Ingredients</h2>
          <ul className='singleRecipe__list--ingredients'>{this.renderStringToList(recipe.ingredients)}</ul>
          <h2 className='singleRecipe__sub-title'>Method</h2>
          <ol className='singleRecipe__list--method'>{this.renderStringToList(recipe.method)}</ol>
          <button className='singleRecipe__deleteButton' onClick={this.onDeleteClick.bind(this)}>Delete Recipe</button>
        </div>
        <Navbar />
      </div>
    );
  }

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
    const stringSplit = str.includes('\n\n') ? '\n\n' : '\n';
    return str.split(stringSplit).map((line, index) => {
      if(index !== str.split(stringSplit).length - 1) return <li key={index}>{line}</li>
    });
  }
}

const mapStateToProps = ({ recipes }, ownProps) => {
  return recipes ? { recipe: recipes[ownProps.match.params.id] } : { recipe: recipes }
}

export default connect(mapStateToProps, { getSingleRecipe, deleteRecipe })(SingleRecipe);
