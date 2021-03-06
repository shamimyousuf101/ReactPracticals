import React from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";

import "./NavLinks.css";


const b = bem("link");

const NavLinks = ({ navId, label, clickHandler, url= '#' }) => (
  <li className={b(navId.toLowerCase())} onClick={clickHandler}>
    <a href={url}>{label}</a>
  </li>
);

NavLinks.propTypes = {
  navId: PropTypes.string, 
  label: PropTypes.string,
  clickHandler: PropTypes.func,
  url: PropTypes.string
};

export default NavLinks;
