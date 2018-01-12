import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../../actions/auth';

class SignUp extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <div className="landing__form__container">
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
            {this.renderAlert()}  
            <input type="submit" defaultValue="Sign Up" className="landing__form__btn"/>
          </form>
        </div>
        <Link to='/' className="landing__form__togglelink">Already a member? Login</Link>
      </section>
    )
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    return ([
      <input {...field.input}
      type={field.type}
      placeholder={field.placeholder}
      className="landing__input"
      key={1}
      />,
      <div key={2} className="landing__input--errortext">
        {touched ? error : ''}
      </div>
     ])
  }

  handleFormSubmit(values) {
    this.props.signupUser(values)
  }

  renderAlert(){
    if (this.props.error){
      return (
          <p className="landing__input--errortext">
            <strong>Oops!</strong> {this.props.error}
          </p>
      );
    } 
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

const mapStateToProps = state => ({ error: state.error })

export default reduxForm ({
  validate,
  form: 'signup'
})(
  connect (mapStateToProps, { signupUser })(SignUp)
)