import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./navigation.css";
import NavLinks from "./NavLinks"; 
import { VIEW , NAVIGATION_DATA } from "../../../constants/constants";


const b = bem("navigation");

const Navigation = ({ updateView, resetPrommotionId }) => {
  
  const onMenuClick = navId => {
    switch (navId) {
      case "SEARCH":
        updateView(VIEW.SEARCH);
        return;
      case "ASSET":
        updateView(VIEW.ASSET_MANAGER);
        return;
      case "EDIT":
        resetPrommotionId();
        updateView(VIEW.SAVE_PROMOTION);
        return;
      default:
        updateView(VIEW.SEARCH);
    }
  };

  return (
    <nav className={b()}>
      <ul>
        {NAVIGATION_DATA.map(({ navId, label }) => (
          <NavLinks
            label={label}
            navId={navId}
            clickHandler={() => onMenuClick(navId)}
          />
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  clickHandler: PropsTypes.func.isRequired
};

export default Navigation;
