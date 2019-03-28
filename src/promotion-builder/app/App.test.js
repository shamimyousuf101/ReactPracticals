import React from "react";
import { shallow } from "enzyme";
import renderer from 'react-test-renderer';

import App from "./App";


describe("App component", () => { 
  it('renders the html correctly', () => {
    const tree = renderer
      .create(<App/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the necessary Components only once", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Navigation")).toHaveLength(1);
    expect(wrapper.find("Banner")).toHaveLength(1);
    expect(wrapper.find("Search")).toHaveLength(1);
    expect(wrapper.find("AssetManager")).toHaveLength(1);
    expect(wrapper.find("SavePromotion")).toHaveLength(1);
  });

});
