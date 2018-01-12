import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signinUser } from '../../actions/auth';

class SignIn extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <div className="landing__form__container">
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
            {this.renderAlert()}
            <input type="submit" defaultValue="Login" className="landing__form__btn"/>
          </form>
        </div>
        <Link to='/signup' className="landing__form__togglelink">New to Peppr? Sign up</Link>
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
    this.props.signinUser(values)
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