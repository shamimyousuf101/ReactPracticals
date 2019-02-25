import React from "react";
import PropTypes from "prop-types";

import "./checkboxgroup.css";

class CheckboxGroup extends React.Component {
  render() {
    const { legendText, displayItems, name, onFormChange, value } = this.props;

    const selectedDevices = value;
    const selectedVentures = value;

    const handleInputData = event => {
      if (name === "devices") {
        if (event.target.checked) {
          selectedDevices.push(event.target.value);
        } else {
          let index = value.indexOf(event.target.value);
          selectedDevices.splice(index, 1);
        }
        onFormChange(selectedDevices, name);
      } else {
        if (event.target.checked) {
          selectedVentures.push(event.target.value);
        } else {
          let index = value.indexOf(event.target.value);
          selectedVentures.splice(index, 1);
        }
        onFormChange(selectedVentures, name);
      }
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
  }
}

CheckboxGroup.propTypes = {
  legendText: PropTypes.string.isRequired,
  displayItems: PropTypes.array.isRequired,
  onFormChange: PropTypes.func.isRequired
};

export default CheckboxGroup;
