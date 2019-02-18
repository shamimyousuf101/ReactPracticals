import React from "react";
import PropsTypes from "prop-types";

import SearchForm from "../sub-components/SearchForm";
import SearchResult from "../sub-components/SearchResult";
import { VIEW } from "../../../../constants/constants";

import "./search.css";

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
    const { promotionData, editBtnClick } = this.props;
    const { searchTerm } = this.state;

    if (this.props.view === VIEW.SEARCH) {
      return (
        <section className="searchContainer">
          <SearchForm value={searchTerm} onChange={this.handleInputChange} />
          <SearchResult
            searchTerm={searchTerm}
            promotionData={promotionData}
            editBtnClick={editBtnClick}
          />
        </section>
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
