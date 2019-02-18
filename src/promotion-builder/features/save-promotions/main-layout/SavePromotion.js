import React from "react";
import PropsTypes from "prop-types";

import InputBox from "../sub-components/InputBox";
import CheckboxGroup from "../sub-components/CheckboxGroup";
import { devices } from "../../../../domain/devices";
import { ventures } from "../../../../domain/ventures";
import { VIEW } from "../../../../constants/constants";
import { searchPromotionsById } from "../../../../utils/search";

import "./savepromotion.css";

class SavePromotion extends React.Component {
  initialFormData = {
    devices: [],
    ventures: [],
    url: "",
    name: "",
    lastUpdatedTime: ""
  };

  state = {
    formData: this.initialFormData
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedPromotionId !== prevProps.selectedPromotionId) {
      if (this.props.selectedPromotionId !== null) {
        const searchDisplay = searchPromotionsById(
          this.props.selectedPromotionId,
          this.props.promotionData
        );

        const foundArray = searchDisplay[0];

        this.setState({
          formData: {
            name: foundArray.name,
            url: foundArray.url,
            devices: foundArray.devices,
            ventures: foundArray.ventures
          }
        });
      } else {
        this.setState({
          formData: this.initialFormData
        });
      }
    }
  }

  onFormChange = (value, formField) => {
    this.setState(prevState => {
      return { formData: { ...prevState.formData, [formField]: value } };
    });
  };

  resetFormData = () => {
    this.setState({
      formData: this.initialFormData
    });
  };

  //TODO: Later stage this will move to a separate react component
  showAlertWithFormData = () => {
    const savedData = `New Promotion Details:
                    Name:\t ${this.state.formData.name} 
                    Url:\t ${this.state.formData.url}
                    Devices:\t ${this.state.formData.devices}
                    Ventures:\t ${this.state.formData.ventures}`;
    alert(savedData);
    this.props.updateView(VIEW.SEARCH);
  };

  Save = () => {
    this.props.savePromotion(this.state.formData);
    this.showAlertWithFormData();
  };

  render() {
    if (this.props.view === VIEW.SAVE_PROMOTION) {
      return (
        <section className="PromotionBuilder">
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
              onClick={this.Save}
            />
            <input
              className="promotion-toolbar__button-reset"
              type="button"
              value="Reset"
              onClick={this.resetFormData}
            />
          </form>
        </section>
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
