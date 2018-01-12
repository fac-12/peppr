import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
    <nav className='navbar'>
      <ul>
        <li>
          <i className="ion-ios-nutrition-outline navbar__icon"></i>
          <Link to='/recipes' className='navbar__link'> Recipes</Link>
        </li>
        <li>
          <i className="ion-ios-plus-outline navbar__icon"></i>
          <Link to='/addrecipe' className='navbar__link'> Add</Link>
        </li>
        <li>
          <i className="ion-ios-undo-outline navbar__icon"></i>
          <Link to='/' onClick={this.logout.bind(this)} className='navbar__link'> Log out</Link>
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