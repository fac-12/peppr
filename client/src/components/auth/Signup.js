import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser, resetError } from '../../actions/auth';

class SignUp extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <section className="landing__form__container">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field
              name='name'
              type='text'
              placeholder='Name'
              arialabel='Name'
              component={this.renderField}
            />
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
            <Field
              name='confirmPassword'
              type='password'
              placeholder='Confirm password'
              arialabel='Confirm password'
              component={this.renderField}
            />
            <p className="landing__input--errortext">{this.renderAlert()}</p>
            <input type="submit" defaultValue="Sign Up" className="landing__form__btn"/>
          </form>
        <Link to='/' className="landing__form__togglelink">Already a member? Login</Link>
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
    this.props.signupUser(values)
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
  connect (mapStateToProps, { signupUser, resetError })(SignUp)
)
