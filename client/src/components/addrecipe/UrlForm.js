import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { checkUrl } from "../../actions/recipes";

class UrlForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Enter a recipe URL from one of our partner sites to save the recipe automatically:"
            name="url"
            component={this.renderField}
          /> 
          <button type="submit"><i className="ion-ios-download-outline"></i></button>
          {this.renderAlert()}
        </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <label>{field.label}</label>
        <input type="url" {...field.input} />
        <div>
          {touched ? error : ""}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.checkUrl(values);
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
