
import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import SearchResultContainer from './SearchResult/SearchResultContainer';
import SearchEntryContainer from './SearchEntry/SearchEntryContainer';

import './Search.css';

const Search = ({searchTerm, onInputChange, onSearchClick, searchDisplay, editBtnClick}) => {
    return(<div className="searchContainer">
        <SearchEntryContainer value={searchTerm} onChange={onInputChange} onSearchClick={onSearchClick}/>
        <SearchResultContainer searchDisplay={searchDisplay} editBtnClick={editBtnClick}/>
    </div>)
}

Search.propType = {
    searchTerm: PropsTypes.string,
    onInputChange: PropsTypes.func.isRequired,
    onSearchClick: PropsTypes.func.isRequired,
    editBtnClick: PropsTypes.func.isRequired,
    searchDisplay: PropTypes.arrayOf(PropTypes.shape({
        devices: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        ventures: PropTypes.arrayOf(PropTypes.string)
      }))
}

export default Search;