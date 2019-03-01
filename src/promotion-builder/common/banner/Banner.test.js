import React from "react";
import { shallow } from "enzyme";

import Banner from "./Banner";

describe("<Banner>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Banner subHeading={"Test"} />);
  });

  it("renders with correct class name", () => {
    expect(wrapper.hasClass("banner")).toBe(true);
  });

  describe("Props", () => {
    it("renders with correct prop value", () => {
      expect(
        wrapper
          .children()
          .find("h3")
          .props().children
      ).toBe("Test");
    });
  });
});
