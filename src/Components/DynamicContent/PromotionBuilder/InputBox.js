
import React from 'react';

const InputBox = (props) => {


    const setValue = (promotionData) => {

        if (promotionData) {

            return promotionData;

        } else {
            return "";
        }

    }

    return(<div>
        <label htmlFor={props.name}>{props.children}</label>
        <input type="text" name={props.name} value={setValue(props.promotionData)}></input>
    </div>)
}

export default InputBox;