import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import AddRecipe from './addrecipe/AddRecipe';
import Recipes from './Recipes';


class App extends Component {
  render() {
    if (this.props.auth === null) return <div></div>
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes"
            render={(props) => (this.props.auth ? (<Recipes {...props}/>) : (<Redirect to="/"/>))}
            />
            <Route exact path="/addrecipe"
            render={(props) => (this.props.auth ? (<AddRecipe {...props}/>) : (<Redirect to="/"/>))}
            />
          </div>
        </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.getUser();
  }
}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, actions)(App);
