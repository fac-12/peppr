import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipes";

class NewRecipeForm extends Component {

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        {field.textfield ? <textarea rows="10" cols="50" {...field.input} /> : <input type="text" {...field.input} />}
      </div>
    )
  }

  onSubmit(values) {
    this.props.addRecipe(values, () => {
      this.props.history.push("/recipes");
    });
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
            label="Image Url"
            name="imageUrl"
            textfield={false}
            component={this.renderField}
          />
          <Field
            label="Tags"
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


  return errors;
}

NewRecipeForm = reduxForm({
  validate,
  enableReinitialize: true,
  form: "NewRecipeForm",
})(NewRecipeForm);

export default NewRecipeForm = connect(
  state => ({ initialValues: state.recipes}),
  { addRecipe }
)(NewRecipeForm);
