
import React from 'react';
import PropsTypes from 'prop-types';

import SearchResultContainer from './SearchResultContainer';
import SearchEntryContainer from './SearchEntryContainer';

const Search = (props) => {
    return(<div className="searchContainer">
        <SearchEntryContainer value={props.searchTerm} onChange={props.onInputChange} onSearchClick={props.onSearchClick}/>
        <SearchResultContainer result={props.searchDisplay} editBtnClick={props.editBtnClick}/>
    </div>)
}

Search.propType = {
    searchTerm: PropsTypes.string,
    onInputChange: PropsTypes.func.isRequired,
    onSearchClick: PropsTypes.func.isRequired,
    searchDisplay: PropsTypes.object,
    editBtnClick: PropsTypes.func.isRequired
}

export default Search;