import React, { Component} from "react";
import PropsTypes from "prop-types";

import "./search.css";
import SearchForm from "../sub-components/VisibleSearchForm";
import SearchResult from "../sub-components/VisibleSearchResult";
import { VIEW } from "../../../../constants/constants";

class Search extends Component {
  render() {
    const { view } = this.props;

    if (view === VIEW.SEARCH) {
      return (
        <section className="searchContainer">
          <SearchForm />
          <SearchResult />
        </section>
      );
    }
    return null;
  }
}

Search.propType = {
  view: PropsTypes.string
};

export default Search;
