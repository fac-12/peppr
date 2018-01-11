import React, { Component } from 'react';
import SignUp from './Signup';
import SignIn from './Signin';

class Landing extends Component {
  render() {
    return (
      <div>
        <SignUp />
        {/* <SignIn /> */}
      </div>
    );
  }
}

export default Landing;
