import React, { Component } from "react";
import bem from "bem-cn";

import "./app.css";
import Banner from "../common/banner/VisibleBanner";
import Navigation from "../common/navigation/VisibleNavigation";
import AssetManager from "../features/upload-assets/main-layout/VisibleAssetManager";
import Search from "../features/search-promotions/main-layout/VisibleSearch";
import SavePromotion from "../features/save-promotions/main-layout/VisibleSavePromotion";
import { promotionData } from "../../promotionData";
import { VIEW } from "../../constants/constants";

const b = bem("promotion");
const uuid4 = require("uuid4");

class App extends Component {
  // state = {
  //   view: VIEW.SEARCH,
  //   selectedPromotionId: null,
  //   promotionData: promotionData
  // };

  // savePromotion = formData => {
  //   const { selectedPromotionId } = this.state;
  //   const id = selectedPromotionId || uuid4();
  //   const { name, url, devices, ventures } = formData;
  //   this.setState(prevState => ({
  //     promotionData: {
  //       ...prevState.promotionData,
  //       [id]: {
  //         id,
  //         name,
  //         url,
  //         devices,
  //         ventures,
  //         lastUpdatedTime: Date.now()
  //       }
  //     }
  //   }));
  // };

  render() {
    return (
      <div className={b()}>
        <Banner />
        <Navigation />
        <main className={b("dynamic__content")}>
          {/* <Search/> */}
          {/* <AssetManager/> */}
          <SavePromotion/>
        </main>
      </div>
    );
  }
}

export default App;
