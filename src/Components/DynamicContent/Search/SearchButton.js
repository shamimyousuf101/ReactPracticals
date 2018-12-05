import React from 'react';

const SearchButton = (props) => {

    return(
        <button className="search__button" type="submit" onClick={props.searchBtnClick}> 
            <img src="https://www.mockplus.com/images/search.png"/>
        </button> 
    )
}

export default SearchButton;