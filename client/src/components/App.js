import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
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