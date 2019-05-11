import React, { Component } from "react";
import BasicInput from "../common/Inputs/BasicInput";
import BasicButton from "../common/Buttons/BasicButton";
class SignUp extends Component {
  handleSignUp = e => {
    console.log("clicked");
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">your email</label>
              <BasicInput
                sign="@"
                placeholder="Email"
                ariaLabel="Email"
                type="email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">your password</label>
              <BasicInput sign="*" placeholder="Password" type="password" />
            </div>
          </div>
        </form>
        <BasicButton
          onClick={this.handleSignUp}
          title="Sign up"
          className="btn-primary"
        />
      </div>
    );
  }
}

export default SignUp;
