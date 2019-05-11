import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BasicInput from "../common/Inputs/BasicInput";
import BasicButton from "../common/Buttons/BasicButton";
import { setInput, handleLogin } from "../../redux/actions/loginActions";
import "./SignIn.css";
class SignIn extends Component {
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
      history.push(`/sign-up`);
    }
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <BasicInput
                sign="@"
                placeholder="Email"
                ariaLabel="Email"
                type="email"
                onChange={this.handleInput}
                value={email}
                name="email"
              />
              {error}
            </div>
            <div className="form-group col-md-6">
              <BasicInput
                sign="*"
                placeholder="Password"
                type="password"
                onChange={this.handleInput}
                value={password}
                name="password"
              />
            </div>
          </div>
        </form>
        <BasicButton
          onClick={this.signIn}
          title="Sign In"
          className="btn-primary"
        />
      </div>
    );
  }
}
export const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  message: auth.message,
  email: auth.email,
  password: auth.password,
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
