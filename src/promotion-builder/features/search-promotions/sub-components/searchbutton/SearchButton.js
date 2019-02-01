import React from 'react';
import PropsTypes from 'prop-types';

const SearchButton = ({searchPromotions}) => {

    const searchBtnClick = event => {
        event.preventDefault();
        searchPromotions();
      }

    return(
        <button className="search__button" type="submit" onClick={searchBtnClick}> 
            <img src="/search.png" alt="search"/>
        </button> 
    )
}

SearchButton.propTypes = {
    searchPromotions: PropsTypes.func.isRequired
}

export default SearchButton;
