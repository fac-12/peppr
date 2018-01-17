import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../actions/auth'

import history from '../actions/history';
import Landing from './auth/Landing';
import AddRecipe from './addrecipe/AddRecipe';
import Recipes from './recipes/Recipes';
import SingleRecipe from './recipes/SingleRecipe';
import ServerError from './errors/ServerError500';
import NotFound from './errors/NotFound400';

class App extends Component {
  
  render() {
    if (this.props.auth === null) return <div></div>
    return (
        <Router history={history}>
          <Switch>
            
            <Route exact path="/" 
              render={props => (!this.props.auth ? (<Landing {...props}/>) : (<Redirect to="/recipes"/>))}
            />

            <Route exact path="/signup" 
              render={props => (!this.props.auth ? (<Landing {...props}/>) : (<Redirect to="/recipes"/>))}
            />

            <Route exact path="/recipes"
              render={() => (this.props.auth ? (<Recipes/>) : (<Redirect to="/"/>))}
            />

            <Route exact path="/recipes/:id" 
              render={props => (this.props.auth ? (<SingleRecipe {...props}/>) : (<Redirect to="/"/>))} 
            />

            <Route exact path="/addrecipe"
              render={() => (this.props.auth ? (<AddRecipe/>) : (<Redirect to="/"/>))}
            />

            <Route exact path="/servererror" 
              render={() => (this.props.auth ? (<ServerError/>) : (<Redirect to="/"/>))}
            />

            <Route component={NotFound}/>
          </Switch>
        </Router>
    );
  }
  componentDidMount() {
    this.props.getUser();
  }
}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps, { getUser })(App);
