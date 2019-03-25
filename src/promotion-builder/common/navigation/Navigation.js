import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./navigation.css";
import NavLinks from "./NavLinks"; 
import { VIEW , NAVIGATION_DATA } from "../../../constants/constants";


import AssetManager from "../../features/upload-assets/main-layout/VisibleAssetManager";
import Search from "../../features/search-promotions/main-layout/VisibleSearch";
import SavePromotion from "../../features/save-promotions/main-layout/VisibleSavePromotion";


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
    <Router>
      <div>
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

        <Route path="/" exact component={Search} />
        <Route path="/assetmanager/" exact component={AssetManager} />
        <Route path="/addpromotion/" exact component={SavePromotion} />
      </div>
    </Router>
    
  );
};

Navigation.propTypes = {
  updateView: PropsTypes.func.isRequired,
  resetPrommotionId: PropsTypes.func.isRequired
};

export default Navigation;
