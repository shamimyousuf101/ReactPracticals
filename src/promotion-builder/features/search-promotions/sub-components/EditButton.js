import React from "react";
import PropTypes from "prop-types";

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
  id: PropTypes.string.isRequired,
  editBtnClick: PropTypes.func.isRequired
};

export default EditButton;
