import React from "react";
import PropsTypes from "prop-types";
import "./navigation.css";
import bem from "bem-cn";

import Links from "./Links"; //maybe calling this NavLinks
import { VIEW } from "../../../constants/constants";

//dont think text is the right name for the parameter and prop

const b = bem("navigation");

const Navigation = ({ menuData, updateView, resetPrommotionId }) => {
  const onMenuClick = text => { // maybe change the name of this parameter
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
