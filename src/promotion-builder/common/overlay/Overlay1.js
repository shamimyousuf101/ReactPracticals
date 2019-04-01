import React from "react";

import "./overlay.css";

const Overlay = ({ overlay, showOverlay }) => {
  if (overlay) {
    return (
      <div className="overlay">
        <button onClick={() => showOverlay(false)} className="close" href="#">
          x
        </button>
      </div>
    );
  }
  return null;
};

export default Overlay;
