import React from 'react';
import {shallow} from 'enzyme';

import SingleResult from './SingleResult';

describe('<SingleResult/>', () => {
    let wrapper;
    let editBtnClickMock = jest.fn();
    let testResult={};

    beforeEach(() => {
        wrapper = shallow(<SingleResult id='1' editBtnClick={editBtnClickMock} result={testResult}/>);
    })

    it('should render PromotionDetails component one time', () => { 
        expect(wrapper.find('PromotionDetails')).toHaveLength(1);
    })

    it('should render EditButton component one time', () => {
        expect(wrapper.find('EditButton')).toHaveLength(1);
    })

    it('should render with correct class name', () => {
        expect(wrapper.hasClass('SingleSearchResult')).toBe(true);
    })
})