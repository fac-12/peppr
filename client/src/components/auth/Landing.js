import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetError } from '../../actions/auth';

import SignUp from './Signup';
import SignIn from './Signin';

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

  componentDidMount() {
    this.props.resetError();
  }
}


export default connect (null, { resetError })(Landing)
