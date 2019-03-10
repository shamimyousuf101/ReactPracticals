import React from "react";
import { shallow } from "enzyme";

import SingleResult from "./SingleResult";

describe("SingleResult component", () => {
  let wrapper;
  const editBtnClickMock = jest.fn();
  const testResult = {"id": "1"};

  beforeEach(() => {
    wrapper = shallow(
      <SingleResult
        editBtnClick={editBtnClickMock}
        result={testResult}
      />
    );
  });

  it("should render correctly", () => {
    expect(wrapper.find("PromotionDetails")).toHaveLength(1);
    expect(wrapper.find("EditButton")).toHaveLength(1);
  });

});
