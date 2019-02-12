import React from "react";
import { shallow } from "enzyme";

import Navigation from "./Navigation";
import Links from "../links/Links";

describe("<Navigation>", () => {
  let wrapper;
  let clickHandlerMock;

  beforeEach(() => {
    clickHandlerMock = jest.fn();
    wrapper = shallow(
      <Navigation menuData={["test"]} clickHandler={clickHandlerMock} />
    );
  });

  it("renders with correct type", () => {
    expect(wrapper.type()).toBe("nav");
  });

  it("renders with correct prop value for className", () => {
    expect(wrapper.hasClass("menu")).toBe(true);
  });

  it("renders ul element", () => {
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  it("renders Links Component", () => {
    expect(
      wrapper
        .find("ul")
        .childAt(0)
        .type()
    ).toBe(Links);
  });
});
