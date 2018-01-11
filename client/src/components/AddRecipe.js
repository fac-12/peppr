import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class AddRecipe extends Component {

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h1>Add Recipe</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Enter your favourite online recipe URL:"
            name="url"
            component={this.renderField}
          />
          <input type="submit" />
        </form>

      </div>
    );
  }
}

function validate(values) {

  const errors = {};

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, {  })(AddRecipe));
