import React from "react";
import PropsTypes from "prop-types";

import Links from "./Links";
import "./navigation.css";
import { VIEW } from "../../../constants/constants";

import bem from "bem-cn";
const b = bem("navigation");

const Navigation = ({ menuData, updateView, resetPrommotionId }) => {
  const onMenuClick = event => {
    const selectedLink = event.currentTarget.className;

    switch (selectedLink) {
      case "search__link":
        updateView(VIEW.SEARCH);
        return;
      case "upload__link":
        updateView(VIEW.ASSET_MANAGER);
        return;
      case "config__link":
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
        {menuData.map(({ className, text }) => (
          <Links
            href={"#"}
            className={className}
            key={text}
            text={text}
            clickHandler={onMenuClick}
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
