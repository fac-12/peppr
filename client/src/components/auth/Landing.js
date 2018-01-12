import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';
import landingImage from '../../katherine-lenhart-440548.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="signin__container">
          <SignIn />
        </div>
        <img src={landingImage} alt="Pepper image" className="landing__pepprImage" />
      </div>
    );
  }
}

export default Landing;
