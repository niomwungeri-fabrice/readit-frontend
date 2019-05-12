import React from "react";
import { shallow } from "enzyme";
import {
  SignUp,
  mapDispatchToProps,
  mapStateToProps
} from "../../components/signUp/SignUp";

const initialState = {
  sign: {
    token: "token",
    error: "error message",
    message: "success message",
    user: {
      email: "email@email.com",
      password: "123",
      firstName: "fabrice",
      lastName: "niyomwungeri"
    }
  }
};
let props = {
  onInputChange: jest.fn(),
  onSignUP: jest.fn(),
  token: "",
  history: {
    push: jest.fn()
  }
};

describe("Sign Up", () => {
  describe("mapDispatchToProps()", () => {
    test("should call onInputChange()", () => {
      const wrapper = shallow(<SignUp {...props} />);
      wrapper
        .find(".input_field")
        .first()
        .simulate("change", { target: { value: "hello" } });
      expect(props.onInputChange).toHaveBeenCalled();
    });
    test("should call onLogin action", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onSignUP({ email: "email" });
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
    test("should call onLogin action", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onInputChange({
        target: { value: "hello" }
      });
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
    test("should call onLogin()", () => {
      const wrapper = shallow(<SignUp {...props} />);
      wrapper
        .find("BasicButton")
        .first()
        .simulate("click");
      expect(props.onSignUP).toHaveBeenCalled();
    });
    test("should call push method ", () => {
      props = { ...props, message: "token" };
      const wrapper = shallow(<SignUp {...props} />);
      wrapper
        .find("BasicButton")
        .first()
        .simulate("click");
      shallow(<SignUp {...props} />);
      expect(props.history.push).toHaveBeenCalled();
    });
  });
  describe("mapStateToProps()", () => {
    test("should call onInputChange action", () => {
      const state = mapStateToProps(initialState);
      expect(state.error).toEqual("error message");
    });
  });
});
