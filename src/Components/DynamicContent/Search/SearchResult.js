import React from 'react';
import PromotionTitle from './PromotionTitle';
import SingleSearchResult from './SingleSearchResult';

const SearchResult = (props) => {

    return(
        <li>
            <SingleSearchResult key={props.result.key} result={props.result.result}/>
        </li>
    )
}

export default SearchResult;