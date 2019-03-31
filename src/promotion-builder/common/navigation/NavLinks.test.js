import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import NavLinks from "./NavLinks";

describe("NavLink", () => {
  
  let clickHandlerMock=jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<NavLinks
        label={"mobile"}
        navId={"1"}
        key={"1"}
        clickHandler={clickHandlerMock}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('on clicking the link', () => {
    it('clickHandler is called once', () => {
      const wrapper = shallow(<NavLinks
        label={"mobile"}
        navId={"1"}
        key={"1"}
        clickHandler={clickHandlerMock}
      />);
      wrapper.find('li').simulate('click');
      expect(clickHandlerMock).toHaveBeenCalledTimes(1)
    });
  })

});
