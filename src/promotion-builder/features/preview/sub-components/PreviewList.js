import React from "react";
import PropTypes from "prop-types";

import SingleResult from "../../search-promotions/sub-components/VisibleSearchResult";
import SinglePreviewItem from "./SinglePreviewItem"
import { sortPromotions } from "../../search";

const PreviewList = ({ promotionData }) => {
    
    const getSearchItems = (promotionData) => {
        
        const searchDisplay = sortPromotions(promotionData);
        if (searchDisplay.length > 0) {
            return searchDisplay.map((item, index) => (
                // <SingleResult key={index} result={item} />
                <SinglePreviewItem key={index} result={item} ></SinglePreviewItem>
            ));
        }
        
    };

  return <ul>{getSearchItems( promotionData)}</ul>;
};


export default PreviewList;
