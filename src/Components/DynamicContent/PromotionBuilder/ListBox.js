
import React from 'react';
import ListBoxItem from './ListBoxItem';

import CheckboxContainer from './CheckboxContainer';

const ListBox = (props) => {

    return(<fieldset>
        <legend>{props.legendText}</legend>
        <CheckboxContainer displayItems={props.displayItems} promotionData={props.promotionData}/>
        </fieldset>)
}

export default ListBox;