import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UrlForm from './UrlForm';
import NewRecipeForm from './NewRecipeForm';
import Banner from '../mobileBanner';
import Navbar from '../Navbar';

class AddRecipe extends Component {
  render(){
    return (
      <div>
        <Banner title={"Add a recipe"}/>
        <h1>Add a Recipe</h1>
        <UrlForm />
        <Link to='/addrecipeform'>or enter your recipe details manually</Link>
        {this.renderForm()}
        <Navbar />
      </div>
    );
  }

  renderForm(){
    return (
      this.props.match.path === '/addrecipeform' ? <NewRecipeForm /> : <div></div>
    )
  }
}



export default AddRecipe;
