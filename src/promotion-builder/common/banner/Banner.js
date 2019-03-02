import React from "react";
import PropsTypes from "prop-types";
import block from "bem-cn";

import "./banner.css";

const b = block("banner");

const Banner = ({ subHeading }) => (
  <header className={b()}>
    <h1>Promotion Manager</h1>
    <h3>{subHeading}</h3>
  </header>
);

Banner.propTypes = {
  subHeading: PropsTypes.string.isRequired
};

export default Banner;
