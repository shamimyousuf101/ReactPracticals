
import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import SearchResultContainer from './SearchResult/SearchResultContainer';
import SearchEntryContainer from './SearchEntry/SearchEntryContainer';

import './Search.css';

const Search = (props) => {
    return(<div className="searchContainer">
        <SearchEntryContainer value={props.searchTerm} onChange={props.onInputChange} onSearchClick={props.onSearchClick}/>
        <SearchResultContainer searchDisplay={props.searchDisplay} editBtnClick={props.editBtnClick}/>
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