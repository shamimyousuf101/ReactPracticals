import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { VIEW } from "../../../../constants/constants";
import PromoDetails from "./PromoDetails";

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
          <PromoDetails
            name={name}
            url={url}
            devices={devices}
            ventures={ventures}
          />
        </label>
        <menu>
          <button
            className="cancelBtn"
            value="cancel"
            onClick={this.cancelSave}
          >
            Cancel
          </button>
          <Link to="/">
            <button className="confirmBtn" onClick={this.confirmSave}>
              Confirm
            </button>
          </Link>
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
