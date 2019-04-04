import React from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";
import { Link } from "react-router-dom";

import "./NavLinks.css";


const b = bem("link");

const NavLinks = ({ navId, label, clickHandler, url= '#' }) => (
  <li className={b(navId.toLowerCase())} onClick={clickHandler}>
    <Link to={url}>{label}</Link>
  </li>
);

NavLinks.propTypes = {
  navId: PropTypes.string, 
  label: PropTypes.string,
  clickHandler: PropTypes.func,
  url: PropTypes.string
};

export default NavLinks;
