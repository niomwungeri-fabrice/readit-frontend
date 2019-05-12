import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sign-in">
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
