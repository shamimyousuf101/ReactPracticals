import React, { Component } from 'react';

import Banner from './Home/Banner';
import Content from './Home/Content';
import Menu from './Menu/Menu';

import './Home/home.css';
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
