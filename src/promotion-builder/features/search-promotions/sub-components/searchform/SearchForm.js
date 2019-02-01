import React from 'react';
import PropsTypes from 'prop-types';

import SearchInputContainer from '../searchinput/SearchInputContainer'
import SearchButton from '../searchbutton/SearchButton';


const SearchForm = ({onSearchClick}) => {

    return(
        <form className="search__form">
            <SearchInputContainer/>
            <SearchButton onSearchClick={onSearchClick}/>
        </form>
    )
}


SearchForm.propTypes = {
    value: PropsTypes.string,
    onChange: PropsTypes.func.isRequired,
    onSearchClick: PropsTypes.func.isRequired
}


export default SearchForm;