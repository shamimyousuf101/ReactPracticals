import React from 'react';
import {shallow} from "enzyme";

import Checkbox from './Checkbox';

describe('Checkbox', () => {

    let checkBox;

    beforeEach(()=>{
        checkBox = shallow(<Checkbox name={'devices'} checked = {false} onChange={jest.fn()}/>)
    })

    it('should render input with correct name, type', () => {
        expect(checkBox.find('input')).toHaveLength(1);
        expect(checkBox.find('input')).toHaveProperty('type');
        expect(checkBox.find({type : 'checkbox'})).toHaveLength(1);
        expect(checkBox.find({name : 'devices'})).toHaveLength(1);
        expect(checkBox.find({checked : false})).toHaveLength(1);
    })


})