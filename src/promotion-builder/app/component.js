import React, { Component } from 'react';
import isEqual from 'lodash.isequal';

import Banner from '../common/banner/Banner';
import Content from '../common/content/Content';
import NavLinkContainer from '../common/navigation/container/navlink_container';

import './app.css';


class App extends Component {

  componentDidMount(){
    // this.searchPromotions();
  }

  componentDidUpdate(prevProps, prevState){
    // if(!isEqual(prevState.promotionData,this.props.promotionData)){
    //   this.searchPromotions();
    // }
    
  }

  render() {

    const { view, formData, searchDisplay, searchTerm , selectedPromotionId, menuClickHandler} = this.props;

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
        <NavLinkContainer/>
      </div>
    );
  }
}

export default App;

