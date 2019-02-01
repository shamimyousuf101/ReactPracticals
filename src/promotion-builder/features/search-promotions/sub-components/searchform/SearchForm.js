import React from 'react';
import PropsTypes from 'prop-types';

import SearchInputContainer from '../searchinput/SearchInputContainer'
import SearchButtonContainer from '../searchbutton/SearchButtonContainer';


const SearchForm = () => {

    return(
        <form className="search__form">
            <SearchInputContainer/>
            <SearchButtonContainer/>
        </form>
    )
}

export default SearchForm;