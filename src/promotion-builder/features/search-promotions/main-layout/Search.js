import React from "react";
import PropsTypes from "prop-types";
import bem from "bem-cn";

import "./search.css";
import SearchForm from "../sub-components/VisibleSearchForm";
import SearchResult from "../sub-components/VisibleSearchResult";
import { VIEW } from "../../../../constants/constants";
const b = bem("promotion");

class Search extends React.Component {
  render() {
    const { view } = this.props;

    if (view === VIEW.SEARCH) {
      return (
        <main className={b("dynamic__content")}>
        <section className="searchContainer">
          <SearchForm />
          <SearchResult />
        </section>
        </main>
      );
    }
    return null;
  }
}

Search.propType = {
  view: PropsTypes.string
};

export default Search;
