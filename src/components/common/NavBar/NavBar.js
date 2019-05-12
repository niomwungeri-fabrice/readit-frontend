import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link active" to="/sign-in">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sign-in">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sign-in">Logout</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
