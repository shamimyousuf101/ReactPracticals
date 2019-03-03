import React from "react";
import { shallow } from "enzyme";

import SingleResult from "./SingleResult";

describe("<SingleResult/>", () => {
  let wrapper;
  const editBtnClickMock = jest.fn();
  const testResult = {};

  beforeEach(() => {
    wrapper = shallow(
      <SingleResult
        id="1"
        editBtnClick={editBtnClickMock}
        result={testResult}
      />
    );
  });

  it("should render correctly", () => {
    expect(wrapper.find("PromotionDetails")).toHaveLength(1);
    expect(wrapper.find("EditButton")).toHaveLength(1);
  });

  it("should render with correct class name", () => {
    expect(wrapper.hasClass("SingleSearchResult")).toBe(true);
  });
});
