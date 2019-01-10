import React from 'react';
import PropsTypes from 'prop-types';

const SearchButton = ({onSearchClick}) => {

    return(
        <button className="search__button" type="submit" onClick={onSearchClick}> 
            <img src="/search.png" alt="search"/>
        </button> 
    )
}

SearchButton.propTypes = {
    onSearchClick: PropsTypes.func.isRequired
}

export default SearchButton;