import React from "react";
import PropsTypes from "prop-types";

const EditButton = ({ id, editBtnClick, result }) => {
  return (
    <button
      className="edit__button"
      type="submit"
      onClick={() => editBtnClick(id, result)}
    >
      Edit
    </button>
  );
};

EditButton.propTypes = {
  id: PropsTypes.string.isRequired,
  editBtnClick: PropsTypes.func.isRequired
};

export default EditButton;
