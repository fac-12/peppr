import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
    <nav>
      <ul>
        <li>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li>
          <Link to='/addrecipe'>Add</Link>
        </li>
        <li>
          <Link to='/' onClick={this.logout.bind(this)}>Log out</Link>
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