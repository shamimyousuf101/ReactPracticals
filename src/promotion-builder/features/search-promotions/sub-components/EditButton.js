import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EditButton = ({ id, view, editBtnClick }) => (
  <Link to="/savepromotion">
    <button
      className="edit__button"
      type="submit"
      onClick={() => editBtnClick(id, view)}
    >
      Edit
    </button>
  </Link>
);

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
  editBtnClick: PropTypes.func.isRequired
};

export default EditButton;
