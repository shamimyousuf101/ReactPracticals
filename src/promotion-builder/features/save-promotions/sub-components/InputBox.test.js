import React from "react";
import { shallow } from "enzyme";

import InputBox from "./InputBox";

describe("<InputBox>", () => {
  let wrapper;
  let onFormChangeMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <InputBox
        name={"url"}
        children={"testChildren"}
        value={"urlValue"}
        onFormChange={onFormChangeMock}
      />
    );
  });

  it("renders with correct html elements", () => {
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  describe("Props", () => {
    it("renders with correct prop value for children", () => {
      expect(wrapper.find("label").props().children).toBe("testChildren");
    });

    it("renders with correct prop value for name", () => {
      expect(wrapper.find("label").prop("htmlFor")).toBe("url");
      expect(wrapper.find("input").prop("name")).toBe("url");
    });

    it("renders with correct prop value for value", () => {
      expect(wrapper.find("input").prop("value")).toBe("urlValue");
    });
  });
});
