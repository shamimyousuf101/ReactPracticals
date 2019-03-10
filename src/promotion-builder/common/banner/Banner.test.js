import React from "react";
import renderer from 'react-test-renderer';

import Banner from "./Banner";

describe("Banner component", () => {
  
  it('renders correctly', () => {
    const tree = renderer
      .create(<Banner subHeading={"Test"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
