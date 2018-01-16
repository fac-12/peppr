import React from 'react';
import { Link } from 'react-router-dom';
import peppers from '../../assets/images/peppers.jpg';


const NotFound = props => {
  return (
    <div className="errorpage__container">
      <img className="errorpage__image"
      alt="red peppers on a dark background"
      src={peppers}/>
      <div className="errorpage__message">
        <p className="errorpage__message--large">Oops!</p>
        <p>We can't find the page you're looking for. Please try again or navigate <Link to="/">home</Link></p>
      </div>
    </div>
  )
}

export default NotFound;