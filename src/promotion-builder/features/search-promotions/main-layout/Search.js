import React from "react";
import PropsTypes from "prop-types";

import "./search.css";
import SearchForm from "../sub-components/VisibleSearchForm";
import SearchResult from "../sub-components/VisibleSearchResult";
import { VIEW } from "../../../../constants/constants";

class Search extends React.Component {
  state = {
    searchTerm: ""
  };

  componentDidUpdate({ view }) {
    if (view !== this.props.view) {
      this.setState({ searchTerm: "" });
    }
  }

  handleInputChange = event =>
    this.setState({ searchTerm: event.target.value });

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
  view: PropsTypes.string,
  // promotionData: React.PropTypes.shape({
  //   devices: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  //   id: React.PropTypes.string.isRequired,
  //   lastUpdatedTime: React.PropTypes.string.isRequired,
  //   name: React.PropTypes.string.isRequired,
  //   url: React.PropTypes.string.isRequired,
  //   ventures: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired
  // }),
  editBtnClick: PropsTypes.func.isRequired
};

export default Search;
