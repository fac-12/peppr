import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';
import landingImage from '../../assets/images/katherine-lenhart-440548.jpg'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__header">PEPPR</h1>
        <p className="landing__tagline">enter tagline</p>
        {this.renderForm()}
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
