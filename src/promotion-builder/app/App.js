import React, { Component } from "react";
import bem from "bem-cn";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";
import Banner from "../common/banner/VisibleBanner";
import Navigation from "../common/navigation/VisibleNavigation";
import AssetManager from "../features/upload-assets/main-layout/VisibleAssetManager";
import Search from "../features/search-promotions/main-layout/VisibleSearch";
import SavePromotion from "../features/save-promotions/main-layout/VisibleSavePromotion";
import Overlay from "../common/overlay/VisibleOverlay";

const b = bem("promotion");

class App extends Component {
  render() {
    return (
      <Router >
        <div className={b()}>
          <Banner />
          <Navigation />
          <Route path="/" exact component={Search} />
          <Route path="/assetmanager/" exact component={AssetManager} />
          <Route path="/savepromotion/" exact component={SavePromotion} />
          <Overlay />
        </div>
      </Router>
    );
  }
}

export default App;
