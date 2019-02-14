import React from "react";
import PropsTypes from "prop-types";

import SearchForm from "../../search-promotions/sub-components/searchform/SearchForm";
import SearchResult from "../../search-promotions/sub-components/searchresult/SearchResult";

import "./search.css";

class Search extends React.Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = event =>
    this.setState({ searchTerm: event.target.value });

  render() {
    if (this.props.view === "Search") {
      return (
        <div className="searchContainer">
          <SearchForm
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
          <SearchResult
            searchTerm={this.state.searchTerm}
            promotionData={this.props.promotionData}
            editBtnClick={this.props.editBtnClick}
          />
        </div>
      );
    }
    return null;
  }
}

Search.propType = {
  searchTerm: PropsTypes.string,
  onInputChange: PropsTypes.func.isRequired,
  editBtnClick: PropsTypes.func.isRequired
};

export default Search;
