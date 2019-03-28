import React, { Component } from "react";
import bem from "bem-cn";

import "./app.css";
import Banner from "../common/banner/VisibleBanner";
import Navigation from "../common/navigation/VisibleNavigation";
import AssetManager from "../features/upload-assets/main-layout/VisibleAssetManager";
import Search from "../features/search-promotions/main-layout/VisibleSearch";
import SavePromotion from "../features/save-promotions/main-layout/VisibleSavePromotion";

const b = bem("promotion");

class App extends Component {

  render() {
    return (
      <div className={b()}>
        <Banner />
        <Navigation />
        <main className={b("dynamic__content")}>
          <Search/>
          <AssetManager/>
          <SavePromotion/>
        </main>
      </div>
    );
  }
}

export default App;
