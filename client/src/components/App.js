import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import history from '../actions/history';
import Landing from './auth/Landing';
import AddRecipe from './addrecipe/AddRecipe';
import Recipes from './Recipes';


class App extends Component {
  render() {
    if (this.props.auth === null) return <div></div>
    return (
        <Router history={history}>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes"
            render={() => (this.props.auth ? (<Recipes/>) : (<Redirect to="/"/>))}
            />
            <Route exact path="/addrecipe" 
            render={() => (this.props.auth ? (<AddRecipe/>) : (<Redirect to="/"/>))}
            />
          </div>
        </Router>
    );
  }
  componentDidMount() {
    this.props.getUser();
  }
}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, actions)(App);
