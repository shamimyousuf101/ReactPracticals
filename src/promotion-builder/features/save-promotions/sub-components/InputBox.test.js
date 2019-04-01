import React from "react";
import { shallow } from "enzyme";

import InputBox from "./InputBox";

describe("InputBox component", () => {
  let wrapper;
  const onFormChangeMock = jest.fn();

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

  it("renders with correct prop values", () => {
    expect(wrapper.find("label").props().children).toBe("testChildren");
    expect(wrapper.find("label").prop("htmlFor")).toBe("url");
    expect(wrapper.find("input").prop("name")).toBe("url");
    expect(wrapper.find("input").prop("value")).toBe("urlValue");
  });

});
