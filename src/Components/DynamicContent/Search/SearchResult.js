import React from 'react';
import PromotionTitle from './PromotionTitle';
import SingleSearchResult from './SingleSearchResult';

const SearchResult = (props) => {

    return(
           <div className="SearchResult"><SingleSearchResult result={props.result}/></div>
    )
}

export default SearchResult;