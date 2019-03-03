import React from "react";
import PropsTypes from "prop-types";

import "./search.css";
import SearchForm from "../sub-components/SearchForm";
import SearchResult from "../sub-components/SearchResult";
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

  handleInputChange = event => this.setState({ searchTerm: event.target.value });

  render() {
    const { promotionData, editBtnClick, view } = this.props;
    const { searchTerm } = this.state;

    if (view === VIEW.SEARCH) {
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
