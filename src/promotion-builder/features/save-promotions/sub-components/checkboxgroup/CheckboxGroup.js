import React from 'react';
import PropTypes from 'prop-types'

import Checkbox from '../checkbox/Checkbox';

import './checkboxgroup.css'

class CheckboxGroup extends React.Component {

    handleChange = (e) => {
        const {legendText, displayItems, value, onFormChange} = this.props;
        let listMap = this.props.value;

        if(listMap.has(e.target.name)){
            listMap.delete(e.target.name)
        }else{
            listMap.set(e.target.name, true)
        }
        onFormChange(listMap, this.props.name);
    }

    render(){
        const {legendText, displayItems, value, onFormChange} = this.props;

        return (
            <fieldset >
            <legend>{legendText}</legend>
                {
                    displayItems.map(item => (
                        <label key = {item.key}>
                        {item.name}
                        <Checkbox name={item.name} checked={value.get(item.name)} onChange={this.handleChange} />                           
                        </label>
                    ))
                }
            </fieldset>
        )
    }
}


CheckboxGroup.propTypes = {
    value: PropTypes.instanceOf(Map).isRequired,
    legendText: PropTypes.string.isRequired,
    displayItems:PropTypes.array.isRequired,
    onFormChange:PropTypes.func.isRequired
}


export default CheckboxGroup;