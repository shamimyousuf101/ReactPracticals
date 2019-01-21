import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';

import Banner from '../common/banner/Banner';
import Content from '../common/content/Content';
import Navigation from '../common/navigation/nav/component/Navigation';

import { navigationData } from '../common/navigation/navigationData';

import { promotionData } from '../../domain/promotionData';
import { getTruthyList , arrayToMap } from '../../utils/utils'

import './app.css';

let uuid4 = require('uuid4');

class App extends Component {

  // state = {
  //   view: "Search",
  //   selectedPromotionId: null,
  //   formData: {
  //     id: 0,
  //     devices: new Map(),
  //     ventures: new Map(),
  //     url: "",
  //     name: "",
  //     lastUpdatedTime: ""
  //   },
  //   searchTerm: "",
  //   searchDisplay: [],
  //   promotionData: promotionData
  // };

  

  componentDidMount(){
    this.searchPromotions();
  }


  componentDidUpdate(prevProps, prevState){
    if(!isEqual(prevState.promotionData,this.props.promotionData)){
      this.searchPromotions();
    }
    
  }

  handleInputChange = event => 
  {
    // this.setState({ searchTerm: event.target.value });
  }


  searchBtnClick = event => {
    event.preventDefault();
    this.searchPromotions();
  }


  searchPromotions = () => {
    // const searchInput = this.state.searchTerm;
    // const promotionArray = Object.keys(this.props.promotionData).map(key => this.props.promotionData[key]);
    // const filteredPromotionArray = promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
    // this.setState({searchDisplay: filteredPromotionArray.sort((a,b) => b.lastUpdatedTime - a.lastUpdatedTime) });
  }


  onFormChange = (value, formField) => {
      // this.setState(prevState => {return {  formData: { ...prevState.formData, [formField]: value }}})
  }


  savePromotion = () => {
    if (this.props.formData) {
        let id = this.getPromotionId();
        this.showAlertWithFormData();
        // this.setState(prevState => {return {  promotionData: { ...prevState.promotionData, [id ]: this.getNewOrUpdatedPromotion(id)}}})
        // this.setState({view: "Search"})
    }
  }


  getNewOrUpdatedPromotion = (id) => {
    const {
      formData: {
        name = '',
        url = '',
        devices = new Map(),
        ventures = new Map()
      }
    } = this.props;

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
      formData: {
        id: formDataId
      }
    } = this.props;

    return formDataId || selectedPromotionId || uuid4();
  }


  showAlertWithFormData = () => {
    let savedData = `New Promotion Details:
                    Name:\t ${this.props.formData.name} 
                    Url:\t ${this.props.formData.url}
                    Devices:\t ${getTruthyList(this.props.formData.devices )}
                    Ventures:\t ${getTruthyList(this.props.formData.ventures)}`;
    alert(savedData);
  }


  resetFormData = () => {
    // this.setState({
    //   selectedPromotionId: null,
    //   formData: {
    //     devices: new Map(),
    //     ventures: new Map(),
    //     url: "",
    //     name: ""
    //   },
    // });
  }


  editBtnClick = (id) => {
    // this.setState({
    //   selectedPromotionId: id,
    //   view: "SavePromotion",
    //   formData: this.setFormDataToSelectedPromotion(id)
    // });
  }


  setFormDataToSelectedPromotion = (selectedPromotionId) => {
    const selectedPromotion = this.props.searchDisplay.find(item => item.id === selectedPromotionId);
    let selectedPromotionFormData = {};
    selectedPromotionFormData.devices = arrayToMap(selectedPromotion.devices)
    selectedPromotionFormData.ventures = arrayToMap(selectedPromotion.ventures)
    selectedPromotionFormData.url = selectedPromotion.url
    selectedPromotionFormData.id = selectedPromotion.id
    selectedPromotionFormData.name = selectedPromotion.name
    return selectedPromotionFormData;
  }


  // onMenuClick = (event) => {
  //   const selectedLink = event.currentTarget.className;
  //   let view;
  //   switch (selectedLink) {

  //     case "search__link":
  //       view = "Search";
  //       // this.setState({searchTerm: ""}, () => {
  //       //   this.searchPromotions();
  //       // })
        
  //       break;
  //     case "upload__link":
  //       view = "AssetManager";
  //       break;
  //     case "config__link":
  //       view = "SavePromotion";
  //       this.resetFormData();
  //       break;
  //     default:
  //       view = "Search";
  //   }

  //   // this.setState({ view });

  // }

  render() {

    const { view, formData, searchDisplay, searchTerm , selectedPromotionId} = this.props;

    return (
      <div className="App">
        <Banner subHeading={view} />
        {/* <Content 
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
        searchTerm={searchTerm} /> */}
        <Navigation />
      </div>
    );
  }
}

export default App;

