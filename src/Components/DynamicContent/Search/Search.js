
import React from 'react';
import SearchResultContainer from './SearchResultContainer';
import SearchEntryContainer from './SearchEntryContainer';

const Search = (props) => {
    return(<div className="searchContainer">
        <SearchEntryContainer value={props.searchTerm} onChange={props.onInputChange} onSearchClick={props.onSearchClick}/>
        <SearchResultContainer result={props.searchDisplay} editBtnClick={props.editBtnClick}/>
    </div>)
}

export default Search;