import React from "react";

import "./overlay.css";

const Overlay = ({ overlay, showOverlay }) => {
  if (overlay) {
    return (
      <div className="overlay">
        <a onClick={() => showOverlay(false)} className="close" href="#">
          x
        </a>
      </div>
    );
  }
  return null;
};

export default Overlay;
