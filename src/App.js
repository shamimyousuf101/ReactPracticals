import React, { Component } from 'react';
import isEqual from 'lodash.isequal'

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
import { promotionData } from './domain/promotionData';
import { getTruthyList , arrayToMap } from './utils/utils'


class App extends Component {

  state = {
    view: "Search",
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
    searchDisplay: [],
    promotionData: promotionData
  };


  componentDidMount(){
    this.searchPromotions();
  }


  componentDidUpdate(prevProps, prevState){
    if(!isEqual(prevState.promotionData,this.state.promotionData)){
      this.searchPromotions();
    }
    
  }

  handleInputChange = event => this.setState({ searchTerm: event.target.value });


  searchBtnClick = event => {
    event.preventDefault();
    this.searchPromotions();
  }


  searchPromotions = () => {
    const searchInput = this.state.searchTerm;
    const promotionArray = Object.keys(this.state.promotionData).map(key => this.state.promotionData[key]);
    const filteredPromotionArray = promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
    this.setState({searchDisplay: filteredPromotionArray.sort((a,b) => b.lastUpdatedTime - a.lastUpdatedTime) });
  }


  onFormChange = (value, formField) => {
      this.setState(prevState => {return {  formData: { ...prevState.formData, [formField]: value }}})
  }


  savePromotion = () => {
    if (this.state.formData) {
        let id = this.getPromotionId();
        this.showAlertWithFormData();
        this.setState(prevState => {return {  promotionData: { ...prevState.promotionData, [id ]: this.getNewOrUpdatedPromotion(id)}}})
        this.setState({view: "Search"})
    }
  }


  getNewOrUpdatedPromotion = (id) => {

    let newPromotion = {
      id: null,
      devices: [],
      ventures: [],
      url: "",
      name: "",
      lastUpdatedTime: ""
    }

    newPromotion.id=id;
    newPromotion.name=this.state.formData.name;
    newPromotion.url=this.state.formData.url;
    newPromotion.devices=[...this.state.formData.devices.keys()]
    newPromotion.ventures=[...this.state.formData.ventures.keys()]
    newPromotion.lastUpdatedTime=Date.now()

    return newPromotion;
  }


  getPromotionId = () => {

    let uuid4 = require('uuid4');
    let id = null;
    if(this.state.selectedPromotionId){
      id = this.state.selectedPromotionId
    }

    if(this.state.formData.id){
        id = this.state.formData.id
    } else {
      id = uuid4();
    }

    return id;
  }


  showAlertWithFormData = () => {
    let savedData = `New Promotion Details:
                    Name:\t ${this.state.formData.name} 
                    Url:\t ${this.state.formData.url}
                    Devices:\t ${getTruthyList(this.state.formData.devices )}
                    Ventures:\t ${getTruthyList(this.state.formData.ventures)}`;
    alert(savedData);
  }


  resetFormData = () => {
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
  }


  onMenuClick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
    switch (selectedLink) {

      case "search__link":
        view = "Search";
        this.setState({searchTerm: ""}, () => {
          this.searchPromotions();
        })
        
        break;
      case "upload__link":
        view = "Upload";
        break;
      case "config__link":
        view = "PromotionBuilder";
        this.resetFormData();
        break;
      default:
        view = "Search";
    }

    this.setState({ view });

  }

  render() {

    const { view, formData, searchDisplay, searchTerm , selectedPromotionId} = this.state;

    return (
      <div className="App">
        <Banner subHeading={view} />
        <Container 
        view={view} 
        formData={formData} 
        selectedPromotionId={selectedPromotionId} 
        editBtnClick={this.editBtnClick} 
        reset={this.resetFormData} 
        savePromotion={this.savePromotion} 
        onFormChange={this.onFormChange} 
        handleInputChange={this.handleInputChange} 
        searchBtnClick={this.searchBtnClick} 
        searchDisplay={searchDisplay} 
        searchTerm={searchTerm} />
        <Menu menuData={menuData} clickHandler={this.onMenuClick} />
      </div>
    );
  }
}

export default App;

