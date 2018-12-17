import React, { Component } from 'react';

import Banner from './Components/Header/Banner';
import Container from './Components/DynamicContent/Container';
import Menu from './Components/Menu/Menu';
import {menuData} from './Components/Menu/menuData';

import './Components/Header/Banner.css';
import './Components/Menu/Menu.css';
import './Components/DynamicContent/Search/Search.css';
import './Components/DynamicContent/Asset/AssetManager.css';
import './Components/DynamicContent/PromotionBuilder/PromotionBuilder.css';
import './Components/DynamicContent/Container.css';
import './App.css';


class App extends Component {

  state = { 
    view: "Search"
  };
  
  onclick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
    switch(selectedLink){

      case "search__link":
          view = "Search";          
          break;
      case "upload__link":
          view = "Upload";
          break;
      case "config__link":
          view = "PromotionBuilder";
          break;
      default:
          view = "Search";

    }

    this.setState({view});

  }
  
  render() {

    const { view } = this.state;
    return (
      <div className="App">
        <Banner subHeading={view}/>
        <Container view={view}/>
        <Menu menuData={menuData} clickHandler={this.onclick}/>       
      </div>
    );
  }
}

export default App;

