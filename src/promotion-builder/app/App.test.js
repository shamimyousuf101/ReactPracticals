import React from "react";
import { shallow } from "enzyme";


//TODO maybe snapshot test will be good here,
import App from "./App";

describe("App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders with correct class name", () => {
    expect(wrapper.hasClass("App")).toBe(true);
  });

  it("renders the necessary Components", () => {
    expect(wrapper.find("Banner")).toHaveLength(1);
    expect(wrapper.find("Content")).toHaveLength(1);
    expect(wrapper.find("Navigation")).toHaveLength(1);
  });
});
