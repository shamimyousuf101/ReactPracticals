import React from "react";
import PropsTypes from "prop-types";

import Links from "./Links";
import "./navigation.css";
import { VIEW } from "../../../constants/constants";

import bem from "bem-cn";
const b = bem("navigation");

const Navigation = ({ menuData, updateView, resetPrommotionId }) => {
  const onMenuClick = text => {
    switch (text) {
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
        {menuData.map(({ navId, text }) => (
          <Links
            text={text}
            navId={navId}
            clickHandler={() => onMenuClick(navId)}
          />
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  menuData: PropsTypes.array.isRequired,
  clickHandler: PropsTypes.func.isRequired
};

export default Navigation;
