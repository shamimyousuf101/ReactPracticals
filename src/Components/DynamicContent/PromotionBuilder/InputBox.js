
import React from 'react';

const InputBox = (props) => {
    return(<div>
        <label htmlFor={props.name}>{props.children}</label>
        <input type="text" name={props.name}></input>
    </div>)
}

export default InputBox;