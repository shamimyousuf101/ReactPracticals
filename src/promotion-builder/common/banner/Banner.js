import React from "react";
import PropsTypes from "prop-types";
import block from "bem-cn";

import "./banner.css";

const b = block("banner");

const Banner = ({ view }) => (
  <header className={b()}>
    <h1>Promotion Manager</h1>
    <h3>{view}</h3>
  </header>
);

Banner.propTypes = {
  view: PropsTypes.string.isRequired
};

export default Banner;
