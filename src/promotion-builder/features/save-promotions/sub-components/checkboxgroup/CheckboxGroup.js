import React from 'react';
import PropTypes from 'prop-types'

import './checkboxgroup.css'

class CheckboxGroup extends React.Component {

    render(){
        const { legendText, displayItems, name , onFormChange, value } = this.props;
        
        const selectedDevices = [];
        const selectedVentures = [];

        const handleInputData = event => {
            // debugger;

            if(name==='devices'){
                selectedDevices.push(event.target.value);
                // selectedDevices = selectedDevices + ',' + event.target.value;
            } else {
                selectedVentures.push(event.target.value);
            }
            onFormChange(selectedDevices, name)
        }

        const displayItem = Array.from(displayItems);
        return (
            
            <fieldset>
                <legend>{legendText}</legend>
                <p>
                { displayItem.map(item => (
                                    <label key = {item.key}>
                                    <input type="checkbox" name={name} value={item.name} onChange={handleInputData}/> {item.name} </label>
                                ))
                                
                                }
                </p>
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