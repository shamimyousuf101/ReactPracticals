import React from "react";
import PropTypes from "prop-types";

import "./checkboxgroup.css";

class CheckboxGroup extends React.Component {
  render() {
    const { legendText, displayItems, name, onFormChange } = this.props;

    const selectedDevices = [];
    const selectedVentures = [];

    const handleInputData = event => {
      if (name === "devices") {
        selectedDevices.push(event.target.value);
        onFormChange(selectedDevices, name);
      } else {
        selectedVentures.push(event.target.value);
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
