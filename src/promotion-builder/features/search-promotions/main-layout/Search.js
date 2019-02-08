
import React from 'react';
import PropsTypes from 'prop-types';
import PropTypes from 'prop-types';

import SearchForm from '../../search-promotions/sub-components/searchform/SearchForm';
import SearchResult from '../../search-promotions/sub-components/searchresult/SearchResult';

import './search.css';

const Search = ({searchTerm, promotionData, onInputChange, onSearchClick, editBtnClick}) => {
    return(<div className="searchContainer">
        <SearchForm value={searchTerm} onChange={onInputChange} onSearchClick={onSearchClick}/>
        <SearchResult searchTerm={searchTerm} promotionData={promotionData}  editBtnClick={editBtnClick}/>
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