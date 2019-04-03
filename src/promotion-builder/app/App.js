import React, { Component } from "react";
import bem from "bem-cn";

import "./app.css";
import Banner from "../common/banner/VisibleBanner";
import Navigation from "../common/navigation/VisibleNavigation";
import Search from "../features/search-promotions/main-layout/VisibleSearch";
import Overlay from "../common/overlay/VisibleOverlay";

const b = bem("promotion");

class App extends Component {
  render() {
    return (
      <div className={b()}>
        <Banner />
        <Navigation />
        <Search />
        <Overlay />
      </div>
    );
  }
}

export default App;
