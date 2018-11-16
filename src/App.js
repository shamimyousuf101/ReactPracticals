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
      text: "Upload",
      href: "/Upload"
    }, 
    {
      className: "configLink",
      text: "Config",
      href: "/Config"
    }, 
  ]

  onclick = (event) => {
    const selectedLink = event.currentTarget.className;
    let view;
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
