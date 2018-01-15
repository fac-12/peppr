import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipes";

class NewRecipeForm extends Component {

  renderField(field) {

    const { meta: { touched, error } } = field;

    return (
      <div>
        <label>{field.label}</label>
        {field.textfield ? <textarea rows="10" cols="50" {...field.input} /> : <input type="text" {...field.input} />}
        <div>
          {touched ? error : ""}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.addRecipe(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            textfield={false}
            component={this.renderField}
          />
          <Field
            label="Ingredients"
            name="ingredients"
            textfield={true}
            component={this.renderField}
          />
          <Field
            label="Method"
            name="method"
            textfield={true}
            component={this.renderField}
          />
          <Field
            label="Image Url (optional)"
            name="imageUrl"
            textfield={false}
            component={this.renderField}
          />
          <Field
            label="Tags (optional)"
            name="tags"
            textfield={false}
            component={this.renderField}
          />
          <input type="submit" />
        </form>
    );
  }
}

const validate = (values) => {

  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.ingredients) {
    errors.ingredients = "Enter your ingredients";
  }
  if (!values.method) {
    errors.method = "Enter your method steps";
  }

  return errors;
}

NewRecipeForm = reduxForm({
  validate,
  enableReinitialize: true,
  form: "NewRecipeForm",
})(NewRecipeForm);

export default NewRecipeForm = connect(
  state => ({ initialValues: state.newRecipe}),
  { addRecipe }
)(NewRecipeForm);
