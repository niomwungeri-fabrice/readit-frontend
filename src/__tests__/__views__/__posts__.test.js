import React from "react";
import { shallow } from "enzyme";
import {
  MyEditor,
  mapDispatchToProps,
  mapStateToProps
} from "../../components/Editor/Editor";

const initialState = {
  posts: {
    token: "token",
    error: "error message",
    message: "",
    post: {
      title: "dfdlfjdf",
      content: "dfdfdf"
    }
  }
};
let props = {
  onInputChange: jest.fn(),
  onPost: jest.fn(),
  token: "",
  history: {
    push: jest.fn()
  },
  posts: {
    token: "token",
    error: "error message",
    message: "",
    post: {
      title: "dfdlfjdf",
      content: "dfdfdf"
    }
  }
};

describe("Posts", () => {
  describe("mapDispatchToProps()", () => {
    test("should call onInputChange()", () => {
      const wrapper = shallow(<MyEditor {...props} />);
      wrapper
        .find("input")
        .first()
        .simulate("change", { target: { value: "hello" } });
      expect(props.onInputChange).toHaveBeenCalled();
    });
    test("should call onPost action", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onPost({ email: "email" });
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
    test("should call onPost action", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onInputChange({
        target: { value: "hello" }
      });
      expect(dispatch.mock.calls[0][0]).toBeDefined();
    });
    test("should call onPost()", () => {
      const wrapper = shallow(<MyEditor {...props} />);
      wrapper
        .find("BasicButton")
        .first()
        .simulate("click");
      expect(props.onPost).toHaveBeenCalled();
    });
  });
  describe("mapStateToProps()", () => {
    test("should call onInputChange action", () => {
      const state = mapStateToProps(initialState);
      expect(state.error).toEqual("error message");
    });
  });
});
