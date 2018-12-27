import React from 'react';

const EditButton = (props) => {

    return(
        <button className="edit__button" type="submit" onClick={() => props.editBtnClick(props.id)} >Edit</button> 
    )
}

export default EditButton;