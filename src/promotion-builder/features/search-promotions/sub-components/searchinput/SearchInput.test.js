import React from "react";
import { shallow } from "enzyme";

import SearchInput from "./SearchInput";

describe("<SearchInput>", () => {
  let wrapper;
  let onChangeMock;

  beforeEach(() => {
    onChangeMock = jest.fn();
    wrapper = shallow(<SearchInput value={"Test"} onChange={onChangeMock} />);
  });

  it("renders with correct class name", () => {
    expect(wrapper.hasClass("search__input")).toBe(true);
  });

  it("renders with correct html element", () => {
    expect(wrapper.type()).toBe("input");
  });

  describe("Props", () => {
    it("renders with correct prop value for value", () => {
      expect(wrapper.prop("value")).toBe("Test");
    });

    it("renders with correct prop value for onChange", () => {
      expect(wrapper.prop("onChange")).toBe(onChangeMock);
    });
  });
});
