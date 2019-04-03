import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./navigation.css";
import NavLinks from "./NavLinks";
import { VIEW, NAVIGATION_DATA } from "../../../constants/constants";

const b = bem("navigation");
const { SEARCH, ASSET_MANAGER, SAVE_PROMOTION } = VIEW;

const Navigation = ({ updateView, resetPrommotionId }) => {
  const onMenuClick = navId => {
    switch (navId) {
      case "SEARCH":
        updateView(SEARCH);
        return;
      case "ASSET":
        updateView(ASSET_MANAGER);
        return;
      case "EDIT":
        resetPrommotionId();
        updateView(SAVE_PROMOTION);
        return;
      default:
        updateView(SEARCH);
    }
  };

  return (
    <nav className={b()}>
      <ul>
        {NAVIGATION_DATA.map(({ navId, label, url }) => (
          <NavLinks
            label={label}
            navId={navId}
            key={navId}
            url={url}
            clickHandler={() => onMenuClick(navId)}
          />
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  updateView: PropsTypes.func.isRequired,
  resetPrommotionId: PropsTypes.func.isRequired
};

export default Navigation;
