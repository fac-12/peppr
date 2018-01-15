import React, { Component } from 'react';
import history from '../actions/history';

class Banner extends Component {
  render() {
    return(
    <div className='mobileBanner'>
      <button onClick={history.goBack} className="mobileBanner__backiconContainer"><i className="ion-ios-arrow-back mobileBanner__backicon"></i></button>
      <h2 className='mobileBanner__title'>{this.props.title}</h2>
    </div>
  )}
}

export default Banner;