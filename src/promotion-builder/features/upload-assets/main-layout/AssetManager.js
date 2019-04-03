import React from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";

import "./assetmanager.css";
import { VIEW } from "../../../../constants/constants";

const { ASSET_MANAGER } = VIEW;
const b = bem("promotion");

const AssetManager = ({ view }) => {
  // TODO - Would break this component down into smaller components

  if (view === ASSET_MANAGER) {
    return (
      <main className={b("dynamic__content")}>
        <section className="upload__box">
          <input className="upload__button" type="file" />
        </section>
      </main>
    );
  }

  return null;
};

AssetManager.propTypes = {
  view: PropTypes.string
};

export default AssetManager;
