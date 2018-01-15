import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UrlForm from './UrlForm';
import NewRecipeForm from './NewRecipeForm';
import Banner from '../mobileBanner';
import Navbar from '../Navbar';

class AddRecipe extends Component {
  state = {
    showForm: false
  }

  render(){
    return (
      <div>
        <Banner title={"Add a recipe"}/>
        <h1>Add a Recipe</h1>
        <UrlForm />
        <Link to='#' onClick={this.toggleForm.bind(this)}>or enter your recipe details manually</Link>
        {this.renderForm()}
        <Navbar />
      </div>
    );
  }

  toggleForm(){
    this.state.showForm ? this.setState({showForm: false}) : this.setState({showForm: true})
  }  

  renderForm(){
    if (this.state.showForm){
      return (
        <NewRecipeForm />
      );
    }
  }
}



export default AddRecipe;
