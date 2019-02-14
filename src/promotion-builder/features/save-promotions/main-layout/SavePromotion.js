import React from "react";
import PropsTypes from "prop-types";

import InputBox from "../sub-components/InputBox";
import CheckboxGroup from "../sub-components/CheckboxGroup";
import { devices } from "../../../../domain/devices";
import { ventures } from "../../../../domain/ventures";

import "./savepromotion.css";

class SavePromotion extends React.Component {
  state = {
    formData: {
      id: 0,
      devices: [],
      ventures: [],
      url: "",
      name: "",
      lastUpdatedTime: ""
    }
  };

  onFormChange = (value, formField) => {
    this.setState(prevState => {
      return { formData: { ...prevState.formData, [formField]: value } };
    });
  };

  render() {
    if (this.props.view === "SavePromotion") {
      return (
        <div className="PromotionBuilder">
          <form className="promotionDetailsForm">
            <h2 className="NewPromotionTitle">
              {this.state.formData.name
                ? this.state.formData.name
                : "new promotion"}
            </h2>
            <CheckboxGroup
              value={this.state.formData.devices}
              name="devices"
              displayItems={devices}
              legendText="Devices:"
              onFormChange={this.onFormChange}
            />
            <CheckboxGroup
              value={this.state.formData.ventures}
              name="ventures"
              displayItems={ventures}
              legendText="Ventures:"
              onFormChange={this.onFormChange}
            />
            <InputBox
              value={this.state.formData.url}
              name="url"
              onFormChange={this.onFormChange}
              label={"URL:"}
            />
            <InputBox
              value={this.state.formData.name}
              name="name"
              onFormChange={this.onFormChange}
              label={"Name:"}
            />
            <input
              className="promotion-toolbar__button-save"
              type="button"
              value="Submit"
            />
            <input
              className="promotion-toolbar__button-reset"
              type="button"
              value="Reset"
            />
          </form>
        </div>
      );
    }
    return null;
  }
}

SavePromotion.propTypes = {
  formData: PropsTypes.object.isRequired,
  onFormChange: PropsTypes.func.isRequired,
  reset: PropsTypes.func.isRequired,
  savePromotion: PropsTypes.func.isRequired
};

export default SavePromotion;
