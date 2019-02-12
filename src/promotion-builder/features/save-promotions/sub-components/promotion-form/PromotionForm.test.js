import React from "react";
import { shallow } from "enzyme";

import PromotionForm from "./PromotionForm";

describe("<PromotionForm>", () => {
  let wrapper;
  let onFormChangeMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <PromotionForm formData={["test"]} onFormChange={onFormChangeMock} />
    );
  });

  it("renders with correct components", () => {
    expect(wrapper.find("CheckboxGroup")).toHaveLength(2);
    expect(wrapper.find("InputBox")).toHaveLength(2);
  });

  it("renders with correct class name", () => {
    expect(wrapper.hasClass("promotionDetailsForm")).toBe(true);
  });

  it("renders with correct element", () => {
    expect(wrapper.type()).toBe("form");
  });
});
