
import React from 'react';
import PropsTypes from 'prop-types';

import SearchForm from '../../search-promotions/sub-components/searchform/SearchForm';
import SearchResult from '../../search-promotions/sub-components/searchresult/SearchResult';

import './search.css';

const Search = ({searchTerm, promotionData, onInputChange, editBtnClick}) => {
    return(<div className="searchContainer">
        <SearchForm value={searchTerm} onChange={onInputChange}/>
        <SearchResult searchTerm={searchTerm} promotionData={promotionData}  editBtnClick={editBtnClick}/>
    </div>)
}

Search.propType = {
    searchTerm: PropsTypes.string,
    onInputChange: PropsTypes.func.isRequired,
    editBtnClick: PropsTypes.func.isRequired,
}

export default Search;