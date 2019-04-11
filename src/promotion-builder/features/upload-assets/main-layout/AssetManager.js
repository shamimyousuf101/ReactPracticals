import React from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";

import "./assetmanager.css";

const b = bem("promotion");

const AssetManager = ({ view }) => {
  // TODO - Would break this component down into smaller components
    return (
      <main className={b("dynamic__content")}>
        <section className="upload__box">
          <input className="upload__button" type="file" />
        </section>
      </main>
    );
};

AssetManager.propTypes = {
  view: PropTypes.string
};

export default AssetManager;
