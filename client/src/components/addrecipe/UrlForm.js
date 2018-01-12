import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { checkUrl } from "../../actions/recipes";

class UrlForm extends Component {

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

  render() {

    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Enter your favourite online recipe URL:"
            name="url"
            component={this.renderField}
          />
          <input type="submit" />
        </form>
    );
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
  return { recipes: state.recipes };
}

export default reduxForm({
  validate,
  form: "UrlForm"
})(connect(mapStateToProps, { checkUrl })(UrlForm));
