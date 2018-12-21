import React from 'react';

const EditButton = (props) => {

    return(
        <button className="edit__button" type="submit" onClick={props.editBtnClick} >Edit</button> 
    )
}

export default EditButton;