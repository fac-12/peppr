import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';
import landingImage from '../katherine-lenhart-440548.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        {/* <SignUp /> */}
        <div className="form">
          <SignIn />
        </div>
        <img src={landingImage} alt="Pepper image" className="landingImage" />
      </div>
    );
  }
}

export default Landing;
