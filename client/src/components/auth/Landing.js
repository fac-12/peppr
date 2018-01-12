import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';
import landingImage from '../../katherine-lenhart-440548.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="form">
          {this.renderForm()}
        </div>
        <img src={landingImage} alt="Pepper image" className="landingImage" />
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
