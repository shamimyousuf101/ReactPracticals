import React from "react";
import PropTypes from "prop-types";

const InputBox = ({ name, value, label, onFormChange }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={event => onFormChange(event.target.value, name)}
    />
  </div>
);

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onFormChange: PropTypes.func.isRequired
};

export default InputBox;
