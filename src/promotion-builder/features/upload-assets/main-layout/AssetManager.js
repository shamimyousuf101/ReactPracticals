import React from "react";
import PropTypes from "prop-types";

import "./assetmanager.css";
import { VIEW } from "../../../../constants/constants";

const AssetManager = ({ view }) => {
  // TODO - Would break this component down into smaller components

  if (view === VIEW.ASSET_MANAGER) {
    return (
      <section className="upload__box">
        <input className="upload__button" type="file" />
      </section>
    );
  }

  return null;
};

AssetManager.propTypes = {
  view: PropTypes.string,
};

export default AssetManager;
