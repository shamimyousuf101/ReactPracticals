import React from "react";
import PropTypes from "prop-types";

import InputBox from "../InputBox";
import CheckboxGroup from "../CheckboxGroup";
import { devices } from "../../../../../domain/devices";
import { ventures } from "../../../../../domain/ventures";

import "./promotionform.css";

const PromotionForm = ({ formData, onFormChange }) => {
  const {
    devices: selectedDevices,
    ventures: selectedVentures,
    url,
    name
  } = formData;

  return (
    <form className="promotionDetailsForm">
      <h2 className="NewPromotionTitle">
        {formData.name ? formData.name : "new promotion"}
      </h2>
      <CheckboxGroup
        value={selectedDevices}
        name="devices"
        displayItems={devices}
        legendText="Devices:"
        onFormChange={onFormChange}
      />
      <CheckboxGroup
        value={selectedVentures}
        name="ventures"
        displayItems={ventures}
        legendText="Ventures:"
        onFormChange={onFormChange}
      />
      <InputBox value={url} name="url" onFormChange={onFormChange}>
        URL:
      </InputBox>
      <InputBox value={name} name="name" onFormChange={onFormChange}>
        Name:
      </InputBox>
      <button> Save </button>
      <button> Reset </button>
    </form>
  );
};

PromotionForm.propTypes = {
  formData: PropTypes.shape({
    devices: PropTypes.instanceOf(Map),
    id: PropTypes.string,
    lastUpdatedTime: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    ventures: PropTypes.instanceOf(Map)
  }).isRequired,
  onFormChange: PropTypes.func.isRequired
};

export default PromotionForm;
