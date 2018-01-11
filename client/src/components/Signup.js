import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';

class SignUp extends Component {
  render() {
    return (
      <form>
        <Field
          name='name'
          type='text'
          placeholder='Name'
          component={this.renderField}
        />
        <Field
          name='email'
          type='email'
          placeholder='Email'
          component={this.renderField}
        />
        <Field
          name='password'
          type='password'
          placeholder='Password'
          component={this.renderField}
        />
        <Field
          name='confirmPassword'
          type='password'
          placeholder='Confirm password'
          component={this.renderField}
        />
        <input type="Submit" defaultValue="Submit"/>
      </form>
    )
  }
  renderField(field) {
    return (
      <input {...field.input}
      type={field.type}
      placeholder={field.placeholder}
      />
    )
  }
}

export default reduxForm ({
  form: 'signup'
})(
  connect (null, { signupUser })(SignUp)
)