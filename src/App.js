import React, { Component } from 'react';

import Banner from './Components/Header/Banner';
import Container from './Components/DynamicContent/Container';
import Menu from './Components/Menu/Menu';
import {menuData} from './Components/Menu/config';

import './home.css';
import './App.css';


class App extends Component {

  state = { 
    view: "Search"
  };
  
  onclick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
    switch(selectedLink){

      case "searchLink":
          view = "Search";          
          break;
      case "uploadLink":
          view = "Upload";
          break;
      case "configLink":
          view = "Config";
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
