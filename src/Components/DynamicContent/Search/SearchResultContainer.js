
import React from 'react';
import SingleSearchResult from './SingleSearchResult';

const SearchResultContainer = (props) => {

    return(
        <ul>
            <SingleSearchResult result={props.result}/>
        </ul>
    )

}

export default SearchResultContainer;
