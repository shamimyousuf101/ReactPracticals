import React from "react";
import PropTypes from "prop-types";
import bem from "bem-cn";

import "./Links.css";


const b = bem("link");

const Links = ({ navId, text, clickHandler, url= '#' }) => (
  <li className={b(navId.toLowerCase())} onClick={clickHandler}>
    <a href={url}>{text}</a>
  </li>
);

Links.propTypes = {
  className: PropTypes.string, //change
  clickHandler: PropTypes.func,
  href: PropTypes.string,
  text: PropTypes.string //maybe a better name
  //add in url
};

export default Links;
