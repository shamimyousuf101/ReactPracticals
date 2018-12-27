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
import getTruthyList from './utils/utils'


class App extends Component {

  state = {
    view: "Search",
    selectedPromotionId: null,
    formData: {
      id: 0,
      devices: new Map(),
      ventures: new Map(),
      url: "",
      name: ""
    },
    searchTerm: "",
    searchDisplay: promotionData,
  };


  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  searchBtnClick = event => {
    const searchInput = this.state.searchTerm;
    let promotionArray = Object.keys(promotionData).map(key => promotionData[key]);
    event.preventDefault();
    this.setState({
      searchDisplay: promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
    });
  }


  onFormChange = (value, formField) => {
      this.setState((prevState) => {
        return {  formData: { ...prevState.formData, [formField]: value }}
      })
  }



  savePromotion = () => {


    // BUG - new id getting created each time save is clicked

    function MapToArray(map) {
      
      let arr1 = [...map.keys()]
      return arr1;
    }

    let uuid4 = require('uuid4');
    let id = null;
    let newPromotion = {
      id: 0,
      devices: [],
      ventures: [],
      url: "",
      name: ""
    }

    if (this.state.formData) {

        

        if(this.state.selectedPromotionId){
          id = this.state.selectedPromotionId
        }

        if(this.state.formData.id){
            id = this.state.formData.id
        } else {
          id = uuid4();
        }

        let data = " New Promotion Details: " + "\n" + 
        "Name: " + this.state.formData.name + "\n" + 
        "Id: " + id + "\n" + 
        "Url: " + this.state.formData.url + "\n" + 
        "Devices: " + getTruthyList(this.state.formData.devices ) + "\n" + 
        "Ventures: " + getTruthyList(this.state.formData.ventures) ;
        alert(data);

        newPromotion.id=id;
        newPromotion.name=this.state.formData.name;
        newPromotion.url=this.state.formData.url;
        newPromotion.devices=MapToArray(this.state.formData.devices);
        newPromotion.ventures=MapToArray(this.state.formData.ventures);

        this.setState((prevState) => {
          return {  formData: { ...prevState.formData, [id]: newPromotion }}
        })

      this.setState((prevState) => {
        return {  searchDisplay: { 
          ...prevState.searchDisplay, 
          [id ]: newPromotion
        }}
      })

    }

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
    selectedPromotionFormData.devices = arrayToMap(selectedPromotion.devices)
    selectedPromotionFormData.ventures = arrayToMap(selectedPromotion.ventures)
    selectedPromotionFormData.url = selectedPromotion.url
    selectedPromotionFormData.id = selectedPromotion.id
    selectedPromotionFormData.name = selectedPromotion.name
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
        <Container view={view} formData={formData} editBtnClick={this.editBtnClick} reset={this.reset} savePromotion={this.savePromotion} onFormChange={this.onFormChange} handleInputChange={this.handleInputChange} searchBtnClick={this.searchBtnClick} searchDisplay={searchDisplay} searchTerm={searchTerm} />
        <Menu menuData={menuData} clickHandler={this.onclick} />
      </div>
    );
  }
}

export default App;

