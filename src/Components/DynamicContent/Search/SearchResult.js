import React from 'react';
import PromotionTitle from './PromotionTitle';
import SingleSearchResult from './SingleSearchResult';

const SearchResult = (props) => {

    return(
           <li><SingleSearchResult result={props.result}/></li> 
    )
}

export default SearchResult;