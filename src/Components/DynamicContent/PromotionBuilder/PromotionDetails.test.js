import React from 'react';
import {shallow} from 'enzyme';
import PromotionDetails from './PromotionDetails';

describe("PromotionDetails", ()=> {
    let promotionDetails;

    beforeEach(()=>{
        promotionDetails = shallow(<PromotionDetails/>);
    })

    it("should have DeviceList component", () => {
        expect(promotionDetails.find('DeviceList')).toHaveLength(1);
    })
    it("should have VentureList component", () => {
        expect(promotionDetails.find('VentureList')).toHaveLength(1);
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