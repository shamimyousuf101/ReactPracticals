import React from 'react';
import PropsTypes from 'prop-types'

import Checkbox from '../Checkbox/Checkbox';

import './CheckboxGroup.css'

class CheckboxGroup extends React.Component {

    handleChange = (e) => {

        let listMap = this.props.value;

        if(listMap.has(e.target.name)){
            listMap.delete(e.target.name)
        }else{
            listMap.set(e.target.name, true)
        }

        this.props.onFormChange(listMap, this.props.name);
    }

    render(){

        return (
            <fieldset >
            <legend>{this.props.legendText}</legend>
                {
                    this.props.displayItems.map(item => (
                        <label key = {item.key}>
                        {item.name}
                        <Checkbox name={item.name} checked={this.props.value.get(item.name)} onChange={this.handleChange} />                           
                        </label>
                    ))
                }
            </fieldset>
        )
    }
}

CheckboxGroup.propTypes = {
    value: PropsTypes.object.isRequired,
    legendText: PropsTypes.string.isRequired,
    displayItems:PropsTypes.array.isRequired,
    onFormChange:PropsTypes.func.isRequired
}

export default CheckboxGroup;