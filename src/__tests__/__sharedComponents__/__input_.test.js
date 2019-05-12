import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import TextInput from "../../components/common/Inputs/BasicInput";

const props = {
  type: "text",
  name: "email",
  placeholder: "Email",
  onChange: jest.fn(),
  onBlur: jest.fn(),
  value: ""
};
describe("Login component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<TextInput {...props} />);
  });
  test("should match the snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  test("should have input tag for email with initial state", () => {
    expect(component.props().className).toEqual("input-group mb-3");
  });
});
