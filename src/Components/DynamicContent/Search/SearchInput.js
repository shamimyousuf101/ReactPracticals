import React from 'react';

const SearchInput = (props) => {

    return(
        <input className="search__input" type="text" placeholder="Search" value={props.searchTerm} onChange={props.handleInputChange}/>
    )
}

export default SearchInput;