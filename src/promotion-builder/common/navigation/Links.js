import React from "react";

import PropTypes from "prop-types";

import "./Links.css";

import bem from "bem-cn";
const b = bem("navigation");

const Links = ({ className, clickHandler, href, text }) => (
  <li id={b('link')} className={className} onClick={clickHandler}>
    <a href={href}>{text}</a>
  </li>
);

Links.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string
};

export default Links;
