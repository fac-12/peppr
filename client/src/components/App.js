import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../actions/auth'

import history from '../actions/history';
import Landing from './auth/Landing';
import AddRecipe from './addrecipe/AddRecipe';
import Recipes from './recipes/Recipes';
import SingleRecipe from './recipes/SingleRecipe';


class App extends Component {
  render() {
    if (this.props.auth === null) return <div></div>
    return (
        <Router history={history}>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/recipes"
            render={() => (this.props.auth ? (<Recipes/>) : (<Redirect to="/"/>))}
            />
            <Route exact path="/recipes/:id" render={props => (this.props.auth ? (<SingleRecipe {...props}/>) : (<Redirect to="/"/>))} />
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

export default connect(mapStateToProps, { getUser })(App);
