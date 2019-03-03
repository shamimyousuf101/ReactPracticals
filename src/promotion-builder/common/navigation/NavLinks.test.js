import React from "react";
import { shallow } from "enzyme";

import Links from "./NavLinks";
//NO! Needs to be human readable
// it renders correctly 
// contain an li tag wrapping an anchor
// Whan a user clicks blah blah




describe("NavLink component", () => {
  let wrapper;
  let clickHandlerMock;

  beforeEach(() => {
    clickHandlerMock = jest.fn();
    wrapper = shallow(
      <Links
        className={"devices"}
        clickHandler={clickHandlerMock}
        href={"hrefValue"}
        text={"mobile"}
      />
    );
  });

  it("renders with correct type", () => {
    expect(wrapper.type()).toBe("li");
  });

  describe("renders with correct prop values", () => {
      expect(wrapper.prop("className")).toBe("devices");
      expect(wrapper.children().prop("href")).toBe("hrefValue");
      expect(wrapper.find("a").props().children).toBe("mobile");
      expect(wrapper.prop("onClick")).toBe(clickHandlerMock);
  });
});
