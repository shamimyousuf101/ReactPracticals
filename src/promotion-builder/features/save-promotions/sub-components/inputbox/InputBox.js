
import React from 'react';
import PropTypes from 'prop-types'

const InputBox = ({name, children, value, onFormChange}) => {

    const handleInputData = event => {
        onFormChange(event.target.value, name)
    }

    return(<div>
        <label htmlFor={name}>{children}</label>
        <input type="text" name={name} value={value} onChange={handleInputData}></input>
    </div>)
}

InputBox.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default InputBox;