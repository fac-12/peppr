import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { checkUrl } from "../../actions/recipes";

import goodfood from '../../assets/images/goodfood.png'
import delicious from '../../assets/images/delicious.png'
import jamieoliver from '../../assets/images/jamieoliver.png'

class UrlForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p className="urlform__text addrecipe__innermargin">Enter a recipe URL from one of our partner sites to save the recipe automatically:</p>
          <Field
            name="url"
            arialabel="Url"
            component={this.renderField}
          />
          {this.renderAlert()}
          <div className="urlform__modal">
            <p className="addrecipe__innermargin addrecipe__partnersite--text">Our partner sites are:</p>
            <div className="urlform__modal__imagecontainer addrecipe__innermargin">
              <a href="https://www.bbcgoodfood.com/" target="_blank">
                <img src={goodfood} alt="BBC Good Food logo"/>
              </a>
              <a href="https://www.jamieoliver.com/" target="_blank">
                <img src={jamieoliver} alt="Jamie Oliver logo"/>
              </a>
              <a href="http://www.deliciousmagazine.co.uk/" target="_blank">
                <img src={delicious} alt="Delicious Magazine logo"/>
              </a>
            </div>
          </div>
        </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <div className="urlform addrecipe__innermargin">
          {/* <label>{field.label}</label> */}
          <input
          className="urlform__input"
          type="url" {...field.input}
          placeholder="Enter URL"
          aria-label={field.arialabel}
          />
          <button type="submit" className="urlform__btn">
            <i className="ion-ios-download urlform__btn__icon"></i>
          </button>
          </div>
          <p className="urlform__input--errortext addrecipe__innermargin">
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
