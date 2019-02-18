import React from "react";
import { shallow } from "enzyme";

import SearchForm from "./SearchForm";

describe("<SearchForm/>", () => {
  let wrapper;
  const onChangeMock = jest.fn("I am changed");
  const onSearchClickMock = jest.fn("I am clicked");

  beforeEach(() => {
    wrapper = shallow(
      <SearchForm
        value="we"
        onChange={onChangeMock}
        onSearchClick={onSearchClickMock}
      />
    );
  });

  it("should render SearchInput component one time", () => {
    expect(wrapper.find("SearchInput")).toHaveLength(1);
  });

  it("should render SearchButton component one time", () => {
    expect(wrapper.find("SearchButton")).toHaveLength(1);
  });

  it("should render correct class name", () => {
    expect(wrapper.hasClass("search__form")).toBe(true);
  });

  describe("Props", () => {
    beforeEach(() => {
      wrapper = shallow(
        <SearchForm
          value="we"
          onChange={onChangeMock}
          onSearchClick={onSearchClickMock}
        />
      );
    });

    it("should render correct value", () => {
      expect(
        wrapper
          .find(".search__form")
          .children()
          .find("SearchInput")
          .prop("value")
      ).toBe("we");
    });

    it("should render correct onChange handler", () => {
      expect(
        wrapper
          .find(".search__form")
          .children()
          .find("SearchInput")
          .prop("onChange")
      ).toBe(onChangeMock);
    });

    it("should render correct onSearchClick handler", () => {
      expect(
        wrapper
          .find(".search__form")
          .children()
          .find("SearchButton")
          .prop("onSearchClick")
      ).toBe(onSearchClickMock);
    });
  });
});
