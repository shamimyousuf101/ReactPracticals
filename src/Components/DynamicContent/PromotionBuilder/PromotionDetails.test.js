import React from 'react';
import {shallow} from 'enzyme';
import PromotionDetails from './PromotionDetails';

describe("PromotionDetails", ()=> {
    let promotionDetails;

    beforeEach(()=>{
        promotionDetails = shallow(<PromotionDetails/>);
    })

    it("should have devices component", () => {
        expect(promotionDetails.find('devices')).toHaveLength(1);
    })
    it("should have ventures component", () => {
        expect(promotionDetails.find('ventures')).toHaveLength(1);
    })
    it("should have URL component", () => {
        expect(promotionDetails.find('URL')).toHaveLength(1);
    })
    it("should have Name component", () => {
        expect(promotionDetails.find('Name')).toHaveLength(1);
    })
    it("should have Asset component", () => {
        expect(promotionDetails.find('Asset')).toHaveLength(1);
    })
})