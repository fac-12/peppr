import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

class SignIn extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
    this.props.signinUser(values)
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) errors.email = 'Enter your email';
  if (!values.password) errors.password = 'Enter your password';
  return errors;
}

export default reduxForm ({
  validate,
  form: 'signin'
})(
  connect (null, { signinUser })(SignIn)
)