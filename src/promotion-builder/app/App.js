import React, { Component } from "react";

import Banner from "../common/banner/Banner";
import Navigation from "../common/navigation/Navigation";

import AssetManager from "../features/upload-assets/main-layout/AssetManager";
import Search from "../features/search-promotions/main-layout/Search";
import SavePromotion from "../features/save-promotions/main-layout/SavePromotion";

import { navigationData } from "../common/navigation/navigationData";

import { promotionData } from "../../domain/promotionData";

import "./app.css";
import { VIEW } from "../../constants/constants";

import bem from "bem-cn";
const b = bem("promotion");

let uuid4 = require("uuid4");

class App extends Component {
  state = {
    view: VIEW.SEARCH,
    selectedPromotionId: null,

    promotionData: promotionData
  };

  updateView = view => this.setState({ view });
  resetPrommotionId = () => this.setState({ selectedPromotionId: null });

  savePromotion = formData => {
    let id = this.getPromotionId();
    this.setState(prevState => {
      return {
        promotionData: {
          ...prevState.promotionData,
          [id]: {
            id,
            name: formData.name,
            url: formData.url,
            devices: formData.devices,
            ventures: formData.ventures,
            lastUpdatedTime: Date.now()
          }
        }
      };
    });
  };

  getPromotionId = () => {
    const { selectedPromotionId } = this.state;
    return selectedPromotionId || uuid4();
  };

  editBtnClick = id => {
    this.setState({
      selectedPromotionId: id,
      view: VIEW.SAVE_PROMOTION
    });
  };

  render() {
    const { view, promotionData, selectedPromotionId } = this.state;

    return (
      <div className={b()}>
        <Banner subHeading={view} />
        <Navigation
          menuData={navigationData}
          updateView={this.updateView}
          clearSearchTerm={this.clearSearchTerm}
          resetPrommotionId={this.resetPrommotionId}
        />
        <div className={b("content")}>
          <div className={b("dynamic__content")}>
            <Search
              promotionData={promotionData}
              editBtnClick={this.editBtnClick}
              view={view}
            />
            <AssetManager view={view} />
            <SavePromotion
              reset={this.reset}
              savePromotion={this.savePromotion}
              promotionData={promotionData}
              selectedPromotionId={selectedPromotionId}
              view={view}
              updateView={this.updateView}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
