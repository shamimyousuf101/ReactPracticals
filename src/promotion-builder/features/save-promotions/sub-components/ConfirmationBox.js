import React, {Component}  from "react";

import { VIEW } from "../../../../constants/constants";

class ConfirmationBox extends Component {
  cancelSave = () => {
    this.props.updateView(VIEW.SAVE_PROMOTION);
    this.props.hideDialog();
  };

  confirmSave = () => {
    this.props.save();
    this.props.hideDialog();
    this.props.updateView(VIEW.SEARCH);
  };

  render() {
    const { display, name, url, devices, ventures } = this.props;
    if (display) {
      return (
        <dialog open className="confirmationbox">
          <label>
            Promotion Details:
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
            <button value="cancel" onClick={this.cancelSave}>
              Cancel
            </button>
            <button className="confirmBtn" onClick={this.confirmSave}>
              Confirm
            </button>
          </menu>
        </dialog>
      );
    }

    return null;
  }
}

// what prop types?

export default ConfirmationBox;
