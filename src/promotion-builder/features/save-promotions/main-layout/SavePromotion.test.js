import React from "react";
import { shallow } from "enzyme";

import SavePromotion from "./SavePromotion";

describe("<SavePromotion/>", () => {
  let wrapper;
  const onFormChangeMock = jest.fn();
  const formData = {};
  const resetMock = jest.fn();
  const savePromotionMock = jest.fn();
  const selectedPromotionId = "123";
  const testSearchDisplay = {};

  beforeEach(() => {
    wrapper = shallow(
      <SavePromotion
        formData={formData}
        searchDisplay={testSearchDisplay}
        selectedPromotionId={selectedPromotionId}
        savePromotion={savePromotionMock}
        reset={resetMock}
        onFormChange={onFormChangeMock}
      />
    );
  });

  it("should render FormTitle component one time", () => {
    expect(wrapper.find("FormTitle")).toHaveLength(1);
  });

  it("should render PromotionForm component one time", () => {
    expect(wrapper.find("PromotionForm")).toHaveLength(1);
  });

  it("should render ToolBar component one time", () => {
    expect(wrapper.find("ToolBar")).toHaveLength(1);
  });

  it("should render with correct class name", () => {
    expect(wrapper.hasClass("PromotionBuilder")).toBe(true);
  });
});
