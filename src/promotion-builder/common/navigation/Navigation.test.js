import React from "react";
import renderer from 'react-test-renderer';

import Navigation from "./Navigation";


describe("Navigation component", () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Navigation
        updateView={jest.fn()}
        clearSearchTerm={jest.fn()}
        resetPrommotionId={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
