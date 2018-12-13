import React from 'react';
import {shallow} from "enzyme";

import PromotionBuilder from './PromotionBuilder';
import PromotionBuilderHeader from './PromotionBuilderHeader';
import PromotionBuilderBody from './PromotionBuilderBody';


describe('Promotion Builder', () => {
    let promotionBuilder;

    beforeEach(() => {
        promotionBuilder = shallow(<PromotionBuilder/>);    
    })

    it('should exist', () => {
        expect(typeof PromotionBuilder).toBe("function");
    })

    it('should have a header component for Promotion Builder as PromotionBuilderHeader', () => {
        expect(promotionBuilder.find(<PromotionBuilderHeader/>)).toBeDefined();
    })

    it('should have a body component for Promotion Builder as PromotionBuilderBody', () => {
        expect(promotionBuilder.find(<PromotionBuilderBody/>)).toBeDefined();
    })
})
