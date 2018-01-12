import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signinUser } from '../../actions/auth';

class SignIn extends Component {
  render() {
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
          {this.renderAlert()}  
          <input type="submit" defaultValue="Login" className="loginBtn"/>
        </form>
        <Link to='/signup' className="signupRedirect">New to Peppr? Sign up</Link>
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

  renderAlert(){
    if (this.props.error){
      return (
          <p>
            <strong>Oops!</strong> {this.props.error}
          </p>
      );
    } 
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