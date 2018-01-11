import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';

class SignUp extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        <input type="submit" defaultValue="submit"/>
      </form>
    )
  }
  renderField(field) {
    const { meta: { touched, error}} = field;
    return ([
      <input {...field.input}
      type={field.type}
      placeholder={field.placeholder}
      key={1}
      />,
      <div key={2}>
        {touched ? error : ''}
      </div>
     ])
  }
  handleFormSubmit(values) {
    this.props.signupUser(values)
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = 'Enter your name';
  if (!values.email) errors.email = 'Enter your email';
  if (!values.password) errors.password = 'Enter your password';
  if (!values.confirmPassword) errors.confirmPassword = 'Enter your password again';
  if (values.password  !== values.confirmPassword) errors.confirmPassword = 'Password do not match';
  return errors;
}

export default reduxForm ({
  validate,
  form: 'signup'
})(
  connect (null, { signupUser })(SignUp)
)