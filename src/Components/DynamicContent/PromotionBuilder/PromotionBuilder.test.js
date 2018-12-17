import React from 'react';
import {shallow} from "enzyme";

import PromotionBuilder from './PromotionBuilder';


describe('Promotion Builder', () => {
    let promotionBuilder;

    beforeEach(() => {
        promotionBuilder = shallow(<PromotionBuilder/>);    
    })

    it('should exist', () => {
        expect(typeof PromotionBuilder).toBe("function");
    })


    it("should have New Promotion Title component", () => {
        expect(promotionBuilder.find("NewPromotionTitle")).toHaveLength(1);
    })

    it("should have Promotion Details component", () => {
        expect(promotionBuilder.find("PromotionDetails")).toHaveLength(1);
    })

    it("should have Promotion Toolbar component", () => {
        expect(promotionBuilder.find("PromotionToolBar")).toHaveLength(1);
    })
})
