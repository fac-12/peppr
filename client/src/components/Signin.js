import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

class SignIn extends Component {
  render() {
    console.log(this.props.error)
    const { handleSubmit } = this.props;
    return (
      <section className="signin">
        <h1 className="heading">Login</h1>
        <p className="tagline">enter tagline</p>
         <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name='email'
            type='email'
            placeholder='Email'
            className='loginInput'
            component={this.renderField}
          />
          <Field
            name='password'
            type='password'
            placeholder='Password'
            className='loginInput'
            component={this.renderField}
          />
          <input type="submit" defaultValue="Login" className="loginBtn"/>
        </form>
        <p className="signupRedirect">New to Peppr? Sign up</p>
      </section>

    )
  }
  renderField(field) {
    const { className, meta: { touched, error}} = field;
    return ([
      <input {...field.input}
      type={field.type}
      placeholder={field.placeholder}
      className={className}
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

const mapStateToProps = state => ({ error: state.error })

export default reduxForm ({
  validate,
  form: 'signin'
})(
  connect (mapStateToProps, { signinUser })(SignIn)
)