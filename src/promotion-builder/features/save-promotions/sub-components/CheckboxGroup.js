import React from "react";
import PropTypes from "prop-types";

import "./checkboxgroup.css";

const CheckboxGroup = ({
  legendText,
  displayItems,
  name,
  onFormChange,
  value
}) => {
  const selectedCheckboxes = value;

  const handleInputData = event => {
    if (event.target.checked) {
      selectedCheckboxes.push(event.target.value);
    } else {
      let index = value.indexOf(event.target.value);
      selectedCheckboxes.splice(index, 1);
    }
    onFormChange(selectedCheckboxes, name);
  };

  return (
    <fieldset>
      <legend>{legendText}</legend>
      {displayItems.map(item => (
        <label key={item}>
          <input
            type="checkbox"
            name={name}
            checked={value.includes(item)}
            value={item}
            onChange={handleInputData}
          />
          {item}
        </label>
      ))}
    </fieldset>
  );
};

CheckboxGroup.propTypes = {
  legendText: PropTypes.string.isRequired,
  displayItems: PropTypes.array.isRequired,
  onFormChange: PropTypes.func.isRequired
};

export default CheckboxGroup;
