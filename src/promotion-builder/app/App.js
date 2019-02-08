import React, { Component } from "react";

import Banner from "../common/banner/Banner";
import Content from "../common/content/Content";
import Navigation from "../common/navigation/nav/Navigation";

import { navigationData } from "../common/navigation/navigationData";

import { promotionData } from "../../domain/promotionData";
import { getTruthyList, arrayToMap } from "../../utils/utils";

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
      devices: new Map(),
      ventures: new Map(),
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
      formData: {
        name = "",
        url = "",
        devices = new Map(),
        ventures = new Map()
      }
    } = this.state;

    return {
      id,
      name,
      url,
      devices: [...devices.keys()],
      ventures: [...ventures.keys()],
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
                    Devices:\t ${getTruthyList(this.state.formData.devices)}
                    Ventures:\t ${getTruthyList(this.state.formData.ventures)}`;
    alert(savedData);
  };

  resetFormData = () => {
    this.setState({
      selectedPromotionId: null,
      formData: {
        devices: new Map(),
        ventures: new Map(),
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
        devices: arrayToMap(result.devices),
        ventures: arrayToMap(result.ventures)
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
        <Content
          view={view}
          promotionData={promotionData}
          formData={formData}
          selectedPromotionId={selectedPromotionId}
          editBtnClick={this.editBtnClick}
          reset={this.resetFormData}
          savePromotion={this.savePromotion}
          onFormChange={this.onFormChange}
          handleInputChange={this.handleInputChange}
          searchTerm={searchTerm}
        />
        <Navigation menuData={navigationData} clickHandler={this.onMenuClick} />
      </div>
    );
  }
}

export default App;
