import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { checkUrl } from "../../actions/recipes";
import { Link } from 'react-router-dom';

class UrlForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <p className="urlform__text">Enter a recipe URL from one of our <Link to="#" onClick={this.toggleModal.bind(this)}>partner sites</Link> to save the recipe automatically:</p>
          {this.renderModal()}
          <Field
            name="url"
            component={this.renderField}
          /> 
          {this.renderAlert()}
        </form>
    );
  }

  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div className="urlform">
        <label>{field.label}</label>
        <input 
        className="urlform__input" 
        type="url" {...field.input} 
        placeholder="Enter URL"/>
        <button type="submit"><i className="ion-ios-download urlform__btn"></i></button>
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

  toggleModal(){
    this.state.showModal ? this.setState({showModal: false}) : this.setState({showModal: true})
  }  

  renderModal(){
    if (this.state.showModal){
      return (
        <div className="urlform__modal">
          <p>BBC Good Food</p>
          <p>Delicious Magazine</p>
          <p>Jamie Oliver</p>
        </div>  
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
