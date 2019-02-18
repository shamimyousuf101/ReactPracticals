import React from "react";
import PropTypes from "prop-types";
import PropsTypes from "prop-types";

import SingleResult from "./SingleResult";
import { searchPromotions } from "../../../../utils/search";

const SearchResultContainer = ({ editBtnClick, searchTerm, promotionData }) => {
  const getSearchItems = (searchTerm, promotionData) => {
    const searchDisplay = searchPromotions(searchTerm, promotionData);

    if (searchDisplay.length > 0) {
      return searchDisplay.map((item, index) => {
        return (
          <SingleResult
            key={index}
            id={item.id}
            result={item}
            editBtnClick={editBtnClick}
          />
        );
      });
    }
  };

  return <div>{getSearchItems(searchTerm, promotionData)}</div>;
};

SearchResultContainer.propTypes = {
  editBtnClick: PropsTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default SearchResultContainer;
