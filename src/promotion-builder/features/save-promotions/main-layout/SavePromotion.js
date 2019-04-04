import React, { Component } from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";

import "./savepromotion.css";
import InputBox from "../sub-components/InputBox";
import CheckboxGroup from "../sub-components/CheckboxGroup";
import ConfirmationBox from "../sub-components/VisibleConfirmationBox";
import {
  VIEW,
  DEVICE_LABELS,
  VENTURE_LABELS
} from "../../../../constants/constants";
import { isSaveFormDataValid } from "../validations";

const uuid4 = require("uuid4");
const { SAVE_PROMOTION } = VIEW;
const b = bem("promotion");

class SavePromotion extends Component {
  state = {
    formData: {
      devices: [],
      ventures: [],
      url: "",
      name: "",
      lastUpdatedTime: ""
    },
    showDialog: false
  };

  getDefaultFormState = () => ({
    devices: [],
    ventures: [],
    url: "",
    name: "",
    lastUpdatedTime: ""
  });

  componentDidUpdate({ selectedPromotionId: prevSelectedPromotionId }) {
    const { selectedPromotionId, promotionData } = this.props;

    if (selectedPromotionId !== prevSelectedPromotionId) {
      if (selectedPromotionId !== null && selectedPromotionId) {
        const searchDisplay = promotionData[selectedPromotionId];
        this.setState({
          formData: {
            name: searchDisplay.name,
            url: searchDisplay.url,
            devices: searchDisplay.devices,
            ventures: searchDisplay.ventures
          }
        });
      } else {
        this.setState({
          formData: this.getDefaultFormState()
        });
      }
    }
  }

  onFormChange = (value, formField) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData, [formField]: value }
    }));
  };

  resetFormData = () => {
    this.setState({
      formData: this.getDefaultFormState()
    });
  };

  setShowDialog = display => {
    this.setState({
      showDialog: display
    });
    this.props.showOverlay(true);
  };

  hideDialog = () => {
    this.setShowDialog(false);
    this.props.showOverlay(false);
  };

  addAndEditPromotion = () => {
    const { selectedPromotionId } = this.props;
    const id = selectedPromotionId || uuid4();
    const { name, url, devices, ventures } = this.state.formData;
    const newPromotion = {
      id,
      name,
      url,
      devices,
      ventures,
      lastUpdatedTime: Date.now()
    };

    this.props.addPromotion(id, newPromotion);
    this.resetFormData();
  };

  render() {
    const {
      formData: { name, url, devices, ventures },
      showDialog
    } = this.state;
    const { view, overlay } = this.props;

    if (view === SAVE_PROMOTION) {
      return (
        <main className={b("dynamic__content")}>
          <section className="PromotionBuilder">
            <form className="promotionDetailsForm">
              <h2 className="NewPromotionTitle">
                {name ? name : "new promotion"}
              </h2>
              <CheckboxGroup
                value={devices}
                name="devices"
                displayItems={DEVICE_LABELS}
                legendText="Devices:"
                onFormChange={this.onFormChange}
              />
              <CheckboxGroup
                value={ventures}
                name="ventures"
                displayItems={VENTURE_LABELS}
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
                disabled={isSaveFormDataValid(this.state.formData)}
                className="promotion-toolbar__button-save"
                type="button"
                value="Submit"
                onClick={() => this.setShowDialog(true)}
              />
              <input
                className="promotion-toolbar__button-reset"
                type="button"
                value="Reset"
                onClick={this.resetFormData}
              />
            </form>
            <ConfirmationBox
              name={name}
              url={url}
              devices={devices}
              ventures={ventures}
              display={showDialog && overlay}
              save={this.addAndEditPromotion}
              hideDialog={this.hideDialog}
            />
          </section>
        </main>
      );
    }
    return null;
  }
}

SavePromotion.propTypes = {
  view: PropTypes.string.isRequired,
  selectedPromotionId: PropTypes.string,
  promotionData: PropTypes.shape({
    id: PropTypes.number,
    devices: PropTypes.arrayOf(PropTypes.string.isRequired),
    name: PropTypes.string,
    url: PropTypes.string,
    ventures: PropTypes.arrayOf(PropTypes.string.isRequired)
  })
};

export default SavePromotion;
