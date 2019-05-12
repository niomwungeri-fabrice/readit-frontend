
import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Button from "../../components/common/Buttons/BasicButton";

const setUp = props => shallow(<Button {...props} />);
const props = {
  className: "btn btn-lock",
  title: "Submit",
  onClick: jest.fn()
};
describe("Basic button", () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  test("should match the snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  test("should render button", () => {
    expect(component.hasClass(props.className)).toBe(true);
    expect(component.props().onClick).toBeDefined();
    component.simulate("click");
    expect(component.props().onClick).toHaveBeenCalledTimes(1);
  });
});
