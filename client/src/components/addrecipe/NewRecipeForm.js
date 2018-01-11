import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

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

// const mapStateToProps = (state) => {
//   return { recipes: state.recipes };
// }

NewRecipeForm = reduxForm({
  validate,
  enableReinitialize: true,
  form: "NewRecipeForm",
})(NewRecipeForm);

NewRecipeForm = connect(
  state => {
    console.log('state', state.recipes);
    return ({ initialValues: state.recipes})
  },
  {  }
)(NewRecipeForm)

export default NewRecipeForm;
