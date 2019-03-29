import React, { Component } from "react";
import PropTypes from "prop-types";

import { VIEW } from "../../../../constants/constants";

const { SEARCH, SAVE_PROMOTION } = VIEW;

class ConfirmationBox extends Component {
  cancelSave = () => {
    this.props.updateView(SAVE_PROMOTION);
    this.props.hideDialog();
  };

  confirmSave = () => {
    this.props.save();
    this.props.hideDialog();
    this.props.updateView(SEARCH);
  };

  render() {
    const { display, name, url, devices, ventures } = this.props;
    return (
      <dialog open={display} className="confirmationbox">
        <label>
          <h3>Promotion Details:</h3>
          <dl>
            <dt>Name:</dt>
            <dd>{name}</dd>
            <dt>Url:</dt>
            <dd>{url}</dd>
            <dt>Devices:</dt>
            <dd>{devices.toString()}</dd>
            <dt>Ventures:</dt>
            <dd>{ventures.toString()}</dd>
          </dl>
        </label>
        <menu>
          <button
            className="cancelBtn"
            value="cancel"
            onClick={this.cancelSave}
          >
            Cancel
          </button>
          <button className="confirmBtn" onClick={this.confirmSave}>
            Confirm
          </button>
        </menu>
      </dialog>
    );
  }
}

ConfirmationBox.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  devices: PropTypes.array.isRequired,
  ventures: PropTypes.array.isRequired,
  display: PropTypes.bool.isRequired,
  updateView: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  hideDialog: PropTypes.func.isRequired
};

export default ConfirmationBox;
