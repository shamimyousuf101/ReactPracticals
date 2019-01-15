import React from 'react';
import {shallow} from 'enzyme';

import Content from './Content'

describe('<Content>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Content view={'Search'} searchDisplay={[]} searchTerm={'hello'} handleInputChange={jest.fn()} formData={{}} savePromotion={jest.fn()} reset={jest.fn()} onFormChange={jest.fn()} selectedPromotionId={'1'} searchBtnClick={jest.fn()} editBtnClick={jest.fn()}/>);
    })

    it('renders with correct class name', () => {
        expect(wrapper.hasClass('content')).toBe(true);
    })

    describe('renders correct view components', () => {
        
        it('when view is Search', () => {
            const wrapperWithView = shallow(<Content view={'Search'} searchDisplay={[]} searchTerm={'hello'} handleInputChange={jest.fn()} formData={{}} savePromotion={jest.fn()} reset={jest.fn()} onFormChange={jest.fn()} selectedPromotionId={'1'} searchBtnClick={jest.fn()} editBtnClick={jest.fn()}/>);
            expect(wrapperWithView.children().find('div').find('Search')).toHaveLength(1);
        })

        it('when view is Asset Manager', () => {
            const wrapperWithView = shallow(<Content view={'AssetManager'} searchDisplay={[]} searchTerm={'hello'} handleInputChange={jest.fn()} formData={{}} savePromotion={jest.fn()} reset={jest.fn()} onFormChange={jest.fn()} selectedPromotionId={'1'} searchBtnClick={jest.fn()} editBtnClick={jest.fn()}/>);
            expect(wrapperWithView.children().find('div').find('AssetManager')).toHaveLength(1);
        })

        it('when view is Save Promotion', () => {
            const wrapperWithView = shallow(<Content view={'SavePromotion'} searchDisplay={[]} searchTerm={'hello'} handleInputChange={jest.fn()} formData={{}} savePromotion={jest.fn()} reset={jest.fn()} onFormChange={jest.fn()} selectedPromotionId={'1'} searchBtnClick={jest.fn()} editBtnClick={jest.fn()}/>);
            expect(wrapperWithView.children().find('div').find('SavePromotion')).toHaveLength(1);
        })
    })


})