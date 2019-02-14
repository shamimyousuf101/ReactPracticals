import React from "react";
import PropTypes from "prop-types";

const InputBox = ({ name, value, label, onFormChange }) => {
  const handleInputData = event => {
    onFormChange(event.target.value, name);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={handleInputData} />
    </div>
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default InputBox;
