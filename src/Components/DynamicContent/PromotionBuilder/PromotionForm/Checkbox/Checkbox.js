import React from 'react';
import PropsTypes from 'prop-types'


const Checkbox = ({name, checked = false, onChange }) => (
    <input type='checkbox' name={name} checked={checked} onChange={onChange}/>
)


Checkbox.propTypes = {
    name: PropsTypes.string.isRequired,
    checked: PropsTypes.bool,
    onChange: PropsTypes.func.isRequired,
}

export default Checkbox;