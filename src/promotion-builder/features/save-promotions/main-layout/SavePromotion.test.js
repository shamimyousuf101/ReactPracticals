import React from 'react';
import {shallow} from 'enzyme';

import SavePromotion from './SavePromotion';

describe('<SavePromotion/>', () => {
    let wrapper;
    let onFormChangeMock = jest.fn();
    let formData={};
    let resetMock = jest.fn();
    let savePromotionMock = jest.fn();
    let selectedPromotionId = '123';
    let testSearchDisplay = {};


    beforeEach(() => {
        wrapper = shallow(<SavePromotion formData={formData} searchDisplay={testSearchDisplay} selectedPromotionId={selectedPromotionId} savePromotion={savePromotionMock} reset={resetMock} onFormChange={onFormChangeMock} />);
    })

    it('should render FormTitle component one time', () => { 
        expect(wrapper.find('FormTitle')).toHaveLength(1);
    })

    it('should render PromotionForm component one time', () => {
        expect(wrapper.find('PromotionForm')).toHaveLength(1);
    })

    it('should render ToolBar component one time', () => {
        expect(wrapper.find('ToolBar')).toHaveLength(1);
    })

    it('should render with correct class name', () => {
        expect(wrapper.hasClass('PromotionBuilder')).toBe(true);
    })
})