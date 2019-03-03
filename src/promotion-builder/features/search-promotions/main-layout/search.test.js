import React from "react";
import { shallow } from "enzyme";

import Search from "./Search";

describe("Search component", () => {
  it("should renders correctly", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find("SearchForm")).toHaveLength(1);
    expect(wrapper.find("SearchForm")).toHaveLength(1);
  });
});
