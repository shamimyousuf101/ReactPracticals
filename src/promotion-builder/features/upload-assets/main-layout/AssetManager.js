import React from "react";
import { VIEW } from "../../../../constants/constants";
import "./assetmanager.css";

const AssetManager = ({ view }) => {
  // TODO - Would break this component down into smaller components

  if (view === VIEW.ASSET_MANAGER) {
    return (
      <div className="upload__box">
        <input className="upload__button" type="file" />
      </div>
    );
  }

  return null;
};

export default AssetManager;
