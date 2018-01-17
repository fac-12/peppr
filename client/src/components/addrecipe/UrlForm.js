import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { checkUrl } from "../../actions/recipes";
import { Link } from 'react-router-dom';

import goodfood from '../../assets/images/goodfood.png'
import delicious from '../../assets/images/delicious.png'
import jamieoliver from '../../assets/images/jamieoliver.png'

class UrlForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p className="urlform__text">Enter a recipe URL from one of our partner sites to save the recipe automatically:</p>
          <Field
            name="url"
            component={this.renderField}
          /> 
          {this.renderAlert()}
          <div className="urlform__modal">
            <p>Our partner sites are:</p>
            <div className="urlform__modal__imagecontainer">
            <img src={goodfood}/>
            <img src={jamieoliver}/>
            <img src={delicious}/>
            </div>
          </div> 
        </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <div className="urlform">
          <label>{field.label}</label>
          <input 
          className="urlform__input" 
          type="url" {...field.input} 
          placeholder="Enter URL"/>
          <button type="submit" className="urlform__btn">
            <i className="ion-ios-download urlform__btn__icon"></i>
          </button>
          </div>
          <p className="urlform__input--errortext">
            {touched ? error : ""}
          </p>
      </div>
    )
  }

  onSubmit(values) {
    this.props.checkUrl(values);
  }

  renderAlert(){
    if (this.props.error){
      return (
          <p className="urlform__input--errortext">
            <strong>Oops!</strong> {this.props.error}
          </p>
      );
    }
  }
}

const validate = (values) => {

  const errors = {};

  if (!values.url) {
    errors.url = "Enter a recipe URL";
  }

  return errors;
}

const mapStateToProps = (state) => {
  return {
    newRecipe: state.newRecipe,
    error: state.error
  };
}

export default reduxForm({
  validate,
  form: "UrlForm"
})(connect(mapStateToProps, { checkUrl })(UrlForm));
