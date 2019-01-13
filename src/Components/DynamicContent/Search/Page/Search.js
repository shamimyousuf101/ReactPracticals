
import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import SearchForm from '../Layout/Form/SearchForm';
import SearchResult from '../Layout/Result/SearchResult';

import './Search.css';

const Search = ({searchTerm, onInputChange, onSearchClick, searchDisplay, editBtnClick}) => {
    return(<div className="searchContainer">
        <SearchForm value={searchTerm} onChange={onInputChange} onSearchClick={onSearchClick}/>
        <SearchResult searchDisplay={searchDisplay} editBtnClick={editBtnClick}/>
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