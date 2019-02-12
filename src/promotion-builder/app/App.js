import React, { Component } from "react";

import Banner from "../common/banner/Banner";
import Navigation from "../common/navigation/nav/Navigation";

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
    formData: {
      id: 0,
      devices: [],
      ventures: [],
      url: "",
      name: "",
      lastUpdatedTime: ""
    },
    searchTerm: "",
    promotionData: promotionData
  };

  handleInputChange = event =>
    this.setState({ searchTerm: event.target.value });

  onFormChange = (value, formField) => {
    this.setState(prevState => {
      return { formData: { ...prevState.formData, [formField]: value } };
    });
  };

  savePromotion = () => {
    if (this.state.formData) {
      let id = this.getPromotionId();
      this.showAlertWithFormData();
      this.setState(prevState => {
        return {
          promotionData: {
            ...prevState.promotionData,
            [id]: this.getNewOrUpdatedPromotion(id)
          }
        };
      });
      this.setState({ view: VIEW.SEARCH });
    }
  };

  getNewOrUpdatedPromotion = id => {
    const {
      formData: { name = "", url = "", devices = [], ventures = [] }
    } = this.state;

    return {
      id,
      name,
      url,
      devices,
      ventures,
      lastUpdatedTime: Date.now()
    };
  };

  getPromotionId = () => {
    const {
      selectedPromotionId,
      formData: { id: formDataId }
    } = this.state;

    return formDataId || selectedPromotionId || uuid4();
  };

  showAlertWithFormData = () => {
    let savedData = `New Promotion Details:
                    Name:\t ${this.state.formData.name} 
                    Url:\t ${this.state.formData.url}
                    Devices:\t ${this.state.formData.devices}
                    Ventures:\t ${this.state.formData.ventures}`;
    alert(savedData);
  };

  resetFormData = () => {
    this.setState({
      selectedPromotionId: null,
      formData: {
        devices: {},
        ventures: {},
        url: "",
        name: ""
      }
    });
  };

  editBtnClick = (id, result) => {
    this.setState({
      selectedPromotionId: id,
      view: VIEW.SAVE_PROMOTION,
      formData: {
        ...result,
        devices: result.devices,
        ventures: result.ventures
      }
    });
  };

  onMenuClick = event => {
    const selectedLink = event.currentTarget.className;
    let view;
    switch (selectedLink) {
      case "search__link":
        view = VIEW.SEARCH;
        this.setState({ searchTerm: "" });
        break;
      case "upload__link":
        view = VIEW.ASSET_MANAGER;
        break;
      case "config__link":
        view = VIEW.SAVE_PROMOTION;
        this.resetFormData();
        break;
      default:
        view = VIEW.SEARCH;
    }

    this.setState({ view });
  };

  render() {
    const {
      view,
      formData,
      promotionData,
      searchTerm,
      selectedPromotionId
    } = this.state;

    return (
      <div className={b()}>
        <Banner subHeading={view} />
        <Navigation menuData={navigationData} clickHandler={this.onMenuClick} />
        <div className={b("content")}>
          <div className={b("dynamic__content")}>
            <Search
              promotionData={promotionData}
              searchTerm={searchTerm}
              onInputChange={this.handleInputChange}
              editBtnClick={this.editBtnClick}
              view={view}
            />
            <AssetManager view={view} />
            <SavePromotion
              reset={this.reset}
              savePromotion={this.savePromotion}
              formData={formData}
              promotionData={promotionData}
              onFormChange={this.onFormChange}
              selectedPromotionId={selectedPromotionId}
              view={view}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
