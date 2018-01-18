import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipes";

class NewRecipeForm extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
        <form className="newrecipe__form__container addrecipe__innermargin"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            placeholder="Title"
            name="title"
            textfield={false}
            component={this.renderField}
          />
          <Field
            placeholder="Ingredients"
            name="ingredients"
            textfield={true}
            component={this.renderField}
          />
          <Field
            placeholder="Method"
            name="method"
            textfield={true}
            component={this.renderField}
          />
          <Field
            placeholder="Image Url (optional)"
            name="imageUrl"
            textfield={false}
            component={this.renderField}
          />
          <Field
            placeholder="Tags (optional)"
            name="tags"
            textfield={false}
            component={this.renderField}
          />
          <input type="submit" className="newrecipe__form__btn" defaultValue="Save"/>
        </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div className="newrecipe__form">
        {field.textfield
        ? <textarea
          rows="4"
          cols="50"
          className="newrecipe__textarea"
          placeholder={field.placeholder}
          {...field.input} />
        : <input
            type="text"
            className="newrecipe__input"
            placeholder={field.placeholder}
            {...field.input} />}
        <p className="newrecipe__input--errortext">
          {touched ? error : ""}
        </p>
      </div>
    )
  }

  onSubmit(values) {
    this.props.addRecipe(values);
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

const mapStateToProps = state => ({ initialValues: state.newRecipe});

NewRecipeForm = reduxForm({
  validate,
  enableReinitialize: true,
  form: "NewRecipeForm",
})(NewRecipeForm);


export default connect(mapStateToProps,{ addRecipe })(NewRecipeForm);
