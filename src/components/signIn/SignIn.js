import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import BasicInput from "../common/Inputs/BasicInput";
import BasicButton from "../common/Buttons/BasicButton";
import { setInput, handleLogin } from "../../redux/actions/loginActions";
import "./SignIn.css";
export class SignIn extends Component {
  signIn = () => {
    const { onLogin, password, email } = this.props;
    onLogin({ email, password });
  };
  handleInput = ({ target: { value, name } }) => {
    const { onInputChange } = this.props;
    onInputChange({ field: name, value });
  };
  render() {
    const { email, password, error, token, history } = this.props;
    if (token) {
      history.push(`/posts`);
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
                className="input_field"
                  sign="fa fa-user"
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
                  onClick={this.signIn}
                  title="Sign In"
                  className="btn-primary btn-block"
                />
                <p class="text-center">
                  <Link to="/sign-up" class="btn">
                    Register here
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
export const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  message: auth.message,
  email: auth.user.email,
  password: auth.user.password,
  token: auth.token
});

export const mapDispatchToProps = dispatch => ({
  onInputChange: payload => dispatch(setInput(payload)),
  onLogin: payload => dispatch(handleLogin(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
