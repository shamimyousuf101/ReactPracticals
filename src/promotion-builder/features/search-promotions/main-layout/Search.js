import React, { Component } from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./search.css";
import SearchForm from "../sub-components/VisibleSearchForm";
import SearchResult from "../sub-components/VisibleSearchResult";

const b = bem("promotion");

class Search extends Component {
  render() {
      return (
        <main className={b("dynamic__content")}>
          <section className="searchContainer">
            <SearchForm />
            <SearchResult />
          </section>
        </main>
      );
  }
}

Search.propType = {
  view: PropsTypes.string
};

export default Search;
