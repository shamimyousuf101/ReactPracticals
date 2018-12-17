
import React from 'react';
import {shallow} from "enzyme";

import Container from './Container';


describe.only('Container', () => {

    let containerWithSearch;
    let containerWithPromotionBuilder;
    beforeEach(()=>{
        containerWithSearch = shallow(<Container view={'Search'}/>)
        containerWithPromotionBuilder = shallow(<Container view={'PromotionBuilder'}/>)
    })
    
    it('should render Search Component when view state is set to Search', () => {
        expect(containerWithSearch.find('Search').length).toBe(1);
    })

    it('should render Promotion Builder Component when view state is set to PromotionBuilder', () => {
        expect(containerWithPromotionBuilder.find('PromotionBuilder').length).toBe(1);
    })
})