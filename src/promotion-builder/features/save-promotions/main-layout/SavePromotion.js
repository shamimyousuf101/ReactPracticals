import React, { Component }  from "react";
import PropTypes from "prop-types";

import "./savepromotion.css";
import InputBox from "../sub-components/InputBox";
import CheckboxGroup from "../sub-components/CheckboxGroup";
import ConfirmationBox from "../sub-components/VisibleConfirmationBox";
import {
  VIEW,
  DEVICE_LABELS,
  VENTURE_LABELS
} from "../../../../constants/constants";
import { searchPromotionsById } from "../../search";
import bem from "bem-cn";
const b = bem("promotion");

const uuid4 = require("uuid4");


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
  };

  hideDialog = () => {
    this.setShowDialog(false);
  };

  savePromotion = formData => {
    const { selectedPromotionId } = this.props;
    const id = selectedPromotionId || uuid4();
    const { name, url, devices, ventures } = formData;
    this.setState(prevState => ({
      promotionData: {
        ...prevState.promotionData,
        [id]: {
          id,
          name,
          url,
          devices,
          ventures,
          lastUpdatedTime: Date.now()
        }
      }
    }));
  };


  save = () => {
    console.log("save me")
    this.savePromotion(this.state.formData);
    this.resetFormData();
  };

  render() {

    if(this.props.selectedPromotionId)
    {

    }
    const { formData: {name, url, devices, ventures }, showDialog} = this.state;
    const { view} = this.props;

    if (view === VIEW.SAVE_PROMOTION) {
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
            display={showDialog}
            save={this.save}
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
  // promotionData
};

export default SavePromotion;
