// import React, { Component } from 'react';
import { connect } from 'react-redux';
// import isEqual from 'lodash.isequal';

// import Banner from '../common/banner/Banner';
// import Content from '../common/content/Content';
// import Navigation from '../common/navigation/nav/component/Navigation';

// import { navigationData } from '../common/navigation/navigationData';

// import { promotionData } from '../../domain/promotionData';
// import { getTruthyList , arrayToMap } from '../../utils/utils'


import AppComponent from './component'

import './app.css';

let uuid4 = require('uuid4');



// export const handleInputChange = event => 
//   {
//     // this.setState({ searchTerm: event.target.value });
//   }


  // export const searchBtnClick = event => {
  //   // event.preventDefault();
  //   // this.searchPromotions();
  // }


  // export const searchPromotions = () => {
    // const searchInput = this.state.searchTerm;
    // const promotionArray = Object.keys(this.props.promotionData).map(key => this.props.promotionData[key]);
    // const filteredPromotionArray = promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
    // this.setState({searchDisplay: filteredPromotionArray.sort((a,b) => b.lastUpdatedTime - a.lastUpdatedTime) });
  // }


  export const onFormChange = (value, formField) => {
      // this.setState(prevState => {return {  formData: { ...prevState.formData, [formField]: value }}})
  }


  export const savePromotion = () => {
    // if (this.props.formData) {
    //     let id = this.getPromotionId();
    //     this.showAlertWithFormData();
    //     // this.setState(prevState => {return {  promotionData: { ...prevState.promotionData, [id ]: this.getNewOrUpdatedPromotion(id)}}})
    //     // this.setState({view: "Search"})
    // }
  }


  export const getNewOrUpdatedPromotion = (id) => {
    // const {
    //   formData: {
    //     name = '',
    //     url = '',
    //     devices = new Map(),
    //     ventures = new Map()
    //   }
    // } = this.props;

    // return {
    //   id,
    //   name,
    //   url,
    //   devices: [...devices.keys()],
    //   ventures: [...ventures.keys()],
    //   lastUpdatedTime: Date.now()
    // };
  };


  export const getPromotionId = () => {
    // const {
    //   selectedPromotionId,
    //   formData: {
    //     id: formDataId
    //   }
    // } = this.props;

    // return formDataId || selectedPromotionId || uuid4();
  }


  export const showAlertWithFormData = () => {
    // let savedData = `New Promotion Details:
    //                 Name:\t ${this.props.formData.name} 
    //                 Url:\t ${this.props.formData.url}
    //                 Devices:\t ${getTruthyList(this.props.formData.devices )}
    //                 Ventures:\t ${getTruthyList(this.props.formData.ventures)}`;
    // alert(savedData);
  }


  export const resetFormData = () => {
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


  export const editBtnClick = (id) => {
    // this.setState({
    //   selectedPromotionId: id,
    //   view: "SavePromotion",
    //   formData: this.setFormDataToSelectedPromotion(id)
    // });
  }


  export const setFormDataToSelectedPromotion = (selectedPromotionId) => {
    // const selectedPromotion = this.props.searchDisplay.find(item => item.id === selectedPromotionId);
    // let selectedPromotionFormData = {};
    // selectedPromotionFormData.devices = arrayToMap(selectedPromotion.devices)
    // selectedPromotionFormData.ventures = arrayToMap(selectedPromotion.ventures)
    // selectedPromotionFormData.url = selectedPromotion.url
    // selectedPromotionFormData.id = selectedPromotion.id
    // selectedPromotionFormData.name = selectedPromotion.name
    // return selectedPromotionFormData;
  }

  
  export const mapStateToProps = (state) => {
    return {
        view : state.view
    }
}

export const mapDispatchToProps = {
    // menuClickHandler
}

export const AppContainer =  connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default AppContainer;

