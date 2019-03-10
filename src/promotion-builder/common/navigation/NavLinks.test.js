import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import NavLinks from "./NavLinks";

describe("NavLink component", () => {
  
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

  it('simulates click events', () => {
    const wrapper = shallow(<NavLinks
      label={"mobile"}
      navId={"1"}
      key={"1"}
      clickHandler={clickHandlerMock}
    />);
    wrapper.find('li').simulate('click');
    expect(clickHandlerMock).toHaveBeenCalledTimes(1)
  });


});
