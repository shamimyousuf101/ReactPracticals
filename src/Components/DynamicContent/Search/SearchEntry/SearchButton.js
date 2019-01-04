import React from 'react';
import PropsTypes from 'prop-types';

const SearchButton = (props) => {

    return(
        <button className="search__button" type="submit" onClick={props.onSearchClick}> 
            <img src="/search.png" alt="search"/>
        </button> 
    )
}

SearchButton.propTypes = {
    onSearchClick: PropsTypes.func.isRequired
}

export default SearchButton;