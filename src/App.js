import React, { Component } from 'react';

import Banner from './Components/Header/Banner';
import Container from './Components/DynamicContent/Container';
import Menu from './Components/Menu/Menu';
import { menuData } from './Components/Menu/menuData';

import './Components/Header/Banner.css';
import './Components/Menu/Menu.css';
import './Components/DynamicContent/Search/Search.css';
import './Components/DynamicContent/Asset/AssetManager.css';
import './Components/DynamicContent/PromotionBuilder/PromotionBuilder.css';
import './Components/DynamicContent/Container.css';
import './App.css';
import { promotionData } from './Components/DynamicContent/PromotionBuilder/promotionData';


class App extends Component {

  state = {
    view: "Search",
    selectedPromotionId: null,
    formData: {
      devices: new Map(),
      ventures: new Map(),
      url: "",
      name: ""
    },
    searchTerm: "",
    searchDisplay: promotionData.promotions,
  };


  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  searchBtnClick = event => {
    const searchInput = this.state.searchTerm;
    let promotionArray = Object.keys(promotionData.promotions).map(key => promotionData.promotions[key]);
    event.preventDefault();
    this.setState({
      searchDisplay: promotionArray.filter((el) => el.promotion.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
    });
  }


  onFormChange = (value, formField) => {
      this.setState((prevState) => {
        return {  formData: { ...prevState.formData, [formField]: value }}
      })
  }


  reset = () => {
    this.setState({
      selectedPromotionId: null,
      formData: {
        devices: new Map(),
        ventures: new Map(),
        url: "",
        name: ""
      },
    });
  }


  editBtnClick = (id) => {
    this.setState({
      selectedPromotionId: id,
      view: "PromotionBuilder",
      formData: this.setFormDataToSelectedPromotion(id)
    });
  }


  setFormDataToSelectedPromotion = (selectedPromotionId) => {

    let selectedPromotion = this.state.searchDisplay.find(item => item.id === selectedPromotionId);
    let selectedPromotionFormData = {};
    selectedPromotionFormData.devices = arrayToMap(selectedPromotion.promotion.devices)
    selectedPromotionFormData.ventures = arrayToMap(selectedPromotion.promotion.ventures)
    selectedPromotionFormData.url = selectedPromotion.promotion.url
    selectedPromotionFormData.name = selectedPromotion.promotion.name
    return selectedPromotionFormData;

    function arrayToMap(array) {
      let newMap = new Map();

      if (array.length > 0) {
        array.forEach(element => {
          newMap.set(element, true);
        });
      }
      return newMap;
    }

  }

  onclick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
    switch (selectedLink) {

      case "search__link":
        view = "Search";
        break;
      case "upload__link":
        view = "Upload";
        break;
      case "config__link":
        view = "PromotionBuilder";
        this.reset();

        break;
      default:
        view = "Search";

    }

    this.setState({ view });

  }

  render() {

    const { view, formData, searchDisplay, searchTerm } = this.state;

    return (
      <div className="App">
        <Banner subHeading={view} />
        <Container view={view} formData={formData} editBtnClick={this.editBtnClick} reset={this.reset} onFormChange={this.onFormChange} handleInputChange={this.handleInputChange} searchBtnClick={this.searchBtnClick} searchDisplay={searchDisplay} searchTerm={searchTerm} />
        <Menu menuData={menuData} clickHandler={this.onclick} />
      </div>
    );
  }
}

export default App;

