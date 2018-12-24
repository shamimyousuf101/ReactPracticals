
import React from 'react';
import CheckboxContainer from './CheckboxContainer';

const ListBox = (props) => {

    return(<fieldset>
        <legend>{props.legendText}</legend>
        <CheckboxContainer name={props.name} displayItems={props.displayItems} value={props.value} onFormChange={props.onFormChange}/>
        </fieldset>)
}

export default ListBox;