import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    
    let className = "";
    console.log(this.props.page)
    switch(this.props.page){
      case "singleRecipe":
        className = "navbar navbar-mobile-hidden";
        break;
      case "addRecipe":
        className = "navbar addrecipe__navbar";
        break;
      default:
        className = "navbar"  
    }

    return (
    <nav className={className}>
      <ul>
        <li className="navbar__homelogo" >
          <Link to='/recipes'>
            PEPPR
          </Link>
        </li>
        <li className='navbar__link'>
          <Link to='/recipes'>
            <i className="ion-ios-nutrition-outline navbar__icon"></i>
           Recipes
         </Link>
        </li>
        <li className='navbar__link'>
          <Link to='/addrecipe'>
            <i className="ion-ios-plus-outline navbar__icon"></i>
            Add
          </Link>
        </li>
        <li className='navbar__link'>
          <Link to='/' onClick={this.logout.bind(this)}>
            <i className="ion-ios-undo-outline navbar__icon"></i>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
    )
  }
  logout() {
    this.props.logoutUser()
  }
}

export default connect (null, { logoutUser })(Navbar);
