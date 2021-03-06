import React from "react";
import PropTypes from "prop-types";

const EditButton = ({ id, view, editBtnClick }) => (
  <button
    className="edit__button"
    type="submit"
    onClick={() => editBtnClick(id, view)}
  >
    Edit
  </button>
);

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
  editBtnClick: PropTypes.func.isRequired
};

export default EditButton;
