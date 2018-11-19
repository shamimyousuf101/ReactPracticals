import React, { Component } from 'react';

import Banner from './Home/Banner';
import Content from './Home/Content';
import Menu from './Menu/Menu';

import './Home/home.css';
import './App.css';

class App extends Component {

  state = { 
    view: "search"
  };
  
  menuData = [
    {
      className: "searchLink",
      text: "Search",
      href: "/Search"
    }, 
    {
      className: "uploadLink",
      text: "Asset Manager",
      href: "/Upload"
    }, 
    {
      className: "configLink",
      text: "Create / Edit",
      href: "/Config"
    }, 
  ]

  onclick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
    const searchBox = document.querySelector(".searchBox");
    const uploadBox = document.querySelector(".uploadBox");
    const configBox = document.querySelector(".configBox");

    switch(selectedLink){

      case "searchLink":
          view = "Search";          
          searchBox.style.display="block";
          uploadBox.style.display="none";
          configBox.style.display="none";
          break;
      case "uploadLink":
          view = "Asset Upload";
          searchBox.style.display="none";
          uploadBox.style.display="block";
          configBox.style.display="none";
          break;
      case "configLink":
          view = "Create or Edit";
          searchBox.style.display="none";
          uploadBox.style.display="none";
          configBox.style.display="block";
          break;
      default:
          view = "Nothing is selected"

    }

    this.setState({view});

  }



  
  render() {

    const { view } = this.state;
    return (
      <div className="App">
        <Banner subHeading={view}/>
        <Content />
        <Menu menuData={this.menuData} clickHandler={this.onclick}/>       
      </div>
    );
  }
}

export default App;
