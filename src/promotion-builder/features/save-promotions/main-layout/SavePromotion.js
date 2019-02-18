import React from "react";
import PropsTypes from "prop-types";

import InputBox from "../sub-components/InputBox";
import CheckboxGroup from "../sub-components/CheckboxGroup";
import { deviceLabels } from "../../../../domain/devices";
import { ventureLabels } from "../../../../domain/ventures";
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

  componentDidUpdate({ selectedPromotionId: prevSelectedPromotionId }) {
    const { selectedPromotionId, promotionData } = this.props;

    if (selectedPromotionId !== prevSelectedPromotionId) {
      if (selectedPromotionId !== null) {
        const searchDisplay = searchPromotionsById(
          selectedPromotionId,
          promotionData
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
    const { name, url, devices, ventures } = this.state.formData;
    const savedData = `New Promotion Details:
                    Name:\t ${name} 
                    Url:\t ${url}
                    Devices:\t ${devices}
                    Ventures:\t ${ventures}`;
    alert(savedData);
    this.props.updateView(VIEW.SEARCH);
  };

  Save = () => {
    this.props.savePromotion(this.state.formData);
    this.showAlertWithFormData();
  };

  render() {
    const { name, url, devices, ventures } = this.state.formData;

    if (this.props.view === VIEW.SAVE_PROMOTION) {
      return (
        <section className="PromotionBuilder">
          <form className="promotionDetailsForm">
            <h2 className="NewPromotionTitle">
              {name ? name : "new promotion"}
            </h2>
            <CheckboxGroup
              value={devices}
              name="devices"
              displayItems={deviceLabels}
              legendText="Devices:"
              onFormChange={this.onFormChange}
            />
            <CheckboxGroup
              value={ventures}
              name="ventures"
              displayItems={ventureLabels}
              legendText="Ventures:"
              onFormChange={this.onFormChange}
            />
            <InputBox
              value={url}
              name="url"
              onFormChange={this.onFormChange}
              label={"URL:"}
            />
            <InputBox
              value={name}
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
