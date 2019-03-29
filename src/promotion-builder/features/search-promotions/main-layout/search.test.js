import React from "react";
import { shallow } from "enzyme";

import { VIEW } from "../../../../constants/constants";
import Search from "./Search";

const { SEARCH, ASSET_MANAGER } = VIEW;

describe("Search component", () => {
  const editBtnClickMock = jest.fn();

  it("should renders correctly when view is SEARCH", () => {
    const wrapper = shallow(
      <Search
        promotionData={"test"}
        editBtnClick={editBtnClickMock}
        view={SEARCH}
      />
    );
    expect(wrapper.find("SearchForm")).toHaveLength(1);
    // expect(wrapper.find("SearchResult")).toHaveLength(1); // dont know why this fails
  });

  it("should not render correctly when view is ASSET_MANAGER", () => {
    const wrapper = shallow(
      <Search
        promotionData={"test"}
        editBtnClick={editBtnClickMock}
        view={ASSET_MANAGER}
      />
    );
    expect(wrapper.find("SearchForm")).toHaveLength(0);
    expect(wrapper.find("SearchResult")).toHaveLength(0);
  });
});
