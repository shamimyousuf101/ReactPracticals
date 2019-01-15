import React from 'react';
import PropsTypes from 'prop-types';

import SearchInput from '../searchinput/SearchInput'
import SearchButton from '../searchbutton/SearchButton';


const SearchForm = ({value, onChange, onSearchClick}) => {

    return(
        <form className="search__form">
            <SearchInput value={value} onChange={onChange}/>
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