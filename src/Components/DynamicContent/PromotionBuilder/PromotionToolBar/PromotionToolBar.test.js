import React from 'react';
import {shallow} from 'enzyme';
import PromotionToolBar from './PromotionToolBar';

describe("PromotionToolBar", () => {
    let promotionToolBar;
    beforeEach(()=>{
        promotionToolBar = shallow(<PromotionToolBar/>);
    })

    it("should have Save buttom component", () => {
        expect(promotionToolBar.find('SaveButton')).toHaveLength(1);
    })

    it("should have Reset buttom component", () => {
        expect(promotionToolBar.find('ResetButton')).toHaveLength(1);
    })
})