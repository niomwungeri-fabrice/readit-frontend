import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  logout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push("/sign-in");
  };
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <div
            style={{
              color: "#007bff",
              cursor: "pointer"
            }}
            className="nav-link"
            onClick={this.logout}
          >
            Logout
          </div>
        </li>
      </ul>
    );
  }
}

export default withRouter(NavBar);
