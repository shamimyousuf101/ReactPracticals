import React from 'react';
import {shallow} from 'enzyme';

import FormTitle from './FormTitle'

describe('<Banner>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormTitle children={'Test'}/>);
    })

    it('renders with correct class name', () => {
        expect(wrapper.hasClass('NewPromotionTitle')).toBe(true);
    })

    describe('Props', () => {
        
        it('renders with correct prop value', () => {
            expect(wrapper.props().children).toBe('Test');
        })
    })
})