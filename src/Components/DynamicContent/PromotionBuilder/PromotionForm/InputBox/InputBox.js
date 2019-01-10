
import React from 'react';
import PropsTypes from 'prop-types'

const InputBox = (props) => {

    const handleInputData = event => {
        props.onFormChange(event.target.value, props.name)
    }

    return(<div>
        <label htmlFor={props.name}>{props.children}</label>
        <input type="text" name={props.name} value={props.value} onChange={handleInputData}></input>
    </div>)
}

InputBox.propTypes = {
    name: PropsTypes.string.isRequired,
    children: PropsTypes.string.isRequired,
    value: PropsTypes.string
}

export default InputBox;