import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';
import landingImage from '../../katherine-lenhart-440548.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="signin__container">
          {this.renderForm()}
        </div>
        <img src={landingImage} alt="Pepper image" className="landing__pepprImage" />
      </div>
    );
  }

  renderForm(){
    return (
      this.props.match.path === '/' ? <SignIn /> : <SignUp />
    )
  }
}


export default Landing;
