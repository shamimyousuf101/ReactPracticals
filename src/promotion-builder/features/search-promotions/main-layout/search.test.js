import React from "react";
import { shallow } from "enzyme";

import Search from "./Search";

describe("<Search/>", () => {
  it("should render SearchForm component one time", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find("SearchForm")).toHaveLength(1);
  });

  it("should render SearchForm component one time", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find("SearchForm")).toHaveLength(1);
  });
});
