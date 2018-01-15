import React, { Component } from 'react';
import history from '../actions/history';

class Banner extends Component {
  render() {
    return(
    <div>
      <button onClick={history.goBack}><i className="ion-ios-arrow-left"></i></button>
      Hello world
    </div>  
  )}
}

export default Banner;