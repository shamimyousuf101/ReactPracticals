import React from 'react';
import PropsTypes from 'prop-types'

const EditButton = (props) => {

    return(
        <button className="edit__button" type="submit" onClick={() => props.editBtnClick(props.id)} >Edit</button> 
    )
}

EditButton.propTypes = {
    id: PropsTypes.string.isRequired,
    editBtnClick: PropsTypes.func.isRequired
}

export default EditButton;