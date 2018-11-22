import React, { Component } from 'react';

import Banner from './Components/Header/Banner';
import Content from './Components/DynamicContent/Container';
import Menu from './Components/Menu/Menu';

import './home.css';
import './App.css';

class App extends Component {

  state = { 
    view: "Search"
  };
  
  menuData = [
    {
      className: "searchLink",
      text: "Search"
    }, 
    {
      className: "uploadLink",
      text: "Asset Manager"
    }, 
    {
      className: "configLink",
      text: "Create / Edit"
    }, 
  ]

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
        <Content view={view}/>
        <Menu menuData={this.menuData} clickHandler={this.onclick}/>       
      </div>
    );
  }
}

export default App;
