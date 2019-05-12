import React, { Component } from "react";
import BasicInput from "../common/Inputs/BasicInput";
import BasicButton from "../common/Buttons/BasicButton";
import { setInput } from "../../redux/actions/loginActions";
import { handleSignUp } from "../../redux/actions/signUpActions";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
class SignUp extends Component {
  handleSignUp = () => {
    const { onSignUP, email, firstName, lastName, password } = this.props;
    onSignUP({ email, firstName, lastName, password });
  };
  handleInput = ({ target: { value, name } }) => {
    const { onInputChange } = this.props;
    onInputChange({ field: name, value });
  };
  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      error,
      message,
      history
    } = this.props;
    if (message) {
      history.push(`/sign-in`);
    }
    return (
      <div class="row">
        <aside class="col-sm-4" />
        <aside class="col-sm-4">
          <h1>Welcome to Read It</h1>
          <div class="card">
            <article class="card-body">
              <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
              <hr />
              <p class="error">{error}</p>
              <form>
                <BasicInput
                  sign="fa fa-user"
                  placeholder="First name"
                  type="text"
                  onChange={this.handleInput}
                  value={firstName}
                  name="firstName"
                />
                <BasicInput
                  sign="fa fa-user"
                  placeholder="Last name"
                  type="text"
                  onChange={this.handleInput}
                  value={lastName}
                  name="lastName"
                />
                <BasicInput
                  sign="fa fa-envelope"
                  placeholder="Email"
                  ariaLabel="Email"
                  type="email"
                  onChange={this.handleInput}
                  value={email}
                  name="email"
                />
                <BasicInput
                  sign="fa fa-lock"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleInput}
                  value={password}
                  name="password"
                />

                <BasicButton
                  onClick={this.handleSignUp}
                  title="Create account"
                  className="btn-primary btn-block"
                />
                <p class="text-center">
                  <Link to="/sign-in  " class="btn">
                    Sign In
                  </Link>
                </p>
              </form>
            </article>
          </div>
        </aside>
        <aside class="col-sm-4" />
      </div>
    );
  }
}
export const mapStateToProps = ({ sign }) => ({
  token: sign.token,
  error: sign.error,
  message: sign.message,
  email: sign.user.email,
  password: sign.user.password,
  firstName: sign.user.firstName,
  lastName: sign.user.lastName
});

export const mapDispatchToProps = dispatch => ({
  onInputChange: payload => dispatch(setInput(payload)),
  onSignUP: payload => dispatch(handleSignUp(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp));
