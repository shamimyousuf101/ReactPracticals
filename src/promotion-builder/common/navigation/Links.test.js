import React from "react";
import { shallow } from "enzyme";

import Links from "./Links";

describe("<Links>", () => {
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

  it("renders with type", () => {
    expect(wrapper.type()).toBe("li");
  });

  describe("Props", () => {
    it("renders with correct prop value for className", () => {
      expect(wrapper.prop("className")).toBe("devices");
    });

    it("renders with correct prop value for href", () => {
      expect(wrapper.children().prop("href")).toBe("hrefValue");
    });

    it("renders with correct prop value for text", () => {
      expect(wrapper.find("a").props().children).toBe("mobile");
    });

    it("renders with correct prop value for onclick", () => {
      expect(wrapper.prop("onClick")).toBe(clickHandlerMock);
    });
  });
});
