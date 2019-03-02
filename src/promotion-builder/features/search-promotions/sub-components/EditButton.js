import React from "react";
import PropsTypes from "prop-types";

const EditButton = ({ id, editBtnClick }) => (
  <button
    className="edit__button"
    type="submit"
    onClick={() => editBtnClick(id)}
  >
    Edit
  </button>
);

EditButton.propTypes = {
  id: PropsTypes.string.isRequired,
  editBtnClick: PropsTypes.func.isRequired
};

export default EditButton;
