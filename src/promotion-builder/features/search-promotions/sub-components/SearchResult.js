import React from "react";
import PropTypes from "prop-types";

import SingleResult from "./VisibleSingleResult";
import { searchPromotions } from "../../search";

const SearchResult = ({ searchTerm, promotionData }) => {
  const getSearchItems = (searchTerm, promotionData) => {
    const searchDisplay = searchPromotions(searchTerm, promotionData);

    if (searchDisplay.length > 0) {
      return searchDisplay.map((item, index) => (
        <SingleResult key={index} result={item} />
      ));
    }
  };

  return <ul>{getSearchItems(searchTerm, promotionData)}</ul>;
};

SearchResult.propTypes = {
  editBtnClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
  // promotionData:
};

export default SearchResult;
