import React from "react";
import {shallow} from "enzyme";

import Search from "./Search";

import SearchEntryContainer from "./SearchEntryContainer";

describe('Name of the group', () => {
    const search = shallow(<Search/>);

    it('should exists', () => {
        // expect(search.find(SearchEntryContainer))
    });
});