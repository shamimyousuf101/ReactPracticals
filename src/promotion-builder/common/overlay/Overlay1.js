import React from "react";

import "./overlay.css";

const Overlay = ({ overlay }) => {
  if (overlay) {
    return <div className="overlay" />;
  }
  return null;
};

export default Overlay;
