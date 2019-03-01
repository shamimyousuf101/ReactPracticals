import React from "react";

import PropTypes from "prop-types";

import "./Links.css";

import bem from "bem-cn";
const b = bem("link");

const Links = ({ navId, text, clickHandler }) => (
  <li className={b(navId.toLowerCase())} onClick={clickHandler}>
    <a>{text}</a>
  </li>
);

Links.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string
};

export default Links;
