import React from 'react';
import PropsTypes from 'prop-types'


const Checkbox = ({type = 'checkbox', name, checked = false, onChange }) => (
    <input type={type} name={name} checked={checked} onChange={onChange}/>
)


Checkbox.propsTypes = {
    type: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    checked: PropsTypes.bool.isRequired,
    onChange: PropsTypes.func.isRequired,
}

export default Checkbox;