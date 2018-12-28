import React from 'react';

const SearchButton = (props) => {

    return(
        <button className="search__button" type="submit" onClick={props.onSearchClick}> 
            <img src="/search.png" alt="search"/>
        </button> 
    )
}

export default SearchButton;