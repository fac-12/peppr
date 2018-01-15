import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from '../Navbar';
import NoRecipes from './NoRecipes';
import { connect } from "react-redux";
import { getRecipes } from '../../actions/recipes';
import _ from 'lodash';

class Recipes extends Component {

  componentDidMount() {    
    this.props.getRecipes();
  }

  render() {

    const { recipes } = this.props;

    if(!recipes) return <Navbar />

    return (
      <div>
        <Navbar />
        { _.isEmpty(recipes) ? <NoRecipes/> : <RecipeList /> }
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => {
  return { recipes };
}

export default connect(mapStateToProps, { getRecipes })(Recipes);
