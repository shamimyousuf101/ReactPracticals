import React from "react";
import PropTypes from "prop-types";

import SingleResult from "./SingleResult";
import { searchPromotions } from "../../search";

const SearchResultContainer = ({ editBtnClick, searchTerm, promotionData }) => {
  const getSearchItems = (searchTerm, promotionData) => {
    const searchDisplay = searchPromotions(searchTerm, promotionData);

    if (searchDisplay.length > 0) {
      return searchDisplay.map((item, index) => (
        <SingleResult
          key={index}
          result={item}
          editBtnClick={editBtnClick}
        />
      ));
    }
  };

  return <ul>{getSearchItems(searchTerm, promotionData)}</ul>;
};

SearchResultContainer.propTypes = {
  editBtnClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  // promotionData:
};

export default SearchResultContainer;
