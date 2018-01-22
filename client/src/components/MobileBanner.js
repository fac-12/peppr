import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
    <div className='mobileBanner'>      
      <h2 className='mobileBanner__title'>{this.props.title}</h2>
    </div>
  )}
}

export default Banner;
