
import React from 'react';
import ListBoxItem from './ListBoxItem';

const ListBox = (props) => {
    return(<fieldset>
        <legend>{props.legendText}</legend>
        <ListBoxItem name="mobile">Mobile</ListBoxItem>
        <ListBoxItem name="desktop">Desktop</ListBoxItem>
        <ListBoxItem name="tablet">Tablet</ListBoxItem>
        </fieldset>)
}

export default ListBox;