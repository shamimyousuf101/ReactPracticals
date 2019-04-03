import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./promotion-builder/app/App";

import AssetManager from "./promotion-builder/features/upload-assets/main-layout/VisibleAssetManager";
import SavePromotion from "./promotion-builder/features/save-promotions/main-layout/VisibleSavePromotion";
import Search from "./promotion-builder/features/search-promotions/main-layout/VisibleSearch";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/search" component={Search} />
      <Route path="/assetmanager" component={AssetManager} />
      <Route path="/savepromotion" component={SavePromotion} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
