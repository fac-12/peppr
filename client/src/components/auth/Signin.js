import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signinUser, resetError } from '../../actions/auth';

class SignIn extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section className="landing__form__container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name='email'
              type='email'
              placeholder='Email'
              arialabel='Email'
              component={this.renderField}
            />
            <Field
              name='password'
              type='password'
              placeholder='Password'
              arialabel='Password'
              component={this.renderField}
            />
            <p className="landing__input--errortext">{this.renderAlert()}</p>
            <input type="submit" defaultValue="Login" className="landing__form__btn"/>
          </form>
        <Link to='/signup' className="landing__form__togglelink">New to Peppr? Sign up</Link>
      </section>
    )
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = touched && error ? 'landing__input--error' : 'landing__input';
    return ([
      <input {...field.input}
      type={field.type}
      placeholder={field.placeholder}
      className={className}
      aria-label={field.arialabel}
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
      return <span><strong>Oops!</strong> {this.props.error}</span>
    }
  }

  componentDidMount() {
    this.props.resetError();
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
  connect (mapStateToProps, { signinUser, resetError })(SignIn)
)
